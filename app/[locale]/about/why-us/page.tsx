import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Built Around Your Business — Home-25 WhyChooseUsV8
import BuiltAroundBusiness from './_components/BuiltAroundBusiness'
// 2. One Partner. More Possibilities. — Home-09 OurAchievement
import OnePartner from './_components/OnePartner'
// 6. From Strategy to Results — Home-07 ProcessV4
import StrategyToResults from './_components/StrategyToResults'
// 4. The Superagency Advantage — Home-02 ProcessV2
import SuperagencyAdvantage from './_components/SuperagencyAdvantage'
// 3. What Makes Us Different — Home-17 WhyChooseUsV6
import WhatMakesUsDifferent from './_components/WhatMakesUsDifferent'
// 1. Hero — Why WOW? — Home-19 HeroV19
import WhyUsHero from './_components/WhyUsHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Why Us | WOW Superagency',
    description:
      'Why growing businesses choose WOW Superagency — integrated technology, marketing, AI, creative, and growth under one partner instead of juggling agencies and freelancers.',
    keywords: [
      'why WOW',
      'superagency',
      'integrated agency',
      'SMB growth partner',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Why Us | WOW Superagency',
      description:
        'More than an agency. Your growth ecosystem — strategy, technology, marketing, AI and creative working together.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about/why-us`,
    },
  }
}

export default async function WhyUsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Why WOW? — Home-19 HeroV19 */}
        <WhyUsHero />
        {/* 2. One Partner. More Possibilities. — Home-09 OurAchievement */}
        <OnePartner />
        {/* 3. What Makes Us Different — Home-17 WhyChooseUsV6 */}
        <WhatMakesUsDifferent />
        {/* 4. The Superagency Advantage — Home-02 ProcessV2 */}
        <SuperagencyAdvantage />
        {/* 5. Built Around Your Business — Home-25 WhyChooseUsV8 */}
        <BuiltAroundBusiness />
        {/* 6. From Strategy to Results — Home-07 ProcessV4 */}
        <StrategyToResults />
        {/* 7. Ready to Grow Differently? — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to grow"
          mainText="differently?"
          ariaLabel="Talk to an Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
