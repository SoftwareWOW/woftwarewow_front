import { WowMarketingServiceRoute } from '@/app/[locale]/marketing/_lib/wowMarketingOfferingRoute'
import {
  WOW_MARKETING_NAV_SERVICE_SLUGS,
  getWowMarketingNavService,
} from '@/data/wowMarketingNavContent'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_MARKETING_NAV_SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const service = getWowMarketingNavService(slug)

  if (!service) {
    return { title: 'Service Not Found | WOW Marketing' }
  }

  return {
    title: `${service.title} | WOW Marketing`,
    description: service.description,
    openGraph: {
      title: `${service.title} | WOW Marketing`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/${slug}`,
    },
  }
}

export default async function WowMarketingServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!getWowMarketingNavService(slug)) notFound()

  return WowMarketingServiceRoute({ params, wrapDivisionLayout: false })
}
