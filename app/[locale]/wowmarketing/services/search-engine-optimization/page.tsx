import { CONTENT } from './_content/page-content'
import MarketingGrowthHero from './_components/MarketingGrowthHero'
import GrowthChallenges from './_components/GrowthChallenges'
import EverythingToGrow from './_components/EverythingToGrow'
import ConnectedGrowthSystem from './_components/ConnectedGrowthSystem'
import BuiltAroundGoals from './_components/BuiltAroundGoals'
import SpecialistTeams from './_components/SpecialistTeams'
import GrowthInAction from './_components/GrowthInAction'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'search-engine-optimization', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <MarketingGrowthHero {...CONTENT.hero} />
      <GrowthChallenges {...CONTENT.growthChallenges} />
      <EverythingToGrow {...CONTENT.everythingToGrow} />
      <ConnectedGrowthSystem {...CONTENT.connectedGrowthSystem} />
      <BuiltAroundGoals {...CONTENT.builtAroundGoals} />
      <SpecialistTeams {...CONTENT.specialistTeams} />
      <GrowthInAction {...CONTENT.growthInAction} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
