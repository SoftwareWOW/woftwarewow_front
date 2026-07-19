import { SYSTEM_PROMPT } from '@/lib/system-prompt'
import OpenAI from 'openai'
import { NextResponse } from 'next/server'

type ChatMessagePayload = {
  role: 'user' | 'assistant'
  content: string
}

type ChatRequestBody = {
  messages?: ChatMessagePayload[]
}

const MAX_MESSAGES = 40
const MAX_CONTENT_LENGTH = 4000

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

export async function POST(request: Request) {
  const apiKey = process.env.OPENROUTER_API_KEY?.trim()
  const model = process.env.OPENROUTER_MODEL?.trim()

  if (!apiKey) {
    return NextResponse.json({ error: 'AI assistant is not configured.' }, { status: 500 })
  }

  if (!model) {
    return NextResponse.json({ error: 'AI model is not configured.' }, { status: 500 })
  }

  let body: ChatRequestBody

  try {
    body = (await request.json()) as ChatRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const messages = sanitizeMessages(body.messages)

  if (messages.length === 0 || messages.at(-1)?.role !== 'user') {
    return NextResponse.json({ error: 'A user message is required.' }, { status: 400 })
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
    const stream = await openai.chat.completions.create({
      model,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      stream: true,
      temperature: 0.7,
      max_tokens: 1024,
    })

    const encoder = new TextEncoder()

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content

            if (content) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ content })}\n\n`),
              )
            }
          }

          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (error) {
          controller.error(error)
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('[chat] OpenRouter request failed:', error)

    return NextResponse.json(
      { error: 'Unable to generate a response right now. Please try again.' },
      { status: 502 },
    )
  }
}
