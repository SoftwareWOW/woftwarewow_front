import { CAL_API_VERSION, getCalComConfig } from '@/lib/calcom/config'
import type { CalSlotsByDate } from '@/lib/calcom/types'
import { NextResponse } from 'next/server'

function extractSlots(data: unknown): CalSlotsByDate {
  if (!data || typeof data !== 'object') return {}

  const record = data as Record<string, unknown>

  if (record.slots && typeof record.slots === 'object' && !Array.isArray(record.slots)) {
    return record.slots as CalSlotsByDate
  }

  const dateKeyPattern = /^\d{4}-\d{2}-\d{2}$/
  const directSlots = Object.fromEntries(
    Object.entries(record).filter(([key, value]) => dateKeyPattern.test(key) && Array.isArray(value)),
  )

  return directSlots as CalSlotsByDate
}

function getValidCalApiKey() {
  const raw = process.env.CALCOM_API_KEY?.trim()
  if (!raw) return null
  if (/^cal_(live_|test_)?[a-zA-Z0-9_]+$/.test(raw)) return raw
  return null
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const start = searchParams.get('start')
  const end = searchParams.get('end')
  const timeZone = searchParams.get('timeZone') ?? Intl.DateTimeFormat().resolvedOptions().timeZone

  if (!start || !end) {
    return NextResponse.json({ error: 'start and end are required.' }, { status: 400 })
  }

  const config = getCalComConfig(process.env.NEXT_PUBLIC_CAL_URL)
  if (!config) {
    return NextResponse.json({ error: 'Cal.com is not configured.' }, { status: 500 })
  }

  const url = new URL('https://api.cal.com/v2/slots')
  url.searchParams.set('eventTypeSlug', config.eventTypeSlug)
  url.searchParams.set('username', config.username)
  url.searchParams.set('start', start)
  url.searchParams.set('end', end)
  url.searchParams.set('timeZone', timeZone)

  const headers: HeadersInit = {
    'cal-api-version': CAL_API_VERSION,
  }

  const apiKey = getValidCalApiKey()
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`
  }

  try {
    const response = await fetch(url.toString(), { headers, next: { revalidate: 60 } })
    const payload = (await response.json()) as {
      status?: string
      data?: { slots?: CalSlotsByDate }
      error?: { message?: string }
    }

    if (!response.ok) {
      return NextResponse.json(
        { error: payload.error?.message ?? 'Unable to load availability.' },
        { status: response.status },
      )
    }

    return NextResponse.json({ slots: extractSlots(payload.data) })
  } catch {
    return NextResponse.json({ error: 'Unable to load availability.' }, { status: 502 })
  }
}
