import type { NavigationData } from '@/components/wow/nav/navigation-types'

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

const serviceHref = '/websites#services'

const link = (
  id: string,
  label: string,
  description: string,
  href: string,
) => ({
  id,
  label,
  description,
  type: 'link' as const,
  href,
  detailPanel: 'default' as const,
})

/** WOW Websites mega-nav — Figma-aligned services and detail panels. */
export const wowWebsitesNavigation = {
  detailPanels: {
    default: panel(
      'Business Websites',
      'Build a professional, high-performing website that earns trust and grows your business.',
      [
        'Custom website design & strategy',
        'Mobile-responsive layouts',
        'SEO-friendly structure',
        'Content management systems',
      ],
    ),
    businessWebsites: panel(
      'Business Websites',
      'Build a professional, high-performing website that earns trust and grows your business.',
      [
        'Custom website design & strategy',
        'Mobile-responsive layouts',
        'SEO-friendly structure',
        'Content management systems',
      ],
    ),
    ecommerceWebsites: panel(
      'eCommerce Websites',
      'Drive more online sales with seamless shopping experiences built for conversion.',
      [
        'Custom online stores',
        'Product & inventory management',
        'Secure payment integrations',
        'Checkout optimization',
      ],
    ),
    websiteRedesigns: panel(
      'Website Redesigns',
      'Transform outdated websites into modern, high-performing digital experiences.',
      [
        'Modern UI/UX redesign',
        'Responsive upgrades',
        'Content & layout improvements',
        'Performance optimization',
      ],
    ),
    landingPages: panel(
      'Landing Pages',
      'Capture attention and drive action with focused landing pages built for results.',
      [
        'Campaign landing pages',
        'Lead capture forms',
        'Conversion-focused design',
        'A/B testing support',
      ],
    ),
    accessibleWebExperiences: panel(
      'Accessible Web Experiences',
      'Build inclusive websites everyone can navigate with confidence.',
      [
        'WCAG accessibility improvements',
        'Keyboard navigation support',
        'Screen reader compatibility',
        'Accessible forms & interactions',
      ],
    ),
    multilingualWebsites: panel(
      'Multilingual Websites',
      'Connect with global audiences through localized web experiences.',
      [
        'Multilingual website setup',
        'Language switcher integration',
        'Localized content structure',
        'Multilingual SEO support',
      ],
    ),
    conversionOptimization: panel(
      'Conversion Optimization',
      'Turn traffic into meaningful actions through smarter optimization.',
      [
        'Conversion rate audits',
        'User behavior analysis',
        'A/B testing & experimentation',
        'Funnel & CTA optimization',
      ],
    ),
    websiteOptimization: panel(
      'Website Optimization',
      'Make your website faster, smoother, and more reliable.',
      [
        'Speed & performance optimization',
        'Core Web Vitals improvements',
        'Technical SEO enhancements',
        'Mobile performance tuning',
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
        defaultSelection: 'businessWebsites',
        columns: [
          {
            id: 'servicesCol1',
            title: null,
            items: [
              link(
                'businessWebsites',
                'Business Websites',
                'Build your professional online presence.',
                serviceHref,
              ),
              link(
                'ecommerceWebsites',
                'eCommerce Websites',
                'Create seamless online shopping experiences.',
                serviceHref,
              ),
              link(
                'websiteRedesigns',
                'Website Redesigns',
                'Transform outdated websites into modern results.',
                serviceHref,
              ),
              link(
                'landingPages',
                'Landing Pages',
                'Capture attention and drive action.',
                serviceHref,
              ),
              link(
                'accessibleWebExperiences',
                'Accessible Web Experiences',
                'Build inclusive websites everyone can navigate.',
                serviceHref,
              ),
              link(
                'multilingualWebsites',
                'Multilingual Websites',
                'Connect with global audiences.',
                serviceHref,
              ),
            ],
          },
          {
            id: 'servicesCol2',
            title: null,
            items: [
              link(
                'conversionOptimization',
                'Conversion Optimization',
                'Turn traffic into meaningful actions.',
                serviceHref,
              ),
              link(
                'websiteOptimization',
                'Website Optimization',
                'Faster, smoother, more reliable experiences.',
                serviceHref,
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
                id: 'businessWebsites',
                label: 'Business Websites',
                description: 'Build your professional online presence.',
                href: serviceHref,
              },
              {
                id: 'ecommerceWebsites',
                label: 'eCommerce Websites',
                description: 'Create seamless online shopping experiences.',
                href: serviceHref,
              },
              {
                id: 'websiteRedesigns',
                label: 'Website Redesigns',
                description: 'Transform outdated websites into modern results.',
                href: serviceHref,
              },
              {
                id: 'landingPages',
                label: 'Landing Pages',
                description: 'Capture attention and drive action.',
                href: serviceHref,
              },
              {
                id: 'accessibleWebExperiences',
                label: 'Accessible Web Experiences',
                description: 'Build inclusive websites everyone can navigate.',
                href: serviceHref,
              },
              {
                id: 'multilingualWebsites',
                label: 'Multilingual Websites',
                description: 'Connect with global audiences.',
                href: serviceHref,
              },
              {
                id: 'conversionOptimization',
                label: 'Conversion Optimization',
                description: 'Turn traffic into meaningful actions.',
                href: serviceHref,
              },
              {
                id: 'websiteOptimization',
                label: 'Website Optimization',
                description: 'Faster, smoother, more reliable experiences.',
                href: serviceHref,
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
      id: 'packages',
      label: 'Packages',
      navKind: 'link' as const,
      href: '/packages/website-growth-engine',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'packages',
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
