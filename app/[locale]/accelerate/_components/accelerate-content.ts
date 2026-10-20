/** Static copy for WOW Accelerate — replace hero/framework images under public/images/wow/accelerate/ when ready. */

export const ACCELERATE_HERO = {
  eyebrow: 'BUILD A BETTER SALES ENGINE',
  titleBefore: 'Turn More Opportunities Into',
  titleAccent: 'Revenue.',
  description:
    'Build a smarter, more consistent sales system with lead generation, optimized funnels, CRM, automation, and sales enablement designed around how your business sells.',
  primaryCta: 'Start a conversation',
  primaryCtaHref: '/meet',
  image: {
    src: '/images/wow/Hero/devision/Accelerate.jpg',
    alt: 'Sales pipeline from prospect to customer',
  },
} as const

export const ACCELERATE_STATS = {
  heading: 'Join in the journey',
  bodyParagraph:
    'From CRM platforms and prospecting tools to automation and analytics, we help businesses connect the technology behind their sales operations—making it easier to manage leads, streamline workflows, and track opportunities.',
  stats: [
    {
      value: 78,
      label: '',
      suffix: '%',
      description: 'of buyers choose the company that responds first.',
    },
    {
      value: 50,
      label: '',
      suffix: '%',
      description: 'of leads may never receive proper follow-up.',
    },
    {
      value: 30,
      label: '',
      suffix: '%',
      description: 'of sales time can be lost to repetitive administrative work.',
    },
  ],
} as const

export const ACCELERATE_PROBLEM = {
  eyebrow: 'PROBLEM VS SOLUTION',
  titleBefore: "More Leads Won't Fix a Broken",
  titleAccent: 'Sales Process',
  titleSuffix: '',
  description:
    "Many businesses don't necessarily have a lead problem. They have gaps between generating interest, following up, managing opportunities, and turning those opportunities into customers.",
  leftContextLine: '100 Prospects',
  rightContextLine: 'Customer asks a question',
  withoutAiLabel: 'Leaky Pipeline',
  withAiLabel: 'CONNECTED PIPELINE',
  withoutSteps: [
    "Leads aren't captured consistently",
    'Follow-ups happen too late',
    "Opportunities aren't properly tracked",
    'Prospects go cold',
    'Lost Revenue',
  ],
  withSteps: ['Generate', 'Capture', 'Qualify', 'Nurture', 'Sell', 'Measure'],
  footerSummary:
    'WOW Accelerate helps connect the people, processes, and systems behind your sales operation so opportunities can move forward with greater consistency.',
  ctaLabel: 'Fix my sales process',
  ctaHref: '/meet',
} as const

export const ACCELERATE_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  title: 'Build the System Behind Your Sales ',
  accentTitle: 'Growth',
  description:
    'From generating opportunities to managing pipelines and automating follow-up, we help strengthen the systems your team relies on to turn interest into revenue.',
  items: [
    {
      title: 'Lead Generation & Outbound',
      description:
        'Create more opportunities with the right prospects. Prospecting · Lead research · Outreach strategy · Campaigns · Lead qualification',
    },
    {
      title: 'Sales Funnels & Conversion',
      description:
        'Create a clearer path from interest to action. Funnel strategy · Lead capture · Conversion paths · Offers · Follow-up sequences',
    },
    {
      title: 'CRM & Sales Systems',
      description:
        'Give your team one clear view of every opportunity. CRM setup · Pipeline design · Lead stages · Data organization · Integrations · Reporting',
    },
    {
      title: 'Sales Automation & Enablement',
      description:
        'Spend less time managing sales—and more time selling. Follow-up automation · Lead routing · Notifications · Sequences · Sales workflows · Enablement resources',
    },
  ],
} as const

export const ACCELERATE_FRAMEWORK = {
  eyebrow: 'BEYOND THE WEBSITE',
  titleBefore: 'Sales Growth Is a System, Not a',
  titleAccent: 'Single Tactic',
  headerDescription:
    'Generating leads is only the beginning. Sustainable growth comes from connecting every stage of the journey and continuously improving how opportunities move toward revenue.',
  headerCtaLabel: 'Build my revenue engine',
  headerCtaHref: '/meet',
  steps: [
    { id: '01', title: 'Attract', description: 'Find and reach potential customers.' },
    { id: '02', title: 'Capture', description: 'Turn interest into identifiable opportunities.' },
    { id: '03', title: 'Qualify', description: 'Focus attention on the right prospects.' },
    { id: '04', title: 'Nurture', description: 'Build trust and maintain momentum.' },
    { id: '05', title: 'Convert', description: 'Move qualified opportunities toward a decision.' },
    { id: '06', title: 'Retain & Expand', description: 'Continue building customer value after the initial sale.' },
  ],
  image: {
    src: '/images/wow/Hero/devision/Accelerate.jpg',
    alt: 'Sculpting a consistent sales growth system',
  },
} as const

