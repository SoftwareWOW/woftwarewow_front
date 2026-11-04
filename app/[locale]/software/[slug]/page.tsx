import {
  getSoftwareWowMegaNavServiceRouteBySlug,
  getSoftwareWowMegaNavSolutionRouteBySlug,
} from '@/data/softwareWowMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import { redirect } from '@/i18n/navigation'
import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'

type SlugParams = { locale: string; slug: string }

type Props = {
  params: Promise<SlugParams>
}

export const dynamicParams = true

export async function generateMetadata(): Promise<Metadata> {
  return { title: 'SoftwareWOW!' }
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
    permanentRedirect(`/${locale}/software/services/${serviceRoute.serviceSegment}`)
  }

  notFound()
}
