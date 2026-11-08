import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const WOW_HERO = [
  '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
  '/images/wow/LandingPageNaveBare/ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc%202.svg',
  '/images/wow/LandingPageNaveBare/Marketing%20%26%20Growth.svg',
  '/images/wow/LandingPageNaveBare/Website%201%202.svg',
  '/images/wow/LandingPageNaveBare/Social%203.svg',
  '/images/wow/LandingPageNaveBare/Impact%202.svg',
] as const

const heroImages: CmsHeroImage[] = WOW_HERO.map((src, i) => ({
  src,
  alt: `Brand visibility placeholder ${i + 1}`,
}))

const SIDE_IMAGE = '/images/wow/Hero/Growth/image (2).png'

export const BRAND_AWARENESS_PAGE_METADATA = {
  title: 'Brand Awareness & Visibility Services | WOW Marketing',
  description:
    "Grow your brand's visibility with strategic SEO, content marketing, social media, and paid advertising campaigns from WOW Marketing.",
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WOW Marketing',
    title: 'Brand Awareness & Visibility',
    italicTitle: 'Be Seen. Be Remembered. Be Chosen.',
    description:
      'Reach the right audience through search, social media, content, and paid campaigns. Build recognition and grow your digital presence.',
    images: heroImages,
    primaryCtaLabel: 'Grow Your Visibility',
    secondaryCtaLabel: 'Explore Our Capabilities',
    primaryCtaHref: '/contact',
    secondaryCtaHref: '/contact',
  },
  ourCapabilities: {
    eyebrow: 'Our Capabilities',
    title: 'Get Noticed by the Right Audience',
    accentTitle: '',
    description:
      'We combine strategy, creative content, and targeted marketing to expand your reach and strengthen brand recognition.',
    items: [
      {
        title: 'Brand Awareness Campaigns',
        headline: 'Make a lasting first impression.',
        description:
          'Reach new audiences with coordinated campaigns that showcase your brand and strengthen recognition.',
        href: '/contact',
      },
      {
        title: 'SEO & Content Marketing',
        headline: 'Be found when it matters.',
        description:
          'Improve search visibility through relevant content, strategic keywords, and optimized website pages.',
        href: '/contact',
      },
      {
        title: 'Social Media Advertising',
        headline: 'Reach beyond your followers.',
        description: 'Connect with new audiences through targeted social ads and compelling campaign creative.',
        href: '/contact',
      },
    ],
  },
  brandCapabilities: {
    eyebrow: 'Built for Discovery',
    title: 'A Connected Visibility Strategy',
    description:
      'We connect research, content, advertising, and optimization to keep your brand visible across the channels your audience uses.',
    closingLine: 'Not just more exposure. A brand people recognize and remember.',
    showCtas: false,
    image: { src: SIDE_IMAGE, alt: 'Connected visibility strategy' },
    items: [
      {
        title: 'Audience Research',
        description: 'Understand your ideal customers, their interests, and where they spend time online.',
      },
      {
        title: 'Campaign Strategy',
        description: 'Plan campaigns with clear goals, consistent messaging, and precise targeting.',
      },
      {
        title: 'Search Visibility',
        description: 'Improve discoverability through SEO, relevant content, and search optimization.',
      },
      {
        title: 'Social Media Presence',
        description: 'Build recognition through consistent content, engaging visuals, and publishing.',
      },
      {
        title: 'Paid Awareness',
        description: 'Expand your reach with targeted advertising across relevant digital platforms.',
      },
      {
        title: 'Performance Optimization',
        description: 'Track reach, engagement, and campaign results to continuously improve performance.',
      },
    ],
  },
  brandVisibility: {
    eyebrow: 'Brand Visibility',
    title: 'From Visibility to',
    accentTitle: 'Recognition.',
    frameworkTagline:
      'We follow a focused process to help your brand reach the right people and build lasting recognition.',
    ctaLabel: 'Start Growing Your Reach',
    ctaHref: '/contact',
    steps: [
      {
        title: 'Discover',
        headline: 'Know Your Audience.',
        description: 'Identify your ideal customers, their interests, and the channels they use.',
      },
      {
        title: 'Strategize',
        headline: 'Plan Your Visibility.',
        description: 'Create a clear campaign strategy with the right message, channels, and targeting.',
      },
      {
        title: 'Amplify',
        headline: 'Expand Your Reach.',
        description: 'Launch coordinated content and advertising campaigns to connect with new audiences.',
      },
      {
        title: 'Optimize',
        headline: 'Build Lasting Impact.',
        description: 'Monitor campaign performance and refine your approach to strengthen brand recognition.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to Get Your Brand Noticed?',
    mainText: '',
    ariaLabel: 'Grow Your Brand Visibility',
  },
}
