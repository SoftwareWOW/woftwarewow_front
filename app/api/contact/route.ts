import {
  sendContactAutoReplyEmail,
  sendContactNotificationEmail,
} from '@/lib/brevo/send-contact-email'
import { NextResponse } from 'next/server'

type ContactRequestBody = {
  name?: string
  email?: string
  interests?: string[]
  budget?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

function sanitizeInterests(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .filter((item): item is string => typeof item === 'string')
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 20)
}

export async function POST(request: Request) {
  let body: ContactRequestBody

  try {
    body = (await request.json()) as ContactRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = sanitizeString(body.name, 120)
  const email = sanitizeString(body.email, 254)
  const message = sanitizeString(body.message, 5000)
  const budget = sanitizeString(body.budget, 120)
  const interests = sanitizeInterests(body.interests)

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Please provide a few more details about your project.' },
      { status: 400 },
    )
  }

  const payload = {
    name,
    email,
    interests,
    budget,
    message,
  }

  const notificationResult = await sendContactNotificationEmail(payload)

  if (!notificationResult.ok) {
    console.error('[contact] Brevo notification failed:', notificationResult.error)
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please try again shortly.' },
      { status: 500 },
    )
  }

  const autoReplyResult = await sendContactAutoReplyEmail(payload)

  if (!autoReplyResult.ok) {
    console.error('[contact] Brevo auto-reply failed:', autoReplyResult.error)
  }

  return NextResponse.json({
    success: true,
    messageId: notificationResult.messageId,
    autoReplySent: autoReplyResult.ok,
  })
}
