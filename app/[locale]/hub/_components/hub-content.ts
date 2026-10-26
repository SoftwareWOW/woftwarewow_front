/** Static copy for WOW Hub division page. */

/** Vertical rhythm between hub blocks comes from `page.tsx` flex `gap-*` only — no section py/my. */
export const HUB_SECTION_SHELL =
  'bg-background transition-colors duration-300 dark:bg-background'
export const HUB_SECTION_INNER = 'container flex flex-col gap-6'

const HERO_IMG = '/images/wow/Hero/devision/Education.jpg'
const EXP_01 = '/images/wow/Hero/devision/Design 1.jpg'
const EXP_02 = '/images/wow/Hero/devision/Design 2.jpg'
const EXP_03 = '/images/wow/Hero/devision/Intelligence.jpg'
const EXP_04 = '/images/wow/Hero/devision/Website 2.jpg'
const EXP_05 = '/images/wow/Hero/devision/Events (1).jpg'
const EXP_06 = '/images/wow/Hero/devision/C-17.jpg'
const COMMUNITY_BANNER = '/images/wow/Hero/devision/Events.jpg'

export const HUB_HERO = {
  badgeTitle: 'PERSONAL BRANDING',
  title: 'Learn More. Grow Smarter. Achieve Bigger.',
  description:
    'Big ambitions start with curiosity. Explore practical learning experiences, expert knowledge, useful resources, and a community designed to help you develop skills and put them to work.',
  primaryCta: 'Explore Learning',
  primaryCtaHref: '/hub#explore',
  secondaryCta: 'Find My Learning Path',
  secondaryCtaHref: '/meet',
  images: [{ src: HERO_IMG, alt: 'Learner with headphones studying in a library' }],
} as const

export const HUB_EXPLORE = {
  id: 'explore',
  eyebrow: 'EXPLORE LEARNING',
  titleBefore: 'Follow Your Curiosity. Find Your ',
  titleAccent: 'Next Skill.',
  description:
    "Whatever you want to achieve, there's something new worth learning. Explore practical topics across business, creativity, technology, and personal development—and discover the skills that can help you move forward.",
  topics: [
    {
      slug: 'marketing-growth',
      title: 'Marketing & Growth',
      description:
        'Learn how to understand your audience, build campaigns, create content, and grow your business.',
      coverImage: EXP_01,
      href: '/meet',
    },
    {
      slug: 'design-creativity',
      title: 'Design & Creativity',
      description: 'Explore visual design, brand identity, and creative thinking.',
      coverImage: EXP_02,
      href: '/meet',
    },
    {
      slug: 'technology-ai',
      title: 'Technology & AI',
      description: 'Discover websites, software, AI, and practical digital tools.',
      coverImage: EXP_03,
      href: '/meet',
    },
    {
      slug: 'sales-business',
      title: 'Sales & Business',
      description: 'Build skills in sales, entrepreneurship, and business development.',
      coverImage: EXP_04,
      href: '/meet',
    },
    {
      slug: 'leadership-branding',
      title: 'Leadership & Personal Branding',
      description: 'Develop your professional voice, confidence, and leadership presence.',
      coverImage: EXP_05,
      href: '/meet',
    },
    {
      slug: 'community-collaboration',
      title: 'Community & Collaboration',
      description:
        'Explore shared learning, teamwork, networking, and meaningful professional connections.',
      coverImage: EXP_06,
      href: '/meet',
    },
  ],
} as const

export const HUB_CHALLENGE = {
  eyebrow: 'THE CHALLENGE',
  titleBefore: 'Information Is Everywhere. Knowing What to Do With It Is the ',
  titleAccent: 'Hard Part.',
  description:
    "It's easy to watch another tutorial, save another article, or collect another list of tips. Real progress begins when learning becomes something you can practice and apply.",
  steps: [
    {
      id: '01',
      title: 'Collecting',
      description: 'Endless videos, tabs, tips, and saved resources.',
    },
    {
      id: '02',
      title: 'Understanding',
      description: 'Clear lessons and a direction to follow.',
    },
    {
      id: '03',
      title: 'Applying',
      description: 'Practical exercises and progress you can demonstrate.',
    },
  ],
} as const

export const HUB_PROGRAMS = {
  eyebrow: 'OUR PROGRAMS',
  title: 'Different Ways to Learn.',
  accentTitle: 'One Goal: Move Forward.',
  description:
    'Some skills are best learned through a structured course. Others need a live conversation, hands-on practice, or a useful resource at exactly the right moment. WOW Hub brings these learning experiences together.',
  items: [
    {
      title: 'Courses & Learning Programs',
      description: 'Self-paced lessons · Guided exercises · Learning modules',
    },
    {
      title: 'Workshops & Masterclasses',
      description: 'Live sessions · Expert discussions · Interactive workshops',
    },
    {
      title: 'Coaching & Guidance',
      description: 'Coaching sessions · Practical guidance · Goal setting',
    },
    {
      title: 'Resources & Toolkits',
      description: 'Templates · Guides · Checklists · Business resources',
    },
  ],
} as const

