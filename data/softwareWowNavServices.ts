export type SoftwareWowNavService = {
  slug: string
  title: string
  headline: string
  description: string
  summary: string
  includes: string[]
  outcomes: string[]
  ctaAccent: string
  ctaMain: string
}

export const SOFTWARE_WOW_NAV_SERVICES: SoftwareWowNavService[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    headline: 'Custom Software That Fits.',
    description:
      'Purpose-built systems designed around how your business actually works — not generic tools you have to force into your process.',
    summary: 'Systems built around your operations.',
    includes: [
      'Discovery & architecture',
      'Full-stack delivery',
      'Integrations',
      'Quality assurance',
      'Ongoing iteration support',
    ],
    outcomes: [
      'Software that matches your workflows from day one',
      'Fewer workarounds and less tool sprawl',
      'A foundation that can grow with the business',
    ],
    ctaAccent: 'Ready to build',
    ctaMain: 'software that fits?',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    headline: 'SaaS From Idea To Scale.',
    description:
      'Multi-tenant products with billing, onboarding, and infrastructure ready to grow — from first users to product-market fit and beyond.',
    summary: 'Multi-tenant products ready to scale.',
    includes: [
      'Product MVP',
      'Subscription systems',
      'Admin portals',
      'Scale-ready infra',
      'Onboarding & retention flows',
    ],
    outcomes: [
      'A shippable SaaS MVP with room to grow',
      'Billing and tenant isolation handled early',
      'Clear path from launch to scale',
    ],
    ctaAccent: 'Ready to launch',
    ctaMain: 'your SaaS?',
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    headline: 'Web Applications That Perform.',
    description:
      'Fast, secure web apps your teams and customers can rely on every day — dashboards, portals, and workflow tools built to last.',
    summary: 'Reliable apps for teams and customers.',
    includes: [
      'Dashboards',
      'Client portals',
      'Workflow tools',
      'API-first builds',
      'Performance & security hardening',
    ],
    outcomes: [
      'Apps people actually use and trust',
      'Cleaner operations and fewer manual steps',
      'APIs ready for future products and partners',
    ],
    ctaAccent: 'Need a web app',
    ctaMain: 'that performs?',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Apps',
    headline: 'Mobile Apps People Use.',
    description:
      'Native-quality iOS and Android experiences connected to your core systems — designed to convert, retain, and scale.',
    summary: 'iOS and Android experiences that convert.',
    includes: [
      'iOS & Android',
      'Cross-platform',
      'App Store launch',
      'Push & analytics',
      'Backend & API integration',
    ],
    outcomes: [
      'Mobile experiences that feel premium and fast',
      'Store-ready delivery with launch support',
      'Products connected to the rest of your stack',
    ],
    ctaAccent: 'Ready to ship',
    ctaMain: 'a mobile app?',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    headline: 'AI & Automation With Impact.',
    description:
      'Practical AI that removes busywork and improves response times — assistants, workflows, and data pipelines with measurable ROI.',
    summary: 'Practical AI that removes busywork.',
    includes: [
      'Workflow automation',
      'Assistants',
      'Data pipelines',
      'Measurable ROI',
      'Guardrails & monitoring',
    ],
    outcomes: [
      'Hours saved on repetitive work every week',
      'Faster response times across teams and customers',
      'Automations you can measure and trust',
    ],
    ctaAccent: 'Too much busywork?',
    ctaMain: "Let's automate it.",
  },
  {
    slug: 'modernization-integrations',
    title: 'Modernization & Integrations',
    headline: 'Modernize Without Chaos.',
    description:
      'Upgrade legacy systems and connect tools without disrupting operations — migration, APIs, and consolidation done in sequence.',
    summary: 'Upgrade and connect what you already have.',
    includes: [
      'Legacy migration',
      'API integrations',
      'Cloud moves',
      'System consolidation',
      'Cutover planning & support',
    ],
    outcomes: [
      'Modern systems without a risky big-bang rewrite',
      'Tools that finally talk to each other',
      'Lower maintenance cost and clearer architecture',
    ],
    ctaAccent: 'Ready to modernize',
    ctaMain: 'without the chaos?',
  },
]

export const SOFTWARE_WOW_NAV_SERVICE_SLUGS = SOFTWARE_WOW_NAV_SERVICES.map((s) => s.slug)

export function getSoftwareWowNavService(slug: string): SoftwareWowNavService | undefined {
  return SOFTWARE_WOW_NAV_SERVICES.find((service) => service.slug === slug)
}
