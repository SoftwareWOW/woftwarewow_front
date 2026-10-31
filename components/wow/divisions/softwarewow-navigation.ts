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

/** SoftwareWOW mega-nav — Figma-aligned services, solutions, and detail panels. */
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
    customSoftwareDevelopment: panel(
      'Custom Software Development',
      'Build powerful, tailor-made software that fits your business, solves challenges, and grows with you.',
      [
        'Custom software solutions',
        'Scalable system architecture',
        'SaaS platform development',
        'End-to-end development',
      ],
    ),
    webMobileApplications: panel(
      'Web & Mobile Applications',
      'Create seamless digital experiences that connect with users across devices, anywhere and anytime.',
      [
        'Web application development',
        'iOS & Android applications',
        'Responsive user interfaces',
        'App testing & deployment',
      ],
    ),
    businessSystemsAutomation: panel(
      'Business Systems & Automation',
      'Simplify complex workflows, eliminate repetitive tasks, and run your business more efficiently.',
      [
        'Workflow automation',
        'CRM & ERP systems',
        'Internal management tools',
        'Process optimization',
      ],
    ),
    productDesignPrototyping: panel(
      'Product Design & Prototyping',
      'Transform your ideas into intuitive digital products with thoughtful design and clear direction.',
      [
        'UI/UX design',
        'Interactive prototypes',
        'Wireframes & user flows',
        'Product concept validation',
      ],
    ),
    integrationsModernization: panel(
      'Integrations & Modernization',
      'Connect your existing technologies, upgrade outdated systems, and prepare your business for what’s next.',
      [
        'API & third-party integrations',
        'Legacy system modernization',
        'Data migration & connectivity',
        'System performance upgrades',
      ],
    ),
    softwareSupportImprovement: panel(
      'Software Support & Improvement',
      'Keep your software running smoothly, securely, and efficiently as your business continues to evolve.',
      [
        'Ongoing maintenance & support',
        'Bug fixes & troubleshooting',
        'Security & performance updates',
        'Feature enhancements',
      ],
    ),
    manageMyBusiness: panel(
      'Manage My Business',
      'Take control of your daily operations with smarter tools that save time, reduce manual work, and improve efficiency.',
      [
        'Business management systems',
        'Task & workflow automation',
        'Employee & resource management',
        'Reporting & analytics dashboards',
      ],
    ),
    serveMyCustomers: panel(
      'Serve My Customers',
      'Deliver faster, easier, and more personalized experiences that keep your customers connected and satisfied.',
      [
        'Customer self-service portals',
        'Online booking & ordering systems',
        'Customer account management',
        'Support & communication tools',
      ],
    ),
    launchDigitalProduct: panel(
      'Launch a Digital Product',
      'Turn your big idea into a market-ready digital product, from the first concept to a successful launch.',
      [
        'Product strategy & planning',
        'MVP development',
        'SaaS & platform development',
        'Product testing & launch',
      ],
    ),
    connectMyTools: panel(
      'Connect My Tools',
      'Bring your disconnected apps and systems together to create smoother workflows and better data flow.',
      [
        'Third-party app integrations',
        'CRM & business tool connections',
        'Automated data synchronization',
        'Custom API development',
      ],
    ),
    createMobileExperience: panel(
      'Create a Mobile Experience',
      'Put your business in your customers’ hands with a mobile experience designed for convenience and engagement.',
      [
        'Custom iOS & Android apps',
        'Mobile UI/UX design',
        'Push notifications & engagement',
        'App launch & ongoing updates',
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
        defaultSelection: 'customSoftwareDevelopment',
        columns: [
          {
            id: 'servicesList',
            title: null,
            items: [
              {
                id: 'customSoftwareDevelopment',
                label: 'Custom Software Development',
                description: 'Tailored software built around your unique business needs.',
                type: 'link' as const,
                href: '/software/services/custom-software',
                detailPanel: 'default',
              },
              {
                id: 'webMobileApplications',
                label: 'Web & Mobile Applications',
                description: 'Powerful, user-friendly apps for web and mobile.',
                type: 'link' as const,
                href: '/software/services/web-applications',
                detailPanel: 'default',
              },
              {
                id: 'businessSystemsAutomation',
                label: 'Business Systems & Automation',
                description: 'Streamline operations, automate tasks, and work smarter.',
                type: 'link' as const,
                href: '/software/services/ai-automation',
                detailPanel: 'default',
              },
              {
                id: 'productDesignPrototyping',
                label: 'Product Design & Prototyping',
                description: 'Turn your ideas into intuitive, ready-to-build designs.',
                type: 'link' as const,
                href: '/design',
                detailPanel: 'default',
              },
              {
                id: 'integrationsModernization',
                label: 'Integrations & Modernization',
                description: 'Connect your systems and upgrade outdated technology.',
                type: 'link' as const,
                href: '/software/services/modernization-integrations',
                detailPanel: 'default',
              },
              {
                id: 'softwareSupportImprovement',
                label: 'Software Support & Improvement',
                description: 'Keep your software secure, reliable, and evolving.',
                type: 'link' as const,
                href: '/software/services/custom-software',
                detailPanel: 'default',
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
              {
                id: 'customSoftwareDevelopment',
                label: 'Custom Software Development',
                description: 'Tailored software built around your unique business needs.',
                href: '/software/services/custom-software',
              },
              {
                id: 'webMobileApplications',
                label: 'Web & Mobile Applications',
                description: 'Powerful, user-friendly apps for web and mobile.',
                href: '/software/services/web-applications',
              },
              {
                id: 'businessSystemsAutomation',
                label: 'Business Systems & Automation',
                description: 'Streamline operations, automate tasks, and work smarter.',
                href: '/software/services/ai-automation',
              },
              {
                id: 'productDesignPrototyping',
                label: 'Product Design & Prototyping',
                description: 'Turn your ideas into intuitive, ready-to-build designs.',
                href: '/design',
              },
              {
                id: 'integrationsModernization',
                label: 'Integrations & Modernization',
                description: 'Connect your systems and upgrade outdated technology.',
                href: '/software/services/modernization-integrations',
              },
              {
                id: 'softwareSupportImprovement',
                label: 'Software Support & Improvement',
                description: 'Keep your software secure, reliable, and evolving.',
                href: '/software/services/custom-software',
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
        defaultSelection: 'manageMyBusiness',
        columns: [
          {
            id: 'solutionsList',
            title: null,
            items: [
              {
                id: 'manageMyBusiness',
                label: 'Manage My Business',
                description: 'Simplify daily operations with smarter business tools.',
                type: 'link' as const,
                href: '/software#solutions',
                detailPanel: 'default',
              },
              {
                id: 'serveMyCustomers',
                label: 'Serve My Customers',
                description: 'Deliver better customer experiences with tailored solutions.',
                type: 'link' as const,
                href: '/software#solutions',
                detailPanel: 'default',
              },
              {
                id: 'launchDigitalProduct',
                label: 'Launch a Digital Product',
                description: 'Bring your product idea to life, from concept to launch.',
                type: 'link' as const,
                href: '/software#solutions',
                detailPanel: 'default',
              },
              {
                id: 'connectMyTools',
                label: 'Connect My Tools',
                description: 'Make your existing tools work together seamlessly.',
                type: 'link' as const,
                href: '/software#solutions',
                detailPanel: 'default',
              },
              {
                id: 'createMobileExperience',
                label: 'Create a Mobile Experience',
                description: 'Engage your customers with a mobile app built for them.',
                type: 'link' as const,
                href: '/software/services/mobile-app-development',
                detailPanel: 'default',
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
              {
                id: 'manageMyBusiness',
                label: 'Manage My Business',
                description: 'Simplify daily operations with smarter business tools.',
                href: '/software#solutions',
              },
              {
                id: 'serveMyCustomers',
                label: 'Serve My Customers',
                description: 'Deliver better customer experiences with tailored solutions.',
                href: '/software#solutions',
              },
              {
                id: 'launchDigitalProduct',
                label: 'Launch a Digital Product',
                description: 'Bring your product idea to life, from concept to launch.',
                href: '/software#solutions',
              },
              {
                id: 'connectMyTools',
                label: 'Connect My Tools',
                description: 'Make your existing tools work together seamlessly.',
                href: '/software#solutions',
              },
              {
                id: 'createMobileExperience',
                label: 'Create a Mobile Experience',
                description: 'Engage your customers with a mobile app built for them.',
                href: '/software/services/mobile-app-development',
              },
            ],
          },
        ],
      },
    },
    {
      id: 'ourWork',
      label: 'Our Work',
      navKind: 'link' as const,
      href: '/portfolio',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'ourWork',
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
