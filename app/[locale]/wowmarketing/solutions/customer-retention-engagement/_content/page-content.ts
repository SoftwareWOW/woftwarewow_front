const HERO_IMAGE_1 = '/images/wow/Hero/Growth/image (1).png'
const HERO_IMAGE_2 = '/images/wow/Hero/Growth/image (2).png'

export const CUSTOMER_RETENTION_PAGE_METADATA = {
  title: 'Customer Retention & Engagement Solutions | WOW Marketing',
  description:
    'Build customer loyalty with personalized marketing, retention campaigns, email automation, customer journeys, and re-engagement strategies.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CUSTOMER RETENTION & ENGAGEMENT',
    title: 'Keep them close.',
    italicTitle: 'Keep them coming back.',
    description:
      'Turn first-time customers into lasting relationships with personalized experiences, meaningful engagement, and smarter retention strategies.',
    images: [
      { src: HERO_IMAGE_1, alt: 'Customer retention and loyalty' },
      { src: HERO_IMAGE_2, alt: 'Customer engagement marketing' },
    ],
    primaryCtaLabel: 'Grow Customer Loyalty',
    secondaryCtaLabel: 'Explore Our Solutions',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  socialProcess: {},
  socialCapabilities: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Better connections.',
    accentTitle: 'Lasting relationships.',
    titleSuffix: '',
    description:
      'Keep customers engaged with relevant experiences that encourage them to return.',
    ctaLabel: 'Build Your Retention Strategy',
    items: [
      {
        title: 'Customer Retention Campaigns',
        description: 'Create timely campaigns that encourage repeat business.',
      },
      {
        title: 'Email Marketing & Automation',
        description: 'Stay connected through personalized messages and follow-ups.',
      },
      {
        title: 'Personalized Customer Journeys',
        description: 'Deliver relevant experiences based on customer behavior.',
      },
      {
        title: 'Loyalty & Rewards Strategies',
        description: 'Give customers meaningful reasons to return.',
      },
      {
        title: 'Re-engagement Campaigns',
        description: 'Reconnect with inactive customers and renew their interest.',
      },
      {
        title: 'Retention Analytics & Optimization',
        description: 'Understand customer behavior and improve engagement.',
      },
    ],
  },
  platformPresence: {
    eyebrow: 'CUSTOMER TOUCHPOINTS',
    title: 'Every interaction.',
    accentTitle: 'An opportunity to connect.',
    titleSuffix: '',
    description:
      'Create meaningful experiences throughout the customer relationship.',
    items: [
      {
        title: 'Welcome & Onboarding',
        description: 'Make every first experience memorable and welcoming.',
        features: [
          'Best for: New customers · First impressions',
          'Channels: Email · SMS · Personalized content',
          'Focus: Build trust and encourage early engagement',
        ],
      },
      {
        title: 'Personalized Engagement',
        description: 'Keep customers interested with content that feels relevant.',
        features: [
          'Best for: Active customers · Ongoing relationships',
          'Channels: Email · Social · Customer journeys',
          'Focus: Relevance, engagement, and connection',
        ],
      },
      {
        title: 'Loyalty & Repeat Business',
        description: 'Give satisfied customers more reasons to choose you again.',
        features: [
          'Best for: Returning customers · Repeat purchases',
          'Channels: Loyalty campaigns · Exclusive offers · Email',
          'Focus: Customer value and long-term loyalty',
        ],
      },
      {
        title: 'Re-engagement & Win-Back',
        description: 'Reconnect with customers who have become less active.',
        features: [
          'Best for: Inactive customers · Lost engagement',
          'Channels: Email · Remarketing · Special campaigns',
          'Focus: Renew interest and encourage return visits',
        ],
      },
    ],
  },
  buildCommunity: {
    eyebrow: 'THE CUSTOMER JOURNEY',
    title: 'Beyond the first sale.',
    description: 'Into lasting loyalty.',
    steps: [
      {
        number: '01',
        title: 'Welcome',
        description: 'Make a great first impression.',
      },
      {
        number: '02',
        title: 'Engage',
        description: 'Stay relevant with meaningful communication.',
      },
      {
        number: '03',
        title: 'Reward',
        description: 'Recognize loyalty and encourage repeat business.',
      },
      {
        number: '04',
        title: 'Reconnect',
        description: 'Bring customers back with timely experiences.',
      },
    ],
    ctaLabel: 'Strengthen Customer Relationships',
  },
  socialGallery: {},
  startupPackageImage: {
    src: '/images/wow/Hero/Growth/image (3).png',
    alt: 'Customer engagement on mobile',
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'customers into loyal fans?',
    ariaLabel: 'Grow customer loyalty with WOW Marketing',
  },
}
