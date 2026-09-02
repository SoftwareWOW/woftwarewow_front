/** Brand assets from public/images/wow/nav/{SVG,PNG,Profile Picture} */

const navBase = '/images/wow/nav'

function assetPath(...segments: string[]) {
  return `${navBase}/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`
}

export const navbarBrandLogo = {
  light: assetPath('SVG', 'Superagency Standard.svg'),
  dark: assetPath('SVG', 'Superagency White.svg'),
} as const

/** Standard on light backgrounds, White on dark backgrounds (brand guideline) */
export const divisionBrandLogos = {
  light: {
    softwareWow: assetPath('SVG', 'SoftwareWOW Standard.svg'),
    wowMarketing: assetPath('SVG', 'Marketing Standard.svg'),
    wowDesign: assetPath('SVG', 'Design Standard.svg'),
    wowIntelligence: assetPath('SVG', 'Intelligence Standard.svg'),
    wowSocial: assetPath('SVG', 'Social Standard.svg'),
    wowAccelerate: assetPath('SVG', 'Accelerate Standard.svg'),
    wowWebsites: assetPath('SVG', 'Websites Standard.svg'),
    wowImpact: assetPath('SVG', 'Impact Standard.svg'),
    wowHost: assetPath('SVG', 'Host Standard.svg'),
    wowHub: assetPath('SVG', 'Hub Standard.svg'),
    wowEvents: assetPath('SVG', 'Events Standard.svg'),
  },
  dark: {
    softwareWow: assetPath('SVG', 'SoftwareWOW White.svg'),
    wowMarketing: assetPath('SVG', 'Marketing White.svg'),
    wowDesign: assetPath('SVG', 'Design White.svg'),
    wowIntelligence: assetPath('SVG', 'Intelligence White.svg'),
    wowSocial: assetPath('SVG', 'Social White.svg'),
    wowAccelerate: assetPath('SVG', 'Accelerate White.svg'),
    wowWebsites: assetPath('SVG', 'Websites White.svg'),
    wowImpact: assetPath('SVG', 'Impact White.svg'),
    wowHost: assetPath('SVG', 'Host White.svg'),
    wowHub: assetPath('SVG', 'Hub White.svg'),
    wowEvents: assetPath('SVG', 'Events White.svg'),
  },
} as const

export type DivisionId = keyof typeof divisionBrandLogos.light

/** Canonical division routes — domain/name only, no /divisions prefix */
export const divisionHrefs: Record<DivisionId, string> = {
  softwareWow: '/softwarewow',
  wowMarketing: '/wowmarketing',
  wowDesign: '/wowdesign',
  wowIntelligence: '/wowintelligence',
  wowSocial: '/wowsocial',
  wowAccelerate: '/wowaccelerate',
  wowWebsites: '/wowwebsites',
  wowImpact: '/wowimpact',
  wowHost: '/wowhost',
  wowHub: '/wowhub',
  wowEvents: '/wowevents',
}

const divisionHrefSet = new Set(Object.values(divisionHrefs))

export function isDivisionHref(href: string) {
  const path = href.split('#')[0]
  return divisionHrefSet.has(path)
}

export const divisionProfilePictures = {
  light: {
    softwareWow: assetPath('Profile Picture', 'Light', 'SoftwareWOW PFP Light.png'),
    wowMarketing: assetPath('Profile Picture', 'Light', 'Marketing PFP Light.png'),
    wowDesign: assetPath('Profile Picture', 'Light', 'Design PFP Light.png'),
    wowIntelligence: assetPath('Profile Picture', 'Light', 'Intelligence PFP Light.png'),
    wowSocial: assetPath('Profile Picture', 'Light', 'Social PFP Light.png'),
    wowAccelerate: assetPath('Profile Picture', 'Light', 'Accelerate PFP Light.png'),
    wowWebsites: assetPath('Profile Picture', 'Light', 'Websites PFP Light.png'),
    wowImpact: assetPath('Profile Picture', 'Light', 'Impact PFP Light.png'),
    wowHost: assetPath('Profile Picture', 'Light', 'Host PFP Light.png'),
    wowHub: assetPath('Profile Picture', 'Light', 'Hub PFP Light.png'),
    wowEvents: assetPath('Profile Picture', 'Light', 'Events PFP Light.png'),
  },
  dark: {
    softwareWow: assetPath('Profile Picture', 'Dark', 'SoftwareWOW PFP dark.png'),
    wowMarketing: assetPath('Profile Picture', 'Dark', 'Marketing PFP dark.png'),
    wowDesign: assetPath('Profile Picture', 'Dark', 'Design PFP dark.png'),
    wowIntelligence: assetPath('Profile Picture', 'Dark', 'Intelligence PFP dark.png'),
    wowSocial: assetPath('Profile Picture', 'Dark', 'Social PFP dark.png'),
    wowAccelerate: assetPath('Profile Picture', 'Dark', 'Accelerate PFP dark.png'),
    wowWebsites: assetPath('Profile Picture', 'Dark', 'Websites PFP dark.png'),
    wowImpact: assetPath('Profile Picture', 'Dark', 'Impact PFP dark.png'),
    wowHost: assetPath('Profile Picture', 'Dark', 'Host PFP dark.png'),
    wowHub: assetPath('Profile Picture', 'Dark', 'Hub PFP dark.png'),
    wowEvents: assetPath('Profile Picture', 'Dark', 'Events PFP dark.png'),
  },
} as const

export const divisionIds = new Set(Object.keys(divisionBrandLogos.light))

/** Slugs used by DevisionOverview (excludes Events). */
export const DIVISION_SITE_SLUGS = [
  'softwarewow',
  'wowmarketing',
  'wowdesign',
  'wowintelligence',
  'wowsocial',
  'wowaccelerate',
  'wowwebsites',
  'wowimpact',
  'wowhost',
  'wowhub',
] as const

export type DivisionSiteSlug = (typeof DIVISION_SITE_SLUGS)[number]

export const divisionIdBySlug: Record<DivisionSiteSlug, DivisionId> = {
  softwarewow: 'softwareWow',
  wowmarketing: 'wowMarketing',
  wowdesign: 'wowDesign',
  wowintelligence: 'wowIntelligence',
  wowsocial: 'wowSocial',
  wowaccelerate: 'wowAccelerate',
  wowwebsites: 'wowWebsites',
  wowimpact: 'wowImpact',
  wowhost: 'wowHost',
  wowhub: 'wowHub',
}

export function getDivisionSlugFromPathname(pathname: string): DivisionSiteSlug | null {
  const segments = pathname.split('/').filter(Boolean)
  // With localePrefix: 'always' → /en-US/softwarewow or sometimes /softwarewow
  const candidate = segments.find((segment) =>
    (DIVISION_SITE_SLUGS as readonly string[]).includes(segment),
  )
  return (candidate as DivisionSiteSlug | undefined) ?? null
}

export function isDivisionSitePathname(pathname: string): boolean {
  return getDivisionSlugFromPathname(pathname) !== null
}
