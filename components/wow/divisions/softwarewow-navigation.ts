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

/** SoftwareWOW mega-nav — parent-shaped navigation for the division header. */
export const softwareWowNavigation = {
  detailPanels: {
    default: panel(
      'Built For Ambitious Software.',
      'Custom software, apps, and digital products engineered to scale with your business.',
      [
        'Product strategy',
        'Custom development',
        'SaaS platforms',
        'Mobile apps',
        'AI & automation',
        'Ongoing support',
      ],
    ),
    customSoftware: panel(
      'Custom Software That Fits.',
      'Purpose-built systems designed around how your business actually works.',
      ['Discovery & architecture', 'Full-stack delivery', 'Integrations', 'Quality assurance'],
    ),
    saasDevelopment: panel(
      'SaaS From Idea To Scale.',
      'Multi-tenant products with billing, onboarding, and infrastructure ready to grow.',
      ['Product MVP', 'Subscription systems', 'Admin portals', 'Scale-ready infra'],
    ),
    webApplications: panel(
      'Web Applications That Perform.',
      'Fast, secure web apps your teams and customers can rely on every day.',
      ['Dashboards', 'Client portals', 'Workflow tools', 'API-first builds'],
    ),
    mobileApps: panel(
      'Mobile Apps People Use.',
      'Native-quality iOS and Android experiences connected to your core systems.',
      ['iOS & Android', 'Cross-platform', 'App Store launch', 'Push & analytics'],
    ),
    aiAutomation: panel(
      'AI & Automation With Impact.',
      'Practical AI that removes busywork and improves response times.',
      ['Workflow automation', 'Assistants', 'Data pipelines', 'Measurable ROI'],
    ),
    modernizationIntegrations: panel(
      'Modernize Without Chaos.',
      'Upgrade legacy systems and connect tools without disrupting operations.',
      ['Legacy migration', 'API integrations', 'Cloud moves', 'System consolidation'],
    ),
    startupMvp: panel(
      'Startup & MVP Launch.',
      'Ship a credible first product fast — validated, fundable, and ready to iterate.',
      ['MVP scope', 'Rapid build', 'Launch support', 'Iteration roadmap'],
    ),
    businessSystems: panel(
      'Business Systems That Scale.',
      'Internal platforms that connect operations, data, and customer experience.',
      ['Ops platforms', 'CRM workflows', 'Reporting', 'Team tools'],
    ),
    saasProducts: panel(
      'SaaS Product Partnership.',
      'From roadmap to release — a product team that owns outcomes with you.',
      ['Roadmap planning', 'Feature delivery', 'Growth loops', 'Retention systems'],
    ),
    digitalTransformation: panel(
      'Digital Transformation.',
      'Coordinated technology change that improves how the business runs.',
      ['Process redesign', 'Platform strategy', 'Change enablement', 'Governance'],
    ),
    aiSolutions: panel(
      'AI Solutions.',
      'Applied intelligence for customer experience, ops, and decision-making.',
      ['Use-case discovery', 'Model integration', 'Automation', 'Guardrails'],
    ),
    portfolio: panel(
      'Portfolio.',
      'Selected SoftwareWOW work across products, platforms, and growth systems.',
      ['Product builds', 'SaaS platforms', 'Mobile apps', 'Transformations'],
    ),
    caseStudies: panel(
      'Case Studies.',
      'Deep dives into outcomes we delivered for ambitious teams.',
      ['Challenges', 'Approach', 'Delivery', 'Results'],
    ),
    insights: panel(
      'Insights.',
      'Ideas and playbooks on software, AI, and building products that scale.',
      ['Articles', 'Guides', 'Perspectives', 'Product lessons'],
    ),
    about: panel(
      'About SoftwareWOW.',
      'Part of WOW Superagency — specialists building software that drives growth.',
      ['Our story', 'Team', 'Approach', 'Partnerships'],
    ),
    whyUs: panel(
      'Why SoftwareWOW.',
      'Strategy, design, and engineering under one roof — faster decisions, cleaner delivery.',
      ['Unified team', 'Business-first builds', 'Transparent process', 'Long-term support'],
    ),
    ourProcess: panel(
      'Our Process.',
      'A clear path from discovery to launch and continuous improvement.',
      ['Discover', 'Design', 'Build', 'Launch & iterate'],
    ),
    contact: panel(
      'Contact Us.',
      'Tell us what you want to build — we will help you scope the next step.',
      ['Project inquiry', 'Consultation', 'Quotes', 'Partnerships'],
    ),
  },
  items: [
    {
      id: 'services',
      label: 'Services',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'customSoftware',
        columns: [
          {
            id: 'servicesList',
            title: 'Services',
            items: [
              {
                id: 'customSoftware',
                label: 'Custom Software',
                description: 'Systems built around your operations.',
                type: 'link' as const,
                href: '/softwarewow/services/custom-software',
                detailPanel: 'customSoftware',
              },
              {
                id: 'saasDevelopment',
                label: 'SaaS Development',
                description: 'Multi-tenant products ready to scale.',
                type: 'link' as const,
                href: '/softwarewow/services/saas-development',
                detailPanel: 'saasDevelopment',
              },
              {
                id: 'webApplications',
                label: 'Web Applications',
                description: 'Reliable apps for teams and customers.',
                type: 'link' as const,
                href: '/softwarewow/services/web-applications',
                detailPanel: 'webApplications',
              },
              {
                id: 'mobileApps',
                label: 'Mobile Apps',
                description: 'iOS and Android experiences that convert.',
                type: 'link' as const,
                href: '/softwarewow/services/mobile-app-development',
                detailPanel: 'mobileApps',
              },
              {
                id: 'aiAutomation',
                label: 'AI & Automation',
                description: 'Practical AI that removes busywork.',
                type: 'link' as const,
                href: '/softwarewow/services/ai-automation',
                detailPanel: 'aiAutomation',
              },
              {
                id: 'modernizationIntegrations',
                label: 'Modernization & Integrations',
                description: 'Upgrade and connect what you already have.',
                type: 'link' as const,
                href: '/softwarewow/services/modernization-integrations',
                detailPanel: 'modernizationIntegrations',
              },
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
              { id: 'customSoftware', label: 'Custom Software', description: 'Systems built around your operations.', href: '/softwarewow/services/custom-software' },
              { id: 'saasDevelopment', label: 'SaaS Development', description: 'Multi-tenant products ready to scale.', href: '/softwarewow/services/saas-development' },
              { id: 'webApplications', label: 'Web Applications', description: 'Reliable apps for teams and customers.', href: '/softwarewow/services/web-applications' },
              { id: 'mobileApps', label: 'Mobile Apps', description: 'iOS and Android experiences that convert.', href: '/softwarewow/services/mobile-app-development' },
              { id: 'aiAutomation', label: 'AI & Automation', description: 'Practical AI that removes busywork.', href: '/softwarewow/services/ai-automation' },
              { id: 'modernizationIntegrations', label: 'Modernization & Integrations', description: 'Upgrade and connect what you already have.', href: '/softwarewow/services/modernization-integrations' },
            ],
          },
        ],
      },
    },
    {
      id: 'solutions',
      label: 'Solutions',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'startupMvp',
        columns: [
          {
            id: 'solutionsList',
            title: 'Solutions',
            items: [
              {
                id: 'startupMvp',
                label: 'Startup & MVP',
                description: 'Launch a credible first product fast.',
                type: 'link' as const,
                href: '/softwarewow#solutions',
                detailPanel: 'startupMvp',
              },
              {
                id: 'businessSystems',
                label: 'Business Systems',
                description: 'Internal platforms that connect the business.',
                type: 'link' as const,
                href: '/softwarewow#solutions',
                detailPanel: 'businessSystems',
              },
              {
                id: 'saasProducts',
                label: 'SaaS Products',
                description: 'Product partnership from roadmap to release.',
                type: 'link' as const,
                href: '/softwarewow#solutions',
                detailPanel: 'saasProducts',
              },
              {
                id: 'digitalTransformation',
                label: 'Digital Transformation',
                description: 'Technology change that improves how you operate.',
                type: 'link' as const,
                href: '/softwarewow#solutions',
                detailPanel: 'digitalTransformation',
              },
              {
                id: 'aiSolutions',
                label: 'AI Solutions',
                description: 'Applied intelligence for growth and ops.',
                type: 'link' as const,
                href: '/softwarewow#solutions',
                detailPanel: 'aiSolutions',
              },
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
              { id: 'startupMvp', label: 'Startup & MVP', description: 'Launch a credible first product fast.', href: '/softwarewow#solutions' },
              { id: 'businessSystems', label: 'Business Systems', description: 'Internal platforms that connect the business.', href: '/softwarewow#solutions' },
              { id: 'saasProducts', label: 'SaaS Products', description: 'Product partnership from roadmap to release.', href: '/softwarewow#solutions' },
              { id: 'digitalTransformation', label: 'Digital Transformation', description: 'Technology change that improves how you operate.', href: '/softwarewow#solutions' },
              { id: 'aiSolutions', label: 'AI Solutions', description: 'Applied intelligence for growth and ops.', href: '/softwarewow#solutions' },
            ],
          },
        ],
      },
    },
    {
      id: 'work',
      label: 'Work',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'portfolio',
        columns: [
          {
            id: 'workList',
            title: 'Work',
            items: [
              {
                id: 'portfolio',
                label: 'Portfolio',
                description: 'Selected product and platform work.',
                type: 'link' as const,
                href: '/portfolio',
                detailPanel: 'portfolio',
              },
              {
                id: 'caseStudies',
                label: 'Case Studies',
                description: 'Outcomes delivered for ambitious teams.',
                type: 'link' as const,
                href: '/case-study',
                detailPanel: 'caseStudies',
              },
              {
                id: 'insights',
                label: 'Insights',
                description: 'Ideas on software, AI, and product growth.',
                type: 'link' as const,
                href: '/blog',
                detailPanel: 'insights',
              },
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'work',
            title: 'Work',
            items: [
              { id: 'portfolio', label: 'Portfolio', description: 'Selected product and platform work.', href: '/portfolio' },
              { id: 'caseStudies', label: 'Case Studies', description: 'Outcomes delivered for ambitious teams.', href: '/case-study' },
              { id: 'insights', label: 'Insights', description: 'Ideas on software, AI, and product growth.', href: '/blog' },
            ],
          },
        ],
      },
    },
    {
      id: 'company',
      label: 'Company',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'about',
        columns: [
          {
            id: 'companyList',
            title: 'Company',
            items: [
              {
                id: 'about',
                label: 'About',
                description: 'Who we are and how we build.',
                type: 'link' as const,
                href: '/about',
                detailPanel: 'about',
              },
              {
                id: 'whyUs',
                label: 'Why Us',
                description: 'Why teams choose SoftwareWOW.',
                type: 'link' as const,
                href: '/about/why-us',
                detailPanel: 'whyUs',
              },
              {
                id: 'ourProcess',
                label: 'Our Process',
                description: 'From discovery to launch and beyond.',
                type: 'link' as const,
                href: '/softwarewow#process',
                detailPanel: 'ourProcess',
              },
              {
                id: 'contact',
                label: 'Contact',
                description: 'Start a conversation about your project.',
                type: 'link' as const,
                href: '/contact',
                detailPanel: 'contact',
              },
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'company',
            title: 'Company',
            items: [
              { id: 'about', label: 'About', description: 'Who we are and how we build.', href: '/about' },
              { id: 'whyUs', label: 'Why Us', description: 'Why teams choose SoftwareWOW.', href: '/about/why-us' },
              { id: 'ourProcess', label: 'Our Process', description: 'From discovery to launch and beyond.', href: '/softwarewow#process' },
              { id: 'contact', label: 'Contact', description: 'Start a conversation about your project.', href: '/contact' },
            ],
          },
        ],
      },
    },
  ],
} as unknown as NavigationData
