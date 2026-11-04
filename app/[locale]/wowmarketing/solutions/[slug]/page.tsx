import { WowMarketingSolutionRoute } from '@/app/[locale]/marketing/_lib/wowMarketingOfferingRoute'
import {
  WOW_MARKETING_NAV_SOLUTION_SLUGS,
  getWowMarketingNavSolution,
} from '@/data/wowMarketingNavContent'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return WOW_MARKETING_NAV_SOLUTION_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const solution = getWowMarketingNavSolution(slug)

  if (!solution) {
    return { title: 'Solution Not Found | WOW Marketing' }
  }

  return {
    title: `${solution.title} | WOW Marketing`,
    description: solution.description,
    openGraph: {
      title: `${solution.title} | WOW Marketing`,
      description: solution.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/${slug}`,
    },
  }
}

export default async function WowMarketingSolutionPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale as Locale)

  if (!getWowMarketingNavSolution(slug)) notFound()

  return WowMarketingSolutionRoute({ params, wrapDivisionLayout: false })
}
