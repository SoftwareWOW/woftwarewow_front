const EMAIL_HERO_IMAGE_1 = '/images/wow/Hero/Growth/image (1).png'
const EMAIL_HERO_IMAGE_2 = '/images/wow/Hero/Growth/image (2).png'

export const EMAIL_PAGE_METADATA = {
  title: 'Email Marketing Services & Campaigns | WOW Marketing',
  description:
    'Build stronger customer relationships with email marketing strategy, newsletters, audience segmentation, automated campaigns, and performance optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'EMAIL MARKETING',
    title: 'Better emails.',
    italicTitle: 'Stronger relationships.',
    description:
      'Turn every inbox interaction into an opportunity to connect, engage, and grow.',
    images: [
      { src: EMAIL_HERO_IMAGE_1, alt: 'Email campaigns and inbox previews' },
      { src: EMAIL_HERO_IMAGE_2, alt: 'Personalized email marketing messages' },
    ],
    primaryCtaLabel: 'Grow With Email',
  },
  socialProcess: {},
  socialCapabilities: {
    eyebrow: 'WHAT WE DO',
    title: 'The right message.',
    accentTitle: 'At the right moment.',
    titleSuffix: '',
    description:
      'From campaign planning to personalization, we make every email more relevant.',
    ctaLabel: 'Build Your Email Strategy',
    items: [
      {
        title: 'Email Campaign Strategy',
        description: 'Plan campaigns around your audience and goals.',
      },
      {
        title: 'Newsletter Design & Management',
        description: 'Create emails people want to open and read.',
      },
      {
        title: 'Audience Segmentation',
        description: 'Send relevant messages to the right subscribers.',
      },
      {
        title: 'Email Automation',
        description: 'Deliver timely messages throughout the customer journey.',
      },
      {
        title: 'Personalization & Testing',
        description: 'Refine content, timing, and experiences.',
      },
      {
        title: 'Analytics & Optimization',
        description: 'Track engagement, conversions, and performance.',
      },
    ],
  },
  platformPresence: {
    eyebrow: 'EMAIL EXPERIENCES',
    title: 'Every email has a purpose.',
    accentTitle: '',
    titleSuffix: '',
    description:
      'Different moments call for different messages. Create email experiences that keep customers connected.',
  },
  buildCommunity: {
    eyebrow: 'CUSTOMER RELATIONSHIPS',
    title: 'Beyond the inbox.',
    description: 'Closer to your customers.',
    steps: [
      {
        number: '1',
        title: 'Welcome',
        description: 'Make every new subscriber feel valued.',
      },
      {
        number: '2',
        title: 'Engage',
        description: 'Share content that keeps interest alive.',
      },
      {
        number: '3',
        title: 'Nurture',
        description: 'Guide subscribers toward their next step.',
      },
      {
        number: '4',
        title: 'Reconnect',
        description: 'Bring inactive audiences back into the conversation.',
      },
    ],
    ctaLabel: 'Strengthen Your Email Marketing',
  },
  socialGallery: {},
  startupPackageImage: {
    src: '/images/wow/Hero/Growth/image (3).png',
    alt: 'Email marketing on mobile',
  },
  cta: {
    accentText: 'Ready to make every email count?',
    mainText: '',
    ariaLabel: 'Build your email strategy with WOW Marketing',
  },
}
