import type { NavigationData } from '@/components/wow/nav/navigation-types'
import { wowHostMegaNavHref } from '@/data/wowHostMegaNavRoutes'

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
  href: wowHostMegaNavHref(id),
  detailPanel: id,
})

/** WOW Host mega-nav — Figma-aligned hosting, solutions, and detail panels. */
export const wowHostNavigation = {
  detailPanels: {
    default: panel(
      'Shared Web Hosting',
      'Get your website online with affordable, secure hosting built for everyday reliability.',
      [
        'Affordable hosting plans',
        'Easy website management',
        'SSL & security protection',
        'Reliable website performance',
      ],
    ),
    sharedWebHosting: panel(
      'Shared Web Hosting',
      'Get your website online with affordable, secure hosting built for everyday reliability.',
      [
        'Affordable hosting plans',
        'Easy website management',
        'SSL & security protection',
        'Reliable website performance',
      ],
    ),
    vpsHosting: panel(
      'VPS Hosting',
      'Enjoy dedicated resources, greater flexibility, and more control over your hosting environment.',
      [
        'Dedicated virtual resources',
        'Root access & server control',
        'Scalable hosting resources',
        'Advanced server configurations',
      ],
    ),
    dedicatedServers: panel(
      'Dedicated Servers',
      'Power demanding websites and applications with exclusive resources and complete server control.',
      [
        'Exclusive server resources',
        'Full administrative control',
        'Custom server configurations',
        'High-performance infrastructure',
      ],
    ),
    cloudHosting: panel(
      'Cloud Hosting',
      'Scale your online operations with flexible cloud infrastructure designed for performance and reliability.',
      [
        'Scalable cloud resources',
        'Flexible hosting configurations',
        'High-availability options',
        'Cloud performance monitoring',
      ],
    ),
    hostDigitalIdentity: panel(
      'Your Name. Your Digital Identity.',
      'Secure the perfect domain name and build a recognizable, professional online identity.',
      [
        'Domain name registration',
        'Domain transfers & renewals',
        'DNS management',
        'Domain privacy options',
      ],
    ),
    hostProfessionalEmail: panel(
      'Professional Email for Your Business.',
      'Build credibility and communicate professionally with secure, branded email for your business.',
      [
        'Custom domain email addresses',
        'Professional email hosting',
        'Webmail & device access',
        'Spam & security protection',
      ],
    ),
    hostProtectOnline: panel(
      'Protect What Keeps You Online.',
      'Keep your website, business data, and digital assets protected with essential security solutions.',
      [
        'SSL certificates & encryption',
        'Website security protection',
        'Automated backup solutions',
        'Website recovery options',
      ],
    ),
  },
  items: [
    {
      id: 'hosting',
      label: 'Hosting',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'sharedWebHosting',
        columns: [
          {
            id: 'hostingList',
            title: null,
            items: [
              link(
                'sharedWebHosting',
                'Shared Web Hosting',
                'Affordable hosting. Reliable performance.',
              ),
              link('vpsHosting', 'VPS Hosting', 'More power. Greater control.'),
              link(
                'dedicatedServers',
                'Dedicated Servers',
                'Maximum power. Complete control.',
              ),
              link(
                'cloudHosting',
                'Cloud Hosting',
                'Flexible hosting. Effortless scalability.',
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'hosting',
            title: 'Hosting',
            items: [
              {
                id: 'sharedWebHosting',
                label: 'Shared Web Hosting',
                description: 'Affordable hosting. Reliable performance.',
                href: wowHostMegaNavHref('sharedWebHosting'),
              },
              {
                id: 'vpsHosting',
                label: 'VPS Hosting',
                description: 'More power. Greater control.',
                href: wowHostMegaNavHref('vpsHosting'),
              },
              {
                id: 'dedicatedServers',
                label: 'Dedicated Servers',
                description: 'Maximum power. Complete control.',
                href: wowHostMegaNavHref('dedicatedServers'),
              },
              {
                id: 'cloudHosting',
                label: 'Cloud Hosting',
                description: 'Flexible hosting. Effortless scalability.',
                href: wowHostMegaNavHref('cloudHosting'),
              },
            ],
          },
        ],
      },
    },
    {
      id: 'domains',
      label: 'Domains',
      navKind: 'link' as const,
      href: '/for-you/hosting-and-infrastructure',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'domains',
        columns: [],
      },
      mobile: { pages: [] },
    },
    {
      id: 'solutions',
      label: 'Solutions',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'hostDigitalIdentity',
        columns: [
          {
            id: 'solutionsList',
            title: null,
            items: [
              link(
                'hostDigitalIdentity',
                'Your Name. Your Digital Identity.',
                'Find and secure your perfect domain.',
              ),
              link(
                'hostProfessionalEmail',
                'Professional Email for Your Business.',
                'Build trust with branded business email.',
              ),
              link(
                'hostProtectOnline',
                'Protect What Keeps You Online.',
                'Secure your website, data, and business.',
              ),
            ],
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'solutions',
            title: 'Solutions',
            items: [
              {
                id: 'hostDigitalIdentity',
                label: 'Your Name. Your Digital Identity.',
                description: 'Find and secure your perfect domain.',
                href: wowHostMegaNavHref('hostDigitalIdentity'),
              },
              {
                id: 'hostProfessionalEmail',
                label: 'Professional Email for Your Business.',
                description: 'Build trust with branded business email.',
                href: wowHostMegaNavHref('hostProfessionalEmail'),
              },
              {
                id: 'hostProtectOnline',
                label: 'Protect What Keeps You Online.',
                description: 'Secure your website, data, and business.',
                href: wowHostMegaNavHref('hostProtectOnline'),
              },
            ],
          },
        ],
      },
    },
    {
      id: 'support',
      label: 'Support',
      navKind: 'link' as const,
      href: '/host#support',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'support',
        columns: [],
      },
      mobile: { pages: [] },
    },
  ],
} as unknown as NavigationData
