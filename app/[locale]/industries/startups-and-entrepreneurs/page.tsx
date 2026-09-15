
const PAGE_SLUG = 'startups-and-entrepreneurs' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Startups & Entrepreneurs',
  title: "Build What's ",
  italicTitle: 'Next.',
  description:
    'From first idea to market-ready business, we bring strategy, brand, technology, marketing, and growth together.',
}

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
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Startups & Entrepreneurs' })
}

export default async function StartupsAndEntrepreneursPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Build What's Next — Home-06 HeroV6 */}
        <StartupsEntrepreneursHero {...hero} images={hero.images} />
        {/* 2. From Idea to Growth — TransformationPlan / Home-24 ServicesV16 */}
        <FromIdeaToGrowth {...(sections.fromIdeaToGrowth ?? {})} />
        {/* 3. Startup Solutions — Home-23 WhyChooseUsV7 */}
        <StartupSolutions {...(sections.startupSolutions ?? {})} />
        {/* 4. The Startup Journey — Sales Visibility / Home-15 BrandingProcess */}
        <StartupJourney {...(sections.startupJourney ?? {})} />
        {/* 5. Connected Expertise — DevisionOverview copy */}
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        {/* 6. Packages — Home-20 PortfolioV6 */}
        <StartupPackages {...(sections.startupPackages ?? {})} />
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
