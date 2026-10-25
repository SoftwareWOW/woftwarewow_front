/** Static copy for WOW Impact division page. */

const HERO_IMG = '/images/wow/Hero/devision/Education.jpg'
const CARD_FOUNDER = '/images/wow/Hero/Human/ali.png'
const CARD_EXEC = '/images/wow/Hero/devision/Design 1.jpg'
const CARD_EXPERT = '/images/wow/Hero/devision/Education.jpg'
const CARD_SPEAKER = '/images/wow/Hero/devision/DSCF0537.jpg'
const CHALLENGE_BEFORE = '/images/wow/Hero/devision/Website 1.jpg'
const CHALLENGE_AFTER = '/images/wow/Hero/devision/Design 2.jpg'
const SVC_01 = '/images/wow/Hero/devision/Website 2.jpg'
const SVC_02 = '/images/wow/Hero/devision/Intelligence.jpg'
const SVC_03 = '/images/wow/Hero/devision/Mockup 2 Dark.png'
const SVC_04 = '/images/wow/Hero/devision/Events.jpg'
const APPROACH_IMG = '/images/wow/Hero/devision/C-17.jpg'

export const IMPACT_HERO = {
  badgeTitle: 'PERSONAL BRANDING',
  title: 'Your Story. Your Voice. Your Impact.',
  description:
    'You have the experience, ideas, and ambition. Let’s make sure the world sees them. From personal branding and thought leadership to reputation and media presence, WOW Impact helps you build a professional identity that reflects who you are and where you want to go.',
  primaryCta: 'Build My Personal Brand',
  primaryCtaHref: '/meet',
  secondaryCta: 'Explore Our Services',
  secondaryCtaHref: '/impact#services',
  images: [{ src: HERO_IMG, alt: 'Personal branding magazine cover ASCEND' }],
} as const

export const IMPACT_WORK = {
  eyebrow: 'OUR WORK',
  titleBefore: 'Every Person Has a Story ',
  titleAccent: 'Worth Telling.',
  description:
    'A strong personal brand doesn’t make everyone look the same. It brings forward what makes each person distinctive—their perspective, expertise, values, and professional ambitions.',
  ctaLabel: 'Explore Personal Branding Solutions',
  ctaHref: '/meet',
  filters: [
    { label: 'ALL', slug: 'ALL' },
    { label: 'FOUNDERS', slug: 'FOUNDERS' },
    { label: 'EXECUTIVES', slug: 'EXECUTIVES' },
    { label: 'EXPERTS', slug: 'EXPERTS' },
    { label: 'SPEAKERS', slug: 'SPEAKERS' },
  ],
  cards: [
    {
      id: 1,
      category: 'FOUNDERS',
      title: 'The Founder',
      description: 'An identity built around vision, entrepreneurship, and leadership.',
      bullets: 'Personal positioning · Founder story · Professional content',
      href: '/meet',
      image: CARD_FOUNDER,
    },
    {
      id: 2,
      category: 'EXECUTIVES',
      title: 'The Executive',
      description: 'A professional presence that communicates leadership, credibility, and perspective.',
      bullets: 'Executive profile · Leadership narrative · Reputation',
      href: '/meet',
      image: CARD_EXEC,
    },
    {
      id: 3,
      category: 'EXPERTS',
      title: 'The Expert',
      description: 'A recognizable voice built around specialist knowledge and useful insights.',
      bullets: 'Thought leadership · Content strategy · Expert positioning',
      href: '/meet',
      image: CARD_EXPERT,
    },
    {
      id: 4,
      category: 'SPEAKERS',
      title: 'The Speaker',
      description: 'A compelling public-facing identity for speaking, interviews, and professional visibility.',
      bullets: 'Speaker profile · Media kit · Presentation identity',
      href: '/meet',
      image: CARD_SPEAKER,
    },
  ],
} as const

