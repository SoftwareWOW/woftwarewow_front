import type { CmsHeroImage } from '@/lib/strapi/cms-image'

const WOW_CARD = '/images/wow/nav/cards/pexels-pixabay-35208 1.png'
const WOW_LOC = '/images/wow/locations/landmarks/Sydney.png'
const WOW_HERO_A = '/images/wow/Hero/Growth/image (1).png'
const WOW_HERO_B = '/images/wow/Hero/Growth/image (2).png'
const WOW_HERO_C = '/images/wow/Hero/Growth/image (3).png'

export const LOCAL_SEO_PAGE_METADATA = {
  title: 'Local SEO Services & Google Maps Optimization | WOW Marketing',
  description:
    'Attract nearby customers with local SEO, Google Business Profile optimization, Google Maps visibility, local listings, and review strategies.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'LOCAL SEO',
    title: 'Be found locally.',
    italicTitle: 'Chosen confidently.',
    description:
      'Get your business noticed in local searches, reach nearby customers, and turn local visibility into real opportunities.',
    images: [
      { src: WOW_HERO_A, alt: 'Local search and maps placeholder' },
      { src: WOW_HERO_B, alt: 'Local business visibility placeholder' },
      { src: WOW_HERO_C, alt: 'Nearby customers placeholder' },
    ],
    primaryCtaLabel: 'Grow Your Local Visibility',
    secondaryCtaLabel: 'Explore Our Services',
    secondaryCtaHref: '#solutions',
  },
  whatMattersMost: {
    eyebrow: 'What Matters Most',
    title: 'Your next customer could be',
    accentTitle: 'right around the corner.',
    description: 'Make it easier for local customers to discover, trust, and choose your business.',
    image: { src: WOW_CARD, alt: 'Local customer discovering a nearby business' },
    items: [
      {
        title: 'Get Found Nearby',
        description: 'Appear in relevant local searches when customers need you.',
      },
      {
        title: 'Stand Out on Maps',
        description: 'Strengthen your presence across Google Maps and local listings.',
      },
      {
        title: 'Build Local Trust',
        description: 'Improve your reputation through accurate information and reviews.',
      },
      {
        title: 'Attract Local Leads',
        description: 'Turn nearby searches into calls, visits, and enquiries.',
      },
      {
        title: 'Stay Competitive',
        description: 'Strengthen your visibility in the areas you serve.',
      },
    ],
  },
  professionalServiceSolutions: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Make your business',
    accentTitle: 'a local favorite.',
    description: 'Improve the signals that help customers find and choose your business.',
    ctaLabel: 'Improve Your Local Presence',
    ctaAriaLabel: 'Improve your local presence with WOW Marketing',
    items: [
      {
        title: 'Google Business Profile Optimization',
        description: 'Make your business easier to discover across Google Search and Maps.',
        detailLine: 'Google Business Profile · Business details · Categories · Updates',
      },
      {
        title: 'Local Website SEO',
        description: 'Optimize your website for relevant local searches.',
        detailLine: 'Local keywords · Location pages · On-page SEO · Internal links',
      },
      {
        title: 'Local Listings & Citations',
        description: 'Keep your business information accurate and consistent.',
        detailLine: 'Business directories · NAP consistency · Listings · Citations',
      },
      {
        title: 'Reviews & Local Reputation',
        description: 'Build trust through stronger review visibility and engagement.',
        detailLine: 'Review strategy · Review monitoring · Response guidance · Reputation',
      },
    ],
  },
  clientJourney: {
    eyebrow: 'FROM SEARCH TO CUSTOMER',
    title: 'From nearby searches to',
    accentTitle: 'real connections.',
    description: 'Help customers discover your business and take their next step.',
    image: { src: WOW_LOC, alt: 'Local customer journey' },
    steps: [
      {
        number: '01',
        title: 'Get Discovered',
        description: 'Appear in relevant local searches and map results.',
      },
      {
        number: '02',
        title: 'Build Trust',
        description: 'Show accurate details, useful content, and customer reviews.',
      },
      {
        number: '03',
        title: 'Drive Action',
        description: 'Make it easy to call, visit, book, or enquire.',
      },
      {
        number: '04',
        title: 'Keep Improving',
        description: 'Track local performance and strengthen your visibility.',
      },
    ],
  },
  connectedExpertise: {
    eyebrow: 'CONNECTED LOCAL VISIBILITY',
    title: 'One business.',
    accentTitle: 'Every local touchpoint.',
    description: 'Build a consistent presence wherever nearby customers look.',
    ctaLabel: 'Strengthen Your Local Presence',
    rows: [
      {
        id: '01',
        title: 'Google Search',
        heading: 'Local Search Visibility',
        description: 'Help customers discover your website through relevant searches.',
      },
      {
        id: '02',
        title: 'Google Maps',
        heading: 'Maps & Business Profile',
        description: 'Make your location, services, and business details easy to find.',
      },
      {
        id: '03',
        title: 'Local Listings',
        heading: 'Business Information',
        description: 'Keep your business details consistent across relevant directories.',
      },
      {
        id: '04',
        title: 'Customer Reviews',
        heading: 'Trust & Reputation',
        description: 'Strengthen credibility with authentic customer feedback.',
      },
      {
        id: '05',
        title: 'Your Website',
        heading: 'Local Landing Pages',
        description: 'Connect local searches to useful pages and clear actions.',
      },
      {
        id: '06',
        title: 'Local Insights',
        heading: 'Performance Tracking',
        description: 'Understand searches, calls, clicks, and local engagement.',
      },
    ],
  },
  recommendedSolutions: {
    eyebrow: 'WHERE WE FOCUS',
    title: 'Show up where',
    accentTitle: 'it matters most.',
    description: 'Choose the right local SEO priorities for your business.',
    items: [
      {
        number: '01',
        title: 'Local Visibility',
        description: 'Get discovered by nearby customers.',
        href: '/contact',
      },
      {
        number: '02',
        title: 'Local Trust',
        description: 'Build confidence through accurate information and reviews.',
        href: '/contact',
      },
      {
        number: '03',
        title: 'Local Conversions',
        description: 'Turn searches into calls, visits, and enquiries.',
        href: '/contact',
      },
    ],
  },
  cta: {
    accentText: 'Ready to become',
    mainText: 'the local favorite?',
    ariaLabel: 'Start local SEO with WOW Marketing',
  },
}
