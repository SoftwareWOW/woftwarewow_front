import { SOFTWARE_WOW_NAV_SOLUTIONS } from '../data/softwareWowNavSolutions'
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

    for (const solution of SOFTWARE_WOW_NAV_SOLUTIONS) {
      rules.push({
        source: `/${locale}/software/${solution.slug}`,
        destination: `/${locale}/software/solutions/${solution.slug}`,
        permanent: true,
      })
    }

    rules.push({
      source: `/${locale}/software/services/custom-software`,
      destination: `/${locale}/software/custom-software-development`,
      permanent: true,
    })
    rules.push({
      source: `/${locale}/software/services/mobile-app-development`,
      destination: `/${locale}/software/mobile-applications`,
      permanent: true,
    })
    rules.push({
      source: `/${locale}/software/services/web-applications`,
      destination: `/${locale}/software/web-applications`,
      permanent: true,
    })
    rules.push({
      source: `/${locale}/software/services/ai-automation`,
      destination: `/${locale}/software/business-systems-automation`,
      permanent: true,
    })
    rules.push({
      source: `/${locale}/software/services/saas-development`,
      destination: `/${locale}/software/software-support-improvement`,
      permanent: true,
    })
    rules.push({
      source: `/${locale}/software/web-mobile-applications`,
      destination: `/${locale}/software/web-applications`,
      permanent: true,
    })

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

    // `/software` and `/software/{slug}` are real App Router routes under `app/[locale]/software/`.
  }

  return rules
}
