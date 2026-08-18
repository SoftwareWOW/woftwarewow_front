import LayoutOne from '@/components/shared/LayoutOne'
import DevisionOverview from '@/components/wow/LandascapComponets/DevisionOverview'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CareJourney from './_components/CareJourney'
import EducationHero from './_components/EducationHero'
import EducationHeroAbout from './_components/EducationHeroAbout'
import HowItWorks from './_components/HowItWorks'
import MissionSolutions from './_components/MissionSolutions'
import RecommendedSolutions from './_components/RecommendedSolutions'
import SocialGallery from './_components/SocialGallery'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Education & Training | WOW Superagency',
    description: 'Digital growth for education and training organizations.',
    keywords: [
      'education',
      'training',
      'learning',
      'enrollment',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Education & Training | WOW Superagency',
      description: 'Digital growth for education and training organizations.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/education-and-training`,
    },
  }
}

export default async function EducationAndTrainingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <EducationHero />
        <EducationHeroAbout />
        <SocialGallery />
        <CareJourney />
        <MissionSolutions />
        <HowItWorks />
        <DevisionOverview />
        <RecommendedSolutions />
        <WowGrowthCta
          accentText="Ready to Reach"
          mainText="More Learners?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
