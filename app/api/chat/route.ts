import {
  isSeedWelcomeMessage,
  MAX_API_HISTORY_MESSAGES,
  SYSTEM_PROMPT,
  VOICE_CONVERSATION_ADDENDUM,
} from '@/lib/system-prompt'
import { GoogleGenAI } from '@google/genai'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NextResponse } from 'next/server'

type ChatMessagePayload = {
  role: 'user' | 'assistant'
  content: string
}

type ChatRequestBody = {
  messages?: ChatMessagePayload[]
  mode?: 'text' | 'voice'
}

type GeminiContent = {
  role: 'user' | 'model'
  parts: Array<{ text: string }>
}

const MAX_CONTENT_LENGTH = 2000
const TRANSIENT_ATTEMPTS = 2
const REQUEST_TIMEOUT_MS = 12_000
const FIRST_TOKEN_TIMEOUT_MS = 8_000
const TEXT_MAX_TOKENS = 700
const VOICE_MAX_TOKENS = 280
const DEFAULT_MODEL = 'gemini-3.5-flash-lite'
const DEFAULT_FALLBACKS = ['gemini-flash-lite-latest', 'gemini-3.8-flash']

function sanitizeMessages(messages: unknown): ChatMessagePayload[] {
  if (!Array.isArray(messages)) {
    return []
  }

  return messages
    .filter(
      (message): message is ChatMessagePayload =>
        typeof message === 'object' &&
        message !== null &&
        (message.role === 'user' || message.role === 'assistant') &&
        typeof message.content === 'string',
    )
    .map((message) => ({
      role: message.role,
      content: message.content.trim().slice(0, MAX_CONTENT_LENGTH),
    }))
    .filter((message) => message.content.length > 0)
    .filter((message) => !isSeedWelcomeMessage(message.content))
    .slice(-MAX_API_HISTORY_MESSAGES)
}

function toGeminiContents(messages: ChatMessagePayload[]): GeminiContent[] {
  const contents: GeminiContent[] = []

  for (const message of messages) {
    const role = message.role === 'assistant' ? 'model' : 'user'
    const last = contents.at(-1)

    if (last?.role === role) {
      last.parts[0].text = `${last.parts[0].text}\n\n${message.content}`
      continue
    }

    contents.push({
      role,
      parts: [{ text: message.content }],
    })
  }

  return contents
}

function getErrorDetail(error: unknown) {
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String((error as { message: unknown }).message)
  }
  return 'Unknown Gemini error'
}

