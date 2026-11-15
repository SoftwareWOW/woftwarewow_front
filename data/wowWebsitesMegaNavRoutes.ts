import {
  buildDivisionMegaNavMaps,
  divisionMegaNavHref,
  type DivisionMegaNavRoute,
  type DivisionMegaNavRouteConfig,
} from '@/lib/divisions/divisionMegaNavTypes'

const ROUTES: DivisionMegaNavRoute[] = [
  { navId: 'businessWebsites', slug: 'business-websites', segment: 'services', title: 'Business Websites' },
  { navId: 'ecommerceWebsites', slug: 'ecommerce-websites', segment: 'services', title: 'eCommerce Websites' },
  { navId: 'websiteRedesigns', slug: 'website-redesigns', segment: 'services', title: 'Website Redesigns' },
  { navId: 'landingPages', slug: 'landing-pages', segment: 'services', title: 'Landing Pages' },
  {
    navId: 'accessibleWebExperiences',
    slug: 'accessible-web-experiences',
    segment: 'services',
    title: 'Accessible Web Experiences',
  },
  { navId: 'multilingualWebsites', slug: 'multilingual-websites', segment: 'services', title: 'Multilingual Websites' },
  {
    navId: 'conversionOptimization',
    slug: 'conversion-optimization',
    segment: 'services',
    title: 'Conversion Optimization',
  },
  { navId: 'websiteOptimization', slug: 'website-optimization', segment: 'services', title: 'Website Optimization' },
]

export const WOW_WEBSITES_MEGA_NAV_CONFIG: DivisionMegaNavRouteConfig = {
  divisionSlug: 'websites',
  divisionLabel: 'WOW Websites',
  routes: ROUTES,
}

const maps = buildDivisionMegaNavMaps(ROUTES)

export function wowWebsitesMegaNavHref(navId: string): string {
  return divisionMegaNavHref(WOW_WEBSITES_MEGA_NAV_CONFIG, navId, maps)
}

export function getWowWebsitesMegaNavRouteBySlug(slug: string) {
  return maps.bySlug.get(slug)
}

export const WOW_WEBSITES_MEGA_NAV_SLUGS = ROUTES.map((r) => r.slug)