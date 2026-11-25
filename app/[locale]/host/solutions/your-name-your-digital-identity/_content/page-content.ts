export const DIGITAL_IDENTITY_PAGE_METADATA = {
  title: 'Your Name. Your Digital Identity. | WOW Host',
  description:
    'Every great online presence starts with the right domain. Find and manage a professional web address that represents your business, strengthens your identity, and makes it easier for customers to find you.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'DOMAINS & DNS',
    title: 'Your Name. Your Digital ',
    italicTitle: 'Identity.',
    description:
      'Every great online presence starts with the right domain. Find and manage a professional web address that represents your business, strengthens your identity, and makes it easier for customers to find you.',
    primaryCta: { label: 'Find My Domain', href: '#domain-search' },
    secondaryCta: { label: 'Explore Our Services', href: '/host/services/shared-web-hosting' },
    images: [
      { src: '/images/wow/locations/landmarks/Rome.png' },
      { src: '/images/wow/locations/landmarks/Paros.png' },
      { src: '/images/wow/locations/landmarks/NYC.png' },
      { src: '/images/wow/locations/landmarks/UK.png' },
      { src: '/images/wow/locations/landmarks/Rio.png' },
      { src: '/images/wow/locations/landmarks/Sydney.png' },
    ],
  },
  domainSearch: {
    titleBefore: 'Find your ',
    titleAccent: 'perfect',
    titleAfter: ' domain',
    placeholder: 'yourbusiness.com',
    tlds: ['.com', '.net', '.org', '.co'] as const,
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'The Right Name ',
    titleAccent: 'Matters.',
    description:
      "Choosing and maintaining a domain can become complicated when availability, technical configurations, and renewal responsibilities aren't properly managed.",
    pillars: [
      {
        number: '01',
        title: 'Complex DNS',
        description: 'Incorrect domain settings can disrupt websites, email, and connected services.',
      },
      {
        number: '02',
        title: 'Renewal Risks',
        description: 'Missed renewals can interrupt your online presence and threaten domain ownership.',
      },
      {
        number: '03',
        title: 'Scattered Management',
        description:
          'Managing domains across different providers makes updates and oversight unnecessarily difficult.',
      },
      {
        number: '04',
        title: 'Name Availability',
        description:
          'Finding a memorable, relevant domain becomes harder when popular names are already registered.',
      },
    ],
  },
  whatWeProvide: {
    eyebrow: 'WHAT WE PROVIDE',
    title: 'Everything Your Domain Needs.',
    body: '',
    stages: [
      {
        id: '01',
        title: 'Domain Registration',
        description: 'Register available domain names that reflect your business and brand.',
      },
      {
        id: '02',
        title: 'Domain Transfers',
        description: 'Move eligible domains between providers with appropriate transfer support.',
      },
      {
        id: '03',
        title: 'DNS Management',
        description: 'Configure DNS records for websites, email, and connected services.',
      },
      {
        id: '04',
        title: 'Domain Renewals',
        description: 'Manage renewal dates and help prevent unwanted domain expiration.',
      },
      {
        id: '05',
        title: 'Domain Security',
        description: 'Apply available domain locks and account protection measures.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE DOMAIN ADVANTAGE',
    title: 'A Stronger Identity Starts With Your ',
    accentTitle: 'Name.',
    description:
      'A well-chosen domain and organized management experience help your business maintain a recognizable, professional, and dependable online presence.',
    items: [
      {
        number: '1',
        title: 'Brand Recognition',
        description: 'Make your business easier to recognize with a consistent web address.',
      },
      {
        number: '2',
        title: 'Professional Presence',
        description: 'Establish a credible foundation for your website and branded email.',
      },
      {
        number: '3',
        title: 'Simpler Management',
        description: 'Keep essential domain information and settings organized in one place.',
      },
      {
        number: '4',
        title: 'Long-Term Control',
        description: 'Maintain visibility over ownership, configuration, and important renewal dates.',
      },
    ],
  },
  gettingStarted: {
    eyebrow: 'GETTING STARTED',
    title: 'Find It. Secure It. Make It Yours.',
    description: 'We help you choose a suitable domain and configure the essentials for your online presence.',
    steps: [
      {
        number: '1',
        title: 'Search',
        description: 'Find available domain names and choose the right extension.',
      },
      {
        number: '2',
        title: 'Register',
        description: 'Complete registration and verify the required domain details.',
      },
      {
        number: '3',
        title: 'Connect',
        description: 'Point your domain to hosting, email, and other connected services.',
      },
    ],
  },
  cta: {
    accentText: 'Have a name in mind?',
    mainText: "Let's secure it.",
    ariaLabel: 'Start your domain and DNS project with WOW Host',
  },
} as const
