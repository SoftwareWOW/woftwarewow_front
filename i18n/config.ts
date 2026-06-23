export const locales = ['en-US', 'fr-CA'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en-US'

export const localeLabels: Record<Locale, { name: string; code: string }> = {
  'en-US': { name: 'English (United States)', code: 'en-US' },
  'fr-CA': { name: 'French (Canada)', code: 'fr-CA' },
}

export function isRtlLocale(_locale: Locale): boolean {
  return false
}
