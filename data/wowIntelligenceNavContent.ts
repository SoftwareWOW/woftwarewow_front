export type WowIntelligenceOffering = {
  navId: string
  slug: string
  kind: 'service' | 'useCase'
  title: string
  headline: string
  description: string
  includes: string[]
  ctaAccent: string
  ctaMain: string
}

export const WOW_INTELLIGENCE_NAV_SERVICES: WowIntelligenceOffering[] = [
  {
    navId: 'aiAssistantsChatbots',
    slug: 'ai-assistants-chatbots',
    kind: 'service',
    title: 'AI Assistants & Chatbots',
    headline: 'Smarter conversations. Faster support.',
    description:
      'Deliver instant, intelligent conversations that improve customer experiences and save time.',
    includes: [
      'AI-powered chatbots',
      'Virtual business assistants',
      '24/7 automated responses',
      'CRM & website integrations',
    ],
    ctaAccent: 'Ready for AI',
    ctaMain: 'that answers every time?',
  },
  {
    navId: 'intelligentAutomation',
    slug: 'intelligent-automation',
    kind: 'service',
    title: 'Intelligent Automation',
    headline: 'Automate tasks. Work smarter.',
    description:
      'Automate repetitive tasks and streamline workflows with AI-powered business solutions.',
    includes: [
      'AI workflow automation',
      'Smart task processing',
      'Automated data handling',
      'Cross-platform integrations',
    ],
    ctaAccent: 'Ready to automate',
    ctaMain: 'the busy work?',
  },
  {
    navId: 'businessIntelligencePredictiveInsights',
    slug: 'business-intelligence-predictive-insights',
    kind: 'service',
    title: 'Business Intelligence & Predictive Insights',
    headline: 'Turn data into smarter decisions.',
    description:
      'Transform business data into actionable insights and smarter future-focused decisions.',
    includes: [
      'Data integration & dashboards',
      'Predictive analytics',
      'AI-powered reporting',
      'Trend & performance forecasting',
    ],
    ctaAccent: 'Ready for insights',
    ctaMain: 'you can act on?',
  },
]

export const WOW_INTELLIGENCE_NAV_USE_CASES: WowIntelligenceOffering[] = [
  {
    navId: 'useCaseSales',
    slug: 'sales',
    kind: 'useCase',
    title: 'Sales',
    headline: 'Sell smarter. Close more deals.',
    description:
      'Accelerate sales with AI-powered lead insights, automation, and smarter customer engagement.',
    includes: [
      'AI lead qualification',
      'Sales pipeline automation',
      'Predictive lead scoring',
      'Automated follow-ups',
    ],
    ctaAccent: 'Ready to grow',
    ctaMain: 'your pipeline?',
  },
  {
    navId: 'useCaseMarketing',
    slug: 'marketing',
    kind: 'useCase',
    title: 'Marketing',
    headline: 'Smarter campaigns. Better results.',
    description:
      'Make marketing smarter with AI-driven personalization, automation, and actionable audience insights.',
    includes: [
      'AI audience segmentation',
      'Campaign performance insights',
      'Personalized marketing automation',
      'Customer behavior analysis',
    ],
    ctaAccent: 'Ready for marketing',
    ctaMain: 'that learns faster?',
  },
  {
    navId: 'useCaseCustomerService',
    slug: 'customer-service',
    kind: 'useCase',
    title: 'Customer Service',
    headline: 'Faster support. Happier customers.',
    description:
      'Deliver faster, more personalized support with intelligent AI-powered customer service solutions.',
    includes: [
      'AI customer support chatbots',
      'Automated inquiry handling',
      'Smart ticket routing',
      '24/7 self-service assistance',
    ],
    ctaAccent: 'Ready to support',
    ctaMain: 'customers around the clock?',
  },
  {
    navId: 'useCaseOperations',
    slug: 'operations',
    kind: 'useCase',
    title: 'Operations',
    headline: 'Simplify workflows. Boost efficiency.',
    description:
      'Simplify daily operations, reduce manual work, and improve efficiency through intelligent automation.',
    includes: [
      'Business process automation',
      'Intelligent document processing',
      'Workflow & task optimization',
      'Operational performance insights',
    ],
    ctaAccent: 'Ready to streamline',
    ctaMain: 'how your team works?',
  },
]

export const WOW_INTELLIGENCE_NAV_SERVICE_SLUGS = WOW_INTELLIGENCE_NAV_SERVICES.map((item) => item.slug)
export const WOW_INTELLIGENCE_NAV_USE_CASE_SLUGS = WOW_INTELLIGENCE_NAV_USE_CASES.map((item) => item.slug)

const serviceBySlug = new Map(WOW_INTELLIGENCE_NAV_SERVICES.map((item) => [item.slug, item]))
const useCaseBySlug = new Map(WOW_INTELLIGENCE_NAV_USE_CASES.map((item) => [item.slug, item]))

export function getWowIntelligenceNavService(slug: string): WowIntelligenceOffering | undefined {
  return serviceBySlug.get(slug)
}

export function getWowIntelligenceNavUseCase(slug: string): WowIntelligenceOffering | undefined {
  return useCaseBySlug.get(slug)
}
