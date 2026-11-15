export type DivisionMegaNavSegment = 'services' | 'solutions'

export type DivisionMegaNavRoute = {
  navId: string
  slug: string
  segment: DivisionMegaNavSegment
  title: string
}

export type DivisionMegaNavRouteConfig = {
  divisionSlug: string
  divisionLabel: string
  routes: DivisionMegaNavRoute[]
}

export function buildDivisionMegaNavMaps(routes: DivisionMegaNavRoute[]) {
  const byNavId = new Map(routes.map((route) => [route.navId, route]))
  const bySlug = new Map(routes.map((route) => [route.slug, route]))
  return { byNavId, bySlug }
}

export function divisionMegaNavHref(
  config: DivisionMegaNavRouteConfig,
  navId: string,
  maps: ReturnType<typeof buildDivisionMegaNavMaps>,
): string {
  const route = maps.byNavId.get(navId)
  if (!route) return `/${config.divisionSlug}`
  return `/${config.divisionSlug}/${route.segment}/${route.slug}`
}