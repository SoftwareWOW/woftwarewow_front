
const PAGE_SLUG = 'healthcare-and-wellness' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Better Digital Experiences for ',
  italicTitle: 'Better Care.',
  description:
    'We help healthcare and wellness organizations build trusted brands, stronger digital experiences, smarter systems, and sustainable growth.',
}

import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HealthcareHero from './_components/HealthcareHero'
import HealthcareHeroAbout from './_components/HealthcareHeroAbout'
import { getSuperagencyDivisions } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiDivisions } from '@/lib/strapi/mappers/superagency'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'


const ExperiencePillars = dynamic(() => import('./_components/ExperiencePillars'))
const CareSolutions = dynamic(() => import('./_components/CareSolutions'))
const CareGallery = dynamic(() => import('./_components/CareGallery'))
const CareJourney = dynamic(() => import('./_components/CareJourney'))
const DevisionOverview = dynamic(() => import('@/components/wow/LandascapComponets/DevisionOverview'))
const CarePackages = dynamic(() => import('./_components/CarePackages'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Healthcare & Wellness' })
}

export default async function HealthcareAndWellnessPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const [cms, divisionRecords] = await Promise.all([
    loadSuperagencyPage(PAGE_SLUG, typedLocale),
    getSuperagencyDivisions(typedLocale),
  ])
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const divisions = mapStrapiDivisions(divisionRecords)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1–2. Hero — SaasProductHero + HeroAbout */}
        <div className="relative flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="absolute left-0 top-0 blur-[65px]">
              <img src="/images/hero-gradient-background.png" alt="" className="left-0 top-0" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-backgroundBody dark:to-secondary" />
          </div>
          <HealthcareHero {...hero} images={hero.images} />
          <HealthcareHeroAbout {...(sections.healthcareHeroAbout ?? {})} />
        </div>
        {/* 3. FromIdeaToGrowth — hover-flip experience pillars */}
        <ExperiencePillars {...(sections.experiencePillars ?? {})} />
        {/* 4. CommerceSolutions — 2×2 care solutions */}
        <CareSolutions {...(sections.careSolutions ?? {})} />
        {/* 5. TravelImagesGallery */}
        <CareGallery {...(sections.careGallery ?? {})} />
        {/* 5b. AwardWinningWork — care journey rows */}
        <CareJourney {...(sections.careJourney ?? {})} />
        {/* 6. Divisions — same as homepage */}
        <DevisionOverview divisions={divisions ?? undefined} />
        {/* 7. Packages — StartupPackages */}
        <CarePackages {...(sections.carePackages ?? {})} />
        {/* 8. Ready to Create a Better Care Experience? */}
        <WowGrowthCta
          accentText="Ready to Create"
          mainText="a Better Care Experience?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
