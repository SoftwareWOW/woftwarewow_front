import { CONTENT } from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import StartWithTheWork from './_components/StartWithTheWork'
import AiGallery from './_components/AiGallery'
import AiCapabilities from './_components/AiCapabilities'
import AutomationInAction from './_components/AutomationInAction'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import AiWithPurpose from './_components/AiWithPurpose'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'sales-automation', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero {...CONTENT.hero} />
      <StartWithTheWork {...CONTENT.startWithTheWork} />
      <AiGallery {...CONTENT.aiGallery} />
      <AiCapabilities {...CONTENT.aiCapabilities} />
      <AutomationInAction {...CONTENT.automationInAction} />
      <Marquee />
      <AiWithPurpose {...CONTENT.aiWithPurpose} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
