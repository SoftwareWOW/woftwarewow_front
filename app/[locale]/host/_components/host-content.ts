/** Static copy for WOW Host division page — replace images under public/images/wow/host/ when final assets are ready. */

const HOST_IMAGE = '/images/wow/Hero/devision/Server.jpg'
const CARD_SHARED = '/images/wow/Hero/devision/Intelligence.jpg'
const CARD_VPS = '/images/wow/Hero/devision/Website 1.jpg'
const CARD_DEDICATED = '/images/wow/Hero/devision/Mockup 2 Dark.png'
const CARD_CLOUD = '/images/wow/nav/cards/AI and Automation 1.png'
const ESSENTIAL_DOMAIN = '/images/wow/Hero/devision/Website 2.jpg'
const ESSENTIAL_EMAIL = '/images/wow/Hero/devision/Design 2.jpg'
const ESSENTIAL_SECURITY = '/images/wow/Hero/devision/Accelerate.jpg'
const INFRA_GRAPHIC = '/images/wow/Hero/devision/C-17.jpg'

export const HOST_HERO = {
  badgeTitle: 'WEB HOSTING',
  titleBefore: 'Power Your Online Presence With Hosting ',
  titleAccent: 'Built for Growth.',
  description:
    'Your website, business email, and digital infrastructure deserve a dependable foundation. From domains and website hosting to cloud solutions, backups, and security, WOW Host brings your essential online services together.',
  primaryCta: 'Explore Hosting Plans',
  primaryCtaHref: '/host#packages',
  secondaryCta: 'Talk to a Hosting Expert',
  secondaryCtaHref: '/meet',
  images: [{ src: HOST_IMAGE, alt: 'Modern data center with server racks' }],
} as const

export const HOST_HOSTING_SOLUTIONS = {
  eyebrow: 'HOSTING SOLUTIONS',
  title: 'The Right Hosting for Every Stage of Your Business.',
  description:
    'Whether you’re launching your first website, managing a growing online store, or running demanding applications, WOW! Host helps you choose an infrastructure solution that fits your needs.',
  services: [
    {
      slug: 'shared-web-hosting',
      title: 'Shared Web Hosting',
      number: '01',
      description:
        'A practical starting point for business websites, blogs, and smaller online projects that don’t require dedicated server resources. Best suited for: Small websites and new businesses.',
      coverImage: CARD_SHARED,
      href: '/meet',
    },
    {
      slug: 'vps-hosting',
      title: 'VPS Hosting',
      number: '02',
      description:
        'Greater control and allocated virtual server resources for websites and applications with more demanding requirements. Best suited for: Growing websites and custom applications.',
      coverImage: CARD_VPS,
      href: '/meet',
    },
    {
      slug: 'dedicated-servers',
      title: 'Dedicated Servers',
      number: '03',
      description:
        'Dedicated infrastructure for projects requiring greater control over server configuration, resources, and operating environments. Best suited for: Resource-intensive workloads.',
      coverImage: CARD_DEDICATED,
      href: '/meet',
    },
    {
      slug: 'cloud-hosting',
      title: 'Cloud Hosting',
      number: '04',
      description:
        'Flexible infrastructure options for businesses seeking adaptable resources and more sophisticated deployment environments. Best suited for: Scalable digital products and evolving workloads.',
      coverImage: CARD_CLOUD,
      href: '/meet',
    },
  ],
} as const

export const HOST_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: "Your Business Shouldn't Be Held Back by Its",
  titleAccent: 'Hosting.',
  titleSuffix: '',
  description:
    'Slow websites, complicated management, unreliable configurations, and disconnected services can make maintaining your online presence harder than it needs to be.',
  withoutAiLabel: 'When Hosting Gets Complicated',
  withAiLabel: 'When Everything Is Connected',
  leftContextLine: 'Customer asks a question',
  rightContextLine: 'Customer asks a question',
  withoutSteps: [
    'Scattered services',
    'Confusing dashboards',
    'Resource limitations',
    'Unclear backups',
    'Difficult troubleshooting',
  ],
  withSteps: [
    'Clearer management',
    'Appropriately selected infrastructure',
    'Organized essential services',
    'Support for ongoing maintenance',
  ],
  footerSummary:
    'Your infrastructure should support your business—not become another problem to manage.',
  ctaLabel: 'Find My Hosting Solution',
  ctaHref: '/meet',
} as const

