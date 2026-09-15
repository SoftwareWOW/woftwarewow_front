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
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'
const PAGE_SLUG = 'about-why-us' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Why WOW',
  title: 'More than an agency.',
  italicTitle: 'Your growth ecosystem.',
  description:
    'Strategy, technology, marketing, AI and creative expertise working together to help your business move forward.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Why Us' })
}

export default async function WhyUsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Why WOW? — Home-19 HeroV19 */}
        <WhyUsHero {...hero} />
        {/* 2. One Partner. More Possibilities. — Home-09 OurAchievement */}
        <OnePartner {...(sections.onePartner ?? {})} />
        {/* 3. What Makes Us Different — Home-17 WhyChooseUsV6 */}
        <WhatMakesUsDifferent {...(sections.whatMakesUsDifferent ?? {})} />
        {/* 4. The Superagency Advantage — Home-02 ProcessV2 */}
        <SuperagencyAdvantage {...(sections.superagencyAdvantage ?? {})} />
        {/* 5. Built Around Your Business — Home-25 WhyChooseUsV8 */}
        <BuiltAroundBusiness {...(sections.builtAroundBusiness ?? {})} />
        {/* 6. From Strategy to Results — Home-07 ProcessV4 */}
        <StrategyToResults {...(sections.strategyToResults ?? {})} />
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
