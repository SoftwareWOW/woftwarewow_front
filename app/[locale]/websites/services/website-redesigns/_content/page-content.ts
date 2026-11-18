export const WEBSITE_REDESIGNS_PAGE_METADATA = {
  title: 'Website Redesigns | WOW Websites',
  description:
    'Give your online presence the upgrade it deserves. We transform outdated websites into modern, intuitive, high-performing experiences that better reflect your business and turn more visitors into opportunities.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WEBSITE REDESIGNS',
    title: 'Your Business Has Evolved. Has Your ',
    italicTitle: 'Website?',
    description:
      'Give your online presence the upgrade it deserves. We transform outdated websites into modern, intuitive, high-performing experiences that better reflect your business and turn more visitors into opportunities.',
    primaryCta: { label: 'REDESIGN MY WEBSITE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    media: {
      src: '/images/wow/Hero/devision/Website 1.jpg',
      alt: 'Modern website redesign preview on desktop',
    },
    headingId: 'website-redesigns-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'An Outdated Website Sends the ',
    titleAccent: 'Wrong Message.',
    titleSuffix: '',
    description:
      'As your business grows, your website needs to keep up. An aging design, frustrating navigation, or outdated technology can weaken the experience you offer visitors.',
    items: [
      {
        number: '01',
        title: 'Outdated Design',
        description: 'Your website no longer reflects your brand.',
      },
      {
        number: '02',
        title: 'Poor Usability',
        description: 'Visitors struggle to find what matters.',
      },
      {
        number: '03',
        title: 'Slow Performance',
        description: 'Long loading times create frustration.',
      },
      {
        number: '04',
        title: 'Low Engagement',
        description: 'Visitors leave without taking action.',
      },
    ],
  },
  whatWeTransform: {
    eyebrow: 'WHAT WE TRANSFORM',
    titleBefore: 'A Complete ',
    titleAccent: 'Refresh. Inside and Out.',
    description:
      'We improve the areas that matter most, from visual identity and navigation to performance, functionality, and the overall visitor experience.',
    sectionId: 'what-we-transform',
    capabilityCards: [
      {
        title: 'Visual Redesign',
        headline: '',
        description:
          "Refresh your website's layouts, typography, colors, and visual elements to reflect a modern, professional brand.",
      },
      {
        title: 'UX Improvements',
        headline: '',
        description:
          'Simplify navigation, improve page structures, and create smoother journeys that help visitors find what they need.',
      },
      {
        title: 'Responsive Experience',
        headline: '',
        description:
          'Optimize your website for desktops, tablets, and smartphones to deliver a consistent experience across devices.',
      },
      {
        title: 'Performance Upgrades',
        headline: '',
        description:
          'Improve loading speeds, responsiveness, and technical efficiency to create a faster, more reliable browsing experience.',
      },
      {
        title: 'Content Restructuring',
        headline: '',
        description:
          'Reorganize pages, messaging, and information to make your content clearer, more engaging, and easier to explore.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE REDESIGN ADVANTAGE',
    title: 'A Better Website. A Stronger Business Presence.',
    description:
      'A strategic redesign can change how people experience your business, making your website easier to use, more trustworthy, and more effective.',
    sectionId: 'redesign-advantage',
    benefits: [
      {
        title: 'Stronger Credibility',
        description: 'Present a more professional image.',
      },
      {
        title: 'Better Engagement',
        description: 'Create smoother visitor experiences.',
      },
      {
        title: 'More Enquiries',
        description: 'Make the next step easier to take.',
      },
      {
        title: 'Future Readiness',
        description: 'Support your business as it evolves.',
      },
    ],
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Website redesign device mockups',
    },
  },
  process: {
    eyebrow: 'OUR REDESIGN PROCESS',
    title: 'From Outdated to Outstanding.',
    ctaLabel: 'REDESIGN MY WEBSITE',
    ctaHref: '/meet',
    steps: [
      { number: '01', title: 'Audit', description: 'Review your existing website.' },
      { number: '02', title: 'Plan', description: 'Define improvements and goals.' },
      { number: '03', title: 'Redesign', description: 'Create the new experience.' },
      { number: '04', title: 'Develop', description: 'Build and optimize.' },
      { number: '05', title: 'Relaunch', description: 'Test, migrate, and publish.' },
    ],
  },
  technologies: {
    eyebrow: 'OUR TECHNOLOGIES',
    headlineBefore: 'Built With the Right ',
    headlineAccent: 'Technology.',
    description:
      'We work with modern, reliable technologies to build fast, secure, and scalable websites. Every project gets the tools that best fit its needs.',
    tools: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Vercel', icon: 'simple-icons:vercel' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Strapi', icon: 'simple-icons:strapi' },
      { name: 'WordPress', icon: 'logos:wordpress-icon' },
    ],
  },
  cta: {
    accentText: 'Time for a refresh?',
    mainText: "Let's redesign it.",
    ariaLabel: "Time for a refresh? Let's redesign it.",
  },
} as const