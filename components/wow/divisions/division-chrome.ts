import {
  divisionSiteConfigs,
  type DivisionNavItem,
  type DivisionSiteConfig,
} from '@/components/wow/divisions/division-site-config'
import { wowAccelerateNavigation } from '@/components/wow/divisions/wow-accelerate-navigation'
import { wowDesignNavigation } from '@/components/wow/divisions/wow-design-navigation'
import { wowIntelligenceNavigation } from '@/components/wow/divisions/wow-intelligence-navigation'
import { wowMarketingNavigation } from '@/components/wow/divisions/wow-marketing-navigation'
import { wowWebsitesNavigation } from '@/components/wow/divisions/wow-websites-navigation'
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

export const wowMarketingFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Search Engine Optimization',
    description: 'Rank higher. Get discovered.',
    href: '/marketing#services',
    iconId: 'searchEngineOptimization',
  },
  {
    title: 'Pay-Per-Click Advertising',
    description: 'Reach ready buyers. Maximize ROI.',
    href: '/marketing#services',
    iconId: 'payPerClickAdvertising',
  },
  {
    title: 'Social Media Marketing',
    description: 'Grow your audience. Build your brand.',
    href: '/marketing#services',
    iconId: 'socialMediaMarketing',
  },
  {
    title: 'Content Marketing',
    description: 'Create value. Earn attention.',
    href: '/marketing#services',
    iconId: 'contentMarketing',
  },
  {
    title: 'Email Marketing',
    description: 'Stay connected. Drive action.',
    href: '/marketing#services',
    iconId: 'emailMarketing',
  },
  {
    title: 'Marketing Automation',
    description: 'Work smarter. Scale faster.',
    href: '/marketing#services',
    iconId: 'marketingAutomationService',
  },
  {
    title: 'Lead Generation',
    description: 'Capture interest. Fuel growth.',
    href: '/marketing#services',
    iconId: 'leadGenerationService',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Measure what matters. Decide with data.',
    href: '/marketing#services',
    iconId: 'analyticsReporting',
  },
  {
    title: 'Local SEO',
    description: 'Show up locally. Win nearby.',
    href: '/marketing#services',
    iconId: 'localSeo',
  },
  {
    title: 'Digital Strategy',
    description: 'Plan clearly. Grow intentionally.',
    href: '/marketing#services',
    iconId: 'digitalStrategy',
  },
] as const

export const wowWebsitesFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Business Websites',
    description: 'Build your professional online presence.',
    href: '/websites#services',
    iconId: 'businessWebsites',
  },
  {
    title: 'eCommerce Websites',
    description: 'Sell online. Grow your revenue.',
    href: '/websites#services',
    iconId: 'ecommerceWebsites',
  },
  {
    title: 'Website Redesigns',
    description: 'Refresh your website. Elevate results.',
    href: '/websites#services',
    iconId: 'websiteRedesigns',
  },
  {
    title: 'Landing Pages',
    description: 'Turn more visitors into leads.',
    href: '/websites#services',
    iconId: 'landingPages',
  },
  {
    title: 'Accessible Web Experiences',
    description: 'Make your website accessible to everyone.',
    href: '/websites#services',
    iconId: 'accessibleWebExperiences',
  },
  {
    title: 'Multilingual Websites',
    description: 'Reach customers in more languages.',
    href: '/websites#services',
    iconId: 'multilingualWebsites',
  },
  {
    title: 'Conversion Optimization',
    description: 'Turn more clicks into customers.',
    href: '/websites#services',
    iconId: 'conversionOptimization',
  },
  {
    title: 'Website Optimization',
    description: 'Improve speed, performance, and usability.',
    href: '/websites#services',
    iconId: 'websiteOptimization',
  },
] as const

export const wowIntelligenceFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'AI Assistants & Chatbots',
    description:
      'Deliver instant, intelligent conversations that improve customer experiences and save time.',
    href: '/intelligence#ai-solutions',
    iconId: 'aiAssistantsChatbots',
  },
  {
    title: 'Intelligent Automation',
    description:
      'Automate repetitive tasks and streamline workflows with AI-powered business solutions.',
    href: '/intelligence#ai-solutions',
    iconId: 'intelligentAutomation',
  },
  {
    title: 'Business Intelligence & Predictive Insights',
    description:
      'Transform business data into actionable insights and smarter future-focused decisions.',
    href: '/intelligence#ai-solutions',
    iconId: 'businessIntelligencePredictiveInsights',
  },
] as const

