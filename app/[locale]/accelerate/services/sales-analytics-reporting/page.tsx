import { CONTENT, SALES_ANALYTICS_REPORTING_PAGE_METADATA } from './_content/page-content'
import StrategyHero from './_components/StrategyHero'
import WowGrowthFramework from './_components/WowGrowthFramework'
import StrategicExpertise from './_components/StrategicExpertise'
import BuiltAroundYourBusiness from './_components/BuiltAroundYourBusiness'
import StrategyInAction from './_components/StrategyInAction'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_ANALYTICS_REPORTING_PAGE_METADATA.title,
    description: SALES_ANALYTICS_REPORTING_PAGE_METADATA.description,
    openGraph: {
      title: SALES_ANALYTICS_REPORTING_PAGE_METADATA.title,
      description: SALES_ANALYTICS_REPORTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/services/sales-analytics-reporting`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, hero, strategyInAction, ...sections } = CONTENT
  const { primaryCtaLabel, primaryCtaHref, ...heroProps } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <StrategyHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
      />
      <WowGrowthFramework {...sections.wowGrowthFramework} />
      <StrategicExpertise {...sections.strategicExpertise} />
      <BuiltAroundYourBusiness {...sections.builtAroundYourBusiness} />
      <StrategyInAction {...strategyInAction} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
