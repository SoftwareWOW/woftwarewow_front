import type { NavigationData } from '@/components/wow/nav/navigation-types'
import { wowIntelligenceMegaNavHref } from '@/data/wowIntelligenceMegaNavRoutes'

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
  href: wowIntelligenceMegaNavHref(id),
  detailPanel: id,
})

/** WOW Intelligence mega-nav — Figma-aligned AI solutions, use cases, and detail panels. */
export const wowIntelligenceNavigation = {
  detailPanels: {
    default: panel(
      'AI Assistants & Chatbots',
      'Deliver instant, intelligent conversations that improve customer experiences and save time.',
      [
        'AI-powered chatbots',
        'Virtual business assistants',
        '24/7 automated responses',
        'CRM & website integrations',
      ],
    ),
    aiAssistantsChatbots: panel(
      'AI Assistants & Chatbots',
      'Deliver instant, intelligent conversations that improve customer experiences and save time.',
      [
        'AI-powered chatbots',
        'Virtual business assistants',
        '24/7 automated responses',
        'CRM & website integrations',
      ],
    ),
    intelligentAutomation: panel(
      'Intelligent Automation',
      'Automate repetitive tasks and streamline workflows with AI-powered business solutions.',
      [
        'AI workflow automation',
        'Smart task processing',
        'Automated data handling',
        'Cross-platform integrations',
      ],
    ),
    businessIntelligencePredictiveInsights: panel(
      'Business Intelligence & Predictive Insights',
      'Transform business data into actionable insights and smarter future-focused decisions.',
      [
        'Data integration & dashboards',
        'Predictive analytics',
        'AI-powered reporting',
        'Trend & performance forecasting',
      ],
    ),
    useCaseSales: panel(
      'Sales',
      'Accelerate sales with AI-powered lead insights, automation, and smarter customer engagement.',
      [
        'AI lead qualification',
        'Sales pipeline automation',
        'Predictive lead scoring',
        'Automated follow-ups',
      ],
    ),
    useCaseMarketing: panel(
      'Marketing',
      'Make marketing smarter with AI-driven personalization, automation, and actionable audience insights.',
      [
        'AI audience segmentation',
        'Campaign performance insights',
        'Personalized marketing automation',
        'Customer behavior analysis',
      ],
    ),
    useCaseCustomerService: panel(
      'Customer Service',
      'Deliver faster, more personalized support with intelligent AI-powered customer service solutions.',
      [
        'AI customer support chatbots',
        'Automated inquiry handling',
        'Smart ticket routing',
        '24/7 self-service assistance',
      ],
    ),
    useCaseOperations: panel(
      'Operations',
      'Simplify daily operations, reduce manual work, and improve efficiency through intelligent automation.',
      [
        'Business process automation',
        'Intelligent document processing',
        'Workflow & task optimization',
        'Operational performance insights',
      ],
    ),
  },
  items: [
    {
      id: 'aiSolutions',
      label: 'AI Solutions',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'aiAssistantsChatbots',
        columns: [
          {
            id: 'aiSolutionsList',
            title: null,
            items: [
              link(
                'aiAssistantsChatbots',
                'AI Assistants & Chatbots',
                'Smarter conversations. Faster support.',
              ),
              link('intelligentAutomation', 'Intelligent Automation', 'Automate tasks. Work smarter.'),
              link(
                'businessIntelligencePredictiveInsights',
                'Business Intelligence & Predictive Insights',
                'Turn data into smarter decisions.',
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'aiSolutions',
            title: 'AI Solutions',
            items: [
              {
                id: 'aiAssistantsChatbots',
                label: 'AI Assistants & Chatbots',
                description: 'Smarter conversations. Faster support.',
                href: wowIntelligenceMegaNavHref('aiAssistantsChatbots'),
              },
              {
                id: 'intelligentAutomation',
                label: 'Intelligent Automation',
                description: 'Automate tasks. Work smarter.',
                href: wowIntelligenceMegaNavHref('intelligentAutomation'),
              },
              {
                id: 'businessIntelligencePredictiveInsights',
                label: 'Business Intelligence & Predictive Insights',
                description: 'Turn data into smarter decisions.',
                href: wowIntelligenceMegaNavHref('businessIntelligencePredictiveInsights'),
              },
            ],
          },
        ],
      },
    },
    {
      id: 'useCases',
      label: 'Use Cases',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'useCaseSales',
        columns: [
          {
            id: 'useCasesList',
            title: null,
            items: [
              link('useCaseSales', 'Sales', 'Sell smarter. Close more deals.'),
              link('useCaseMarketing', 'Marketing', 'Smarter campaigns. Better results.'),
              link('useCaseCustomerService', 'Customer Service', 'Faster support. Happier customers.'),
              link('useCaseOperations', 'Operations', 'Simplify workflows. Boost efficiency.'),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'useCases',
            title: 'Use Cases',
            items: [
              {
                id: 'useCaseSales',
                label: 'Sales',
                description: 'Sell smarter. Close more deals.',
                href: wowIntelligenceMegaNavHref('useCaseSales'),
              },
              {
                id: 'useCaseMarketing',
                label: 'Marketing',
                description: 'Smarter campaigns. Better results.',
                href: wowIntelligenceMegaNavHref('useCaseMarketing'),
              },
              {
                id: 'useCaseCustomerService',
                label: 'Customer Service',
                description: 'Faster support. Happier customers.',
                href: wowIntelligenceMegaNavHref('useCaseCustomerService'),
              },
              {
                id: 'useCaseOperations',
                label: 'Operations',
                description: 'Simplify workflows. Boost efficiency.',
                href: wowIntelligenceMegaNavHref('useCaseOperations'),
              },
            ],
          },
        ],
      },
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
