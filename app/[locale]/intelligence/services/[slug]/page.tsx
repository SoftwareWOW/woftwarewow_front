import WowIntelligenceOfferingDetail from '@/components/wow/wowintelligence/WowIntelligenceOfferingDetail'
import {
  WOW_INTELLIGENCE_NAV_SERVICE_SLUGS,
  getWowIntelligenceNavService,
} from '@/data/wowIntelligenceNavContent'
import { isWowIntelligenceServiceSegment } from '@/data/wowIntelligenceMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_INTELLIGENCE_NAV_SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isWowIntelligenceServiceSegment(slug)) {
    return { title: 'Service Not Found | WOW Intelligence' }
  }

  const service = getWowIntelligenceNavService(slug)
  if (!service) return { title: 'Service Not Found | WOW Intelligence' }

  return {
    title: `${service.title} | WOW Intelligence`,
    description: service.description,
    openGraph: {
      title: `${service.title} | WOW Intelligence`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/services/${slug}`,
    },
  }
}

export default async function WowIntelligenceServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!isWowIntelligenceServiceSegment(slug)) notFound()

  const service = getWowIntelligenceNavService(slug)
  if (!service) notFound()

  return <WowIntelligenceOfferingDetail offering={service} />
}