export const IMPACT_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'Being Great at What You Do Isn’t Always Enough to ',
  titleAccent: 'Be Recognized.',
  titleAfter: '',
  description:
    'You may have valuable expertise, a compelling story, and years of experience. But without a clear personal brand, the people who could benefit from your knowledge may never discover it.',
  before: {
    label: 'When Your Expertise Stays Hidden',
    caption:
      'An unclear professional identity, inconsistent messaging, limited visibility, and missed opportunities to share your perspective.',
    image: CHALLENGE_BEFORE,
    alt: 'Professional overwhelmed by disorganized workspace',
  },
  after: {
    label: 'When Your Personal Brand Has Direction',
    caption:
      'A distinctive professional story, consistent communication, stronger visibility, and a clearer way for people to understand your value.',
    image: CHALLENGE_AFTER,
    alt: 'Professional with clear personal brand at organized workspace',
  },
  ctaLabel: 'Define My Personal Brand',
  ctaHref: '/meet',
} as const

export const IMPACT_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'Everything You Need to Build a Powerful ',
  titleAccent: 'Professional Presence.',
  description:
    'From defining who you are to communicating your expertise and expanding your visibility, WOW Impact brings personal brand strategy, storytelling, content, and professional presence together.',
  items: [
    {
      index: '01',
      title: 'Personal Branding',
      tagline: 'Build a Brand That’s Unmistakably You.',
      description:
        'Personal brand strategy · Positioning · Professional biography · Visual identity · Profile development',
      href: '/meet',
      image: SVC_01,
      button: 'Explore',
    },
    {
      index: '02',
      title: 'Thought Leadership',
      tagline: 'Turn Your Expertise Into a Recognizable Voice.',
      description:
        'Thought leadership strategy · Editorial planning · Articles · Professional content · Executive communications',
      href: '/meet',
      image: SVC_02,
      button: 'Explore',
    },
    {
      index: '03',
      title: 'Reputation & Visibility',
      tagline: 'Shape How You’re Seen and Remembered.',
      description:
        'Reputation strategy · Online presence review · Profile optimization · Professional visibility · Communications guidance',
      href: '/meet',
      image: SVC_03,
      button: 'Explore',
    },
    {
      index: '04',
      title: 'Speaking & Media Presence',
      tagline: 'Make Your Voice Count Beyond the Screen.',
      description:
        'Speaker positioning · Media kits · Interview preparation · Speaking content · Presentation coaching',
      href: '/meet',
      image: SVC_04,
      button: 'Explore',
    },
  ],
} as const

export const IMPACT_APPROACH = {
  eyebrow: 'OUR APPROACH',
  titleBefore: 'Influence Begins With ',
  titleAccent: 'Clarity.',
  description:
    'A meaningful personal brand is built through connected elements. We help align your identity, message, visibility, and credibility so your professional presence reflects the value you bring.',
  ctaLabel: 'Build My Personal Brand',
  ctaHref: '/meet',
  steps: [
    {
      id: '01',
      title: 'Identity',
      description: 'Define your values, strengths, expertise, audience, and positioning',
    },
    {
      id: '02',
      title: 'Voice',
      description: 'Develop the message, perspective, and communication style that sound like you',
    },
    {
      id: '03',
      title: 'Visibility',
      description: 'Build a consistent presence across relevant professional channels',
    },
    {
      id: '04',
      title: 'Credibility',
      description: 'Demonstrate expertise through useful content, experience, and authentic evidence',
    },
    {
      id: '05',
      title: 'Opportunity',
      description:
        'Create clearer pathways to conversations, collaborations, speaking, and business opportunities',
    },
  ],
  image: { src: APPROACH_IMG, alt: 'Magazine on chair representing professional presence' },
} as const

export const IMPACT_PROCESS = {
  eyebrow: 'OUR PROCESS',
  titleBefore: 'Your Story, Shaped With ',
  titleAccent: 'Purpose.',
  ctaLabel: 'Start My Personal Brand Journey',
  ctaHref: '/meet',
  steps: [
    {
      number: '1',
      title: 'Discover',
      description:
        'Explore your background, experience, strengths, goals, audience, and professional aspirations.',
    },
    {
      number: '2',
      title: 'Position',
      description: 'Define your personal brand direction, differentiators, core messages, and areas of expertise.',
    },
    {
      number: '3',
      title: 'Develop',
      description: 'Create your brand narrative, visual assets, profiles, and agreed communication materials.',
    },
    {
      number: '4',
      title: 'Activate',
      description:
        'Apply your personal brand across selected platforms, content, media, or speaking opportunities.',
    },
    {
      number: '5',
      title: 'Evolve',
      description:
        'Review your professional presence, refine messaging, and adapt the strategy as your goals develop.',
    },
  ],
} as const

