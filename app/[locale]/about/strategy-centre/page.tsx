import LayoutOne from '@/components/shared/LayoutOne'
// 8. Build Your Growth Strategy — WOW WowGrowthCta
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Strategies Built Around Your Business — Home-12 WhyChooseUs
import BuiltAroundYourBusiness from './_components/BuiltAroundYourBusiness'
// 4. How We Build Your Strategy — Home-19 ProcessV10
import HowWeBuildStrategy from './_components/HowWeBuildStrategy'
// 3. Our Strategic Expertise — Home-18 OurExpertise
import StrategicExpertise from './_components/StrategicExpertise'
// 1. Hero — Strategy That Drives Growth — Home-21 Hero21
import StrategyHero from './_components/StrategyHero'
// 7. Strategy in Action — Home-24 ProjectCaseStudies
import StrategyInAction from './_components/StrategyInAction'
// 6. Strategy Playbooks & Insights — WOW GrowthStrategies
import StrategyPlaybooks from './_components/StrategyPlaybooks'
// 2. The WOW Growth Framework — Home-15 BrandingProcess
import WowGrowthFramework from './_components/WowGrowthFramework'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Strategy Centre | WOW Superagency',
    description:
      'Strategy that drives growth — discover how WOW plans, executes, and measures digital growth for SMBs with clear frameworks, tailored roadmaps, and measurable outcomes.',
    keywords: [
      'strategy centre',
      'digital growth strategy',
      'SMB growth frameworks',
      'digital roadmaps',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Strategy Centre | WOW Superagency',
      description:
        'Strategy that drives growth — plan, execute, and measure digital growth for SMBs.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about/strategy-centre`,
    },
  }
}

export default async function StrategyCentrePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — Strategy That Drives Growth — Home-21 Hero21 */}
        <StrategyHero />
        {/* 2. The WOW Growth Framework — Home-15 BrandingProcess */}
        <WowGrowthFramework />
        {/* 3. Our Strategic Expertise — Home-18 OurExpertise */}
        <StrategicExpertise />
        {/* 4. How We Build Your Strategy — Home-19 ProcessV10 */}
        <HowWeBuildStrategy />
        {/* 5. Strategies Built Around Your Business — Home-12 WhyChooseUs */}
        <BuiltAroundYourBusiness />
        {/* 6. Strategy Playbooks & Insights — WOW GrowthStrategies */}
        <StrategyPlaybooks />
        {/* 7. Strategy in Action — Home-24 ProjectCaseStudies */}
        <StrategyInAction />
        {/* 8. Build Your Growth Strategy — WOW WowGrowthCta */}
        <div className="mb-3">
          <WowGrowthCta
            accentText="Ready to turn your ambitions into a"
            mainText="clear growth plan?"
            ariaLabel="Book a Strategy Session with WOW Superagency"
          />
        </div>
      </div>
    </LayoutOne>
  )
}
