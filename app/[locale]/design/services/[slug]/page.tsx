import WowDesignServiceDetail from '@/components/wow/wowdesign/WowDesignServiceDetail'
import {
  WOW_DESIGN_NAV_SERVICE_SLUGS,
  getWowDesignNavService,
} from '@/data/wowDesignNavContent'
import { isWowDesignServiceSegment } from '@/data/wowDesignMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_DESIGN_NAV_SERVICE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isWowDesignServiceSegment(slug)) {
    return { title: 'Service Not Found | WOW Design' }
  }

  const service = getWowDesignNavService(slug)
  if (!service) return { title: 'Service Not Found | WOW Design' }

  return {
    title: `${service.title} | WOW Design`,
    description: service.description,
    openGraph: {
      title: `${service.title} | WOW Design`,
      description: service.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/design/services/${slug}`,
    },
  }
}

export default async function WowDesignServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!isWowDesignServiceSegment(slug)) notFound()

  const service = getWowDesignNavService(slug)
  if (!service) notFound()

  return <WowDesignServiceDetail service={service} />
}
