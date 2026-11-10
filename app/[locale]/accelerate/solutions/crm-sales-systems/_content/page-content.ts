const WOW_ACCELERATE = '/images/wow/Hero/devision/Accelerate.jpg'
const WOW_GROWTH_1 = '/images/wow/Hero/Growth/image%20(1).png'
const WOW_GROWTH_2 = '/images/wow/Hero/Growth/image%20(2).png'
const WOW_ACCELERATE_MARK = '/images/wow/LandingPageNaveBare/Accelerate%202.svg'
const WOW_INTEL = '/images/wow/LandingPageNaveBare/Intelligence%202.svg'

const img = (src: string, alt: string) => ({ src, alt })

export const CRM_SALES_SYSTEMS_PAGE_METADATA = {
  title: 'CRM & Sales Systems Solutions | WOW Accelerate',
  description:
    'Connect your sales process with CRM implementation, pipeline management, customer data organization, integrations, automation, and reporting solutions.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CRM & SALES SYSTEMS',
    title: 'Connect your sales.',
    italicTitle: 'Simplify your growth.',
    description:
      'Bring customer relationships, sales pipelines, and everyday workflows together in one smarter, more organized system.',
    images: [
      img(WOW_ACCELERATE, 'CRM and sales systems'),
      img(WOW_INTEL, 'Sales technology and CRM'),
      img(WOW_ACCELERATE_MARK, 'WOW Accelerate sales systems'),
      img(WOW_GROWTH_2, 'Connected sales workflows'),
    ],
    primaryCtaLabel: 'Build Your Sales System',
    primaryCtaHref: '/contact',
  },
  whatWeBuild: {
    eyebrow: 'WHAT WE DELIVER',
    title: 'Smarter systems.',
    accentTitle: 'Smoother selling.',
    description: 'Connect your people, processes, and data to make every sales interaction count.',
    items: [
      {
        title: 'CRM Implementation & Setup',
        description: 'Build a CRM that fits your sales process and team.',
      },
      {
        title: 'Sales Pipeline Management',
        description: 'Track deals, manage stages, and keep opportunities moving.',
      },
      {
        title: 'Customer Data Organization',
        description: 'Keep contacts, conversations, and customer details in one place.',
      },
      {
        title: 'CRM Integrations & Reporting',
        description: 'Connect essential tools and gain clearer sales insights.',
      },
      {
        title: 'Sales Workflow Automation',
        description: 'Simplify lead assignments, reminders, and repetitive tasks.',
      },
      {
        title: 'Sales System Optimization',
        description: 'Improve existing tools and workflows for better efficiency.',
      },
    ],
  },
  builtForTheFit: {
    eyebrow: 'THE RIGHT FIT',
    title: 'Your sales process is unique.',
    accentTitle: 'Your systems should be too.',
    body: 'Disconnected tools and complicated workflows make selling harder. We help build a setup that works around your team.',
    needHeading: 'You may need a better sales system if…',
    wantHeading: 'Or if you want to…',
    needItems: [
      'Customer information is scattered across spreadsheets.',
      "Your sales tools don't communicate with each other.",
      'Leads and follow-ups are difficult to track.',
      "Your CRM doesn't match how your team sells.",
    ],
    wantItems: [
      'Manage customer relationships in one place.',
      'Automate repetitive sales activities.',
      'Gain clearer visibility into your pipeline.',
      'Build a sales system that supports growth.',
    ],
    closingLine: 'The right sales system makes every opportunity easier to manage.',
  },
  techLaunchPath: {
    eyebrow: 'OUR PROCESS',
    title: 'One connected system.',
    accentTitle: 'Four clear steps.',
    steps: [
      {
        number: '01',
        title: 'Discover',
        description: 'Understand your sales process, tools, and challenges.',
      },
      {
        number: '02',
        title: 'Design',
        description: 'Plan your CRM structure, pipeline, and workflows.',
      },
      {
        number: '03',
        title: 'Implement',
        description: 'Configure your system, organize data, and connect tools.',
      },
      {
        number: '04',
        title: 'Optimize',
        description: 'Refine workflows, improve adoption, and track performance.',
      },
    ],
    ctaLabel: 'Start Your CRM Project',
  },
  cta: {
    accentText: 'Ready to make',
    mainText: 'selling feel simpler?',
    ariaLabel: 'Talk to WOW Accelerate about CRM and sales systems',
  },
}
