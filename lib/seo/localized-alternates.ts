import { locales } from '@/i18n/config'

/** Path after locale, e.g. `/software` or `/software/services/custom-software`. */
export function localizedAlternates(locale: string, localizedPath: string) {
  const path = localizedPath.startsWith('/') ? localizedPath : `/${localizedPath}`

  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(locales.map((item) => [item, `/${item}${path}`])),
  }
}
