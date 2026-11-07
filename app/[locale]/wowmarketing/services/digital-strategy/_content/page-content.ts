const HERO_IMAGE = '/images/wow/Hero/Growth/image (1).png'
const BUILT_IMAGE = '/images/wow/Hero/Growth/image (2).png'
const ARTICLE_IMG_A = '/images/wow/Hero/Growth/image (1).png'
const ARTICLE_IMG_B = '/images/wow/Hero/Growth/image (2).png'
const ARTICLE_IMG_C = '/images/wow/Hero/Growth/image (3).png'
const WORK_IMG_A = '/images/wow/blog/Blog card 3.jpg'
const WORK_IMG_B = '/images/wow/nav/cards/pexels-pixabay-35208 1.png'

export const DIGITAL_STRATEGY_PAGE_METADATA = {
  title: 'Digital Marketing Strategy Services | WOW Marketing',
  description:
    'Build a smarter digital marketing roadmap with audience research, channel strategy, campaign planning, performance measurement, and growth optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'DIGITAL STRATEGY',
    title: 'Think smarter.',
    italicTitle: 'Grow with purpose.',
    description:
      'Build a clear digital marketing strategy that connects your goals, audience, channels, and growth opportunities.',
    images: [{ src: HERO_IMAGE, alt: 'Digital marketing strategy placeholder' }],
    primaryCtaLabel: 'Book a Strategy Session',
    secondaryCtaLabel: 'Explore Our Approach',
    primaryCtaHref: '/meet',
    secondaryCtaHref: '#growth-framework',
  },
  wowGrowthFramework: {
    eyebrow: 'OUR FRAMEWORK',
    title: 'From big ambitions to',
    accentTitle: 'clear direction.',
    description: '',
    frameworkTagline: 'Discover → Strategize → Activate → Measure → Optimize → Scale',
    ctaLabel: 'Build Your Digital Roadmap',
    ctaHref: '/meet',
    steps: [
      {
        title: 'Discover',
        description: 'Understand your market, audience, competitors, and opportunities.',
      },
      {
        title: 'Strategize',
        description: 'Define your positioning, priorities, and marketing roadmap.',
      },
      {
        title: 'Activate',
        description: 'Put the right channels, content, and campaigns into action.',
      },
      {
        title: 'Measure',
        description: 'Track performance against meaningful marketing goals.',
      },
      {
        title: 'Optimize',
        description: 'Improve campaigns, experiences, and channel effectiveness.',
      },
      {
        title: 'Scale',
        description: 'Expand successful strategies into sustainable growth.',
      },
    ],
  },
  strategicExpertise: {
    eyebrow: 'WHAT WE STRATEGIZE',
    title: 'Every channel.',
    accentTitle: 'One clear direction.',
    description: 'Five connected areas that shape a stronger digital marketing strategy.',
    ctaLabel: "Let's Talk Strategy",
    ctaHref: '/meet',
    items: [
      {
        title: 'Audience & Market',
        description: 'Understand your customers, competitors, and market opportunities.',
      },
      {
        title: 'Brand & Positioning',
        description: 'Define messaging that makes your business stand out.',
      },
      {
        title: 'Channels & Media',
        description: 'Choose the right mix of search, social, paid, and owned media.',
      },
      {
        title: 'Content & Experience',
        description: 'Connect useful content with meaningful customer journeys.',
      },
      {
        title: 'Performance & Growth',
        description: 'Set measurable goals and improve marketing effectiveness.',
      },
    ],
  },
  howWeBuildStrategy: {
    eyebrow: 'OUR PROCESS',
    title: 'A clearer plan.',
    accentTitle: 'A stronger path forward.',
    description: '',
    ctaLabel: 'Start Your Strategy',
    ctaHref: '/meet',
    steps: [
      {
        title: 'Discovery',
        description: 'Understand your business, audience, and current performance.',
      },
      {
        title: 'Strategy Blueprint',
        description: 'Define priorities, channels, and a practical marketing roadmap.',
      },
      {
        title: 'Activation',
        description: 'Turn your strategy into coordinated marketing activities.',
      },
      {
        title: 'Optimization',
        description: 'Measure progress and refine what works.',
      },
    ],
  },
  builtAroundYourBusiness: {
    eyebrow: 'TAILORED STRATEGY',
    title: 'Your business.',
    accentTitle: 'Your growth roadmap.',
    description:
      'Every strategy reflects your market, ambitions, and available resources.',
    ctaLabel: 'Book a Strategy Session',
    ctaHref: '/meet',
    image: { src: BUILT_IMAGE, alt: 'Tailored digital strategy' },
    steps: [
      {
        title: 'Business Goals',
        description: 'Focused on the outcomes you want to achieve.',
      },
      {
        title: 'Industry Context',
        description: 'Informed by your competitive landscape.',
      },
      {
        title: 'Audience & Market',
        description: 'Built around your customers and their needs.',
      },
      {
        title: 'Growth Stage',
        description: 'Aligned with where your business stands today.',
      },
      {
        title: 'Budget & Resources',
        description: 'Prioritized around realistic opportunities.',
      },
    ],
  },
  growthStrategies: {
    eyebrow: 'INSIGHTS',
    titleBefore: 'Fresh thinking.',
    titleAccent: 'Smarter marketing.',
    description:
      'Practical perspectives on digital strategy, customer behavior, and marketing performance.',
    ctaLabel: 'Explore Marketing Insights',
    ctaHref: '/blog',
    articles: [
      {
        id: 1,
        date: 'ARTICLE 01',
        title: 'Building a Digital Marketing Strategy That Works',
        description:
          'How to connect your business goals with the right marketing channels.',
        thumbnail: ARTICLE_IMG_A,
        href: '/blog',
      },
      {
        id: 2,
        date: 'ARTICLE 02',
        title: 'Choosing the Right Marketing Channels',
        description: 'Where to focus your efforts for better reach and relevance.',
        thumbnail: ARTICLE_IMG_B,
        href: '/blog',
      },
      {
        id: 3,
        date: 'ARTICLE 03',
        title: 'From Marketing Data to Better Decisions',
        description: 'How meaningful insights can guide your next growth move.',
        thumbnail: ARTICLE_IMG_C,
        href: '/blog',
      },
    ],
  },
  strategyInAction: {
    eyebrow: 'OUR WORK',
    titleBefore: 'Smart thinking.',
    titleAccent: 'Real-world execution.',
    description: '',
    ctaLabel: 'Explore Our Work',
    ctaHref: '/case-study',
    projects: [
      {
        title: 'Building a Stronger Digital Presence',
        description:
          'Connecting audience insights, messaging, and digital experiences.',
        thumbnail: WORK_IMG_A,
        slug: 'digital-presence',
      },
      {
        title: 'Creating a More Connected Marketing Journey',
        description:
          'Bringing channels, campaigns, and customer touchpoints together.',
        thumbnail: WORK_IMG_B,
        slug: 'connected-marketing-journey',
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'strategy into growth?',
    ariaLabel: 'Start digital strategy with WOW Marketing',
  },
}
