export const VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA = {
  title: 'Video, Motion & Creative Content | WOW Design',
  description:
    'From brand videos and motion graphics to animation and creative content, we bring ideas to life through visuals that capture attention, tell stories, and leave a lasting impression.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'VIDEO, MOTION & CREATIVE CONTENT',
    title: 'Make Every Frame ',
    italicTitle: 'Matter.',
    description:
      'From brand videos and motion graphics to animation and creative content, we bring ideas to life through visuals that capture attention, tell stories, and leave a lasting impression.',
    primaryCta: { label: 'START YOUR CREATIVE PROJECT', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    media: {
      src: '/images/wow/Hero/devision/Design 1.jpg',
      alt: 'Vibrant creative motion and design showcase',
    },
    headingId: 'video-motion-creative-content-hero-heading',
  },
  whatWeCreate: {
    eyebrow: 'WHAT WE CREATE',
    title: 'Creative Content That',
    accentTitle: 'Moves People.',
    description:
      'From a single powerful video to a complete content campaign, we combine storytelling, design, and motion to bring your message to life.',
    items: [
      {
        title: 'Brand & Promotional Videos',
        description:
          'Brand films, promotional videos, product showcases, and campaign content that tell your story and communicate your value.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Events.jpg',
          alt: 'Brand and promotional video production on stage',
        },
      },
      {
        title: 'Motion Graphics & Animation',
        description:
          'Animated typography, graphics, visual effects, and explainers that make messages more engaging and easier to understand.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Design 2.jpg',
          alt: 'Motion graphics and animation on a live display',
        },
      },
      {
        title: 'Social & Digital Video Content',
        description:
          'Reels, short-form videos, digital ads, and platform-ready creative designed for today’s fast-moving audiences.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/DSCF0537.jpg',
          alt: 'Social and digital video content in production',
        },
      },
      {
        title: 'Photography & Creative Production',
        description:
          'Visual concepts, creative direction, photography, and supporting assets that give campaigns a cohesive look and feel.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Events (1).jpg',
          alt: 'Photography and creative production on set',
        },
      },
    ],
  },
  powerOfMotion: {
    eyebrow: 'THE POWER OF MOTION',
    titleBefore: "Don't Just Tell Your Story. ",
    titleAccent: 'Make It Felt.',
    description:
      'The right combination of visuals, movement, and storytelling helps your audience understand your message, connect with your brand, and remember what matters.',
    steps: [
      {
        id: '01',
        title: 'Capture Attention',
        description: 'Create moments that stand out in busy feeds and crowded digital spaces.',
      },
      {
        id: '02',
        title: 'Tell Better Stories',
        description: 'Bring ideas, messages, and experiences to life through compelling visual narratives.',
      },
      {
        id: '03',
        title: 'Make Ideas Clear',
        description: 'Use motion and visual storytelling to simplify complex information.',
      },
      {
        id: '04',
        title: 'Build Lasting Impressions',
        description: 'Strengthen recognition through memorable, consistent creative content.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Devices and digital interfaces showcasing creative production',
    },
  },
  creativeProcess: {
    eyebrow: 'OUR CREATIVE PROCESS',
    title: 'From Concept to Final Cut.',
    description:
      'We combine creative planning, production, and refinement to turn your message into content ready for its audience.',
    steps: [
      {
        number: '1',
        title: 'Concept & Storyboard',
        description:
          'We explore your goals, audience, message, and creative direction, then plan the content and visual flow.',
      },
      {
        number: '2',
        title: 'Produce & Animate',
        description: 'We create the agreed visuals, footage, motion graphics, and supporting creative assets.',
      },
      {
        number: '3',
        title: 'Refine & Deliver',
        description: 'We edit, review, and finalize the content in the agreed formats for its intended platforms.',
      },
    ],
    showCta: false,
  },
  creativeToolkit: {
    eyebrow: 'OUR CREATIVE TOOLKIT',
    headline: 'Tools Behind Every Frame.',
    description:
      'We use professional video, motion, and collaboration tools to produce, refine, and deliver creative content.',
    tools: [
      { name: 'Premiere Pro', icon: 'logos:adobe-premiere' },
      { name: 'After Effects', icon: 'logos:adobe-after-effects' },
      { name: 'CapCut' },
      { name: 'Creative Cloud', icon: 'logos:adobe-icon' },
      { name: 'DaVinci Resolve', icon: 'simple-icons:davinciresolve' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR CREATIVE WORK',
    title: 'See Creativity ',
    titleAccent: 'in Motion.',
    description:
      'Explore how motion, storytelling, and creative production help businesses present their ideas in more engaging ways.',
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
        category: 'FOOD & HOSPITALITY · BRAND STORY',
        year: '2025',
        title: 'YoDoner',
        href: '/case-study/yo-doner',
        image: '/images/wow/Hero/project/case-study/yodoner.png',
      },
    ],
  },
  cta: {
    accentText: 'Have a story?',
    mainText: "Let's bring it to life.",
    ariaLabel: 'Start a video, motion, or creative content project with WOW Design',
  },
} as const
