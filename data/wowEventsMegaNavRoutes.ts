import {
  buildDivisionMegaNavMaps,
  divisionMegaNavHref,
  type DivisionMegaNavRoute,
  type DivisionMegaNavRouteConfig,
} from '@/lib/divisions/divisionMegaNavTypes'

const ROUTES: DivisionMegaNavRoute[] = [
  {
    navId: 'ourEventsConferencesSummits',
    slug: 'conferences-summits',
    segment: 'solutions',
    title: 'Conferences & Summits',
  },
  {
    navId: 'ourEventsBrandLaunches',
    slug: 'brand-product-launches',
    segment: 'solutions',
    title: 'Brand & Product Launches',
  },
  {
    navId: 'ourEventsCorporateExperiences',
    slug: 'corporate-experiences',
    segment: 'solutions',
    title: 'Corporate Experiences',
  },
  {
    navId: 'ourEventsNetworkingCommunity',
    slug: 'networking-community',
    segment: 'solutions',
    title: 'Networking & Community',
  },
  {
    navId: 'ourEventsHybridVirtual',
    slug: 'hybrid-virtual-events',
    segment: 'solutions',
    title: 'Hybrid & Virtual Events',
  },
  {
    navId: 'eventsServicesConferencesCorporate',
    slug: 'conferences-corporate-events',
    segment: 'services',
    title: 'Conferences & Corporate Events',
  },
  {
    navId: 'eventsServicesBrandLaunches',
    slug: 'brand-product-launches-services',
    segment: 'services',
    title: 'Brand & Product Launches',
  },
  {
    navId: 'eventsServicesNetworkingCommunity',
    slug: 'networking-community-events',
    segment: 'services',
    title: 'Networking & Community Events',
  },
  {
    navId: 'eventsServicesHybridVirtual',
    slug: 'hybrid-virtual-experiences',
    segment: 'services',
    title: 'Hybrid & Virtual Experiences',
  },
]

export const WOW_EVENTS_MEGA_NAV_CONFIG: DivisionMegaNavRouteConfig = {
  divisionSlug: 'events',
  divisionLabel: 'WOW Events',
  routes: ROUTES,
}

const maps = buildDivisionMegaNavMaps(ROUTES)

export function wowEventsMegaNavHref(navId: string): string {
  return divisionMegaNavHref(WOW_EVENTS_MEGA_NAV_CONFIG, navId, maps)
}

export function getWowEventsMegaNavRouteBySlug(slug: string) {
  return maps.bySlug.get(slug)
}

export const WOW_EVENTS_MEGA_NAV_SLUGS = ROUTES.map((r) => r.slug)