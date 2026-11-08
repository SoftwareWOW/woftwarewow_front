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
      'Put your brand in front of the right people with strategic campaigns across search, social media, content, and paid advertising. Build recognition, expand your reach, and create lasting visibility.',
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
      'Visibility is more than simply being online. We combine strategy, creative content, and targeted marketing to help your business reach new audiences and build a recognizable presence.',
    items: [
      {
        title: 'Brand Awareness Campaigns',
        headline: 'Make a lasting first impression.',
        description:
          'Introduce your business to new audiences through coordinated campaigns designed to increase exposure, communicate your value, and strengthen brand recognition.',
        href: '/contact',
      },
      {
        title: 'SEO & Content Marketing',
        headline: 'Be found when it matters.',
        description:
          'Improve your visibility in search results with relevant content, strategic keywords, and optimized website pages that help potential customers discover your business.',
        href: '/contact',
      },
      {
        title: 'Social Media Advertising',
        headline: 'Reach beyond your followers.',
        description:
          'Expand your audience with targeted social advertising, compelling creative, and campaigns designed to put your brand in front of potential customers.',
        href: '/contact',
      },
    ],
  },
  brandCapabilities: {
    eyebrow: 'Built for Discovery',
    title: 'A Connected Visibility Strategy',
    description:
      "Strong brand visibility doesn't happen through a single channel. We connect research, content, advertising, and optimization to help your business stay visible and recognizable wherever your audience discovers you.",
    closingLine:
      'Not just more exposure. A stronger presence that people recognize and remember.',
    showCtas: false,
    image: { src: SIDE_IMAGE, alt: 'Connected visibility strategy' },
    items: [
      {
        title: 'Audience Research',
        description: 'Understand your ideal customers, their interests, and the digital channels they use.',
      },
      {
        title: 'Campaign Strategy',
        description: 'Build coordinated marketing campaigns with clear objectives, messaging, and audience targeting.',
      },
      {
        title: 'Search Visibility',
        description: 'Improve discoverability through search optimization, relevant content, and stronger online presence.',
      },
      {
        title: 'Social Media Presence',
        description: 'Build recognition with consistent social content, engaging visuals, and strategic publishing.',
      },
      {
        title: 'Paid Awareness',
        description: 'Extend your reach through targeted advertising campaigns across relevant digital platforms.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Monitor reach, impressions, engagement, and campaign performance to improve your visibility strategy.',
      },
    ],
  },
  brandVisibility: {
    eyebrow: 'Brand Visibility',
    title: 'More Than Just Being Seen.',
    titleUsesInstrument: false,
    description:
      'Getting noticed is the first step. Building recognition takes consistent messaging, compelling creative, and a presence across the channels your customers use.',
    secondaryDescription:
      'We help your business turn individual impressions into a connected brand experience.',
    ctaLabel: 'Start Growing Your Reach',
    ctaHref: '/contact',
    steps: [
      {
        title: 'Targeted',
        headline: 'Reach the Right People.',
        description: 'Connect with audiences based on relevant interests, behaviors, and search intent.',
      },
      {
        title: 'Recognizable',
        headline: 'Make Every Impression Count.',
        description:
          'Use consistent messaging and creative to help audiences recognize your brand across different channels.',
      },
      {
        title: 'Multi-Channel',
        headline: 'Be Where Your Audience Is.',
        description: 'Build visibility across search engines, social media, content, and paid advertising.',
      },
      {
        title: 'Measurable',
        headline: "Know What's Working.",
        description: 'Track meaningful visibility metrics and refine campaigns based on performance insights.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to Get Your Brand Noticed?',
    mainText: '',
    ariaLabel: "Let's Grow Your Visibility",
  },
}
