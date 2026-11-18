export const BUSINESS_WEBSITES_PAGE_METADATA = {
  title: 'Business Websites | WOW Websites',
  description:
    'Make a powerful first impression with a modern, professional website built around your business—design, functionality, and user journeys that turn your online presence into a business asset.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'BUSINESS WEBSITES',
    title: 'Your Business Deserves a Better ',
    italicTitle: 'Website.',
    description:
      'Make a powerful first impression with a modern, professional website built around your business. We combine thoughtful design, seamless functionality, and clear user journeys to turn your online presence into a valuable business asset.',
    trustLineHighlight: '',
    primaryCta: { label: 'BUILD MY WEBSITE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    visual: 'image' as const,
    images: [
      {
        src: '/images/wow/Hero/devision/Website 1.jpg',
        alt: 'Professional business website mockup',
      },
    ],
    headingId: 'business-websites-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: "Your Website Shouldn't Hold You Back.",
    titleAccent: '',
    titleSuffix: '',
    description:
      'An outdated or poorly structured website can weaken first impressions, frustrate visitors, and make it harder for potential customers to take action.',
    capabilityCards: [
      {
        title: 'Outdated Appearance',
        headline: '',
        description: 'A design that no longer reflects your business.',
      },
      {
        title: 'Poor Mobile Experience',
        headline: '',
        description: 'Visitors struggle on smaller screens.',
      },
      {
        title: 'Confusing Navigation',
        headline: '',
        description: 'Important information is hard to find.',
      },
      {
        title: 'Weak Conversions',
        headline: '',
        description: 'Visitors leave without taking the next step.',
      },
    ],
  },
  whatWeBuild: {
    eyebrow: 'WHAT WE BUILD',
    title: 'Everything a Great Business Website Needs.',
    description:
      'From custom design and responsive development to SEO structure and conversion-focused UX, we build websites that represent your business clearly and help visitors take action.',
    steps: [
      {
        id: 1,
        title: 'Custom Web Design',
        description: 'A distinctive design tailored to your brand.',
      },
      {
        id: 2,
        title: 'Responsive Development',
        description: 'A seamless experience across devices.',
      },
      {
        id: 3,
        title: 'SEO-Friendly Structure',
        description: 'A strong technical foundation for discoverability.',
      },
      {
        id: 4,
        title: 'Content Management',
        description: 'Simple tools for updating website content.',
      },
      {
        id: 5,
        title: 'Conversion-Focused UX',
        description: 'Clear navigation and purposeful calls to action.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE BUSINESS ADVANTAGE',
    title: 'More Than a Website. A Better First Impression.',
    description:
      'A thoughtfully built website helps your business communicate its value, earn trust, and make it easier for people to connect with you.',
    benefits: [
      {
        title: 'Build Credibility',
        description: 'Present your business professionally.',
      },
      {
        title: 'Engage Visitors',
        description: 'Make information easy to explore.',
      },
      {
        title: 'Encourage Enquiries',
        description: 'Guide visitors toward meaningful actions.',
      },
      {
        title: 'Support Growth',
        description: 'Create a foundation that can evolve with you.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Business website experience preview',
    },
  },
  process: {
    eyebrow: 'OUR PROCESS',
    titleBefore: 'From Your Vision to a Website That ',
    titleAccent: 'Works.',
    description:
      'We take your website from initial planning to launch through a collaborative, structured process.',
    steps: [
      {
        step: 'STEP 01',
        title: 'Discover',
        description: 'Understand your business, audience, and goals.',
      },
      {
        step: 'STEP 02',
        title: 'Plan',
        description: 'Structure pages, content, and user journeys.',
      },
      {
        step: 'STEP 03',
        title: 'Design',
        description: 'Create your visual experience and layouts.',
      },
      {
        step: 'STEP 04',
        title: 'Develop',
        description: 'Build and refine the responsive website.',
      },
      {
        step: 'STEP 05',
        title: 'Launch',
        description: 'Test, review, and publish your website.',
      },
    ],
  },
  technologies: {
    eyebrow: 'OUR TECHNOLOGIES',
    headline: 'Built With the Right Technology.',
    description:
      'We work with modern, reliable technologies to build fast, secure, and scalable websites. Every project gets the tools that best fit its needs.',
    tools: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Strapi', icon: 'simple-icons:strapi' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
    ],
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
    accentText: 'Need a website?',
    mainText: "Let's build it.",
    ariaLabel: "Need a website? Let's build it.",
  },
} as const