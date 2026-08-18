import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ImpactJourney from './_components/ImpactJourney'
import MissionJourney from './_components/MissionJourney'
import MissionSolutions from './_components/MissionSolutions'
import OrganizationsHero from './_components/OrganizationsHero'
import OrganizationsHeroAbout from './_components/OrganizationsHeroAbout'
import OurPortfolio from './_components/OurPortfolio'
import RecommendedSolutions from './_components/RecommendedSolutions'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Organizations & Nonprofits | WOW Superagency',
    description: 'Digital growth for mission-driven organizations and nonprofits.',
    keywords: [
      'nonprofits',
      'organizations',
      'mission-driven',
      'community growth',
      'brand authority',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Organizations & Nonprofits | WOW Superagency',
      description: 'Digital growth for mission-driven organizations and nonprofits.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/organizations-and-nonprofits`,
    },
  }
}

export default async function OrganizationsAndNonprofitsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <OrganizationsHero />
        <OrganizationsHeroAbout />
        <MissionJourney />
        <OurPortfolio />
        <MissionSolutions />
        <ImpactJourney />
        <ConnectedExpertise />
        <RecommendedSolutions />
        <WowGrowthCta
          accentText="Ready to Amplify"
          mainText="Your Impact?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
