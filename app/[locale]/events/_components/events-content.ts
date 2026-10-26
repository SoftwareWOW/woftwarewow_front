/** Static copy for WOW Events division page. */

const HERO_IMG = '/images/wow/Hero/devision/Events.jpg'
const WORK_01 = '/images/wow/Hero/devision/Events (1).jpg'
const WORK_02 = '/images/wow/Hero/devision/Education.jpg'
const WORK_03 = '/images/wow/Hero/devision/Design 1.jpg'
const WORK_04 = '/images/wow/Hero/devision/Intelligence.jpg'
const WORK_05 = '/images/wow/Hero/devision/C-17.jpg'
const SVC_01 = '/images/wow/Hero/devision/Events.jpg'
const SVC_02 = '/images/wow/Hero/devision/Design 2.jpg'
const SVC_03 = '/images/wow/Hero/devision/Website 2.jpg'
const SVC_04 = '/images/wow/Hero/devision/Mockup 2 Dark.png'
const APPROACH_IMG = '/images/wow/Hero/devision/Events (1).jpg'

export const EVENTS_HERO = {
  badgeTitle: 'EVENTS',
  title: "We Don't Just Create Events. We Create Experiences That ",
  italicTitle: 'Matter.',
  description:
    'From corporate conferences and brand launches to networking experiences and hybrid events, WOW Events brings strategy, creativity, and execution together to create moments that connect people, inspire audiences, and leave a lasting impression.',
  primaryCta: 'Plan Your Event',
  primaryCtaHref: '/meet',
  secondaryCta: 'Explore Our Services',
  secondaryCtaHref: '/events#services',
  images: [{ src: HERO_IMG, alt: 'Modern event auditorium with stage lighting' }],
} as const

export const EVENTS_WORK = {
  eyebrow: 'OUR EVENTS',
  titleBefore: 'Every Event Has a Story ',
  titleAccent: 'Worth Telling.',
  description:
    'Every gathering has a purpose. Whether it’s bringing an industry together, introducing something new, or creating stronger relationships, we help shape experiences around the people and moments that matter.',
  ctaLabel: 'Explore Event Solutions',
  ctaHref: '/events#services',
  filters: [
    { label: 'ALL', slug: 'ALL' },
    { label: 'CONFERENCES', slug: 'CONFERENCES' },
    { label: 'LAUNCHES', slug: 'LAUNCHES' },
    { label: 'CORPORATE', slug: 'CORPORATE' },
    { label: 'NETWORKING', slug: 'NETWORKING' },
    { label: 'HYBRID', slug: 'HYBRID' },
  ],
  cards: [
    {
      id: 1,
      category: 'CONFERENCES',
      title: 'Conferences & Summits',
      description: 'Thought leadership gatherings that bring industries together around ideas that matter.',
      bullets: 'Thought leadership · Industry gatherings · Business conferences',
      href: '/meet',
      image: WORK_01,
    },
    {
      id: 2,
      category: 'LAUNCHES',
      title: 'Brand & Product Launches',
      description: 'Launch experiences designed to introduce new products and stories with impact.',
      bullets: 'Brand activations · Product reveals · Launch experiences',
      href: '/meet',
      image: WORK_02,
    },
    {
      id: 3,
      category: 'CORPORATE',
      title: 'Corporate Experiences',
      description: 'Company celebrations, awards, and internal gatherings with clear purpose and polish.',
      bullets: 'Company celebrations · Awards · Internal gatherings',
      href: '/meet',
      image: WORK_03,
    },
    {
      id: 4,
      category: 'NETWORKING',
      title: 'Networking & Community',
      description: 'Spaces and programs that help people connect, collaborate, and build relationships.',
      bullets: 'Professional networking · Community gatherings · Industry meetups',
      href: '/meet',
      image: WORK_04,
    },
    {
      id: 5,
      category: 'HYBRID',
      title: 'Hybrid & Virtual Events',
      description: 'Experiences that unite in-person and online audiences with thoughtful production.',
      bullets: 'Live streaming · Virtual audiences · Hybrid experiences',
      href: '/meet',
      image: WORK_05,
    },
  ],
} as const