export const HOST_ESSENTIALS_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'More Than Hosting. Your Digital ',
  titleAccent: 'Essentials, Connected.',
  description:
    'A professional online presence requires more than server space. WOW Host brings together the services businesses need to establish, protect, and manage their digital foundation.',
  ctaLabel: 'Explore Security Solutions',
  ctaHref: '/meet',
  items: [
    {
      id: 1,
      title: 'Your Name. Your Digital Identity.',
      description: 'Domain registration · Domain transfers · DNS configuration · Renewals',
      image: ESSENTIAL_DOMAIN,
      alt: 'Domain extensions and registration',
    },
    {
      id: 2,
      title: 'Professional Email for Your Business.',
      description: 'Custom-domain email · Mailbox setup · Email configuration · Account management',
      image: ESSENTIAL_EMAIL,
      alt: 'Business email on custom domain',
    },
    {
      id: 3,
      title: 'Protect What Keeps You Online.',
      description: 'SSL/TLS · Backups · Access controls · CDN options · Security configurations',
      image: ESSENTIAL_SECURITY,
      alt: 'Security shield protecting online services',
    },
  ],
} as const

export const HOST_INFRASTRUCTURE = {
  eyebrow: 'INFRASTRUCTURE',
  titleBefore: 'A Stronger Foundation Behind ',
  titleAccent: 'Every Website.',
  description:
    'Behind every website is an infrastructure environment that affects how it operates. We help businesses consider the essential building blocks of hosting—from resource allocation and connectivity to security and recoverability.',
  ctaLabel: 'Discuss My Hosting Requirements',
  ctaHref: '/meet',
  image: { src: INFRA_GRAPHIC, alt: 'Layered server infrastructure visualization' },
  items: [
    {
      title: 'Server Resources',
      description:
        'Determines the computing and storage capacity available to the website or application',
    },
    {
      title: 'Domain & DNS',
      description: 'Connects visitors to the correct online services',
    },
    {
      title: 'Security',
      description:
        'Helps reduce exposure through encryption, access controls, and configuration practices',
    },
    {
      title: 'Backups',
      description:
        'Supports recovery when files, databases, or configurations need restoration',
    },
    {
      title: 'CDN & Delivery',
      description:
        'Can help distribute content more efficiently to geographically dispersed visitors',
    },
    {
      title: 'Monitoring',
      description:
        'Helps identify performance and availability issues when monitoring is included',
    },
  ],
} as const

export const HOST_PROCESS = {
  eyebrow: 'OUR PROCESS',
  title: 'From Setup to Ongoing Support.',
  ctaLabel: 'Talk to a Hosting Expert',
  ctaHref: '/meet',
  steps: [
    {
      number: '1',
      title: 'Assess',
      description:
        'Understand your website, application, expected traffic, storage needs, and technical requirements.',
    },
    {
      number: '2',
      title: 'Recommend',
      description:
        'Identify the hosting environment and supporting services that best match your needs.',
    },
    {
      number: '3',
      title: 'Configure',
      description:
        'Set up the agreed hosting environment, domains, email, and relevant security options.',
    },
    {
      number: '4',
      title: 'Launch or Migrate',
      description:
        'Coordinate deployment or migration, with testing and checks appropriate to the project.',
    },
    {
      number: '5',
      title: 'Maintain',
      description:
        'Provide the monitoring, maintenance, and support included in your selected service agreement.',
    },
  ],
} as const

