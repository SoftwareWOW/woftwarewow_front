import pricingBg from '@/public/images/pricing-gradient.png'

/** Static copy for SoftwareWOW division page. */

/** Vertical rhythm between blocks comes from `page.tsx` flex `gap-*` only — no section py/my. */
export const SOFTWAREWOW_SECTION_SHELL =
  'bg-background transition-colors duration-300 dark:bg-background'

export const SOFTWAREWOW_PORTFOLIO = {
  eyebrow: 'OUR WORK',
  titleBefore: 'Ideas Turned Into Real',
  titleAccent: 'Digital Experiences.',
  description:
    'Every software project starts with a challenge worth solving. Explore how thoughtful design, technology, and development come together to create practical digital solutions.',
  initialVisibleCount: 2,
  expandLabel: 'See More of Our Creative Work',
  collapseLabel: 'See Less',
  projects: [
    {
      category: 'CONSULTING & PROFESSIONAL SERVICES',
      year: '2020',
      title: 'CCG Breakthrough',
      href: '/case-study/ccg-breakthrough',
      image: '/images/wow/Hero/project/case-study/ccg.png',
    },
    {
      category: 'TECHNOLOGY & SYSTEMS',
      year: '2025',
      title: 'Smartek Systems Canada',
      href: '/case-study/smartek',
      image: '/images/wow/Hero/project/case-study/smartek.png',
    },
    {
      category: 'PRODUCT & INNOVATION',
      year: '2024',
      title: 'Inity Inc',
      href: '/case-study/inity-inc',
      image: '/images/wow/Hero/project/case-study/InityInc.png',
    },
    {
      category: 'HOSPITALITY & EXPERIENCE',
      year: '2023',
      title: 'DaVinci Lounge',
      href: '/case-study/davinci-lounge',
      image: '/images/wow/Hero/project/case-study/davinci.png',
    },
  ],
} as const

export const SOFTWAREWOW_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'When Technology Gets in the Way, Growth',
  titleAccent: 'Gets Harder.',
  description:
    'Disconnected tools, repetitive tasks, manual processes, and software that doesn\'t fit your business can make everyday work harder than it needs to be.',
  problemLabel: 'When Your Tools Don\'t Work Together',
  solutionLabel: 'When Software Works Around You',
  problemSteps: [
    'Information lives in different places.',
    'Teams repeat the same work.',
    'Processes rely on manual steps.',
    'Existing software limits flexibility.',
    'Growth creates more complexity.',
  ],
  solutionSteps: [
    'Information becomes easier to manage.',
    'Workflows become more connected.',
    'Repetitive tasks can be automated.',
    'Systems reflect how your business operates.',
    'Technology can evolve with your needs.',
  ],
  footerSummary: 'Software should simplify your operations—not add another layer of complexity.',
  ctaLabel: 'Let\'s Talk About Your Challenge',
  ctaHref: '/meet',
} as const

export const SOFTWAREWOW_SERVICES = {
  eyebrow: 'OUR SERVICES',
  titleBefore: 'From First Concept to Fully Functional',
  titleAccent: 'Software.',
  description:
    'Whether you\'re creating a new product or improving the systems behind your business, SoftwareWOW brings together the capabilities needed to design, develop, and evolve your technology.',
  initialVisibleCount: 3,
  expandLabel: 'See More',
  collapseLabel: 'Show Less',
  items: [
    {
      id: 1,
      title: 'Custom Software Development',
      description: 'Business applications · Internal tools · Custom platforms',
      image: '/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg',
      alt: 'Custom software development',
    },
    {
      id: 2,
      title: 'Web & Mobile Applications',
      description: 'Web apps · Mobile apps · Customer portals',
      image: '/images/wow/Hero/devision/Design 2.jpg',
      alt: 'Web and mobile applications',
    },
    {
      id: 3,
      title: 'Business Systems & Automation',
      description: 'CRM systems · Workflow tools · Integrations',
      image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Business systems and automation',
    },
    {
      id: 4,
      title: 'Product Design & Prototyping',
      description: 'Discovery · UX/UI · Interactive prototypes',
      image: '/images/wow/Hero/devision/Design 1.jpg',
      alt: 'Product design and prototyping',
    },
    {
      id: 5,
      title: 'Integrations & Modernization',
      description: 'APIs · System integrations · Platform upgrades',
      image: '/images/wow/Hero/devision/Image-copy-scaled.jpeg',
      alt: 'Integrations and modernization',
    },
    {
      id: 6,
      title: 'Software Support & Improvement',
      description: 'Maintenance · Enhancements · Technical support',
      image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Software support and improvement',
    },
  ],
} as const