export const EVENTS_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'A Great Event Takes More Than a ',
  titleAccent: 'Great Idea.',
  titleSuffix: '',
  description:
    'Behind every memorable experience are countless decisions, moving parts, and details. Without a clear plan, even an exciting event concept can become complicated, inconsistent, or difficult to execute.',
  leftContextLine: '',
  rightContextLine: '',
  withoutAiLabel: 'When Planning Is Disconnected',
  withAiLabel: 'When Everything Comes Together',
  withoutSteps: [
    'Unclear priorities',
    'Disconnected vendors',
    'Inconsistent communication',
    'Last-minute changes',
    'Limited visibility',
    'Experience that feels fragmented',
  ],
  withSteps: [
    'A clear event vision',
    'Coordinated planning',
    'Consistent creative direction',
    'Thoughtful guest experiences',
    'Organized execution',
  ],
  footerSummary: '',
  ctaLabel: "Let's Plan Your Event",
  ctaHref: '/meet',
} as const

export const EVENTS_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'From First Concept to ',
  titleAccent: 'Final Applause.',
  description:
    'Whether you’re bringing a small group together or planning a larger experience, WOW Events combines creative thinking, event planning, production coordination, and audience engagement to bring your vision to life.',
  items: [
    {
      index: '01',
      title: 'Conferences & Corporate Events',
      tagline: 'Bring People Together Around What Matters.',
      description: 'Conferences · Summits · Corporate gatherings · Awards · Business events',
      href: '/meet',
      image: SVC_01,
      button: 'Explore',
    },
    {
      index: '02',
      title: 'Brand & Product Launches',
      tagline: 'Turn Your Big Announcement Into a Memorable Moment.',
      description: 'Product launches · Brand activations · Press events · Experiential campaigns',
      href: '/meet',
      image: SVC_02,
      button: 'Explore',
    },
    {
      index: '03',
      title: 'Networking & Community Events',
      tagline: 'Create Space for Meaningful Connections.',
      description: 'Networking events · Meetups · Community experiences · Partner gatherings',
      href: '/meet',
      image: SVC_03,
      button: 'Explore',
    },
    {
      index: '04',
      title: 'Hybrid & Virtual Experiences',
      tagline: 'Bring Your Audience Together, Wherever They Are.',
      description: 'Hybrid events · Virtual conferences · Live streaming · Online audience experiences',
      href: '/meet',
      image: SVC_04,
      button: 'Explore',
    },
  ],
} as const

export const EVENTS_APPROACH = {
  eyebrow: 'OUR APPROACH',
  titleBefore: 'Every Great Experience Starts With a ',
  titleAccent: 'Purpose.',
  description:
    'A successful event is built through connected elements. We help align your vision, creative direction, logistics, and guest experience so every detail supports the outcome you want.',
  ctaLabel: 'Plan Your Event',
  ctaHref: '/meet',
  steps: [
    {
      id: '01',
      title: 'Imagine',
      description: 'Define the purpose, audience, objectives, and creative vision behind the event.',
    },
    {
      id: '02',
      title: 'Design',
      description: 'Shape the visual identity, atmosphere, content, and guest experience.',
    },
    {
      id: '03',
      title: 'Produce',
      description: 'Coordinate the production elements, logistics, suppliers, and delivery plan.',
    },
    {
      id: '04',
      title: 'Connect',
      description: 'Create opportunities for attendees to participate, engage, and build relationships.',
    },
    {
      id: '05',
      title: 'Amplify',
      description: 'Extend the value of the event through content, follow-up, and post-event review.',
    },
  ],
  image: { src: APPROACH_IMG, alt: 'Speaker on stage at a corporate event' },
} as const

