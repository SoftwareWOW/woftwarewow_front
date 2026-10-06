import { GoogleGenAI } from '@google/genai'
import { NextResponse } from 'next/server'

const MAX_FILE_SIZE = 5 * 1024 * 1024

function getErrorDetail(error: unknown) {
  if (error instanceof Error) return error.message
  if (typeof error === 'object' && error !== null && 'message' in error) {
    return String((error as { message: unknown }).message)
  }
  return 'Unknown Gemini error'
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY?.trim()
  const model = process.env.GEMINI_MODEL?.trim() || 'gemini-3.5-flash-lite'

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

  try {
    const bytes = Buffer.from(await audio.arrayBuffer())
    const mimeType = audio.type || 'audio/webm'

    const response = await ai.models.generateContent({
      model,
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
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    })

    const transcript = response.text?.trim() ?? ''

    return NextResponse.json({ transcript })
  } catch (error) {
    console.error('[transcribe] Gemini request failed:', getErrorDetail(error))

    return NextResponse.json(
      { error: 'Unable to transcribe audio right now. Please try again.' },
      { status: 502 },
    )
  }
}
