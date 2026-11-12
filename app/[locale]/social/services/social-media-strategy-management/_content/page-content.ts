export const SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA = {
  title: 'Social Media Strategy & Management | WOW Social',
  description:
    'From strategy and content planning to publishing and performance tracking, we manage your social media with consistency and purpose.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SOCIAL MEDIA',
    title: 'Your Social Presence. ',
    italicTitle: 'With Purpose.',
    description:
      'From strategy and content planning to publishing and performance tracking, we manage your social media with consistency and purpose—helping your business stay visible, engage the right audience, and build stronger connections.',
    trustLineHighlight: '50+',
    primaryCta: { label: 'GET MY SOCIAL STRATEGY', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    visual: 'image' as const,
    images: [
      {
        src: '/images/wow/Hero/devision/Design 1.jpg',
        alt: 'Social media strategy and content planning',
      },
    ],
    headingId: 'social-media-strategy-management-hero-heading',
  },
  growthPieces: {
    eyebrow: 'BUILT FOR GROWTH',
    title: 'Your Social Media, Taken Care Of.',
    description:
      'A connected approach to planning, managing, and improving your social presence—without the day-to-day complexity.',
    items: [
      {
        title: 'Social Strategy & Channel Planning',
        description:
          'Define your goals, audience, content direction, and the platforms that best support your business.',
        image: {
          src: '/images/wow/LandingPageNaveBare/multiracial-business-team-gathering-hands-in-unity-2026-01-09-11-41-19-utc%202.svg',
          alt: 'Team planning social strategy around a table',
        },
      },
      {
        title: 'Content Calendars & Scheduling',
        description:
          'Organize content topics, publishing schedules, and campaign priorities into a clear, consistent plan.',
        image: {
          src: '/images/wow/Hero/devision/Design 1.jpg',
          alt: 'Content calendar and scheduling workflow',
        },
      },
      {
        title: 'Account & Publishing Management',
        description:
          'Coordinate approved content, manage posting workflows, and maintain an organized brand presence.',
        image: {
          src: '/images/wow/Hero/devision/DSCF0537.jpg',
          alt: 'Social publishing and account management',
        },
      },
      {
        title: 'Performance Tracking & Reporting',
        description:
          'Monitor relevant metrics, identify useful insights, and refine the strategy based on audience response.',
        image: {
          src: '/images/wow/Hero/devision/Intelligence.jpg',
          alt: 'Social performance analytics and reporting',
        },
      },
    ],
  },
  theDifference: {
    eyebrow: 'THE DIFFERENCE',
    titleBefore: 'Less Guesswork.',
    titleAccent: 'More Consistency.',
    description:
      'Your social presence becomes easier to manage when every post, platform, and campaign follows a clear direction.',
    problemLabel: 'Reactive Posting',
    solutionLabel: 'Strategic Management',
    problemSteps: [
      'Missed publishing dates',
      'Unclear content direction',
      'Limited performance visibility',
      'Last-minute content creation',
      'Inconsistent brand messaging',
      'Disorganized approval workflows',
    ],
    solutionSteps: [
      'Planned publishing calendar',
      'Clear content direction',
      'Regular performance reviews',
      'Content planned in advance',
      'Consistent brand messaging',
      'Streamlined approval workflows',
    ],
    footerSummary:
      'Social media should support your business—not become another task that never gets finished.',
    ctaLabel: "Let's Talk About Your Social Goals",
    ctaHref: '/meet',
  },
  managementProcess: {
    eyebrow: 'OUR MANAGEMENT PROCESS',
    titleBefore: 'From Strategy to ',
    titleAccent: 'Every Post.',
    description:
      'A clear, collaborative process that keeps your social media organized, consistent, and aligned with your business.',
    steps: [
      {
        number: '1',
        title: 'Discover & Strategize',
        description:
          'We review your existing presence, understand your audience and goals, and establish a practical content direction.',
      },
      {
        number: '2',
        title: 'Plan & Manage',
        description:
          'We coordinate the content calendar, approvals, scheduling, and publishing across agreed platforms.',
      },
      {
        number: '3',
        title: 'Measure & Improve',
        description: 'We review engagement and performance, share insights, and refine the approach over time.',
      },
    ],
  },
  socialToolkit: {
    eyebrow: 'OUR SOCIAL TOOLKIT',
    headline: 'Tools That Power Your Workflow.',
    description:
      'We use trusted design and platform tools to plan, create, schedule, and measure social content with your team.',
    tools: [
      { name: 'Canva', icon: 'simple-icons:canva' },
      { name: 'LinkedIn', icon: 'simple-icons:linkedin' },
      { name: 'Meta', icon: 'simple-icons:meta' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR SOCIAL WORK',
    titleBefore: 'Social Presence, ',
    titleAccent: 'Put Into Practice.',
    description:
      'Explore how structured planning, consistent content, and clear creative direction come together across different businesses.',
    projects: [
      {
        category: 'CONSULTING & PROFESSIONAL SERVICES',
        year: '2020',
        title: 'CCG Breakthrough',
        href: '/case-study/ccg-breakthrough',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
      {
        category: 'FASHION & APPAREL',
        year: '2025',
        title: 'Junaid The Tailor',
        href: '/portfolio',
        image: '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
      },
    ],
  },
  cta: {
    accentText: 'Ready to grow?',
    mainText: "Let's get social.",
    ariaLabel: 'Start a social media strategy and management project with WOW Social',
  },
} as const
