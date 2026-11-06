/** Placeholder art from /public/images/wow — swap per slot when final assets are ready. */
const WOW_GROWTH_1 = '/images/wow/Hero/Growth/image (1).png'
const WOW_GROWTH_2 = '/images/wow/Hero/Growth/image (2).png'
const WOW_GROWTH_3 = '/images/wow/Hero/Growth/image (3).png'
const WOW_BLOG = '/images/wow/blog/Blog card 3.jpg'
const WOW_DIVISION = '/images/wow/Hero/devision/C-17.jpg'

const img = (src: string, alt: string) => ({ src, alt })

export const LEAD_GENERATION_PAGE_METADATA = {
  title: 'Lead Generation Services | WOW Marketing',
  description:
    'Attract qualified prospects with targeted lead generation campaigns, landing pages, lead capture, nurturing, and conversion optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LEAD GENERATION',
    title: 'More than leads.',
    italicTitle: 'Real opportunities.',
    description:
      'Attract the right prospects, capture their interest, and turn potential customers into qualified business opportunities.',
    images: [
      img(WOW_GROWTH_1, 'Lead generation hero placeholder'),
      img(WOW_GROWTH_2, 'Lead generation hero placeholder'),
    ],
    primaryCtaLabel: 'Generate More Leads',
    secondaryCtaLabel: 'Explore Our Approach',
  },
  builtForGrowth: {
    title: 'The right people.',
    accentTitle: 'The right opportunities.',
    description:
      'Great lead generation starts with understanding who you want to reach.',
    checklistHeading: 'This service is right for you if:',
    image: img(WOW_GROWTH_3, 'Built for better leads placeholder'),
    items: [
      { title: 'Your website attracts visitors but few enquiries.' },
      { title: "You're struggling to reach qualified prospects." },
      { title: 'Lead quality is inconsistent.' },
      { title: "Your campaigns aren't generating enough interest." },
      { title: 'Too many potential customers leave without taking action.' },
      { title: 'You need a more predictable flow of opportunities.' },
    ],
  },
  growthPieces: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Turn interest into',
    accentTitle: 'opportunity.',
    items: [
      {
        title: 'Audience & Lead Strategy',
        description: 'Identify your ideal customers and where to reach them.',
        image: img(WOW_GROWTH_1, 'Capability placeholder'),
      },
      {
        title: 'Lead Generation Campaigns',
        description: 'Attract prospects through targeted marketing channels.',
        image: img(WOW_GROWTH_2, 'Capability placeholder'),
      },
      {
        title: 'Landing Pages & Lead Capture',
        description: 'Turn website visitors into valuable enquiries.',
        image: img(WOW_GROWTH_3, 'Capability placeholder'),
      },
      {
        title: 'Lead Qualification & Nurturing',
        description: 'Identify promising prospects and keep them engaged.',
        image: img(WOW_BLOG, 'Capability placeholder'),
      },
    ],
    ctaLabel: 'Start Generating Leads',
    showFooterTagline: false,
  },
  connectedGrowth: {
    eyebrow: 'OUR APPROACH',
    title: 'Every connection',
    accentTitle: 'has potential.',
    image: img(WOW_DIVISION, 'Our approach placeholder'),
    steps: [
      {
        title: 'Attract',
        description: 'Reach people who need what you offer.',
      },
      {
        title: 'Engage',
        description: 'Capture attention with relevant messaging.',
      },
      {
        title: 'Capture',
        description: 'Turn interest into enquiries and sign-ups.',
      },
      {
        title: 'Qualify',
        description: 'Identify leads with genuine potential.',
      },
      {
        title: 'Nurture',
        description: 'Build trust through timely follow-ups.',
      },
      {
        title: 'Optimize',
        description: 'Improve lead quality and conversion performance.',
      },
    ],
  },
  cta: {
    accentText: 'Ready for better leads?',
    mainText: '',
    ariaLabel: 'Start lead generation with WOW Marketing',
  },
}
