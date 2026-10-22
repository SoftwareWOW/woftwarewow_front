/** Static copy for WOW Social division page. */

export const SOCIAL_PORTFOLIO = {
  eyebrow: 'SOCIAL MEDIA',
  titleBefore: 'Content Worth ',
  titleAccent: 'Stopping the Scroll For.',
  description:
    'Every brand has a story worth sharing. We bring those stories to life through creative social content, engaging campaigns, and platform-ready experiences designed to capture attention and encourage interaction.',
  ctaLabel: 'Explore Our Creative Work',
  ctaHref: '/portfolio/recent',
  filters: [
    { label: 'ALL', slug: 'ALL' },
    { label: 'SOCIAL POSTS', slug: 'SOCIAL_POSTS' },
    { label: 'SHORT FORM VIDEOS', slug: 'SHORT_FORM_VIDEOS' },
    { label: 'CAMPAIGNS', slug: 'CAMPAIGNS' },
    { label: 'CREATOR CONTENT', slug: 'CREATOR_CONTENT' },
  ],
  projects: [
    {
      id: 1,
      title: 'CCG Breakthrough',
      industryLabel: 'CONSULTING & PROFESSIONAL SERVICES',
      year: '2025',
      category: 'CAMPAIGNS',
      href: '/case-study/ccg-breakthrough',
      image: '/images/wow/Hero/project/case-study/ccg.png',
      alt: 'CCG Breakthrough social campaign showcase',
    },
    {
      id: 2,
      title: 'YoDoner',
      industryLabel: 'FAST FOOD',
      year: '2024',
      category: 'SOCIAL_POSTS',
      href: '/case-study/yo-doner',
      image: '/images/wow/Hero/project/case-study/yodoner.png',
      alt: 'YoDoner social content grid',
    },
    {
      id: 3,
      title: 'Inity',
      industryLabel: 'COACHING & PERFORMANCE',
      year: '2025',
      category: 'CREATOR_CONTENT',
      href: '/case-study/inity-inc',
      image: '/images/wow/Hero/project/case-study/InityInc.png',
      alt: 'Inity social coaching content',
    },
    {
      id: 4,
      title: 'Junaid The Tailor',
      industryLabel: 'FASHION & APPAREL',
      year: '2026',
      category: 'SHORT_FORM_VIDEOS',
      href: '/portfolio',
      image: '/images/wow/nav/cards/Branding%20%26%20Creative%201.png',
      alt: 'Junaid The Tailor social presence',
    },
  ],
} as const

export const SOCIAL_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'Posting More ',
  titleAccent: 'Isn’t the Same',
  titleAfter: ' as Growing More.',
  description:
    'A busy social feed doesn’t automatically create an engaged audience. Without a clear strategy, consistent creative direction, and meaningful engagement, even great content can get lost in the scroll.',
  before: {
    label: 'Without a Strategy',
    caption:
      'Random posts, inconsistent branding, unclear goals, limited engagement, and disconnected results.',
    image: '/images/wow/Hero/devision/Website 1.jpg',
    alt: 'Disorganized social feed examples without strategy',
  },
  after: {
    labelBefore: 'With',
    labelAfter: 'Social',
    caption:
      'Purposeful content, consistent storytelling, audience engagement, campaign planning, and ongoing performance optimization.',
    image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
    alt: 'Cohesive WOW Social content grid',
  },
  ctaLabel: 'Build My Social Strategy',
  ctaHref: '/meet',
} as const

export const SOCIAL_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'Everything You Need to Make ',
  titleAccent: 'Social Work.',
  description:
    'From the first content idea to the conversations that follow, WOW Social brings strategy, creativity, advertising, and community management together to help your business build a stronger social presence.',
  ctaLabel: 'Explore All Social Services',
  ctaHref: '/services',
  items: [
    {
      id: 1,
      title: 'Social Media Strategy & Management',
      description:
        'Channel strategy • Content calendars • Publishing • Account management • Reporting',
      image: '/images/wow/Hero/devision/Design 1.jpg',
      alt: 'Social media analytics on tablet',
    },
    {
      id: 2,
      title: 'Social & Influencer Content Creation',
      description:
        'Reels • Short-form video • Social graphics • Creator campaigns • UGC-style content',
      image: '/images/wow/Hero/devision/Design 2.jpg',
      alt: 'Influencer content creation',
    },
    {
      id: 3,
      title: 'Paid Social Advertising & Community Management',
      description:
        'Campaign setup • Audience targeting • Ad creative • Community engagement • Performance optimization',
      image: '/images/wow/Hero/devision/Intelligence.jpg',
      alt: 'Paid social advertising creative',
    },
  ],
} as const

export const SOCIAL_APPROACH = {
  eyebrow: 'OUR APPROACH',
  titleBefore: 'Social Growth Is More Than ',
  titleAccent: 'a Great Post.',
  description:
    'The strongest social presence connects the right message, the right audience, consistent engagement, and ongoing learning. We bring those pieces together into a connected approach.',
  ctaLabel: 'Start a Conversation',
  ctaHref: '/meet',
  steps: [
    {
      id: 1,
      title: 'Strategy',
      description: 'Clear goals, audience understanding, content pillars, and channel direction',
    },
    {
      id: 2,
      title: 'Create',
      description: 'Platform-ready content, storytelling, and compelling campaign creative',
    },
    {
      id: 3,
      title: 'Publish',
      description: 'Consistent distribution and scheduling around an intentional content calendar',
    },
    {
      id: 4,
      title: 'Engage',
      description: 'Conversations, community interaction, and stronger audience relationships',
    },
    {
      id: 5,
      title: 'Optimize',
      description: 'Performance insights that inform future content and campaign decisions',
    },
  ],
  footerLine:
    'Every post has a purpose. Every interaction is an opportunity to build a stronger connection.',
} as const

