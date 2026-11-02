import { SOFTWARE_WOW_NAV_SOLUTIONS } from './softwareWowNavSolutions'

/** Public slug under `/software/{slug}` for mega-menu service items. */
export type SoftwareWowMegaNavServiceRoute = {
  navId: string
  slug: string
  /** App route folder under `softwarewow/services/`. */
  serviceSegment: string
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
    serviceSegment: 'ai-automation',
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

const serviceRouteByNavId = new Map(
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySlug = new Map(
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.slug, route]),
)

const solutionByNavId = new Map(SOFTWARE_WOW_NAV_SOLUTIONS.map((s) => [s.navId, s]))

const solutionBySlug = new Map(SOFTWARE_WOW_NAV_SOLUTIONS.map((s) => [s.slug, s]))

export function softwareWowMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return `/software/${service.slug}`

  const solution = solutionByNavId.get(navId)
  if (solution) return `/software/${solution.slug}`

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

  for (const solution of SOFTWARE_WOW_NAV_SOLUTIONS) {
    rules.push({
      source: `/${locale}/software/${solution.slug}`,
      destination: `/${locale}/${softwareAppSegment}/solutions/${solution.slug}`,
    })
  }

  return rules
}

export function isSoftwareWowMegaNavPublicSlug(slug: string): boolean {
  return serviceRouteBySlug.has(slug) || solutionBySlug.has(slug)
}

export function getSoftwareWowMegaNavServiceRouteBySlug(
  slug: string,
): SoftwareWowMegaNavServiceRoute | undefined {
  return serviceRouteBySlug.get(slug)
}
