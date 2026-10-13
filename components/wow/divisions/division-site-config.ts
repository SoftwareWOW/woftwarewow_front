import { softwareWowNavigation } from '@/components/wow/divisions/softwarewow-navigation'
import {
  divisionBrandLogos,
  divisionHrefs,
  type DivisionId,
} from '@/components/wow/nav/nav-brand-assets'
import type { NavigationData } from '@/components/wow/nav/navigation-types'

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
  /** Parent-shaped mega-nav. When set, DivisionNavbar uses pills + mega panel + mobile sheet. */
  navigation?: NavigationData
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
  softwareWow: {
    ...baseConfig(
      'softwareWow',
      'SoftwareWOW',
      'Custom software, apps, and digital products built to scale with your business.',
      [
        { id: 'services', label: 'Services', href: '/software#services' },
        { id: 'solutions', label: 'Solutions', href: '/software#solutions' },
        { id: 'work', label: 'Work', href: '/portfolio' },
        { id: 'company', label: 'Company', href: '/about' },
      ],
      [
        {
          id: 'services',
          title: 'Services',
          links: [
            { id: 'customSoftware', label: 'Custom Software', href: '/software/services/custom-software' },
            { id: 'saasDevelopment', label: 'SaaS Development', href: '/software/services/saas-development' },
            { id: 'webApplications', label: 'Web Applications', href: '/software/services/web-applications' },
            { id: 'mobileApps', label: 'Mobile Apps', href: '/software/services/mobile-app-development' },
            { id: 'aiAutomation', label: 'AI & Automation', href: '/software/services/ai-automation' },
            { id: 'modernizationIntegrations', label: 'Modernization & Integrations', href: '/software/services/modernization-integrations' },
          ],
        },
        {
          id: 'company',
          title: 'Company',
          links: [
            { id: 'about', label: 'About SoftwareWOW', href: '/about' },
            { id: 'whyUs', label: 'Why Us', href: '/about/why-us' },
            { id: 'ourProcess', label: 'Our Process', href: '/software#process' },
            { id: 'superagency', label: 'WOW Superagency ↗', href: '/' },
          ],
        },
        {
          id: 'getStarted',
          title: 'Get Started',
          links: [
            { id: 'contact', label: 'Contact', href: '/contact' },
            { id: 'meet', label: 'Book a Meeting', href: '/meet' },
            { id: 'rfq', label: 'Request a Quote', href: '/quotation' },
          ],
        },
      ],
      'Start a Project',
    ),
    navigation: softwareWowNavigation,
    copyright: `© ${new Date().getFullYear()} SoftwareWOW. A brand by WOW Superagency.`,
  },
  wowMarketing: baseConfig(
    'wowMarketing',
    'WOW Marketing',
    'Brand, campaigns, and growth systems that help businesses get discovered and chosen.',
    [
      { id: 'services', label: 'Services', href: '/marketing#services' },
      { id: 'approach', label: 'Approach', href: '/marketing#approach' },
      { id: 'work', label: 'Work', href: '/marketing#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'brand', label: 'Brand Strategy', href: '/marketing#services' },
          { id: 'campaigns', label: 'Campaigns', href: '/marketing#services' },
          { id: 'growth', label: 'Growth', href: '/marketing#services' },
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
      { id: 'services', label: 'Services', href: '/design#services' },
      { id: 'process', label: 'Process', href: '/design#process' },
      { id: 'work', label: 'Work', href: '/design#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'product', label: 'Product Design', href: '/design#services' },
          { id: 'brand', label: 'Brand Design', href: '/design#services' },
          { id: 'ux', label: 'UX / UI', href: '/design#services' },
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
      { id: 'solutions', label: 'Solutions', href: '/intelligence#solutions' },
      { id: 'process', label: 'Process', href: '/intelligence#process' },
      { id: 'clients', label: 'Clients', href: '/intelligence#clients' },
    ],
    [
      {
        id: 'solutions',
        title: 'Solutions',
        links: [
          { id: 'ai', label: 'AI Assistants', href: '/intelligence#solutions' },
          { id: 'automation', label: 'Automation', href: '/intelligence#solutions' },
          { id: 'analytics', label: 'Analytics', href: '/intelligence#solutions' },
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
      { id: 'services', label: 'Services', href: '/social#services' },
      { id: 'approach', label: 'Approach', href: '/social#approach' },
      { id: 'work', label: 'Work', href: '/social#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'strategy', label: 'Social Strategy', href: '/social#services' },
          { id: 'content', label: 'Content', href: '/social#services' },
          { id: 'community', label: 'Community', href: '/social#services' },
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
      { id: 'programs', label: 'Programs', href: '/accelerate#programs' },
      { id: 'process', label: 'Process', href: '/accelerate#process' },
      { id: 'outcomes', label: 'Outcomes', href: '/accelerate#outcomes' },
    ],
    [
      {
        id: 'programs',
        title: 'Programs',
        links: [
          { id: 'launch', label: 'Launch', href: '/accelerate#programs' },
          { id: 'growth', label: 'Growth', href: '/accelerate#programs' },
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
      { id: 'services', label: 'Services', href: '/websites#services' },
      { id: 'process', label: 'Process', href: '/websites#process' },
      { id: 'work', label: 'Work', href: '/websites#work' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'build', label: 'Website Build', href: '/websites#services' },
          { id: 'growth', label: 'Website Growth', href: '/websites#services' },
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
      { id: 'programs', label: 'Programs', href: '/impact#programs' },
      { id: 'approach', label: 'Approach', href: '/impact#approach' },
      { id: 'stories', label: 'Stories', href: '/impact#stories' },
    ],
    [
      {
        id: 'programs',
        title: 'Programs',
        links: [
          { id: 'community', label: 'Community', href: '/impact#programs' },
          { id: 'nonprofit', label: 'Nonprofit', href: '/impact#programs' },
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
      { id: 'services', label: 'Services', href: '/host#services' },
      { id: 'plans', label: 'Plans', href: '/host#plans' },
      { id: 'support', label: 'Support', href: '/host#support' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'hosting', label: 'Hosting', href: '/host#services' },
          { id: 'infra', label: 'Infrastructure', href: '/host#services' },
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
      { id: 'features', label: 'Features', href: '/hub#features' },
      { id: 'access', label: 'Access', href: '/hub#access' },
      { id: 'support', label: 'Support', href: '/hub#support' },
    ],
    [
      {
        id: 'product',
        title: 'Product',
        links: [
          { id: 'portal', label: 'Client Portal', href: '/clientportal' },
          { id: 'features', label: 'Features', href: '/hub#features' },
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
      { id: 'experiences', label: 'Experiences', href: '/events#experiences' },
      { id: 'services', label: 'Services', href: '/events#services' },
    ],
    [
      {
        id: 'services',
        title: 'Services',
        links: [
          { id: 'events', label: 'Events', href: '/events#services' },
          { id: 'experiences', label: 'Experiences', href: '/events#experiences' },
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
