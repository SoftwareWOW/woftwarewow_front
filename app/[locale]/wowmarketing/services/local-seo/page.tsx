import { CONTENT } from './_content/page-content'
import ProfessionalServicesHero from './_components/ProfessionalServicesHero'
import WhatMattersMost from './_components/WhatMattersMost'
import ProfessionalServiceSolutions from './_components/ProfessionalServiceSolutions'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'local-seo', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <ProfessionalServicesHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <WhatMattersMost {...CONTENT.whatMattersMost} />
      <ProfessionalServiceSolutions {...CONTENT.professionalServiceSolutions} />
      <ClientJourney {...CONTENT.clientJourney} />
      <ConnectedExpertise {...CONTENT.connectedExpertiseIndustry} />
      <RecommendedSolutions {...CONTENT.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
