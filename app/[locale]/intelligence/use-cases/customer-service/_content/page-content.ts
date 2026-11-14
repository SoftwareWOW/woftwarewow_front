export const CUSTOMER_SERVICE_USE_CASE_PAGE_METADATA = {
  title: 'AI for Customer Service | WOW Intelligence',
  description:
    'Bring AI into customer service for faster answers, organized requests, and more time for conversations that need a human touch.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'AI FOR CUSTOMER SERVICE',
    title: 'Better Support. Happier ',
    italicTitle: 'Customers.',
    description:
      'Help customers get the answers they need, when they need them. Bring AI into your customer service experience to handle routine enquiries, reduce waiting, and give your team more time for conversations that need a human touch.',
    primaryCta: { label: 'IMPROVE MY CUSTOMER SUPPORT', href: '/meet' },
    secondaryCta: { label: 'SEE HOW IT WORKS', href: '#intelligent-customer-support' },
    images: [
      { src: '/images/hero-img/social-hero-1.jpg', alt: 'Support team collaborating around customer workflows' },
      { src: '/images/hero-img/social-hero-2.jpg', alt: 'Customer service professional reviewing insights' },
    ],
    headingId: 'intelligence-customer-service-use-case-hero-heading',
    enableVideoModal: false,
  },
  challenge: {
    eyebrow: 'THE SUPPORT CHALLENGE',
    titleBefore: "Great Support Shouldn't Mean Long Waits.",
    titleAccent: '',
    titleSuffix: '',
    description:
      'Support teams face growing expectations while managing repeated questions, multiple channels, and complex customer requests.',
    capabilityCards: [
      {
        title: 'Long Wait Times',
        headline: '',
        description: 'Customers wait for simple answers.',
      },
      {
        title: 'Repeated Questions',
        headline: '',
        description: 'Agents handle the same enquiries daily.',
      },
      {
        title: 'Scattered Conversations',
        headline: '',
        description: 'Requests arrive across different channels.',
      },
      {
        title: 'Overloaded Teams',
        headline: '',
        description: 'Routine work limits time for complex cases.',
      },
    ],
  },
  powered: {
    eyebrow: 'INTELLIGENT CUSTOMER SUPPORT',
    titleBefore: 'The Right Support at the Right',
    titleAccent: 'Moment.',
    description:
      'We help you integrate AI into customer service workflows so routine questions are handled efficiently, requests stay organized, and human agents remain available when needed.',
    sectionId: 'intelligent-customer-support',
    image: {
      src: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
      alt: 'Customer support dashboards across devices',
    },
    steps: [
      { id: '01', title: 'Instant Answers', description: 'Respond to common questions using approved information.' },
      { id: '02', title: 'Request Routing', description: 'Direct enquiries to the appropriate team.' },
      { id: '03', title: 'Ticket Automation', description: 'Create and organize support requests.' },
      { id: '04', title: 'Knowledge Assistance', description: 'Help agents find relevant information.' },
      { id: '05', title: 'Human Handoff', description: 'Transfer complex issues with useful context.' },
    ],
  },
  experience: {
    eyebrow: 'THE CUSTOMER EXPERIENCE',
    title: 'Faster Help. More Human Attention.',
    description:
      'Give customers a more responsive support experience while freeing your team to focus on requests that need personal attention.',
    pillars: [
      { title: '24/7 Assistance', description: 'Support common enquiries around the clock.' },
      { title: 'Shorter Waits', description: 'Get routine answers sooner.' },
      { title: 'Consistent Answers', description: 'Use approved business information.' },
      { title: 'More Human Focus', description: 'Let agents prioritize complex needs.' },
    ],
  },
  approach: {
    eyebrow: 'OUR APPROACH',
    titleBefore: 'Built Around Your ',
    titleAccent: 'Customers.',
    description:
      'We understand your support needs, connect the right AI capabilities, and refine the experience around real customer enquiries.',
    steps: [
      { number: '01', title: 'Understand', description: 'Review common enquiries and support challenges.' },
      { number: '02', title: 'Design', description: 'Define responses, routing, and human handoffs.' },
      { number: '03', title: 'Implement', description: 'Configure, integrate, and test the solution.' },
      { number: '04', title: 'Improve', description: 'Review conversations and refine performance.' },
    ],
  },
  cta: {
    accentText: 'Want better support?',
    mainText: "Let's make it happen.",
    ariaLabel: "Want better support? Let's make it happen.",
  },
} as const