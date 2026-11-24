export const THOUGHT_LEADERSHIP_PAGE_METADATA = {
  title: 'Thought Leadership | WOW Impact',
  description:
    'Turn your knowledge and perspective into a recognizable professional voice. We help you develop meaningful content, share valuable insights, and establish your presence in conversations that matter.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'THOUGHT LEADERSHIP',
    title: 'Your Expertise Deserves an ',
    italicTitle: 'Audience.',
    description:
      'Turn your knowledge and perspective into a recognizable professional voice. We help you develop meaningful content, share valuable insights, and establish your presence in conversations that matter.',
    primaryCta: { label: 'Build My Authority', href: '/meet' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/Education.jpg',
        alt: 'Team collaborating on thought leadership content',
        width: 480,
        height: 560,
      },
      {
        src: '/images/wow/Hero/devision/Intelligence.jpg',
        alt: 'Professional presenting insights to an audience',
        width: 480,
        height: 640,
      },
    ],
  },
  whatWeCreate: {
    eyebrow: 'WHAT WE CREATE',
    title: 'Turn Your Knowledge Into Influence.',
    body: '',
    stages: [
      {
        id: '01',
        title: 'Leadership Strategy',
        description: 'Define your topics, audience, and unique perspective.',
      },
      {
        id: '02',
        title: 'Editorial Planning',
        description: 'Build a focused calendar of relevant ideas and themes.',
      },
      {
        id: '03',
        title: 'Articles & Insights',
        description: 'Turn your knowledge into valuable written content.',
      },
      {
        id: '04',
        title: 'Professional Content',
        description: 'Create insightful posts and executive communications.',
      },
      {
        id: '05',
        title: 'Voice & Messaging',
        description: 'Keep your ideas authentic, clear, and consistent.',
      },
    ],
  },
  valueOfVoice: {
    eyebrow: 'THE VALUE OF YOUR VOICE',
    title: 'Be Heard. Be Remembered. Be Respected.',
    description:
      'When your ideas reach the right people consistently, your expertise becomes easier to discover, understand, and trust.',
    pillars: [
      {
        title: 'Build Authority',
        description: 'Demonstrate knowledge through useful insights.',
      },
      {
        title: 'Earn Trust',
        description: 'Give audiences reasons to value your perspective.',
      },
      {
        title: 'Increase Visibility',
        description: 'Reach more relevant professional audiences.',
      },
      {
        title: 'Create Opportunities',
        description: 'Encourage conversations and collaborations.',
      },
    ],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    title: 'From Expertise to Expression.',
    description:
      'A collaborative approach that turns your professional knowledge into content worth sharing.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understand your expertise, audience, and goals.',
      },
      {
        number: '02',
        title: 'Plan',
        description: 'Define topics, content direction, and schedule.',
      },
      {
        number: '03',
        title: 'Create',
        description: 'Develop and refine content around your ideas.',
      },
      {
        number: '04',
        title: 'Amplify',
        description: 'Publish through agreed channels and refine direction.',
      },
    ],
  },
  ideasInAction: {
    eyebrow: 'IDEAS IN ACTION',
    titleLine1: 'Expertise',
    titleLine2: 'Worth',
    titleAccent: 'Sharing.',
    description:
      'Discover how professional knowledge can become valuable content that informs audiences and strengthens authority.',
    ctaLabel: 'View More',
    ctaHref: '/portfolio',
    projects: [
      {
        category: 'SHARING BUSINESS INSIGHTS AND ENTREPRENEURIAL EXPERIENCES.',
        year: '2020',
        title: 'Founder Perspectives',
        href: '/portfolio',
        image: '/images/wow/Hero/project/case-study/ccg.png',
      },
      {
        category: 'COMMUNICATING LEADERSHIP IDEAS AND INDUSTRY PERSPECTIVES.',
        year: '2025',
        title: 'Executive Insights',
        href: '/portfolio',
        image: '/images/wow/Hero/project/case-study/InityInc.png',
      },
    ],
  },
  cta: {
    accentText: 'Have a perspective?',
    mainText: "Let's share it.",
    ariaLabel: 'Start your thought leadership project with WOW Impact',
  },
} as const
