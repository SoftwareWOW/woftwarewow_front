export const DEDICATED_SERVERS_PAGE_METADATA = {
  title: 'Dedicated Servers | WOW Host',
  description:
    'Experience the freedom of dedicated infrastructure built around your business. Get exclusive access to physical server resources, greater configuration control, and the flexibility to support demanding websites and applications.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'DEDICATED SERVERS',
    title: 'Your Server. Your Resources. ',
    italicTitle: 'Your Rules.',
    description:
      'Experience the freedom of dedicated infrastructure built around your business. Get exclusive access to physical server resources, greater configuration control, and the flexibility to support demanding websites and applications.',
    primaryCta: { label: 'Explore Dedicated Servers', href: '/meet' },
    secondaryCta: { label: "See What's Included", href: '#whats-included' },
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'Dedicated server infrastructure and application management',
        width: 720,
        height: 640,
      },
    ],
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Serious Workloads Need Serious ',
    titleAccent: 'Infrastructure.',
    description:
      'Some applications demand more computing capacity, configuration flexibility, and infrastructure independence than shared or virtual hosting environments can provide.',
    pillars: [
      {
        number: '01',
        title: 'Shared Resources',
        description: 'Competing workloads can create performance variability in shared infrastructure.',
      },
      {
        number: '02',
        title: 'Limited Control',
        description: 'Virtual environments may restrict certain hardware and system configurations.',
      },
      {
        number: '03',
        title: 'Heavy Workloads',
        description: 'Resource-intensive applications require substantial computing power and memory.',
      },
      {
        number: '04',
        title: 'Custom Requirements',
        description: 'Specialized software and infrastructure needs may exceed standard hosting options.',
      },
    ],
  },
  whatsIncluded: {
    eyebrow: "WHAT'S INCLUDED",
    titleBefore: 'The Entire Server. Built ',
    titleAccent: 'Around You.',
    description:
      'Dedicated servers provide exclusive physical computing resources and greater flexibility to configure infrastructure around your applications, workloads, and operational requirements.',
    capabilityCards: [
      {
        title: 'Dedicated Hardware',
        headline: '',
        description:
          'Access exclusive physical server resources without sharing the machine with other customers.',
      },
      {
        title: 'Custom Configurations',
        headline: '',
        description: 'Choose available processor, memory, and storage options suited to your workload.',
      },
      {
        title: 'Server Control',
        headline: '',
        description: 'Manage operating systems, software, and configurations according to your access level.',
      },
      {
        title: 'Storage Options',
        headline: '',
        description: 'Select supported storage configurations based on capacity and performance requirements.',
      },
      {
        title: 'Network Connectivity',
        headline: '',
        description: 'Connect applications through the bandwidth and networking options in your plan.',
      },
      {
        title: 'Security Controls',
        headline: '',
        description: 'Configure firewalls, access restrictions, and available server security measures.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE DEDICATED ADVANTAGE',
    title: 'More Independence. Greater Possibilities.',
    description:
      'Dedicated infrastructure gives demanding applications access to exclusive physical resources, helping businesses achieve greater control over their hosting environment.',
    benefits: [
      {
        title: 'Exclusive Resources',
        description: 'Use physical computing capacity reserved for your server workloads.',
      },
      {
        title: 'Greater Control',
        description: 'Configure your environment around specific application and business requirements.',
      },
      {
        title: 'Consistent Capacity',
        description: 'Avoid competing for the same physical resources with other hosting customers.',
      },
      {
        title: 'Infrastructure Freedom',
        description: 'Support specialized applications and more demanding technical configurations.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Dedicated infrastructure across devices and server environments',
      width: 665,
      height: 440,
    },
  },
  gettingStarted: {
    eyebrow: 'GETTING STARTED',
    titleBefore: 'From Requirements to ',
    titleAccent: 'Ready.',
    description:
      'A clear path from understanding your requirements to deploying dedicated infrastructure for your applications.',
    steps: [
      {
        step: 'STEP 01',
        title: 'Assess',
        description: 'Review workloads, software needs, and hardware requirements.',
      },
      {
        step: 'STEP 02',
        title: 'Select',
        description: 'Choose available server specifications and management options.',
      },
      {
        step: 'STEP 03',
        title: 'Configure',
        description: 'Prepare the server environment, networking, and access settings.',
      },
      {
        step: 'STEP 04',
        title: 'Deploy',
        description: 'Install applications, validate functionality, and begin operations.',
      },
    ],
  },
  technology: {
    eyebrow: 'SERVER TECHNOLOGIES',
    headlineBefore: 'The Technology Behind Your ',
    headlineAccent: 'Infrastructure.',
    description:
      'Dedicated hosting offers flexibility in operating systems, server software, and management technologies to support different business and application requirements.',
    tools: [
      { name: 'Ubuntu', icon: 'logos:ubuntu' },
      { name: 'Nginx', icon: 'logos:nginx' },
      { name: 'AlmaLinux', icon: 'simple-icons:almalinux' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'cPanel', icon: 'simple-icons:cpanel' },
      { name: 'Debian', icon: 'logos:debian' },
    ],
  },
  cta: {
    accentText: 'Need dedicated power?',
    mainText: "Let's make it yours.",
    ariaLabel: 'Start your dedicated servers project with WOW Host',
  },
} as const
