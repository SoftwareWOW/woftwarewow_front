export const SALES_USE_CASE_PAGE_METADATA = {
  title: 'AI for Sales | WOW Intelligence',
  description:
    'Help your sales team focus on the opportunities that matter with AI for lead qualification, automated follow-ups, and smarter pipeline insights.',
} as const

const IN_ACTION_IMAGE = {
  src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
  alt: 'AI-powered sales tools across laptop and mobile displays',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'AI FOR SALES',
    title: 'More ',
    italicTitle: 'Selling.',
    titleSuffix: 'Less Chasing.',
    description:
      'Help your sales team focus on the opportunities that matter. From lead qualification to automated follow-ups, we bring AI into your sales process to reduce busywork and keep potential customers moving forward.',
    primaryCta: { label: 'IMPROVE MY SALES PROCESS', href: '/meet' },
    secondaryCta: { label: 'SEE AI IN ACTION', href: '#ai-powered-sales' },
    images: [{ src: '/images/hero-img/sales-hero-1.jpg', alt: 'Sales professional using AI insights on a laptop' }],
    headingId: 'intelligence-sales-use-case-hero-heading',
    enableVideoModal: false,
  },
  powered: {
    eyebrow: 'AI-POWERED SALES',
    title: 'Smarter Support at Every Sales Stage.',
    sectionId: 'ai-powered-sales',
    steps: [
      {
        id: 1,
        title: 'Lead Qualification',
        description: 'Identify prospects based on their needs and intent.',
      },
      {
        id: 2,
        title: 'AI Sales Assistants',
        description: 'Answer questions and guide prospects toward the next step.',
      },
      {
        id: 3,
        title: 'Smart Follow-Ups',
        description: 'Trigger timely reminders and approved communications.',
      },
      {
        id: 4,
        title: 'CRM Automation',
        description: 'Keep lead records and sales activities organized.',
      },
      {
        id: 5,
        title: 'Pipeline Insights',
        description: 'Highlight opportunities that may require attention.',
      },
    ],
  },
  challenge: {
    eyebrow: 'THE SALES CHALLENGE',
    titleBefore: 'Good Opportunities Should',
    titleAccent: "n't",
    titleSuffix: ' Get Lost.',
    description:
      'Sales teams lose valuable time managing information, chasing responses, and sorting through leads instead of building relationships and closing deals.',
    capabilityCards: [
      {
        title: 'Unqualified Leads',
        headline: '',
        description: 'Too much time spent identifying serious prospects.',
      },
      {
        title: 'Missed Follow-Ups',
        headline: '',
        description: 'Potential customers get overlooked or contacted too late.',
      },
      {
        title: 'Manual CRM Work',
        headline: '',
        description: 'Salespeople spend time entering and updating records.',
      },
      {
        title: 'Limited Visibility',
        headline: '',
        description: 'Hard to see which opportunities need attention next.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE SALES ADVANTAGE',
    titleBefore: 'Give Your Team More Time to ',
    titleAccent: 'Sell.',
    description: 'AI helps reduce repetitive sales work and keeps opportunities moving forward.',
    beforeLabel: 'BEFORE AI',
    afterLabel: 'AFTER AI',
    beforeSteps: ['Slow Responses', 'Unsorted Leads', 'Missed Follow-Ups', 'Manual Data Entry'],
    afterSteps: ['Faster Responses', 'Prioritized Leads', 'Timely Follow-Ups', 'Automated Updates'],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    titleBefore: 'AI That Fits Your Sales ',
    titleAccent: 'Process.',
    description:
      "We identify where AI can make a difference, connect it with your existing tools, and refine it around your team's workflow.",
    steps: [
      { number: '01', title: 'Assess', description: 'Review your sales process and challenges.' },
      { number: '02', title: 'Plan', description: 'Select valuable AI opportunities.' },
      { number: '03', title: 'Integrate', description: 'Connect, configure, and test solutions.' },
      { number: '04', title: 'Optimize', description: 'Monitor workflows and refine performance.' },
    ],
  },
  inAction: {
    eyebrow: 'AI IN SALES ACTION',
    title: 'See What Smarter Selling Looks Like.',
    description:
      'Explore practical ways AI can support your sales team, from the first enquiry to the next conversation.',
    benefits: [
      {
        title: 'Website Enquiries',
        description: 'An AI assistant answers questions and captures prospect details.',
      },
      {
        title: 'Lead Follow-Ups',
        description: 'A workflow schedules appropriate next steps and alerts.',
      },
      {
        title: 'Sales Prioritization',
        description: 'A dashboard highlights leads needing attention.',
      },
    ],
    image: IN_ACTION_IMAGE,
  },
  cta: {
    accentText: 'Want smarter sales?',
    mainText: "Let's make it happen.",
    ariaLabel: "Want smarter sales? Let's make it happen.",
  },
} as const
