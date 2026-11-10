import { APPOINTMENT_SETTING_PAGE_METADATA, CONTENT } from './_content/page-content'
import ProfessionalServicesHero from './_components/ProfessionalServicesHero'
import WhatMattersMost from './_components/WhatMattersMost'
import ProfessionalServiceSolutions from './_components/ProfessionalServiceSolutions'
import ClientJourney from './_components/ClientJourney'
import WowEcosystemExpertiseSection from '@/components/wow/sections/WowEcosystemExpertiseSection'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: APPOINTMENT_SETTING_PAGE_METADATA.title,
    description: APPOINTMENT_SETTING_PAGE_METADATA.description,
    openGraph: {
      title: APPOINTMENT_SETTING_PAGE_METADATA.title,
      description: APPOINTMENT_SETTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/services/appointment-setting-outreach`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, hero, ...sections } = CONTENT
  const { primaryCtaLabel, secondaryCtaLabel, secondaryCtaHref, images, ...heroProps } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <ProfessionalServicesHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        secondaryCtaHref={secondaryCtaHref}
      />
      <WhatMattersMost {...sections.whatMattersMost} />
      <ProfessionalServiceSolutions {...sections.professionalServiceSolutions} />
      <ClientJourney {...sections.clientJourney} />
      <WowEcosystemExpertiseSection {...sections.connectedExpertise} />
      <RecommendedSolutions {...sections.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
