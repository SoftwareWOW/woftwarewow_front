/** From public/images/wow — swap when dedicated PPC art is ready. */
const PPC_PLACEHOLDER_IMAGE = '/images/wow/Hero/Growth/image (2).png'

export const PPC_PAGE_METADATA = {
  title: 'PPC Advertising & Google Ads Management | WOW Marketing',
  description:
    'Reach the right audience with PPC advertising, Google Ads management, targeted campaigns, conversion tracking, and ongoing optimization from WOW Marketing.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'PAY-PER-CLICK ADVERTISING',
    title: 'Reach the right people.',
    italicTitle: 'Drive real results.',
    description:
      'Put your business in front of high-intent audiences with targeted paid campaigns designed to attract traffic, generate leads, and drive conversions.',
    images: [{ src: PPC_PLACEHOLDER_IMAGE, alt: 'Paid advertising campaigns and performance' }],
    primaryCta: { label: 'Plan Your Campaign', href: '/contact' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    enableVideoModal: false,
  },
  salesJourneyGap: {
    eyebrow: 'THE CHALLENGE',
    title: "More ad spend doesn't always mean better results.",
    body: "Successful advertising isn't just about clicks. Every stage needs to work together to turn your budget into meaningful opportunities.",
    stages: [
      { id: '01', title: 'Reach', description: 'Get in front of audiences that matter.' },
      { id: '02', title: 'Target', description: 'Focus your budget on relevant searches and users.' },
      { id: '03', title: 'Engage', description: 'Create ads that capture attention and interest.' },
      { id: '04', title: 'Convert', description: 'Turn ad traffic into leads and customers.' },
      { id: '05', title: 'Optimize', description: 'Use performance data to improve results.' },
    ],
  },
  revenueCapabilities: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Smarter campaigns.',
    accentTitle: 'Stronger performance.',
    description:
      'From campaign strategy to ongoing optimization, we manage the details that make paid advertising work.',
    capabilityCards: [
      {
        title: 'Google Ads Management',
        headline: 'Capture active demand.',
        description: 'Reach people searching for products and services like yours.',
      },
      {
        title: 'Search & Display Advertising',
        headline: 'Show up where it matters.',
        description: 'Connect with audiences across search and display placements.',
      },
      {
        title: 'Audience Targeting & Remarketing',
        headline: 'Stay relevant.',
        description: 'Reach valuable audiences and reconnect with interested visitors.',
      },
      {
        title: 'Ad Creative & Copywriting',
        headline: 'Make every impression count.',
        description: 'Create compelling messages and visuals that encourage action.',
      },
      {
        title: 'Landing Page Optimization',
        headline: 'Turn clicks into action.',
        description: 'Improve the experience between your ads and conversions.',
      },
      {
        title: 'Conversion Tracking & Analytics',
        headline: 'Know what works.',
        description: 'Measure leads, purchases, and other meaningful campaign actions.',
      },
    ],
  },
  leadToCustomer: {
    eyebrow: 'OUR APPROACH',
    title: 'Every click has a purpose.',
    accentTitle: '',
    description:
      'Connect strategy, targeting, creative, and optimization into one focused advertising process.',
    processSteps: [
      { step: 'Step 01', title: 'Strategy', description: 'Define goals, audiences, and budget priorities.' },
      { step: 'Step 02', title: 'Targeting', description: 'Reach relevant searches and audience segments.' },
      { step: 'Step 03', title: 'Campaigns', description: 'Launch compelling ads and landing experiences.' },
      { step: 'Step 04', title: 'Conversions', description: 'Track valuable actions and improve the journey.' },
      { step: 'Step 05', title: 'Optimization', description: 'Refine campaigns using real performance data.' },
    ],
    ctaLabel: 'Plan Your Campaign',
  },
  salesVisibility: {
    eyebrow: 'CAMPAIGN PERFORMANCE',
    title: 'See where your',
    accentTitle: 'budget works.',
    description: 'Campaign performance, conversions, and clear next steps to improve.',
    steps: [
      {
        title: 'Budget & Spend',
        description: 'Track investment across campaigns and channels.',
      },
      {
        title: 'Clicks & Engagement',
        description: 'Understand how audiences respond to your ads.',
      },
      {
        title: 'Conversion Performance',
        description: 'Measure leads, purchases, and valuable actions.',
      },
      {
        title: 'Cost Efficiency',
        description: 'Monitor acquisition costs and return on ad spend where measurable.',
      },
    ],
    ctaLabel: 'Improve Your Ad Performance',
  },
  cta: {
    accentText: 'Ready to turn clicks into customers?',
    mainText: '',
    ariaLabel: 'Plan Your Campaign',
  },
}