export const SOFTWAREWOW_OUTCOMES = {
  eyebrow: 'MORE THAN CODE',
  title: 'Software Built Around',
  accentTitle: 'Business Outcomes',
  description:
    'Features matter—but they aren\'t the whole job. SoftwareWOW combines discovery, UX, engineering, integration, and long-term thinking to create software that works harder for your business.',
  ctaLabel: 'Explore our approach',
  ctaHref: '/meet',
  items: [
    {
      title: 'Problem-First Thinking',
      description: 'Every build starts with the business challenge, not a list of technologies.',
    },
    {
      title: 'Thoughtful UX/UI',
      description: 'Interfaces designed to make complex tasks easier for the people who use them.',
    },
    {
      title: 'Engineering Discipline',
      description: 'Structured technical decisions and development practices you can rely on.',
    },
    {
      title: 'Integration Mindset',
      description: 'Software that fits existing tools, data, and workflows—not the other way around.',
    },
    {
      title: 'Flexible Product Thinking',
      description: 'Priorities shaped by what your business needs now and where it\'s heading next.',
    },
    {
      title: 'Built to Evolve',
      description: 'Systems designed so you can enhance, extend, and adapt as requirements change.',
    },
  ],
} as const

export const SOFTWAREWOW_FRAMEWORK = {
  eyebrow: 'OUR FRAMEWORK',
  titleBefore: 'Built Around the Problem. Designed Around',
  titleAccent: 'the People.',
  headerDescription:
    'Great software connects business goals with the people who use it every day—from understanding the challenge to planning for what comes next.',
  headerCtaLabel: 'Discuss your project',
  headerCtaHref: '/meet',
  steps: [
    { id: '01', title: 'Understand', description: 'Start with the business challenge, not a list of technologies.' },
    { id: '02', title: 'Design', description: 'Make software clear, useful, and intuitive for its users.' },
    { id: '03', title: 'Build', description: 'Prioritize the features that deliver the most practical value.' },
    { id: '04', title: 'Connect', description: 'Consider how the product fits existing workflows and systems.' },
    { id: '05', title: 'Plan', description: 'Make informed technical choices with future needs in mind.' },
  ],
  image: {
    src: '/images/wow/Hero/devision/Intelligence.jpg',
    alt: 'Abstract layered software architecture illustration',
  },
} as const

export const SOFTWAREWOW_PROCESS = {
  eyebrow: 'HOW WE WORK',
  title: 'A Clear Path From Idea to Launch.',
  ctaLabel: 'Discuss Your Project',
  ctaHref: '/meet',
  steps: [
    { number: '1', title: 'Discover', description: 'Understand your goals, users, challenges, and requirements.' },
    { number: '2', title: 'Define', description: 'Agree on scope, priorities, features, and the development approach.' },
    { number: '3', title: 'Design', description: 'Create workflows, wireframes, and user interface designs.' },
    { number: '4', title: 'Develop', description: 'Build the agreed features through structured development.' },
    { number: '5', title: 'Test & Launch', description: 'Review functionality, address issues, and prepare the release.' },
    { number: '6', title: 'Improve', description: 'Use feedback and changing needs to guide future enhancements.' },
  ],
} as const

