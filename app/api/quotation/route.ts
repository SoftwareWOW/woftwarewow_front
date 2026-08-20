import {
  sendQuotationAutoReplyEmail,
  sendQuotationNotificationEmail,
} from '@/lib/brevo/send-quotation-email'
import { NextResponse } from 'next/server'

type QuotationRequestBody = {
  name?: string
  email?: string
  company?: string
  phone?: string
  website?: string
  services?: string[]
  projectDescription?: string
  goals?: string
  projectStage?: string
  budget?: string
  timeline?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().slice(0, maxLength)
}

function sanitizeList(value: unknown): string[] {
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
  let body: QuotationRequestBody

  try {
    body = (await request.json()) as QuotationRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const name = sanitizeString(body.name, 120)
  const email = sanitizeString(body.email, 254)
  const company = sanitizeString(body.company, 160)
  const phone = sanitizeString(body.phone, 40)
  const website = sanitizeString(body.website, 300)
  const projectDescription = sanitizeString(body.projectDescription, 5000)
  const goals = sanitizeString(body.goals, 5000)
  const projectStage = sanitizeString(body.projectStage, 120)
  const budget = sanitizeString(body.budget, 120)
  const timeline = sanitizeString(body.timeline, 120)
  const services = sanitizeList(body.services)

  if (name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (phone.length < 7) {
    return NextResponse.json({ error: 'Please enter a valid phone number.' }, { status: 400 })
  }

  if (services.length < 1) {
    return NextResponse.json({ error: 'Please select at least one service.' }, { status: 400 })
  }

  if (projectDescription.length < 10) {
    return NextResponse.json(
      { error: 'Please provide a few more details about your project.' },
      { status: 400 },
    )
  }

  if (goals.length < 10) {
    return NextResponse.json(
      { error: 'Please tell us a bit more about what you are trying to achieve.' },
      { status: 400 },
    )
  }

  const payload = {
    name,
    email,
    company,
    phone,
    website,
    services,
    projectDescription,
    goals,
    projectStage,
    budget,
    timeline,
  }

  const notificationResult = await sendQuotationNotificationEmail(payload)

  if (!notificationResult.ok) {
    console.error('[quotation] Brevo notification failed:', notificationResult.error)
    return NextResponse.json(
      { error: 'Unable to send your request right now. Please try again shortly.' },
      { status: 500 },
    )
  }

  const autoReplyResult = await sendQuotationAutoReplyEmail(payload)

  if (!autoReplyResult.ok) {
    console.error('[quotation] Brevo auto-reply failed:', autoReplyResult.error)
  }

  return NextResponse.json({
    success: true,
    messageId: notificationResult.messageId,
    autoReplySent: autoReplyResult.ok,
  })
}