export const HOST_PACKAGES = {
  eyebrow: 'OUR PACKAGES',
  titleBefore: 'Hosting Support That Fits Your ',
  titleAccent: 'Requirements.',
  description:
    'Whether you’re launching a first website, scaling traffic, or planning complex infrastructure, we can shape a hosting engagement around your technical and business priorities.',
  plans: [
    {
      id: 1,
      badge: 'ESSENTIAL',
      title: 'Web Hosting',
      description: 'For small business websites, blogs, and new online projects.',
      features: [
        'Shared hosting resources',
        'Website storage',
        'Domain connection',
        'SSL/TLS configuration',
        'Optional email and backups',
      ],
      ctaLabel: 'Explore Web Hosting',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'ADVANCED',
      title: 'VPS Hosting',
      description: 'For growing websites and applications requiring greater resource control.',
      features: [
        'Virtual server resources',
        'Configurable environments',
        'Expanded resource options',
        'Security configuration',
        'Optional management services',
      ],
      ctaLabel: 'Explore VPS Hosting',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'CUSTOM',
      title: 'Cloud & Dedicated',
      description: 'For businesses with more complex infrastructure and deployment requirements.',
      features: [
        'Dedicated or cloud resources',
        'Custom infrastructure planning',
        'Scalability options',
        'Backup and recovery planning',
        'Agreed technical support',
      ],
      ctaLabel: 'Request a Quote',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleAccent: 'Not sure which hosting environment you need?',
    description:
      'Tell us about your website, expected traffic, and technical requirements. We’ll help you compare the available options.',
    ctaLabel: 'Get Hosting Advice',
    ctaHref: '/meet',
  },
} as const

export const HOST_TOOLS = {
  bodyParagraph:
    'Hosting should be manageable with tools suited to your website and technical requirements. Depending on the environment, hosting solutions may involve established control panels, web server software, and content management platforms.',
  icons: [
    { id: 1, name: 'Cloud', icon: 'simple-icons:cloudflare' },
    { id: 2, name: 'cPanel', icon: 'simple-icons:cpanel' },
    { id: 3, name: 'Plesk', icon: 'simple-icons:plesk' },
    { id: 4, name: 'Linux', icon: 'simple-icons:linux' },
    { id: 5, name: 'Security', icon: 'simple-icons:letsencrypt' },
    { id: 6, name: 'Nginx', icon: 'simple-icons:nginx' },
    { id: 7, name: 'WordPress', icon: 'simple-icons:wordpress' },
  ],
} as const

export const HOST_CTA = {
  accentText: 'Give Your Business a',
  mainText: 'Stronger Digital Foundation',
  ariaLabel: 'Contact WOW Host at WOW Superagency',
} as const

export const HOST_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Everything You Need to Know About ',
  titleAccent: 'WOW Host.',
  description:
    'From choosing the right hosting environment to moving an existing website, here are answers to common questions.',
  viewAllHref: '/faq',
} as const

export const HOST_FAQS = [
  {
    id: 1,
    question: 'What types of hosting does WOW Host offer?',
    answer:
      'We help businesses compare shared web hosting, VPS, dedicated servers, and cloud hosting options based on website requirements, traffic expectations, and technical needs.',
  },
  {
    id: 2,
    question: 'Can I register a domain through WOW Host?',
    answer:
      'Domain registration, transfers, DNS configuration, and renewals can be included as part of your hosting and digital foundation setup.',
  },
  {
    id: 3,
    question: 'Can you move my existing website to WOW Host?',
    answer:
      'Migration support can be coordinated as part of launch or transition planning, including testing and checks appropriate to your site and applications.',
  },
  {
    id: 4,
    question: 'Do hosting plans include business email?',
    answer:
      'Custom-domain email, mailbox setup, and account management can be configured alongside hosting when included in your agreed scope.',
  },
  {
    id: 5,
    question: 'Will my website have an SSL certificate?',
    answer:
      'SSL/TLS configuration can be included or offered as an option. Certificate type, installation, renewal, and management arrangements should be confirmed for each plan.',
  },
  {
    id: 6,
    question: 'Do you provide website backups?',
    answer:
      'Backup and recovery options can be discussed during planning so file, database, and configuration restoration aligns with your risk and uptime requirements.',
  },
] as const
