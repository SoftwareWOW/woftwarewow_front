export const BRAND_IDENTITY_STRATEGY_PAGE_METADATA = {
  title: 'Brand Identity & Strategy | WOW Design',
  description:
    'Your brand is more than a logo. We create distinctive identities built around your business, audience, and ambitions—helping you stand out, build trust, and make a lasting impression.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'BRAND IDENTITY & STRATEGY',
    title: 'Build a Brand People Recognize & ',
    italicTitle: 'Remember.',
    description:
      'Your brand is more than a logo. We create distinctive identities built around your business, audience, and ambitions—helping you stand out, build trust, and make a lasting impression.',
    primaryCta: { label: 'Start Your Project', href: '/meet' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    media: {
      src: '/images/hero-img/video-img.png',
      alt: 'Brand identity and strategy showcase',
    },
  },
  whatWeCreate: {
    eyebrow: 'WHAT WE CREATE',
    title: 'Everything Your Brand Needs to Stand Apart.',
    description:
      'From defining your positioning to shaping your visual identity, we create the foundations for a brand that looks, feels, and communicates consistently.',
    items: [
      {
        title: 'Brand Strategy & Positioning',
        description:
          "Define what makes your business different, who you're speaking to, and how your brand should be perceived.",
      },
      {
        title: 'Logo & Visual Identity',
        description:
          'Create a recognizable visual foundation through distinctive logos, colors, typography, and brand elements.',
      },
      {
        title: 'Brand Guidelines & Design Systems',
        description:
          'Establish clear visual standards that keep your identity consistent across platforms and materials.',
      },
      {
        title: 'Rebranding & Brand Applications',
        description:
          'Refresh an existing identity or extend a new one across digital, print, and customer-facing touchpoints.',
      },
    ],
  },
  brandExperience: {
    eyebrow: 'THE BRAND EXPERIENCE',
    titleBefore: 'One Identity. Every ',
    titleAccent: 'Impression.',
    description:
      'A strong brand creates familiarity, builds confidence, and communicates who you are before a conversation even begins.',
    topics: [
      {
        slug: 'be-recognizable',
        title: 'Be Recognizable',
        description: 'Build a distinctive identity that makes your business easier to remember.',
        coverImage: '/images/wow/Hero/project/case-study/ccg.png',
        href: '/portfolio',
      },
      {
        slug: 'stay-consistent',
        title: 'Stay Consistent',
        description: 'Create a unified brand experience across every customer touchpoint.',
        coverImage: '/images/wow/Hero/devision/Design 2.jpg',
        href: '/portfolio',
      },
      {
        slug: 'inspire-confidence',
        title: 'Inspire Confidence',
        description: 'Present your business with the clarity and professionalism your audience expects.',
        coverImage: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        href: '/portfolio',
      },
      {
        slug: 'grow-with-purpose',
        title: 'Grow With Purpose',
        description:
          'Build a flexible visual foundation that supports future campaigns, products, and experiences.',
        coverImage: '/images/wow/Hero/devision/Design 1.jpg',
        href: '/portfolio',
      },
    ],
  },
  creativeProcess: {
    eyebrow: 'OUR CREATIVE PROCESS',
    title: 'From First Idea to Lasting Identity.',
    description:
      'A strong brand creates familiarity, builds confidence, and communicates who you are before a conversation even begins.',
    steps: [
      {
        number: '1',
        title: 'Discover & Define',
        description: 'Understand your business, audience, competitors, goals, and creative direction.',
      },
      {
        number: '2',
        title: 'Create & Refine',
        description: 'Develop visual concepts, explore directions, and refine the selected identity through feedback.',
      },
      {
        number: '3',
        title: 'Deliver & Activate',
        description:
          'Finalize your brand assets, guidelines, and agreed applications, ready for consistent use.',
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
      { name: 'Blender', icon: 'logos:blender' },
      { name: 'After Effects', icon: 'logos:adobe-after-effects' },
      { name: 'Affinity Designer', icon: 'simple-icons:affinitydesigner' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
      { name: 'CorelDRAW', icon: 'simple-icons:coreldraw' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR WORK',
    title: 'Brands Brought to Life.',
    description:
      'Explore how creative thinking and purposeful design come together across different businesses and industries.',
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
        category: 'TECHNOLOGY & SYSTEMS',
        year: '2025',
        title: 'Inity Inc',
        href: '/case-study/inity-inc',
        image: '/images/wow/Hero/project/case-study/InityInc.png',
      },
    ],
  },
  cta: {
    accentText: 'Ready to stand out?',
    mainText: "Let's build your brand.",
    ariaLabel: 'Start your brand identity project with WOW Design',
  },
} as const
