export type WowMarketingMegaNavServiceRoute = {
  navId: string
  slug: string
  serviceSegment: string
}

export type WowMarketingMegaNavSolutionRoute = {
  navId: string
  slug: string
  solutionSegment: string
}

export const WOW_MARKETING_MEGA_NAV_SERVICE_ROUTES: WowMarketingMegaNavServiceRoute[] = [
  { navId: 'searchEngineOptimization', slug: 'search-engine-optimization', serviceSegment: 'search-engine-optimization' },
  { navId: 'payPerClickAdvertising', slug: 'pay-per-click-advertising', serviceSegment: 'pay-per-click-advertising' },
  { navId: 'socialMediaMarketing', slug: 'social-media-marketing', serviceSegment: 'social-media-marketing' },
  { navId: 'contentMarketing', slug: 'content-marketing', serviceSegment: 'content-marketing' },
  { navId: 'emailMarketing', slug: 'email-marketing', serviceSegment: 'email-marketing' },
  { navId: 'marketingAutomationService', slug: 'marketing-automation', serviceSegment: 'marketing-automation' },
  { navId: 'leadGenerationService', slug: 'lead-generation', serviceSegment: 'lead-generation' },
  { navId: 'analyticsReporting', slug: 'analytics-reporting', serviceSegment: 'analytics-reporting' },
  { navId: 'localSeo', slug: 'local-seo', serviceSegment: 'local-seo' },
  { navId: 'digitalStrategy', slug: 'digital-strategy', serviceSegment: 'digital-strategy' },
]

export const WOW_MARKETING_MEGA_NAV_SOLUTION_ROUTES: WowMarketingMegaNavSolutionRoute[] = [
  {
    navId: 'brandAwarenessVisibility',
    slug: 'brand-awareness-visibility',
    solutionSegment: 'brand-awareness-visibility',
  },
  {
    navId: 'leadGenerationCustomerAcquisition',
    slug: 'lead-generation-customer-acquisition',
    solutionSegment: 'lead-generation-customer-acquisition',
  },
  { navId: 'ecommerceSalesGrowth', slug: 'ecommerce-sales-growth', solutionSegment: 'ecommerce-sales-growth' },
  {
    navId: 'productLaunchGoToMarket',
    slug: 'product-launch-go-to-market',
    solutionSegment: 'product-launch-go-to-market',
  },
  {
    navId: 'customerRetentionEngagement',
    slug: 'customer-retention-engagement',
    solutionSegment: 'customer-retention-engagement',
  },
  {
    navId: 'marketingPerformanceOptimization',
    slug: 'marketing-performance-optimization',
    solutionSegment: 'marketing-performance-optimization',
  },
]

const serviceRouteByNavId = new Map(
  WOW_MARKETING_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySegment = new Map(
  WOW_MARKETING_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.serviceSegment, route]),
)

const solutionRouteByNavId = new Map(
  WOW_MARKETING_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.navId, route]),
)

const solutionRouteBySegment = new Map(
  WOW_MARKETING_MEGA_NAV_SOLUTION_ROUTES.map((route) => [route.solutionSegment, route]),
)

export function wowMarketingServiceHref(serviceSegment: string): string {
  return `/marketing/services/${serviceSegment}`
}

export function wowMarketingSolutionHref(solutionSegment: string): string {
  return `/marketing/solutions/${solutionSegment}`
}

export function wowMarketingMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return wowMarketingServiceHref(service.serviceSegment)

  const solution = solutionRouteByNavId.get(navId)
  if (solution) return wowMarketingSolutionHref(solution.solutionSegment)

  return '/marketing'
}

export function isWowMarketingServiceSegment(segment: string): boolean {
  return serviceRouteBySegment.has(segment)
}

export function isWowMarketingSolutionSegment(segment: string): boolean {
  return solutionRouteBySegment.has(segment)
}

/** Rewrites legacy hash-only marketing nav targets when a concrete page exists. */
export function resolveWowMarketingPublicHref(href: string): string {
  const hashIndex = href.indexOf('#')
  const path = hashIndex >= 0 ? href.slice(0, hashIndex) : href
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : ''

  if (path === '/marketing' && hash === '#services') return href
  if (path === '/marketing' && hash === '#solutions') return href

  return href
}
