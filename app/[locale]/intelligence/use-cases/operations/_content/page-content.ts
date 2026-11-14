export const OPERATIONS_USE_CASE_PAGE_METADATA = {
  title: 'AI for Operations | WOW Intelligence',
  description:
    'Bring intelligence into everyday operations—automate routine tasks, connect systems, and give your team more time for work that moves the business forward.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'AI FOR OPERATIONS',
    title: 'Make Your Business Run Smarter.',
    italicTitle: '',
    description:
      'Bring intelligence into your everyday operations. Automate routine tasks, connect your systems, and give your team more time to focus on the work that moves your business forward.',
    primaryCta: { label: 'IMPROVE MY OPERATIONS', href: '/meet' },
    secondaryCta: { label: 'SEE HOW IT WORKS', href: '#intelligent-operations' },
    images: [
      { src: '/images/hero-img/social-hero-1.jpg', alt: 'Operations team collaborating on process improvements' },
      { src: '/images/hero-img/social-hero-2.jpg', alt: 'Team presenting operational workflows' },
    ],
    headingId: 'intelligence-operations-use-case-hero-heading',
    enableVideoModal: false,
  },
  challenge: {
    eyebrow: 'THE OPERATIONS CHALLENGE',
    titleBefore: 'Too Many Tasks. Too Little Flow.',
    titleAccent: '',
    titleSuffix: '',
    description:
      'Daily operations become harder to manage when information is scattered, processes depend on manual effort, and teams struggle to stay coordinated.',
    capabilityCards: [
      {
        title: 'Manual Processes',
        headline: '',
        description: 'Routine tasks consume valuable time.',
      },
      {
        title: 'Disconnected Systems',
        headline: '',
        description: 'Information gets trapped between tools.',
      },
      {
        title: 'Delayed Approvals',
        headline: '',
        description: 'Requests wait for manual follow-ups.',
      },
      {
        title: 'Limited Visibility',
        headline: '',
        description: 'Teams struggle to track ongoing work.',
      },
    ],
  },
  powered: {
    eyebrow: 'INTELLIGENT OPERATIONS',
    titleBefore: 'Connect Your Processes. Simplify Your ',
    titleAccent: 'Work.',
    description:
      'We introduce AI and automation into the processes your team uses every day, helping information move efficiently and routine work happen with less manual intervention.',
    sectionId: 'intelligent-operations',
    image: {
      src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
      alt: 'Operational dashboards and workflows across devices',
    },
    steps: [
      { id: '01', title: 'Task Automation', description: 'Automate recurring activities and routine updates.' },
      { id: '02', title: 'Smart Routing', description: 'Direct requests to the right people or departments.' },
      { id: '03', title: 'Document Processing', description: 'Extract and organize information from business documents.' },
      { id: '04', title: 'System Integration', description: 'Connect supported tools and synchronize information.' },
      { id: '05', title: 'Operational Insights', description: 'Monitor workflows and identify bottlenecks.' },
    ],
  },
  advantage: {
    eyebrow: 'THE OPERATIONS ADVANTAGE',
    titleBefore: 'Less Friction. Better Flow.',
    titleAccent: '',
    titleSuffix: '',
    description:
      'When routine processes run more efficiently, your team gains clarity, consistency, and time to focus on higher-value work.',
    withoutAiLabel: 'BEFORE AI',
    withAiLabel: 'WITH AI',
    withoutSteps: ['Manual Updates', 'Scattered Requests', 'Slow Approvals', 'Unclear Progress'],
    withSteps: ['Automated Updates', 'Organized Requests', 'Faster Routing', 'Clearer Visibility'],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    titleBefore: 'Built Around Your ',
    titleAccent: 'Workflow.',
    description:
      'We examine how your teams work, identify useful automation opportunities, and develop solutions that fit your existing operations.',
    steps: [
      { number: '01', title: 'Assess', description: 'Review processes and bottlenecks.' },
      { number: '02', title: 'Design', description: 'Plan workflows and safeguards.' },
      { number: '03', title: 'Implement', description: 'Connect, configure, and test.' },
      { number: '04', title: 'Improve', description: 'Monitor and refine performance.' },
    ],
  },
  cta: {
    accentText: 'Too much busywork?',
    mainText: "Let's simplify it.",
    ariaLabel: "Too much busywork? Let's simplify it.",
  },
} as const