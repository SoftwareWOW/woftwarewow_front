const WOW_GROWTH_1 = '/images/wow/Hero/Growth/image (1).png'
const WOW_GROWTH_2 = '/images/wow/Hero/Growth/image (2).png'
const WOW_GROWTH_3 = '/images/wow/Hero/Growth/image (3).png'
const WOW_ACCELERATE = '/images/wow/Hero/devision/Accelerate.jpg'
const WOW_FUNNEL = '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg'

const img = (src: string, alt: string) => ({ src, alt })

export const SALES_FUNNELS_CONVERSION_PAGE_METADATA = {
  title: 'Sales Funnels & Conversion Solutions | WOW Accelerate',
  description:
    'Turn more prospects into customers with sales funnel development, landing page optimization, lead nurturing workflows, and conversion rate improvement.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES FUNNELS & CONVERSION',
    title: 'Convert interest into',
    italicTitle: 'revenue.',
    description:
      'Turn more prospects into customers with smarter funnels and optimized conversion journeys.',
    images: [
      img(WOW_ACCELERATE, 'Sales funnels and conversion'),
      img(WOW_GROWTH_2, 'Conversion journey'),
    ],
    primaryCtaLabel: 'Improve Your Conversions',
    secondaryCtaLabel: 'Talk to an Expert',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/meet',
  },
  builtForGrowth: {
    eyebrow: 'BUILT FOR CONVERSION',
    title: 'More interest.',
    description:
      'Strong funnels turn visits, enquiries, and follow-ups into predictable revenue.\n\nWhen each step is connected, prospects move forward with less friction.',
    image: img(WOW_GROWTH_3, 'Sales funnel optimization'),
    items: [
      { title: 'Visitors browse but rarely convert or book.' },
      { title: 'Landing pages do not match your offer or audience.' },
      { title: 'Leads go cold without timely follow-up.' },
      { title: 'Your funnel steps feel disconnected from sales.' },
      { title: 'Conversion rates stay flat despite more traffic.' },
      { title: 'You need a clearer path from interest to purchase.' },
    ],
  },
  growthPieces: {
    eyebrow: 'SOLUTION CAPABILITIES',
    title: 'Everything you need to convert',
    description: 'Bring funnel design, pages, nurturing, and optimization into one connected solution.',
    items: [
      {
        title: 'Sales funnel development',
        description: 'Map journeys that guide prospects from first touch to purchase.',
        image: img(WOW_FUNNEL, 'Sales funnel development'),
      },
      {
        title: 'Landing page optimization',
        description: 'Align messaging, layout, and offers with what converts.',
        image: img(WOW_GROWTH_1, 'Landing page optimization'),
      },
      {
        title: 'Lead nurturing workflows',
        description: 'Keep leads engaged with timely follow-ups and automation.',
        image: img(WOW_GROWTH_2, 'Lead nurturing workflows'),
      },
      {
        title: 'Conversion rate improvement',
        description: 'Test, measure, and refine every stage of the funnel.',
        image: img(WOW_GROWTH_3, 'Conversion rate improvement'),
      },
    ],
    ctaLabel: 'Start Improving Conversions',
  },
  connectedGrowth: {
    eyebrow: 'THE FUNNEL JOURNEY',
    title: 'From first click to closed customer.',
    description: 'Each stage is designed to reduce drop-off and move qualified prospects forward.',
    image: img(WOW_ACCELERATE, 'Funnel journey overview'),
    steps: [
      {
        title: 'Attract',
        description: 'Bring the right people into your funnel with clear offers.',
      },
      {
        title: 'Capture',
        description: 'Turn visits into enquiries with focused landing experiences.',
      },
      {
        title: 'Nurture',
        description: 'Build trust through relevant follow-ups and content.',
      },
      {
        title: 'Convert',
        description: 'Guide ready prospects to book, buy, or talk to sales.',
      },
      {
        title: 'Optimize',
        description: 'Improve conversion rates with data and ongoing testing.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'HOW WE WORK',
    title: 'A clearer funnel',
    accentTitle: 'in four steps.',
    steps: [
      {
        title: 'Strategize',
        description: 'Define audiences, offers, and conversion goals.',
      },
      {
        title: 'Design',
        description: 'Map the journey and shape compelling funnel experiences.',
      },
      {
        title: 'Build',
        description: 'Connect pages, capture, CRM, and follow-up workflows.',
      },
      {
        title: 'Optimize',
        description: 'Track performance, remove friction, and improve results.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'more interest into revenue?',
    ariaLabel: 'Talk to WOW Accelerate about sales funnels and conversion',
  },
}
