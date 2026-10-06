import {
  getGeminiApiKey,
  getGeminiTtsModel,
  getGeminiTtsVoice,
} from '@/lib/gemini/config'
import { parsePcmSampleRate, pcm16ToWav } from '@/lib/gemini/pcm-to-wav'
import { GoogleGenAI, Modality } from '@google/genai'
import { NextResponse } from 'next/server'

const MAX_TEXT_LENGTH = 1200
const REQUEST_TIMEOUT_MS = 25_000

type TtsRequestBody = {
  text?: string
}

function getErrorDetail(error: unknown) {
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String((error as { message: unknown }).message)
  }
  return 'Unknown Gemini error'
}

export async function POST(request: Request) {
  const apiKey = getGeminiApiKey()
  const model = getGeminiTtsModel()
  const voiceName = getGeminiTtsVoice()

  if (!apiKey) {
    return NextResponse.json({ error: 'AI assistant is not configured.' }, { status: 500 })
  }

  let body: TtsRequestBody

  try {
    body = (await request.json()) as TtsRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const text = typeof body.text === 'string' ? body.text.trim().slice(0, MAX_TEXT_LENGTH) : ''

  if (!text) {
    return NextResponse.json({ error: 'Text is required.' }, { status: 400 })
  }

  const ai = new GoogleGenAI({ apiKey })
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [{ role: 'user', parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName,
            },
          },
        },
        abortSignal: controller.signal,
        httpOptions: {
          timeout: REQUEST_TIMEOUT_MS,
        },
      },
    })

    const audioPart = response.candidates?.[0]?.content?.parts?.find(
      (part) => part.inlineData?.data,
    )
    const inlineData = audioPart?.inlineData

    if (!inlineData?.data) {
      return NextResponse.json({ error: 'No audio was generated.' }, { status: 502 })
    }

    const pcm = Buffer.from(inlineData.data, 'base64')
    const sampleRate = parsePcmSampleRate(inlineData.mimeType || '')
    const wav = pcm16ToWav(pcm, sampleRate)

    return new NextResponse(new Uint8Array(wav), {
      headers: {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('[tts] Gemini request failed:', getErrorDetail(error))

    return NextResponse.json(
      { error: 'Unable to generate speech right now. Please try again.' },
      { status: 502 },
    )
  } finally {
    clearTimeout(timer)
  }
}
