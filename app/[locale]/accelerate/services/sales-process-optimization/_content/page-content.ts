const HERO_IMAGE = '/images/wow/Hero/devision/Accelerate.jpg'

export const SALES_PROCESS_OPTIMIZATION_PAGE_METADATA = {
  title: 'Sales Process Optimization Services | WOW Accelerate',
  description:
    'Improve sales efficiency with process audits, pipeline optimization, workflow improvements, conversion analysis, and sales performance insights from WOW Accelerate.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES PROCESS OPTIMIZATION',
    title: 'Remove the friction.',
    italicTitle: 'Accelerate the wins.',
    description:
      'Streamline your sales process, eliminate bottlenecks, and help your team turn more opportunities into customers.',
    images: [{ src: HERO_IMAGE, alt: 'Sales process optimization' }],
    primaryCta: { label: 'Optimize Your Sales Process', href: '/contact' },
    secondaryCta: { label: 'Explore Solutions', href: '/accelerate' },
    enableVideoModal: false,
  },
  salesJourneyGap: {
    eyebrow: 'THE SALES CHALLENGE',
    title: 'Your pipeline has potential.',
    accentTitle: "What's slowing it down?",
    body: "Small inefficiencies can cost valuable opportunities. We identify what's holding your sales process back and make every stage work better.",
    stages: [
      { id: '01', title: 'Prospecting', description: 'Reach the right prospects with a clearer sales approach.' },
      { id: '02', title: 'Qualification', description: "Focus your team's time on the best-fit opportunities." },
      { id: '03', title: 'Follow-Up', description: 'Keep conversations moving without unnecessary delays.' },
      { id: '04', title: 'Conversion', description: 'Remove friction between interest and purchase.' },
      { id: '05', title: 'Performance', description: 'Find bottlenecks and improve what drives results.' },
    ],
  },
  revenueCapabilities: {
    eyebrow: 'WHAT WE IMPROVE',
    title: 'Better processes.',
    accentTitle: 'Stronger performance.',
    description: 'Improve the workflows, systems, and decisions behind every sale.',
    capabilityCards: [
      {
        title: 'Sales Process Audits',
        headline: "Find what's holding you back.",
        description: 'Review your sales journey to uncover gaps and inefficiencies.',
      },
      {
        title: 'Pipeline Stage Optimization',
        headline: 'Keep opportunities moving.',
        description: 'Create clearer stages, responsibilities, and deal progression.',
      },
      {
        title: 'Sales Workflow Improvements',
        headline: 'Make selling simpler.',
        description: 'Reduce manual tasks and streamline everyday sales activities.',
      },
      {
        title: 'Conversion Performance Analysis',
        headline: 'Turn insights into action.',
        description: 'Identify where prospects drop off and what needs improvement.',
      },
      {
        title: 'Sales Handoff Optimization',
        headline: 'Connect every step.',
        description: 'Improve transitions between prospecting, qualification, and closing.',
      },
    ],
  },
  leadToCustomer: {
    eyebrow: 'FROM LEAD TO CUSTOMER',
    title: 'One clear process.',
    accentTitle: 'More opportunities to win.',
    description: 'Connect every sales stage into a smoother, more consistent journey.',
    processSteps: [
      { step: 'Step 01', title: 'Prospecting', description: 'Find & connect' },
      { step: 'Step 02', title: 'Qualification', description: 'Identify & prioritize' },
      { step: 'Step 03', title: 'Follow-Up', description: 'Engage & progress' },
      { step: 'Step 04', title: 'Closing', description: 'Convert & win' },
      { step: 'Step 05', title: 'Optimization', description: 'Measure & improve' },
    ],
    ctaLabel: 'Improve Your Sales Process',
  },
  salesVisibility: {
    eyebrow: 'PERFORMANCE INSIGHTS',
    title: "See what's working.",
    accentTitle: "Fix what's not.",
    description:
      'Understand how your sales process performs and where improvements can make a difference.',
    steps: [
      {
        title: 'Pipeline Efficiency',
        description: 'Identify stalled deals and unnecessary delays.',
      },
      {
        title: 'Sales Productivity',
        description: 'See where your team spends time and effort.',
      },
      {
        title: 'Conversion Rates',
        description: 'Measure how effectively opportunities move between stages.',
      },
      {
        title: 'Sales Cycle Insights',
        description: 'Understand deal timelines and opportunities to shorten them.',
      },
    ],
    ctaLabel: 'Unlock Sales Insights',
  },
  cta: {
    accentText: 'Ready to make',
    mainText: 'every sales step count?',
    ariaLabel: 'Talk to WOW Accelerate about sales process optimization',
  },
}
