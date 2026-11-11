export type WowDesignNavService = {
  navId: string
  slug: string
  title: string
  headline: string
  description: string
  summary: string
  includes: string[]
  outcomes: string[]
  ctaAccent: string
  ctaMain: string
}

export const WOW_DESIGN_NAV_SERVICES: WowDesignNavService[] = [
  {
    navId: 'brandIdentityStrategy',
    slug: 'brand-identity-strategy',
    title: 'Brand Identity & Strategy',
    headline: 'Build a brand that stands out.',
    description:
      'Build a distinctive brand identity that inspires trust and leaves a lasting impression.',
    summary: 'Strategy, identity, and guidelines that feel unmistakably yours.',
    includes: [
      'Brand strategy & positioning',
      'Logo & visual identity design',
      'Brand guidelines & systems',
      'Brand messaging & storytelling',
    ],
    outcomes: [
      'A clearer, more consistent brand presence',
      'Guidelines your team can use every day',
      'Identity that builds trust at first glance',
    ],
    ctaAccent: 'Ready to shape',
    ctaMain: 'your brand identity?',
  },
  {
    navId: 'graphicMarketingDesign',
    slug: 'graphic-marketing-design',
    title: 'Graphic & Marketing Design',
    headline: 'Creative visuals. Lasting impressions.',
    description:
      'Create impactful visuals that capture attention, communicate your message, and strengthen your brand.',
    summary: 'Marketing and graphic design that supports every campaign.',
    includes: [
      'Social media graphics',
      'Marketing & advertising creatives',
      'Print & digital materials',
      'Presentation & promotional design',
    ],
    outcomes: [
      'Creative assets aligned with your brand',
      'Materials ready for campaigns and channels',
      'Design that helps your message land',
    ],
    ctaAccent: 'Ready for design',
    ctaMain: 'that gets noticed?',
  },
  {
    navId: 'uiUxDigitalDesign',
    slug: 'ui-ux-digital-design',
    title: 'UI/UX & Digital Design',
    headline: 'Design better digital experiences.',
    description:
      'Design intuitive, engaging digital experiences that make every interaction feel effortless.',
    summary: 'Interfaces and flows built around real users.',
    includes: [
      'User interface (UI) design',
      'User experience (UX) design',
      'Website & app design',
      'Wireframing & prototyping',
    ],
    outcomes: [
      'Clearer journeys from first click to action',
      'Interfaces that feel intuitive and on-brand',
      'Prototypes to validate before you build',
    ],
    ctaAccent: 'Ready to improve',
    ctaMain: 'your digital experience?',
  },
  {
    navId: 'videoMotionCreativeContent',
    slug: 'video-motion-creative-content',
    title: 'Video, Motion & Creative Content',
    headline: 'Bring your stories to life.',
    description:
      'Bring your brand to life with compelling visuals, motion, and creative storytelling.',
    summary: 'Video, motion, and content that connects emotionally.',
    includes: [
      'Video production & editing',
      'Motion graphics & animation',
      'Promotional & brand videos',
      'Creative content production',
    ],
    outcomes: [
      'Content that captures attention quickly',
      'Motion and video aligned with your brand',
      'Stories that support sales and marketing',
    ],
    ctaAccent: 'Ready to bring',
    ctaMain: 'your brand to life?',
  },
]

export const WOW_DESIGN_NAV_SERVICE_SLUGS = WOW_DESIGN_NAV_SERVICES.map((service) => service.slug)

const serviceBySlug = new Map(WOW_DESIGN_NAV_SERVICES.map((service) => [service.slug, service]))

const serviceByNavId = new Map(WOW_DESIGN_NAV_SERVICES.map((service) => [service.navId, service]))

export function getWowDesignNavService(slug: string): WowDesignNavService | undefined {
  return serviceBySlug.get(slug)
}

export function getWowDesignNavServiceByNavId(navId: string): WowDesignNavService | undefined {
  return serviceByNavId.get(navId)
}