export const wowAccelerateFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Lead Generation',
    description: 'Attract leads. Create opportunities.',
    href: '/accelerate#services',
    iconId: 'leadGeneration',
  },
  {
    title: 'Sales Funnel Development',
    description: 'Turn prospects into paying customers.',
    href: '/accelerate#services',
    iconId: 'salesFunnelDevelopment',
  },
  {
    title: 'CRM Setup & Optimization',
    description: 'Organize contacts. Streamline sales.',
    href: '/accelerate#services',
    iconId: 'crmSetupOptimization',
  },
  {
    title: 'Sales Automation',
    description: 'Automate tasks. Close deals faster.',
    href: '/accelerate#services',
    iconId: 'salesAutomation',
  },
  {
    title: 'Sales Analytics & Reporting',
    description: 'Track performance. Grow smarter.',
    href: '/accelerate#services',
    iconId: 'salesAnalyticsReporting',
  },
  {
    title: 'Sales Process Optimization',
    description: 'Simplify selling. Improve conversions.',
    href: '/accelerate#services',
    iconId: 'salesProcessOptimization',
  },
  {
    title: 'Appointment Setting & Outreach',
    description: 'Start conversations. Book more meetings.',
    href: '/accelerate#services',
    iconId: 'appointmentSettingOutreach',
  },
  {
    title: 'Lead Qualification & Nurturing',
    description: 'Identify, engage, and convert prospects.',
    href: '/accelerate#services',
    iconId: 'leadQualificationNurturing',
  },
] as const

export const wowDesignFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Brand Identity & Strategy',
    description:
      'Build a distinctive brand identity that inspires trust and leaves a lasting impression.',
    href: '/design#services',
    iconId: 'brandIdentityStrategy',
  },
  {
    title: 'Graphic & Marketing Design',
    description:
      'Create impactful visuals that capture attention, communicate your message, and strengthen your brand.',
    href: '/design#services',
    iconId: 'graphicMarketingDesign',
  },
  {
    title: 'UI/UX & Digital Design',
    description:
      'Design intuitive, engaging digital experiences that make every interaction feel effortless.',
    href: '/design#services',
    iconId: 'uiUxDigitalDesign',
  },
  {
    title: 'Video, Motion & Creative Content',
    description:
      'Bring your brand to life with compelling visuals, motion, and creative storytelling.',
    href: '/design#services',
    iconId: 'videoMotionCreativeContent',
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
  if (config.id === 'wowMarketing') {
    return 'This is where strategy becomes growth.'
  }
  if (config.id === 'wowWebsites') {
    return 'This is where websites become growth engines.'
  }
  if (config.id === 'wowIntelligence') {
    return 'This is where intelligence becomes advantage.'
  }
  if (config.id === 'wowAccelerate') {
    return 'This is where sales become scalable.'
  }
  if (config.id === 'wowDesign') {
    return 'This is where imagination becomes design.'
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
      : divisionId === 'wowMarketing'
        ? (wowMarketingNavigation as NavigationData)
        : divisionId === 'wowWebsites'
          ? (wowWebsitesNavigation as NavigationData)
          : divisionId === 'wowIntelligence'
            ? (wowIntelligenceNavigation as NavigationData)
            : divisionId === 'wowAccelerate'
              ? (wowAccelerateNavigation as NavigationData)
              : divisionId === 'wowDesign'
                ? (wowDesignNavigation as NavigationData)
                : config.navigation ?? buildLinkOnlyNavigation(config.navItems)

  const serviceCards =
    divisionId === 'softwareWow'
      ? softwareWowFooterServiceCards
      : divisionId === 'wowMarketing'
        ? wowMarketingFooterServiceCards
        : divisionId === 'wowWebsites'
          ? wowWebsitesFooterServiceCards
          : divisionId === 'wowIntelligence'
            ? wowIntelligenceFooterServiceCards
            : divisionId === 'wowAccelerate'
              ? wowAccelerateFooterServiceCards
              : divisionId === 'wowDesign'
                ? wowDesignFooterServiceCards
                : footerCardsFromConfig(config)

  const hasMegaMenu = divisionMenuItems(navigation).length > 0

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

export type DivisionNavLinkItem = NavigationData['items'][number] & {
  navKind: 'link'
  href: string
}

export function isDivisionNavLinkItem(
  item: NavigationData['items'][number],
): item is DivisionNavLinkItem {
  const withKind = item as { navKind?: string; href?: string }
  return withKind.navKind === 'link' && Boolean(withKind.href)
}

export function divisionMenuItems(navigation: NavigationData) {
  return navigation.items.filter((item) => !isDivisionNavLinkItem(item))
}

export function divisionLinkItems(navigation: NavigationData): DivisionNavLinkItem[] {
  return navigation.items.filter(isDivisionNavLinkItem)
}
