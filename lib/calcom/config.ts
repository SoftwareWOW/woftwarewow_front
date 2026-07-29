export type CalComConfig = {
  username: string
  eventTypeSlug: string
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

export function getCalComConfig(calLink?: string): CalComConfig | null {
  const fromEnv =
    process.env.CALCOM_USERNAME && process.env.CALCOM_EVENT_SLUG
      ? {
          username: process.env.CALCOM_USERNAME,
          eventTypeSlug: process.env.CALCOM_EVENT_SLUG,
        }
      : null

  if (calLink) {
    return parseCalLink(calLink) ?? fromEnv
  }

  if (fromEnv) return fromEnv

  return parseCalLink('https://cal.com/ali-nexon-piqav5/ali')
}

export const CAL_API_VERSION = '2024-09-04'
export const CAL_BOOK_API_VERSION = '2024-08-13'

export const CAL_HELP_PHONE = process.env.NEXT_PUBLIC_CAL_HELP_PHONE ?? '(+1) 301 305 6187'
