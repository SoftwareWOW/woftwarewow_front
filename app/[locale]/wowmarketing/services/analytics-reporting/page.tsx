import { CONTENT } from './_content/page-content'
import DigitalTransformationHero from './_components/DigitalTransformationHero'
import TheGap from './_components/TheGap'
import TransformationPlan from './_components/TransformationPlan'
import BeforeAfterGap from './_components/BeforeAfterGap'
import TransformationPriorities from './_components/TransformationPriorities'
import ModernizationPath from './_components/ModernizationPath'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'analytics-reporting', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <DigitalTransformationHero {...CONTENT.hero} />
      <TheGap {...CONTENT.theGap} />
      <TransformationPlan {...CONTENT.transformationPlan} />
      <BeforeAfterGap {...CONTENT.beforeAfterGap} />
      <TransformationPriorities {...CONTENT.transformationPriorities} />
      <ModernizationPath {...CONTENT.modernizationPath} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
