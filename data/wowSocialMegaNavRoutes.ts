export type WowSocialMegaNavServiceRoute = {
  navId: string
  slug: string
  serviceSegment: string
}

export const WOW_SOCIAL_MEGA_NAV_SERVICE_ROUTES: WowSocialMegaNavServiceRoute[] = [
  {
    navId: 'socialMediaStrategyManagement',
    slug: 'social-media-strategy-management',
    serviceSegment: 'social-media-strategy-management',
  },
  {
    navId: 'socialInfluencerContentCreation',
    slug: 'social-influencer-content-creation',
    serviceSegment: 'social-influencer-content-creation',
  },
  {
    navId: 'paidSocialAdvertisingCommunityManagement',
    slug: 'paid-social-advertising-community-management',
    serviceSegment: 'paid-social-advertising-community-management',
  },
]

const serviceRouteByNavId = new Map(
  WOW_SOCIAL_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySegment = new Map(
  WOW_SOCIAL_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.serviceSegment, route]),
)

export function wowSocialServiceHref(serviceSegment: string): string {
  return `/social/services/${serviceSegment}`
}

export function wowSocialMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return wowSocialServiceHref(service.serviceSegment)
  return '/social'
}

export function isWowSocialServiceSegment(segment: string): boolean {
  return serviceRouteBySegment.has(segment)
}
