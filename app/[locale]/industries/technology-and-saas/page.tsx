import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ExperiencePillars from './_components/ExperiencePillars'
import MissionSolutions from './_components/MissionSolutions'
import RecommendedSolutions from './_components/RecommendedSolutions'
import TechnologyHero from './_components/TechnologyHero'
import TechnologyHeroAbout from './_components/TechnologyHeroAbout'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Technology & SaaS | WOW Superagency',
    description: 'Product, brand, and growth systems for technology and SaaS companies.',
    keywords: [
      'technology',
      'SaaS',
      'product development',
      'go-to-market',
      'AI automation',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Technology & SaaS | WOW Superagency',
      description: 'Product, brand, and growth systems for technology and SaaS companies.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/technology-and-saas`,
    },
  }
}

export default async function TechnologyAndSaasPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
  <div>
          <TechnologyHero />
        <TechnologyHeroAbout />
  </div>
        <ExperiencePillars />
        <Marquess />
        <MissionSolutions />
        <ClientJourney />
        <ConnectedExpertise />
        <RecommendedSolutions />
        <WowGrowthCta
          accentText="Ready to Build"
          mainText="What's Next?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
