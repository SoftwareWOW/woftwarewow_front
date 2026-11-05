export type WowMarketingOffering = {
  navId: string
  slug: string
  kind: 'service' | 'solution'
  title: string
  headline: string
  description: string
  includes: string[]
}

export const WOW_MARKETING_NAV_SERVICES: WowMarketingOffering[] = [
  {
    navId: 'searchEngineOptimization',
    slug: 'search-engine-optimization',
    kind: 'service',
    title: 'Search Engine Optimization',
    headline: 'Get found. Get chosen.',
    description:
      'Improve your search visibility with technical SEO, keyword strategy, content optimization, and ongoing SEO performance reporting from WOW Marketing.',
    includes: [
      'SEO Strategy & Research',
      'Technical SEO',
      'On-Page SEO',
      'SEO Content Strategy',
      'Authority & Off-Page SEO',
      'SEO Reporting & Optimization',
    ],
  },
  {
    navId: 'payPerClickAdvertising',
    slug: 'pay-per-click-advertising',
    kind: 'service',
    title: 'Pay-Per-Click Advertising',
    headline: 'Reach the right people. Drive real results.',
    description:
      'Reach the right audience with PPC advertising, Google Ads management, targeted campaigns, conversion tracking, and ongoing optimization from WOW Marketing.',
    includes: [
      'Google Ads Management',
      'Search & Display Advertising',
      'Audience Targeting & Remarketing',
      'Ad Creative & Copywriting',
      'Landing Page Optimization',
      'Conversion Tracking & Analytics',
    ],
  },
  {
    navId: 'socialMediaMarketing',
    slug: 'social-media-marketing',
    kind: 'service',
    title: 'Social Media Marketing',
    headline: 'Social Media Marketing That Builds Momentum.',
    description:
      'Grow your audience, strengthen engagement, and turn social media into a powerful marketing channel.',
    includes: [
      'Social media marketing strategy',
      'Paid social advertising',
      'Campaign planning & execution',
      'Audience engagement & growth',
    ],
  },
  {
    navId: 'contentMarketing',
    slug: 'content-marketing',
    kind: 'service',
    title: 'Content Marketing',
    headline: 'Content Marketing That Earns Trust.',
    description:
      'Attract, educate, and convert your audience with valuable content that builds trust and drives action.',
    includes: [
      'Content strategy & planning',
      'Blog & article creation',
      'SEO-focused content',
      'Content distribution & optimization',
    ],
  },
  {
    navId: 'emailMarketing',
    slug: 'email-marketing',
    kind: 'service',
    title: 'Email Marketing',
    headline: 'Email Marketing That Keeps Customers Close.',
    description: 'Build stronger customer relationships with targeted email campaigns.',
    includes: [
      'Email campaign strategy',
      'Newsletter design & management',
      'Audience segmentation',
      'Email performance optimization',
    ],
  },
  {
    navId: 'marketingAutomationService',
    slug: 'marketing-automation',
    kind: 'service',
    title: 'Marketing Automation',
    headline: 'Marketing Automation That Scales Personalization.',
    description: 'Automate repetitive marketing tasks and personalize customer journeys.',
    includes: [
      'Automated marketing workflows',
      'Lead nurturing sequences',
      'CRM & marketing integrations',
      'Customer journey automation',
    ],
  },
  {
    navId: 'leadGenerationService',
    slug: 'lead-generation',
    kind: 'service',
    title: 'Lead Generation',
    headline: 'Lead Generation That Fills Your Pipeline.',
    description:
      'Attract qualified prospects, capture their interest, and turn more opportunities into potential customers.',
    includes: [
      'Lead generation campaigns',
      'Landing pages & conversion funnels',
      'Lead capture & qualification',
      'Lead nurturing strategies',
    ],
  },
  {
    navId: 'analyticsReporting',
    slug: 'analytics-reporting',
    kind: 'service',
    title: 'Analytics & Reporting',
    headline: 'Analytics & Reporting You Can Act On.',
    description: 'Turn marketing data into insights that drive better decisions.',
    includes: [
      'Marketing performance dashboards',
      'Conversion & event tracking',
      'Campaign analytics & reporting',
      'ROI & attribution analysis',
    ],
  },
  {
    navId: 'localSeo',
    slug: 'local-seo',
    kind: 'service',
    title: 'Local SEO',
    headline: 'Local SEO That Puts You on the Map.',
    description:
      'Boost your local visibility and attract nearby customers actively searching for businesses like yours.',
    includes: [
      'Google Business Profile optimization',
      'Local keyword targeting',
      'Business listings & citations',
      'Local search performance tracking',
    ],
  },
  {
    navId: 'digitalStrategy',
    slug: 'digital-strategy',
    kind: 'service',
    title: 'Digital Strategy',
    headline: 'Digital Strategy Aligned With Your Goals.',
    description: 'Build a smarter marketing roadmap aligned with your goals.',
    includes: [
      'Digital marketing audits',
      'Audience & competitor research',
      'Multi-channel marketing planning',
      'Growth roadmaps & KPIs',
    ],
  },
]

