import { checkRateLimit, getClientIp } from '@/lib/api/rate-limit'
import { normalizeNewsletterEmail, subscribeToWowHubNewsletter } from '@/lib/brevo/newsletter-subscribe'
import { NextResponse } from 'next/server'

type SubscribeRequestBody = {
  email?: string
  consent?: boolean
  locale?: string
  website?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') {
    return ''
  }
  return value.trim().slice(0, maxLength)
}

function resolveOrigin(request: Request): string | null {
  const origin = request.headers.get('origin')?.trim()
  if (origin) return origin

  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host')
  if (!host) return null

  const proto = request.headers.get('x-forwarded-proto') ?? 'https'
  return `${proto}://${host}`
}

export async function POST(request: Request) {
  const ip = getClientIp(request)
  const rate = checkRateLimit(`newsletter:${ip}`)

  if (!rate.allowed) {
    return NextResponse.json(
      { error: 'Too many attempts. Please wait a few minutes and try again.' },
      {
        status: 429,
        headers: rate.retryAfterSec ? { 'Retry-After': String(rate.retryAfterSec) } : undefined,
      },
    )
  }

  let body: SubscribeRequestBody

  try {
    body = (await request.json()) as SubscribeRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const honeypot = sanitizeString(body.website, 200)
  if (honeypot) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (body.consent !== true) {
    return NextResponse.json({ error: 'Please agree to receive WOW Hub emails before subscribing.' }, { status: 400 })
  }

  const email = normalizeNewsletterEmail(sanitizeString(body.email, 254))
  const locale = sanitizeString(body.locale, 16)

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const result = await subscribeToWowHubNewsletter({
    email,
    locale: locale || undefined,
    origin: resolveOrigin(request),
  })

  if (!result.ok) {
    const status =
      result.code === 'config' ? 503 : result.code === 'blacklisted' || result.code === 'invalid' ? 400 : 502

    return NextResponse.json({ error: result.error }, { status })
  }

  if (result.status === 'already_subscribed') {
    return NextResponse.json({
      success: true,
      status: 'already_subscribed',
      message: 'This email is already subscribed to WOW Hub.',
    })
  }

  return NextResponse.json({
    success: true,
    status: 'confirmation_sent',
  })
}
