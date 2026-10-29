/** Static copy for WOW Design division page. */

export const DESIGN_HERO = {
  badgeTitle: 'DESIGN',
  title: 'Design That Makes Your Brand ',
  italicTitle: 'Impossible to Ignore.',
  description:
    'From brand identity and graphic design to digital experiences, video, and motion, we turn ambitious ideas into powerful visuals that help businesses stand out, connect, and grow.',
  primaryCta: { label: 'Explore Our Work', href: '/portfolio' },
  secondaryCta: { label: 'Start a Project', href: '/meet' },
  images: [
    { src: '/images/wow/Hero/devision/Design 1.jpg', alt: 'Brand identity design showcase' },
    { src: '/images/wow/Hero/devision/Design 2.jpg', alt: 'Creative design applications' },
    { src: '/images/wow/Hero/devision/Mockup 2 Dark.png', alt: 'Digital brand mockups' },
  ],
} as const

export const DESIGN_PORTFOLIO = {
  eyebrow: 'OUR PORTFOLIO',
  titleBefore: 'Success stories in Digital',
  titleAccent: 'innovation.',
  description:
    'Discover how Rivor brings brands to life with impactful digital solutions. Our portfolio showcases quality and creativity in every project.',
  ctaLabel: 'View All Projects',
  ctaHref: '/portfolio',
  projects: [
    {
      title: 'Inity Inc',
      href: '/case-study/inity-inc',
      image: '/images/wow/Hero/project/case-study/InityInc.png',
      alt: 'Inity Inc case study',
    },
    {
      title: 'CCG Breakthrough',
      href: '/case-study/ccg-breakthrough',
      image: '/images/wow/Hero/project/case-study/ccg.png',
      alt: 'CCG Breakthrough case study',
    },
    {
      title: 'YoDoner',
      href: '/case-study/yo-doner',
      image: '/images/wow/Hero/project/case-study/yodoner.png',
      alt: 'Yo Doner project',
    },
    {
      title: 'Junaid the Tailor',
      href: '/portfolio',
      image: '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
      alt: 'Junaid the Tailor branding project',
    },
  ],
} as const

export const DESIGN_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'Great Businesses Deserve ',
  titleAccent: 'Great Design.',
  description:
    'Your business may offer something exceptional, but if your visual identity feels outdated, inconsistent, or forgettable, customers may never recognize its true value.',
  before: {
    label: 'Before',
    caption: 'Inconsistent visuals. Unclear identity. Forgettable impressions.',
    image: '/images/wow/Hero/devision/Website 1.jpg',
    alt: 'Generic light-themed brand presence before redesign',
  },
  after: {
    label: 'After',
    caption: 'Inconsistent visuals. Unclear identity. Forgettable impressions.',
    image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
    alt: 'Modern dark-themed brand experience after redesign',
  },
  ctaLabel: 'Transform Your Brand',
  ctaHref: '/meet',
} as const

export const DESIGN_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'Everything Your Brand Needs to Look Its ',
  titleAccent: 'Best.',
  description:
    'From defining your visual identity to creating content that brings it to life, WOW Design delivers creative solutions that make your brand more distinctive, consistent, and engaging.',
  ctaLabel: 'Explore All Design Services',
  ctaHref: '/services',
  items: [
    {
      id: 1,
      title: 'Brand Identity & Strategy',
      description:
        'Logo design · Visual identity · Brand guidelines · Rebranding · Brand applications',
      image: '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
      alt: 'Brand identity and strategy',
    },
    {
      id: 2,
      title: 'Graphic & Marketing Design',
      description: 'Marketing collateral · Social creatives · Packaging · Presentations · Print design',
      image: '/images/wow/Hero/devision/Design 2.jpg',
      alt: 'Graphic and marketing design',
    },
    {
      id: 3,
      title: 'UI/UX & Digital Design',
      description: 'UX research · Wireframes · UI design · Prototypes · Design systems',
      image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'UI and UX digital design',
    },
    {
      id: 4,
      title: 'Video, Motion & Creative Content',
      description: 'Brand videos · Motion graphics · Animation · Photography · Video creative',
      image: '/images/wow/Hero/devision/Design 1.jpg',
      alt: 'Video and motion creative content',
    },
  ],
} as const

export const DESIGN_APPROACH = {
  eyebrow: 'OUR APPROACH',
  titleBefore: 'From Imagination to ',
  titleAccent: 'Identity.',
  description:
    'Every memorable brand starts with an idea. We shape that idea into a visual identity, then bring it to life across the experiences and touchpoints that matter to your customers.',
  ctaLabel: 'Start a Project',
  ctaHref: '/meet',
  steps: [
    {
      id: 1,
      title: 'Imagine',
      description: 'Discover the vision, audience, personality, and creative direction.',
    },
    {
      id: 2,
      title: 'Create',
      description: 'Turn the creative direction into a distinctive, cohesive design system.',
    },
    {
      id: 3,
      title: 'Express',
      description: 'Apply the identity consistently across physical and digital experiences.',
    },
  ],
} as const

