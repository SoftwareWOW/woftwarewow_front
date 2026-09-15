
const PAGE_SLUG = 'marketing-and-growth' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Marketing & Growth',
  title: 'Turn attention into sustainable growth.',
  description: 'Attract more customers, convert more opportunities, and grow smarter.',
}

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
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Marketing & Growth' })
}

export default async function MarketingAndGrowthPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-16 HeroV16 */}
        <MarketingGrowthHero {...hero} images={hero.images} />
        {/* 2. Your Growth Challenges — Home-16 WhyChooseUsV5 */}
        <GrowthChallenges {...(sections.growthChallenges ?? {})} />
        {/* 3. Everything You Need to Grow — Home-16 ServicesV14 */}
        <EverythingToGrow {...(sections.everythingToGrow ?? {})} />
        {/* 4. Connected Growth System — Home-16 ProcessV8 */}
        <ConnectedGrowthSystem {...(sections.connectedGrowthSystem ?? {})} />
        {/* 5. Built Around Your Goals — Home-18 OurExpertise */}
        <BuiltAroundGoals {...(sections.builtAroundGoals ?? {})} />
        {/* 6. Powered by Specialist Teams — Home-16 ServicesV14 pattern */}
        <SpecialistTeams {...(sections.specialistTeams ?? {})} />
        {/* 7. Growth in Action — Home-16 ProjectServicesV4 */}
        <GrowthInAction {...(sections.growthInAction ?? {})} />
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
