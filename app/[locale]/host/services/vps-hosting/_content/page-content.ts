export const VPS_HOSTING_PAGE_METADATA = {
  title: 'VPS Hosting | WOW Host',
  description:
    'Take your hosting environment to the next level with Virtual Private Servers built for growing demands. Get allocated resources, greater flexibility, and more control over your hosting environment as your business expands.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'VPS HOSTING',
    title: 'More Power. More Control. More ',
    italicTitle: 'Possibilities.',
    description:
      'Take your hosting environment to the next level with Virtual Private Servers built for growing demands. Get allocated resources, greater flexibility, and more control over your hosting environment as your business expands.',
    primaryCta: { label: 'Explore VPS Plans', href: '/meet' },
    secondaryCta: { label: "See What's Included", href: '#whats-included' },
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'VPS hosting control and application management on mobile',
        width: 720,
        height: 640,
      },
    ],
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Your Growth Needs More ',
    titleAccent: 'Room.',
    description:
      'As websites and applications become more demanding, basic hosting environments may no longer provide the resources, flexibility, or control your operations require.',
    pillars: [
      {
        number: '01',
        title: 'Resource Limitations',
        description: 'Shared hosting limits can restrict demanding applications and higher workloads.',
      },
      {
        number: '02',
        title: 'Limited Control',
        description: 'Standard hosting environments may restrict software configurations and server-level customization.',
      },
      {
        number: '03',
        title: 'Growing Workloads',
        description: 'Increasing traffic and processing demands require more predictable computing resources.',
      },
      {
        number: '04',
        title: 'Scaling Challenges',
        description: 'Expanding applications may need resources beyond conventional shared hosting plans.',
      },
    ],
  },
  resources: {
    eyebrow: "WHAT'S INCLUDED",
    title: 'The Resources Your Growth Demands.',
    description:
      'VPS hosting brings together allocated computing capacity and management tools designed for growing websites and applications.',
    steps: [
      {
        number: '01',
        title: 'Allocated Resources',
        description: 'Access plan-defined CPU, memory, and storage resources for your applications.',
      },
      {
        number: '02',
        title: 'Server Control',
        description: 'Configure supported server settings and software around your requirements.',
      },
      {
        number: '03',
        title: 'Flexible Scaling',
        description: 'Upgrade resources as your applications and workloads grow.',
      },
      {
        number: '04',
        title: 'SSD/NVMe Storage',
        description: 'Use supported high-speed storage options for faster data access.',
      },
      {
        number: '05',
        title: 'Security Controls',
        description: 'Configure appropriate access restrictions, firewalls, and server protections.',
      },
      {
        number: '06',
        title: 'Server Monitoring',
        description: 'Track resource usage and server activity through available management tools.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE VPS ADVANTAGE',
    title: 'The Freedom to Build ',
    accentTitle: 'Bigger.',
    description:
      'A VPS gives your business more independence and flexibility than typical shared hosting, making it suitable for websites and applications with growing technical requirements.',
    items: [
      {
        number: '1',
        title: 'Predictable Resources',
        description: 'Access allocated computing capacity suited to your selected hosting plan.',
      },
      {
        number: '2',
        title: 'Greater Flexibility',
        description: 'Adapt server configurations to support different application requirements.',
      },
      {
        number: '3',
        title: 'Growth Potential',
        description: 'Expand available resources as business and application demands increase.',
      },
      {
        number: '4',
        title: 'More Independence',
        description: 'Run workloads in an isolated virtual server environment.',
      },
    ],
  },
  gettingStarted: {
    eyebrow: 'GETTING STARTED',
    title: 'Your Server. Your Next Step.',
    description:
      'Choose the right resources, configure your environment, and prepare your website or application for deployment.',
    steps: [
      {
        number: '01',
        title: 'Choose',
        description: 'Select the VPS resources suited to your workload.',
      },
      {
        number: '02',
        title: 'Configure',
        description: 'Set up your server environment and access controls.',
      },
      {
        number: '03',
        title: 'Deploy',
        description: 'Install or migrate your website and applications.',
      },
      {
        number: '04',
        title: 'Manage',
        description: 'Monitor resources, updates, and ongoing server needs.',
      },
    ],
  },
  technology: {
    eyebrow: 'SERVER TECHNOLOGIES',
    headlineBefore: 'Built for Flexible Server ',
    headlineAccent: 'Environments.',
    description:
      'VPS environments can support different operating systems, web servers, and management tools, depending on your application requirements and selected hosting plan.',
    tools: [
      { name: 'cPanel', icon: 'simple-icons:cpanel' },
      { name: 'Ubuntu', icon: 'logos:ubuntu' },
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'AlmaLinux', icon: 'simple-icons:almalinux' },
      { name: 'Debian', icon: 'logos:debian' },
      { name: 'Docker', icon: 'logos:docker-icon' },
    ],
  },
  cta: {
    accentText: 'Need more power?',
    mainText: "Let's scale up.",
    ariaLabel: 'Start your VPS hosting project with WOW Host',
  },
} as const