function isTransientGeminiError(error: unknown) {
  const lowered = getErrorDetail(error).toLowerCase()
  return (
    lowered.includes('429') ||
    lowered.includes('503') ||
    lowered.includes('unavailable') ||
    lowered.includes('high demand') ||
    lowered.includes('rate limit') ||
    lowered.includes('quota') ||
    lowered.includes('resource_exhausted') ||
    lowered.includes('temporarily') ||
    lowered.includes('overloaded') ||
    lowered.includes('capacity') ||
    lowered.includes('try again later') ||
    lowered.includes('aborted') ||
    lowered.includes('abort') ||
    lowered.includes('timeout') ||
    lowered.includes('timed out')
  )
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function readEnvValue(key: string) {
  const envPath = join(process.cwd(), '.env.local')

  if (existsSync(envPath)) {
    const match = readFileSync(envPath, 'utf8')
      .split(/\r?\n/)
      .find((line) => line.startsWith(`${key}=`) && !line.trimStart().startsWith('#'))

    if (match) {
      const value = match.slice(key.length + 1).trim().replace(/^["']|["']$/g, '')
      if (value) return value
    }
  }

  return process.env[key]?.trim() ?? ''
}

function getConfiguredModels() {
  const primary = readEnvValue('GEMINI_MODEL') || DEFAULT_MODEL
  const configuredFallbacks = readEnvValue('GEMINI_FALLBACK_MODELS')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
  const fallbacks = configuredFallbacks.length > 0 ? configuredFallbacks : DEFAULT_FALLBACKS

  return [...new Set([primary, ...fallbacks].filter(Boolean))]
}

export async function POST(request: Request) {
  const apiKey = readEnvValue('GEMINI_API_KEY')
  const models = getConfiguredModels()

  if (!apiKey) {
    return NextResponse.json({ error: 'AI assistant is not configured.' }, { status: 500 })
  }

  if (models.length === 0) {
    return NextResponse.json({ error: 'AI model is not configured.' }, { status: 500 })
  }

  let body: ChatRequestBody

  try {
    body = (await request.json()) as ChatRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const messages = sanitizeMessages(body.messages)
  const mode = body.mode === 'voice' ? 'voice' : 'text'
  const systemContent =
    mode === 'voice' ? `${SYSTEM_PROMPT}\n${VOICE_CONVERSATION_ADDENDUM}` : SYSTEM_PROMPT

  if (messages.length === 0 || messages.at(-1)?.role !== 'user') {
    return NextResponse.json({ error: 'A user message is required.' }, { status: 400 })
  }

  const contents = toGeminiContents(messages)

  if (contents.length === 0 || contents.at(-1)?.role !== 'user') {
    return NextResponse.json({ error: 'A user message is required.' }, { status: 400 })
  }

  const ai = new GoogleGenAI({ apiKey })

  const createChatStream = (selectedModel: string, abortSignal: AbortSignal) =>
    ai.models.generateContentStream({
      model: selectedModel,
      contents,
      config: {
        systemInstruction: systemContent,
        temperature: 0.6,
        maxOutputTokens: mode === 'voice' ? VOICE_MAX_TOKENS : TEXT_MAX_TOKENS,
        abortSignal,
        httpOptions: {
          timeout: REQUEST_TIMEOUT_MS,
        },
      },
    })

  const toSseResponse = (source: ReadableStream<Uint8Array>) =>
    new Response(source, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
        'X-Accel-Buffering': 'no',
      },
    })

  try {
    type GeminiStream = Awaited<ReturnType<typeof createChatStream>>

    let stream: GeminiStream | undefined
    let requestController: AbortController | undefined
    let streamDeadlineTimer: ReturnType<typeof setTimeout> | undefined
    let lastError: unknown

    for (const selectedModel of models) {
      for (let attempt = 1; attempt <= TRANSIENT_ATTEMPTS; attempt += 1) {
        const controller = new AbortController()
        const connectTimer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

        try {
          stream = await createChatStream(selectedModel, controller.signal)
          requestController = controller
          lastError = undefined
          clearTimeout(connectTimer)
          streamDeadlineTimer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
          break
        } catch (error) {
          clearTimeout(connectTimer)
          lastError = error
          if (!isTransientGeminiError(error) || attempt === TRANSIENT_ATTEMPTS) {
            break
          }
          await wait(300 * attempt)
        }
      }

      if (stream) break
    }

    if (!stream || !requestController) {
      throw lastError ?? new Error('Unable to generate a response right now.')
    }

    const activeStream = stream
    const activeController = requestController
    const activeDeadlineTimer = streamDeadlineTimer

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        let gotFirstToken = false
        const firstTokenTimer = setTimeout(() => {
          if (!gotFirstToken) {
            activeController.abort()
          }
        }, FIRST_TOKEN_TIMEOUT_MS)

        try {
          for await (const chunk of activeStream) {
            const content = chunk.text
            if (content) {
              gotFirstToken = true
              clearTimeout(firstTokenTimer)
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
            }
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          controller.error(error)
        } finally {
          clearTimeout(firstTokenTimer)
          if (activeDeadlineTimer) clearTimeout(activeDeadlineTimer)
        }
      },
    })

    return toSseResponse(readable)
  } catch (error) {
    const detail = getErrorDetail(error)
    console.error('[chat] Gemini request failed:', detail)

    const errorMessage = isTransientGeminiError(error)
      ? 'The AI assistant is temporarily busy. Please try again in a moment.'
      : 'Unable to generate a response right now. Please try again.'

    return NextResponse.json({ error: errorMessage }, { status: 502 })
  }
}
