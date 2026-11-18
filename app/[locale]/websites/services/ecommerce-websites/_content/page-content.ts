export const ECOMMERCE_WEBSITES_PAGE_METADATA = {
  title: 'eCommerce Websites | WOW Websites',
  description:
    'Turn your products into a compelling online shopping experience. We build beautiful, easy-to-manage eCommerce websites designed to attract customers, simplify shopping, and support your business growth.',
} as const

export const CONTENT = {
  hero: {
    title: 'Your Store. ',
    italicTitle: 'Built to Sell.',
    marqueeText: 'eCommerce Websites',
    description:
      'Turn your products into a compelling online shopping experience. We build beautiful, easy-to-manage eCommerce websites designed to attract customers, simplify shopping, and support your business growth.',
    primaryCta: { label: 'BUILD MY ONLINE STORE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/Website 1.jpg',
        alt: 'Collaborative workspace planning an online store',
      },
      {
        src: '/images/wow/Hero/devision/Website 2.jpg',
        alt: 'Professional presenting eCommerce strategy',
      },
    ],
    headingId: 'ecommerce-websites-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: "Don't Let a Poor Experience Cost You ",
    titleAccent: 'Sales.',
    titleSuffix: '',
    description:
      'Even great products can struggle online when customers encounter slow websites, confusing navigation, or complicated buying processes.',
    capabilityCards: [
      {
        title: 'Abandoned Carts',
        headline: '',
        description: 'Complicated checkout discourages purchases.',
      },
      {
        title: 'Poor Product Discovery',
        headline: '',
        description: 'Shoppers struggle to find what they need.',
      },
      {
        title: 'Mobile Friction',
        headline: '',
        description: 'Shopping becomes difficult on smaller screens.',
      },
      {
        title: 'Store Management',
        headline: '',
        description: 'Updating products and orders takes too much effort.',
      },
    ],
  },
  whatWeBuild: {
    eyebrow: 'WHAT WE BUILD',
    titleBefore: 'Everything Your Online Store ',
    titleAccent: 'Needs.',
    description:
      'From product discovery to checkout, we create connected shopping experiences that make buying easier for customers and managing simpler for businesses.',
    sectionId: 'what-we-build',
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Ecommerce dashboard on laptop',
    },
    steps: [
      { id: '01', title: 'Custom Storefronts', description: 'Distinctive designs that showcase your products.' },
      { id: '02', title: 'Product Catalogs', description: 'Organized collections, filters, and product details.' },
      { id: '03', title: 'Shopping & Checkout', description: 'Intuitive carts and secure payment integrations.' },
      { id: '04', title: 'Store Management', description: 'Manage products, inventory, and orders.' },
      {
        id: '05',
        title: 'Commerce Integrations',
        description: 'Connect supported payment, shipping, and business tools.',
      },
    ],
  },
  growthPieces: {
    eyebrow: 'THE ECOMMERCE ADVANTAGE',
    title: 'Make Shopping Easier. Make Growth Possible.',
    description:
      'A thoughtfully designed online store creates a better buying experience while giving your business the flexibility to grow.',
    footerLine: 'Ready to put these advantages to',
    footerCtaLabel: 'Build My Online Store',
    footerCtaHref: '/meet',
    items: [
      {
        title: 'Better Shopping',
        description: 'Make browsing and buying effortless.',
        image: {
          src: '/images/wow/Hero/devision/Website 1.jpg',
          alt: 'Team reviewing ecommerce analytics',
        },
      },
      {
        title: 'Greater Confidence',
        description: 'Build trust through a professional store.',
        image: {
          src: '/images/wow/Hero/devision/Website 2.jpg',
          alt: 'Professional ecommerce storefront',
        },
      },
      {
        title: 'More Conversions',
        description: 'Reduce friction throughout the buying journey.',
        image: {
          src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
          alt: 'Shopping experience preview',
        },
      },
      {
        title: 'Room to Grow',
        description: 'Expand products and capabilities as needed.',
        image: {
          src: '/images/wow/Hero/devision/Website 1.jpg',
          alt: 'Growing online store',
        },
      },
    ],
  },
  modernizationPath: {
    title: 'From Products to Purchases.',
    steps: [
      { number: '01', title: 'Discover', description: 'Understand your products and customers.' },
      { number: '02', title: 'Design', description: 'Plan the storefront and shopping journey.' },
      { number: '03', title: 'Develop', description: 'Build and connect store features.' },
      { number: '04', title: 'Launch', description: 'Test checkout and publish your store.' },
    ],
  },
  technologies: {
    eyebrow: 'OUR TECHNOLOGIES',
    headlineBefore: 'The Right Technology for Your ',
    headlineAccent: 'Store.',
    description:
      'We work with modern, reliable technologies to build fast, secure, and scalable websites. Every project gets the tools that best fit its needs.',
    tools: [
      { name: 'Shopify', icon: 'logos:shopify' },
      { name: 'WooCommerce', icon: 'logos:woocommerce' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Strapi', icon: 'simple-icons:strapi' },
    ],
  },
  cta: {
    accentText: 'Ready to sell online?',
    mainText: "Let's build your store.",
    ariaLabel: "Ready to sell online? Let's build your store.",
  },
} as const