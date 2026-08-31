import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const MAX_FILE_SIZE = 5 * 1024 * 1024

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim()
  const model =
    process.env.OPENROUTER_TRANSCRIBE_MODEL?.trim() || process.env.OPENROUTER_MODEL?.trim()

  if (!apiKey) {
    return NextResponse.json({ error: 'AI assistant is not configured.' }, { status: 500 })
  }

  if (!model) {
    return NextResponse.json({ error: 'AI model is not configured.' }, { status: 500 })
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

  const openai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey,
    defaultHeaders: {
      'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL ?? 'https://wowsuperagency.com',
      'X-Title': 'WOW Superagency AI Assistant',
    },
  })

  try {
    const transcription = await openai.audio.transcriptions.create({
      file: audio,
      model,
    })

    const transcript = transcription.text?.trim() ?? ''

    return NextResponse.json({ transcript })
  } catch (error) {
    console.error('[transcribe] OpenRouter request failed:', error)

    return NextResponse.json(
      { error: 'Unable to transcribe audio right now. Please try again.' },
      { status: 502 },
    )
  }
}