export const HUB_LEARNING_PATHWAYS = {
  eyebrow: 'LEARNING PATHWAYS',
  titleBefore: 'Your Goals Are Different. ',
  titleAccent: 'Your Learning Should Be Too.',
  description: '',
  items: [
    { title: 'Grow My Business', href: '/meet' },
    { title: 'Develop creative skills', href: '/meet' },
    { title: 'Social Media Marketing', href: '/meet' },
    { title: 'Improve Sales skills', href: '/meet' },
    { title: 'Explore Technology & AI', href: '/meet' },
  ],
} as const

export const HUB_HOW_IT_WORKS = {
  eyebrow: 'HOW IT WORKS',
  titleBefore: 'Learning That Fits Into ',
  titleAccent: 'Real Life.',
  steps: [
    {
      id: 1,
      title: 'Find Your Topic',
      description: 'Explore the skills, subjects, and learning experiences that interest you.',
    },
    {
      id: 2,
      title: 'Build Your Understanding',
      description: 'Follow practical lessons, demonstrations, and expert guidance.',
    },
    {
      id: 3,
      title: 'Put It Into Action',
      description: "Use exercises, projects, and resources to apply what you've learned.",
    },
    {
      id: 4,
      title: 'Keep Moving Forward',
      description: 'Reflect on your work, discover the next skill, and continue developing.',
    },
  ],
} as const

export const HUB_LEARNING_OPTIONS = {
  eyebrow: 'LEARNING OPTIONS',
  titleBefore: 'Start Small. Learn More. ',
  titleAccent: 'Keep Growing.',
  description:
    'Learning should have different entry points. Explore useful resources, join focused programs, or choose a more connected learning experience when available.',
  plans: [
    {
      id: 1,
      badge: 'EXPLORE',
      title: 'Free Resources',
      description:
        'Discover introductory guides, useful articles, checklists, and selected educational materials.',
      ctaLabel: 'Explore Free Resources',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
    {
      id: 2,
      badge: 'DEVELOP',
      title: 'Courses & Workshops',
      description:
        'Go deeper with structured lessons, focused workshops, and practical learning experiences.',
      ctaLabel: 'Explore Programs',
      ctaHref: '/meet',
      ctaVariant: 'primary' as const,
      isFeatured: true,
    },
    {
      id: 3,
      badge: 'CONNECT',
      title: 'WOW Hub Membership',
      description:
        'A proposed ongoing learning experience bringing together selected resources, community participation, and member activities.',
      ctaLabel: 'Learn About Membership',
      ctaHref: '/meet',
      ctaVariant: 'white' as const,
    },
  ],
  footer: {
    titleAccent: 'Not sure where to start?',
    description: 'Begin with a topic that interests you, and explore the learning format that suits your goals.',
    ctaLabel: 'Find My Learning Path',
    ctaHref: '/meet',
  },
} as const

export const HUB_COMMUNITY = {
  eyebrow: 'OUR COMMUNITY',
  titleBefore: 'Good Ideas Grow When ',
  titleAccent: 'People Share Them.',
  description:
    "Learning doesn't have to happen alone. WOW Hub aims to bring together curious professionals, entrepreneurs, creators, and business owners who want to exchange ideas, ask questions, and keep growing.",
  bannerImage: COMMUNITY_BANNER,
  bannerAlt: 'Community learning and collaboration',
  items: [
    {
      title: 'Ask & Discuss',
      description: 'Explore questions, share ideas, and learn from different perspectives.',
    },
    {
      title: 'Live Sessions',
      description: 'Join proposed workshops, learning sessions, and expert discussions.',
    },
    {
      title: 'Meet & Connect',
      description: 'Build relationships with people who share your professional interests.',
    },
    {
      title: 'Share Your Work',
      description: 'Exchange projects, ideas, and practical learning experiences.',
    },
  ],
} as const

export const HUB_FAQ_HEADER = {
  sectionLabel: 'FAQ',
  titleBefore: 'Curious? That’s a Great Place to ',
  titleAccent: 'Start.',
  description: 'Here are answers to common questions about learning with WOW Hub.',
  viewAllHref: '/faq',
} as const

export const HUB_FAQS = [
  {
    id: 1,
    question: 'What is WOW Hub?',
    answer:
      'WOW Hub is a learning-focused space within WOW Superagency where professionals can explore courses, workshops, resources, and community experiences designed to build practical skills.',
  },
  {
    id: 2,
    question: 'Who is WOW Hub for?',
    answer:
      'WOW Hub is for entrepreneurs, creators, professionals, and business owners who want to keep learning, improve their skills, and connect with others on similar paths.',
  },
  {
    id: 3,
    question: 'Do I need previous experience?',
    answer:
      'No. Programs and resources can be designed for different experience levels—from foundational learning to more advanced professional development.',
  },
  {
    id: 4,
    question: 'What can I learn?',
    answer:
      'Topics may include marketing, design, technology, AI, sales, business development, leadership, personal branding, and collaborative professional skills.',
  },
  {
    id: 5,
    question: 'Will courses be self-paced or live?',
    answer:
      "WOW Hub's proposed learning formats include self-paced courses, live workshops, masterclasses, and guided learning. Availability will depend on the published program catalog.",
  },
  {
    id: 6,
    question: 'Will there be free resources?',
    answer:
      'Yes. WOW Hub aims to include useful guides, templates, and introductory resources alongside structured programs and live learning experiences.',
  },
] as const

export const HUB_CTA = {
  accentText: 'Have an idea?',
  mainText: "Let's get it launched.",
  ariaLabel: 'Contact WOW Hub at WOW Superagency',
} as const
