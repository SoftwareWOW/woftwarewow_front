import { CONTENT } from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import StartWithTheRepetitive from './_components/StartWithTheRepetitive'
import AiPackageCard from './_components/AiPackageCard'
import AutomationTools from './_components/AutomationTools'
import FromIdeaToAutomation from './_components/FromIdeaToAutomation'
import AutomationFaq from './_components/AutomationFaq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'sales-automation-enablement', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <StartWithTheRepetitive {...CONTENT.startWithTheRepetitive} />
      <AiPackageCard {...CONTENT.aiPackageCard} />
      <AutomationTools {...CONTENT.automationTools} />
      <FromIdeaToAutomation {...CONTENT.fromIdeaToAutomation} />
      <AutomationFaq {...CONTENT.automationFaq} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
