export const AI_ASSISTANTS_CHATBOTS_PAGE_METADATA = {
  title: 'AI Assistants & Chatbots | WOW Intelligence',
  description:
    'Give customers and teams the answers they need with intelligent AI assistants that understand questions, provide helpful responses, and automate everyday conversations.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'AI ASSISTANTS & CHATBOTS',
    title: 'Every Question Deserves a ',
    italicTitle: 'Smart Answer.',
    description:
      'Give customers and teams the answers they need with intelligent AI assistants that understand questions, provide helpful responses, and automate everyday conversations—all connected to your business.',
    primaryCta: { label: 'BUILD MY AI ASSISTANT', href: '/meet' },
    secondaryCta: { label: 'SEE HOW IT WORKS', href: '#our-ai-solution' },
    images: [
      {
        src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
        alt: 'AI assistant conversation on mobile',
      },
    ],
    headingId: 'ai-assistants-chatbots-hero-heading',
  },
  teamLimits: {
    eyebrow: 'RECOMMENDED SOLUTIONS',
    title: "Your Team Can't Answer Everything. AI Can Help.",
    description:
      'Repeated questions, delayed responses, and scattered information can make customer support and internal communication harder than necessary.',
    items: [
      {
        number: '01',
        title: 'Slow Responses',
        description: 'Customers wait while teams handle other priorities.',
      },
      {
        number: '02',
        title: 'Repetitive Questions',
        description: 'Employees spend time answering the same enquiries.',
      },
      {
        number: '03',
        title: 'Disconnected Information',
        description: 'Answers live in different tools, files, and inboxes.',
      },
    ],
  },
  aiSolution: {
    eyebrow: 'OUR AI SOLUTION',
    title: 'An AI Assistant That Works With Your Business.',
    steps: [
      {
        id: 1,
        title: 'Intelligent Conversations',
        description: 'Respond to common questions through natural, helpful interactions.',
      },
      {
        id: 2,
        title: 'Business Knowledge',
        description: 'Use approved documents, FAQs, and business information to inform answers.',
      },
      {
        id: 3,
        title: 'Lead Qualification',
        description: 'Collect relevant inquiry details and help identify potential opportunities.',
      },
      {
        id: 4,
        title: 'System Integrations',
        description: 'Connect with supported CRM platforms, workflows, and business tools.',
      },
      {
        id: 5,
        title: 'Human Handoff',
        description: 'Route complex or sensitive conversations to the appropriate team member.',
      },
    ],
  },
  fasterAnswers: {
    eyebrow: 'FASTER ANSWERS',
    title: 'Better Conversations. Less Manual Work.',
    description:
      'Give your team more room to focus on meaningful work while customers enjoy a simpler, more responsive experience.',
    benefits: [
      {
        title: 'Faster Answers',
        description: 'Help customers find information without unnecessary waiting.',
      },
      {
        title: 'Always Available',
        description: 'Handle supported enquiries outside normal business hours.',
      },
      {
        title: 'Less Repetition',
        description: 'Reduce the time spent on routine questions.',
      },
      {
        title: 'Smoother Handoffs',
        description: 'Pass relevant context to your team when human support is needed.',
      },
    ],
    image: {
      src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
      alt: 'Illustrative AI assistant chat interface',
    },
  },
  implementation: {
    eyebrow: 'OUR IMPLEMENTATION APPROACH',
    title: 'Built Around How You Work.',
    description:
      'We design and implement AI assistants around your business requirements, information, and customer journeys.',
    steps: [
      { number: '01', title: 'Discover', description: 'Identify needs, users, and opportunities.' },
      { number: '02', title: 'Design', description: 'Define conversations, knowledge, and actions.' },
      { number: '03', title: 'Build', description: 'Configure, integrate, and test the assistant.' },
      { number: '04', title: 'Improve', description: 'Review performance and refine responses.' },
    ],
    ctaLabel: 'START YOUR PROJECT',
    ctaHref: '/meet',
  },
  inAction: {
    eyebrow: 'AI IN ACTION',
    title: 'One Technology. Different ',
    accentTitle: 'Possibilities.',
    description:
      'From supporting customers to helping internal teams, AI assistants can be adapted to different business needs.',
    items: [
      {
        number: '01',
        title: 'Customer Support',
        description: 'Answer common questions and route complex enquiries.',
      },
      {
        number: '02',
        title: 'Sales Assistance',
        description: 'Guide prospects and collect relevant lead information.',
      },
      {
        number: '03',
        title: 'Internal Knowledge',
        description: 'Help employees find answers in approved company resources.',
      },
    ],
  },
  cta: {
    accentText: 'Need an AI assistant?',
    mainText: "Let's build it.",
    ariaLabel: "Need an AI assistant? Let's build it.",
  },
} as const
