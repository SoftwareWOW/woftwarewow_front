import { CONTENT } from './_content/page-content'
import StrategyHero from './_components/StrategyHero'
import WowGrowthFramework from './_components/WowGrowthFramework'
import StrategicExpertise from './_components/StrategicExpertise'
import HowWeBuildStrategy from './_components/HowWeBuildStrategy'
import BuiltAroundYourBusiness from './_components/BuiltAroundYourBusiness'
import GrowthStrategies from '@/components/wow/LandascapComponets/GrowthStrategies'
import StrategyInAction from './_components/StrategyInAction'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'sales-analytics-reporting', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <StrategyHero {...CONTENT.hero} />
      <WowGrowthFramework {...CONTENT.wowGrowthFramework} />
      <StrategicExpertise {...CONTENT.strategicExpertise} />
      <HowWeBuildStrategy {...CONTENT.howWeBuildStrategy} />
      <BuiltAroundYourBusiness {...CONTENT.builtAroundYourBusiness} />
      <GrowthStrategies />
      <StrategyInAction {...CONTENT.strategyInAction} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
