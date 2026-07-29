import { CAL_BOOK_API_VERSION, getCalComConfig, getValidCalApiKey } from '@/lib/calcom/config'
import { NextResponse } from 'next/server'

type BookRequestBody = {
  start?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  comments?: string
  timeZone?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function getCalErrorMessage(payload: unknown): string | undefined {
  if (!payload || typeof payload !== 'object') return undefined
  const record = payload as Record<string, unknown>
  if (record.error && typeof record.error === 'object') {
    const error = record.error as Record<string, unknown>
    if (typeof error.message === 'string') return error.message
  }
  if (typeof record.message === 'string') return record.message
  return undefined
}

export async function POST(request: Request) {
  let body: BookRequestBody
  try {
    body = (await request.json()) as BookRequestBody
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const firstName = body.firstName?.trim() ?? ''
  const lastName = body.lastName?.trim() ?? ''
  const email = body.email?.trim() ?? ''
  const start = body.start?.trim() ?? ''
  const timeZone = body.timeZone?.trim() || 'America/Toronto'

  if (!firstName || !lastName || !email || !start) {
    return NextResponse.json({ error: 'First name, last name, email, and time slot are required.' }, { status: 400 })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const config = getCalComConfig()
  if (!config) {
    return NextResponse.json(
      { error: 'Cal.com is not configured. Set NEXT_PUBLIC_CAL_URL or CALCOM_URL in your environment.' },
      { status: 500 },
    )
  }

  const bookingPayload = {
    start,
    eventTypeSlug: config.eventTypeSlug,
    username: config.username,
    attendee: {
      name: `${firstName} ${lastName}`.trim(),
      email,
      timeZone,
      language: 'en',
      ...(body.phone?.trim() ? { phoneNumber: body.phone.trim() } : {}),
    },
    ...(body.comments?.trim() ? { metadata: { notes: body.comments.trim() } } : {}),
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'cal-api-version': CAL_BOOK_API_VERSION,
  }

  const apiKey = getValidCalApiKey()
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`
  }

  try {
    const response = await fetch('https://api.cal.com/v2/bookings', {
      method: 'POST',
      headers,
      body: JSON.stringify(bookingPayload),
    })

    const payload = (await response.json()) as {
      status?: string
      data?: { uid?: string; id?: number; meetingUrl?: string }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: getCalErrorMessage(payload) ?? 'Unable to create booking.' },
        { status: response.status },
      )
    }

    return NextResponse.json({ success: true, booking: payload.data })
  } catch {
    return NextResponse.json({ error: 'Unable to create booking.' }, { status: 502 })
  }
}
