export type WowAccelerateOffering = {
  navId: string
  slug: string
  kind: 'service' | 'solution'
  title: string
  headline: string
  description: string
  includes: string[]
  navDescription?: string
}

export const WOW_ACCELERATE_NAV_SERVICES: WowAccelerateOffering[] = [
  {
    navId: 'leadGeneration',
    slug: 'lead-generation',
    kind: 'service',
    title: 'Lead Generation',
    headline: 'Attract leads. Create opportunities.',
    description:
      'Attract qualified prospects and build a stronger, more consistent sales pipeline with targeting, outreach, and capture.',
    navDescription: 'Attract leads. Create opportunities.',
    includes: [
      'Target audience research',
      'Prospect list building',
      'Lead generation campaigns',
      'Lead capture & tracking',
    ],
  },
  {
    navId: 'appointmentSettingOutreach',
    slug: 'appointment-setting-outreach',
    kind: 'service',
    title: 'Appointment Setting & Outreach',
    headline: 'Start conversations. Book more meetings.',
    description:
      'Connect with ideal prospects and turn meaningful conversations into booked meetings.',
    navDescription: 'Start conversations. Book more meetings.',
    includes: [
      'Targeted prospect outreach',
      'Cold email campaigns',
      'Appointment scheduling',
      'Follow-up & response management',
    ],
  },
  {
    navId: 'salesFunnelDevelopment',
    slug: 'sales-funnel-development',
    kind: 'service',
    title: 'Sales Funnel Development',
    headline: 'Turn prospects into paying customers.',
    description:
      'Guide prospects from first contact to conversion with optimized sales funnels.',
    navDescription: 'Turn prospects into paying customers.',
    includes: [
      'Sales funnel strategy',
      'Funnel design & development',
      'Conversion path optimization',
      'Funnel testing & improvement',
    ],
  },
  {
    navId: 'leadQualificationNurturing',
    slug: 'lead-qualification-nurturing',
    kind: 'service',
    title: 'Lead Qualification & Nurturing',
    headline: 'Identify, engage, and convert prospects.',
    description:
      'Identify high-potential leads and nurture relationships that turn into sales opportunities.',
    navDescription: 'Identify, engage, and convert prospects.',
    includes: [
      'Lead scoring & qualification',
      'Automated nurturing sequences',
      'Prospect segmentation',
      'Sales-ready lead handoffs',
    ],
  },
  {
    navId: 'crmSetupOptimization',
    slug: 'crm-setup-optimization',
    kind: 'service',
    title: 'CRM Setup & Optimization',
    headline: 'Organize contacts. Streamline sales.',
    description:
      'Organize customer data, simplify follow-ups, and keep your sales pipeline moving.',
    navDescription: 'Organize contacts. Streamline sales.',
    includes: [
      'CRM setup & configuration',
      'Contact & pipeline management',
      'CRM workflow customization',
      'CRM integrations & optimization',
    ],
  },
  {
    navId: 'salesAutomation',
    slug: 'sales-automation',
    kind: 'service',
    title: 'Sales Automation',
    headline: 'Automate tasks. Close deals faster.',
    description:
      'Eliminate repetitive tasks and accelerate sales with smarter automated workflows.',
    navDescription: 'Automate tasks. Close deals faster.',
    includes: [
      'Automated sales workflows',
      'Follow-up sequences',
      'CRM task automation',
      'Sales tool integrations',
    ],
  },
  {
    navId: 'salesAnalyticsReporting',
    slug: 'sales-analytics-reporting',
    kind: 'service',
    title: 'Sales Analytics & Reporting',
    headline: 'Track performance. Grow smarter.',
    description:
      'Understand sales performance, uncover opportunities, and make smarter revenue decisions.',
    navDescription: 'Track performance. Grow smarter.',
    includes: [
      'Sales performance dashboards',
      'Pipeline & conversion tracking',
      'Revenue forecasting',
      'Sales reporting & insights',
    ],
  },
  {
    navId: 'salesProcessOptimization',
    slug: 'sales-process-optimization',
    kind: 'service',
    title: 'Sales Process Optimization',
    headline: 'Simplify selling. Improve conversions.',
    description:
      'Remove sales bottlenecks, improve team efficiency, and increase conversion opportunities.',
    navDescription: 'Simplify selling. Improve conversions.',
    includes: [
      'Sales process audits',
      'Pipeline stage optimization',
      'Sales workflow improvements',
      'Conversion performance analysis',
    ],
  },
]