export const SOFTWAREWOW_WHY = {
  eyebrow: 'WHY SOFTWAREWOW',
  title: 'A Software Partner That Thinks Beyond the First Release.',
  description:
    'Software becomes part of how your business operates. That\'s why we look beyond individual features to consider usability, maintainability, integration, and long-term value.',
  items: [
    { title: 'Business Understanding', description: 'Solutions shaped around the challenge you\'re actually trying to solve.' },
    { title: 'Thoughtful UX/UI', description: 'Interfaces designed to make complex tasks easier to complete.' },
    { title: 'Engineering Discipline', description: 'Structured technical decisions and development practices.' },
    { title: 'Integration Mindset', description: 'Consideration for existing tools, data, and business processes.' },
    { title: 'Flexible Product Thinking', description: 'Priorities and solutions informed by your current and future needs.' },
    { title: 'Connected Expertise', description: 'Access to complementary WOW specialists when projects extend beyond software.' },
  ],
} as const

export const SOFTWAREWOW_INDUSTRIES = {
  eyebrow: 'INDUSTRIES',
  titleBefore: 'Software Solutions Tailored to',
  titleAccent: 'Your Industry',
  description:
    'Every industry operates differently. We tailor software strategy, architecture, and delivery to your market, users, and business goals.',
  slides: [
    {
      title: 'Healthcare',
      description: 'Build secure, compliant systems that support care teams and patient experiences.',
      image: '/images/wow/Hero/devision/Image-copy-scaled.jpeg',
      href: '/industries/healthcare-and-wellness',
    },
    {
      title: 'Hospitality',
      description: 'Streamline operations, bookings, and guest-facing digital experiences.',
      image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      href: '/industries/hospitality-and-tourism',
    },
    {
      title: 'Construction',
      description: 'Connect field teams, project data, and operational workflows in one place.',
      image: '/images/wow/Hero/devision/Design 1.jpg',
      href: '/industries/professional-services',
    },
    {
      title: 'Professional Services',
      description: 'Custom tools that reflect how your firm delivers expertise and manages clients.',
      image: '/images/wow/Hero/devision/Image-copy-scaled.jpeg',
      href: '/industries/professional-services',
    },
    {
      title: 'Retail & eCommerce',
      description: 'Platforms and integrations that support sales, inventory, and customer journeys.',
      image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      href: '/industries/retail-and-ecommerce',
    },
    {
      title: 'Technology & SaaS',
      description: 'Product engineering, scaling, and modernization for software-led businesses.',
      image: '/images/wow/Hero/devision/Design 1.jpg',
      href: '/industries/technology-and-saas',
    },
  ],
} as const

export const SOFTWAREWOW_TESTIMONIALS = {
  eyebrow: 'TESTIMONIALS',
  title: 'What Our Clients Say About Working With Us',
} as const

export const SOFTWAREWOW_PLATFORMS = {
  intro:
    'We select platforms and technologies based on your requirements, content, integrations, scalability, management needs, and long-term plans.',
} as const

/** Iconify ids — static grid (Design / Social creative-tools pattern). */
export const SOFTWAREWOW_PLATFORM_ICONS = [
  { id: 1, name: 'WordPress', icon: 'logos:wordpress-icon' },
  { id: 2, name: 'Shopify', icon: 'logos:shopify' },
  { id: 3, name: 'Microsoft Azure', icon: 'logos:microsoft-azure' },
  { id: 4, name: 'Google', icon: 'logos:google-icon' },
  { id: 5, name: 'Webflow', icon: 'simple-icons:webflow' },
  { id: 6, name: 'WooCommerce', icon: 'logos:woocommerce-icon' },
  { id: 7, name: 'Figma', icon: 'logos:figma' },
] as const

