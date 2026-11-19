export const LANDING_PAGES_PAGE_METADATA = {
  title: 'Landing Pages | WOW Websites',
  description:
    'Turn more visitors into customers with landing pages designed to inspire action. We combine compelling messaging, purposeful design, and seamless experiences to help your campaigns achieve their goals.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LANDING PAGES',
    title: 'One Page. One Goal. More ',
    italicTitle: 'Impact.',
    description:
      'Turn more visitors into customers with landing pages designed to inspire action. We combine compelling messaging, purposeful design, and seamless experiences to help your campaigns achieve their goals.',
    primaryCta: { label: 'BUILD MY LANDING PAGE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    media: {
      src: '/images/wow/Hero/devision/Website 2.jpg',
      alt: 'Landing page design preview',
    },
    headingId: 'landing-pages-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Getting Traffic Is Only Half the ',
    titleAccent: 'Job.',
    titleSuffix: '',
    description:
      'Marketing campaigns can bring people to your website, but without a focused experience, those visitors may leave before taking meaningful action.',
    capabilityCards: [
      {
        title: 'Unclear Messaging',
        headline: '',
        description:
          'Visitors struggle to understand your offer or its value. Without a compelling message, their interest quickly fades.',
      },
      {
        title: 'Too Many Distractions',
        headline: '',
        description:
          'Multiple links and competing messages pull attention away from your goal. Visitors lose direction before reaching your CTA.',
      },
      {
        title: 'Weak Calls to Action',
        headline: '',
        description:
          'Confusing buttons and poorly placed forms make conversion harder. Potential customers may leave without knowing what to do next.',
      },
      {
        title: 'Poor Mobile Experience',
        headline: '',
        description:
          'Difficult navigation and slow loading frustrate mobile visitors. This creates unnecessary friction throughout their journey.',
      },
    ],
  },
  whatWeBuild: {
    eyebrow: 'WHAT WE BUILD',
    titleBefore: 'Every Element Designed to ',
    titleAccent: 'Convert.',
    description:
      'We create focused landing page experiences that combine persuasive content, intuitive design, and the technical foundations needed to support your campaigns.',
    sectionId: 'what-we-build',
    capabilityCards: [
      {
        title: 'Conversion Strategy',
        headline: '',
        description:
          "Define the page's primary goal, target audience, and desired actions. Build a clear path that guides visitors toward conversion.",
      },
      {
        title: 'Landing Page Design',
        headline: '',
        description:
          'Create visually engaging layouts that highlight your offer and communicate its value. Keep every element purposeful and easy to navigate.',
      },
      {
        title: 'Persuasive Copywriting',
        headline: '',
        description:
          'Develop clear headlines, compelling messaging, and action-driven content. Help visitors understand why your offer matters and what to do next.',
      },
      {
        title: 'Lead Capture Forms',
        headline: '',
        description:
          'Design intuitive forms that make submitting enquiries simple. Connect submissions to suitable email or CRM workflows where required.',
      },
      {
        title: 'Responsive Development',
        headline: '',
        description:
          'Build fast, mobile-friendly pages that work across different screen sizes. Deliver a consistent experience whether visitors arrive on desktop or mobile.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE LANDING PAGE ADVANTAGE',
    title: 'Less Distraction. More Action.',
    description:
      'A well-designed landing page gives every visitor a focused experience, helping your offer stand out and making the next step easier.',
    sectionId: 'landing-page-advantage',
    benefits: [
      {
        title: 'Stronger Engagement',
        description:
          'Capture attention with messaging and design that speak directly to campaign visitors.',
      },
      {
        title: 'More Enquiries',
        description:
          'Make it easier for interested visitors to contact your business. Reduce unnecessary steps between discovering an offer and taking action.',
      },
      {
        title: 'Better Campaign Focus',
        description:
          'Align page content with each campaign so messaging stays clear and conversion paths stay direct.',
      },
      {
        title: 'Measurable Results',
        description:
          'Understand how visitors interact with your page and where they convert. Use these insights to guide future improvements.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Landing page device mockups',
    },
  },
  process: {
    eyebrow: 'OUR PROCESS',
    title: 'From Click to Conversion.',
    description:
      'We build landing pages through a focused process that connects your campaign objectives with design, development, and measurable results.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description:
          'Understand your campaign, audience, and conversion goals. Identify the offer and actions the page should prioritize.',
      },
      {
        number: '02',
        title: 'Structure',
        description:
          'Plan the messaging, page hierarchy, and conversion journey. Organize content to guide visitors toward a clear next step.',
      },
      {
        number: '03',
        title: 'Create',
        description:
          'Design and develop the responsive landing page. Integrate forms, tracking, and other essential campaign functionality.',
      },
      {
        number: '04',
        title: 'Launch',
        description:
          'Test the page, forms, and conversion events before publishing. Review early performance and identify potential refinements.',
      },
    ],
  },
  technologies: {
    eyebrow: 'OUR TECHNOLOGIES',
    headlineBefore: 'The Technology Behind Every ',
    headlineAccent: 'Click.',
    description:
      'We work with modern, reliable technologies to build fast, secure, and scalable websites. Every project gets the tools that best fit its needs.',
    tools: [
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Google Analytics', icon: 'logos:google-analytics' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Strapi', icon: 'simple-icons:strapi' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
    ],
  },
  cta: {
    accentText: 'Have an offer?',
    mainText: "Let's convert it.",
    ariaLabel: "Have an offer? Let's convert it.",
  },
} as const