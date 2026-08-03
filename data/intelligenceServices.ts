export type IntelligenceService = {
  slug: string
  title: string
  description: string
  feature: string[]
}

export const INTELLIGENCE_SERVICES: IntelligenceService[] = [
  {
    slug: 'ai-assistants',
    title: 'AI Assistants',
    description: 'Custom chatbots and copilots for your team and customers.',
    feature: ['Natural language interfaces', 'Knowledge-base integration', 'Multi-channel deployment'],
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    description: 'Forecast trends and make smarter decisions with data.',
    feature: ['Demand forecasting', 'Churn prediction', 'Real-time dashboards'],
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    description: 'Turn raw data into actionable insights.',
    feature: ['Custom reporting', 'KPI tracking', 'Executive dashboards'],
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and streamline operations.',
    feature: ['Process mapping', 'Smart routing', 'Human-in-the-loop review'],
  },
  {
    slug: 'reporting-automation',
    title: 'Reporting Automation',
    description: 'Generate and deliver reports without manual effort.',
    feature: ['Scheduled reports', 'Data pipelines', 'Alert triggers'],
  },
  {
    slug: 'ai-quality-review',
    title: 'AI Quality Review',
    description: 'Automated checks that keep output accurate and on-brand.',
    feature: ['Content validation', 'Compliance checks', 'Performance optimization'],
  },
]
