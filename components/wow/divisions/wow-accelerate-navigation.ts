import type { NavigationData } from '@/components/wow/nav/navigation-types'
import {
  WOW_ACCELERATE_NAV_SERVICES,
  WOW_ACCELERATE_NAV_SOLUTIONS,
} from '@/data/wowAccelerateNavContent'
import { wowAccelerateMegaNavHref } from '@/data/wowAccelerateMegaNavRoutes'

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
  href: wowAccelerateMegaNavHref(id),
  detailPanel: id,
})

const detailPanelsFromOfferings = () => {
  const panels: Record<string, ReturnType<typeof panel>> = {}
  const all = [...WOW_ACCELERATE_NAV_SERVICES, ...WOW_ACCELERATE_NAV_SOLUTIONS]
  for (const offering of all) {
    panels[offering.navId] = panel(offering.title, offering.description, offering.includes)
  }
  const first = WOW_ACCELERATE_NAV_SERVICES[0]
  panels.default = panel(first.title, first.description, first.includes)
  return panels
}

const serviceMobileItems = WOW_ACCELERATE_NAV_SERVICES.map((o) => ({
  id: o.navId,
  label: o.title,
  description: o.navDescription ?? o.headline,
  href: wowAccelerateMegaNavHref(o.navId),
}))

const solutionMobileItems = WOW_ACCELERATE_NAV_SOLUTIONS.map((o) => ({
  id: o.navId,
  label: o.title,
  description: o.navDescription ?? o.headline,
  href: wowAccelerateMegaNavHref(o.navId),
}))

const servicesCol1 = WOW_ACCELERATE_NAV_SERVICES.slice(0, 6)
const servicesCol2 = WOW_ACCELERATE_NAV_SERVICES.slice(6)

/** WOW Accelerate mega-nav — services, solutions, and detail panels. */
export const wowAccelerateNavigation = {
  detailPanels: detailPanelsFromOfferings(),
  items: [
    {
      id: 'services',
      label: 'Services',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'leadGeneration',
        columns: [
          {
            id: 'servicesCol1',
            title: null,
            items: servicesCol1.map((o) =>
              link(o.navId, o.title, o.navDescription ?? o.headline),
            ),
          },
          {
            id: 'servicesCol2',
            title: null,
            items: servicesCol2.map((o) =>
              link(o.navId, o.title, o.navDescription ?? o.headline),
            ),
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'services',
            title: 'Services',
            items: serviceMobileItems,
          },
        ],
      },
    },
    {
      id: 'solutions',
      label: 'Solutions',
      navKind: 'menu' as const,
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'leadGenerationOutbound',
        columns: [
          {
            id: 'solutionsList',
            title: null,
            items: WOW_ACCELERATE_NAV_SOLUTIONS.map((o) =>
              link(o.navId, o.title, o.navDescription ?? o.headline),
            ),
          },
        ],
      },
      mobile: {
        pages: [
          {
            id: 'solutions',
            title: 'Solutions',
            items: solutionMobileItems,
          },
        ],
      },
    },
    {
      id: 'caseStudies',
      label: 'Case Studies',
      navKind: 'link' as const,
      href: '/case-study',
      desktop: {
        paddingX: 70,
        paddingY: 40,
        defaultSelection: 'caseStudies',
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
