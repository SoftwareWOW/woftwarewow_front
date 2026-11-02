import { SOFTWARE_WOW_NAV_SOLUTIONS, softwareWowSolutionHref } from './softwareWowNavSolutions'

/** Public slug under `/software/{slug}` for mega-menu service items. */
export type SoftwareWowMegaNavServiceRoute = {
  navId: string
  slug: string
  /** App route folder under `softwarewow/services/`. */
  serviceSegment: string
}

/** Public slug under `/software/solutions/{slug}` for mega-menu solution items. */
export type SoftwareWowMegaNavSolutionRoute = {
  navId: string
  slug: string
  /** Public route folder under `software/solutions/`. */
  solutionSegment: string
}

export const SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES: SoftwareWowMegaNavServiceRoute[] = [
  {
    navId: 'customSoftwareDevelopment',
    slug: 'custom-software-development',
    serviceSegment: 'custom-software-development',
  },
  {
    navId: 'webApplications',
    slug: 'web-applications',
    serviceSegment: 'web-applications',
  },
  {
    navId: 'mobileApplications',
    slug: 'mobile-applications',
    serviceSegment: 'mobile-applications',
  },
  {
    navId: 'businessSystemsAutomation',
    slug: 'business-systems-automation',
    serviceSegment: 'business-systems-automation',
  },
  {
    navId: 'productDesignPrototyping',
    slug: 'product-design-prototyping',
    serviceSegment: 'product-design-prototyping',
  },
  {
    navId: 'integrationsModernization',
    slug: 'integrations-modernization',
    serviceSegment: 'modernization-integrations',
  },
  {
    navId: 'softwareSupportImprovement',
    slug: 'software-support-improvement',
    serviceSegment: 'software-support-improvement',
  },
]

export const SOFTWARE_WOW_MEGA_NAV_SOLUTION_ROUTES: SoftwareWowMegaNavSolutionRoute[] =
  SOFTWARE_WOW_NAV_SOLUTIONS.map((solution) => ({
    navId: solution.navId,
    slug: solution.slug,
    solutionSegment: solution.slug,
  }))

const serviceRouteByNavId = new Map(
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySlug = new Map(
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.slug, route]),
)

const solutionRouteByNavId = new Map(
  SOFTWARE_WOW_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.navId, route]),
)

const solutionRouteBySlug = new Map(
  SOFTWARE_WOW_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.slug, route]),
)

export function softwareWowMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return `/software/${service.slug}`

  if (solutionRouteByNavId.has(navId)) {
    return softwareWowSolutionHref(navId)
  }

  return '/software'
}

/** Rewrites: `/software/{slug}` → internal service or solution page (URL bar unchanged). */
export function getSoftwareWowMegaNavRewrites(
  locale: string,
  softwareAppSegment: string,
): { source: string; destination: string }[] {
  const rules: { source: string; destination: string }[] = []

  for (const route of SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES) {
    rules.push({
      source: `/${locale}/software/${route.slug}`,
      destination: `/${locale}/${softwareAppSegment}/services/${route.serviceSegment}`,
    })
  }

  for (const route of SOFTWARE_WOW_MEGA_NAV_SOLUTION_ROUTES) {
    rules.push({
      source: `/${locale}/software/solutions/${route.slug}`,
      destination: `/${locale}/software/solutions/${route.solutionSegment}`,
    })
  }

  return rules
}

export function isSoftwareWowMegaNavPublicSlug(slug: string): boolean {
  return serviceRouteBySlug.has(slug) || solutionRouteBySlug.has(slug)
}

export function getSoftwareWowMegaNavSolutionRouteBySlug(
  slug: string,
): SoftwareWowMegaNavSolutionRoute | undefined {
  return solutionRouteBySlug.get(slug)
}

export function getSoftwareWowMegaNavServiceRouteBySlug(
  slug: string,
): SoftwareWowMegaNavServiceRoute | undefined {
  return serviceRouteBySlug.get(slug)
}