export const WOW_MARKETING_NAV_SOLUTIONS: WowMarketingOffering[] = [
  {
    navId: 'brandAwarenessVisibility',
    slug: 'brand-awareness-visibility',
    kind: 'solution',
    title: 'Brand Awareness & Visibility',
    headline: 'Brand Awareness & Visibility That Expands Reach.',
    description:
      'Get your brand noticed, expand your reach, and build a stronger presence across digital channels.',
    includes: [
      'Brand visibility campaigns',
      'SEO & content marketing',
      'Social media advertising',
      'Audience reach & awareness tracking',
    ],
  },
  {
    navId: 'leadGenerationCustomerAcquisition',
    slug: 'lead-generation-customer-acquisition',
    kind: 'solution',
    title: 'Lead Generation & Customer Acquisition',
    headline: 'Lead Generation & Customer Acquisition That Converts.',
    description:
      'Attract the right prospects, generate quality leads, and turn more opportunities into paying customers.',
    includes: [
      'Targeted lead generation campaigns',
      'Landing pages & conversion funnels',
      'Lead nurturing & automation',
      'Customer acquisition optimization',
    ],
  },
  {
    navId: 'ecommerceSalesGrowth',
    slug: 'ecommerce-sales-growth',
    kind: 'solution',
    title: 'eCommerce & Sales Growth',
    headline: 'eCommerce & Sales Growth That Scales Revenue.',
    description:
      'Drive more online sales, improve conversions, and grow revenue with performance-focused eCommerce marketing.',
    includes: [
      'eCommerce advertising campaigns',
      'Shopping & product ads',
      'Conversion rate optimization',
      'Retargeting & repeat purchase campaigns',
    ],
  },
  {
    navId: 'productLaunchGoToMarket',
    slug: 'product-launch-go-to-market',
    kind: 'solution',
    title: 'Product Launch & Go-to-Market',
    headline: 'Product Launch & Go-to-Market With Confidence.',
    description:
      'Launch with confidence, reach your ideal audience, and turn new ideas into market opportunities.',
    includes: [
      'Go-to-market strategy & planning',
      'Launch campaigns & promotions',
      'Audience targeting & positioning',
      'Launch performance tracking',
    ],
  },
  {
    navId: 'customerRetentionEngagement',
    slug: 'customer-retention-engagement',
    kind: 'solution',
    title: 'Customer Retention & Engagement',
    headline: 'Customer Retention & Engagement That Lasts.',
    description:
      'Strengthen customer relationships, encourage repeat business, and build lasting loyalty through personalized marketing.',
    includes: [
      'Customer retention campaigns',
      'Email marketing & automation',
      'Personalized customer journeys',
      'Re-engagement & loyalty strategies',
    ],
  },
  {
    navId: 'marketingPerformanceOptimization',
    slug: 'marketing-performance-optimization',
    kind: 'solution',
    title: 'Marketing Performance & Optimization',
    headline: 'Marketing Performance & Optimization That Improves ROI.',
    description:
      'Improve campaign results, optimize marketing spend, and achieve better returns through continuous performance improvements.',
    includes: [
      'Marketing performance audits',
      'Campaign & conversion optimization',
      'A/B testing & experimentation',
      'ROI tracking & budget optimization',
    ],
  },
]

export function getWowMarketingNavService(slug: string): WowMarketingOffering | undefined {
  return WOW_MARKETING_NAV_SERVICES.find((item) => item.slug === slug)
}

export function getWowMarketingNavSolution(slug: string): WowMarketingOffering | undefined {
  return WOW_MARKETING_NAV_SOLUTIONS.find((item) => item.slug === slug)
}

export const WOW_MARKETING_NAV_SERVICE_SLUGS = WOW_MARKETING_NAV_SERVICES.map((item) => item.slug)

export const WOW_MARKETING_NAV_SOLUTION_SLUGS = WOW_MARKETING_NAV_SOLUTIONS.map((item) => item.slug)
