import SoftwareWowServiceDetail from '@/components/wow/softwarewow/SoftwareWowServiceDetail'
import {
  SOFTWARE_WOW_NAV_SERVICE_SLUGS,
  getSoftwareWowNavService,
} from '@/data/softwareWowNavServices'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return SOFTWARE_WOW_NAV_SERVICE_SLUGS.filter(
    (slug) => slug !== 'web-applications' && slug !== 'mobile-app-development',
  ).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const service = getSoftwareWowNavService(slug)

  if (!service) {
    return { title: 'Service Not Found | SoftwareWOW!' }
  }

  return {
    title: `${service.title} | SoftwareWOW!`,
    description: service.description,
    openGraph: {
      title: `${service.title} | SoftwareWOW!`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/${slug}`,
    },
  }
}

export default async function SoftwareWowServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  const service = getSoftwareWowNavService(slug)
  if (!service) notFound()

  return <SoftwareWowServiceDetail service={service} />
}
