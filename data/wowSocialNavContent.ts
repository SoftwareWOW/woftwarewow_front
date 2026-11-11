export type WowSocialNavService = {
  navId: string
  slug: string
  title: string
  headline: string
  description: string
  summary: string
  includes: string[]
  outcomes: string[]
  ctaAccent: string
  ctaMain: string
}

export const WOW_SOCIAL_NAV_SERVICES: WowSocialNavService[] = [
  {
    navId: 'socialMediaStrategyManagement',
    slug: 'social-media-strategy-management',
    title: 'Social Media Strategy & Management',
    headline: 'Plan smarter. Grow your presence.',
    description:
      'Build a stronger social presence with strategic planning, consistent management, and audience-focused campaigns.',
    summary: 'Strategy, calendars, and management that keep your channels active and on-brand.',
    includes: [
      'Social media strategy & planning',
      'Account & platform management',
      'Content calendars & scheduling',
      'Performance tracking & optimization',
    ],
    outcomes: [
      'Clear direction across every social channel',
      'Consistent publishing without the daily scramble',
      'Reporting that shows what is working',
    ],
    ctaAccent: 'Ready to grow',
    ctaMain: 'your social presence?',
  },
  {
    navId: 'socialInfluencerContentCreation',
    slug: 'social-influencer-content-creation',
    title: 'Social & Influencer Content Creation',
    headline: 'Create content that connects.',
    description:
      'Capture attention and grow engagement through creative content and authentic influencer collaborations.',
    summary: 'Reels, short-form video, and creator campaigns built for the feed.',
    includes: [
      'Social media content creation',
      'Reels & short-form videos',
      'Influencer partnerships & campaigns',
      'Creative storytelling & branded content',
    ],
    outcomes: [
      'Content that feels native to each platform',
      'Stronger engagement through authentic creative',
      'Creator collaborations aligned with your brand',
    ],
    ctaAccent: 'Ready for content',
    ctaMain: 'that stops the scroll?',
  },
  {
    navId: 'paidSocialAdvertisingCommunityManagement',
    slug: 'paid-social-advertising-community-management',
    title: 'Paid Social Advertising & Community Management',
    headline: 'Reach more people. Build engagement.',
    description:
      'Grow your reach, drive conversions, and build stronger communities through targeted social campaigns.',
    summary: 'Paid social, targeting, and community care in one workflow.',
    includes: [
      'Paid social advertising campaigns',
      'Audience targeting & retargeting',
      'Community engagement & moderation',
      'Ad performance & conversion tracking',
    ],
    outcomes: [
      'Campaigns tuned to your goals and audiences',
      'Communities that feel heard and supported',
      'Clear visibility into ad and engagement performance',
    ],
    ctaAccent: 'Ready to scale',
    ctaMain: 'your social campaigns?',
  },
]

export const WOW_SOCIAL_NAV_SERVICE_SLUGS = WOW_SOCIAL_NAV_SERVICES.map((service) => service.slug)

const serviceBySlug = new Map(WOW_SOCIAL_NAV_SERVICES.map((service) => [service.slug, service]))

const serviceByNavId = new Map(WOW_SOCIAL_NAV_SERVICES.map((service) => [service.navId, service]))

export function getWowSocialNavService(slug: string): WowSocialNavService | undefined {
  return serviceBySlug.get(slug)
}

export function getWowSocialNavServiceByNavId(navId: string): WowSocialNavService | undefined {
  return serviceByNavId.get(navId)
}
