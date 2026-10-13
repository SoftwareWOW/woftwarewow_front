import type { NextRequest } from 'next/server'
import { defaultLocale, locales, type Locale } from './config'

const LOCALE_COOKIE = 'NEXT_LOCALE'

export function resolveLocaleFromRequest(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale
  }

  const accept = request.headers.get('accept-language')?.toLowerCase() ?? ''
  if (accept.includes('fr-ca') || accept.startsWith('fr')) {
    return 'fr-CA'
  }

  return defaultLocale
}
