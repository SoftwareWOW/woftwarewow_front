import {
  DIVISION_SITE_SLUGS,
  divisionHrefById,
  divisionIdBySlug,
  type DivisionId,
  type DivisionSiteSlug,
} from '@/i18n/division-paths'

export type { DivisionId }

/** Brand SVG logos from public/images/logo (Standard = light UI, White = dark UI) */

const logoBase = '/images/logo'

function logoPath(filename: string) {
  return `${logoBase}/${encodeURIComponent(filename)}`
}

export const navbarBrandLogo = {
  light: logoPath('Superagency Standard.svg'),
  dark: logoPath('Superagency White.svg'),
} as const

/** ~269×34.49px at 1400px viewport; scales down/up with screen width. */
export const navbarSuperagencyLogoClass =
  'h-[clamp(18px,2.4643vw,47px)] w-auto max-w-full shrink-0 object-contain object-left'

/** Standard on light backgrounds, White on dark backgrounds (brand guideline) */
export const divisionBrandLogos = {
  light: {
    softwareWow: logoPath('SoftwareWOW Standard.svg'),
    wowMarketing: logoPath('Marketing Standard.svg'),
    wowDesign: logoPath('Design Standard.svg'),
    wowIntelligence: logoPath('Intelligence Standard.svg'),
    wowSocial: logoPath('Social Standard.svg'),
    wowAccelerate: logoPath('Accelerate Standard.svg'),
    wowWebsites: logoPath('Websites Standard.svg'),
    wowImpact: logoPath('Impact Standard.svg'),
    wowHost: logoPath('Host Standard.svg'),
    wowHub: logoPath('Hub Standard.svg'),
    wowEvents: logoPath('Events Standard.svg'),
  },
  dark: {
    softwareWow: logoPath('SoftwareWOW White.svg'),
    wowMarketing: logoPath('Marketing White.svg'),
    wowDesign: logoPath('Design White.svg'),
    wowIntelligence: logoPath('Intelligence White.svg'),
    wowSocial: logoPath('Social White.svg'),
    wowAccelerate: logoPath('Accelerate White.svg'),
    wowWebsites: logoPath('Websites White.svg'),
    wowImpact: logoPath('Impact White.svg'),
    wowHost: logoPath('Host White.svg'),
    wowHub: logoPath('Hub White.svg'),
    wowEvents: logoPath('Events White.svg'),
  },
} as const

/** Canonical division routes — domain/name only, no /divisions prefix */
export const divisionHrefs: Record<DivisionId, string> = divisionHrefById

const divisionHrefSet = new Set(Object.values(divisionHrefs))

export function isDivisionHref(href: string) {
  const path = href.split('#')[0]
  return divisionHrefSet.has(path)
}

const navBase = '/images/wow/nav'

function assetPath(...segments: string[]) {
  return `${navBase}/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`
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

export { DIVISION_SITE_SLUGS, divisionIdBySlug, type DivisionSiteSlug }

export function getDivisionSlugFromPathname(pathname: string): DivisionSiteSlug | null {
  const segments = pathname.split('/').filter(Boolean)
  const candidate = segments.find((segment) =>
    (DIVISION_SITE_SLUGS as readonly string[]).includes(segment),
  )
  return (candidate as DivisionSiteSlug | undefined) ?? null
}

export function isDivisionSitePathname(pathname: string): boolean {
  return getDivisionSlugFromPathname(pathname) !== null
}
