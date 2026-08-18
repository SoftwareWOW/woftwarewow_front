import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import GuestJourney from './_components/GuestJourney'
import GuestSolutions from './_components/GuestSolutions'
import HospitalityHero from './_components/HospitalityHero'
import HospitalityHeroAbout from './_components/HospitalityHeroAbout'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WhatMattersMost from './_components/WhatMattersMost'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Hospitality & Tourism | WOW Superagency',
    description: 'Digital growth for hospitality and tourism brands.',
    keywords: [
      'hospitality',
      'tourism',
      'guest experience',
      'booking',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Hospitality & Tourism | WOW Superagency',
      description: 'Digital growth for hospitality and tourism brands.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/hospitality-and-tourism`,
    },
  }
}

export default async function HospitalityAndTourismPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <HospitalityHero />
        <HospitalityHeroAbout />
        <WhatMattersMost />
        <Marquess />
        <GuestSolutions />
        <GuestJourney />
        <ConnectedExpertise />
        <RecommendedSolutions />
        <WowGrowthCta
          accentText="Ready to Welcome"
          mainText="More Guests?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