export const EVENTS_PROCESS = {
  eyebrow: 'OUR PROCESS',
  titleBefore: 'From Planning to ',
  titleAccent: 'Showtime.',
  description:
    'We take a structured, collaborative approach to event delivery so your goals, creative vision, logistics, and guest experience stay aligned throughout the project.',
  ctaLabel: 'Start Planning Your Event',
  ctaHref: '/meet',
  steps: [
    {
      title: 'Discover',
      description: 'Understand the purpose, audience, scale, budget, location, and desired outcomes of your event.',
    },
    {
      title: 'Plan',
      description: 'Develop the event concept, program, timeline, venue requirements, and delivery plan.',
    },
    {
      title: 'Design',
      description: 'Create the event identity, visual experience, communications, and production direction.',
    },
    {
      title: 'Coordinate',
      description: 'Align vendors, technical requirements, registration, logistics, and event operations.',
    },
    {
      title: 'Deliver',
      description: 'Manage the agreed event-day responsibilities, guest experience, and production activities.',
    },
    {
      title: 'Review',
      description: 'Evaluate feedback, capture highlights, and identify follow-up opportunities.',
    },
  ],
} as const

export const EVENTS_PACKAGES = {
  eyebrow: 'OUR PACKAGES',
  titleBefore: 'The Right Support for ',
  titleAccent: 'Every Kind of Event.',
  description:
    'Whether you need help shaping an event concept, coordinating production, or managing a complete experience, we can tailor our involvement to your goals, requirements, and budget.',
  plans: [
    {
      id: 1,
      badge: 'FOUNDATION',
      title: 'Event Essentials',
      description: 'For businesses needing a clear event plan and focused coordination support.',
      features: [
        'Event discovery',
        'Concept development',
        'Event timeline',
        'Planning guidance',
        'Basic coordination',
      ],
      ctaLabel: 'Get Started',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'PRODUCTION',
      title: 'Event Experience',
      description: 'For businesses creating a coordinated, branded event with multiple moving parts.',
      features: [
        'Event strategy and planning',
        'Creative direction',
        'Vendor coordination',
        'Guest experience planning',
        'Event-day support',
      ],
      ctaLabel: 'Plan My Event',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'FULL SERVICE',
      title: 'Signature Events',
      description: 'For organizations planning larger, more complex, or highly customized experiences.',
      features: [
        'Full event planning',
        'Experience design',
        'Production coordination',
        'Marketing integration',
        'Post-event support',
      ],
      ctaLabel: 'Request a Proposal',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleBefore: 'Planning something ',
    titleAccent: 'different?',
    description:
      'From intimate business gatherings to complex hybrid experiences, we’ll help define the right scope around your vision.',
    ctaLabel: 'Request an Event Consultation',
    ctaHref: '/meet',
  },
} as const

export const EVENTS_TOOLS = {
  bodyParagraph:
    'From registrations and ticketing to virtual participation and attendee communication, the right tools can help make events easier to organize and more accessible to audiences.',
} as const

export const EVENTS_CTA = {
  accentText: 'Have an idea?',
  mainText: "Let's get it launched.",
  ariaLabel: 'Contact WOW Events at WOW Superagency',
} as const

export const EVENTS_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Everything You Need to Know About Planning With ',
  titleAccent: 'WOW Events.',
  description:
    'From the first idea to event-day coordination, here are answers to common questions about working with us.',
  viewAllHref: '/faq',
} as const

export const EVENTS_FAQS = [
  {
    id: 1,
    question: 'What types of events does WOW Events organize?',
    answer:
      'WOW Events planned services include corporate conferences, summits, business gatherings, brand and product launches, networking events, and hybrid or virtual experiences.',
  },
  {
    id: 2,
    question: 'Can you plan an event from start to finish?',
    answer:
      'Yes. We can support the full journey—from concept and creative direction through coordination, production, and event-day delivery—based on your agreed scope.',
  },
  {
    id: 3,
    question: 'Can you help with only part of an event?',
    answer:
      'Absolutely. Many clients engage us for specific phases such as planning, creative direction, vendor coordination, or event-day support.',
  },
  {
    id: 4,
    question: 'Do you handle venues and suppliers?',
    answer:
      'We help coordinate venue requirements, vendors, and production partners as part of planning and delivery, aligned with your goals and budget.',
  },
  {
    id: 5,
    question: 'Can you promote our event?',
    answer:
      'Marketing integration can be included in broader engagements—such as communications, registration flows, and post-event content—when it fits your project scope.',
  },
] as const
