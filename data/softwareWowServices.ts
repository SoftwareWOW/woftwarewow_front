export type SoftwareWowService = {
  slug: string
  title: string
  description: string
  feature: string[]
}

export const SOFTWARE_WOW_SERVICES: SoftwareWowService[] = [
  {
    slug: 'custom-software',
    title: 'Custom Software',
    description: 'Bespoke systems engineered end-to-end.',
    feature: ['Tailored to your workflows', 'Scalable architecture', 'Full lifecycle ownership'],
  },
  {
    slug: 'ai-intelligence',
    title: 'AI & Intelligence',
    description: 'LLMs, agents & smart automations.',
    feature: ['Custom AI integrations', 'Intelligent automation', 'Data-driven decisions'],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'Fast, scalable modern web apps.',
    feature: ['Modern frontend stacks', 'Performance-first builds', 'Responsive by default'],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    description: 'Native-grade iOS & Android products.',
    feature: ['Cross-platform delivery', 'App store readiness', 'Offline-first experiences'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI / UX Design',
    description: 'Interfaces that convert and delight.',
    feature: ['User-centered flows', 'Design systems', 'Conversion-focused layouts'],
  },
  {
    slug: 'cloud-infra',
    title: 'Cloud & Infra',
    description: 'Elastic, resilient cloud architecture.',
    feature: ['Cloud-native setup', 'Auto-scaling infrastructure', 'Cost-optimized hosting'],
  },
  {
    slug: 'api-integrations',
    title: 'API & Integrations',
    description: 'Connect any tool, any platform.',
    feature: ['Third-party connections', 'Secure API design', 'Real-time data sync'],
  },
  {
    slug: 'automation',
    title: 'Automation',
    description: 'Workflows that run your business.',
    feature: ['Process automation', 'Reduced manual work', 'Reliable task pipelines'],
  },
  {
    slug: 'devops-deploy',
    title: 'DevOps & Deploy',
    description: 'CI/CD pipelines built for speed.',
    feature: ['Continuous delivery', 'Automated testing', 'Zero-downtime releases'],
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Turn raw data into decisions.',
    feature: ['Custom dashboards', 'Actionable reporting', 'Predictive insights'],
  },
  {
    slug: 'maintenance',
    title: 'Maintenance',
    description: 'Reliable support, always on.',
    feature: ['Proactive monitoring', 'Security patching', 'Dedicated support'],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Defense-grade protection by design.',
    feature: ['Security audits', 'Compliance readiness', 'Threat prevention'],
  },
]
