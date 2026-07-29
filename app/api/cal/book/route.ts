import { CAL_BOOK_API_VERSION, getCalComConfig } from '@/lib/calcom/config'
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

export async function POST(request: Request) {
  const apiKey = process.env.CALCOM_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Booking is not configured. Please add CALCOM_API_KEY to your environment.' },
      { status: 503 },
    )
  }

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

  const config = getCalComConfig(process.env.NEXT_PUBLIC_CAL_URL)
  if (!config) {
    return NextResponse.json({ error: 'Cal.com is not configured.' }, { status: 500 })
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
    metadata: body.comments?.trim() ? { notes: body.comments.trim() } : undefined,
  }

  try {
    const response = await fetch('https://api.cal.com/v2/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'cal-api-version': CAL_BOOK_API_VERSION,
      },
      body: JSON.stringify(bookingPayload),
    })

    const payload = (await response.json()) as {
      status?: string
      data?: { uid?: string; id?: number }
      error?: { message?: string }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: payload.error?.message ?? 'Unable to create booking.' },
        { status: response.status },
      )
    }

    return NextResponse.json({ success: true, booking: payload.data })
  } catch {
    return NextResponse.json({ error: 'Unable to create booking.' }, { status: 502 })
  }
}
