
const PAGE_SLUG = 'professional-services' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Professional Services',
  title: 'Turn Expertise Into ',
  italicTitle: 'Growth.',
  description:
    'Build a stronger presence, attract better clients, and create smarter systems around the expertise your business already has.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ProfessionalServiceSolutions from './_components/ProfessionalServiceSolutions'
import ProfessionalServicesHero from './_components/ProfessionalServicesHero'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WhatMattersMost from './_components/WhatMattersMost'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Professional Services' })
}

export default async function ProfessionalServicesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Expertise Into Growth — Home-13 HeroV13 */}
        <ProfessionalServicesHero {...hero} images={hero.images} />
        {/* 2. What Matters Most — Home-12 WhyChooseUs */}
        <WhatMattersMost {...(sections.whatMattersMost ?? {})} />
        {/* 3. Professional Service Solutions — Startups StartupSolutions / Home-23 WhyChooseUsV7 */}
        <ProfessionalServiceSolutions {...(sections.professionalServiceSolutions ?? {})} />
        {/* 4. The Client Journey — SaaS ProductJourney / Home-07 ProcessV4 */}
        <ClientJourney {...(sections.clientJourney ?? {})} />
        {/* 5. Connected Expertise — Sales Acceleration / Home-19 ElevateBrandV2 */}
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        {/* 6. Recommended Solutions — Home-19 OurExpertiseV2 */}
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        {/* 7. Ready to Grow Your Firm? */}
        <WowGrowthCta
          accentText="Ready to Grow"
          mainText="Your Firm?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
