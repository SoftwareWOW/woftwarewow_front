import {
  divisionSiteConfigs,
  type DivisionNavItem,
  type DivisionSiteConfig,
} from '@/components/wow/divisions/division-site-config'
import { wowAccelerateNavigation } from '@/components/wow/divisions/wow-accelerate-navigation'
import { wowDesignNavigation } from '@/components/wow/divisions/wow-design-navigation'
import { wowHostNavigation } from '@/components/wow/divisions/wow-host-navigation'
import { wowEventsNavigation } from '@/components/wow/divisions/wow-events-navigation'
import { wowHubNavigation } from '@/components/wow/divisions/wow-hub-navigation'
import { wowImpactNavigation } from '@/components/wow/divisions/wow-impact-navigation'
import { wowSocialNavigation } from '@/components/wow/divisions/wow-social-navigation'
import { wowIntelligenceNavigation } from '@/components/wow/divisions/wow-intelligence-navigation'
import { wowMarketingNavigation } from '@/components/wow/divisions/wow-marketing-navigation'
import { wowWebsitesNavigation } from '@/components/wow/divisions/wow-websites-navigation'
import { softwareWowNavigation } from '@/components/wow/divisions/softwarewow-navigation'
import { softwareWowMegaNavHref } from '@/data/softwareWowMegaNavRoutes'
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
    href: softwareWowMegaNavHref('customSoftwareDevelopment'),
    iconId: 'customSoftwareDevelopment',
  },
  {
    title: 'Web Application',
    description: 'Powerful, user-friendly web apps for teams and customers.',
    href: softwareWowMegaNavHref('webApplications'),
    iconId: 'webApplications',
  },
  {
    title: 'Mobile Application',
    description: 'Native-quality mobile experiences for iOS and Android.',
    href: softwareWowMegaNavHref('mobileApplications'),
    iconId: 'mobileApplications',
  },
  {
    title: 'Business Systems & Automation',
    description: 'Streamline operations, automate tasks, and work smarter.',
    href: softwareWowMegaNavHref('businessSystemsAutomation'),
    iconId: 'businessSystemsAutomation',
  },
  {
    title: 'Product Design & Prototyping',
    description: 'Turn your ideas into intuitive, ready-to-build designs.',
    href: softwareWowMegaNavHref('productDesignPrototyping'),
    iconId: 'productDesignPrototyping',
  },
  {
    title: 'Integrations & Modernization',
    description: 'Connect your systems and upgrade outdated technology.',
    href: softwareWowMegaNavHref('integrationsModernization'),
    iconId: 'integrationsModernization',
  },
  {
    title: 'Software Support & Improvement',
    description: 'Keep your software secure, reliable, and evolving.',
    href: softwareWowMegaNavHref('softwareSupportImprovement'),
    iconId: 'softwareSupportImprovement',
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

export const wowHostFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Shared Web Hosting',
    description:
      'Get your website online with affordable, secure hosting built for everyday reliability.',
    href: '/host#services',
    iconId: 'sharedWebHosting',
  },
  {
    title: 'VPS Hosting',
    description:
      'Enjoy dedicated resources, greater flexibility, and more control over your hosting environment.',
    href: '/host#services',
    iconId: 'vpsHosting',
  },
  {
    title: 'Dedicated Servers',
    description:
      'Power demanding websites and applications with exclusive resources and complete server control.',
    href: '/host#services',
    iconId: 'dedicatedServers',
  },
  {
    title: 'Cloud Hosting',
    description:
      'Scale your online operations with flexible cloud infrastructure designed for performance and reliability.',
    href: '/host#services',
    iconId: 'cloudHosting',
  },
] as const

export const wowHubFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Marketing & Growth',
    description:
      'Learn practical marketing skills and strategies to grow brands, audiences, and businesses.',
    href: '/hub#explore',
    iconId: 'hubCoursesMarketingGrowth',
  },
  {
    title: 'Design & Creativity',
    description:
      'Develop creative skills and bring your ideas to life through effective design.',
    href: '/hub#explore',
    iconId: 'hubCoursesDesignCreativity',
  },
  {
    title: 'Technology & AI',
    description:
      'Explore emerging technologies and discover practical ways to use AI in everyday work.',
    href: '/hub#explore',
    iconId: 'hubCoursesTechnologyAi',
  },
  {
    title: 'Sales & Business',
    description:
      'Build essential sales and business skills to turn ideas into sustainable growth.',
    href: '/hub#explore',
    iconId: 'hubCoursesSalesBusiness',
  },
  {
    title: 'Leadership & Personal Branding',
    description:
      'Develop leadership confidence, strengthen your personal brand, and grow your professional influence.',
    href: '/hub#explore',
    iconId: 'hubCoursesLeadershipBranding',
  },
  {
    title: 'Community & Collaboration',
    description:
      'Learn to collaborate, share knowledge, and build meaningful professional relationships.',
    href: '/hub#explore',
    iconId: 'hubCoursesCommunityCollaboration',
  },
] as const

