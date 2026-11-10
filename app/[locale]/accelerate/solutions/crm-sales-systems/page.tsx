import { CONTENT } from './_content/page-content'
import SoftwareTechHero from './_components/SoftwareTechHero'
import WhatWeBuild from './_components/WhatWeBuild'
import BuiltForTheFit from './_components/BuiltForTheFit'
import TechLaunchPath from './_components/TechLaunchPath'
import OurApproach from './_components/OurApproach'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'crm-sales-systems', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SoftwareTechHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <WhatWeBuild {...CONTENT.whatWeBuild} />
      <BuiltForTheFit {...CONTENT.builtForTheFit} />
      <TechLaunchPath {...CONTENT.techLaunchPath} />
      <OurApproach {...CONTENT.ourApproach} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
