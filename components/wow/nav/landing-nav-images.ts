/** Mega-menu / nav detail art — SVGs in `public/images/wow/LandingPageNaveBare`. */
export const LANDING_NAV_BASE = '/images/wow/LandingPageNaveBare'

export function landingNavImage(filename: string): string {
  return `${LANDING_NAV_BASE}/${encodeURIComponent(filename)}`
}

/** Replaces legacy `/images/wow/nav/cards/*` files that now have SVG equivalents. */
export const legacyNavCardToLandingSvg: Record<string, string> = {
  'Softwaerwow.png': 'Softwarewow 1 1.svg',
  'Design.png':
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  'Intelligent.png': 'Intelligence 2.svg',
  'Social.png': 'Social 3.svg',
  'Accelerate.png': 'Accelerate 2.svg',
  'Website.png': 'Website 1 2.svg',
  'Impact.png': 'Impact 2.svg',
  'Host.png': 'Hosting 2.svg',
  'Event.png': 'Events 3.svg',
  'build&lanch.png':
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  'software&technology.png':
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  'socail&comunity.png': 'Social 2 1.svg',
  'sales-profit-numbers-changing-on-monitor-after-glo-2026-01-08-02-14-54-utc 1.png':
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  'AI and Automation 1.png': 'AI and Automation 2.svg',
  'Branding & Creative 1.png': 'Branding & Creative 2.svg',
  'learningevent.png': 'Education 2.svg',
  'Startup laiunch 1.png': 'Startup laiunch 2.svg',
  'digital transofrmation 1.png': 'digital transofrmation 2.svg',
  'AI Automation 1.png': 'AI Automation 3.svg',
  'SaaS Dev 1.png': 'SaaS Dev 2.svg',
  'Websit groeh 1.png': 'Website 1 2.svg',
  'closeup-of-coiled-metal-spring-with-sufficiently-h-2026-01-08-22-22-51-utc 1.png':
    'data-servers-close-up-2026-01-08-06-54-55-utc 2.svg',
  'pexels-akoonie-35088940 1.png': 'pexels-akoonie-35088940 2.svg',
  'pexels-cottonbro-8088441 1.png': 'pexels-cottonbro-8088441 2.svg',
}

export function legacyNavCardSrc(legacyFilename: string): string {
  const svg = legacyNavCardToLandingSvg[legacyFilename]
  if (!svg) {
    return `/images/wow/nav/cards/${encodeURIComponent(legacyFilename)}`
  }
  return landingNavImage(svg)
}

/** Common landing SVG paths (for imports instead of hard-coded card PNGs). */
export const landingNav = {
  softwareWow: landingNavImage('Softwarewow 1 1.svg'),
  wowDesign: landingNavImage(
    'ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc 2.svg',
  ),
  intelligence: landingNavImage('Intelligence 2.svg'),
  social: landingNavImage('Social 3.svg'),
  socialCommunity: landingNavImage('Social 2 1.svg'),
  accelerate: landingNavImage('Accelerate 2.svg'),
  website: landingNavImage('Website 1 2.svg'),
  impact: landingNavImage('Impact 2.svg'),
  hosting: landingNavImage('Hosting 2.svg'),
  events: landingNavImage('Events 3.svg'),
  buildLaunch: landingNavImage(
    'new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc 2.svg',
  ),
  softwareTechnology: landingNavImage(
    'engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc 2.svg',
  ),
  salesRevenue: landingNavImage(
    'trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc 2.svg',
  ),
  aiAutomation: landingNavImage('AI and Automation 2.svg'),
  brandingCreative: landingNavImage('Branding & Creative 2.svg'),
  learningEvents: landingNavImage('Education 2.svg'),
  startupLaunch: landingNavImage('Startup laiunch 2.svg'),
  digitalTransformation: landingNavImage('digital transofrmation 2.svg'),
  aiAutomationPackage: landingNavImage('AI Automation 3.svg'),
  saasDev: landingNavImage('SaaS Dev 2.svg'),
  enterpriseInfrastructure: landingNavImage(
    'data-servers-close-up-2026-01-08-06-54-55-utc 2.svg',
  ),
  clients: landingNavImage('pexels-akoonie-35088940 2.svg'),
  retailEcommerce: landingNavImage('pexels-cottonbro-8088441 2.svg'),
} as const
