import WowIntelligenceOfferingDetail from '@/components/wow/wowintelligence/WowIntelligenceOfferingDetail'
import {
  WOW_INTELLIGENCE_NAV_USE_CASE_SLUGS,
  getWowIntelligenceNavUseCase,
} from '@/data/wowIntelligenceNavContent'
import { isWowIntelligenceUseCaseSegment } from '@/data/wowIntelligenceMegaNavRoutes'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_INTELLIGENCE_NAV_USE_CASE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params

  if (!isWowIntelligenceUseCaseSegment(slug)) {
    return { title: 'Use Case Not Found | WOW Intelligence' }
  }

  const useCase = getWowIntelligenceNavUseCase(slug)
  if (!useCase) return { title: 'Use Case Not Found | WOW Intelligence' }

  return {
    title: `${useCase.title} | WOW Intelligence`,
    description: useCase.description,
    openGraph: {
      title: `${useCase.title} | WOW Intelligence`,
      description: useCase.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/use-cases/${slug}`,
    },
  }
}

export default async function WowIntelligenceUseCasePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!isWowIntelligenceUseCaseSegment(slug)) notFound()

  const useCase = getWowIntelligenceNavUseCase(slug)
  if (!useCase) notFound()

  return <WowIntelligenceOfferingDetail offering={useCase} />
}