export const SOCIAL_PROCESS = {
  eyebrow: 'OUR PROCESS',
  title: 'From First Idea to Lasting Engagement',
  ctaLabel: 'Start My Social Journey',
  ctaHref: '/meet',
  steps: [
    {
      number: '1',
      title: 'Discover',
      description: 'Understand your brand, audience, competitors, goals, and existing social presence.',
    },
    {
      number: '2',
      title: 'Plan',
      description: 'Define the platform strategy, content pillars, campaign priorities, and publishing schedule.',
    },
    {
      number: '3',
      title: 'Create',
      description: 'Develop content, visuals, copy, videos, and campaign assets for review.',
    },
    {
      number: '4',
      title: 'Launch',
      description: 'Publish approved content, activate campaigns, and manage agreed engagement activities.',
    },
    {
      number: '5',
      title: 'Improve',
      description: 'Review content performance, audience response, and campaign outcomes to refine the approach.',
    },
  ],
} as const

export const SOCIAL_CLIENT_RESULTS = {
  eyebrow: 'CLIENT RESULTS',
  titleBefore: 'Proven success',
  titleAccent: 'satisfied clients',
  description:
    'We believe social media should be measured by more than how good the feed looks. The right metrics help connect content performance, audience engagement, and business objectives.',
  stats: [
    { value: 100, suffix: '+', label: 'Reach' },
    { value: 5, suffix: '+', label: 'Engagement' },
    { value: 4.9, suffix: '', label: 'Conversions', isDecimal: true },
  ],
} as const

export const SOCIAL_FLEXIBLE_START = {
  eyebrow: 'OUR PACKAGES',
  titleBefore: 'Social Support That Fits Your ',
  titleAccent: 'Ambitions.',
  description:
    'Whether you’re establishing your presence, building momentum, or scaling campaigns across platforms, we can shape a social media engagement around your business priorities.',
  plans: [
    {
      id: 1,
      badge: 'FOUNDATION',
      title: 'Social Essentials',
      description: 'For businesses that need a more consistent and professional social presence.',
      features: [
        'Social strategy foundation',
        'Content calendar',
        'Branded social graphics',
        'Publishing support',
        'Basic performance reporting',
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'GROWTH',
      title: 'Social Growth',
      description: 'For businesses ready to create more engaging content and grow their community.',
      features: [
        'Multi-platform strategy',
        'Expanded content production',
        'Reels and short-form creative',
        'Community engagement support',
        'Monthly optimization',
      ],
      ctaLabel: 'Build My Brand',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'PARTNERSHIP',
      title: 'Social Performance',
      description: 'For businesses looking for integrated organic, paid, and campaign support.',
      features: [
        'Integrated social strategy',
        'Paid social campaigns',
        'Creative testing',
        'Creator collaboration support',
        'Performance reviews',
      ],
      ctaLabel: 'Talk to Our Team',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleAccent: 'Need a different combination of services?',
    description:
      'We can tailor content, management, advertising, and creator support around your actual priorities.',
    ctaLabel: 'Request a Creative Consultation',
    ctaHref: '/meet',
  },
} as const

export const SOCIAL_CREATIVE_TOOLS = {
  bodyParagraph:
    'Different platforms serve different audiences and business goals. We help select the right channels, creative formats, and management tools for your social strategy.',
} as const

export const SOCIAL_CTA = {
  accentText: 'Ready to grow',
  mainText: 'socially?',
  ariaLabel: 'Contact WOW Social at WOW Superagency',
} as const

export const SOCIAL_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Everything You Want to Know About ',
  titleAccent: 'WOW Social.',
  description:
    'From content creation and platform management to advertising and reporting, here’s what to expect when working with us.',
  viewAllHref: '/faq',
} as const

export const SOCIAL_FAQS = [
  {
    id: 1,
    question: 'Which social media platforms do you manage?',
    answer:
      'We support the platforms that fit your audience and goals—commonly Instagram, Facebook, LinkedIn, TikTok, YouTube, Pinterest, and X—with strategy tailored to each channel.',
  },
  {
    id: 2,
    question: 'Can you create content for our business?',
    answer:
      'Yes. We produce social graphics, short-form video, campaign creative, and creator-style content aligned with your brand voice and platform requirements.',
  },
  {
    id: 3,
    question: 'Do you offer social media management?',
    answer:
      'Yes. Management includes content calendars, publishing, community engagement, and reporting based on the scope we agree with your team.',
  },
  {
    id: 4,
    question: 'Can you run paid social advertising campaigns?',
    answer:
      'Yes. We plan, build, and optimize paid campaigns across major platforms, including audience targeting, creative testing, and performance reviews.',
  },
  {
    id: 5,
    question: 'How often will you post on our accounts?',
    answer:
      'Posting frequency depends on the selected service package, platforms, content requirements, and agreed strategy.',
  },
  {
    id: 6,
    question: 'Do you work with influencers and content creators?',
    answer:
      'Yes. We can support creator collaborations, UGC-style campaigns, and influencer partnerships as part of a broader social strategy.',
  },
] as const

export const SOCIAL_FAQ_DEFAULT_OPEN_ID = 5
