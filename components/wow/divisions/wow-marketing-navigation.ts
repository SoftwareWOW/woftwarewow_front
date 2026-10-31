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

const serviceHref = '/marketing#services'
const solutionsHref = '/marketing#solutions'

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
  detailPanel: 'default' as const,
})

/** WOW Marketing mega-nav — Figma-aligned services, solutions, and detail panels. */
export const wowMarketingNavigation = {
  detailPanels: {
    default: panel(
      'Search Engine Optimization',
      'Improve search visibility, attract qualified visitors, and grow your business through smarter SEO strategies.',
      [
        'Keyword research & strategy',
        'On-page & technical SEO',
        'Content & website optimization',
        'Search performance monitoring',
      ],
    ),
    searchEngineOptimization: panel(
      'Search Engine Optimization',
      'Improve search visibility, attract qualified visitors, and grow your business through smarter SEO strategies.',
      [
        'Keyword research & strategy',
        'On-page & technical SEO',
        'Content & website optimization',
        'Search performance monitoring',
      ],
    ),
    payPerClickAdvertising: panel(
      'Pay-Per-Click Advertising',
      'Reach the right audience, drive conversions, and maximize returns with targeted paid advertising.',
      [
        'Google Ads campaign management',
        'Search & display advertising',
        'Audience targeting & remarketing',
        'Conversion tracking & optimization',
      ],
    ),
    socialMediaMarketing: panel(
      'Social Media Marketing',
      'Grow your audience, strengthen engagement, and turn social media into a powerful marketing channel.',
      [
        'Social media marketing strategy',
        'Paid social advertising',
        'Campaign planning & execution',
        'Audience engagement & growth',
      ],
    ),
    contentMarketing: panel(
      'Content Marketing',
      'Attract, educate, and convert your audience with valuable content that builds trust and drives action.',
      [
        'Content strategy & planning',
        'Blog & article creation',
        'SEO-focused content',
        'Content distribution & optimization',
      ],
    ),
    emailMarketing: panel(
      'Email Marketing',
      'Build stronger customer relationships with targeted email campaigns.',
      [
        'Email campaign strategy',
        'Newsletter design & management',
        'Audience segmentation',
        'Email performance optimization',
      ],
    ),
    marketingAutomationService: panel(
      'Marketing Automation',
      'Automate repetitive marketing tasks and personalize customer journeys.',
      [
        'Automated marketing workflows',
        'Lead nurturing sequences',
        'CRM & marketing integrations',
        'Customer journey automation',
      ],
    ),
    leadGenerationService: panel(
      'Lead Generation',
      'Attract qualified prospects, capture their interest, and turn more opportunities into potential customers.',
      [
        'Lead generation campaigns',
        'Landing pages & conversion funnels',
        'Lead capture & qualification',
        'Lead nurturing strategies',
      ],
    ),
    analyticsReporting: panel(
      'Analytics & Reporting',
      'Turn marketing data into insights that drive better decisions.',
      [
        'Marketing performance dashboards',
        'Conversion & event tracking',
        'Campaign analytics & reporting',
        'ROI & attribution analysis',
      ],
    ),
    localSeo: panel(
      'Local SEO',
      'Boost your local visibility and attract nearby customers actively searching for businesses like yours.',
      [
        'Google Business Profile optimization',
        'Local keyword targeting',
        'Business listings & citations',
        'Local search performance tracking',
      ],
    ),
    digitalStrategy: panel(
      'Digital Strategy',
      'Build a smarter marketing roadmap aligned with your goals.',
      [
        'Digital marketing audits',
        'Audience & competitor research',
        'Multi-channel marketing planning',
        'Growth roadmaps & KPIs',
      ],
    ),
    brandAwarenessVisibility: panel(
      'Brand Awareness & Visibility',
      'Get your brand noticed, expand your reach, and build a stronger presence across digital channels.',
      [
        'Brand visibility campaigns',
        'SEO & content marketing',
        'Social media advertising',
        'Audience reach & awareness tracking',
      ],
    ),
    leadGenerationCustomerAcquisition: panel(
      'Lead Generation & Customer Acquisition',
      'Attract the right prospects, generate quality leads, and turn more opportunities into paying customers.',
      [
        'Targeted lead generation campaigns',
        'Landing pages & conversion funnels',
        'Lead nurturing & automation',
        'Customer acquisition optimization',
      ],
    ),
    ecommerceSalesGrowth: panel(
      'eCommerce & Sales Growth',
      'Drive more online sales, improve conversions, and grow revenue with performance-focused eCommerce marketing.',
      [
        'eCommerce advertising campaigns',
        'Shopping & product ads',
        'Conversion rate optimization',
        'Retargeting & repeat purchase campaigns',
      ],
    ),
    productLaunchGoToMarket: panel(
      'Product Launch & Go-to-Market',
      'Launch with confidence, reach your ideal audience, and turn new ideas into market opportunities.',
      [
        'Go-to-market strategy & planning',
        'Launch campaigns & promotions',
        'Audience targeting & positioning',
        'Launch performance tracking',
      ],
    ),
    customerRetentionEngagement: panel(
      'Customer Retention & Engagement',
      'Strengthen customer relationships, encourage repeat business, and build lasting loyalty through personalized marketing.',
      [
        'Customer retention campaigns',
        'Email marketing & automation',
        'Personalized customer journeys',
        'Re-engagement & loyalty strategies',
      ],
    ),
    marketingPerformanceOptimization: panel(
      'Marketing Performance & Optimization',
      'Improve campaign results, optimize marketing spend, and achieve better returns through continuous performance improvements.',
      [
        'Marketing performance audits',
        'Campaign & conversion optimization',
        'A/B testing & experimentation',
        'ROI tracking & budget optimization',
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
        defaultSelection: 'searchEngineOptimization',
        columns: [
          {
            id: 'servicesCol1',
            title: null,
            items: [
              link(
                'searchEngineOptimization',
                'Search Engine Optimization',
                'Improve your search rankings and attract more organic traffic.',
                serviceHref,
              ),
              link(
                'payPerClickAdvertising',
                'Pay-Per-Click Advertising',
                'Reach ready-to-buy customers with targeted paid advertising.',
                serviceHref,
              ),
              link(
                'socialMediaMarketing',
                'Social Media Marketing',
                'Build your audience, increase engagement, and grow your brand.',
                serviceHref,
              ),
              link(
                'contentMarketing',
                'Content Marketing',
                'Attract and engage customers with content that delivers value.',
                serviceHref,
              ),
              link(
                'emailMarketing',
                'Email Marketing',
                'Build stronger customer relationships with targeted email campaigns.',
                serviceHref,
              ),
            ],
          },
          {
            id: 'servicesCol2',
            title: null,
            items: [
              link(
                'marketingAutomationService',
                'Marketing Automation',
                'Automate repetitive marketing tasks and personalize customer journeys.',
                serviceHref,
              ),
              link(
                'leadGenerationService',
                'Lead Generation',
                'Attract qualified prospects and turn interest into opportunities.',
                serviceHref,
              ),
              link(
                'analyticsReporting',
                'Analytics & Reporting',
                'Turn marketing data into insights that drive better decisions.',
                serviceHref,
              ),
              link(
                'localSeo',
                'Local SEO',
                'Get discovered by nearby customers searching for your business.',
                serviceHref,
              ),
              link(
                'digitalStrategy',
                'Digital Strategy',
                'Build a smarter marketing roadmap aligned with your goals.',
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
                id: 'searchEngineOptimization',
                label: 'Search Engine Optimization',
                description: 'Improve your search rankings and attract more organic traffic.',
                href: serviceHref,
              },
              {
                id: 'payPerClickAdvertising',
                label: 'Pay-Per-Click Advertising',
                description: 'Reach ready-to-buy customers with targeted paid advertising.',
                href: serviceHref,
              },
              {
                id: 'socialMediaMarketing',
                label: 'Social Media Marketing',
                description: 'Build your audience, increase engagement, and grow your brand.',
                href: serviceHref,
              },
              {
                id: 'contentMarketing',
                label: 'Content Marketing',
                description: 'Attract and engage customers with content that delivers value.',
                href: serviceHref,
              },
              {
                id: 'emailMarketing',
                label: 'Email Marketing',
                description: 'Build stronger customer relationships with targeted email campaigns.',
                href: serviceHref,
              },
              {
                id: 'marketingAutomationService',
                label: 'Marketing Automation',
                description: 'Automate repetitive marketing tasks and personalize customer journeys.',
                href: serviceHref,
              },
              {
                id: 'leadGenerationService',
                label: 'Lead Generation',
                description: 'Attract qualified prospects and turn interest into opportunities.',
                href: serviceHref,
              },
              {
                id: 'analyticsReporting',
                label: 'Analytics & Reporting',
                description: 'Turn marketing data into insights that drive better decisions.',
                href: serviceHref,
              },
              {
                id: 'localSeo',
                label: 'Local SEO',
                description: 'Get discovered by nearby customers searching for your business.',
                href: serviceHref,
              },
              {
                id: 'digitalStrategy',
                label: 'Digital Strategy',
                description: 'Build a smarter marketing roadmap aligned with your goals.',
                href: serviceHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'solutions',
      label: 'Solutions',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'brandAwarenessVisibility',
        columns: [
          {
            id: 'solutionsCol1',
            title: null,
            items: [
              link(
                'brandAwarenessVisibility',
                'Brand Awareness & Visibility',
                'Get your brand noticed and reach more of the right people.',
                solutionsHref,
              ),
              link(
                'leadGenerationCustomerAcquisition',
                'Lead Generation & Customer Acquisition',
                'Attract quality leads and convert them into new customers.',
                solutionsHref,
              ),
              link(
                'ecommerceSalesGrowth',
                'eCommerce & Sales Growth',
                'Drive more online sales and turn visitors into buyers.',
                solutionsHref,
              ),
            ],
          },
          {
            id: 'solutionsCol2',
            title: null,
            items: [
              link(
                'productLaunchGoToMarket',
                'Product Launch & Go-to-Market',
                'Launch with confidence and reach your ideal customers faster.',
                solutionsHref,
              ),
              link(
                'customerRetentionEngagement',
                'Customer Retention & Engagement',
                'Keep customers engaged, loyal, and coming back for more.',
                solutionsHref,
              ),
              link(
                'marketingPerformanceOptimization',
                'Marketing Performance & Optimization',
                'Improve campaign results and make every marketing dollar count.',
                solutionsHref,
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'solutions',
            title: 'Solutions',
            items: [
              {
                id: 'brandAwarenessVisibility',
                label: 'Brand Awareness & Visibility',
                description: 'Get your brand noticed and reach more of the right people.',
                href: solutionsHref,
              },
              {
                id: 'leadGenerationCustomerAcquisition',
                label: 'Lead Generation & Customer Acquisition',
                description: 'Attract quality leads and convert them into new customers.',
                href: solutionsHref,
              },
              {
                id: 'ecommerceSalesGrowth',
                label: 'eCommerce & Sales Growth',
                description: 'Drive more online sales and turn visitors into buyers.',
                href: solutionsHref,
              },
              {
                id: 'productLaunchGoToMarket',
                label: 'Product Launch & Go-to-Market',
                description: 'Launch with confidence and reach your ideal customers faster.',
                href: solutionsHref,
              },
              {
                id: 'customerRetentionEngagement',
                label: 'Customer Retention & Engagement',
                description: 'Keep customers engaged, loyal, and coming back for more.',
                href: solutionsHref,
              },
              {
                id: 'marketingPerformanceOptimization',
                label: 'Marketing Performance & Optimization',
                description: 'Improve campaign results and make every marketing dollar count.',
                href: solutionsHref,
              },
            ],
          },
        ],
      },
    },
    {
      id: 'caseStudies',
      label: 'Case Studies',
      navKind: 'link' as const,
      href: '/case-study',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'caseStudies',
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