export const DESIGN_HOW_WE_WORK = {
  eyebrow: 'OUR PROCESS',
  titleBefore: 'A Creative Process Built Around Your ',
  titleAccent: 'Vision.',
  description:
    'Great design comes from collaboration, clarity, and purposeful decisions. Our process keeps your business goals at the center while giving ideas room to develop.',
  steps: [
    {
      step: 'Step 01',
      title: 'Discover',
      description: 'Understand your business, audience, goals, challenges, and creative requirements.',
    },
    {
      step: 'Step 02',
      title: 'Explore',
      description: 'Research, develop creative directions, and establish the visual approach.',
    },
    {
      step: 'Step 03',
      title: 'Design',
      description: 'Transform selected concepts into thoughtful, refined creative work.',
    },
    {
      step: 'Step 04',
      title: 'Refine',
      description: 'Review feedback, make improvements, and finalize the approved direction.',
    },
    {
      step: 'Step 05',
      title: 'Deliver',
      description:
        'Prepare final assets, guidelines, and production-ready materials for their intended use.',
    },
  ],
  ctaLabel: 'Start a Creative Project',
  ctaHref: '/meet',
} as const

export const DESIGN_FLEXIBLE_START = {
  eyebrow: 'FLEXIBLE WAYS TO START',
  titleBefore: 'Start Where Your Brand Needs It ',
  titleAccent: 'Most',
  description:
    "Fix one critical bottleneck or build a more connected brand experience. We'll recommend the right scope around your goals, team, tools, and current creative needs.",
  plans: [
    {
      id: 1,
      badge: 'FOUNDATION',
      title: 'Brand Essentials',
      description: 'For businesses creating or refreshing their visual foundation.',
      features: [
        'Logo design',
        'Color palette',
        'Typography selection',
        'Core brand assets',
        'Basic usage guidance',
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'GROWTH',
      title: 'Creative Growth',
      description: 'For businesses building a more complete, consistent brand experience.',
      features: [
        'Expanded visual identity',
        'Brand guidelines',
        'Marketing design assets',
        'Social media templates',
        'Digital brand applications',
      ],
      ctaLabel: 'Build My Brand',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'PARTNERSHIP',
      title: 'Creative Partnership',
      description: 'For businesses needing ongoing or multi-channel creative expertise.',
      features: [
        'Creative direction',
        'Ongoing graphic design',
        'Campaign creative',
        'Motion/video assets',
        'Cross-channel brand support',
      ],
      ctaLabel: 'Talk to Our Team',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleAccent: 'Not sure what your project needs?',
    description:
      "Tell us what you're creating. We'll help determine the right combination of creative services without adding unnecessary deliverables.",
    ctaLabel: 'Request a Creative Consultation',
    ctaHref: '/meet',
  },
} as const

export const DESIGN_CREATIVE_TOOLS = {
  bodyParagraph:
    'Great creative work starts with ideas, not software. We use design and production tools suited to the project—from visual identity and digital interfaces to motion and multimedia.',
} as const

/** Same Iconify ids as branding OurTools — verified in repo. */
export const DESIGN_CREATIVE_TOOL_ICONS = [
  { id: 1, name: 'Photoshop', icon: 'logos:adobe-photoshop' },
  { id: 2, name: 'Blender', icon: 'logos:blender' },
  { id: 3, name: 'After Effects', icon: 'logos:adobe-after-effects' },
  { id: 4, name: 'Affinity Designer', icon: 'simple-icons:affinitydesigner' },
  { id: 5, name: 'Figma', icon: 'logos:figma' },
  { id: 6, name: 'Illustrator', icon: 'logos:adobe-illustrator' },
  { id: 7, name: 'CorelDRAW', icon: 'simple-icons:coreldraw' },
] as const

export const DESIGN_CTA = {
  accentText: 'Have an idea?',
  mainText: "Let's bring it to life.",
  ariaLabel: 'Start your creative project with WOW Design',
} as const

export const DESIGN_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Questions About Working With ',
  titleAccent: 'WOW Design?',
  description:
    "From first concepts to final creative assets, here's what to know before starting your design project.",
  viewAllHref: '/faq',
} as const

export const DESIGN_FAQS = [
  {
    id: 1,
    question: 'What design services does WOW Design offer?',
    answer:
      'WOW Design covers brand identity, graphic and marketing design, UI/UX, video, motion, and creative content—tailored to how your brand shows up across channels.',
  },
  {
    id: 2,
    question: 'Can you create a brand identity from scratch?',
    answer:
      'Yes. We develop logos, visual systems, typography, color, and core assets so new brands launch with a clear, cohesive identity.',
  },
  {
    id: 3,
    question: 'Can you redesign our existing brand?',
    answer:
      'Yes. We refresh or rebrand existing identities while preserving equity where it matters and modernizing what holds you back.',
  },
  {
    id: 4,
    question: 'Do you offer ongoing graphic design support?',
    answer:
      'Yes. Creative Partnership engagements include ongoing design support for campaigns, social, collateral, and multi-channel needs.',
  },
  {
    id: 5,
    question: 'Can you design websites and apps?',
    answer:
      'WOW Design can handle the creative and UI/UX aspects. For implementation, the team can collaborate with WOW Websites or SoftwareWOW.',
  },
  {
    id: 6,
    question: 'How long does a design project take?',
    answer:
      'Timelines depend on scope—essentials may take a few weeks; full identity and multi-channel systems take longer. We outline a realistic schedule after discovery.',
  },
] as const
