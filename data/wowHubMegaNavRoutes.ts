import {
  buildDivisionMegaNavMaps,
  divisionMegaNavHref,
  type DivisionMegaNavRoute,
  type DivisionMegaNavRouteConfig,
} from '@/lib/divisions/divisionMegaNavTypes'

const ROUTES: DivisionMegaNavRoute[] = [
  { navId: 'hubCoursesMarketingGrowth', slug: 'marketing-growth', segment: 'services', title: 'Marketing & Growth' },
  { navId: 'hubCoursesDesignCreativity', slug: 'design-creativity', segment: 'services', title: 'Design & Creativity' },
  { navId: 'hubCoursesTechnologyAi', slug: 'technology-ai', segment: 'services', title: 'Technology & AI' },
  { navId: 'hubCoursesSalesBusiness', slug: 'sales-business', segment: 'services', title: 'Sales & Business' },
  {
    navId: 'hubCoursesLeadershipBranding',
    slug: 'leadership-personal-branding',
    segment: 'services',
    title: 'Leadership & Personal Branding',
  },
  {
    navId: 'hubCoursesCommunityCollaboration',
    slug: 'community-collaboration',
    segment: 'services',
    title: 'Community & Collaboration',
  },
  { navId: 'hubCommunityAskDiscuss', slug: 'ask-discuss', segment: 'solutions', title: 'Ask & Discuss' },
  { navId: 'hubCommunityLiveSessions', slug: 'live-sessions', segment: 'solutions', title: 'Live Sessions' },
  { navId: 'hubCommunityMeetConnect', slug: 'meet-connect', segment: 'solutions', title: 'Meet & Connect' },
  { navId: 'hubCommunityShareWork', slug: 'share-your-work', segment: 'solutions', title: 'Share Your Work' },
]

export const WOW_HUB_MEGA_NAV_CONFIG: DivisionMegaNavRouteConfig = {
  divisionSlug: 'hub',
  divisionLabel: 'WOW Hub',
  routes: ROUTES,
}

const maps = buildDivisionMegaNavMaps(ROUTES)

export function wowHubMegaNavHref(navId: string): string {
  return divisionMegaNavHref(WOW_HUB_MEGA_NAV_CONFIG, navId, maps)
}

export function getWowHubMegaNavRouteBySlug(slug: string) {
  return maps.bySlug.get(slug)
}

export const WOW_HUB_MEGA_NAV_SLUGS = ROUTES.map((r) => r.slug)