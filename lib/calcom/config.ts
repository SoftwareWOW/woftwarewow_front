export type CalComConfig = {
  username: string
  eventTypeSlug: string
}

/** Booking page URL from env — update NEXT_PUBLIC_CAL_URL or CALCOM_URL to change scheduling everywhere. */
export function getCalComUrl(): string | null {
  const candidates = [
    process.env.NEXT_PUBLIC_CAL_URL,
    process.env.CALCOM_URL,
    process.env.CALCOM_BOOKING_URL,
  ]

  for (const value of candidates) {
    const trimmed = value?.trim()
    if (trimmed) return trimmed
  }

  return null
}

export function parseCalLink(value: string): CalComConfig | null {
  const trimmed = value.trim()
  if (!trimmed) return null

  let path = trimmed
  try {
    if (trimmed.startsWith('http')) {
      path = new URL(trimmed).pathname
    }
  } catch {
    return null
  }

  const parts = path.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  if (parts.length < 2) return null

  return {
    username: parts[0],
    eventTypeSlug: parts[1],
  }
}

export function getCalComConfig(): CalComConfig | null {
  const calUrl = getCalComUrl()
  if (calUrl) {
    const parsed = parseCalLink(calUrl)
    if (parsed) return parsed
  }

  const username = process.env.CALCOM_USERNAME?.trim()
  const eventTypeSlug = process.env.CALCOM_EVENT_SLUG?.trim()

  if (username && eventTypeSlug) {
    return { username, eventTypeSlug }
  }

  return null
}

/** Real Cal.com API keys only (cal_live_… / cal_test_…). URLs in CALCOM_API_KEY are ignored. */
export function getValidCalApiKey(): string | null {
  const raw = process.env.CALCOM_API_KEY?.trim()
  if (!raw) return null
  if (raw.startsWith('http') || raw.includes('cal.com/')) return null
  if (/^cal_(live_|test_)?[a-zA-Z0-9_]+$/.test(raw)) return raw
  return null
}

export const CAL_API_VERSION = '2024-09-04'
export const CAL_BOOK_API_VERSION = '2024-08-13'

export const CAL_HELP_PHONE =  '(+1) 777 777 7777'
