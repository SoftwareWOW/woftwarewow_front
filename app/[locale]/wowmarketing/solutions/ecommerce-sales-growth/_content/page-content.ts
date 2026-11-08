import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const MARQUEE: CmsHeroImage[] = [
  { src: '/images/wow/Hero/Growth/image (1).png', alt: 'eCommerce growth' },
  { src: '/images/wow/Hero/Growth/image (2).png', alt: 'Online sales' },
  { src: '/images/wow/Hero/Growth/image (3).png', alt: 'Commerce marketing' },
]

export const ECOMMERCE_SALES_GROWTH_PAGE_METADATA = {
  title: 'eCommerce Marketing & Sales Growth | WOW Marketing',
  description:
    'Grow online sales with eCommerce marketing, conversion optimization, customer retention, and connected commerce solutions from WOW Marketing.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WOW Marketing',
    title: 'eCommerce & Sales Growth',
    italicTitle: 'Attract. Convert. Sell More.',
    description:
      'Grow online sales with smarter marketing, better shopping experiences, and connected commerce solutions.',
    images: MARQUEE.slice(0, 2),
    marqueeImages: MARQUEE,
    primaryCtaLabel: 'Grow Your Online Sales',
    secondaryCtaLabel: 'Explore Our Solutions',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  heroAbout: {},
  retailGrowthPillars: {
    eyebrow: 'ECOMMERCE GROWTH',
    title: 'More Than Just Selling Online.',
    accentTitle: '',
    description:
      'Successful eCommerce connects marketing, shopping experiences, customer relationships, and technology to create sustainable growth.',
    items: [
      {
        title: 'Reach More Shoppers',
        description: 'Attract relevant customers through search, advertising, social media, and content.',
      },
      {
        title: 'Improve Conversions',
        description: 'Make product discovery, checkout, and payments easier for customers.',
      },
      {
        title: 'Increase Repeat Purchases',
        description:
          'Build loyalty through personalized campaigns, email marketing, and customer engagement.',
      },
      {
        title: 'Simplify Operations',
        description: 'Connect inventory, orders, customer data, and workflows to support growth.',
      },
    ],
  },
  commerceSolutions: {
    eyebrow: 'COMMERCE SOLUTIONS',
    title: 'Everything Your Online Store Needs to Grow.',
    accentTitle: '',
    description:
      'Connect your storefront, marketing, customer experience, and operations through solutions built for online commerce.',
    ctaLabel: 'Explore All Services',
    items: [
      {
        title: 'eCommerce & Digital Experiences',
        description: 'Create intuitive shopping experiences that make browsing and purchasing easier.',
        items: [
          'eCommerce Websites',
          'UX & UI Design',
          'Payment Integrations',
          'Mobile Experiences',
        ],
      },
      {
        title: 'Marketing & Customer Acquisition',
        description: 'Reach potential customers across the channels that influence buying decisions.',
        items: [
          'Search Engine Optimization',
          'Paid Advertising',
          'Content Marketing',
          'Social Media Campaigns',
        ],
      },
      {
        title: 'Conversion & Retention',
        description: 'Turn more visits into purchases and encourage customers to return.',
        items: ['Conversion Optimization', 'Email Marketing', 'Remarketing', 'Customer Journeys'],
      },
      {
        title: 'Commerce Automation & Technology',
        description: 'Connect business systems and reduce manual work as your store grows.',
        items: ['CRM Automation', 'Inventory Integrations', 'AI Workflows', 'Custom Integrations'],
      },
    ],
  },
  commerceJourneyPath: {
    eyebrow: 'THE COMMERCE JOURNEY',
    title: "Growth Doesn't End at Checkout.",
    accentTitle: '',
    description:
      'From the first visit to repeat purchases, we help improve every stage of the customer journey.',
    ctaLabel: 'Build Your Growth Engine',
    steps: [
      {
        number: '01',
        title: 'Attract',
        description:
          'Bring the Right Shoppers In. Increase visibility through SEO, advertising, social media, and content.',
      },
      {
        number: '02',
        title: 'Convert',
        description:
          'Make Buying Easier. Improve product pages, shopping experiences, checkout, and payments.',
      },
      {
        number: '03',
        title: 'Retain',
        description:
          'Keep Customers Coming Back. Encourage repeat purchases through email, remarketing, and customer engagement.',
      },
      {
        number: '04',
        title: 'Scale',
        description:
          'Grow Without the Complexity. Connect automation, inventory, analytics, and business systems.',
      },
    ],
  },
  recommendedSolutions: {
    eyebrow: 'RECOMMENDED SOLUTIONS',
    title: 'Built to Move Commerce',
    accentTitle: 'Forward.',
    description:
      'Explore connected solutions that help online businesses improve sales, customer experience, and operations.',
    items: [
      {
        title: 'Website Growth Engine',
        description:
          'Turn your online storefront into a faster, easier-to-use, conversion-focused sales channel.',
      },
      {
        title: 'Sales Acceleration',
        description: 'Improve sales funnels, customer journeys, CRM workflows, and follow-up.',
      },
      {
        title: 'AI Automation',
        description: 'Simplify customer communication, repetitive tasks, and commerce workflows.',
      },
    ],
  },
  commerceJourney: {},
  socialGallery: {},
  cta: {
    accentText: 'Ready to Grow Your Online Sales?',
    mainText: '',
    ariaLabel: 'Start Growing Your Store',
  },
}
