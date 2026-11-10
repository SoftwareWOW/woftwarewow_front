const HERO_IMAGE = '/images/wow/Hero/devision/Accelerate.jpg'
const BUILT_IMAGE = '/images/wow/Hero/Growth/image (2).png'
const DASHBOARD_IMG_A = '/images/wow/blog/Blog card 3.jpg'
const DASHBOARD_IMG_B = '/images/wow/nav/cards/pexels-pixabay-35208 1.png'

export const SALES_ANALYTICS_REPORTING_PAGE_METADATA = {
  title: 'Sales Analytics & Reporting Services | WOW Accelerate',
  description:
    'Gain clearer sales insights with CRM dashboards, pipeline analytics, conversion tracking, revenue forecasting, and sales performance reporting.',
} as const

export const CONTENT = {
  hero: {
    badgeTitle: 'SALES ANALYTICS & REPORTING',
    title: 'See the numbers.',
    italicTitle: 'Drive the growth.',
    description:
      'Turn sales data into clear insights, smarter decisions, and a stronger revenue pipeline.',
    images: [{ src: HERO_IMAGE, alt: 'Sales analytics and reporting' }],
    primaryCtaLabel: 'Unlock Sales Insights',
    primaryCtaHref: '/contact',
  },
  wowGrowthFramework: {
    eyebrow: 'OUR FRAMEWORK',
    title: 'From raw data to',
    accentTitle: 'revenue clarity.',
    description: '',
    frameworkTagline: 'Track → Analyze → Understand → Improve → Forecast → Grow',
    ctaLabel: 'Explore Sales Analytics',
    ctaHref: '/contact',
    steps: [
      {
        title: 'Track',
        description: 'Capture sales activity, pipeline movement, and key performance metrics.',
      },
      {
        title: 'Analyze',
        description: 'Discover patterns across leads, deals, and conversions.',
      },
      {
        title: 'Understand',
        description: 'Identify bottlenecks, missed opportunities, and performance gaps.',
      },
      {
        title: 'Improve',
        description: 'Use insights to strengthen sales processes and team performance.',
      },
      {
        title: 'Forecast',
        description: 'Estimate future revenue using pipeline data and deal trends.',
      },
      {
        title: 'Grow',
        description: 'Turn proven insights into smarter sales decisions.',
      },
    ],
  },
  strategicExpertise: {
    eyebrow: 'WHAT WE MEASURE',
    title: 'The right metrics.',
    accentTitle: 'Better decisions.',
    description: 'Understand what drives your sales performance and where opportunities exist.',
    ctaLabel: 'Explore Our Capabilities',
    ctaHref: '/contact',
    items: [
      {
        title: 'Pipeline Analytics',
        description: 'See deal progress, pipeline value, and potential bottlenecks.',
      },
      {
        title: 'Lead Performance',
        description: 'Track lead quality, sources, and qualification rates.',
      },
      {
        title: 'Conversion Analytics',
        description: 'Understand how prospects move through each sales stage.',
      },
      {
        title: 'Sales Activity Tracking',
        description: 'Monitor outreach, meetings, follow-ups, and team activity.',
      },
      {
        title: 'Revenue Forecasting',
        description: 'Build clearer revenue projections from your sales pipeline.',
      },
    ],
  },
  builtAroundYourBusiness: {
    eyebrow: 'TAILORED ANALYTICS',
    title: 'Your sales goals.',
    accentTitle: 'Your performance dashboard.',
    description: 'Measure what matters most to your team, pipeline, and revenue.',
    ctaLabel: 'Customize Your Reporting',
    ctaHref: '/contact',
    image: { src: BUILT_IMAGE, alt: 'Tailored sales analytics' },
    steps: [
      {
        title: 'Sales Objectives',
        description: 'Track progress toward your most important targets.',
      },
      {
        title: 'Sales Cycle',
        description: 'Understand deal velocity and time to close.',
      },
      {
        title: 'Lead Sources',
        description: 'Discover which channels create valuable opportunities.',
      },
      {
        title: 'Pipeline Stages',
        description: 'Identify where deals progress or get stuck.',
      },
      {
        title: 'Team Performance',
        description: 'Monitor activities, productivity, and sales outcomes.',
      },
    ],
  },
  strategyInAction: {
    eyebrow: 'REAL-WORLD APPLICATIONS',
    titleBefore: 'Clearer visibility.',
    titleAccent: 'Smarter next steps.',
    description: 'See how sales analytics can support everyday revenue decisions.',
    ctaLabel: 'Explore More Sales Insights',
    ctaHref: '/contact',
    projects: [
      {
        title: 'Pipeline Performance Dashboard',
        description:
          'Know where every deal stands. Visualize opportunities, deal stages, and pipeline movement in one place.',
        thumbnail: DASHBOARD_IMG_A,
        href: '/contact',
        buttonLabel: 'Explore Pipeline Analytics',
        slug: 'pipeline-performance-dashboard',
      },
      {
        title: 'Sales Conversion Dashboard',
        description:
          "Find what's helping deals close. Track conversion rates, sales activities, and opportunities for improvement.",
        thumbnail: DASHBOARD_IMG_B,
        href: '/contact',
        buttonLabel: 'Explore Conversion Analytics',
        slug: 'sales-conversion-dashboard',
      },
    ],
  },
  cta: {
    accentText: 'Ready to turn',
    mainText: 'sales data into growth?',
    ariaLabel: 'Talk to WOW Accelerate about sales analytics and reporting',
  },
}
