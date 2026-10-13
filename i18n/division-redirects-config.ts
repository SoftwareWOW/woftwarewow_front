import {
  legacyDivisionSlugToCanonical,
  MARKETING_DIVISION_APP_SEGMENT,
  SOFTWARE_DIVISION_APP_SEGMENT,
} from './division-paths'
import { locales } from './config'

type Redirect = {
  source: string
  destination: string
  permanent: boolean
}

type Rewrite = {
  source: string
  destination: string
}

const INTERNAL_LEGACY_SEGMENTS = new Set([MARKETING_DIVISION_APP_SEGMENT, SOFTWARE_DIVISION_APP_SEGMENT])

export function getDivisionRedirects(): Redirect[] {
  const rules: Redirect[] = []

  for (const locale of locales) {
    for (const [legacy, canonical] of Object.entries(legacyDivisionSlugToCanonical)) {
      if (INTERNAL_LEGACY_SEGMENTS.has(legacy)) {
        continue
      }

      rules.push({
        source: `/${locale}/${legacy}`,
        destination: `/${locale}/${canonical}`,
        permanent: true,
      })
      rules.push({
        source: `/${locale}/${legacy}/:path*`,
        destination: `/${locale}/${canonical}/:path*`,
        permanent: true,
      })
    }

    for (const internalSegment of INTERNAL_LEGACY_SEGMENTS) {
      const canonical =
        internalSegment === MARKETING_DIVISION_APP_SEGMENT
          ? 'marketing'
          : internalSegment === SOFTWARE_DIVISION_APP_SEGMENT
            ? 'software'
            : internalSegment

      rules.push({
        source: `/${locale}/${internalSegment}`,
        destination: `/${locale}/${canonical}`,
        permanent: true,
      })
      rules.push({
        source: `/${locale}/${internalSegment}/:path*`,
        destination: `/${locale}/${canonical}/:path*`,
        permanent: true,
      })
    }
  }

  return rules
}

export function getDivisionRewrites(): Rewrite[] {
  const rules: Rewrite[] = []

  for (const locale of locales) {
    rules.push({
      source: `/${locale}/marketing`,
      destination: `/${locale}/${MARKETING_DIVISION_APP_SEGMENT}`,
    })

    rules.push({
      source: `/${locale}/software`,
      destination: `/${locale}/${SOFTWARE_DIVISION_APP_SEGMENT}`,
    })
    rules.push({
      source: `/${locale}/software/:path*`,
      destination: `/${locale}/${SOFTWARE_DIVISION_APP_SEGMENT}/:path*`,
    })
  }

  return rules
}
