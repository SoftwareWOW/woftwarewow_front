export const INTELLIGENCE_PRACTICAL_AI = {
  eyebrow: 'PRACTICAL AI FOR REAL BUSINESS',
  titleBefore: 'Put AI to Work for Your',
  titleAccent: 'Business.',
  description:
    'Turn repetitive work into automated workflows, customer conversations into intelligent experiences, and business data into better decisions—with AI solutions built around how your business actually works.',
  primaryCta: 'Explore AI Solutions',
  primaryCtaHref: '/meet',
  secondaryCta: 'Talk to an AI Expert',
  secondaryCtaHref: '/meet',
  workflowSteps: [
    {
      title: 'Customer Enquiry',
      caption: 'New enquiry received from website or email',
      icon: 'message' as const,
    },
    {
      title: 'AI Assistant',
      caption: 'Analyze enquiry and generate a response',
      icon: 'cpu' as const,
    },
    {
      title: 'CRM',
      caption: 'Create or update customer record',
      icon: 'database' as const,
    },
    {
      title: 'Team',
      caption: 'Notify the right team member',
      icon: 'users' as const,
    },
    {
      title: 'Follow-Up',
      caption: 'Send follow-up message to customer',
      icon: 'calendar' as const,
    },
    {
      title: 'Insights & Growth',
      caption: 'Learn from outcomes and improve over time',
      icon: 'trending' as const,
    },
  ],
} as const

export const INTELLIGENCE_PROBLEM = {
  eyebrow: 'PROBLEM',
  titleBefore: 'Your Business Is Already Full of Work AI Can',
  titleAccent: 'Help',
  titleSuffix: 'With',
  description:
    'Teams spend valuable time answering the same questions, moving information between systems, following up manually, searching for answers, and making decisions from scattered data.',
  contextLine: 'Customer asks a question',
  withoutAiLabel: 'Without AI',
  withAiLabel: 'With AI',
  withoutSteps: [
    'Employee checks information',
    'Updates spreadsheet',
    'Copies data into CRM',
    'Sends follow-up',
    'Notifies another team member',
    'Technology that creates friction',
  ],
  withSteps: ['AI understands', 'responds', 'updates', 'routes', 'follows up'],
  footerSummary:
    'We identify repetitive, time-consuming, and data-heavy processes—and determine where AI and automation can make them simpler.',
  ctaLabel: 'Find my AI opportunities',
  ctaHref: '/meet',
} as const

export const INTELLIGENCE_SHOWCASE = {
  eyebrow: 'Built for real operations',
  titleBefore: 'See intelligence working',
  titleAccent: 'across your business',
  description:
    'From customer-facing assistants to internal automation, WOW Intelligence sits at the center of how modern teams capture demand, serve customers, and make decisions.',
  image: {
    src: '/images/wow/Hero/devision/Intelligence.jpg',
    alt: 'Team collaborating with AI-powered business intelligence tools',
  },
} as const

export const INTELLIGENCE_AI_SOLUTIONS = {
  eyebrow: 'AI SOLUTIONS',
  titleBefore: 'AI Solutions Designed Around',
  titleAccent: 'Real',
  titleSuffix: 'Business Needs',
  description:
    "You don't need AI everywhere. You need it in the right places. We design practical solutions around your customers, teams, workflows, and existing systems.",
  pillars: [
    {
      number: '01',
      title: 'AI Assistants & Chatbots',
      leadIn: 'Give customers and teams answers when they need them.',
      body: 'Create intelligent assistants that can help answer questions, guide customers, retrieve information, support internal teams, and automate common conversations.',
      applications:
        'Customer support · Lead qualification · Internal knowledge · FAQs · Service enquiries',
    },
    {
      number: '02',
      title: 'Intelligent Automation',
      leadIn: "Take repetitive work off your team's plate.",
      body: 'Connect tasks, systems, information, and triggers so routine processes can happen automatically while your team focuses on higher-value work.',
      applications:
        'Lead routing · Follow-ups · Data entry · Notifications · Document workflows · CRM updates',
    },
    {
      number: '03',
      title: 'Business Intelligence & Predictive Insights',
      leadIn: 'Turn business data into information you can actually use.',
      body: 'Bring relevant information together, identify patterns, surface useful insights, and help decision-makers understand what may require attention.',
      applications:
        'Performance insights · Forecasting · Customer patterns · Reporting · Operational intelligence',
    },
  ],
} as const

export const INTELLIGENCE_HOW_WE_WORK = {
  eyebrow: 'HOW WE WORK',
  titleBefore: 'Start With the Problem. Then Apply the',
  titleAccent: 'Intelligence.',
  description:
    "We don't begin by forcing an AI product into your business. We first understand what you're trying to improve, then determine the right combination of AI, automation, data, and integration.",
  steps: [
    {
      step: 'Step 01',
      title: 'Discover',
      description: 'Understand your business, workflows, systems, bottlenecks, and goals.',
    },
    {
      step: 'Step 02',
      title: 'Identify',
      description: 'Find high-value opportunities where AI or automation can make a meaningful difference.',
    },
    {
      step: 'Step 03',
      title: 'Design',
      description:
        'Define the solution, workflow, integrations, data requirements, and human involvement.',
    },
    {
      step: 'Step 04',
      title: 'Build & Connect',
      description: 'Develop the solution and connect it with the appropriate business systems.',
    },
    {
      step: 'Step 05',
      title: 'Test & Improve',
      description: 'Validate workflows and refine the solution as usage, data, and business needs evolve.',
    },
  ],
  ctaLabel: 'Start with an AI consultation',
  ctaHref: '/meet',
} as const

export const INTELLIGENCE_FLEXIBLE_START = {
  eyebrow: 'FLEXIBLE WAYS TO START',
  title: 'Start With the AI Opportunity That Matters Most',
  description:
    "You don't need to transform your entire business at once. Start with a clear problem or opportunity, prove the value, and expand from there.",
  cta: { label: 'Learn more', href: '/meet' },
  plans: [
    {
      id: 1,
      title: 'AI DISCOVERY',
      description:
        "Best for businesses that know they want to explore AI but aren't sure where to begin.",
      features: [
        'AI opportunity assessment',
        'Workflow review',
        'Automation opportunities',
        'Solution recommendations',
        'Implementation roadmap',
      ],
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      title: 'AI SOLUTION',
      description:
        'Best for businesses with a clear use case such as an AI assistant, workflow automation, or data intelligence solution.',
      features: [
        'Everything in AI Discovery',
        'Solution strategy',
        'AI configuration/development',
        'Workflow design',
        'Integrations',
        'Testing & implementation',
      ],
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      title: 'AI TRANSFORMATION',
      description:
        'For organizations looking at multiple workflows, departments, systems, or longer-term AI adoption.',
      features: [
        'Everything in AI Solutions',
        'Multi-workflow automation',
        'AI assistants',
        'System integrations',
        'Business intelligence',
        'Custom AI solutions',
        'Ongoing optimization',
      ],
      ctaVariant: 'white' as const,
    },
  ],
} as const

export const INTELLIGENCE_TESTIMONIALS = {
  eyebrow: 'TESTIMONIALS',
  title: 'Client Experiences',
} as const

export const INTELLIGENCE_CTA = {
  accentText: 'Ready to',
  mainText: 'automate?',
  ariaLabel: 'Talk to an AI Expert at WOW Superagency',
} as const
