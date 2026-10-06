import {
  getConfiguredChatModels,
  getGeminiApiKey,
} from '@/lib/gemini/config'
import { GoogleGenAI } from '@google/genai'
import { NextResponse } from 'next/server'

const MAX_FILE_SIZE = 5 * 1024 * 1024
const REQUEST_TIMEOUT_MS = 20_000
const TRANSIENT_ATTEMPTS = 2

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
    lowered.includes('aborted') ||
    lowered.includes('timeout') ||
    lowered.includes('timed out')
  )
}

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function POST(request: Request) {
  const apiKey = getGeminiApiKey()
  const models = getConfiguredChatModels()

  if (!apiKey) {
    return NextResponse.json({ error: 'AI assistant is not configured.' }, { status: 500 })
  }

  let formData: FormData

  try {
    formData = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid form data.' }, { status: 400 })
  }

  const audio = formData.get('audio')

  if (!(audio instanceof File)) {
    return NextResponse.json({ error: 'An audio file is required.' }, { status: 400 })
  }

  if (audio.size === 0) {
    return NextResponse.json({ error: 'Audio file is empty.' }, { status: 400 })
  }

  if (audio.size > MAX_FILE_SIZE) {
    return NextResponse.json({ error: 'Audio file is too large.' }, { status: 400 })
  }

  const ai = new GoogleGenAI({ apiKey })
  const bytes = Buffer.from(await audio.arrayBuffer())
  const mimeType = audio.type || 'audio/webm'

  try {
    let transcript = ''
    let lastError: unknown

    for (const selectedModel of models) {
      for (let attempt = 1; attempt <= TRANSIENT_ATTEMPTS; attempt += 1) {
        const controller = new AbortController()
        const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

        try {
          const response = await ai.models.generateContent({
            model: selectedModel,
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    inlineData: {
                      mimeType,
                      data: bytes.toString('base64'),
                    },
                  },
                  {
                    text: 'Transcribe this audio exactly. Return only the spoken words as plain text with no commentary, labels, or quotation marks.',
                  },
                ],
              },
            ],
            config: {
              temperature: 0,
              maxOutputTokens: 512,
              abortSignal: controller.signal,
              httpOptions: {
                timeout: REQUEST_TIMEOUT_MS,
              },
            },
          })

          clearTimeout(timer)
          transcript = response.text?.trim() ?? ''
          lastError = undefined
          break
        } catch (error) {
          clearTimeout(timer)
          lastError = error
          if (!isTransientGeminiError(error) || attempt === TRANSIENT_ATTEMPTS) {
            break
          }
          await wait(300 * attempt)
        }
      }

      if (transcript) break
    }

    if (!transcript && lastError) {
      throw lastError
    }

    return NextResponse.json({ transcript })
  } catch (error) {
    console.error('[transcribe] Gemini request failed:', getErrorDetail(error))

    return NextResponse.json(
      { error: 'Unable to transcribe audio right now. Please try again.' },
      { status: 502 },
    )
  }
}