export const wowEventsFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Conferences & Summits',
    description:
      'Bring industry leaders together to exchange ideas, inspire innovation, and create opportunities.',
    href: '/events#experiences',
    iconId: 'ourEventsConferencesSummits',
  },
  {
    title: 'Brand & Product Launches',
    description:
      'Celebrate bold ideas with memorable launches that capture attention and spark excitement.',
    href: '/events#experiences',
    iconId: 'ourEventsBrandLaunches',
  },
  {
    title: 'Corporate Experiences',
    description:
      'Create engaging corporate experiences that strengthen teams, celebrate milestones, and inspire collaboration.',
    href: '/events#experiences',
    iconId: 'ourEventsCorporateExperiences',
  },
  {
    title: 'Networking & Community',
    description:
      'Bring people together through meaningful gatherings that build relationships and strengthen communities.',
    href: '/events#experiences',
    iconId: 'ourEventsNetworkingCommunity',
  },
  {
    title: 'Hybrid & Virtual Events',
    description:
      'Connect audiences everywhere with engaging digital experiences that bring people together.',
    href: '/events#experiences',
    iconId: 'ourEventsHybridVirtual',
  },
] as const

export const wowImpactFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Personal Branding',
    description:
      'Build an authentic personal brand that showcases your expertise and sets you apart.',
    href: '/impact#services',
    iconId: 'personalBranding',
  },
  {
    title: 'Thought Leadership',
    description:
      'Establish your authority, share valuable insights, and become a trusted industry voice.',
    href: '/impact#services',
    iconId: 'thoughtLeadership',
  },
  {
    title: 'Reputation & Visibility',
    description:
      'Strengthen your credibility, grow your visibility, and shape how the world sees you.',
    href: '/impact#services',
    iconId: 'reputationVisibility',
  },
  {
    title: 'Speaking & Media Presence',
    description:
      'Communicate confidently, expand your reach, and make a lasting impression across public platforms.',
    href: '/impact#services',
    iconId: 'speakingMediaPresence',
  },
] as const

export const wowSocialFooterServiceCards: ReadonlyArray<DivisionFooterServiceCard> = [
  {
    title: 'Social Media Strategy & Management',
    description:
      'Build a stronger social presence with strategic planning, consistent management, and audience-focused campaigns.',
    href: '/social#services',
    iconId: 'socialMediaStrategyManagement',
  },
  {
    title: 'Social & Influencer Content Creation',
    description:
      'Capture attention and grow engagement through creative content and authentic influencer collaborations.',
    href: '/social#services',
    iconId: 'socialInfluencerContentCreation',
  },
  {
    title: 'Paid Social Advertising & Community Management',
    description:
      'Grow your reach, drive conversions, and build stronger communities through targeted social campaigns.',
    href: '/social#services',
    iconId: 'paidSocialAdvertisingCommunityManagement',
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
  if (config.id === 'wowSocial') {
    return 'This is where content becomes community.'
  }
  if (config.id === 'wowHost') {
    return 'This is where hosting becomes strength.'
  }
  if (config.id === 'wowImpact') {
    return 'This is where stories become influence.'
  }
  if (config.id === 'wowEvents') {
    return 'This is where connections become opportunities.'
  }
  if (config.id === 'wowHub') {
    return 'This is where curiosity becomes mastery.'
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
                : divisionId === 'wowSocial'
                  ? (wowSocialNavigation as NavigationData)
                  : divisionId === 'wowHost'
                    ? (wowHostNavigation as NavigationData)
                    : divisionId === 'wowImpact'
                      ? (wowImpactNavigation as NavigationData)
                      : divisionId === 'wowEvents'
                        ? (wowEventsNavigation as NavigationData)
                        : divisionId === 'wowHub'
                          ? (wowHubNavigation as NavigationData)
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
                : divisionId === 'wowSocial'
                  ? wowSocialFooterServiceCards
                  : divisionId === 'wowHost'
                    ? wowHostFooterServiceCards
                    : divisionId === 'wowImpact'
                      ? wowImpactFooterServiceCards
                      : divisionId === 'wowEvents'
                        ? wowEventsFooterServiceCards
                        : divisionId === 'wowHub'
                          ? wowHubFooterServiceCards
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
