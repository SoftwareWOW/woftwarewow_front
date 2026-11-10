import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const HERO_IMAGE = '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg'

const heroImage: CmsHeroImage = {
  src: HERO_IMAGE,
  alt: 'Lead generation and outbound sales',
}

export const LEAD_GENERATION_OUTBOUND_PAGE_METADATA = {
  title: 'Lead Generation & Outbound Solutions | WOW Accelerate',
  description:
    'Build a stronger sales pipeline with targeted prospecting, multi-channel outbound campaigns, personalized outreach, lead qualification, and follow-up systems.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LEAD GENERATION & OUTBOUND',
    title: 'Reach the right people.',
    italicTitle: 'Create new opportunities.',
    description:
      'Build a stronger sales pipeline with targeted prospecting, personalized outreach, and connected lead generation campaigns.',
    images: [heroImage],
    primaryCtaLabel: 'Grow Your Pipeline',
    secondaryCtaLabel: 'Talk to an Expert',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/meet',
  },
  salesGaps: {
    eyebrow: 'THE SOLUTION',
    title: 'Stop chasing leads. ',
    accentTitle: 'Start creating demand.',
    description:
      'Turn disconnected prospecting efforts into a focused outbound system that creates meaningful sales opportunities.',
    items: [
      {
        title: 'Ideal Customer Targeting',
        description: 'Identify the companies and decision-makers most likely to buy.',
      },
      {
        title: 'Multi-Channel Outreach',
        description: 'Connect with prospects through email, LinkedIn, and relevant channels.',
      },
      {
        title: 'Personalized Engagement',
        description: 'Start conversations with messages that speak to real needs.',
      },
      {
        title: 'Lead Qualification',
        description: 'Prioritize interested prospects who match your ideal customer profile.',
      },
      {
        title: 'Pipeline Tracking',
        description: 'See how outreach turns into conversations, meetings, and opportunities.',
      },
    ],
  },
  whatsIncluded: {
    eyebrow: 'SOLUTION CAPABILITIES',
    title: 'Everything you need to build your pipeline.',
    description: '',
    groups: [
      {
        title: 'Ideal Customer Targeting',
        subtitle: 'Find your best-fit audiences and decision-makers.',
        items: [],
      },
      {
        title: 'Multi-Channel Outbound Campaigns',
        subtitle: 'Reach prospects through coordinated outreach.',
        items: [],
      },
      {
        title: 'Prospect Engagement & Follow-Ups',
        subtitle: 'Build interest and keep conversations moving.',
        items: [],
      },
      {
        title: 'Lead Pipeline Development',
        subtitle: 'Turn qualified responses into organized sales opportunities.',
        items: [],
      },
    ],
  },
  connectedExpertise: {
    eyebrow: 'POWERED BY WOW',
    title: 'One outbound engine. ',
    accentTitle: 'Specialist expertise behind it.',
    description:
      'Bring targeting, outreach, automation, and conversion together through one connected team.',
    items: [
      {
        title: 'WOW Accelerate',
        description: 'Lead generation & outbound sales',
      },
      {
        title: 'WOW Marketing',
        description: 'Audience research & acquisition',
      },
      {
        title: 'WOW Intelligence',
        description: 'Outreach automation & lead insights',
      },
      {
        title: 'WOW Websites',
        description: 'Landing pages & lead capture',
      },
      {
        title: 'WOW Social',
        description: 'Social prospecting & engagement',
      },
      {
        title: 'SoftwareWOW',
        description: 'CRM integrations & sales tools',
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'prospects into opportunities?',
    ariaLabel: 'Talk to WOW Accelerate about lead generation and outbound',
  },
}
