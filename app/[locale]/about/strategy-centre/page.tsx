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
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'about-strategy-centre' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Strategy Centre',
  title: 'Strategy That Drives',
  italicTitle: 'Clear. Measurable. Built to scale.',
  description:
    'Discover how WOW plans, executes, and measures digital growth for SMBs — with clarity, measurable outcomes, and a coordinated roadmap across every division.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Strategy Centre' })
}

export default async function StrategyCentrePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — Strategy That Drives Growth — Home-21 Hero21 */}
        <StrategyHero {...hero} />
        {/* 2. The WOW Growth Framework — Home-15 BrandingProcess */}
        <WowGrowthFramework {...(sections.wowGrowthFramework ?? {})} />
        {/* 3. Our Strategic Expertise — Home-18 OurExpertise */}
        <StrategicExpertise {...(sections.strategicExpertise ?? {})} />
        {/* 4. How We Build Your Strategy — Home-19 ProcessV10 */}
        <HowWeBuildStrategy {...(sections.howWeBuildStrategy ?? {})} />
        {/* 5. Strategies Built Around Your Business — Home-12 WhyChooseUs */}
        <BuiltAroundYourBusiness {...(sections.builtAroundYourBusiness ?? {})} />
        {/* 6. Strategy Playbooks & Insights — WOW GrowthStrategies */}
        <StrategyPlaybooks {...(sections.strategyPlaybooks ?? {})} />
        {/* 7. Strategy in Action — Home-24 ProjectCaseStudies */}
        <StrategyInAction {...(sections.strategyInAction ?? {})} />
        {/* 8. Build Your Growth Strategy — WOW WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to turn your ambitions into a"
          mainText="clear growth plan?"
          ariaLabel="Book a Strategy Session with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
