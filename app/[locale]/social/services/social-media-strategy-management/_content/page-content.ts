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
} as const
