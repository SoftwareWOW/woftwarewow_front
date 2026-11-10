import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const WOW_HERO: CmsHeroImage[] = [
  { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Marketing performance' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Campaign optimization' },
  { src: '/images/wow/Hero/Growth/image (3).png', alt: 'Marketing analytics' },
  { src: '/images/wow/LandingPageNaveBare/Marketing%20%26%20Growth.svg', alt: 'WOW Marketing growth' },
  { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Performance marketing' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Conversion optimization' },
]

export const MARKETING_PERFORMANCE_PAGE_METADATA = {
  title: 'Marketing Performance & Optimization | WOW Marketing',
  description:
    'Improve marketing results with campaign optimization, conversion rate optimization, budget efficiency, audience targeting, and performance analytics.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'MARKETING PERFORMANCE & OPTIMIZATION',
    title: 'Better performance.',
    italicTitle: 'Bigger impact.',
    description:
      'Make every marketing effort count with smarter campaigns, optimized budgets, and data-driven improvements.',
    images: WOW_HERO,
    primaryCtaLabel: 'Optimize Your Marketing',
    secondaryCtaLabel: 'Talk to an Expert',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  builtToPerform: {
    eyebrow: 'PERFORMANCE THAT MATTERS',
    title: 'Every campaign has ',
    accentTitle: 'more potential.',
    description:
      'Improve the elements that influence marketing efficiency, conversions, and growth.',
    ctaLabel: 'Improve Your Performance',
    items: [
      {
        title: 'Conversion Optimization',
        description: 'Turn more visitors and prospects into customers.',
      },
      {
        title: 'Campaign Performance',
        description: 'Improve results across your marketing channels.',
      },
      {
        title: 'Budget Efficiency',
        description: 'Focus spending on what delivers value.',
      },
      {
        title: 'Audience Optimization',
        description: 'Reach the right people with more relevant messaging.',
      },
      {
        title: 'Customer Journey Optimization',
        description: 'Remove friction across key marketing touchpoints.',
      },
      {
        title: 'Continuous Improvement',
        description: 'Test, learn, and refine what works.',
      },
    ],
  },
  whatsIncluded: {},
  websiteJourney: {
    eyebrow: 'OUR APPROACH',
    title: 'From insights to ',
    accentTitle: 'better outcomes.',
    ctaLabel: 'Start Optimizing',
    steps: [
      {
        number: '01',
        title: 'Analyze',
        description: 'Review campaigns, channels, and performance gaps.',
      },
      {
        number: '02',
        title: 'Prioritize',
        description: 'Identify improvements with the greatest potential.',
      },
      {
        number: '03',
        title: 'Optimize',
        description: 'Refine targeting, creative, budgets, and conversion paths.',
      },
      {
        number: '04',
        title: 'Improve',
        description: 'Measure results, test new ideas, and keep progressing.',
      },
    ],
  },
  specialistExpertise: {
    eyebrow: 'PERFORMANCE CAPABILITIES',
    title: 'Every channel. ',
    accentTitle: 'Working harder together.',
    description:
      'Bring the right marketing capabilities together to improve results across the customer journey.',
    items: [
      { title: 'Search & SEO', description: 'Organic visibility and search performance.' },
      { title: 'Paid Advertising', description: 'Campaign efficiency and acquisition.' },
      { title: 'Social Media', description: 'Audience engagement and paid social performance.' },
      { title: 'Content Marketing', description: 'Content effectiveness and conversion.' },
      { title: 'Email Marketing', description: 'Engagement, nurturing, and retention.' },
      { title: 'Analytics & Reporting', description: 'Measurement, insights, and optimization.' },
    ],
  },
  cta: {
    accentText: 'Ready to make',
    mainText: 'every move count?',
    ariaLabel: 'Optimize your marketing with WOW Marketing',
  },
}
