export const SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA = {
  title: 'Social & Influencer Content Creation | WOW Social',
  description:
    'From scroll-stopping visuals and short-form videos to authentic creator collaborations, we produce social content that captures attention and connects with your audience.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SOCIAL & INFLUENCER CONTENT CREATION',
    title: 'Content That Stops the ',
    italicTitle: 'Scroll.',
    description:
      'From scroll-stopping visuals and short-form videos to authentic creator collaborations, we produce social content that captures attention, tells your story, and connects with your audience.',
    primaryCta: { label: 'START YOUR CONTENT PROJECT', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/DSCF0537.jpg',
        alt: 'Social and influencer content creation',
      },
    ],
    headingId: 'social-influencer-content-creation-hero-heading',
    enableVideoModal: true,
  },
  whatWeCreate: {
    eyebrow: 'WHAT WE CREATE',
    title: 'Every Format. One Stronger',
    accentTitle: 'Story.',
    description:
      'Different platforms need different creative approaches. We produce content that fits your brand, your audience, and the way people engage online.',
    items: [
      {
        title: 'Social Graphics & Carousels',
        description:
          'Branded posts, visual storytelling, educational carousels, and campaign graphics designed for social platforms.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Events.jpg',
          alt: 'Social graphics and carousel content on stage',
        },
      },
      {
        title: 'Reels & Short-Form Videos',
        description:
          'Engaging videos, motion-led storytelling, and platform-ready clips that bring your ideas to life.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Design 2.jpg',
          alt: 'Reels and short-form video production',
        },
      },
      {
        title: 'Influencer & Creator Collaborations',
        description:
          'Creator partnerships, collaborative content concepts, and UGC-style creative aligned with your brand.',
        href: '/portfolio',
        image: {
          src: '/images/wow/LandingPageNaveBare/multiracial-business-team-gathering-hands-in-unity-2026-01-09-11-41-19-utc%202.svg',
          alt: 'Influencer and creator collaboration',
        },
      },
      {
        title: 'Campaign Content & Creative Assets',
        description:
          'Coordinated content collections, launch creatives, and adaptable assets for multiple social channels.',
        href: '/portfolio',
        image: {
          src: '/images/wow/Hero/devision/Events (1).jpg',
          alt: 'Campaign content and creative assets',
        },
      },
    ],
  },
  contentWithPurpose: {
    eyebrow: 'CONTENT WITH PURPOSE',
    titleBefore: 'Made to Be Seen. Worth ',
    titleAccent: 'Remembering.',
    description:
      'Great social content blends creative storytelling with a clear understanding of what audiences want to see, share, and engage with.',
    image: {
      src: '/images/wow/Hero/devision/Intelligence.jpg',
      alt: 'Creative workspace for social content production',
    },
    steps: [
      {
        id: '01',
        title: 'Capture Attention',
        description: 'Create distinctive content that stands out in busy social feeds.',
      },
      {
        id: '02',
        title: 'Build Connection',
        description: 'Share stories and experiences that feel relevant and authentic to your audience.',
      },
      {
        id: '03',
        title: 'Strengthen Recognition',
        description: 'Maintain a recognizable creative identity across different content formats.',
      },
      {
        id: '04',
        title: 'Encourage Engagement',
        description: 'Give audiences reasons to react, share, save, and start conversations.',
      },
    ],
  },
  creativeProcess: {
    eyebrow: 'OUR CREATIVE PROCESS',
    title: 'From Idea to Feed.',
    description:
      'A collaborative creative process that turns your brand’s ideas into social-ready content.',
    steps: [
      {
        number: '1',
        title: 'Discover & Conceptualize',
        description:
          'We understand your brand, audience, platforms, and content goals before shaping the creative direction.',
      },
      {
        number: '2',
        title: 'Create & Collaborate',
        description:
          'We produce graphics, videos, and agreed creator-led content while coordinating feedback and approvals.',
      },
      {
        number: '3',
        title: 'Refine & Deliver',
        description:
          'We finalize the assets and prepare them for their intended platforms, formats, and publishing requirements.',
      },
    ],
    showCta: false,
  },
  designToolkit: {
    eyebrow: 'OUR DESIGN TOOLKIT',
    headline: 'Precision Behind Every Pixel.',
    description:
      'We use modern design and collaboration tools to create, prototype, and prepare digital experiences for development.',
    tools: [
      { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
      { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
      { name: 'After Effects', icon: 'logos:adobe-after-effects' },
      { name: 'Premiere Pro', icon: 'logos:adobe-premiere' },
      { name: 'DaVinci Resolve', icon: 'simple-icons:davinciresolve' },
    ],
  },
  ourWork: {
    eyebrow: 'OUR SOCIAL WORK',
    titleBefore: 'Content Made for Real ',
    titleAccent: 'Brands.',
    description:
      'Explore how different brands bring their stories to life through social content, creative direction, and digital storytelling.',
    viewMoreHref: '/portfolio',
    viewMoreLabel: 'VIEW MORE',
    projects: [
      {
        category: 'ENGAGEMENT',
        title: 'CCG Breakthrough',
        href: '/case-study/ccg-breakthrough',
        image: '/images/wow/Hero/project/case-study/ccg.png',
        showProjectButton: true,
      },
      {
        category: 'EVENT',
        title: 'YoDoner',
        href: '/case-study/yo-doner',
        image: '/images/wow/Hero/project/case-study/yodoner.png',
        showProjectButton: false,
      },
      {
        category: 'VIDEO MARKETING',
        title: 'Davinci Lounge',
        href: '/case-study/davinci-lounge',
        image: '/images/wow/Hero/project/case-study/davinci.png',
        showProjectButton: false,
      },
    ],
  },
  cta: {
    accentText: 'Got an idea?',
    mainText: "Let's create.",
    ariaLabel: 'Start a social and influencer content creation project with WOW Social',
  },
} as const
