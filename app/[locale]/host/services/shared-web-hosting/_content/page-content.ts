export const SHARED_WEB_HOSTING_PAGE_METADATA = {
  title: 'Shared Web Hosting | WOW Host',
  description:
    'Give your website a dependable place to grow. Our shared web hosting offers an accessible, straightforward way to get your business online, with essential hosting resources and convenient website management.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SHARED WEB HOSTING',
    title: 'Great Websites Start With ',
    italicTitle: 'Great Hosting.',
    description:
      'Give your website a dependable place to grow. Our shared web hosting offers an accessible, straightforward way to get your business online, with essential hosting resources and convenient website management.',
    primaryCta: { label: 'Explore Hosting Plans', href: '/meet' },
    secondaryCta: { label: "See What's Included", href: '#whats-included' },
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'Shared web hosting and website management on mobile',
        width: 720,
        height: 640,
      },
    ],
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    title: 'Getting Online Should Be the Easy Part.',
    description:
      "Finding the right hosting solution can be confusing, especially when you're trying to balance affordability, reliability, and ease of management.",
    pillars: [
      {
        number: '01',
        title: 'Complex Setup',
        description: 'Technical configuration can delay launching a new website.',
      },
      {
        number: '02',
        title: 'Unpredictable Costs',
        description: 'Confusing plans and unexpected charges make budgeting harder.',
      },
      {
        number: '03',
        title: 'Performance Concerns',
        description: 'Limited resources can affect website speed during busy periods.',
      },
      {
        number: '04',
        title: 'Difficult Management',
        description: 'Complicated hosting controls make routine website tasks frustrating.',
      },
    ],
  },
  whatsIncluded: {
    eyebrow: "WHAT'S INCLUDED",
    titleBefore: 'The Essentials, All in One ',
    titleAccent: 'Place.',
    description:
      'Shared hosting brings together the essential resources your website needs, with a manageable setup designed for everyday use.',
    capabilityCards: [
      {
        title: 'Website Hosting',
        headline: '',
        description: 'Host your website on shared infrastructure suited to everyday business needs.',
      },
      {
        title: 'Storage & Resources',
        headline: '',
        description: 'Access hosting storage and processing resources according to your selected plan.',
      },
      {
        title: 'Control Panel',
        headline: '',
        description: 'Manage website files, settings, and hosting resources through one interface.',
      },
      {
        title: 'Domain Connection',
        headline: '',
        description: 'Connect your existing domain and manage essential website configurations.',
      },
      {
        title: 'SSL Support',
        headline: '',
        description: 'Enable supported SSL certificates to secure connections to your website.',
      },
      {
        title: 'Database Support',
        headline: '',
        description: 'Run compatible websites and applications that require database functionality.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE SHARED HOSTING ADVANTAGE',
    title: 'Simple Hosting. More Peace of ',
    accentTitle: 'Mind.',
    description:
      'Shared hosting offers a practical starting point for businesses that need an online presence without managing dedicated server infrastructure.',
    image: {
      src: '/images/wow/Hero/devision/Education.jpg',
      alt: 'Team reviewing website hosting plans and performance data',
      width: 720,
      height: 520,
    },
    items: [
      {
        title: 'Budget Friendly',
        description: 'Get started without the cost of maintaining dedicated infrastructure.',
      },
      {
        title: 'Easy Management',
        description: 'Handle essential hosting tasks through convenient management tools.',
      },
      {
        title: 'Less Technical Work',
        description: 'Avoid many of the responsibilities of managing your own server.',
      },
      {
        title: 'Room to Start',
        description: 'Build your online presence with resources suited to smaller websites.',
      },
    ],
  },
  gettingStarted: {
    eyebrow: 'GETTING STARTED',
    title: 'From Setup to Online.',
    description:
      'Getting started with shared hosting should be straightforward, with a clear path from choosing a plan to managing your website.',
    steps: [
      {
        number: '01',
        title: 'Choose',
        description: 'Select a hosting plan that fits your website.',
      },
      {
        number: '02',
        title: 'Connect',
        description: 'Link your domain and configure essential settings.',
      },
      {
        number: '03',
        title: 'Launch',
        description: 'Upload or deploy your website and verify functionality.',
      },
      {
        number: '04',
        title: 'Manage',
        description: 'Monitor resources and maintain your website over time.',
      },
    ],
  },
  technology: {
    eyebrow: 'HOSTING TECHNOLOGY',
    headlineBefore: 'The Technology Behind Your ',
    headlineAccent: 'Website.',
    description:
      'A dependable hosting environment relies on compatible web technologies and convenient management tools that help keep everyday website operations straightforward.',
    tools: [
      { name: 'cPanel', icon: 'simple-icons:cpanel' },
      { name: 'PHP', icon: 'logos:php' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
      { name: 'nginx', icon: 'logos:nginx' },
    ],
  },
  cta: {
    accentText: 'Ready to go online?',
    mainText: "Let's get you hosted.",
    ariaLabel: 'Start your shared web hosting project with WOW Host',
  },
} as const
