export type SoftwareWowNavSolution = {
  slug: string
  navId: string
  title: string
  headline: string
  description: string
  summary: string
  includes: string[]
  outcomes: string[]
  ctaAccent: string
  ctaMain: string
}

export const SOFTWARE_WOW_NAV_SOLUTIONS: SoftwareWowNavSolution[] = [
  {
    slug: 'manage-my-business',
    navId: 'manageMyBusiness',
    title: 'Manage My Business',
    headline: 'Manage My Business With Smarter Tools.',
    description:
      'Take control of your daily operations with smarter tools that save time, reduce manual work, and improve efficiency.',
    summary: 'Simplify daily operations with smarter business tools.',
    includes: [
      'Business management systems',
      'Task & workflow automation',
      'Employee & resource management',
      'Reporting & analytics dashboards',
    ],
    outcomes: [
      'Clear visibility into day-to-day operations',
      'Less manual work across teams',
      'Systems that scale as you grow',
    ],
    ctaAccent: 'Ready to run',
    ctaMain: 'your business smarter?',
  },
  {
    slug: 'serve-my-customers',
    navId: 'serveMyCustomers',
    title: 'Serve My Customers',
    headline: 'Serve Customers Better, Every Day.',
    description:
      'Deliver faster, easier, and more personalized experiences that keep your customers connected and satisfied.',
    summary: 'Deliver better customer experiences with tailored solutions.',
    includes: [
      'Customer self-service portals',
      'Online booking & ordering systems',
      'Customer account management',
      'Support & communication tools',
    ],
    outcomes: [
      'Smoother customer journeys online and offline',
      'Faster support and self-service options',
      'Stronger retention through better experiences',
    ],
    ctaAccent: 'Ready to elevate',
    ctaMain: 'customer experience?',
  },
  {
    slug: 'launch-a-digital-product',
    navId: 'launchDigitalProduct',
    title: 'Launch a Digital Product',
    headline: 'Launch a Digital Product With Confidence.',
    description:
      'Turn your big idea into a market-ready digital product, from the first concept to a successful launch.',
    summary: 'Bring your product idea to life, from concept to launch.',
    includes: [
      'Product strategy & planning',
      'MVP development',
      'SaaS & platform development',
      'Product testing & launch',
    ],
    outcomes: [
      'A validated product direction before heavy build',
      'An MVP you can ship and learn from',
      'Launch support from a team that stays with you',
    ],
    ctaAccent: 'Ready to launch',
    ctaMain: 'your product?',
  },
  {
    slug: 'connect-my-tools',
    navId: 'connectMyTools',
    title: 'Connect My Tools',
    headline: 'Connect My Tools Seamlessly.',
    description:
      'Bring your disconnected apps and systems together to create smoother workflows and better data flow.',
    summary: 'Make your existing tools work together seamlessly.',
    includes: [
      'Third-party app integrations',
      'CRM & business tool connections',
      'Automated data synchronization',
      'Custom API development',
    ],
    outcomes: [
      'Fewer duplicate data entry and errors',
      'Tools that share information in real time',
      'Workflows that feel like one system',
    ],
    ctaAccent: 'Ready to connect',
    ctaMain: 'your stack?',
  },
  {
    slug: 'create-a-mobile-experience',
    navId: 'createMobileExperience',
    title: 'Create a Mobile Experience',
    headline: 'Create a Mobile Experience Customers Love.',
    description:
      'Put your business in your customers’ hands with a mobile experience designed for convenience and engagement.',
    summary: 'Engage your customers with a mobile app built for them.',
    includes: [
      'Custom iOS & Android apps',
      'Mobile UI/UX design',
      'Push notifications & engagement',
      'App launch & ongoing updates',
    ],
    outcomes: [
      'A mobile channel that matches your brand',
      'Higher engagement through native features',
      'Apps maintained and improved after launch',
    ],
    ctaAccent: 'Ready to build',
    ctaMain: 'your mobile experience?',
  },
]

export const SOFTWARE_WOW_NAV_SOLUTION_SLUGS = SOFTWARE_WOW_NAV_SOLUTIONS.map((s) => s.slug)

export function getSoftwareWowNavSolution(slug: string): SoftwareWowNavSolution | undefined {
  return SOFTWARE_WOW_NAV_SOLUTIONS.find((solution) => solution.slug === slug)
}

export function softwareWowSolutionHref(navId: string): string {
  const solution = SOFTWARE_WOW_NAV_SOLUTIONS.find((item) => item.navId === navId)
  return solution ? `/software/${solution.slug}` : '/software#solutions'
}
