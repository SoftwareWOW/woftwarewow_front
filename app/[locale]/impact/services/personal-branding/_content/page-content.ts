export const PERSONAL_BRANDING_PAGE_METADATA = {
  title: 'Personal Branding | WOW Impact',
  description:
    'Your experience, perspective, and ambitions deserve a professional identity that reflects who you are. We help you define your positioning, shape your story, and build a personal brand people recognize and trust.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'PERSONAL BRANDING',
    title: 'Be Known for What Makes You ',
    italicTitle: 'Different.',
    description:
      'Your experience, perspective, and ambitions deserve a professional identity that reflects who you are. We help you define your positioning, shape your story, and build a personal brand people recognize and trust.',
    primaryCta: { label: 'Build My Personal Brand', href: '/meet' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    media: {
      src: '/images/wow/Hero/devision/Education.jpg',
      alt: 'Personal branding and professional presence showcase',
    },
  },
  whatWeBuild: {
    eyebrow: 'WHAT WE BUILD',
    titleBefore: 'Your Identity, Built With ',
    titleAccent: 'Intention.',
    description:
      'A compelling personal brand brings together your strengths, professional story, visual presence, and the way you communicate with the world.',
    capabilityCards: [
      {
        title: 'Personal Brand Strategy',
        headline: '',
        description:
          'Define your audience, professional goals, strengths, and what makes your perspective valuable.',
      },
      {
        title: 'Professional Positioning',
        headline: '',
        description:
          'Establish a clear professional identity that communicates your expertise and differentiates you in your field.',
      },
      {
        title: 'Personal Story & Biography',
        headline: '',
        description:
          'Develop a compelling professional narrative, biography, and key messages that reflect your experience and ambitions.',
      },
      {
        title: 'Visual Identity & Creative Direction',
        headline: '',
        description:
          'Refine your professional profiles and presentation materials to communicate your identity clearly across relevant platforms.',
      },
      {
        title: 'Professional Profile Development',
        headline: '',
        description:
          'Refine your professional profiles and presentation materials to communicate your identity clearly across relevant platforms.',
      },
    ],
  },
  presence: {
    eyebrow: 'THE POWER OF YOUR PRESENCE',
    title: 'Show Up With Clarity. Leave an Impression.',
    description:
      'A well-defined personal brand helps people understand who you are, what you stand for, and why your perspective matters.',
    benefits: [
      {
        title: '01. Be Recognizable',
        description: 'Create a distinctive professional identity that people can easily remember.',
      },
      {
        title: '02. Communicate With Confidence',
        description: 'Present your experience and ideas through a clear, consistent message.',
      },
      {
        title: '03. Build Credibility',
        description: 'Make your expertise and professional value easier for others to understand.',
      },
      {
        title: '04. Open New Opportunities',
        description: 'Support stronger professional connections, collaborations, and conversations.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Personal brand presence across devices and materials',
      width: 665,
      height: 440,
    },
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
  process: {
    eyebrow: 'OUR BRANDING PROCESS',
    title: "From Who You Are to How You're Seen.",
    description:
      'A collaborative process that brings your experience, ambitions, and professional identity into focus.',
    steps: [
      {
        number: '01',
        title: 'Discover Your Story',
        description:
          'Explore your background, expertise, strengths, audience, and professional aspirations.',
      },
      {
        number: '02',
        title: 'Define Your Position',
        description: 'Establish your unique positioning, personal brand direction, and core messages.',
      },
      {
        number: '03',
        title: 'Create Your Identity',
        description:
          'Develop your professional narrative, visual assets, biographies, and agreed materials.',
      },
      {
        number: '04',
        title: 'Bring It to Life',
        description:
          'Apply your personal brand across selected professional profiles, platforms, and touchpoints.',
      },
    ],
    ctaLabel: 'Start Your Project',
    ctaHref: '/meet',
  },
  ourWork: {
    eyebrow: 'PERSONAL BRANDS IN PRACTICE',
    titleLine1: 'Every Professional',
    titleLine2: 'Has a Story',
    titleAccent: 'Worth Telling.',
    description:
      'Explore how clear positioning, meaningful storytelling, and distinctive visual identities can bring a professional brand together.',
    ctaLabel: 'View More',
    ctaHref: '/portfolio',
    projects: [
      {
        category: 'POSITIONING · PROFESSIONAL NARRATIVE · VISUAL IDENTITY',
        year: '2020',
        title: 'Founder Personal Branding',
        href: '/portfolio',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
      {
        category: 'PROFESSIONAL PROFILE · BRAND STORY · DIGITAL PRESENCE',
        year: '2025',
        title: 'Executive Personal Branding',
        href: '/portfolio',
        image: '/images/wow/Hero/project/case-study/InityInc.png',
      },
    ],
  },
  cta: {
    accentText: 'Ready to stand out?',
    mainText: "Let's build your brand.",
    ariaLabel: 'Start your personal branding project with WOW Impact',
  },
} as const
