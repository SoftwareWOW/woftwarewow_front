export const PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA = {
  title: 'Paid Social Advertising & Community Management | WOW Social',
  description:
    'Turn social attention into meaningful opportunities with targeted advertising, compelling campaigns, and active community engagement.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'PAID SOCIAL ADVERTISING & COMMUNITY MANAGEMENT',
    title: 'Reach the Right People. Spark Real ',
    italicTitle: 'Connections.',
    description:
      'Turn social attention into meaningful opportunities with targeted advertising, compelling campaigns, and active community engagement that brings your brand closer to its audience.',
    primaryCta: { label: 'LAUNCH MY CAMPAIGN', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/LandingPageNaveBare/multiracial-business-team-gathering-hands-in-unity-2026-01-09-11-41-19-utc%202.svg',
        alt: 'Team planning paid social campaigns',
      },
      {
        src: '/images/wow/Hero/devision/DSCF0537.jpg',
        alt: 'Creator and community engagement',
      },
    ],
    headingId: 'paid-social-advertising-community-management-hero-heading',
  },
  whatWeManage: {
    eyebrow: 'WHAT WE MANAGE',
    title: 'From First Impression to Lasting',
    accentTitle: 'Engagement.',
    description:
      'We bring together paid advertising and community management to help your business reach relevant audiences, encourage conversations, and make better use of every opportunity.',
    capabilityCards: [
      {
        title: 'Paid Social Campaign Strategy',
        headline: '',
        description:
          'Plan campaigns around your objectives, audiences, budgets, messaging, and the platforms most relevant to your business.',
      },
      {
        title: 'Audience Targeting & Campaign Setup',
        headline: '',
        description:
          'Configure campaigns, audience segments, placements, and advertising workflows to reach potential customers.',
      },
      {
        title: 'Community Engagement & Response Management',
        headline: '',
        description:
          'Support agreed comment and message workflows, encourage meaningful interactions, and help maintain responsive communication with your audience.',
      },
      {
        title: 'Campaign Optimization & Reporting',
        headline: '',
        description:
          'Monitor campaign performance, review creative effectiveness, and refine targeting, budgets, and messaging using available data.',
      },
    ],
  },
  beyondTheClick: {
    eyebrow: 'BEYOND THE CLICK',
    titleBefore: 'More Than Reach. Real ',
    titleAccent: 'Opportunities.',
    description:
      'Reaching people is only the beginning. The right advertising and engagement approach helps turn attention into conversations, relationships, and potential customers.',
    image: {
      src: '/images/wow/Hero/devision/Intelligence.jpg',
      alt: 'Analytics and campaign performance workspace',
    },
    steps: [
      {
        id: '01',
        title: 'Reach Relevant Audiences',
        description: 'Focus your advertising on people more likely to be interested in your business.',
      },
      {
        id: '02',
        title: 'Encourage Meaningful Engagement',
        description: 'Create more opportunities for questions, conversations, and audience participation.',
      },
      {
        id: '03',
        title: 'Turn Interest Into Action',
        description:
          'Guide interested people toward relevant offers, inquiries, bookings, or other next steps.',
      },
      {
        id: '04',
        title: 'Improve Campaign Efficiency',
        description: 'Use performance insights to refine campaigns and reduce avoidable advertising waste.',
      },
    ],
  },
  campaignProcess: {
    eyebrow: 'OUR CAMPAIGN PROCESS',
    title: 'Plan. Launch. Optimize.',
    description:
      'A structured approach that connects advertising strategy, campaign execution, community engagement, and ongoing improvement.',
    steps: [
      {
        number: '1',
        title: 'Strategize & Prepare',
        description:
          'Understand your objectives, target audiences, budget, and existing social presence to establish a focused campaign plan.',
      },
      {
        number: '2',
        title: 'Launch & Engage',
        description:
          'Activate campaigns, monitor audience interactions, and manage agreed community engagement activities.',
      },
      {
        number: '3',
        title: 'Analyze & Improve',
        description:
          'Evaluate campaign performance and engagement insights to refine the advertising and communication approach.',
      },
    ],
    showCta: false,
  },
  ourWork: {
    eyebrow: 'OUR SOCIAL WORK',
    title: 'Campaigns Made to',
    titleAccent: 'Connect.',
    description:
      'Explore our work across different industries, combining creative messaging, audience engagement, and social experiences.',
    ctaLabel: 'VIEW MORE',
    ctaHref: '/portfolio',
    projects: [
      {
        category: 'FOOD & HOSPITALITY',
        year: '2020',
        title: 'YoDoner',
        href: '/case-study/yo-doner',
        image: '/images/wow/Hero/project/case-study/yodoner.png',
      },
      {
        category: 'CONSULTING & PROFESSIONAL SERVICES',
        year: '2025',
        title: 'CCG Breakthrough',
        href: '/case-study/ccg-breakthrough',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
    ],
  },
  cta: {
    accentText: 'Ready to reach more?',
    mainText: "Let's launch.",
    ariaLabel: 'Start a paid social advertising and community management project with WOW Social',
  },
} as const
