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

function getCalComConfigFromEnv(
  urlCandidates: Array<string | undefined>,
  usernameEnv: string | undefined,
  eventSlugEnv: string | undefined,
): CalComConfig | null {
  for (const value of urlCandidates) {
    const trimmed = value?.trim()
    if (!trimmed) continue
    const parsed = parseCalLink(trimmed)
    if (parsed) return parsed
  }

  const username = usernameEnv?.trim()
  const eventTypeSlug = eventSlugEnv?.trim()

  if (username && eventTypeSlug) {
    return { username, eventTypeSlug }
  }

  return null
}

export function getCalComConfig(): CalComConfig | null {
  return getCalComConfigFromEnv(
    [process.env.NEXT_PUBLIC_CAL_URL, process.env.CALCOM_URL, process.env.CALCOM_BOOKING_URL],
    process.env.CALCOM_USERNAME,
    process.env.CALCOM_EVENT_SLUG,
  )
}

/** Think Tank booking page URL — separate Cal.com event from Meet. */
export function getThinkTankCalComUrl(): string | null {
  const candidates = [process.env.NEXT_PUBLIC_CAL_THINKTANK_URL, process.env.CALCOM_THINKTANK_URL]

  for (const value of candidates) {
    const trimmed = value?.trim()
    if (trimmed) return trimmed
  }

  return null
}

export function getThinkTankCalComConfig(): CalComConfig | null {
  return getCalComConfigFromEnv(
    [process.env.NEXT_PUBLIC_CAL_THINKTANK_URL, process.env.CALCOM_THINKTANK_URL],
    process.env.CALCOM_THINKTANK_USERNAME,
    process.env.CALCOM_THINKTANK_EVENT_SLUG,
  )
}

/** Minimum hours before a Think Tank slot can be booked (default 24). */
export function getThinkTankMinNoticeHours(): number {
  const raw = process.env.THINKTANK_MIN_NOTICE_HOURS?.trim()
  if (!raw) return 24
  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 24
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
