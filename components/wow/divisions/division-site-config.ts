import {
  divisionBrandLogos,
  divisionHrefs,
  type DivisionId,
} from '@/components/wow/nav/nav-brand-assets'

export type DivisionNavItem = {
  id: string
  label: string
  href: string
}

export type DivisionFooterLink = {
  id: string
  label: string
  href: string
}

export type DivisionFooterSection = {
  id: string
  title: string
  links: DivisionFooterLink[]
}

export type DivisionSiteConfig = {
  id: DivisionId
  name: string
  homeHref: string
  logo: { light: string; dark: string }
  logoAlt: string
  tagline: string
  phone: string
  phoneHref: string
  addressLines: [string, string]
  navItems: DivisionNavItem[]
  cta: { label: string; href: string }
  footerSections: DivisionFooterSection[]
  copyright: string
}

const sharedAddress: [string, string] = [
  '90 Burnhamthorpe Rd W, Suite 1400',
  'Mississauga, ON L5B 3C3, Canada',
]

const phone = '+1 (833) SOFT-WOW'
const phoneHref = 'tel:+18337638969'

function baseConfig(
  id: DivisionId,
  name: string,
  tagline: string,
  navItems: DivisionNavItem[],
  footerSections: DivisionFooterSection[],
  ctaLabel = 'Contact Us',
): DivisionSiteConfig {
  const homeHref = divisionHrefs[id]
  return {
    id,
    name,
    homeHref,
    logo: {
      light: divisionBrandLogos.light[id],
      dark: divisionBrandLogos.dark[id],
    },
    logoAlt: `${name} logo`,
    tagline,
    phone,
    phoneHref,
    addressLines: sharedAddress,
    navItems,
    cta: { label: ctaLabel, href: '/contact' },
    footerSections,
    copyright: `© ${new Date().getFullYear()} ${name}. Part of WOW Superagency.`,
  }
}

