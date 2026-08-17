import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ProfessionalServiceSolutions from './_components/ProfessionalServiceSolutions'
import ProfessionalServicesHero from './_components/ProfessionalServicesHero'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WhatMattersMost from './_components/WhatMattersMost'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Professional Services | WOW Superagency',
    description: 'Solutions for service firms.',
    keywords: [
      'professional services',
      'consulting firms',
      'brand authority',
      'website growth',
      'sales acceleration',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Professional Services | WOW Superagency',
      description: 'Solutions for service firms.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/professional-services`,
    },
  }
}

export default async function ProfessionalServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Expertise Into Growth — Home-13 HeroV13 */}
        <ProfessionalServicesHero />
        {/* 2. What Matters Most — Home-12 WhyChooseUs */}
        <WhatMattersMost />
        {/* 3. Professional Service Solutions — Startups StartupSolutions / Home-23 WhyChooseUsV7 */}
        <ProfessionalServiceSolutions />
        {/* 4. The Client Journey — SaaS ProductJourney / Home-07 ProcessV4 */}
        <ClientJourney />
        {/* 5. Connected Expertise — Sales Acceleration / Home-19 ElevateBrandV2 */}
        <ConnectedExpertise />
        {/* 6. Recommended Solutions — Home-19 OurExpertiseV2 */}
        <RecommendedSolutions />
        {/* 7. Ready to Grow Your Firm? */}
        <WowGrowthCta
          accentText="Ready to Grow"
          mainText="Your Firm?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
