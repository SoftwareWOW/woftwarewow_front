const WOW_HERO = [
  { src: '/images/wow/Hero/devision/Accelerate.jpg', alt: 'Sales funnel development' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Funnel conversion path' },
  { src: '/images/wow/Hero/Growth/image (3).png', alt: 'Lead to customer journey' },
  { src: '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg', alt: 'WOW Accelerate sales' },
  { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Sales funnel strategy' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Conversion optimization' },
]

export const SALES_FUNNEL_DEVELOPMENT_PAGE_METADATA = {
  title: 'Sales Funnel Development Services | WOW Accelerate',
  description:
    'Convert more prospects with sales funnel development, landing pages, lead capture, CRM integration, automated follow-ups, and conversion optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES FUNNEL DEVELOPMENT',
    title: 'Turn interest into',
    italicTitle: 'action.',
    description:
      'Build smarter sales funnels that guide prospects from first interaction to paying customer.',
    images: WOW_HERO,
    primaryCtaLabel: 'Build Your Sales Funnel',
    secondaryCtaLabel: 'Talk to an Expert',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  builtToPerform: {
    eyebrow: 'FUNNEL PERFORMANCE',
    title: 'Every step matters. ',
    accentTitle: 'Every conversion counts.',
    description: 'Create connected experiences that turn more opportunities into customers.',
    ctaLabel: 'Start Building Your Funnel',
    items: [
      {
        title: 'Conversion-Focused Design',
        description: 'Guide prospects toward meaningful actions.',
      },
      {
        title: 'Targeted Landing Pages',
        description: 'Match your message to your audience.',
      },
      {
        title: 'Lead Capture & Qualification',
        description: 'Capture interest and identify valuable prospects.',
      },
      {
        title: 'Automated Follow-Ups',
        description: 'Keep leads engaged at the right moments.',
      },
      {
        title: 'Seamless Sales Handoffs',
        description: 'Move qualified leads into your sales pipeline.',
      },
      {
        title: 'Continuous Optimization',
        description: 'Test and improve every stage of your funnel.',
      },
    ],
  },
  websiteJourney: {
    eyebrow: 'OUR PROCESS',
    title: 'From first click to ',
    accentTitle: 'closed deal.',
    ctaLabel: 'Build Your Funnel',
    steps: [
      {
        number: '01',
        title: 'Strategize',
        description: 'Define your audience, offer, and conversion goals.',
      },
      {
        number: '02',
        title: 'Design',
        description: 'Map the journey and create compelling funnel experiences.',
      },
      {
        number: '03',
        title: 'Build',
        description: 'Connect landing pages, lead capture, CRM, and follow-ups.',
      },
      {
        number: '04',
        title: 'Optimize',
        description: 'Track conversions, remove friction, and improve results.',
      },
    ],
  },
  specialistExpertise: {
    eyebrow: 'POWERED BY WOW',
    title: 'One funnel. ',
    accentTitle: 'Every piece connected.',
    description:
      'Bring the right expertise together to create a smoother path from prospect to customer.',
    items: [
      { title: 'Accelerate', description: 'Sales funnels & conversion' },
      { title: 'Marketing', description: 'Traffic & lead generation' },
      { title: 'Websites', description: 'Landing pages & experiences' },
      { title: 'Design', description: 'Creative & conversion design' },
      { title: 'Intelligence', description: 'Automation & lead insights' },
      { title: 'Host', description: 'Reliable funnel infrastructure' },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'more leads into customers?',
    ariaLabel: 'Talk to WOW Accelerate about sales funnel development',
  },
}
