export const CLOUD_HOSTING_PAGE_METADATA = {
  title: 'Cloud Hosting | WOW Host',
  description:
    'Give your website or application the flexibility to grow with your business. Our cloud hosting solutions provide adaptable resources, modern infrastructure, and reliable environments built to support your changing needs.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'CLOUD HOSTING',
    title: 'Your Business Grows. Your Hosting ',
    italicTitle: 'Keeps Up.',
    description:
      'Give your website or application the flexibility to grow with your business. Our cloud hosting solutions provide adaptable resources, modern infrastructure, and reliable environments built to support your changing needs.',
    primaryCta: { label: 'Explore Cloud Hosting', href: '/meet' },
    secondaryCta: { label: "See What's Included", href: '#whats-included' },
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'Cloud hosting infrastructure that scales with your business',
        width: 720,
        height: 640,
      },
    ],
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: "Your Hosting Shouldn't Limit Your ",
    titleAccent: 'Ambitions.',
    description:
      'Growing websites and applications need infrastructure that adapts to changing demands. Rigid hosting environments can make expansion and resource management unnecessarily difficult.',
    pillars: [
      {
        number: '01',
        title: 'Resource Constraints',
        description: 'Fixed hosting resources can struggle to accommodate changing workloads.',
      },
      {
        number: '02',
        title: 'Traffic Fluctuations',
        description: 'Sudden traffic increases can place unexpected pressure on infrastructure.',
      },
      {
        number: '03',
        title: 'Scaling Difficulties',
        description: 'Expanding server capacity may require complicated upgrades or migrations.',
      },
      {
        number: '04',
        title: 'Infrastructure Risks',
        description: 'Limited recovery options can increase disruption when systems fail.',
      },
    ],
  },
  whatsIncluded: {
    eyebrow: "WHAT'S INCLUDED",
    titleBefore: 'Flexible Infrastructure. Built ',
    titleAccent: 'Around You.',
    description:
      "Cloud hosting provides adaptable computing resources and flexible infrastructure options to support your website or application's evolving requirements.",
    capabilityCards: [
      {
        title: 'Cloud Resources',
        headline: '',
        description: 'Access computing, memory, and storage resources suited to your workload.',
      },
      {
        title: 'Flexible Scaling',
        headline: '',
        description: 'Adjust available resources as your hosting requirements change.',
      },
      {
        title: 'Cloud Storage',
        headline: '',
        description: 'Store website files and application data within supported cloud environments.',
      },
      {
        title: 'Security Controls',
        headline: '',
        description: 'Manage access permissions, network rules, and available security settings.',
      },
      {
        title: 'Backup & Recovery',
        headline: '',
        description: 'Protect important data with supported backup and restoration options.',
      },
      {
        title: 'Resource Monitoring',
        headline: '',
        description: 'Track infrastructure usage, performance, and important system activity.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE CLOUD ADVANTAGE',
    title: 'Hosting That Adapts to Your Business.',
    description:
      'Cloud hosting offers greater flexibility in managing infrastructure, helping businesses respond to changing demands without depending on rigid hosting configurations.',
    benefits: [
      {
        title: 'Greater Flexibility',
        description: 'Adapt hosting configurations to meet changing business and application needs.',
      },
      {
        title: 'Easier Expansion',
        description: 'Increase available capacity when your website or application needs more resources.',
      },
      {
        title: 'More Control',
        description: 'Choose resources and configurations that suit your technical requirements.',
      },
      {
        title: 'Business Continuity',
        description: 'Support recovery planning through appropriate backup and infrastructure options.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Cloud hosting environments across devices and applications',
      width: 665,
      height: 440,
    },
  },
  gettingStarted: {
    eyebrow: 'GETTING STARTED',
    titleBefore: 'Your Cloud. Your Next ',
    titleAccent: 'Move.',
    description:
      'A clear path from assessing your requirements to deploying and managing cloud hosting for your website or application.',
    steps: [
      {
        step: 'STEP 01',
        title: 'Assess',
        description: 'Review your application, workload, and infrastructure requirements.',
      },
      {
        step: 'STEP 02',
        title: 'Configure',
        description: 'Choose resources and prepare the cloud environment.',
      },
      {
        step: 'STEP 03',
        title: 'Deploy',
        description: 'Launch or migrate your website and test functionality.',
      },
      {
        step: 'STEP 04',
        title: 'Manage',
        description: 'Monitor resource needs and maintain your hosting environment.',
      },
    ],
  },
  technology: {
    eyebrow: 'CLOUD TECHNOLOGIES',
    headlineBefore: 'Powered by Modern Cloud ',
    headlineAccent: 'Technology.',
    description:
      "Cloud environments rely on carefully selected infrastructure, virtualization, and management technologies. We match the technical setup to your application's requirements and hosting needs.",
    tools: [
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'Microsoft Azure', icon: 'logos:microsoft-azure' },
      { name: 'Google Cloud', icon: 'logos:google-cloud' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'AWS', icon: 'logos:aws' },
    ],
  },
  cta: {
    accentText: 'Ready for the cloud?',
    mainText: "Let's make the move.",
    ariaLabel: 'Start your cloud hosting project with WOW Host',
  },
} as const
