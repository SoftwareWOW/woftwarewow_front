export const MULTILINGUAL_WEBSITES_PAGE_METADATA = {
  title: 'Multilingual Websites | WOW Websites',
  description:
    'Connect with audiences beyond language barriers. We create multilingual websites that deliver localized content, intuitive navigation, and a consistent brand experience.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'MULTILINGUAL WEBSITES',
    title: 'Your Website. Every Language. More ',
    italicTitle: 'Possibilities.',
    description:
      'Connect with audiences beyond language barriers. We create multilingual websites that deliver localized content, intuitive navigation, and a consistent brand experience—helping your business communicate confidently across markets.',
    primaryCta: { label: 'BUILD MY MULTILINGUAL WEBSITE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/Website 2.jpg',
        alt: 'Team collaborating on multilingual website strategy',
      },
      {
        src: '/images/wow/Hero/devision/Website 1.jpg',
        alt: 'Professional reviewing localized website content',
      },
    ],
    headingId: 'multilingual-websites-hero-heading',
  },
  challenge: {
    eyebrow: 'THE SUPPORT CHALLENGE',
    titleBefore: 'Your Audience Speaks More Than One ',
    titleAccent: 'Language.',
    titleSuffix: '',
    description:
      "A single-language website can limit who understands your business. Expanding into new markets requires more than translating a few paragraphs.",
    capabilityCards: [
      {
        title: 'Limited Reach',
        headline: '',
        description:
          "Visitors may leave when your website isn't available in their preferred language. This can reduce your ability to connect with international audiences.",
      },
      {
        title: 'Poor Translations',
        headline: '',
        description:
          'Literal translations can lose meaning, clarity, and brand personality. Content needs to feel natural and relevant to each audience.',
      },
      {
        title: 'Inconsistent Experiences',
        headline: '',
        description:
          'Different language versions may have missing pages or inconsistent layouts. These gaps create confusion and weaken the user experience.',
      },
      {
        title: 'Complex Management',
        headline: '',
        description:
          'Updating multiple language versions can become difficult without the right content system. Teams need a practical way to keep information accurate.',
      },
    ],
  },
  whatWeImprove: {
    eyebrow: 'WHAT WE IMPROVE',
    titleBefore: 'Accessibility in Every ',
    titleAccent: 'Interaction.',
    description:
      'We improve the accessibility of your website through practical design, development, and testing considerations that make digital experiences easier to use.',
    sectionId: 'what-we-improve',
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Multilingual website experience preview',
    },
    steps: [
      {
        id: '01',
        title: 'Language Switching',
        description:
          'Give visitors an intuitive way to choose their preferred language. Keep navigation consistent as they explore different versions of your website.',
      },
      {
        id: '02',
        title: 'Localized Design',
        description:
          'Adapt layouts, typography, and interface elements for different languages. Support right-to-left experiences where required.',
      },
      {
        id: '03',
        title: 'Content Localization',
        description:
          "Structure language-specific content to suit different audiences and markets. Support translated messaging while maintaining your brand's voice.",
      },
      {
        id: '04',
        title: 'Multilingual SEO',
        description:
          'Implement language-aware URLs, metadata, and appropriate hreflang signals. Help search engines identify the intended language versions of your pages.',
      },
      {
        id: '05',
        title: 'Content Management',
        description:
          'Make translated pages easier to organize and update through suitable content tools. Help your team maintain consistency as the website grows.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE MULTILINGUAL ADVANTAGE',
    titleBefore: 'Connect Globally. Communicate ',
    titleAccent: 'Naturally.',
    description:
      'A multilingual website makes your business more approachable to diverse audiences while supporting clearer communication and long-term expansion.',
    items: [
      {
        title: 'Reach More People',
        description:
          'Make your business accessible to audiences across different languages and regions. Create opportunities to connect with potential customers in new markets.',
      },
      {
        title: 'Build Confidence',
        description:
          'Help visitors understand your services in a language they know. Clear communication can strengthen trust and reduce uncertainty.',
      },
      {
        title: 'Improve Engagement',
        description:
          'Offer a more comfortable browsing experience through localized content. Help visitors explore your website and take action with greater confidence.',
      },
      {
        title: 'Support Expansion',
        description:
          'Establish a digital foundation for entering additional markets. Add new languages and regional experiences as your business grows.',
      },
    ],
  },
  process: {
    eyebrow: 'OUR PROCESS',
    titleBefore: 'Built for Every ',
    titleAccent: 'Language.',
    description:
      'We plan and develop multilingual experiences around your audience, content requirements, and long-term expansion goals.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description:
          'Identify your target languages, markets, and content requirements.',
      },
      {
        number: '02',
        title: 'Structure',
        description: 'Plan language navigation, page architecture, and content workflows.',
      },
      {
        number: '03',
        title: 'Develop',
        description: 'Build localized interfaces, language switching, and content integrations.',
      },
      {
        number: '04',
        title: 'Validate',
        description: 'Test translations, layouts, navigation, and language-specific functionality.',
      },
    ],
  },
  technologies: {
    eyebrow: 'OUR TECHNOLOGIES',
    headlineBefore: 'Technology Without Language ',
    headlineAccent: 'Limits.',
    description:
      'We work with modern, reliable technologies to build fast, secure, and scalable websites. Every project gets the tools that best fit its needs.',
    tools: [
      { name: 'next-intl', icon: 'mdi:translate' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Strapi', icon: 'simple-icons:strapi' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
    ],
  },
  cta: {
    accentText: 'Going global?',
    mainText: "Let's speak their language.",
    ariaLabel: "Going global? Let's speak their language.",
  },
} as const