import { SYSTEM_PROMPT, VOICE_CONVERSATION_ADDENDUM } from '@/lib/system-prompt'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import OpenAI from 'openai'
import { NextResponse } from 'next/server'

type ChatMessagePayload = {
  role: 'user' | 'assistant'
  content: string
}

type ChatRequestBody = {
  messages?: ChatMessagePayload[]
  mode?: 'text' | 'voice'
}

const MAX_MESSAGES = 40
const MAX_CONTENT_LENGTH = 4000
const RATE_LIMIT_ATTEMPTS = 2

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
    .slice(-MAX_MESSAGES)
}

function getErrorDetail(error: unknown) {
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String((error as { message: unknown }).message)
  }
  return 'Unknown OpenRouter error'
}

function isRateLimitError(error: unknown) {
  const lowered = getErrorDetail(error).toLowerCase()
  return (
    lowered.includes('429') ||
    lowered.includes('rate limit') ||
    lowered.includes('quota') ||
    lowered.includes('credits') ||
    lowered.includes('temporarily') ||
    lowered.includes('overloaded') ||
    lowered.includes('capacity')
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

function getSiteReferer() {
  const url = readEnvValue('NEXT_PUBLIC_SITE_URL')
  if (!url || /yourdomain|example\.com|localhost|127\.0\.0\.1/i.test(url)) {
    return 'https://wowsuperagency.com'
  }
  return url
}

function getConfiguredModels() {
  const primary = readEnvValue('OPENROUTER_MODEL')
  const extra = readEnvValue('OPENROUTER_FALLBACK_MODELS')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)

  return [...new Set([primary, ...extra].filter(Boolean))]
}

export async function POST(request: Request) {
  const apiKey = readEnvValue('OPENROUTER_API_KEY')
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

  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey,
    timeout: 12_000,
    defaultHeaders: {
      'HTTP-Referer': getSiteReferer(),
      'X-Title': 'WOW Superagency AI Assistant',
    },
  })

  const completionOptions = {
    messages: [{ role: 'system' as const, content: systemContent }, ...messages],
    temperature: 0.7,
    max_tokens: 2048,
    provider: {
      allow_fallbacks: true,
    },
  }

  const createChatStream = (selectedModel: string) =>
    openai.chat.completions.create({
      ...completionOptions,
      model: selectedModel,
      stream: true,
    } as Parameters<typeof openai.chat.completions.create>[0])

  const createChatCompletion = (selectedModel: string) =>
    openai.chat.completions.create({
      ...completionOptions,
      model: selectedModel,
      stream: false,
    } as Parameters<typeof openai.chat.completions.create>[0])

  const toSseResponse = (source: ReadableStream<Uint8Array>) =>
    new Response(source, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })

  try {
    let stream: Awaited<ReturnType<typeof createChatStream>> | undefined
    let lastError: unknown

    for (const selectedModel of models) {
      for (let attempt = 1; attempt <= RATE_LIMIT_ATTEMPTS; attempt += 1) {
        try {
          stream = await createChatStream(selectedModel)
          lastError = undefined
          break
        } catch (error) {
          lastError = error
          if (!isRateLimitError(error) || attempt === RATE_LIMIT_ATTEMPTS) {
            break
          }
          await wait(500 * 2 ** (attempt - 1))
        }
      }

      if (stream) break
    }

    const encoder = new TextEncoder()

    if (stream) {
      const readable = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              const content = chunk.choices[0]?.delta?.content
              if (content) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
              }
            }

            controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            controller.close()
          } catch (error) {
            controller.error(error)
          }
        },
      })

      return toSseResponse(readable)
    }

    for (const selectedModel of models) {
      try {
        const completion = await createChatCompletion(selectedModel)
        const content = completion.choices[0]?.message?.content?.trim() ?? ''

        if (!content) {
          continue
        }

        const readable = new ReadableStream({
          start(controller) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
            controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            controller.close()
          },
        })

        return toSseResponse(readable)
      } catch (error) {
        lastError = error
      }
    }

    throw lastError
  } catch (error) {
    const detail = getErrorDetail(error)
    console.error('[chat] OpenRouter request failed:', detail)

    const errorMessage = isRateLimitError(error)
      ? 'The AI assistant is temporarily busy. Please try again in a moment.'
      : 'Unable to generate a response right now. Please try again.'

    return NextResponse.json({ error: errorMessage }, { status: 502 })
  }
}
