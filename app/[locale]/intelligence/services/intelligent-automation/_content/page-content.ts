export const INTELLIGENT_AUTOMATION_PAGE_METADATA = {
  title: 'Intelligent Automation | WOW Intelligence',
  description:
    'Free your team from repetitive tasks with intelligent workflows that connect your tools, organize information, and keep everyday operations moving—with less manual effort.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'INTELLIGENT AUTOMATION',
    title: 'Less Manual Work. More Business ',
    italicTitle: 'Momentum.',
    description:
      'Free your team from repetitive tasks with intelligent workflows that connect your tools, organize information, and keep everyday operations moving—with less manual effort.',
    primaryCta: { label: 'AUTOMATE MY WORKFLOWS', href: '/meet' },
    secondaryCta: { label: 'SEE HOW IT WORKS', href: '#what-we-automate' },
    images: [
      {
        src: '/images/wow/LandingPageNaveBare/AI and Automation 2.svg',
        alt: 'Intelligent automation workflows on mobile',
      },
    ],
    headingId: 'intelligent-automation-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Your Team Has ',
    titleAccent: 'Better',
    titleSuffix: ' Things to Do.',
    description:
      'When routine tasks depend on manual effort, valuable time gets lost between systems, approvals, and follow-ups.',
    capabilityCards: [
      {
        title: 'Repetitive Tasks',
        headline: '',
        description: 'Teams spend hours on work that follows predictable steps.',
      },
      {
        title: 'Disconnected Tools',
        headline: '',
        description: 'Information gets copied between applications and spreadsheets.',
      },
      {
        title: 'Missed Follow-Ups',
        headline: '',
        description: 'Important actions are delayed when teams get busy.',
      },
      {
        title: 'Manual Errors',
        headline: '',
        description: 'Repeated data handling increases the risk of mistakes.',
      },
    ],
  },
  impact: {
    eyebrow: 'THE IMPACT OF AUTOMATION',
    title: 'Less Busywork. More Progress.',
    description:
      'When repetitive processes run more efficiently, your team can focus on decisions, customers, and work that creates greater value.',
    manualTitle: 'Manual Process',
    connectedTitle: 'Connected Workflow',
    beforeSublabel: 'Before',
    afterSublabel: 'After',
    manualSteps: [
      'Receive enquiry',
      'Copy information',
      'Update CRM',
      'Notify team',
      'Send follow-up',
      'Technology that creates friction',
    ],
    connectedSteps: [
      'Receive enquiry',
      'Automated workflow',
      'Information processed, CRM updated, and team notified automatically.',
      'Human reviews exceptions',
    ],
  },
  whatWeAutomate: {
    eyebrow: 'WHAT WE AUTOMATE',
    titleBefore: 'Connect the Work. Automate the Routine.',
    titleAccent: '',
    description:
      'We design intelligent workflows that move information, trigger actions, and help your systems work together with less manual intervention.',
    sectionId: 'what-we-automate',
    image: {
      src: '/images/wow/Hero/devision/Intelligence.jpg',
      alt: 'Team member reviewing workflow automation on a laptop',
    },
    steps: [
      {
        id: '01',
        title: 'Workflow Automation',
        description: 'Automate recurring tasks, approvals, and business processes.',
      },
      {
        id: '02',
        title: 'System Integration',
        description: 'Connect supported apps and keep information moving between them.',
      },
      {
        id: '03',
        title: 'Intelligent Processing',
        description: 'Use AI to classify, extract, and organize information.',
      },
      {
        id: '04',
        title: 'Automated Follow-Ups',
        description: 'Create, update, and route records through connected workflows.',
      },
      {
        id: '05',
        title: 'CRM Automation',
        description: 'Keep customer records accurate with automated updates and routing.',
      },
    ],
  },
  implementation: {
    eyebrow: 'OUR IMPLEMENTATION APPROACH',
    titleBefore: 'From Manual to ',
    titleAccent: 'Automated.',
    description:
      'We start with your existing workflows and build automation around the processes that offer practical value.',
    steps: [
      { number: '01', title: 'Map', description: 'Review tasks, systems, and bottlenecks.' },
      { number: '02', title: 'Design', description: 'Define triggers, actions, and safeguards.' },
      { number: '03', title: 'Automate', description: 'Build, connect, and test workflows.' },
      { number: '04', title: 'Optimize', description: 'Monitor results and refine processes.' },
    ],
  },
  inAction: {
    eyebrow: 'AUTOMATION IN ACTION',
    title: 'Small Automations. Meaningful ',
    accentTitle: 'Improvements.',
    description:
      'Intelligent automation can support everyday processes across different departments, tools, and teams.',
    items: [
      {
        number: '01',
        title: 'Lead Management',
        description: 'Capture enquiries, update records, and notify sales teams.',
      },
      {
        number: '02',
        title: 'Document Processing',
        description: 'Extract important information and organize records.',
      },
      {
        number: '03',
        title: 'Internal Operations',
        description: 'Route requests, approvals, and team notifications.',
      },
    ],
  },
  cta: {
    accentText: 'Too much manual work?',
    mainText: "Let's automate it.",
    ariaLabel: "Too much manual work? Let's automate it.",
  },
} as const
