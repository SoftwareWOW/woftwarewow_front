export const WEBSITE_OPTIMIZATION_PAGE_METADATA = {
  title: 'Website Optimization | WOW Websites',
  description:
    'Your website should perform as impressively as it looks. We improve speed, technical performance, and overall reliability to create smoother experiences for visitors.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'WEBSITE OPTIMIZATION',
    title: 'A Faster Website. ',
    italicTitle: 'A Better Experience.',
    description:
      'Your website should perform as impressively as it looks. We improve speed, technical performance, and overall reliability to create smoother experiences for visitors and a stronger foundation for your business.',
    primaryCta: { label: 'OPTIMIZE MY WEBSITE', href: '/meet' },
    secondaryCta: { label: 'EXPLORE OUR WORK', href: '/portfolio' },
    media: {
      src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
      alt: 'Website performance optimization preview',
    },
    headingId: 'website-optimization-hero-heading',
  },
  challenge: {
    eyebrow: 'THE CHALLENGE',
    titleBefore: 'Small Technical Problems. Big ',
    titleAccent: 'Frustrations.',
    titleSuffix: '',
    description:
      'Even a beautifully designed website can underperform when technical issues disrupt the browsing experience and make everyday interactions unnecessarily difficult.',
    capabilityCards: [
      {
        title: 'Slow Loading',
        headline: '',
        description:
          'Heavy files and inefficient code delay page loading, frustrating visitors before they can explore your website.',
      },
      {
        title: 'Unstable Layouts',
        headline: '',
        description:
          'Unexpected content shifts and delayed interactions make browsing frustrating and reduce confidence in your website.',
      },
      {
        title: 'Technical Issues',
        headline: '',
        description:
          'Broken functionality and outdated components create problems that interrupt important user journeys.',
      },
      {
        title: 'Poor Mobile Performance',
        headline: '',
        description:
          'Unoptimized resources and slow interactions make your website harder to use on mobile devices.',
      },
    ],
  },
  whatWeOptimize: {
    eyebrow: 'WHAT WE OPTIMIZE',
    titleBefore: 'Performance Built Into Every ',
    titleAccent: 'Layer.',
    description:
      'We address technical performance across your website—improving speed, stability, and reliability so visitors can browse and act with less friction.',
    sectionId: 'what-we-optimize',
    capabilityCards: [
      {
        title: 'Speed Optimization',
        headline: '',
        description: 'Reduce loading times through smarter asset delivery, caching, and code improvements.',
      },
      {
        title: 'Core Web Vitals',
        headline: '',
        description: 'Improve loading, responsiveness, and visual stability across important pages.',
      },
      {
        title: 'Code Optimization',
        headline: '',
        description: 'Refine scripts, components, and resources to reduce unnecessary processing.',
      },
      {
        title: 'Image Optimization',
        headline: '',
        description: 'Compress and deliver images efficiently without sacrificing visual quality.',
      },
      {
        title: 'Technical Maintenance',
        headline: '',
        description:
          'Identify outdated components, broken functionality, and issues affecting reliability.',
      },
      {
        title: 'Mobile Optimization',
        headline: '',
        description: 'Improve loading efficiency and responsiveness across smartphones and tablets.',
      },
    ],
  },
  advantage: {
    eyebrow: 'THE PERFORMANCE ADVANTAGE',
    titleBefore: 'Feel the Difference in Every ',
    titleAccent: 'Interaction.',
    description:
      'A well-optimized website creates smoother experiences for visitors while supporting the long-term performance and stability of your business’s digital presence.',
    beforeLabel: 'BEFORE',
    afterLabel: 'After',
    beforeSteps: [
      'Slow Loading — Visitors wait for pages to appear.',
      'Unstable Pages — Content shifts unexpectedly during loading.',
      'Sluggish Interactions — Buttons and menus respond slowly.',
      'Frequent Issues — Technical problems interrupt browsing.',
    ],
    afterSteps: [
      'Faster Loading — Visitors access content more quickly.',
      'Stable Layouts — Pages remain visually consistent.',
      'Smoother Interactions — Controls respond more efficiently.',
      'Greater Reliability — Fewer disruptions during important tasks.',
    ],
  },
  process: {
    eyebrow: 'OUR OPTIMIZATION PROCESS',
    title: 'Measure. Improve. Validate.',
    description:
      'We use a practical, performance-focused process to identify issues, implement improvements, and verify the results.',
    steps: [
      {
        number: '01',
        title: 'Audit',
        description: 'Analyze website performance, technical health, and key bottlenecks.',
      },
      {
        number: '02',
        title: 'Prioritize',
        description: 'Identify improvements with the greatest potential impact.',
      },
      {
        number: '03',
        title: 'Optimize',
        description: 'Implement targeted fixes across code, assets, and functionality.',
      },
      {
        number: '04',
        title: 'Validate',
        description: 'Retest performance and confirm improvements across important pages.',
      },
    ],
  },
  technologies: {
    eyebrow: 'OUR TOOLS & TECHNOLOGIES',
    headlineBefore: 'Performance You Can ',
    headlineAccent: 'Measure.',
    description:
      'We use performance analysis, diagnostics, and modern development tools to identify technical issues and evaluate website improvements.',
    tools: [
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'Vercel', icon: 'logos:vercel' },
      { name: 'PageSpeed Insights', icon: 'simple-icons:pagespeedinsights' },
      { name: 'Lighthouse', icon: 'logos:lighthouse' },
      { name: 'Chrome', icon: 'logos:chrome' },
      { name: 'New Relic', icon: 'simple-icons:newrelic' },
    ],
  },
  cta: {
    accentText: 'Website running slow?',
    mainText: "Let's speed it up.",
    ariaLabel: "Website running slow? Let's speed it up.",
  },
} as const