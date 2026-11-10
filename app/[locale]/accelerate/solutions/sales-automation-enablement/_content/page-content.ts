const HERO_IMAGE = '/images/wow/LandingPageNaveBare/Accelerate%202.svg'

export const SALES_AUTOMATION_ENABLEMENT_PAGE_METADATA = {
  title: 'Sales Automation & Enablement Solutions | WOW Accelerate',
  description:
    'Empower your sales team with CRM integrations, automated workflows, follow-up systems, sales enablement tools, and smarter processes from WOW Accelerate.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES AUTOMATION & ENABLEMENT',
    title: 'Empower your team.',
    italicTitle: 'Accelerate every sale.',
    description:
      'Give your sales team smarter workflows, connected tools, and the resources they need to sell with confidence.',
    images: [{ src: HERO_IMAGE, alt: 'Sales automation and enablement' }],
    primaryCtaLabel: 'Empower Your Sales Team',
    secondaryCtaLabel: "See What's Included",
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  aiPackageCard: {
    eyebrow: 'THE SOLUTION',
    title: 'Less manual work.',
    accentTitle: 'More sales momentum.',
    description:
      'Bring automation and sales enablement together to help your team work smarter and move deals forward.',
    packageTitle: 'Sales Automation & Enablement Solution',
    showPricing: false,
    features: [
      { title: 'Sales workflow & process audit', description: '' },
      { title: 'Automation opportunity assessment', description: '' },
      { title: 'CRM & sales tool integrations', description: '' },
      { title: 'Automated follow-up workflows', description: '' },
      { title: 'Sales templates & enablement resources', description: '' },
      { title: 'Workflow testing & team handover', description: '' },
    ],
    cta: { label: 'Build My Sales Solution', href: '/contact' },
  },
  automationTools: {
    eyebrow: 'OUR TOOLS',
    headline: 'Your favorite tools.',
    accentTitle: 'Working better together.',
    description:
      'Connect your CRM, email, calendars, and sales platforms to simplify workflows and keep your team focused on selling.',
  },
  fromIdeaToAutomation: {
    eyebrow: 'OUR PROCESS',
    title: 'Four steps to',
    accentTitle: 'smarter selling.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Identify sales bottlenecks, repetitive tasks, and team needs.',
      },
      {
        number: '02',
        title: 'Design',
        description: 'Map workflows, integrations, and sales enablement resources.',
      },
      {
        number: '03',
        title: 'Build',
        description: 'Connect tools, automate tasks, and test your workflows.',
      },
      {
        number: '04',
        title: 'Launch',
        description: 'Activate your sales system and prepare your team to use it.',
      },
    ],
    ctaLabel: 'Start Your Sales Transformation',
  },
  automationFaq: {
    eyebrow: 'QUESTIONS, ANSWERED',
    title: 'Everything you need to know',
    accentTitle: 'before you automate.',
    ctaLabel: 'View All FAQs',
    ctaHref: '/rfq',
    items: [
      {
        question: 'What sales tasks can be automated?',
        answer:
          'Lead assignments, CRM updates, follow-ups, reminders, and reporting are common examples.',
      },
      {
        question: 'How does sales enablement help my team?',
        answer:
          'It provides the tools, content, and processes your team needs to sell more effectively.',
      },
      {
        question: 'Do I need to replace my existing CRM?',
        answer:
          'Not necessarily. We can often improve and connect the tools you already use.',
      },
      {
        question: 'Can automation work with our sales process?',
        answer:
          'Yes. Workflows can be designed around your sales stages, team roles, and priorities.',
      },
      {
        question: 'Will automation replace our salespeople?',
        answer:
          'No. The goal is to reduce repetitive work while keeping people involved in important conversations and decisions.',
      },
      {
        question: 'How long does implementation take?',
        answer:
          'It depends on your existing systems, integrations, and workflow complexity. We define the scope and timeline before implementation.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to give your',
    mainText: 'sales team an edge?',
    ariaLabel: 'Talk to WOW Accelerate about sales automation and enablement',
  },
}
