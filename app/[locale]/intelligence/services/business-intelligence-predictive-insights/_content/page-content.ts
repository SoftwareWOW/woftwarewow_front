export const BI_PREDICTIVE_INSIGHTS_PAGE_METADATA = {
  title: 'Business Intelligence & Predictive Insights | WOW Intelligence',
  description:
    'Make smarter business decisions with AI-powered insights, intelligent reporting, and predictive analytics that help you understand performance, uncover opportunities, and plan what’s next.',
} as const

const TRADING_WORKPLACE_MEDIA = {
  src: '/images/wow/LandingPageNaveBare/trading-workplace-with-monitor-and-laptop-with-sto-2026-01-08-22-10-11-utc%202.svg',
  alt: 'Business intelligence dashboards across laptop and monitor displays',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'BUSINESS INTELLIGENCE & PREDICTIVE INSIGHTS',
    title: 'Turn Your Data Into Your Next ',
    italicTitle: 'Advantage.',
    description:
      'Make smarter business decisions with AI-powered insights, intelligent reporting, and predictive analytics that help you understand performance, uncover opportunities, and plan what’s next.',
    primaryCta: { label: 'EXPLORE MY DATA OPPORTUNITIES', href: '/meet' },
    secondaryCta: { label: 'SEE HOW IT WORKS', href: '#intelligence-that-works' },
    media: TRADING_WORKPLACE_MEDIA,
    headingId: 'bi-predictive-insights-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'You Have the Data. But Where Are the ',
    titleAccent: 'Answers?',
    titleSuffix: '',
    description:
      'Information is only valuable when you can understand it and act on it. Disconnected systems and unclear reporting make important decisions harder than they should be.',
    items: [
      {
        number: '01',
        title: 'Scattered Data',
        description: 'Important information lives across disconnected systems.',
      },
      {
        number: '02',
        title: 'Unclear Performance',
        description: 'Reports show numbers without explaining what matters.',
      },
      {
        number: '03',
        title: 'Delayed Insights',
        description: 'Decisions depend on outdated or manually prepared reports.',
      },
    ],
  },
  intelligence: {
    eyebrow: 'INTELLIGENCE THAT WORKS',
    titleBefore: 'From Information to ',
    titleAccent: 'Intelligence.',
    description:
      'We bring your business information together and turn it into accessible insights that support clearer decisions and better planning.',
    sectionId: 'intelligence-that-works',
    capabilities: [
      {
        title: 'Data Integration',
        description: 'Connect information from relevant business systems.',
      },
      {
        title: 'Intelligent Dashboards',
        description: 'See important performance indicators in one place.',
      },
      {
        title: 'Predictive Analytics',
        description: 'Explore potential trends and future outcomes.',
      },
      {
        title: 'Customer Intelligence',
        description: 'Identify patterns in customer behavior and engagement.',
      },
      {
        title: 'Automated Reporting',
        description: 'Keep essential business reports organized and accessible.',
      },
    ],
  },
  decisions: {
    eyebrow: 'BETTER BUSINESS DECISIONS',
    title: 'See More Clearly. Decide More Confidently.',
    description:
      'Turn fragmented information into a clearer picture of your business and the opportunities ahead.',
    sectionId: 'better-decisions',
    benefits: [
      {
        title: 'Clearer Visibility',
        description: 'Understand business performance at a glance.',
      },
      {
        title: 'Faster Decisions',
        description: 'Access useful insights without lengthy reporting cycles.',
      },
      {
        title: 'Earlier Awareness',
        description: 'Recognize emerging patterns and potential issues.',
      },
      {
        title: 'Smarter Planning',
        description: 'Use forecasts and historical trends to inform decisions.',
      },
    ],
    image: TRADING_WORKPLACE_MEDIA,
  },
  process: {
    eyebrow: 'OUR IMPLEMENTATION APPROACH',
    title: 'From Data to Reliable Insight.',
    description:
      'We work through your existing data, systems, and goals to deliver insights that improve over time.',
    steps: [
      {
        number: '1',
        title: 'Assess',
        description: 'Review your goals, data, and systems.',
      },
      {
        number: '2',
        title: 'Build',
        description: 'Connect data and develop insights.',
      },
      {
        number: '3',
        title: 'Refine',
        description: 'Validate results and improve accuracy.',
      },
    ],
  },
  cta: {
    accentText: 'Have data?',
    mainText: "Let's make it useful.",
    ariaLabel: "Have data? Let's make it useful.",
  },
} as const
