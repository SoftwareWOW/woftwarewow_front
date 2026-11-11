import WowSocialServiceDetail from '@/components/wow/wowsocial/WowSocialServiceDetail'
import {
  WOW_SOCIAL_NAV_SERVICE_SLUGS,
  getWowSocialNavService,
} from '@/data/wowSocialNavContent'
import { isWowSocialServiceSegment } from '@/data/wowSocialMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_SOCIAL_NAV_SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isWowSocialServiceSegment(slug)) {
    return { title: 'Service Not Found | WOW Social' }
  }

  const service = getWowSocialNavService(slug)
  if (!service) return { title: 'Service Not Found | WOW Social' }

  return {
    title: `${service.title} | WOW Social`,
    description: service.description,
    openGraph: {
      title: `${service.title} | WOW Social`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/social/services/${slug}`,
    },
  }
}

export default async function WowSocialServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!isWowSocialServiceSegment(slug)) notFound()

  const service = getWowSocialNavService(slug)
  if (!service) notFound()

  return <WowSocialServiceDetail service={service} />
}
