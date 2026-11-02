import {
  SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES,
  getSoftwareWowMegaNavServiceRouteBySlug,
  getSoftwareWowMegaNavSolutionRouteBySlug,
} from '@/data/softwareWowMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import { redirect } from '@/i18n/navigation'
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
    case 'business-systems-automation':
      return import('../../softwarewow/services/business-systems-automation/page')
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
  return SOFTWARE_WOW_MEGA_NAV_SERVICE_ROUTES.map((route) => ({
    slug: route.slug,
  }))
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

  return { title: 'Not Found | SoftwareWOW!' }
}

export default async function SoftwarePublicSlugPage({ params }: Props) {
  const { locale, slug } = await params

  const solutionRoute = getSoftwareWowMegaNavSolutionRouteBySlug(slug)
  if (solutionRoute) {
    redirect({
      href: `/software/solutions/${solutionRoute.slug}`,
      locale: locale as Locale,
    })
  }

  const serviceRoute = getSoftwareWowMegaNavServiceRouteBySlug(slug)
  if (serviceRoute) {
    const mod = await loadServicePageModule(serviceRoute.serviceSegment)
    if (!mod) notFound()
    const Page = mod.default
    return Page({ params: Promise.resolve({ locale }) })
  }

  notFound()
}