export const ACCELERATE_HOW_WE_WORK = {
  eyebrow: 'HOW WE WORK',
  titleBefore: 'We Start With How You Sell',
  titleAccent: 'Today',
  description:
    "Before recommending tools, campaigns, or automation, we look at your existing sales journey to understand what's working, where opportunities are getting stuck, and what needs to change.",
  featuredStep: 'Step 03',
  steps: [
    {
      step: 'Step 01',
      title: 'Diagnose',
      description: 'Review your sales process, pipeline, tools, lead sources, and bottlenecks.',
    },
    {
      step: 'Step 02',
      title: 'Design',
      description: 'Define the improved sales journey, stages, responsibilities, systems, and automation.',
    },
    {
      step: 'Step 03',
      title: 'Build',
      description: 'Implement the funnels, CRM structure, workflows, campaigns, and supporting assets.',
    },
    {
      step: 'Step 04',
      title: 'Launch',
      description: 'Put the new system into operation and align the appropriate team members.',
    },
    {
      step: 'Step 05',
      title: 'Optimize',
      description: 'Use pipeline and performance data to identify opportunities for improvement.',
    },
  ],
  ctaLabel: 'Start with an AI consultation',
  ctaHref: '/meet',
} as const

export const ACCELERATE_FLEXIBLE_START = {
  eyebrow: 'FLEXIBLE WAYS TO START',
  titleBefore: 'Start Where Your Sales System Needs It',
  titleAccent: 'Most',
  description:
    "Fix one critical bottleneck or build a more connected revenue system. We'll recommend the right scope around your goals, team, tools, and current sales process.",
  cta: { label: 'Learn more', href: '/meet' },
  plans: [
    {
      id: 1,
      title: 'SALES FOUNDATION',
      description: 'Best for businesses that need more structure around their existing sales process.',
      features: [
        'Sales process audit',
        'Pipeline strategy',
        'CRM setup/optimization',
        'Lead stages',
        'Basic automation',
        'Sales reporting foundations',
      ],
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      title: 'GROWTH ENGINE',
      description: 'Best for businesses ready to create a more consistent acquisition and sales process.',
      features: [
        'Everything in Sales Foundation',
        'Lead generation',
        'Outbound campaigns',
        'Sales funnels',
        'Follow-up automation',
        'Sales enablement',
        'Performance reporting',
      ],
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      title: 'REVENUE SYSTEM',
      description: 'Best for growing businesses that need a more sophisticated, integrated sales operation.',
      features: [
        'Multi-channel lead generation',
        'Advanced CRM architecture',
        'Complex automation',
        'Sales integrations',
        'Pipeline optimization',
        'Reporting and intelligence',
        'Cross-division solutions',
      ],
      ctaVariant: 'white' as const,
    },
  ],
} as const

export const ACCELERATE_FAQS = [
  {
    id: 1,
    question: 'What does WOW Accelerate do?',
    answer:
      'WOW Accelerate helps businesses build and improve sales systems—lead generation, funnels, CRM, automation, and enablement—so opportunities move toward revenue with greater consistency.',
  },
  {
    id: 2,
    question: 'Can you help us generate leads?',
    answer:
      'Yes. We design prospecting, outreach, and campaign strategies aligned with your ideal customers, then connect them to capture and follow-up workflows.',
  },
  {
    id: 3,
    question: 'Can you set up or improve our CRM?',
    answer:
      'Yes. We configure pipelines, stages, data structure, integrations, and reporting so your team has one clear view of every opportunity.',
  },
  {
    id: 4,
    question: 'Can you automate our sales follow-up?',
    answer:
      'Yes. We build sequences, routing, notifications, and workflows that reduce manual admin while keeping outreach timely and personal where it matters.',
  },
  {
    id: 5,
    question: 'Do we need to replace our existing sales tools?',
    answer:
      'Not necessarily. We should first understand your current stack and determine whether it can be improved, integrated, or whether a different solution is genuinely needed.',
  },
  {
    id: 6,
    question: 'Can you help if we already generate plenty of leads?',
    answer:
      'Often yes. Many teams need better capture, qualification, nurture, and pipeline discipline—not more volume. We focus on where opportunities stall after interest is created.',
  },
] as const

export const ACCELERATE_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Questions Before We',
  titleAccent: 'Accelerate?',
  description:
    'Every sales operation is different. We start by understanding your current process before recommending what needs to change.',
  viewAllHref: '/rfq',
} as const

export const ACCELERATE_CTA = {
  accentText: 'Have an idea?',
  mainText: "Let's get it launched.",
  ariaLabel: 'Launch your sales growth idea with WOW Accelerate',
} as const
