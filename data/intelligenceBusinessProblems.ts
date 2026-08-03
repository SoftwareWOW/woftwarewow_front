export type IntelligenceBusinessProblem = {
  slug: string
  title: string
  description: string
  feature: string[]
}

export const INTELLIGENCE_BUSINESS_PROBLEMS: IntelligenceBusinessProblem[] = [
  {
    slug: 'too-much-manual-work',
    title: 'Too Much Manual Work',
    description:
      'Your team spends valuable time on repetitive tasks instead of focusing on meaningful work.',
    feature: [
      'Manual data entry',
      'Copying information between systems',
      'Repetitive administrative tasks',
    ],
  },
  {
    slug: 'slow-customer-service',
    title: 'Slow Customer Service',
    description:
      'Customers expect instant responses, but your team cannot be available 24/7.',
    feature: [
      'Long response times',
      'Missed customer inquiries',
      'Inconsistent support experiences',
    ],
  },
  {
    slug: 'missed-sales-opportunities',
    title: 'Missed Sales Opportunities',
    description:
      'Potential customers slip away because follow-ups are delayed or forgotten.',
    feature: [
      'Leads left unanswered',
      'Missed follow-up opportunities',
      'Low conversion rates',
    ],
  },
  {
    slug: 'disconnected-systems',
    title: 'Disconnected Business Systems',
    description:
      'Your software, data, and teams don\'t communicate efficiently, creating unnecessary delays.',
    feature: [
      'Disconnected tools',
      'Duplicate information',
      'Manual synchronization',
    ],
  },
  {
    slug: 'lack-of-business-insights',
    title: 'Limited Business Insights',
    description:
      'Making important decisions is difficult when your data is scattered or outdated.',
    feature: [
      'No real-time reporting',
      'Unclear performance metrics',
      'Decisions based on guesswork',
    ],
  },
  {
    slug: 'inefficient-workflows',
    title: 'Inefficient Workflows',
    description:
      'Everyday business processes take longer than they should because too much work is done manually.',
    feature: [
      'Repeated manual approvals',
      'Slow internal processes',
      'Operational bottlenecks',
    ],
  },
  {
    slug: 'high-operational-costs',
    title: 'High Operating Costs',
    description:
      'Manual work, inefficient systems, and repetitive tasks increase the cost of running your business.',
    feature: [
      'Too many repetitive tasks',
      'Overloaded teams',
      'Low operational efficiency',
    ],
  },
  {
    slug: 'business-growth-barriers',
    title: 'Difficult to Scale',
    description:
      'Growth becomes harder when your business depends on hiring more people instead of smarter systems.',
    feature: [
      'Processes don\'t scale',
      'Increasing workload',
      'Growth limited by manual operations',
    ],
  },
]