import type { CmsGalleryImage } from '@/lib/strapi/mappers/page-sections'

export const GRAPHIC_MARKETING_DESIGN_PAGE_METADATA = {
  title: 'Graphic & Marketing Design | WOW Design',
  description:
    'From attention-grabbing campaigns to everyday marketing materials, we create purposeful designs that communicate your message, strengthen your brand, and inspire action.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'GRAPHIC & MARKETING DESIGN',
    title: 'Make Them Look. ',
    italicTitle: 'Make Them Remember.',
    description:
      'From attention-grabbing campaigns to everyday marketing materials, we create purposeful designs that communicate your message, strengthen your brand, and inspire action.',
    primaryCta: { label: 'Start Your Design Project', href: '/meet' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    media: null,
    headingId: 'graphic-marketing-design-hero-heading',
  },
  creativeGallery: {
    images: [
      { src: '/images/wow/LandingPageNaveBare/Marketing%20%26%20Growth.svg', alt: 'Marketing campaign creative' },
      { src: '/images/wow/Hero/devision/Design 2.jpg', alt: 'Brand value social creative' },
      { src: '/images/wow/Hero/devision/Design 1.jpg', alt: 'Quarter success marketing graphic' },
      { src: '/images/wow/Hero/devision/Mockup 2 Dark.png', alt: 'Website and branding marketing grid' },
      { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Conversion-focused marketing creative' },
    ] satisfies CmsGalleryImage[],
  },
  whatWeCreate: {
    eyebrow: 'WHAT WE CREATE',
    title: 'Creative for Every Place Your Brand Shows Up.',
    description:
      'From digital screens to printed materials, we create designs that bring clarity, personality, and consistency to your marketing.',
    items: [
      {
        title: 'Marketing & Advertising Design',
        description:
          'Campaign visuals, digital ads, promotional graphics, and marketing collateral that help your message stand out.',
      },
      {
        title: 'Social Media & Digital Creatives',
        description:
          'Branded posts, carousel designs, banners, and platform-ready graphics that keep your brand recognizable.',
      },
      {
        title: 'Print & Packaging Design',
        description:
          'Brochures, flyers, packaging, and physical marketing materials designed to make a strong impression.',
      },
      {
        title: 'Presentations & Business Materials',
        description:
          'Pitch decks, company profiles, proposals, and business documents that communicate your ideas professionally.',
      },
    ],
  },
  designImpact: {
    eyebrow: 'THE IMPACT OF DESIGN',
    title: 'Looks Good. Works',
    accentTitle: 'Harder.',
    description: '',
    ctaLabel: 'Reserve My Place',
    ctaHref: '/meet',
    steps: [
      {
        title: 'Capture Attention',
        description: 'Make your brand stand out in crowded feeds, campaigns, and everyday environments.',
      },
      {
        title: 'Communicate Clearly',
        description: 'Turn information and ideas into visuals that are easier to understand.',
      },
      {
        title: 'Strengthen Recognition',
        description: 'Maintain a cohesive visual presence across different formats and channels.',
      },
      {
        title: 'Encourage Action',
        description: 'Direct attention toward the messages, offers, and next steps that matter.',
      },
    ],
  },
  designShowcaseGallery: {
    images: [
      { src: '/images/wow/LandingPageNaveBare/Marketing%20%26%20Growth.svg', alt: 'Marketing campaign creative' },
      { src: '/images/wow/Hero/devision/Design 2.jpg', alt: 'Brand value social creative' },
      { src: '/images/wow/Hero/devision/Design 1.jpg', alt: 'Quarter success marketing graphic' },
      { src: '/images/wow/Hero/devision/Mockup 2 Dark.png', alt: 'Website and branding marketing grid' },
      { src: '/images/wow/Hero/Growth/image (1).png', alt: 'Conversion-focused marketing creative' },
    ] satisfies CmsGalleryImage[],
  },
  creativeProcess: {
    eyebrow: 'OUR CREATIVE PROCESS',
    title: 'From Brief to Brilliant.',
    description:
      'A straightforward creative process that turns your ideas and requirements into designs ready to make an impact.',
    steps: [
      {
        number: '1',
        title: 'Understand & Plan',
        description:
          'We identify your audience, objectives, key messages, formats, and creative requirements.',
      },
      {
        number: '2',
        title: 'Create & Refine',
        description: 'We develop creative directions, produce designs, and refine them based on feedback.',
      },
      {
        number: '3',
        title: 'Finalize & Deliver',
        description:
          'We prepare the approved designs in the agreed formats, ready for publishing, printing, or distribution.',
      },
    ],
    showCta: false,
  },
  creativeToolkit: {
    eyebrow: 'OUR CREATIVE TOOLKIT',
    headline: 'Creative Thinking. Professional Tools.',
    description:
      'A strong brand creates familiarity, builds confidence, and communicates who you are before a conversation even begins.',
    tools: [
      { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
      { name: 'Affinity Designer', icon: 'simple-icons:affinitydesigner' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
      { name: 'CorelDRAW', icon: 'simple-icons:coreldraw' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR WORK',
    title: 'Ideas Made',
    titleAccent: 'Visible.',
    description:
      'See how thoughtful graphic design can bring campaigns, communication, and creative ideas to life.',
    ctaLabel: 'View More',
    ctaHref: '/portfolio',
    projects: [
      {
        category: 'CONSULTING & PROFESSIONAL SERVICES',
        year: '2020',
        title: 'CCG Breakthrough',
        href: '/case-study/ccg-breakthrough',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
      {
        category: 'RESTAURANT & FAST FOOD',
        year: '2025',
        title: 'YoDoner',
        href: '/case-study/yo-doner',
        image: '/images/wow/Hero/project/case-study/yodoner.png',
      },
    ],
  },
  cta: {
    accentText: 'Need designs?',
    mainText: "Let's create.",
    ariaLabel: 'Start your graphic and marketing design project with WOW Design',
  },
} as const
