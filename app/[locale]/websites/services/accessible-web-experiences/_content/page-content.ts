export const ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA = {
  title: 'Accessible Web Experiences | WOW Websites',
  description:
    'Make your website more welcoming, usable, and accessible to everyone. We combine inclusive design, thoughtful development, and accessibility best practices to create digital experiences that help more people engage with your business.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'ACCESSIBLE WEB EXPERIENCES',
    title: 'A Better Web Experience. ',
    italicTitle: 'For Everyone.',
    description:
      'Make your website more welcoming, usable, and accessible to everyone. We combine inclusive design, thoughtful development, and accessibility best practices to create digital experiences that help more people engage with your business.',
    primaryCta: { label: 'MAKE MY WEBSITE ACCESSIBLE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    images: [
      {
        src: '/images/wow/Hero/devision/Website 1.jpg',
        alt: 'Person using a laptop with accessibility-focused web content',
      },
    ],
    headingId: 'accessible-web-experiences-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Not Every Website Works for ',
    titleAccent: 'Everyone.',
    titleSuffix: '',
    description:
      'Websites can unintentionally create barriers that prevent people from navigating content, understanding information, or completing important actions.',
    capabilityCards: [
      {
        title: 'Difficult Navigation',
        headline: '',
        description:
          'Complex menus and inaccessible controls make websites harder to navigate without a mouse. Some visitors cannot reach essential content.',
      },
      {
        title: 'Poor Readability',
        headline: '',
        description:
          'Low contrast and unclear typography make content difficult to read. This creates unnecessary barriers for many visitors.',
      },
      {
        title: 'Missing Alternatives',
        headline: '',
        description:
          'Images, videos, and interactive elements may lack accessible alternatives. Visitors using assistive technology can miss important information.',
      },
      {
        title: 'Confusing Interactions',
        headline: '',
        description:
          'Unclear forms and inconsistent controls make simple tasks frustrating. Visitors may struggle to complete enquiries or other actions independently.',
      },
    ],
  },
  whatWeImprove: {
    eyebrow: 'WHAT WE IMPROVE',
    titleBefore: 'Accessibility in Every ',
    titleAccent: 'Interaction.',
    description:
      'We improve the accessibility of your website through practical design, development, and testing considerations that make digital experiences easier to use.',
    sectionId: 'what-we-improve',
    image: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Accessible website experience across devices',
    },
    steps: [
      {
        id: '01',
        title: 'Accessible Navigation',
        description:
          'Create clear menus and logical page structures that support keyboard navigation. Help visitors move through your website without relying on a mouse.',
      },
      {
        id: '02',
        title: 'Readable Design',
        description:
          'Improve typography, contrast, spacing, and visual hierarchy across your website. Make content easier to read and understand.',
      },
      {
        id: '03',
        title: 'Assistive Compatibility',
        description:
          'Use semantic HTML and meaningful labels to support assistive technologies. Help screen-reader users understand content and controls.',
      },
      {
        id: '04',
        title: 'Accessible Forms',
        description:
          'Design forms with clear labels, validation, and logical tab order. Help visitors complete enquiries and other tasks independently.',
      },
      {
        id: '05',
        title: 'Inclusive Media',
        description:
          'Support meaningful image alternatives, captions, and accessible media controls. Help visitors access information in different ways.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE ACCESSIBILITY ADVANTAGE',
    title: 'Easier to Use. Better for More People.',
    description:
      'Accessibility improvements make digital experiences more inclusive while supporting usability, customer confidence, and the long-term quality of your website.',
    items: [
      {
        title: 'Wider Accessibility',
        description:
          'Make your website more usable for visitors with different needs and abilities. Reduce barriers that prevent people from accessing your content.',
      },
      {
        title: 'Better Usability',
        description:
          'Clear navigation and thoughtful interactions make everyday tasks simpler. These improvements can benefit visitors across devices and situations.',
      },
      {
        title: 'Stronger Trust',
        description:
          'Demonstrate that your business values inclusive digital experiences. Thoughtful accessibility can help visitors feel considered and respected.',
      },
      {
        title: 'Lasting Quality',
        description:
          'Build more consistent, maintainable website experiences through accessible development practices. Establish a stronger foundation for future updates.',
      },
    ],
  },
  process: {
    eyebrow: 'OUR ACCESSIBILITY PROCESS',
    titleBefore: 'Thoughtful Design. Accessible by ',
    titleAccent: 'Nature.',
    description:
      'We evaluate accessibility barriers, implement practical improvements, and test the resulting experience across relevant interactions and technologies.',
    steps: [
      {
        step: 'STEP 01',
        title: 'Audit',
        description: 'Review your website for accessibility barriers and identify areas needing improvement.',
      },
      {
        step: 'STEP 02',
        title: 'Plan',
        description: 'Prioritize improvements and define accessible design and development requirements.',
      },
      {
        step: 'STEP 03',
        title: 'Improve',
        description: 'Update interfaces, content structures, and interactions to reduce identified barriers.',
      },
      {
        step: 'STEP 04',
        title: 'Validate',
        description: 'Test key journeys, document remaining issues, and refine the experience.',
      },
    ],
  },
  approach: {
    eyebrow: 'OUR ACCESSIBILITY APPROACH',
    title: 'Designed With Standards. Tested With Care.',
    steps: [
      {
        id: 1,
        title: 'WCAG Guidelines',
        description: 'Use recognized accessibility criteria to guide design, development, and evaluation.',
      },
      {
        id: 2,
        title: 'Automated Testing',
        description: 'Identify detectable issues using tools such as axe DevTools, WAVE, or Lighthouse.',
      },
      {
        id: 3,
        title: 'Manual Testing',
        description: 'Check keyboard interactions and relevant assistive technology experiences.',
      },
      {
        id: 5,
        title: 'Documented Results',
        description:
          'Summarize findings, recommended fixes, and validation outcomes so your team can maintain accessibility over time.',
      },
    ],
  },
  cta: {
    accentText: 'Ready for a better web?',
    mainText: "Let's make it accessible.",
    ariaLabel: "Ready for a better web? Let's make it accessible.",
  },
} as const