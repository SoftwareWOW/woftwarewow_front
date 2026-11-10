const HERO_IMAGE = '/images/wow/Hero/devision/Accelerate.jpg'

export const LEAD_GENERATION_PAGE_METADATA = {
  title: 'Lead Generation & Prospecting Services | WOW Accelerate',
  description:
    'Generate qualified sales opportunities with targeted prospecting, audience research, outbound campaigns, lead capture, and pipeline optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LEAD GENERATION',
    title: 'Find the right prospects.',
    italicTitle: 'Create real opportunities.',
    description:
      'Build a stronger sales pipeline with targeted prospecting, smarter outreach, and lead generation that connects you with potential customers.',
    images: [{ src: HERO_IMAGE, alt: 'Lead generation and prospecting for sales teams' }],
    primaryCta: { label: 'Generate More Leads', href: '/contact' },
    secondaryCta: { label: 'Explore Our Solutions', href: '/accelerate#solutions' },
    enableVideoModal: false,
  },
  salesJourneyGap: {
    eyebrow: 'THE CHALLENGE',
    title: 'Your next customer is out there.',
    accentTitle: 'Are you reaching them?',
    body: "Great opportunities can be missed when prospecting, targeting, and follow-up aren't working together.",
    stages: [
      { id: '01', title: 'Identify', description: 'Find the audiences most likely to need your services.' },
      { id: '02', title: 'Reach', description: 'Connect with prospects through relevant channels.' },
      { id: '03', title: 'Capture', description: 'Turn interest into identifiable sales opportunities.' },
      { id: '04', title: 'Qualify', description: 'Focus on leads with genuine potential.' },
      { id: '05', title: 'Improve', description: 'Refine targeting and campaigns using real insights.' },
    ],
  },
  revenueCapabilities: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Better targeting.',
    accentTitle: 'Stronger pipelines.',
    description:
      'Find, reach, and capture prospects with a focused lead generation approach.',
    capabilityCards: [
      {
        title: 'Target Audience Research',
        headline: 'Know who to reach.',
        description:
          'Identify ideal customers, buying signals, and market opportunities.',
      },
      {
        title: 'Prospect List Building',
        headline: 'Build the right connections.',
        description: 'Develop targeted prospect lists aligned with your ideal customer profile.',
      },
      {
        title: 'Lead Generation Campaigns',
        headline: 'Turn attention into interest.',
        description: 'Activate targeted campaigns that create new sales opportunities.',
      },
      {
        title: 'Lead Capture & Tracking',
        headline: 'Never lose an opportunity.',
        description: 'Capture enquiries and organize lead information in one place.',
      },
      {
        title: 'Outbound Prospecting',
        headline: 'Start valuable conversations.',
        description: 'Reach relevant prospects with personalized outreach.',
      },
      {
        title: 'Lead Performance Optimization',
        headline: 'Improve lead quality.',
        description: 'Track results and refine campaigns to attract better-fit prospects.',
      },
    ],
  },
  leadToCustomer: {
    eyebrow: 'OUR PROCESS',
    title: 'Every connection',
    accentTitle: 'moves you forward.',
    description:
      'Connect targeting, outreach, lead capture, and qualification into one focused process.',
    processSteps: [
      { step: 'Step 01', title: 'Target', description: 'Identify ideal prospects.' },
      { step: 'Step 02', title: 'Reach', description: 'Start relevant conversations.' },
      { step: 'Step 03', title: 'Capture', description: 'Collect and organize leads.' },
      { step: 'Step 04', title: 'Qualify', description: 'Find genuine opportunities.' },
      { step: 'Step 05', title: 'Optimize', description: 'Measure and improve results.' },
    ],
    ctaLabel: 'Build Your Lead Pipeline',
  },
  salesVisibility: {
    eyebrow: 'LEAD PERFORMANCE',
    title: 'Know where your',
    accentTitle: 'next opportunity comes from.',
    description:
      'See how your lead generation efforts perform and where to focus next.',
    steps: [
      {
        title: 'Lead Sources',
        description: 'Discover which channels generate opportunities.',
      },
      {
        title: 'Lead Quality',
        description: 'Understand how well prospects match your ideal customer.',
      },
      {
        title: 'Pipeline Growth',
        description: 'Track new leads and their progress toward sales.',
      },
      {
        title: 'Performance Insights',
        description: 'Improve targeting, conversion, and acquisition efficiency.',
      },
    ],
    ctaLabel: 'Grow Your Pipeline',
  },
  cta: {
    accentText: 'Ready to fill your',
    mainText: 'pipeline with potential?',
    ariaLabel: 'Talk to WOW Accelerate about lead generation',
  },
}
