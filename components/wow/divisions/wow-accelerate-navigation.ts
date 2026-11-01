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

const servicesHref = '/accelerate#services'
const solutionsHref = '/accelerate#solutions'

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

/** WOW Accelerate mega-nav — Figma-aligned services, solutions, and detail panels. */
export const wowAccelerateNavigation = {
  detailPanels: {
    default: panel(
      'Lead Generation',
      'Attract qualified prospects and build a stronger, more consistent sales pipeline.',
      [
        'Target audience research',
        'Prospect list building',
        'Lead generation campaigns',
        'Lead capture & tracking',
      ],
    ),
    leadGeneration: panel(
      'Lead Generation',
      'Attract qualified prospects and build a stronger, more consistent sales pipeline.',
      [
        'Target audience research',
        'Prospect list building',
        'Lead generation campaigns',
        'Lead capture & tracking',
      ],
    ),
    salesFunnelDevelopment: panel(
      'Sales Funnel Development',
      'Guide prospects from first contact to conversion with optimized sales funnels.',
      [
        'Sales funnel strategy',
        'Funnel design & development',
        'Conversion path optimization',
        'Funnel testing & improvement',
      ],
    ),
    crmSetupOptimization: panel(
      'CRM Setup & Optimization',
      'Organize customer data, simplify follow-ups, and keep your sales pipeline moving.',
      [
        'CRM setup & configuration',
        'Contact & pipeline management',
        'CRM workflow customization',
        'CRM integrations & optimization',
      ],
    ),
    salesAutomation: panel(
      'Sales Automation',
      'Eliminate repetitive tasks and accelerate sales with smarter automated workflows.',
      [
        'Automated sales workflows',
        'Follow-up sequences',
        'CRM task automation',
        'Sales tool integrations',
      ],
    ),
    salesAnalyticsReporting: panel(
      'Sales Analytics & Reporting',
      'Understand sales performance, uncover opportunities, and make smarter revenue decisions.',
      [
        'Sales performance dashboards',
        'Pipeline & conversion tracking',
        'Revenue forecasting',
        'Sales reporting & insights',
      ],
    ),
    salesProcessOptimization: panel(
      'Sales Process Optimization',
      'Remove sales bottlenecks, improve team efficiency, and increase conversion opportunities.',
      [
        'Sales process audits',
        'Pipeline stage optimization',
        'Sales workflow improvements',
        'Conversion performance analysis',
      ],
    ),
    appointmentSettingOutreach: panel(
      'Appointment Setting & Outreach',
      'Connect with ideal prospects and turn meaningful conversations into booked meetings.',
      [
        'Targeted prospect outreach',
        'Cold email campaigns',
        'Appointment scheduling',
        'Follow-up & response management',
      ],
    ),
    leadQualificationNurturing: panel(
      'Lead Qualification & Nurturing',
      'Identify high-potential leads and nurture relationships that turn into sales opportunities.',
      [
        'Lead scoring & qualification',
        'Automated nurturing sequences',
        'Prospect segmentation',
        'Sales-ready lead handoffs',
      ],
    ),
    leadGenerationOutbound: panel(
      'Lead Generation & Outbound',
      'Reach ideal prospects, spark conversations, and create a steady flow of opportunities.',
      [
        'Ideal customer targeting',
        'Multi-channel outbound campaigns',
        'Prospect engagement & follow-ups',
        'Lead pipeline development',
      ],
    ),
    salesFunnelsConversion: panel(
      'Sales Funnels & Conversion',
      'Turn more prospects into customers with smarter funnels and optimized conversion journeys.',
      [
        'Sales funnel development',
        'Landing page optimization',
        'Lead nurturing workflows',
        'Conversion rate improvement',
      ],
    ),
    crmSalesSystems: panel(
      'CRM & Sales Systems',
      'Bring customer data, sales activities, and pipeline management into one connected system.',
      [
        'CRM implementation & setup',
        'Sales pipeline management',
        'Customer data organization',
        'CRM integrations & reporting',
      ],
    ),
    salesAutomationEnablement: panel(
      'Sales Automation & Enablement',
      'Equip your sales team with smarter tools, automated workflows, and better selling processes.',
      [
        'Sales workflow automation',
        'Automated follow-up sequences',
        'Sales tools & playbooks',
        'Team productivity optimization',
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
        defaultSelection: 'leadGeneration',
        columns: [
          {
            id: 'servicesCol1',
            title: null,
            items: [
              link(
                'leadGeneration',
                'Lead Generation',
                'Attract leads. Create opportunities.',
                servicesHref,
              ),
              link(
                'salesFunnelDevelopment',
                'Sales Funnel Development',
                'Turn prospects into paying customers.',
                servicesHref,
              ),
              link(
                'crmSetupOptimization',
                'CRM Setup & Optimization',
                'Organize contacts. Streamline sales.',
                servicesHref,
              ),
              link(
                'salesAutomation',
                'Sales Automation',
                'Automate tasks. Close deals faster.',
                servicesHref,
              ),
              link(
                'salesAnalyticsReporting',
                'Sales Analytics & Reporting',
                'Track performance. Grow smarter.',
                servicesHref,
              ),
              link(
                'salesProcessOptimization',
                'Sales Process Optimization',
                'Simplify selling. Improve conversions.',
                servicesHref,
              ),
            ],
          },
          {
            id: 'servicesCol2',
            title: null,
            items: [
              link(
                'appointmentSettingOutreach',
                'Appointment Setting & Outreach',
                'Start conversations. Book more meetings.',
                servicesHref,
              ),
              link(
                'leadQualificationNurturing',
                'Lead Qualification & Nurturing',
                'Identify, engage, and convert prospects.',
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
                id: 'leadGeneration',
                label: 'Lead Generation',
                description: 'Attract leads. Create opportunities.',
                href: servicesHref,
              },
              {
                id: 'salesFunnelDevelopment',
                label: 'Sales Funnel Development',
                description: 'Turn prospects into paying customers.',
                href: servicesHref,
              },
              {
                id: 'crmSetupOptimization',
                label: 'CRM Setup & Optimization',
                description: 'Organize contacts. Streamline sales.',
                href: servicesHref,
              },
              {
                id: 'salesAutomation',
                label: 'Sales Automation',
                description: 'Automate tasks. Close deals faster.',
                href: servicesHref,
              },
              {
                id: 'salesAnalyticsReporting',
                label: 'Sales Analytics & Reporting',
                description: 'Track performance. Grow smarter.',
                href: servicesHref,
              },
              {
                id: 'salesProcessOptimization',
                label: 'Sales Process Optimization',
                description: 'Simplify selling. Improve conversions.',
                href: servicesHref,
              },
              {
                id: 'appointmentSettingOutreach',
                label: 'Appointment Setting & Outreach',
                description: 'Start conversations. Book more meetings.',
                href: servicesHref,
              },
              {
                id: 'leadQualificationNurturing',
                label: 'Lead Qualification & Nurturing',
                description: 'Identify, engage, and convert prospects.',
                href: servicesHref,
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
        defaultSelection: 'leadGenerationOutbound',
        columns: [
          {
            id: 'solutionsList',
            title: null,
            items: [
              link(
                'leadGenerationOutbound',
                'Lead Generation & Outbound',
                'Reach prospects. Build your pipeline.',
                solutionsHref,
              ),
              link(
                'salesFunnelsConversion',
                'Sales Funnels & Conversion',
                'Convert interest into revenue.',
                solutionsHref,
              ),
              link(
                'crmSalesSystems',
                'CRM & Sales Systems',
                'Manage relationships. Simplify selling.',
                solutionsHref,
              ),
              link(
                'salesAutomationEnablement',
                'Sales Automation & Enablement',
                'Empower teams. Accelerate sales.',
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
                id: 'leadGenerationOutbound',
                label: 'Lead Generation & Outbound',
                description: 'Reach prospects. Build your pipeline.',
                href: solutionsHref,
              },
              {
                id: 'salesFunnelsConversion',
                label: 'Sales Funnels & Conversion',
                description: 'Convert interest into revenue.',
                href: solutionsHref,
              },
              {
                id: 'crmSalesSystems',
                label: 'CRM & Sales Systems',
                description: 'Manage relationships. Simplify selling.',
                href: solutionsHref,
              },
              {
                id: 'salesAutomationEnablement',
                label: 'Sales Automation & Enablement',
                description: 'Empower teams. Accelerate sales.',
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
