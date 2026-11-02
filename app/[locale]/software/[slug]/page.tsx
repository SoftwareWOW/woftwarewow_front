import {
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES,
  getSoftwareWowMegaNavServiceRouteBySlug,
} from '@/data/softwareWowMegaNavRoutes'
import {
  SOFTWARE_WOW_NAV_SOLUTION_SLUGS,
  getSoftwareWowNavSolution,
} from '@/data/softwareWowNavSolutions'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

type LocaleParams = { locale: string }
type SlugParams = LocaleParams & { slug: string }

type Props = {
  params: Promise<SlugParams>
}

type ServicePageModule = {
  default: (props: { params: Promise<LocaleParams> }) => Promise<React.JSX.Element>
  generateMetadata?: (props: { params: Promise<LocaleParams> }) => Promise<Metadata>
}

async function loadServicePageModule(serviceSegment: string): Promise<ServicePageModule | null> {
  switch (serviceSegment) {
    case 'custom-software-development':
      return import('../../softwarewow/services/custom-software-development/page')
    case 'web-applications':
      return import('../../softwarewow/services/web-applications/page')
    case 'mobile-applications':
      return import('../../softwarewow/services/mobile-applications/page')
    case 'ai-automation':
      return import('../../softwarewow/services/ai-automation/page')
    case 'product-design-prototyping':
      return import('../../softwarewow/services/product-design-prototyping/page')
    case 'modernization-integrations':
      return import('../../softwarewow/services/modernization-integrations/page')
    case 'software-support-improvement':
      return import('../../softwarewow/services/software-support-improvement/page')
    default:
      return null
  }
}

export function generateStaticParams() {
  const serviceSlugs = SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => ({
    slug: route.slug,
  }))
  const solutionSlugs = SOFTWARE_WOW_NAV_SOLUTION_SLUGS.map((slug) => ({ slug }))
  return [...serviceSlugs, ...solutionSlugs]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  const serviceRoute = getSoftwareWowMegaNavServiceRouteBySlug(slug)
  if (serviceRoute) {
    const mod = await loadServicePageModule(serviceRoute.serviceSegment)
    if (mod?.generateMetadata) {
      return mod.generateMetadata({ params: Promise.resolve({ locale }) })
    }
  }

  const solutionMod = await import('../../softwarewow/solutions/[slug]/page')
  if (solutionMod.generateMetadata && getSoftwareWowNavSolution(slug)) {
    return solutionMod.generateMetadata({ params: Promise.resolve({ locale, slug }) })
  }

  return { title: 'Not Found | SoftwareWOW!' }
}

export default async function SoftwarePublicSlugPage({ params }: Props) {
  const { locale, slug } = await params

  const serviceRoute = getSoftwareWowMegaNavServiceRouteBySlug(slug)
  if (serviceRoute) {
    const mod = await loadServicePageModule(serviceRoute.serviceSegment)
    if (!mod) notFound()
    const Page = mod.default
    return Page({ params: Promise.resolve({ locale }) })
  }

  if (getSoftwareWowNavSolution(slug)) {
    const solutionMod = await import('../../softwarewow/solutions/[slug]/page')
    return solutionMod.default({ params: Promise.resolve({ locale, slug }) })
  }

  notFound()
}
