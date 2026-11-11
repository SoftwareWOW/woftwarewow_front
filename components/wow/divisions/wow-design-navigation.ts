import type { NavigationData } from '@/components/wow/nav/navigation-types'
import { wowDesignMegaNavHref } from '@/data/wowDesignMegaNavRoutes'

const panel = (
  title: string,
  description: string,
  includes: string[],
  ctaLabel = 'Learn more',
) => ({
  title,
  description,
  includes,
  ctaLabel,
  image: 'default' as const,
})

const link = (id: string, label: string, description: string) => ({
  id,
  label,
  description,
  type: 'link' as const,
  href: wowDesignMegaNavHref(id),
  detailPanel: id,
})

/** WOW Design mega-nav — Figma-aligned services and detail panels. */
export const wowDesignNavigation = {
  detailPanels: {
    default: panel(
      'Brand Identity & Strategy',
      'Build a distinctive brand identity that inspires trust and leaves a lasting impression.',
      [
        'Brand strategy & positioning',
        'Logo & visual identity design',
        'Brand guidelines & systems',
        'Brand messaging & storytelling',
      ],
    ),
    brandIdentityStrategy: panel(
      'Brand Identity & Strategy',
      'Build a distinctive brand identity that inspires trust and leaves a lasting impression.',
      [
        'Brand strategy & positioning',
        'Logo & visual identity design',
        'Brand guidelines & systems',
        'Brand messaging & storytelling',
      ],
    ),
    graphicMarketingDesign: panel(
      'Graphic & Marketing Design',
      'Create impactful visuals that capture attention, communicate your message, and strengthen your brand.',
      [
        'Social media graphics',
        'Marketing & advertising creatives',
        'Print & digital materials',
        'Presentation & promotional design',
      ],
    ),
    uiUxDigitalDesign: panel(
      'UI/UX & Digital Design',
      'Design intuitive, engaging digital experiences that make every interaction feel effortless.',
      [
        'User interface (UI) design',
        'User experience (UX) design',
        'Website & app design',
        'Wireframing & prototyping',
      ],
    ),
    videoMotionCreativeContent: panel(
      'Video, Motion & Creative Content',
      'Bring your brand to life with compelling visuals, motion, and creative storytelling.',
      [
        'Video production & editing',
        'Motion graphics & animation',
        'Promotional & brand videos',
        'Creative content production',
      ],
    ),
  },
  items: [
    {
      id: 'services',
      label: 'Services',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'brandIdentityStrategy',
        columns: [
          {
            id: 'servicesList',
            title: null,
            items: [
              link(
                'brandIdentityStrategy',
                'Brand Identity & Strategy',
                'Build a brand that stands out.',
              ),
              link(
                'graphicMarketingDesign',
                'Graphic & Marketing Design',
                'Creative visuals. Lasting impressions.',
              ),
              link(
                'uiUxDigitalDesign',
                'UI/UX & Digital Design',
                'Design better digital experiences.',
              ),
              link(
                'videoMotionCreativeContent',
                'Video, Motion & Creative Content',
                'Bring your stories to life.',
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'services',
            title: 'Services',
            items: [
              {
                id: 'brandIdentityStrategy',
                label: 'Brand Identity & Strategy',
                description: 'Build a brand that stands out.',
                href: wowDesignMegaNavHref('brandIdentityStrategy'),
              },
              {
                id: 'graphicMarketingDesign',
                label: 'Graphic & Marketing Design',
                description: 'Creative visuals. Lasting impressions.',
                href: wowDesignMegaNavHref('graphicMarketingDesign'),
              },
              {
                id: 'uiUxDigitalDesign',
                label: 'UI/UX & Digital Design',
                description: 'Design better digital experiences.',
                href: wowDesignMegaNavHref('uiUxDigitalDesign'),
              },
              {
                id: 'videoMotionCreativeContent',
                label: 'Video, Motion & Creative Content',
                description: 'Bring your stories to life.',
                href: wowDesignMegaNavHref('videoMotionCreativeContent'),
              },
            ],
          },
        ],
      },
    },
    {
      id: 'portfolio',
      label: 'Portfolio',
      navKind: 'link' as const,
      href: '/portfolio',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'portfolio',
        columns: [],
      },
      mobile: { pages: [] },
    },
    {
      id: 'about',
      label: 'About',
      navKind: 'link' as const,
      href: '/about',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'about',
        columns: [],
      },
      mobile: { pages: [] },
    },
  ],
} as unknown as NavigationData
