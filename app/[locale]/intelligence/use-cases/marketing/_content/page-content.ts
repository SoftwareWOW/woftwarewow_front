export const MARKETING_USE_CASE_PAGE_METADATA = {
  title: 'AI for Marketing | WOW Intelligence',
  description:
    'Make marketing smarter with AI-driven personalization, automation, and actionable audience insights.',
} as const

const HERO_MEDIA = {
  src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
  alt: 'AI-powered marketing dashboards across devices',
} as const

const POWERED_IMAGE = {
  src: '/images/wow/LandingPageNaveBare/AI and Automation 2.svg',
  alt: 'Marketing analytics and campaign tools on laptop and mobile',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'AI FOR MARKETING',
    title: 'Smarter Marketing Starts ',
    italicTitle: 'Here.',
    description:
      'Make every marketing effort more purposeful. Use AI to understand your audience, streamline campaigns, create relevant content, and uncover insights that help your business grow.',
    primaryCta: { label: 'IMPROVE MY MARKETING', href: '/meet' },
    secondaryCta: { label: 'SEE AI IN ACTION', href: '#ai-powered-marketing' },
    media: HERO_MEDIA,
    headingId: 'intelligence-marketing-use-case-hero-heading',
  },
  challenge: {
    eyebrow: 'THE MARKETING CHALLENGE',
    titleBefore: 'More Channels. More Tasks. Less Clarity.',
    titleAccent: '',
    titleSuffix: '',
    description:
      'Marketing teams juggle content, campaigns, audiences, and reporting. Without connected processes and clear insights, valuable time and opportunities can slip away.',
    capabilityCards: [
      {
        title: 'Time-Consuming Tasks',
        headline: '',
        description: 'Repetitive work slows campaign execution.',
      },
      {
        title: 'Unclear Audiences',
        headline: '',
        description: 'Reaching the right people becomes difficult.',
      },
      {
        title: 'Content Overload',
        headline: '',
        description: 'Producing relevant content takes constant effort.',
      },
      {
        title: 'Scattered Insights',
        headline: '',
        description: 'Campaign data is difficult to interpret.',
      },
    ],
  },
  powered: {
    eyebrow: 'AI-POWERED MARKETING',
    title: 'Make Every Campaign More Intelligent.',
    description:
      'We bring AI into your marketing workflows to support smarter targeting, faster execution, and clearer performance insights.',
    sectionId: 'ai-powered-marketing',
    image: POWERED_IMAGE,
    steps: [
      { id: '01', title: 'Audience Intelligence', description: 'Understand segments and customer behavior.' },
      { id: '02', title: 'AI Content Support', description: 'Assist with ideas, drafts, and variations.' },
      { id: '03', title: 'Campaign Automation', description: 'Streamline recurring campaign tasks.' },
      { id: '04', title: 'Personalized Experiences', description: 'Adapt messaging to relevant audiences.' },
      { id: '05', title: 'Marketing Insights', description: 'Identify patterns and performance opportunities.' },
    ],
  },
  advantage: {
    eyebrow: 'THE MARKETING ADVANTAGE',
    title: 'Less Guesswork. More Meaningful Marketing.',
    description:
      'Give your team more time to focus on creative strategy while AI supports the research, execution, and analysis behind your campaigns.',
    pillars: [
      { title: 'Faster Execution', description: 'Reduce repetitive campaign work.' },
      { title: 'Relevant Messaging', description: 'Better align content with audiences.' },
      { title: 'Clearer Insights', description: 'Understand what needs attention.' },
      { title: 'More Creative Time', description: 'Focus on ideas rather than administration.' },
    ],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    titleBefore: 'AI That Works With Your ',
    titleAccent: 'Marketing.',
    description:
      'We identify useful AI opportunities and integrate them into your marketing processes without disrupting the work that already matters.',
    steps: [
      { step: 'Step 01', title: 'Assess', description: 'Review your marketing workflows.' },
      { step: 'Step 02', title: 'Plan', description: 'Identify valuable AI applications.' },
      { step: 'Step 03', title: 'Integrate', description: 'Build and connect the solutions.' },
      { step: 'Step 04', title: 'Refine', description: 'Monitor and improve performance.' },
    ],
  },
  inAction: {
    eyebrow: 'AI IN MARKETING ACTION',
    title: 'See What Smarter Marketing Looks Like.',
    items: [
      { number: '01', title: 'Content Campaigns', description: 'Generate and refine campaign content.' },
      { number: '02', title: 'Email Marketing', description: 'Support segmentation and timely messaging.' },
      { number: '03', title: 'Campaign Analysis', description: 'Spot trends and performance opportunities.' },
    ],
  },
  cta: {
    accentText: 'Want smarter marketing?',
    mainText: "Let's make it.",
    ariaLabel: "Want smarter marketing? Let's make it.",
  },
} as const