export const WOW_ACCELERATE_NAV_SOLUTIONS: WowAccelerateOffering[] = [
  {
    navId: 'leadGenerationOutbound',
    slug: 'lead-generation-outbound',
    kind: 'solution',
    title: 'Lead Generation & Outbound',
    headline: 'Reach prospects. Build your pipeline.',
    description:
      'Reach ideal prospects, spark conversations, and create a steady flow of opportunities.',
    navDescription: 'Reach prospects. Build your pipeline.',
    includes: [
      'Ideal customer targeting',
      'Multi-channel outbound campaigns',
      'Prospect engagement & follow-ups',
      'Lead pipeline development',
    ],
  },
  {
    navId: 'salesFunnelsConversion',
    slug: 'sales-funnels-conversion',
    kind: 'solution',
    title: 'Sales Funnels & Conversion',
    headline: 'Convert interest into revenue.',
    description:
      'Turn more prospects into customers with smarter funnels and optimized conversion journeys.',
    navDescription: 'Convert interest into revenue.',
    includes: [
      'Sales funnel development',
      'Landing page optimization',
      'Lead nurturing workflows',
      'Conversion rate improvement',
    ],
  },
  {
    navId: 'crmSalesSystems',
    slug: 'crm-sales-systems',
    kind: 'solution',
    title: 'CRM & Sales Systems',
    headline: 'Manage relationships. Simplify selling.',
    description:
      'Bring customer data, sales activities, and pipeline management into one connected system.',
    navDescription: 'Manage relationships. Simplify selling.',
    includes: [
      'CRM implementation & setup',
      'Sales pipeline management',
      'Customer data organization',
      'CRM integrations & reporting',
    ],
  },
  {
    navId: 'salesAutomationEnablement',
    slug: 'sales-automation-enablement',
    kind: 'solution',
    title: 'Sales Automation & Enablement',
    headline: 'Empower teams. Accelerate sales.',
    description:
      'Equip your sales team with smarter tools, automated workflows, and better selling processes.',
    navDescription: 'Empower teams. Accelerate sales.',
    includes: [
      'Sales workflow automation',
      'Automated follow-up sequences',
      'Sales tools & playbooks',
      'Team productivity optimization',
    ],
  },
]

const serviceBySlug = new Map(WOW_ACCELERATE_NAV_SERVICES.map((o) => [o.slug, o]))
const solutionBySlug = new Map(WOW_ACCELERATE_NAV_SOLUTIONS.map((o) => [o.slug, o]))
const serviceByNavId = new Map(WOW_ACCELERATE_NAV_SERVICES.map((o) => [o.navId, o]))
const solutionByNavId = new Map(WOW_ACCELERATE_NAV_SOLUTIONS.map((o) => [o.navId, o]))

export const WOW_ACCELERATE_NAV_SERVICE_SLUGS = WOW_ACCELERATE_NAV_SERVICES.map((o) => o.slug)
export const WOW_ACCELERATE_NAV_SOLUTION_SLUGS = WOW_ACCELERATE_NAV_SOLUTIONS.map((o) => o.slug)

export function getWowAccelerateNavService(slug: string) {
  return serviceBySlug.get(slug)
}

export function getWowAccelerateNavSolution(slug: string) {
  return solutionBySlug.get(slug)
}

export function getWowAccelerateOfferingByNavId(navId: string) {
  return serviceByNavId.get(navId) ?? solutionByNavId.get(navId)
}
