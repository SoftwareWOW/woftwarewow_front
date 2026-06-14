/** Brand assets from public/images/wow/nav/{SVG,PNG,Profile Picture} */

const navBase = '/images/wow/nav'

function assetPath(...segments: string[]) {
  return `${navBase}/${segments.map((segment) => encodeURIComponent(segment)).join('/')}`
}

export const navbarBrandLogo = {
  light: assetPath('SVG', 'Superagency Standard.svg'),
  dark: assetPath('SVG', 'Superagency White.svg'),
} as const

export const divisionBrandLogos: Record<string, string> = {
  softwareWow: assetPath('SVG', 'SoftwareWOW Standard.svg'),
  wowMarketing: assetPath('PNG', 'Marketing Standard.png'),
  wowDesign: assetPath('SVG', 'Design Standard.svg'),
  wowIntelligence: assetPath('SVG', 'Intelligence Standard.svg'),
  wowSocial: assetPath('SVG', 'Social Standard.svg'),
  wowAccelerate: assetPath('SVG', 'Accelerate Standard.svg'),
  wowWebsites: assetPath('SVG', 'Websites Standard.svg'),
  wowImpact: assetPath('SVG', 'Impact Standard.svg'),
  wowHost: assetPath('SVG', 'Host Standard.svg'),
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
  },
} as const

export const mobileBottomNavIcons: Record<string, string> = {
  company: assetPath('PNG', 'Superagency MonoWhite.png'),
  forYou: assetPath('PNG', 'SoftwareWOW MonoWhite.png'),
  explore: assetPath('PNG', 'Hub MonoWhite.png'),
  more: assetPath('PNG', 'Events MonoWhite.png'),
}

export const divisionIds = new Set(Object.keys(divisionBrandLogos))
