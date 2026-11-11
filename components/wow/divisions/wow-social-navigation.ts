import type { NavigationData } from '@/components/wow/nav/navigation-types'
import { wowSocialMegaNavHref } from '@/data/wowSocialMegaNavRoutes'

const panel = (
  title: string,
  description: string,
  includes: string[],
  ctaLabel = 'Learn more',
) => ({
  title,
  description,
  includes,
  ctaLabel,
  image: 'default' as const,
})

const link = (id: string, label: string, description: string) => ({
  id,
  label,
  description,
  type: 'link' as const,
  href: wowSocialMegaNavHref(id),
  detailPanel: id,
})

/** WOW Social mega-nav — Figma-aligned services and detail panels. */
export const wowSocialNavigation = {
  detailPanels: {
    default: panel(
      'Social Media Strategy & Management',
      'Build a stronger social presence with strategic planning, consistent management, and audience-focused campaigns.',
      [
        'Social media strategy & planning',
        'Account & platform management',
        'Content calendars & scheduling',
        'Performance tracking & optimization',
      ],
    ),
    socialMediaStrategyManagement: panel(
      'Social Media Strategy & Management',
      'Build a stronger social presence with strategic planning, consistent management, and audience-focused campaigns.',
      [
        'Social media strategy & planning',
        'Account & platform management',
        'Content calendars & scheduling',
        'Performance tracking & optimization',
      ],
    ),
    socialInfluencerContentCreation: panel(
      'Social & Influencer Content Creation',
      'Capture attention and grow engagement through creative content and authentic influencer collaborations.',
      [
        'Social media content creation',
        'Reels & short-form videos',
        'Influencer partnerships & campaigns',
        'Creative storytelling & branded content',
      ],
    ),
    paidSocialAdvertisingCommunityManagement: panel(
      'Paid Social Advertising & Community Management',
      'Grow your reach, drive conversions, and build stronger communities through targeted social campaigns.',
      [
        'Paid social advertising campaigns',
        'Audience targeting & retargeting',
        'Community engagement & moderation',
        'Ad performance & conversion tracking',
      ],
    ),
  },
  items: [
    {
      id: 'services',
      label: 'Services',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'socialMediaStrategyManagement',
        columns: [
          {
            id: 'servicesList',
            title: null,
            items: [
              link(
                'socialMediaStrategyManagement',
                'Social Media Strategy & Management',
                'Plan smarter. Grow your presence.',
              ),
              link(
                'socialInfluencerContentCreation',
                'Social & Influencer Content Creation',
                'Create content that connects.',
              ),
              link(
                'paidSocialAdvertisingCommunityManagement',
                'Paid Social Advertising & Community Management',
                'Reach more people. Build engagement.',
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'services',
            title: 'Services',
            items: [
              {
                id: 'socialMediaStrategyManagement',
                label: 'Social Media Strategy & Management',
                description: 'Plan smarter. Grow your presence.',
                href: wowSocialMegaNavHref('socialMediaStrategyManagement'),
              },
              {
                id: 'socialInfluencerContentCreation',
                label: 'Social & Influencer Content Creation',
                description: 'Create content that connects.',
                href: wowSocialMegaNavHref('socialInfluencerContentCreation'),
              },
              {
                id: 'paidSocialAdvertisingCommunityManagement',
                label: 'Paid Social Advertising & Community Management',
                description: 'Reach more people. Build engagement.',
                href: wowSocialMegaNavHref('paidSocialAdvertisingCommunityManagement'),
              },
            ],
          },
        ],
      },
    },
    {
      id: 'ourWork',
      label: 'Our Work',
      navKind: 'link' as const,
      href: '/portfolio',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'ourWork',
        columns: [],
      },
      mobile: { pages: [] },
    },
    {
      id: 'packages',
      label: 'Packages',
      navKind: 'link' as const,
      href: '/packages/brand-authority',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'packages',
        columns: [],
      },
      mobile: { pages: [] },
    },
    {
      id: 'about',
      label: 'About',
      navKind: 'link' as const,
      href: '/about',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'about',
        columns: [],
      },
      mobile: { pages: [] },
    },
  ],
} as unknown as NavigationData
