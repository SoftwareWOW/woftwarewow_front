import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import FromIdeaToGrowth from './_components/FromIdeaToGrowth'
import StartupJourney from './_components/StartupJourney'
import StartupPackages from './_components/StartupPackages'
import StartupSolutions from './_components/StartupSolutions'
import StartupsEntrepreneursHero from './_components/StartupsEntrepreneursHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Startups & Entrepreneurs | WOW Superagency',
    description: 'Built for new ventures.',
    keywords: [
      'startups',
      'entrepreneurs',
      'startup launch',
      'brand authority',
      'website growth',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Startups & Entrepreneurs | WOW Superagency',
      description: 'Built for new ventures.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/startups-and-entrepreneurs`,
    },
  }
}

export default async function StartupsAndEntrepreneursPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Build What's Next — Home-06 HeroV6 */}
        <StartupsEntrepreneursHero />
        {/* 2. From Idea to Growth — TransformationPlan / Home-24 ServicesV16 */}
        <FromIdeaToGrowth />
        {/* 3. Startup Solutions — Home-23 WhyChooseUsV7 */}
        <StartupSolutions />
        {/* 4. The Startup Journey — Sales Visibility / Home-15 BrandingProcess */}
        <StartupJourney />
        {/* 5. Connected Expertise — DevisionOverview copy */}
        <ConnectedExpertise />
        {/* 6. Packages — Home-20 PortfolioV6 */}
        <StartupPackages />
        {/* 7. Ready to Bring Your Idea to Life? */}
        <WowGrowthCta
          accentText="Ready to bring your idea"
          mainText="to life?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
