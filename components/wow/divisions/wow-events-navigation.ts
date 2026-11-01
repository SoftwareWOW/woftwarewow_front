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

const ourEventsHref = '/events#experiences'
const servicesHref = '/events#services'

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

/** WOW Events mega-nav — Figma-aligned Our Events, Services, and detail panels. */
export const wowEventsNavigation = {
  detailPanels: {
    default: panel(
      'Conferences & Summits',
      'Bring industry leaders together to exchange ideas, inspire innovation, and create opportunities.',
      [
        'Industry conferences',
        'Business & leadership summits',
        'Expert panels & discussions',
        'Educational sessions & workshops',
      ],
    ),
    ourEventsConferencesSummits: panel(
      'Conferences & Summits',
      'Bring industry leaders together to exchange ideas, inspire innovation, and create opportunities.',
      [
        'Industry conferences',
        'Business & leadership summits',
        'Expert panels & discussions',
        'Educational sessions & workshops',
      ],
    ),
    ourEventsBrandLaunches: panel(
      'Brand & Product Launches',
      'Celebrate bold ideas with memorable launches that capture attention and spark excitement.',
      [
        'Product unveiling events',
        'Brand launch experiences',
        'Media & press showcases',
        'Interactive product demonstrations',
      ],
    ),
    ourEventsCorporateExperiences: panel(
      'Corporate Experiences',
      'Create engaging corporate experiences that strengthen teams, celebrate milestones, and inspire collaboration.',
      [
        'Corporate gatherings',
        'Team-building experiences',
        'Company celebrations',
        'Employee engagement events',
      ],
    ),
    ourEventsNetworkingCommunity: panel(
      'Networking & Community',
      'Bring people together through meaningful gatherings that build relationships and strengthen communities.',
      [
        'Professional networking events',
        'Business community meetups',
        'Industry mixers & gatherings',
        'Community engagement activities',
      ],
    ),
    ourEventsHybridVirtual: panel(
      'Hybrid & Virtual Events',
      'Connect audiences everywhere with engaging digital experiences that bring people together.',
      [
        'Virtual conferences & summits',
        'Hybrid event experiences',
        'Live webinars & workshops',
        'Online networking sessions',
      ],
    ),
    eventsServicesConferencesCorporate: panel(
      'Conferences & Corporate Events',
      'Plan and deliver professional events that engage audiences and leave lasting impressions.',
      [
        'Event planning & coordination',
        'Venue & vendor management',
        'Guest registration & management',
        'On-site event execution',
      ],
    ),
    eventsServicesBrandLaunches: panel(
      'Brand & Product Launches',
      'Turn your next launch into a memorable experience that builds excitement and visibility.',
      [
        'Launch strategy & planning',
        'Event branding & creative design',
        'Product showcases & demonstrations',
        'Launch promotion & media coordination',
      ],
    ),
    eventsServicesNetworkingCommunity: panel(
      'Networking & Community Events',
      'Create purposeful gatherings that spark conversations, strengthen relationships, and grow communities.',
      [
        'Networking event planning',
        'Community engagement activities',
        'Guest invitations & registration',
        'Event promotion & coordination',
      ],
    ),
    eventsServicesHybridVirtual: panel(
      'Hybrid & Virtual Experiences',
      'Deliver seamless online and hybrid events that connect and engage audiences anywhere.',
      [
        'Virtual event planning',
        'Live streaming & production',
        'Hybrid event coordination',
        'Interactive audience engagement',
      ],
    ),
  },
  items: [
    {
      id: 'ourEvents',
      label: 'Our Events',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'ourEventsConferencesSummits',
        columns: [
          {
            id: 'ourEventsList',
            title: null,
            items: [
              link(
                'ourEventsConferencesSummits',
                'Conferences & Summits',
                'Big ideas. Meaningful connections.',
                ourEventsHref,
              ),
              link(
                'ourEventsBrandLaunches',
                'Brand & Product Launches',
                'Make every launch unforgettable.',
                ourEventsHref,
              ),
              link(
                'ourEventsCorporateExperiences',
                'Corporate Experiences',
                'Bring teams together. Inspire success.',
                ourEventsHref,
              ),
              link(
                'ourEventsNetworkingCommunity',
                'Networking & Community',
                'Connect people. Build communities.',
                ourEventsHref,
              ),
              link(
                'ourEventsHybridVirtual',
                'Hybrid & Virtual Events',
                'Connect audiences beyond boundaries.',
                ourEventsHref,
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'ourEvents',
            title: 'Our Events',
            items: [
              {
                id: 'ourEventsConferencesSummits',
                label: 'Conferences & Summits',
                description: 'Big ideas. Meaningful connections.',
                href: ourEventsHref,
              },
              {
                id: 'ourEventsBrandLaunches',
                label: 'Brand & Product Launches',
                description: 'Make every launch unforgettable.',
                href: ourEventsHref,
              },
              {
                id: 'ourEventsCorporateExperiences',
                label: 'Corporate Experiences',
                description: 'Bring teams together. Inspire success.',
                href: ourEventsHref,
              },
              {
                id: 'ourEventsNetworkingCommunity',
                label: 'Networking & Community',
                description: 'Connect people. Build communities.',
                href: ourEventsHref,
              },
              {
                id: 'ourEventsHybridVirtual',
                label: 'Hybrid & Virtual Events',
                description: 'Connect audiences beyond boundaries.',
                href: ourEventsHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'services',
      label: 'Services',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'eventsServicesConferencesCorporate',
        columns: [
          {
            id: 'servicesList',
            title: null,
            items: [
              link(
                'eventsServicesConferencesCorporate',
                'Conferences & Corporate Events',
                'Professional events. Exceptional experiences.',
                servicesHref,
              ),
              link(
                'eventsServicesBrandLaunches',
                'Brand & Product Launches',
                'Launch boldly. Leave an impression.',
                servicesHref,
              ),
              link(
                'eventsServicesNetworkingCommunity',
                'Networking & Community Events',
                'Create connections that matter.',
                servicesHref,
              ),
              link(
                'eventsServicesHybridVirtual',
                'Hybrid & Virtual Experiences',
                'Seamless experiences. Anywhere, anytime.',
                servicesHref,
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
                id: 'eventsServicesConferencesCorporate',
                label: 'Conferences & Corporate Events',
                description: 'Professional events. Exceptional experiences.',
                href: servicesHref,
              },
              {
                id: 'eventsServicesBrandLaunches',
                label: 'Brand & Product Launches',
                description: 'Launch boldly. Leave an impression.',
                href: servicesHref,
              },
              {
                id: 'eventsServicesNetworkingCommunity',
                label: 'Networking & Community Events',
                description: 'Create connections that matter.',
                href: servicesHref,
              },
              {
                id: 'eventsServicesHybridVirtual',
                label: 'Hybrid & Virtual Experiences',
                description: 'Seamless experiences. Anywhere, anytime.',
                href: servicesHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'pastEvents',
      label: 'Past Events',
      navKind: 'link' as const,
      href: '/portfolio/recent',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'pastEvents',
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
