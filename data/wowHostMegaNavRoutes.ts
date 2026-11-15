import {
  buildDivisionMegaNavMaps,
  divisionMegaNavHref,
  type DivisionMegaNavRoute,
  type DivisionMegaNavRouteConfig,
} from '@/lib/divisions/divisionMegaNavTypes'

const ROUTES: DivisionMegaNavRoute[] = [
  { navId: 'sharedWebHosting', slug: 'shared-web-hosting', segment: 'services', title: 'Shared Web Hosting' },
  { navId: 'vpsHosting', slug: 'vps-hosting', segment: 'services', title: 'VPS Hosting' },
  { navId: 'dedicatedServers', slug: 'dedicated-servers', segment: 'services', title: 'Dedicated Servers' },
  { navId: 'cloudHosting', slug: 'cloud-hosting', segment: 'services', title: 'Cloud Hosting' },
  {
    navId: 'hostDigitalIdentity',
    slug: 'your-name-your-digital-identity',
    segment: 'solutions',
    title: 'Your Name. Your Digital Identity.',
  },
  {
    navId: 'hostProfessionalEmail',
    slug: 'professional-email-for-your-business',
    segment: 'solutions',
    title: 'Professional Email for Your Business.',
  },
  {
    navId: 'hostProtectOnline',
    slug: 'protect-what-keeps-you-online',
    segment: 'solutions',
    title: 'Protect What Keeps You Online.',
  },
]

export const WOW_HOST_MEGA_NAV_CONFIG: DivisionMegaNavRouteConfig = {
  divisionSlug: 'host',
  divisionLabel: 'WOW Host',
  routes: ROUTES,
}

const maps = buildDivisionMegaNavMaps(ROUTES)

export function wowHostMegaNavHref(navId: string): string {
  return divisionMegaNavHref(WOW_HOST_MEGA_NAV_CONFIG, navId, maps)
}

export function getWowHostMegaNavRouteBySlug(slug: string) {
  return maps.bySlug.get(slug)
}

export const WOW_HOST_MEGA_NAV_SLUGS = ROUTES.map((r) => r.slug)