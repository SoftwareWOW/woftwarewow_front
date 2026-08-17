import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CareDevisionOverview from './_components/CareDevisionOverview'
import CareGallery from './_components/CareGallery'
import CareJourney from './_components/CareJourney'
import CarePackages from './_components/CarePackages'
import CareSolutions from './_components/CareSolutions'
import ExperiencePillars from './_components/ExperiencePillars'
import HealthcareHero from './_components/HealthcareHero'
import HealthcareHeroAbout from './_components/HealthcareHeroAbout'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Healthcare & Wellness | WOW Superagency',
    description: 'Digital experiences for healthcare and wellness organizations.',
    keywords: [
      'healthcare',
      'wellness',
      'digital health',
      'patient experience',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Healthcare & Wellness | WOW Superagency',
      description: 'Digital experiences for healthcare and wellness organizations.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/healthcare-and-wellness`,
    },
  }
}

export default async function HealthcareAndWellnessPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1–2. Hero — SaasProductHero + HeroAbout */}
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
          <HealthcareHero />
          <HealthcareHeroAbout />
        </div>
        {/* 3. FromIdeaToGrowth — hover-flip experience pillars */}
        <ExperiencePillars />
        {/* 4. CommerceSolutions — 2×2 care solutions */}
        <CareSolutions />
        {/* 5. TravelImagesGallery */}
        <CareGallery />
        {/* 5b. AwardWinningWork — care journey rows */}
        <CareJourney />
        {/* 6. Divisions — homepage DevisionOverview */}
        <CareDevisionOverview />
        {/* 7. Packages — StartupPackages */}
        <CarePackages />
        {/* 8. Ready to Create a Better Care Experience? */}
        <WowGrowthCta
          accentText="Ready to Create"
          mainText="a Better Care Experience?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
