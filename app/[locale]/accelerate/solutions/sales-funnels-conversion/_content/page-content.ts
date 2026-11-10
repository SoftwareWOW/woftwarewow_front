const WOW_GROWTH_1 = '/images/wow/Hero/Growth/image (1).png'
const WOW_GROWTH_2 = '/images/wow/Hero/Growth/image (2).png'
const WOW_GROWTH_3 = '/images/wow/Hero/Growth/image (3).png'
const WOW_ACCELERATE = '/images/wow/Hero/devision/Accelerate.jpg'
const WOW_FUNNEL = '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg'

const img = (src: string, alt: string) => ({ src, alt })

export const SALES_FUNNELS_CONVERSION_PAGE_METADATA = {
  title: 'Sales Funnels & Conversion Solutions | WOW Accelerate',
  description:
    'Turn more prospects into customers with connected sales funnels, landing page optimization, lead nurturing, CRM workflows, and conversion rate optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES FUNNELS & CONVERSION',
    title: 'Turn more interest into',
    italicTitle: 'more revenue.',
    description:
      'Connect every stage of your sales journey with smarter funnels that turn prospects into paying customers.',
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
    eyebrow: 'THE CHALLENGE',
    title: "You're getting attention.",
    accentTitle: 'But are you converting it?',
    checklistHeading: 'Is this holding your business back?',
    description:
      "More traffic doesn't always mean more sales. We connect the missing steps between interest and purchase.\n\nBetter conversions start with a clearer customer journey.",
    image: img(WOW_GROWTH_3, 'Sales funnel conversion challenge'),
    items: [
      { title: 'Visitors leave without taking action.' },
      { title: 'Landing pages fail to communicate your offer.' },
      { title: 'Leads lose interest before sales can follow up.' },
      { title: 'Disconnected funnel steps create friction.' },
      { title: 'Conversion rates remain low despite growing traffic.' },
      { title: 'Potential customers drop off before making a decision.' },
    ],
  },
  growthPieces: {
    eyebrow: "WHAT'S INCLUDED",
    title: 'Every stage connected.',
    accentTitle: 'Every opportunity maximized.',
    description:
      'Bring funnel strategy, conversion experiences, nurturing, and optimization together.',
    items: [
      {
        title: 'Sales Funnel Development',
        description: 'Build clear journeys that guide prospects toward purchase.',
        image: img(WOW_FUNNEL, 'Sales funnel development'),
      },
      {
        title: 'Landing Page Optimization',
        description: 'Turn more visits into enquiries with focused experiences.',
        image: img(WOW_GROWTH_1, 'Landing page optimization'),
      },
      {
        title: 'Lead Nurturing & Follow-Ups',
        description: 'Keep prospects engaged with relevant, timely communication.',
        image: img(WOW_GROWTH_2, 'Lead nurturing and follow-ups'),
      },
      {
        title: 'Conversion Rate Optimization',
        description: 'Identify friction, test improvements, and increase conversion opportunities.',
        image: img(WOW_GROWTH_3, 'Conversion rate optimization'),
      },
    ],
    ctaLabel: 'Start Improving Conversions',
  },
  connectedGrowth: {
    eyebrow: 'FROM INTEREST TO CUSTOMER',
    title: 'Five stages.',
    accentTitle: 'One goal: more conversions.',
    description:
      'Guide prospects through a connected journey that makes every next step easier.',
    image: img(WOW_ACCELERATE, 'Conversion journey overview'),
    steps: [
      {
        title: 'Attract',
        description: 'Bring the right prospects into your funnel.',
      },
      {
        title: 'Capture',
        description: 'Turn interest into leads and enquiries.',
      },
      {
        title: 'Nurture',
        description: 'Build trust and keep conversations moving.',
      },
      {
        title: 'Convert',
        description: 'Help qualified prospects take the next step.',
      },
      {
        title: 'Optimize',
        description: 'Measure performance and improve conversion rates.',
      },
    ],
  },
  howItWorks: {
    eyebrow: 'OUR APPROACH',
    title: 'A smarter funnel.',
    accentTitle: 'Built step by step.',
    ctaLabel: 'Build Your Conversion Strategy',
    steps: [
      {
        title: 'Strategize',
        description: 'Define your audience, offers, and conversion goals.',
      },
      {
        title: 'Design',
        description: 'Create clear journeys and compelling conversion experiences.',
      },
      {
        title: 'Build',
        description: 'Connect landing pages, CRM, lead capture, and follow-ups.',
      },
      {
        title: 'Optimize',
        description: 'Track results, remove friction, and improve performance.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'more clicks into customers?',
    ariaLabel: 'Talk to WOW Accelerate about sales funnels and conversion',
  },
}
