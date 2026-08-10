import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Built Around Your Goals — Home-18 OurExpertise
import BuiltAroundGoals from './_components/BuiltAroundGoals'
// 4. Connected Growth System — Home-16 ProcessV8
import ConnectedGrowthSystem from './_components/ConnectedGrowthSystem'
// 7. Growth in Action — Home-16 ProjectServicesV4
import GrowthInAction from './_components/GrowthInAction'
// 1. Hero — Home-16 HeroV16
import MarketingGrowthHero from './_components/MarketingGrowthHero'
// 6. Powered by Specialist Teams — Home-16 ServicesV14 card pattern
import SpecialistTeams from './_components/SpecialistTeams'
// 3. Everything You Need to Grow — Home-16 ServicesV14
import EverythingToGrow from './_components/EverythingToGrow'
// 2. Your Growth Challenges — Home-16 WhyChooseUsV5
import GrowthChallenges from './_components/GrowthChallenges'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Marketing & Growth | WOW Superagency',
    description:
      'Turn attention into sustainable growth — connect strategy, marketing, content, sales and automation to attract the right customers and create measurable results.',
    keywords: [
      'marketing and growth',
      'lead generation',
      'SEO',
      'paid media',
      'CRM automation',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Marketing & Growth | WOW Superagency',
      description:
        'How WOW helps you attract more customers and grow revenue — one connected growth system across marketing, social, sales and automation.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/marketing-and-growth`,
    },
  }
}

export default async function MarketingAndGrowthPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-16 HeroV16 */}
        <MarketingGrowthHero />
        {/* 2. Your Growth Challenges — Home-16 WhyChooseUsV5 */}
        <GrowthChallenges />
        {/* 3. Everything You Need to Grow — Home-16 ServicesV14 */}
        <EverythingToGrow />
        {/* 4. Connected Growth System — Home-16 ProcessV8 */}
        <ConnectedGrowthSystem />
        {/* 5. Built Around Your Goals — Home-18 OurExpertise */}
        <BuiltAroundGoals />
        {/* 6. Powered by Specialist Teams — Home-16 ServicesV14 pattern */}
        <SpecialistTeams />
        {/* 7. Growth in Action — Home-16 ProjectServicesV4 */}
        <GrowthInAction />
        {/* 8. Ready to Accelerate Growth? — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to accelerate"
          mainText="growth?"
          ariaLabel="Talk to a Growth Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
