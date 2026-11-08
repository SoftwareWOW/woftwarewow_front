import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const HERO_IMAGES: CmsHeroImage[] = [
  { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Product launch planning' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Go-to-market campaign' },
]

const SERVICE_COVER = '/images/wow/nav/cards/pexels-pixabay-35208 1.png'

export const PRODUCT_LAUNCH_PAGE_METADATA = {
  title: 'Product Launch & Go-to-Market Strategy | WOW Marketing',
  description:
    'Launch your product with go-to-market strategy, audience targeting, campaign planning, launch marketing, and performance optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'Product Launch & Go-to-Market',
    title: 'Make your entrance.',
    italicTitle: 'Make an impact.',
    description:
      'Bring your product to the right audience with a clear strategy, compelling campaigns, and a launch built for momentum.',
    images: HERO_IMAGES,
    primaryCtaLabel: 'Plan Your Launch',
    secondaryCtaLabel: 'Explore Our Services',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  buildLaunchOurServices: {
    sidebarLabel: 'What we deliver',
    title: 'Everything you need to',
    accentTitle: 'launch with confidence.',
    services: [
      {
        slug: 'go-to-market-strategy',
        number: '01',
        title: 'Go-to-Market Strategy',
        description:
          'Define your audience, positioning, channels, and launch priorities.',
        coverImage: SERVICE_COVER,
      },
      {
        slug: 'launch-campaigns',
        number: '02',
        title: 'Launch Campaigns & Promotions',
        description: 'Build excitement through coordinated marketing campaigns.',
        coverImage: SERVICE_COVER,
      },
      {
        slug: 'audience-targeting',
        number: '03',
        title: 'Audience Targeting & Messaging',
        description: 'Reach the right customers with a message that resonates.',
        coverImage: SERVICE_COVER,
      },
      {
        slug: 'launch-performance',
        number: '04',
        title: 'Launch Analytics & Optimization',
        description: 'Track performance and improve campaigns as momentum builds.',
        coverImage: SERVICE_COVER,
      },
    ],
  },
  launchPath: {
    title: 'From first idea to market momentum.',
    ctaLabel: 'Start Your Launch',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description:
          'Understand your audience, competitors, and market opportunities.',
      },
      {
        number: '02',
        title: 'Position',
        description: 'Shape your messaging, offers, and launch strategy.',
      },
      {
        number: '03',
        title: 'Prepare',
        description: 'Create campaigns, content, and launch-ready experiences.',
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Activate your campaigns, measure results, and keep improving.',
      },
    ],
  },
  startupPackage: {
    eyebrow: 'Ready-Made Starting Point',
    title: 'Start strong.',
    accentTitle: 'Build momentum.',
    description:
      'The Startup Launch Package brings together the essentials for introducing your product or business to the market.',
    features: [
      { title: 'Strategy & Positioning' },
      { title: 'Brand Foundations' },
      { title: 'Website & Digital Presence' },
      { title: 'Launch Campaign Essentials' },
      { title: 'Analytics & Tracking' },
      { title: 'Go-Live Support' },
    ],
    cta: {
      label: 'Explore Startup Launch',
      href: '/contact',
    },
    secondaryCtaLabel: 'Request a Custom Solution',
    secondaryCtaHref: '/contact',
  },
  startupPackageImage: {
    src: '/images/wow/foryou/package.png',
    alt: 'Startup Launch Package',
  },
  cta: {
    accentText: 'Ready to make',
    mainText: 'your big debut?',
    ariaLabel: 'Plan your product launch',
  },
}
