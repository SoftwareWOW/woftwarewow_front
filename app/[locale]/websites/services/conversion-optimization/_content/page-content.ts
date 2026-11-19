export const CONVERSION_OPTIMIZATION_PAGE_METADATA = {
  title: 'Conversion Optimization | WOW Websites',
  description:
    'Your website already attracts visitors. We optimize user journeys, refine key interactions, and remove conversion barriers to help turn visitor interest into meaningful business opportunities.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CONVERSION OPTIMIZATION',
    title: 'More Value From ',
    italicTitle: 'Every Visit.',
    description:
      'Your website already attracts visitors. Let’s make more of those visits count. We optimize user journeys, refine key interactions, and remove conversion barriers to help turn visitor interest into meaningful business opportunities.',
    primaryCta: { label: 'OPTIMIZE MY CONVERSIONS', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/Website 2.jpg',
        alt: 'Team collaborating on conversion optimization strategy',
      },
      {
        src: '/images/wow/Hero/devision/Website 1.jpg',
        alt: 'Professional reviewing website analytics',
      },
    ],
    headingId: 'conversion-optimization-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Traffic Means Little Without ',
    titleAccent: 'Action.',
    titleSuffix: '',
    description:
      'Getting visitors is only the beginning. When journeys are unclear, actions are hard to find, or barriers get in the way, potential opportunities can disappear before they turn into enquiries, signups, or sales.',
    capabilityCards: [
      {
        title: 'High Drop-Off',
        headline: '',
        description:
          'Visitors leave before reaching important pages or completing actions. Unclear journeys and unnecessary distractions can cause valuable opportunities to disappear.',
      },
      {
        title: 'Form Friction',
        headline: '',
        description:
          'Long or confusing forms discourage people from submitting enquiries. Unnecessary fields and unclear instructions create avoidable obstacles.',
      },
      {
        title: 'Limited Insights',
        headline: '',
        description:
          "Without meaningful conversion tracking, it's difficult to identify what works. Businesses risk making changes based on assumptions rather than evidence.",
      },
      {
        title: 'Weak CTAs',
        headline: '',
        description:
          'Important actions are difficult to find or poorly communicated. Visitors may understand your offer but remain unsure about what to do next.',
      },
    ],
  },
  whatWeOptimize: {
    eyebrow: 'WHAT WE OPTIMIZE',
    titleBefore: 'Every Interaction Has a ',
    titleAccent: 'Purpose.',
    description:
      'We combine behavioral insights, strategic design, and continuous experimentation to improve how visitors experience your website and take action.',
    sectionId: 'what-we-optimize',
    capabilityCards: [
      {
        title: 'Conversion Audits',
        headline: '',
        description: 'Identify website friction, conversion barriers, and opportunities for improvement.',
      },
      {
        title: 'UX Optimization',
        headline: '',
        description: 'Improve navigation and user journeys for smoother, more intuitive experiences.',
      },
      {
        title: 'CTA Improvements',
        headline: '',
        description: 'Make calls to action clearer, more visible, and compelling.',
      },
      {
        title: 'Form Optimization',
        headline: '',
        description: 'Simplify forms and remove unnecessary steps to encourage submissions.',
      },
      {
        title: 'A/B Testing',
        headline: '',
        description: 'Test page variations to discover what performs better.',
      },
      {
        title: 'Behavior Analytics',
        headline: '',
        description: 'Understand visitor behavior, engagement patterns, and conversion drop-offs.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE CONVERSION ADVANTAGE',
    title: 'Make Every Opportunity Count.',
    description:
      'Conversion optimization helps you get more value from your existing traffic by making your website clearer, easier to use, and more effective at encouraging action.',
    footerLine: 'Ready to optimize your conversions and',
    footerCtaLabel: 'Optimize My Conversions',
    footerCtaHref: '/meet',
    items: [
      {
        title: 'More Opportunities',
        description:
          'Help more interested visitors reach your enquiry, signup, or purchase process. Reduce barriers that prevent potential customers from taking action.',
        image: {
          src: '/images/wow/Hero/devision/Website 1.jpg',
          alt: 'Team reviewing conversion analytics',
        },
      },
      {
        title: 'Better Experiences',
        description:
          'Give visitors clearer navigation and smoother interactions throughout their journey. A more intuitive website makes important actions easier to complete.',
        image: {
          src: '/images/wow/Hero/devision/Website 2.jpg',
          alt: 'Improved website user journey',
        },
      },
      {
        title: 'Smarter Decisions',
        description:
          'Understand which changes actually improve visitor behavior and conversion. Use measurable insights to guide future website improvements.',
        image: {
          src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
          alt: 'Data-driven optimization insights',
        },
      },
      {
        title: 'Greater Efficiency',
        description:
          'Get more potential value from the traffic you’re already attracting. Improve website performance before relying solely on additional acquisition spending.',
        image: {
          src: '/images/wow/Hero/devision/Website 1.jpg',
          alt: 'Efficient conversion growth',
        },
      },
    ],
  },
  process: {
    eyebrow: 'OUR OPTIMIZATION PROCESS',
    title: 'Analyze. Improve. Repeat.',
    description:
      'We use a structured, evidence-led approach to identify opportunities, test improvements, and refine your website over time.',
    steps: [
      {
        number: '01',
        title: 'Analyze',
        description: 'Review visitor behavior, conversion data, and existing website barriers.',
      },
      {
        number: '02',
        title: 'Prioritize',
        description: 'Identify high-value improvements based on evidence and business goals.',
      },
      {
        number: '03',
        title: 'Experiment',
        description: 'Implement changes and test promising variations where sufficient data exists.',
      },
      {
        number: '04',
        title: 'Refine',
        description: 'Evaluate results and apply what works to future improvements.',
      },
    ],
  },
  technologies: {
    eyebrow: 'OUR TOOLS & TECHNOLOGIES',
    headlineBefore: 'Better Decisions Start With Better ',
    headlineAccent: 'Data.',
    description:
      'We use analytics, behavioral research, and experimentation tools to understand visitor journeys, evaluate changes, and support continuous conversion improvements.',
    tools: [
      { name: 'Google Analytics 4', icon: 'logos:google-analytics' },
      { name: 'Hotjar', icon: 'simple-icons:hotjar' },
      { name: 'VWO', icon: 'simple-icons:vwo' },
      { name: 'Optimizely', icon: 'simple-icons:optimizely' },
      { name: 'Google Tag Manager', icon: 'simple-icons:googletagmanager' },
    ],
  },
  cta: {
    accentText: 'Getting traffic?',
    mainText: "Let's make it count.",
    ariaLabel: "Getting traffic? Let's make it count.",
  },
} as const