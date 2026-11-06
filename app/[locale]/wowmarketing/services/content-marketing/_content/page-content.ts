const CONTENT_HERO_IMAGE_1 = '/images/wow/Hero/Growth/image (1).png'
const CONTENT_HERO_IMAGE_2 = '/images/wow/Hero/Growth/image (2).png'
const CONTENT_EDITORIAL_IMAGE = '/images/wow/blog/Blog card 3.jpg'

export const CONTENT_MARKETING_PAGE_METADATA = {
  title: 'Content Marketing Services | WOW Marketing',
  description:
    'Attract and engage your audience with content strategy, SEO content, storytelling, articles, video, and content distribution.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CONTENT MARKETING',
    title: 'Content that connects.',
    italicTitle: 'Stories that convert.',
    description:
      'Create valuable content that attracts the right audience, builds trust, and inspires action.',
    images: [
      { src: CONTENT_HERO_IMAGE_1, alt: 'Content marketing and editorial assets' },
      { src: CONTENT_HERO_IMAGE_2, alt: 'Articles, social content, and creative storytelling' },
    ],
    primaryCta: { label: 'Build Your Content Strategy', href: '/contact' },
    secondaryCta: { label: 'Talk to an Expert', href: '/meet' },
  },
  authorityFoundation: {
    eyebrow: 'CONTENT MARKETING',
    title: 'Make every piece of content ',
    accentTitle: 'count.',
    description:
      'Turn ideas and expertise into content your audience wants to discover, read, and share.',
    items: [
      {
        title: 'Content Strategy',
        description: 'Plan content around your audience and goals.',
      },
      {
        title: 'SEO Content',
        description: 'Create content people can discover through search.',
      },
      {
        title: 'Thought Leadership',
        description: 'Share expertise that builds trust and credibility.',
      },
      {
        title: 'Creative Storytelling',
        description: 'Bring your brand to life through engaging stories.',
      },
      {
        title: 'Content Distribution',
        description: 'Reach your audience across the right channels.',
      },
    ],
    ctaLabel: 'Explore Our Content Services',
    ctaHref: '/contact',
  },
  whatsIncluded: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Content built for discovery and action.',
    description:
      'Strategy, creation, and distribution work together so every piece of content supports your goals.',
    items: [
      {
        title: 'Content strategy & planning',
        description: 'Align topics, formats, and calendars with your audience and business goals.',
      },
      {
        title: 'Blog & article creation',
        description: 'Inform, educate, and attract readers with valuable long-form content.',
      },
      {
        title: 'SEO-focused content',
        description: 'Create content people can find and trust through search.',
      },
      {
        title: 'Content distribution & optimization',
        description: 'Reach the right channels and improve performance over time.',
      },
    ],
    image: {
      src: CONTENT_EDITORIAL_IMAGE,
      alt: 'Editorial content and articles',
    },
    ctaLabel: 'Explore Our Content Services',
    ctaHref: '/contact',
  },
  authorityJourney: {
    eyebrow: 'OUR APPROACH',
    title: 'From ideas to ',
    accentTitle: 'impact.',
    steps: [
      {
        id: 1,
        title: 'Discover',
        description: 'Understand your audience, goals, and opportunities.',
      },
      {
        id: 2,
        title: 'Plan',
        description: 'Build your topics, formats, and content calendar.',
      },
      {
        id: 3,
        title: 'Create',
        description: 'Produce content that informs and engages.',
      },
      {
        id: 4,
        title: 'Grow',
        description: 'Distribute, measure, and improve performance.',
      },
    ],
  },
  specialistExpertisePackage: {
    eyebrow: 'CONTENT FORMATS',
    title: 'One strategy.',
    accentTitle: 'Many ways to connect.',
    description: '',
    items: [
      {
        title: 'Blog & Articles',
        description: 'Inform, educate, and attract readers.',
        image: { src: '/images/wow/blog/Blog card 1.jpg', alt: 'Blog and article content preview' },
      },
      {
        title: 'Website Content',
        description: 'Turn website visits into meaningful action.',
        image: { src: '/images/wow/Hero/Growth/image (3).png', alt: 'Website content preview' },
      },
      {
        title: 'Social Content',
        description: 'Create posts worth sharing and discussing.',
        image: { src: CONTENT_HERO_IMAGE_2, alt: 'Social content preview' },
      },
      {
        title: 'Video & Visuals',
        description: 'Tell stories that capture attention.',
        image: { src: '/images/wow/blog/blogheroimage.jpg', alt: 'Video and visual content preview' },
      },
      {
        title: 'Email Content',
        description: 'Keep your audience informed and engaged.',
        image: { src: '/images/wow/blog/Blog card 2.jpg', alt: 'Email content preview' },
      },
      {
        title: 'Guides & Resources',
        description: 'Share knowledge that builds lasting trust.',
        image: { src: '/images/wow/blog/Blog card 4.jpg', alt: 'Guides and resources preview' },
      },
    ],
    showWowPrefix: false,
  },
  cta: {
    accentText: 'Ready to tell better stories?',
    mainText: '',
    ariaLabel: 'Build your content strategy with WOW Marketing',
  },
}
