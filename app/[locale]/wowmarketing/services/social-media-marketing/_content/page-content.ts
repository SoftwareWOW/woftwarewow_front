const SOCIAL_HERO_IMAGE_1 = '/images/wow/Hero/Growth/image (1).png'
const SOCIAL_HERO_IMAGE_2 = '/images/wow/Hero/Growth/image (2).png'

export const SOCIAL_PAGE_METADATA = {
  title: 'Social Media Marketing Services | WOW Marketing',
  description:
    'Grow your brand with social media strategy, content creation, paid social advertising, community management, and performance optimization.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SOCIAL MEDIA MARKETING',
    title: 'Show up. Stand out.',
    italicTitle: 'Connect.',
    description:
      'Creative content, targeted campaigns, and engagement that connect your brand with the right audience.',
    images: [
      { src: SOCIAL_HERO_IMAGE_1, alt: 'Social media marketing' },
      { src: SOCIAL_HERO_IMAGE_2, alt: 'Social content and campaigns' },
    ],
    primaryCtaLabel: 'Grow Your Social Presence',
  },
  socialProcess: {},
  socialCapabilities: {
    eyebrow: 'WHAT WE DO',
    title: 'Content that connects.',
    accentTitle: 'Strategy that grows.',
    titleSuffix: '',
    description:
      'From creative storytelling to targeted campaigns, we bring every part of your social presence together.',
    items: [
      {
        title: 'Social Media Strategy',
        description: 'Build a clear direction for your channels, content, and audience.',
      },
      {
        title: 'Content Creation & Planning',
        description: 'Create engaging posts, visuals, and campaigns that reflect your brand.',
      },
      {
        title: 'Paid Social Advertising',
        description: 'Reach relevant audiences through targeted social campaigns.',
      },
      {
        title: 'Community Management',
        description: 'Keep conversations active and relationships growing.',
      },
      {
        title: 'Influencer & Creator Collaborations',
        description: 'Connect with creators who align with your brand and audience.',
      },
      {
        title: 'Analytics & Optimization',
        description: 'Understand performance and improve what resonates.',
      },
    ],
  },
  platformPresence: {
    eyebrow: 'OUR PLATFORMS',
    title: 'The right message.',
    accentTitle: 'The right platform.',
    titleSuffix: '',
    description:
      'Every platform has its own audience and culture. We shape content and campaigns to fit where your customers spend their time.',
  },
  buildCommunity: {
    eyebrow: 'BUILD COMMUNITY',
    title: 'Followers are numbers.',
    description: 'Relationships are an asset.',
    subtitle:
      'Strong communities grow through consistent content, genuine conversations, and meaningful engagement.',
  },
  socialGallery: {},
  startupPackageImage: { src: '/images/hero-img/video-img.png', alt: 'Social media marketing' },
  cta: {
    accentText: 'Ready to make some noise?',
    mainText: '',
    ariaLabel: 'Grow Your Social Presence',
  },
}
