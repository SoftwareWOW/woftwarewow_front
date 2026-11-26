export const WEBSITE_SECURITY_PAGE_METADATA = {
  title: 'Protect What Keeps You Online | WOW Host',
  description:
    'Your website is an important part of your business. Protect it with practical security measures, proactive monitoring, and dependable safeguards that help reduce risks and keep your digital presence protected.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WEBSITE SECURITY',
    title: 'Protect What Keeps You ',
    italicTitle: 'Online.',
    description:
      'Your website is an important part of your business. Protect it with practical security measures, proactive monitoring, and dependable safeguards that help reduce risks and keep your digital presence protected.',
    primaryCta: { label: 'Secure My Website', href: '/meet' },
    secondaryCta: { label: "See What's Included", href: '#whats-included' },
    images: [
      {
        src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
        alt: 'Website security monitoring across devices',
        width: 720,
        height: 640,
      },
    ],
  },
  challenge: {
    eyebrow: 'THE SECURITY CHALLENGE',
    titleBefore: "Online Threats Don't ",
    titleAccent: 'Wait.',
    description:
      'Security weaknesses, outdated software, and overlooked configurations can expose websites to disruptions and put important business information at risk.',
    pillars: [
      {
        number: '01',
        title: 'Security Vulnerabilities',
        description: 'Outdated software and weak configurations can expose websites to attacks.',
      },
      {
        number: '02',
        title: 'Malicious Activity',
        description: 'Suspicious traffic and harmful files can threaten website functionality.',
      },
      {
        number: '03',
        title: 'Data Exposure',
        description: 'Poor access controls can put sensitive information at risk.',
      },
      {
        number: '04',
        title: 'Unexpected Downtime',
        description: 'Security incidents can interrupt website access and business operations.',
      },
    ],
  },
  whatWeProtect: {
    eyebrow: 'WHAT WE PROTECT',
    titleBefore: 'Security That Works Behind the ',
    titleAccent: 'Scenes.',
    description:
      'We help protect your website through essential security controls, monitoring, and recovery measures tailored to your hosting environment.',
    capabilityCards: [
      {
        title: 'SSL Protection',
        headline: '',
        description: 'Configure certificates to protect data transmitted between visitors and your website.',
      },
      {
        title: 'Malware Scanning',
        headline: '',
        description: 'Check website files for known malicious code and suspicious changes.',
      },
      {
        title: 'Firewall Protection',
        headline: '',
        description: 'Apply supported firewall rules to filter potentially harmful traffic.',
      },
      {
        title: 'Security Monitoring',
        headline: '',
        description: 'Monitor selected security events and identify issues requiring attention.',
      },
      {
        title: 'Backup & Recovery',
        headline: '',
        description: 'Prepare backup and restoration options to support incident recovery.',
      },
      {
        title: 'Access Security',
        headline: '',
        description: 'Strengthen account permissions and authentication to reduce unauthorized access.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE SECURITY ADVANTAGE',
    title: 'Greater Confidence in Your Digital Presence.',
    description:
      'A more secure website helps protect your digital operations, support visitor confidence, and reduce the risks associated with preventable security incidents.',
    benefits: [
      {
        title: 'Reduced Exposure',
        description: 'Lower risks through appropriate website protections and security controls.',
      },
      {
        title: 'Stronger Confidence',
        description: 'Help visitors interact with your website through protected connections.',
      },
      {
        title: 'Earlier Detection',
        description: 'Identify suspicious activity and potential issues before they escalate.',
      },
      {
        title: 'Better Preparedness',
        description: 'Support recovery with suitable backups and response procedures.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Secure digital presence across laptop, phone, and tablet',
      width: 665,
      height: 440,
    },
  },
  approach: {
    eyebrow: 'OUR SECURITY APPROACH',
    title: 'Assess. Protect. Stay Prepared.',
    description:
      "We evaluate your website's needs, apply suitable security measures, and establish an approach to maintaining protection.",
    steps: [
      {
        number: '1',
        title: 'Assess',
        description: 'Review website security, configurations, and potential vulnerabilities.',
      },
      {
        number: '2',
        title: 'Protect',
        description: 'Implement agreed safeguards and verify essential security settings.',
      },
      {
        number: '3',
        title: 'Monitor',
        description: 'Review available alerts and address identified security issues.',
      },
    ],
  },
  technology: {
    eyebrow: 'SECURITY TECHNOLOGIES',
    headlineBefore: 'Protection Backed by the ',
    headlineAccent: 'Right Tools.',
    description:
      'Effective website security combines reliable technologies with appropriate configuration and oversight. The right tools depend on your hosting environment and protection requirements.',
    tools: [
      { name: 'cPanel', icon: 'logos:cpanel' },
      { name: "Let's Encrypt", icon: 'logos:letsencrypt' },
      { name: 'CloudLinux', icon: 'logos:cloudlinux' },
      { name: 'Certbot', icon: 'logos:certbot' },
      { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
    ],
  },
  cta: {
    accentText: 'Is your website protected?',
    mainText: "Let's secure it.",
    ariaLabel: 'Start securing your website with WOW Host',
  },
} as const
