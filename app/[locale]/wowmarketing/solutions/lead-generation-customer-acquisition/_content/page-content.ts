import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const HERO_IMAGE = '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg'

const heroImage: CmsHeroImage = {
  src: HERO_IMAGE,
  alt: 'Lead generation and customer acquisition',
}

export const LEAD_GEN_ACQUISITION_PAGE_METADATA = {
  title: 'Lead Generation & Customer Acquisition | WOW Marketing',
  description:
    'Attract the right prospects, generate quality leads, and turn more opportunities into paying customers with WOW Marketing.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WOW Marketing',
    title: 'Lead Generation & Customer Acquisition',
    italicTitle: 'Attract. Convert. Grow.',
    description:
      'Reach the right prospects, capture quality leads, and turn more opportunities into customers with connected marketing and sales strategies.',
    images: [heroImage],
    primaryCtaLabel: 'Generate More Leads',
    secondaryCtaLabel: 'Talk to an Expert',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/meet',
  },
  salesGaps: {
    eyebrow: 'Lead Generation & Customer Acquisition',
    title: 'Turn More Interest Into ',
    accentTitle: 'Customers.',
    description:
      'Connect lead generation, conversion, follow-up, and tracking into one streamlined process that supports consistent growth.',
    items: [
      {
        title: 'Attract Qualified Prospects.',
        description: 'Reach potential customers through targeted campaigns and relevant marketing channels.',
      },
      {
        title: 'Guide Every Opportunity.',
        description: 'Create clear paths that move prospects from initial interest toward action.',
      },
      {
        title: 'Keep Leads Organized.',
        description: 'Track opportunities, manage interactions, and improve follow-up.',
      },
      {
        title: 'Follow Up Smarter.',
        description: 'Automate repetitive tasks, reminders, and lead communications.',
      },
      {
        title: 'Measure What Converts.',
        description: 'Monitor lead quality, conversion rates, and acquisition performance.',
      },
    ],
  },
  whatsIncluded: {
    eyebrow: "What's Included",
    title: 'Everything You Need to Generate and Convert Leads.',
    description:
      'From attracting prospects to closing opportunities, we connect the essential parts of your customer acquisition strategy.',
    groups: [
      {
        title: 'Targeted Lead Generation',
        subtitle: 'Reach the Right Prospects.',
        items: [
          'Attract potential customers through targeted advertising, search marketing, and strategic campaigns.',
        ],
      },
      {
        title: 'Landing Pages & Conversion Funnels',
        subtitle: 'Turn Visits Into Action.',
        items: [
          'Build focused landing pages and conversion paths that encourage inquiries, bookings, and sign-ups.',
        ],
      },
      {
        title: 'Lead Nurturing & Automation',
        subtitle: 'Keep Opportunities Moving.',
        items: [
          'Use automated follow-ups, personalized communication, and CRM workflows to maintain engagement.',
        ],
      },
      {
        title: 'Customer Acquisition Optimization',
        subtitle: 'Improve Every Conversion.',
        items: [
          'Analyze performance, identify conversion gaps, and refine campaigns to improve acquisition results.',
        ],
      },
    ],
  },
  connectedExpertise: {
    eyebrow: 'One Package. Connected Expertise.',
    title: 'One Growth Strategy. ',
    accentTitle: 'Multiple Specialists.',
    description:
      'Bring marketing, sales technology, automation, conversion, and analytics together through one connected team.',
    items: [
      {
        title: 'WOW Accelerate',
        description:
          'Sales Systems & Funnels — Build structured sales processes that guide leads toward conversion.',
      },
      {
        title: 'WOW Marketing',
        description: 'Demand Generation — Attract qualified prospects through targeted digital campaigns.',
      },
      {
        title: 'WOW Intelligence',
        description:
          'AI & Automation — Improve lead qualification, communication, and follow-up with intelligent workflows.',
      },
      {
        title: 'WOW Websites',
        description:
          'Landing Pages & Conversion — Create optimized digital experiences that turn interest into action.',
      },
      {
        title: 'WOW Social',
        description: 'Social Acquisition — Connect with potential customers through strategic social campaigns.',
      },
      {
        title: 'SoftwareWOW',
        description:
          'Custom Integrations — Connect platforms, data, and business systems when custom solutions are needed.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to Turn More Leads Into Customers?',
    mainText: '',
    ariaLabel: 'Start Growing Your Business',
  },
}
