export const UI_UX_DIGITAL_DESIGN_PAGE_METADATA = {
  title: 'UI/UX & Digital Design | WOW Design',
  description:
    'We design intuitive digital experiences that make websites, apps, and platforms easier to navigate, more engaging to use, and better aligned with your business goals.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'UI/UX & DIGITAL DESIGN',
    title: 'Beautiful to See.',
    italicTitle: 'Effortless to Use.',
    description:
      'We design intuitive digital experiences that make websites, apps, and platforms easier to navigate, more engaging to use, and better aligned with your business goals.',
    trustLineHighlight: '50+',
    primaryCta: { label: 'START YOUR DESIGN PROJECT', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    visual: 'image' as const,
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'Digital product interface mockup',
      },
    ],
    headingId: 'ui-ux-digital-design-hero-heading',
  },
  platformPresence: {
    eyebrow: 'WHAT WE DESIGN',
    title: 'Every Interaction, Thoughtfully',
    accentTitle: 'Designed.',
    titleSuffix: '',
    description:
      'From understanding your users to designing complete digital interfaces, we create experiences that balance functionality, clarity, and visual appeal.',
    image: {
      src: '/images/wow/LandingPageNaveBare/ux-graphic-designer-planing-application-process-d-2026-03-11-00-50-35-utc%202.svg',
      alt: 'Hand holding smartphone with digital interface preview',
    },
    items: [
      {
        title: 'UX Research & Strategy',
        description: 'Explore user needs and behaviors to guide meaningful product and experience decisions.',
        features: [
          'Focus: User needs, goals, and behavior patterns',
          'Output: Research insights and strategic direction',
          'Approach: Decisions grounded in real audience context',
        ],
      },
      {
        title: 'User Flows & Wireframing',
        description:
          'Plan intuitive navigation, meaningful interactions, and clear user journeys before visual design begins.',
        features: [
          'Focus: Journeys, information architecture, and screen structure',
          'Output: Wireframes and flows ready for visual design',
          'Approach: Clarity before polish',
        ],
      },
      {
        title: 'Interface & Visual Design',
        description: 'Create polished interfaces and consistent visual systems designed around real interactions.',
        features: [
          'Focus: Layout, typography, color, and interaction patterns',
          'Output: UI screens aligned with brand and usability',
          'Approach: Visual design that supports how people use the product',
        ],
      },
      {
        title: 'Interactive Prototypes & Design Systems',
        description:
          'Bring interfaces to life with prototypes and reusable systems that keep experiences consistent.',
        features: [
          'Focus: Clickable prototypes and shared components',
          'Output: Design systems and dev-ready specifications',
          'Approach: Consistency from prototype through handoff',
        ],
      },
    ],
  },
  designedAroundPeople: {
    eyebrow: 'DESIGNED AROUND PEOPLE',
    titleBefore: 'Less Friction. ',
    titleAccent: 'Better Experiences.',
    description:
      'Great digital experiences make complex tasks feel simple, helping users find what they need and move forward with confidence.',
    showStageGallery: false,
    headerLayout: 'centered' as const,
    benefits: [
      {
        title: 'Effortless Navigation',
        description: 'Help users find information and complete tasks without unnecessary confusion.',
      },
      {
        title: 'Seamless Interactions',
        description: 'Make every click, transition, and action feel clear and intuitive.',
      },
      {
        title: 'Consistent Experiences',
        description: 'Create familiar, cohesive interfaces across different devices and screens.',
      },
      {
        title: 'Better User Journeys',
        description: 'Remove obstacles that prevent visitors from taking meaningful action.',
      },
    ],
    collageImage: {
      src: '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
      alt: 'Laptop, phone, and design artifacts showcasing digital experiences',
    },
  },
  creativeProcess: {
    eyebrow: 'OUR DESIGN PROCESS',
    title: 'From Understanding to Interaction.',
    description:
      'We turn user insights and business requirements into intuitive experiences through a focused, collaborative design process.',
    steps: [
      {
        number: '1',
        title: 'Research & Structure',
        description:
          'Understand user needs, define journeys, and organize content and functionality into clear wireframes.',
      },
      {
        number: '2',
        title: 'Design & Prototype',
        description:
          'Create visual interfaces and interactive prototypes that demonstrate how the experience will work.',
      },
      {
        number: '3',
        title: 'Test & Handoff',
        description:
          'Review usability, refine interactions, and prepare organized design assets for development.',
      },
    ],
    showCta: false,
  },
  creativeToolkit: {
    eyebrow: 'OUR DESIGN TOOLKIT',
    headline: 'Precision Behind Every Pixel.',
    description:
      'We use modern design and collaboration tools to create, prototype, and prepare digital experiences for development.',
    tools: [
      { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
      { name: 'Affinity Designer', icon: 'simple-icons:affinitydesigner' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
      { name: 'CorelDRAW', icon: 'simple-icons:coreldraw' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR DIGITAL DESIGN WORK',
    title: 'Designed for ',
    titleAccent: 'Real Experiences.',
    description:
      'Explore how thoughtful interface design brings clarity, usability, and visual consistency to digital experiences.',
    ctaLabel: 'VIEW MORE',
    ctaHref: '/portfolio',
    projects: [
      {
        category: 'PROFESSIONAL SERVICES · DIGITAL EXPERIENCE',
        year: '2020',
        title: 'CCG Breakthrough',
        href: '/case-study/ccg-breakthrough',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
      {
        category: 'TECHNOLOGY & SYSTEMS · DIGITAL INTERFACE',
        year: '2025',
        title: 'Smartek Systems Canada',
        href: '/case-study/smartek',
        image: '/images/wow/Hero/project/case-study/smartek.png',
      },
    ],
  },
  cta: {
    accentText: 'Have an idea?',
    mainText: "Let's design it.",
    ariaLabel: 'Start a UI/UX and digital design project with WOW Design',
  },
} as const
