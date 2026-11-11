export type WowDesignMegaNavServiceRoute = {
  navId: string
  slug: string
  serviceSegment: string
}

export const WOW_DESIGN_MEGA_NAV_SERVICE_ROUTES: WowDesignMegaNavServiceRoute[] = [
  {
    navId: 'brandIdentityStrategy',
    slug: 'brand-identity-strategy',
    serviceSegment: 'brand-identity-strategy',
  },
  {
    navId: 'graphicMarketingDesign',
    slug: 'graphic-marketing-design',
    serviceSegment: 'graphic-marketing-design',
  },
  {
    navId: 'uiUxDigitalDesign',
    slug: 'ui-ux-digital-design',
    serviceSegment: 'ui-ux-digital-design',
  },
  {
    navId: 'videoMotionCreativeContent',
    slug: 'video-motion-creative-content',
    serviceSegment: 'video-motion-creative-content',
  },
]

const serviceRouteByNavId = new Map(
  WOW_DESIGN_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySegment = new Map(
  WOW_DESIGN_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.serviceSegment, route]),
)

export function wowDesignServiceHref(serviceSegment: string): string {
  return `/design/services/${serviceSegment}`
}

export function wowDesignMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return wowDesignServiceHref(service.serviceSegment)
  return '/design'
}

export function isWowDesignServiceSegment(segment: string): boolean {
  return serviceRouteBySegment.has(segment)
}