export const IMPACT_PACKAGES = {
  eyebrow: 'OUR PACKAGES',
  titleBefore: 'The Right Support for Your ',
  titleAccent: 'Next Chapter.',
  description:
    'Whether you’re defining your professional identity, becoming more visible in your industry, or developing a long-term thought leadership presence, we can tailor an engagement around your ambitions.',
  plans: [
    {
      id: 1,
      badge: 'FOUNDATION',
      title: 'Personal Brand Essentials',
      description: 'For professionals who want a clear and consistent personal brand foundation.',
      features: [
        'Personal brand discovery',
        'Professional positioning',
        'Personal brand narrative',
        'Biography development',
        'Profile recommendations',
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'GROWTH',
      title: 'Authority Builder',
      description: 'For founders, executives, and experts ready to develop a more visible professional voice.',
      features: [
        'Expanded brand strategy',
        'Profile optimization',
        'Thought leadership planning',
        'Content direction',
        'Professional visibility support',
      ],
      ctaLabel: 'Build My Authority',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'PARTNERSHIP',
      title: 'Executive Influence',
      description: 'For leaders seeking an ongoing, coordinated personal brand and communications partnership.',
      features: [
        'Personal brand direction',
        'Executive communications',
        'Thought leadership content',
        'Media and speaker positioning',
        'Ongoing strategic support',
      ],
      ctaLabel: 'Request a Quote',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleAccent: 'Your story doesn’t fit into a standard package?',
    description:
      'Tell us about your goals, audience, and professional ambitions. We’ll help you shape a personal brand engagement that fits.',
    ctaLabel: 'Request a Personal Brand Consultation',
    ctaHref: '/meet',
  },
} as const

export const IMPACT_CHANNELS = {
  bodyParagraph:
    'The right professional presence isn’t about being everywhere. It’s about choosing the channels and formats where your ideas can reach relevant audiences and support your goals.',
} as const

export const IMPACT_CTA = {
  accentText: 'Your Story Deserves',
  mainText: 'to Be Heard.',
  ariaLabel: 'Contact WOW Impact at WOW Superagency',
} as const

export const IMPACT_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Questions About Building Your ',
  titleAccent: 'Personal Brand?',
  description:
    'Whether you’re starting from scratch or refining an established professional presence, here’s what to know before working with WOW Impact.',
  viewAllHref: '/faq',
} as const

export const IMPACT_FAQS = [
  {
    id: 1,
    question: 'What is personal branding?',
    answer:
      'Personal branding is the intentional presentation of your professional identity—how you communicate your expertise, values, and perspective so the right audiences understand your value.',
  },
  {
    id: 2,
    question: 'Who is WOW Impact for?',
    answer:
      'WOW Impact supports founders, executives, experts, and speakers who want a clearer, more visible professional presence aligned with their goals.',
  },
  {
    id: 3,
    question: 'Do I need a personal brand if I already have a business brand?',
    answer:
      'Business and personal brands can work together. A personal brand helps people connect with the human perspective behind your organization, especially for leadership, expertise, and trust.',
  },
  {
    id: 4,
    question: 'Can you help with LinkedIn and other professional profiles?',
    answer:
      'Yes. Profile optimization, biography development, and platform-specific guidance can be included based on your agreed scope.',
  },
  {
    id: 5,
    question: 'Do you create thought leadership content?',
    answer:
      'Thought leadership services can include editorial planning, article development, professional posts, messaging, and content guidance based on your expertise.',
  },
  {
    id: 6,
    question: 'Can you help me prepare for speaking engagements or interviews?',
    answer:
      'Speaking and media support can include positioning, media kits, interview preparation, and presentation coaching aligned with your personal brand.',
  },
] as const

export const IMPACT_FAQ_DEFAULT_OPEN_ID = 5
