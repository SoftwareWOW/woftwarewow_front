export const locales = ['en-CA', 'en-US', 'en-GB', 'fr-CA', 'ar-SA', 'ar-AE'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en-CA'

export const localeLabels: Record<Locale, { name: string; code: string }> = {
  'en-CA': { name: 'English (Canada)', code: 'en-CA' },
  'en-US': { name: 'English (United States)', code: 'en-US' },
  'en-GB': { name: 'English (United Kingdom)', code: 'en-GB' },
  'fr-CA': { name: 'French (Canada)', code: 'fr-CA' },
  'ar-SA': { name: 'Arabic (Saudi Arabia)', code: 'ar-SA' },
  'ar-AE': { name: 'Arabic (UAE)', code: 'ar-AE' },
}

export function isRtlLocale(locale: Locale): boolean {
  return locale.startsWith('ar-')
}