export const SOFTWAREWOW_SOLUTIONS = {
  eyebrow: 'WORK WITH US',
  title: 'Start Where Your Project Needs You To.',
  description:
    'Some ideas need clarity before development. Others are ready to build. And some software needs an experienced team to improve what\'s already there.',
  cta: { label: 'Learn More', href: '/meet' },
  plans: [
    {
      id: 1,
      title: 'Product Discovery',
      tagline: 'Best for businesses that need to validate ideas and plan their software before development.',
      description:
        'Best for businesses that need to validate ideas and plan their software before development.',
      features: [
        'Business requirements',
        'Product research & analysis',
        'User journeys & workflows',
        'Features & scope definition',
        'Development roadmap',
      ],
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      title: 'Software Development',
      tagline: 'Best for businesses ready to turn their ideas into fully functional, scalable software.',
      description:
        'Best for businesses ready to turn their ideas into fully functional, scalable software.',
      features: [
        'Requirements & planning',
        'UI/UX design',
        'Custom software development',
        'Database & API integrations',
        'Quality assurance & testing',
        'Deployment & launch',
      ],
      ctaVariant: 'primary' as const,
      isFeatured: pricingBg,
    },
    {
      id: 3,
      title: 'Ongoing Development',
      tagline:
        'Best for businesses with existing software that needs continuous improvements, support, and new capabilities.',
      description:
        'Best for businesses with existing software that needs continuous improvements, support, and new capabilities.',
      features: [
        'Software maintenance & support',
        'Bug fixes & troubleshooting',
        'Performance optimization',
        'Feature enhancements',
        'Security & system updates',
        'Third-party integrations',
        'Continuous development',
      ],
      ctaVariant: 'white' as const,
    },
  ],
} as const

export const SOFTWAREWOW_FAQS = [
  {
    id: 1,
    question: 'What kinds of software does SoftwareWOW! build?',
    answer:
      'We design and engineer custom web apps, mobile apps, SaaS products, internal tools, APIs, and digital platforms — from MVP to production systems that scale with your business.',
  },
  {
    id: 2,
    question: 'How long does a typical software project take?',
    answer:
      'Timelines depend on scope and complexity. A focused MVP often takes 6–12 weeks, while larger platforms can run several months. After discovery, we share a clear roadmap with milestones and delivery dates.',
  },
  {
    id: 3,
    question: 'How do you estimate cost for custom software?',
    answer:
      'Most projects are fixed-bid once requirements, scope, and deliverables are clear. We start with a discovery conversation to understand goals, then provide a transparent estimate before engineering begins.',
  },
  {
    id: 4,
    question: 'Do you handle both design and development?',
    answer:
      'Yes. Our team covers product design, UI/UX, frontend, backend, cloud infrastructure, and quality assurance — so you get one accountable partner from concept through launch.',
  },
  {
    id: 5,
    question: 'Will we own the code and intellectual property?',
    answer:
      'Yes. Upon project completion and payment, you own the source code and related IP we create for your product, unless a different arrangement is agreed in writing upfront.',
  },
  {
    id: 6,
    question: 'Can you modernize or extend an existing product?',
    answer:
      'Absolutely. We audit legacy codebases, refactor for performance and security, migrate stacks when needed, and add new features without disrupting what already works.',
  },
  {
    id: 7,
    question: 'What technologies do you work with?',
    answer:
      'We use modern stacks such as Next.js, React, Node.js, NestJS, TypeScript, cloud platforms, and AI tooling — choosing what best fits your product goals, team, and long-term maintainability.',
  },
  {
    id: 8,
    question: 'How do we get started?',
    answer:
      'Book a call or reach out through our contact form. We will discuss your goals, recommend an approach, and outline next steps — discovery, proposal, and a kickoff plan tailored to your product.',
  },
] as const

export const SOFTWAREWOW_CTA = {
  accentText: 'Have an idea?',
  mainText: "Let's get it launched.",
  ariaLabel: 'Contact SoftwareWOW about your software idea',
} as const
