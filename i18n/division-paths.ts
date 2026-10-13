/** Public URL segment for each division (after locale prefix). */
export const divisionSlugById = {
  softwareWow: 'software',
  wowMarketing: 'marketing',
  wowDesign: 'design',
  wowIntelligence: 'intelligence',
  wowSocial: 'social',
  wowAccelerate: 'accelerate',
  wowWebsites: 'websites',
  wowImpact: 'impact',
  wowHost: 'host',
  wowHub: 'hub',
  wowEvents: 'events',
} as const

export type DivisionId = keyof typeof divisionSlugById

export const divisionHrefById: Record<DivisionId, string> = Object.fromEntries(
  Object.entries(divisionSlugById).map(([id, slug]) => [id, `/${slug}`]),
) as Record<DivisionId, string>

/** Previous public slugs → canonical slug (permanent redirects). */
export const legacyDivisionSlugToCanonical: Record<string, string> = {
  softwarewow: 'software',
  wowmarketing: 'marketing',
  wowdesign: 'design',
  wowintelligence: 'intelligence',
  wowsocial: 'social',
  wowaccelerate: 'accelerate',
  wowwebsites: 'websites',
  wowimpact: 'impact',
  wowhost: 'host',
  wowhub: 'hub',
  wowevents: 'events',
}

/** Map a CMS or legacy href to the current canonical division path. */
export function normalizeDivisionHref(href: string | null | undefined): string {
  const raw = href?.trim()
  if (!raw) return '/'

  const [pathPart, hashPart] = raw.split('#')
  const path = pathPart?.trim() ?? ''
  const hash = hashPart ? `#${hashPart}` : ''

  if (!path.startsWith('/')) return raw

  const segments = path.split('/').filter(Boolean)
  if (segments.length === 0) return raw

  const slug = segments[0]!.toLowerCase()
  const canonical = legacyDivisionSlugToCanonical[slug]
  if (!canonical) return raw

  const rest = segments.slice(1)
  const normalizedPath = `/${canonical}${rest.length ? `/${rest.join('/')}` : ''}`
  return `${normalizedPath}${hash}`
}

/** Locale-less promotional paths (e.g. wow.onl/software). */
export const promoDivisionSlugs = Object.values(divisionSlugById)

export const DIVISION_SITE_SLUGS = [...promoDivisionSlugs] as const

export type DivisionSiteSlug = (typeof DIVISION_SITE_SLUGS)[number]

export const divisionIdBySlug: Record<DivisionSiteSlug, DivisionId> = {
  software: 'softwareWow',
  marketing: 'wowMarketing',
  design: 'wowDesign',
  intelligence: 'wowIntelligence',
  social: 'wowSocial',
  accelerate: 'wowAccelerate',
  websites: 'wowWebsites',
  impact: 'wowImpact',
  host: 'wowHost',
  hub: 'wowHub',
  events: 'wowEvents',
}

/**
 * WOW Marketing division page lives under `wowmarketing` in the app router
 * because `marketing/` is used by legacy template demo routes (blog, project, services).
 */
export const MARKETING_DIVISION_APP_SEGMENT = 'wowmarketing'

/** SoftwareWOW division app folder (public URL is `/software`). */
export const SOFTWARE_DIVISION_APP_SEGMENT = 'softwarewow'

/** Map public slug → internal app segment when they differ. */
export const divisionAppSegmentByPublicSlug: Partial<Record<DivisionSiteSlug, string>> = {
  marketing: MARKETING_DIVISION_APP_SEGMENT,
  software: SOFTWARE_DIVISION_APP_SEGMENT,
}