export const divisionSiteConfigs: Record<DivisionId, DivisionSiteConfig> = {
  softwareWow: baseConfig(
    'softwareWow',
    'SoftwareWOW',
    'Custom software, apps, and digital products built to scale with your business.',
    [
      { id: 'services', label: 'Services', href: '/softwarewow#services' },
      { id: 'process', label: 'Process', href: '/softwarewow#process' },
      { id: 'projects', label: 'Projects', href: '/softwarewow#projects' },
      { id: 'tech', label: 'Technologies', href: '/softwarewow#technologies' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'custom', label: 'Custom Software', href: '/softwarewow#services' },
          { id: 'apps', label: 'Mobile Apps', href: '/softwarewow#services' },
          { id: 'products', label: 'Digital Products', href: '/softwarewow#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
          { id: 'careers', label: 'Careers', href: '/career' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
          { id: 'rfq', label: 'Request a Quote', href: '/quotation' },
        ],
      },
    ],
    'Start a Project',
  ),
  wowMarketing: baseConfig(
    'wowMarketing',
    'WOW Marketing',
    'Brand, campaigns, and growth systems that help businesses get discovered and chosen.',
    [
      { id: 'services', label: 'Services', href: '/wowmarketing#services' },
      { id: 'approach', label: 'Approach', href: '/wowmarketing#approach' },
      { id: 'work', label: 'Work', href: '/wowmarketing#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'brand', label: 'Brand Strategy', href: '/wowmarketing#services' },
          { id: 'campaigns', label: 'Campaigns', href: '/wowmarketing#services' },
          { id: 'growth', label: 'Growth', href: '/wowmarketing#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowDesign: baseConfig(
    'wowDesign',
    'WOW Design',
    'Product, brand, and experience design that makes digital feel premium and human.',
    [
      { id: 'services', label: 'Services', href: '/wowdesign#services' },
      { id: 'process', label: 'Process', href: '/wowdesign#process' },
      { id: 'work', label: 'Work', href: '/wowdesign#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'product', label: 'Product Design', href: '/wowdesign#services' },
          { id: 'brand', label: 'Brand Design', href: '/wowdesign#services' },
          { id: 'ux', label: 'UX / UI', href: '/wowdesign#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowIntelligence: baseConfig(
    'wowIntelligence',
    'WOW Intelligence',
    'AI assistants, analytics, and automation that sharpen decisions and reduce manual work.',
    [
      { id: 'solutions', label: 'Solutions', href: '/wowintelligence#solutions' },
      { id: 'process', label: 'Process', href: '/wowintelligence#process' },
      { id: 'clients', label: 'Clients', href: '/wowintelligence#clients' },
    ],
    [
      {
        id: 'solutions',
        title: 'Solutions',
        links: [
          { id: 'ai', label: 'AI Assistants', href: '/wowintelligence#solutions' },
          { id: 'automation', label: 'Automation', href: '/wowintelligence#solutions' },
          { id: 'analytics', label: 'Analytics', href: '/wowintelligence#solutions' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
    'Talk to Intelligence',
  ),
  wowSocial: baseConfig(
    'wowSocial',
    'WOW Social',
    'Social strategy, content, and community systems that build presence and engagement.',
    [
      { id: 'services', label: 'Services', href: '/wowsocial#services' },
      { id: 'approach', label: 'Approach', href: '/wowsocial#approach' },
      { id: 'work', label: 'Work', href: '/wowsocial#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'strategy', label: 'Social Strategy', href: '/wowsocial#services' },
          { id: 'content', label: 'Content', href: '/wowsocial#services' },
          { id: 'community', label: 'Community', href: '/wowsocial#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowAccelerate: baseConfig(
    'wowAccelerate',
    'WOW Accelerate',
    'Launch and growth systems that help startups and teams move from idea to market faster.',
    [
      { id: 'programs', label: 'Programs', href: '/wowaccelerate#programs' },
      { id: 'process', label: 'Process', href: '/wowaccelerate#process' },
      { id: 'outcomes', label: 'Outcomes', href: '/wowaccelerate#outcomes' },
    ],
    [
      {
        id: 'programs',
        title: 'Programs',
        links: [
          { id: 'launch', label: 'Launch', href: '/wowaccelerate#programs' },
          { id: 'growth', label: 'Growth', href: '/wowaccelerate#programs' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowWebsites: baseConfig(
    'wowWebsites',
    'WOW Websites',
    'High-performing websites engineered for clarity, conversion, and continuous growth.',
    [
      { id: 'services', label: 'Services', href: '/wowwebsites#services' },
      { id: 'process', label: 'Process', href: '/wowwebsites#process' },
      { id: 'work', label: 'Work', href: '/wowwebsites#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'build', label: 'Website Build', href: '/wowwebsites#services' },
          { id: 'growth', label: 'Website Growth', href: '/wowwebsites#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowImpact: baseConfig(
    'wowImpact',
    'WOW Impact',
    'Purpose-driven digital solutions that help organizations create measurable community impact.',
    [
      { id: 'programs', label: 'Programs', href: '/wowimpact#programs' },
      { id: 'approach', label: 'Approach', href: '/wowimpact#approach' },
      { id: 'stories', label: 'Stories', href: '/wowimpact#stories' },
    ],
    [
      {
        id: 'programs',
        title: 'Programs',
        links: [
          { id: 'community', label: 'Community', href: '/wowimpact#programs' },
          { id: 'nonprofit', label: 'Nonprofit', href: '/wowimpact#programs' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowHost: baseConfig(
    'wowHost',
    'WOW Host',
    'Reliable hosting, infrastructure, and support for modern digital products and platforms.',
    [
      { id: 'services', label: 'Services', href: '/wowhost#services' },
      { id: 'plans', label: 'Plans', href: '/wowhost#plans' },
      { id: 'support', label: 'Support', href: '/wowhost#support' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'hosting', label: 'Hosting', href: '/wowhost#services' },
          { id: 'infra', label: 'Infrastructure', href: '/wowhost#services' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowHub: baseConfig(
    'wowHub',
    'WOW Hub',
    'The connected workspace for clients, partners, and teams across the WOW ecosystem.',
    [
      { id: 'features', label: 'Features', href: '/wowhub#features' },
      { id: 'access', label: 'Access', href: '/wowhub#access' },
      { id: 'support', label: 'Support', href: '/wowhub#support' },
    ],
    [
      {
        id: 'product',
        title: 'Product',
        links: [
          { id: 'portal', label: 'Client Portal', href: '/clientportal' },
          { id: 'features', label: 'Features', href: '/wowhub#features' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
  wowEvents: baseConfig(
    'wowEvents',
    'WOW Events',
    'Experiences and events that bring brands, communities, and ideas together.',
    [
      { id: 'experiences', label: 'Experiences', href: '/wowevents#experiences' },
      { id: 'services', label: 'Services', href: '/wowevents#services' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'events', label: 'Events', href: '/wowevents#services' },
          { id: 'experiences', label: 'Experiences', href: '/wowevents#experiences' },
        ],
      },
      {
        id: 'company',
        title: 'Company',
        links: [
          { id: 'about', label: 'About Superagency', href: '/about' },
          { id: 'locations', label: 'Locations', href: '/locations' },
        ],
      },
      {
        id: 'connect',
        title: 'Connect',
        links: [
          { id: 'contact', label: 'Contact', href: '/contact' },
          { id: 'meet', label: 'Book a Meeting', href: '/meet' },
        ],
      },
    ],
  ),
}

export function getDivisionSiteConfig(id: DivisionId): DivisionSiteConfig {
  return divisionSiteConfigs[id]
}
