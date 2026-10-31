import {
  divisionSiteConfigs,
  type DivisionNavItem,
  type DivisionSiteConfig,
} from '@/components/wow/divisions/division-site-config'
import { softwareWowNavigation } from '@/components/wow/divisions/softwarewow-navigation'
import type { NavMenuIconId } from '@/components/wow/nav/nav-assets'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'
import type { NavigationData } from '@/components/wow/nav/navigation-types'

export type DivisionBrandProps = {
  homeHref: string
  logo: { light: string; dark: string }
  logoAlt: string
}

export type DivisionFooterServiceCard = {
  title: string
  description: string
  href: string
  iconId?: NavMenuIconId
}

export type DivisionResourcesBrand = DivisionBrandProps & {
  tagline: string
  addressLines: [string, string]
  phone: string
  phoneHref: string
}

export type DivisionChromeFooter = {
  resourcesBrand: DivisionResourcesBrand
  serviceCards: ReadonlyArray<DivisionFooterServiceCard>
  copyright: string
}

export type DivisionChrome = {
  brand: DivisionBrandProps
  navigation: NavigationData
  footer: DivisionChromeFooter
  /** When false, mobile uses link strip instead of mega-menu bottom nav. */
  hasMegaMenu: boolean
  linkNavItems: DivisionNavItem[]
}

const defaultDetailPanel = {
  title: '',
  description: '',
  includes: [] as string[],
  ctaLabel: 'Learn more',
}

export const softwareWowFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software built around your unique business needs.',
    href: '/software/services/custom-software',
    iconId: 'customSoftware',
  },
  {
    title: 'Web & Mobile Applications',
    description: 'Powerful, user-friendly apps for web and mobile.',
    href: '/software/services/web-applications',
    iconId: 'webApplications',
  },
  {
    title: 'Business Systems & Automation',
    description: 'Streamline operations, automate tasks, and work smarter.',
    href: '/software/services/ai-automation',
    iconId: 'businessSystems',
  },
  {
    title: 'Product Design & Prototyping',
    description: 'Turn your ideas into intuitive, ready-to-build designs.',
    href: '/design',
    iconId: 'brandingCreative',
  },
  {
    title: 'Integrations & Modernization',
    description: 'Connect your systems and upgrade outdated technology.',
    href: '/software/services/modernization-integrations',
    iconId: 'modernizationIntegrations',
  },
  {
    title: 'Software Support & Improvement',
    description: 'Keep your software secure, reliable, and evolving.',
    href: '/software/services/custom-software',
    iconId: 'helpSupport',
  },
] as const

function buildLinkOnlyNavigation(navItems: DivisionNavItem[]): NavigationData {
  return {
    detailPanels: { default: defaultDetailPanel },
    items: navItems.map((item) => ({
      id: item.id,
      label: item.label,
      navKind: 'link' as const,
      href: item.href,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: item.id,
        columns: [],
      },
      mobile: { pages: [] },
    })),
  } as unknown as NavigationData
}

function footerCardsFromConfig(config: DivisionSiteConfig): DivisionFooterServiceCard[] {
  const servicesSection = config.footerSections.find((s) =>
    ['services', 'solutions', 'programs', 'product'].includes(s.id),
  )
  if (!servicesSection?.links.length) {
    return config.footerSections[0]?.links.map((link) => ({
      title: link.label,
      description: '',
      href: link.href,
      iconId: 'softwareTechnology',
    })) ?? []
  }
  return servicesSection.links.map((link) => ({
    title: link.label,
    description: '',
    href: link.href,
    iconId: 'softwareTechnology',
  }))
}

function resourcesTaglineFor(config: DivisionSiteConfig): string {
  if (config.id === 'softwareWow') {
    return 'This is where ideas become technologies.'
  }
  return config.tagline
}

export function getDivisionChrome(divisionId: DivisionId): DivisionChrome {
  const config = divisionSiteConfigs[divisionId]
  const brand: DivisionBrandProps = {
    homeHref: config.homeHref,
    logo: config.logo,
    logoAlt: config.logoAlt,
  }

  const navigation =
    divisionId === 'softwareWow'
      ? (softwareWowNavigation as NavigationData)
      : config.navigation ?? buildLinkOnlyNavigation(config.navItems)

  const serviceCards =
    divisionId === 'softwareWow'
      ? softwareWowFooterServiceCards
      : footerCardsFromConfig(config)

  const hasMegaMenu =
    divisionId === 'softwareWow' || Boolean(config.navigation && divisionMenuItems(navigation).length > 0)

  return {
    brand,
    navigation,
    hasMegaMenu,
    linkNavItems: config.navItems,
    footer: {
      resourcesBrand: {
        ...brand,
        tagline: resourcesTaglineFor(config),
        addressLines: config.addressLines,
        phone: config.phone,
        phoneHref: config.phoneHref,
      },
      serviceCards,
      copyright: config.copyright,
    },
  }
}

export function isDivisionNavLinkItem(
  item: NavigationData['items'][number] & { navKind?: 'link' | 'menu'; href?: string },
): boolean {
  return item.navKind === 'link' && Boolean(item.href)
}

export function divisionMenuItems(navigation: NavigationData) {
  return navigation.items.filter(
    (item) => !isDivisionNavLinkItem(item as NavigationData['items'][number] & { navKind?: 'link' | 'menu' }),
  )
}

export function divisionLinkItems(navigation: NavigationData) {
  return navigation.items.filter((item) =>
    isDivisionNavLinkItem(item as NavigationData['items'][number] & { navKind?: 'link' | 'menu' }),
  ) as Array<NavigationData['items'][number] & { navKind: 'link'; href: string }>
}
