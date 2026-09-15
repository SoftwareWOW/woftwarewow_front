
const PAGE_SLUG = 'organizations-and-nonprofits' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Organizations & Nonprofits',
  title: 'Turn Your Mission Into',
  italicTitle: ' Momentum.',
  description:
    'We help organizations strengthen their presence, reach more people, simplify operations, and build the digital systems behind lasting impact.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ImpactJourney from './_components/ImpactJourney'
import MissionJourney from './_components/MissionJourney'
import MissionSolutions from './_components/MissionSolutions'
import OrganizationsHero from './_components/OrganizationsHero'
import OrganizationsHeroAbout from './_components/OrganizationsHeroAbout'
import OurPortfolio from './_components/OurPortfolio'
import RecommendedSolutions from './_components/RecommendedSolutions'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Organizations & Nonprofits' })
}

export default async function OrganizationsAndNonprofitsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <OrganizationsHero {...hero} images={hero.images} />
        <OrganizationsHeroAbout {...(sections.organizationsHeroAbout ?? {})} />
        <MissionJourney {...(sections.missionJourney ?? {})} />
        <OurPortfolio {...(sections.ourPortfolio ?? {})} />
        <MissionSolutions {...(sections.missionSolutions ?? {})} />
        <ImpactJourney {...(sections.impactJourney ?? {})} />
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        <WowGrowthCta
          accentText="Ready to Amplify"
          mainText="Your Impact?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
