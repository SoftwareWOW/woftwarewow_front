
const PAGE_SLUG = 'technology-and-saas' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Digital Transformation Package',
  title: 'Build Products People Keep Using.',
  description:
    'We help technology companies turn ideas into scalable products, stronger brands, smarter growth systems, and better digital experiences.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ExperiencePillars from './_components/ExperiencePillars'
import MissionSolutions from './_components/MissionSolutions'
import RecommendedSolutions from './_components/RecommendedSolutions'
import TechnologyHero from './_components/TechnologyHero'
import TechnologyHeroAbout from './_components/TechnologyHeroAbout'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Technology & SaaS' })
}

export default async function TechnologyAndSaasPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
  <div>
          <TechnologyHero {...hero} images={hero.images} />
        <TechnologyHeroAbout {...(sections.technologyHeroAbout ?? {})} />
  </div>
        <ExperiencePillars {...(sections.experiencePillars ?? {})} />
        <Marquess />
        <MissionSolutions {...(sections.missionSolutions ?? {})} />
        <ClientJourney {...(sections.clientJourney ?? {})} />
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        <WowGrowthCta
          accentText="Ready to Build"
          mainText="What's Next?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
