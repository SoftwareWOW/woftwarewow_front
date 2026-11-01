import type { NavigationData } from '@/components/wow/nav/navigation-types'

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

const serviceHref = '/impact#services'

const link = (
  id: string,
  label: string,
  description: string,
  href: string,
) => ({
  id,
  label,
  description,
  type: 'link' as const,
  href,
  detailPanel: id,
})

/** WOW Impact mega-nav — Figma-aligned services and detail panels. */
export const wowImpactNavigation = {
  detailPanels: {
    default: panel(
      'Personal Branding',
      'Build an authentic personal brand that showcases your expertise and sets you apart.',
      [
        'Personal brand strategy',
        'Visual identity & positioning',
        'Personal website & portfolio',
        'Social media profile optimization',
      ],
    ),
    personalBranding: panel(
      'Personal Branding',
      'Build an authentic personal brand that showcases your expertise and sets you apart.',
      [
        'Personal brand strategy',
        'Visual identity & positioning',
        'Personal website & portfolio',
        'Social media profile optimization',
      ],
    ),
    thoughtLeadership: panel(
      'Thought Leadership',
      'Establish your authority, share valuable insights, and become a trusted industry voice.',
      [
        'Thought leadership strategy',
        'Expert content creation',
        'LinkedIn & professional positioning',
        'Articles & opinion pieces',
      ],
    ),
    reputationVisibility: panel(
      'Reputation & Visibility',
      'Strengthen your credibility, grow your visibility, and shape how the world sees you.',
      [
        'Online reputation management',
        'Digital presence optimization',
        'Personal PR & visibility campaigns',
        'Reputation monitoring & insights',
      ],
    ),
    speakingMediaPresence: panel(
      'Speaking & Media Presence',
      'Communicate confidently, expand your reach, and make a lasting impression across public platforms.',
      [
        'Public speaking coaching',
        'Media presence training',
        'Interview & presentation preparation',
        'Speaker profile & media kit development',
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
        defaultSelection: 'personalBranding',
        columns: [
          {
            id: 'servicesList',
            title: null,
            items: [
              link(
                'personalBranding',
                'Personal Branding',
                'Build your identity. Stand out.',
                serviceHref,
              ),
              link(
                'thoughtLeadership',
                'Thought Leadership',
                'Share expertise. Inspire influence.',
                serviceHref,
              ),
              link(
                'reputationVisibility',
                'Reputation & Visibility',
                'Build trust. Grow recognition.',
                serviceHref,
              ),
              link(
                'speakingMediaPresence',
                'Speaking & Media Presence',
                'Amplify your voice and impact.',
                serviceHref,
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
                id: 'personalBranding',
                label: 'Personal Branding',
                description: 'Build your identity. Stand out.',
                href: serviceHref,
              },
              {
                id: 'thoughtLeadership',
                label: 'Thought Leadership',
                description: 'Share expertise. Inspire influence.',
                href: serviceHref,
              },
              {
                id: 'reputationVisibility',
                label: 'Reputation & Visibility',
                description: 'Build trust. Grow recognition.',
                href: serviceHref,
              },
              {
                id: 'speakingMediaPresence',
                label: 'Speaking & Media Presence',
                description: 'Amplify your voice and impact.',
                href: serviceHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'successStories',
      label: 'Success Stories',
      navKind: 'link' as const,
      href: '/case-study',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'successStories',
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
