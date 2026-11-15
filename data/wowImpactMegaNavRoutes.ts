import {
  buildDivisionMegaNavMaps,
  divisionMegaNavHref,
  type DivisionMegaNavRoute,
  type DivisionMegaNavRouteConfig,
} from '@/lib/divisions/divisionMegaNavTypes'

const ROUTES: DivisionMegaNavRoute[] = [
  { navId: 'personalBranding', slug: 'personal-branding', segment: 'services', title: 'Personal Branding' },
  { navId: 'thoughtLeadership', slug: 'thought-leadership', segment: 'services', title: 'Thought Leadership' },
  { navId: 'reputationVisibility', slug: 'reputation-visibility', segment: 'services', title: 'Reputation & Visibility' },
  {
    navId: 'speakingMediaPresence',
    slug: 'speaking-media-presence',
    segment: 'services',
    title: 'Speaking & Media Presence',
  },
]

export const WOW_IMPACT_MEGA_NAV_CONFIG: DivisionMegaNavRouteConfig = {
  divisionSlug: 'impact',
  divisionLabel: 'WOW Impact',
  routes: ROUTES,
}

const maps = buildDivisionMegaNavMaps(ROUTES)

export function wowImpactMegaNavHref(navId: string): string {
  return divisionMegaNavHref(WOW_IMPACT_MEGA_NAV_CONFIG, navId, maps)
}

export function getWowImpactMegaNavRouteBySlug(slug: string) {
  return maps.bySlug.get(slug)
}

export const WOW_IMPACT_MEGA_NAV_SLUGS = ROUTES.map((r) => r.slug)