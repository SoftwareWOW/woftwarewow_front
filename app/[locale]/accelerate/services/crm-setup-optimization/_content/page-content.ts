import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const WOW_HERO = [
  '/images/wow/LandingPageNaveBare/Accelerate%202.svg',
  '/images/wow/LandingPageNaveBare/Intelligence%202.svg',
  '/images/wow/Hero/devision/Accelerate.jpg',
  '/images/wow/LandingPageNaveBare/digital%20transofrmation%202.svg',
  '/images/wow/LandingPageNaveBare/AI%20Automation%203.svg',
  '/images/wow/LandingPageNaveBare/Website%201%202.svg',
] as const

const heroImages: CmsHeroImage[] = WOW_HERO.map((src, i) => ({
  src,
  alt: `CRM setup and optimization ${i + 1}`,
}))

export const CRM_SETUP_OPTIMIZATION_PAGE_METADATA = {
  title: 'CRM Setup & Optimization Services | WOW Accelerate',
  description:
    'Simplify sales with professional CRM setup, optimization, data migration, pipeline management, integrations, and workflow automation from WOW Accelerate.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CRM SETUP & OPTIMIZATION',
    title: 'Less chaos.',
    italicTitle: 'More closed deals.',
    description:
      'Bring contacts, conversations, and opportunities together with a CRM built around your sales process.',
    images: heroImages,
    primaryCtaLabel: 'Optimize Your CRM',
    secondaryCtaLabel: 'Explore CRM Solutions',
  },
  theGap: {
    sectionEyebrow: 'THE CHALLENGE',
    titleLine1: 'Your CRM should make selling',
    titleAccent: 'easier, not harder.',
    description:
      "Disconnected data and complicated workflows slow your team down. It's time for a simpler way to sell.",
    cards: [
      {
        id: 1,
        title: "What's Holding You Back",
        icon: 'x' as const,
        features: [
          'Customer information scattered across tools.',
          'Leads and follow-ups slipping through the cracks.',
          'Too much time spent updating records.',
          'Unclear pipeline stages and responsibilities.',
          'Limited visibility into sales performance.',
        ],
      },
      {
        id: 2,
        title: 'What Your Team Needs',
        icon: 'check' as const,
        features: [
          'One organized customer database.',
          'Clear lead and opportunity tracking.',
          'Automated tasks and reminders.',
          'Connected sales tools and workflows.',
          'Real-time pipeline visibility.',
        ],
        isFeatured: true,
      },
    ],
  },
  transformationPlan: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'A smarter CRM.',
    accentTitle: 'A stronger sales process.',
    description: 'Set up, connect, and optimize the systems your sales team relies on.',
    ctaLine: '',
    ctaButtonLabel: 'Build Your CRM System',
    ctaAriaLabel: 'Build your CRM system with WOW Accelerate',
    items: [
      {
        title: 'CRM Audit & Strategy',
        description: 'Review your current setup and identify opportunities to improve.',
      },
      {
        title: 'CRM Setup & Configuration',
        description: 'Build a CRM tailored to your contacts, pipeline, and sales process.',
      },
      {
        title: 'Data Migration & Organization',
        description: 'Bring customer information together in a clean, structured system.',
      },
      {
        title: 'CRM Integrations',
        description: 'Connect email, calendars, forms, and essential sales tools.',
      },
      {
        title: 'Workflow & Pipeline Automation',
        description: 'Simplify follow-ups, lead assignments, and repetitive sales tasks.',
      },
    ],
  },
  beforeAfterGap: {
    eyebrow: 'THE DIFFERENCE',
    title: 'From scattered information to',
    accentTitle: 'complete sales clarity.',
    description: 'Turn disconnected processes into a CRM your team can rely on.',
    items: [
      { title: 'Contacts spread across spreadsheets.', description: '' },
      { title: 'Missed follow-ups and reminders.', description: '' },
      { title: 'Manual data entry.', description: '' },
      { title: 'Unclear deal ownership.', description: '' },
      { title: 'Limited pipeline visibility.', description: '' },
      { title: 'Inconsistent sales processes.', description: '' },
      { title: 'Centralized customer records.', description: '' },
      { title: 'Organized follow-up workflows.', description: '' },
      { title: 'Automated routine tasks.', description: '' },
      { title: 'Clear deal ownership.', description: '' },
      { title: 'Visible pipeline progress.', description: '' },
      { title: 'Consistent sales workflows.', description: '' },
    ],
    closingLine: "A better CRM doesn't just store data. It helps your team act on it.",
  },
  transformationPriorities: {
    eyebrow: 'YOUR CRM ROADMAP',
    title: "Fix what's slowing sales.",
    accentTitle: 'Build what comes next.',
    description: "Improve your CRM step by step, based on your team's priorities.",
    ctaLabel: 'Plan Your CRM Upgrade',
    rows: [
      {
        id: '01',
        title: 'Now',
        heading: 'Get Organized',
        subtext: 'Fix the issues creating friction today.',
        bullets: 'Contact cleanup · Pipeline setup · Lead tracking',
      },
      {
        id: '02',
        title: 'Next',
        heading: 'Connect & Automate',
        subtext: 'Make everyday sales work simpler.',
        bullets: 'Integrations · Follow-ups · Task automation',
      },
      {
        id: '03',
        title: 'Later',
        heading: 'Optimize & Scale',
        subtext: 'Build capabilities that support future growth.',
        bullets: 'Reporting · Advanced workflows · Sales insights',
      },
    ],
  },
  modernizationPath: {
    eyebrow: 'OUR PROCESS',
    title: 'From messy data to',
    accentTitle: 'sales momentum.',
    accentTitleSeparateLine: true,
    ctaLabel: 'Start Your CRM Project',
    steps: [
      {
        number: '01',
        title: 'Assess',
        description: 'Review your tools, data, workflows, and sales challenges.',
      },
      {
        number: '02',
        title: 'Plan',
        description: 'Define your CRM structure, pipeline, and automation priorities.',
      },
      {
        number: '03',
        title: 'Implement',
        description: 'Configure your CRM, connect tools, and organize customer data.',
      },
      {
        number: '04',
        title: 'Optimize',
        description: 'Refine workflows, support adoption, and improve performance.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to make your',
    mainText: 'CRM work smarter?',
    ariaLabel: 'Talk to WOW Accelerate about CRM setup and optimization',
  },
}
