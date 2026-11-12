export type WowIntelligenceMegaNavServiceRoute = {
  navId: string
  slug: string
  serviceSegment: string
}

export type WowIntelligenceMegaNavUseCaseRoute = {
  navId: string
  slug: string
  useCaseSegment: string
}

export const WOW_INTELLIGENCE_MEGA_NAV_SERVICE_ROUTES: WowIntelligenceMegaNavServiceRoute[] = [
  {
    navId: 'aiAssistantsChatbots',
    slug: 'ai-assistants-chatbots',
    serviceSegment: 'ai-assistants-chatbots',
  },
  {
    navId: 'intelligentAutomation',
    slug: 'intelligent-automation',
    serviceSegment: 'intelligent-automation',
  },
  {
    navId: 'businessIntelligencePredictiveInsights',
    slug: 'business-intelligence-predictive-insights',
    serviceSegment: 'business-intelligence-predictive-insights',
  },
]

export const WOW_INTELLIGENCE_MEGA_NAV_USE_CASE_ROUTES: WowIntelligenceMegaNavUseCaseRoute[] = [
  { navId: 'useCaseSales', slug: 'sales', useCaseSegment: 'sales' },
  { navId: 'useCaseMarketing', slug: 'marketing', useCaseSegment: 'marketing' },
  { navId: 'useCaseCustomerService', slug: 'customer-service', useCaseSegment: 'customer-service' },
  { navId: 'useCaseOperations', slug: 'operations', useCaseSegment: 'operations' },
]

const serviceRouteByNavId = new Map(
  WOW_INTELLIGENCE_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.navId, route]),
)

const serviceRouteBySegment = new Map(
  WOW_INTELLIGENCE_MEGA_NAV_SERVICE_ROUTES.map((route) => [route.serviceSegment, route]),
)

const useCaseRouteByNavId = new Map(
  WOW_INTELLIGENCE_MEGA_NAV_USE_CASE_ROUTES.map((route) => [route.navId, route]),
)

const useCaseRouteBySegment = new Map(
  WOW_INTELLIGENCE_MEGA_NAV_USE_CASE_ROUTES.map((route) => [route.useCaseSegment, route]),
)

export function wowIntelligenceServiceHref(serviceSegment: string): string {
  return `/intelligence/services/${serviceSegment}`
}

export function wowIntelligenceUseCaseHref(useCaseSegment: string): string {
  return `/intelligence/use-cases/${useCaseSegment}`
}

export function wowIntelligenceMegaNavHref(navId: string): string {
  const service = serviceRouteByNavId.get(navId)
  if (service) return wowIntelligenceServiceHref(service.serviceSegment)

  const useCase = useCaseRouteByNavId.get(navId)
  if (useCase) return wowIntelligenceUseCaseHref(useCase.useCaseSegment)

  return '/intelligence'
}

export function isWowIntelligenceServiceSegment(segment: string): boolean {
  return serviceRouteBySegment.has(segment)
}

export function isWowIntelligenceUseCaseSegment(segment: string): boolean {
  return useCaseRouteBySegment.has(segment)
}
