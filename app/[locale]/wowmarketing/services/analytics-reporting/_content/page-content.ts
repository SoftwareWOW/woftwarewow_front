import type { CmsHeroImage } from '@/lib/strapi/cms-image'

/** Placeholder floating hero art — replace when final assets are ready */
const WOW_DT = [
  '/images/wow/LandingPageNaveBare/digital%20transofrmation%202.svg',
  '/images/wow/LandingPageNaveBare/Intelligence%202.svg',
  '/images/wow/LandingPageNaveBare/Accelerate%202.svg',
  '/images/wow/LandingPageNaveBare/AI%20Automation%203.svg',
  '/images/wow/LandingPageNaveBare/Website%201%202.svg',
  '/images/wow/LandingPageNaveBare/engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc%202.svg',
] as const

const heroImages: CmsHeroImage[] = WOW_DT.map((src, i) => ({
  src,
  alt: `Analytics and reporting placeholder ${i + 1}`,
}))

export const ANALYTICS_REPORTING_PAGE_METADATA = {
  title: 'Marketing Analytics & Reporting Services | WOW Marketing',
  description:
    'Make smarter marketing decisions with performance dashboards, conversion tracking, campaign attribution, customer insights, and analytics reporting.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'ANALYTICS & REPORTING',
    title: 'Less guesswork.',
    italicTitle: 'More growth.',
    description:
      'Turn scattered marketing data into clear insights, smarter decisions, and measurable performance.',
    images: heroImages,
    primaryCtaLabel: 'Unlock Your Insights',
    secondaryCtaLabel: 'Explore Our Capabilities',
  },
  theGap: {
    sectionEyebrow: 'The Data Gap',
    titleLine1: 'Plenty of data.',
    titleAccent: 'Not enough clarity.',
    description: 'Your marketing generates numbers every day. The challenge is knowing what they really mean.',
    cards: [
      {
        id: 1,
        title: "What's happening now",
        icon: 'x' as const,
        features: [
          'Data scattered across multiple platforms.',
          'Reports take too much time to prepare.',
          'Campaign performance is difficult to compare.',
          'Customer journeys are hard to track.',
          'Marketing ROI remains unclear.',
        ],
      },
      {
        id: 2,
        title: 'What you need next',
        icon: 'check' as const,
        features: [
          'Connected marketing data',
          'Clear performance dashboards',
          'Consistent campaign tracking',
          'Better customer insights',
          'Confident, data-driven decisions',
        ],
        isFeatured: true,
      },
    ],
  },
  transformationPlan: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Make your data',
    accentTitle: 'work harder.',
    description: '',
    ctaLine: '',
    ctaButtonLabel: 'Explore Your Marketing Data',
    ctaAriaLabel: 'Explore your marketing data with WOW Marketing',
    items: [
      {
        title: 'Marketing Analytics Setup',
        description: 'Track the metrics that matter across your marketing channels.',
      },
      {
        title: 'Performance Dashboards',
        description: 'Bring important marketing results into one clear view.',
      },
      {
        title: 'Conversion & Event Tracking',
        description: 'Understand the actions customers take across your website.',
      },
      {
        title: 'Campaign Attribution',
        description: 'See how different channels contribute to conversions.',
      },
      {
        title: 'Audience & Customer Insights',
        description: 'Discover how people find, engage with, and choose your brand.',
      },
      {
        title: 'Reporting & Optimization',
        description: 'Turn performance trends into actionable improvements.',
      },
    ],
  },
  beforeAfterGap: {
    eyebrow: 'THE DIFFERENCE',
    title: 'See the bigger picture.',
    accentTitle: 'Make better moves.',
    description: '',
    items: [
      { title: 'Scattered performance data', description: '' },
      { title: 'Manual reporting', description: '' },
      { title: 'Unclear campaign results', description: '' },
      { title: 'Missing conversion insights', description: '' },
      { title: 'Difficult channel comparisons', description: '' },
      { title: 'Decisions based on assumptions', description: '' },
      { title: 'Connected marketing insights', description: '' },
      { title: 'Streamlined reporting', description: '' },
      { title: 'Clear campaign performance', description: '' },
      { title: 'Reliable conversion tracking', description: '' },
      { title: 'Better channel visibility', description: '' },
      { title: 'Decisions backed by data', description: '' },
    ],
    closingLine:
      "Better reporting isn't about more numbers. It's about knowing what to do next.",
  },
  transformationPriorities: {
    eyebrow: 'PERFORMANCE PRIORITIES',
    title: 'Focus on the metrics',
    accentTitle: 'that move you.',
    description:
      'Understand what matters today, what needs improving, and where your next opportunities are.',
    ctaLabel: 'Discover Your Growth Opportunities',
    rows: [
      {
        id: '01',
        title: 'Visibility',
        heading: "Know who's finding you.",
        subtext: '',
        bullets: 'Traffic · Reach · Impressions',
      },
      {
        id: '02',
        title: 'Engagement',
        heading: 'Understand what captures interest.',
        subtext: '',
        bullets: 'Interactions · Engagement · User journeys',
      },
      {
        id: '03',
        title: 'Conversions',
        heading: 'Measure actions that drive growth.',
        subtext: '',
        bullets: 'Leads · Sales · Conversion rates',
      },
    ],
  },
  modernizationPath: {
    eyebrow: 'OUR PROCESS',
    title: 'From tracking to',
    accentTitle: 'action.',
    accentTitleSeparateLine: true,
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understand your goals, channels, and reporting needs.',
      },
      {
        number: '02',
        title: 'Connect',
        description: 'Set up tracking and bring marketing data together.',
      },
      {
        number: '03',
        title: 'Analyze',
        description: 'Find patterns, opportunities, and performance gaps.',
      },
      {
        number: '04',
        title: 'Optimize',
        description: 'Use insights to improve marketing decisions.',
      },
    ],
    ctaLabel: 'Start Measuring Smarter',
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'data into direction?',
    ariaLabel: 'Start analytics and reporting with WOW Marketing',
  },
}
