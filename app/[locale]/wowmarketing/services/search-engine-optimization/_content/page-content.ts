/** From public/images/wow — swap when dedicated SEO art is ready. */
const SEO_PLACEHOLDER_IMAGE = '/images/wow/Hero/Growth/image (1).png'

export const SEO_PAGE_METADATA = {
  title: 'SEO Services & Organic Search Growth | WOW Marketing',
  description:
    'Improve your search visibility with technical SEO, keyword strategy, content optimization, and ongoing SEO performance reporting from WOW Marketing.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SEARCH ENGINE OPTIMIZATION',
    title: 'Get found.',
    italicTitle: 'Get chosen.',
    description:
      'Help the right customers discover your business. We combine technical SEO, content strategy, and ongoing optimization to turn search visibility into meaningful growth.',
    images: [{ src: SEO_PLACEHOLDER_IMAGE, alt: 'Search engine optimization for your business' }],
    primaryCta: { label: 'Talk to an SEO Expert', href: '/contact' },
    secondaryCta: { label: 'Explore Our Work', href: '/portfolio' },
    showTrustAvatars: false,
  },
  growthChallenges: {
    eyebrow: 'YOUR SEO CHALLENGES',
    title: 'Great businesses deserve to be',
    accentTitle: 'found.',
    description:
      "If customers can't discover you in search, you're missing opportunities before the conversation even begins.",
    items: [
      {
        title: 'Low Search Visibility',
        description: "Your website isn't appearing for the searches that matter.",
      },
      {
        title: 'Wrong Website Traffic',
        description: 'Visitors arrive, but few are relevant to your business.',
      },
      {
        title: 'Technical SEO Issues',
        description: 'Site structure, indexing, or performance limits discoverability.',
      },
      {
        title: 'Content Gaps',
        description: "Your pages don't fully answer what customers are searching for.",
      },
      {
        title: 'Unclear SEO Performance',
        description: "It's difficult to connect organic traffic with business results.",
      },
    ],
    ctaLabel: "Let's Improve Your Visibility",
  },
  everythingToGrow: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'SEO that works',
    accentTitle: 'beyond rankings.',
    description:
      'We improve the technical, content, and strategic foundations that help your business compete in search.',
    items: [
      {
        title: 'SEO Strategy & Research',
        description: 'Identify search opportunities, competitors, and priority keywords.',
      },
      {
        title: 'Technical SEO',
        description: 'Improve crawlability, indexing, site structure, and technical health.',
      },
      {
        title: 'On-Page SEO',
        description: 'Optimize pages, metadata, internal links, and search relevance.',
      },
      {
        title: 'SEO Content Strategy',
        description: 'Create and improve content around customer search intent.',
      },
      {
        title: 'Authority & Off-Page SEO',
        description: 'Strengthen credibility through relevant, quality signals.',
      },
      {
        title: 'SEO Reporting & Optimization',
        description: 'Track visibility, traffic, conversions, and opportunities.',
      },
    ],
    ctaLabel: 'Get Your SEO Strategy',
  },
  connectedGrowthSystem: {
    eyebrow: 'OUR SEO FRAMEWORK',
    title: 'From search opportunity to',
    accentTitle: 'organic growth.',
    description:
      'A connected SEO process built around your audience, website, and business goals.',
    footerTagline: null as string | null,
    ctaLabel: 'Build Your SEO Plan',
    frameworkStages: [
      {
        id: 1,
        step: 'Stage 01',
        title: 'Discover',
        items: ['Audit your website, competitors, and search opportunities.'],
      },
      {
        id: 2,
        step: 'Stage 02',
        title: 'Optimize',
        items: ['Improve technical health, structure, and on-page relevance.'],
      },
      {
        id: 3,
        step: 'Stage 03',
        title: 'Create',
        items: ['Build useful content around real customer searches.'],
      },
      {
        id: 4,
        step: 'Stage 04',
        title: 'Strengthen',
        items: ['Improve internal linking and relevant authority signals.'],
      },
      {
        id: 5,
        step: 'Stage 05',
        title: 'Grow',
        items: ['Measure performance and refine priorities over time.'],
      },
    ],
  },
  builtAroundGoals: {
    eyebrow: 'BUILT AROUND YOUR GOALS',
    title: 'The right SEO strategy for',
    accentTitle: 'your business.',
    description:
      'No two businesses compete in search the same way. Your strategy should reflect your audience, market, and priorities.',
    items: [
      {
        title: 'Business Goals',
        description: 'Align SEO with visibility, leads, and revenue opportunities.',
      },
      {
        title: 'Search Intent',
        description: 'Target the questions and searches that matter to your customers.',
      },
      {
        title: 'Competition',
        description: 'Identify opportunities within your industry and search landscape.',
      },
      {
        title: 'Website Readiness',
        description: "Prioritize improvements based on your site's current condition.",
      },
      {
        title: 'Resources & Timeline',
        description: 'Build a realistic plan around your capacity and priorities.',
      },
    ],
    ctaLabel: 'Plan Your SEO Growth',
  },
  specialistTeams: {
    variant: 'metrics' as const,
    eyebrow: 'SEO PERFORMANCE',
    title: "Know what's working.",
    accentTitle: 'Know what to improve.',
    description:
      'We focus on the signals that show how your search presence is developing.',
    featureImage: {
      src: SEO_PLACEHOLDER_IMAGE,
      alt: 'SEO performance overview',
    },
    items: [
      {
        title: 'Search Visibility',
        description: 'Track rankings and impressions for relevant searches.',
      },
      {
        title: 'Organic Traffic',
        description: 'Understand how visitors discover your website.',
      },
      {
        title: 'Engagement',
        description: 'See how organic visitors interact with your content.',
      },
      {
        title: 'Conversions',
        description: 'Measure leads and actions generated from search.',
      },
      {
        title: 'Technical Health',
        description: 'Monitor indexing and important site issues.',
      },
      {
        title: 'Growth Opportunities',
        description: 'Identify pages and keywords worth improving.',
      },
    ],
  },
  cta: {
    accentText: 'Ready to get found online?',
    mainText: '',
    ariaLabel: 'Talk to an SEO Expert',
  },
}
