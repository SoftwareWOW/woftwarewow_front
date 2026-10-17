
const PAGE_SLUG = 'education-and-training' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Turn Your Mission Into Momentum.',
  description:
    'We help organizations strengthen their presence, reach more people, simplify operations, and build the digital systems behind lasting impact.',
}

import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import EducationHero from './_components/EducationHero'
import EducationHeroAbout from './_components/EducationHeroAbout'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiDivisions } from '@/lib/strapi/mappers/superagency'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'


const SocialGallery = dynamic(() => import('./_components/SocialGallery'))
const CareJourney = dynamic(() => import('./_components/CareJourney'))
const MissionSolutions = dynamic(() => import('./_components/MissionSolutions'))
const HowItWorks = dynamic(() => import('./_components/HowItWorks'))
const DevisionOverview = dynamic(() => import('@/components/wow/LandascapComponets/DevisionOverview'))
const RecommendedSolutions = dynamic(() => import('./_components/RecommendedSolutions'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Education & Training' })
}

export default async function EducationAndTrainingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const [cms, homepage] = await Promise.all([
    loadSuperagencyPage(PAGE_SLUG, typedLocale),
    getSuperagencyHomepage(typedLocale),
  ])
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const divisions = mapStrapiDivisions(homepage.divisions)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
     <div>
         <EducationHero {...hero} images={hero.images} />
        <EducationHeroAbout {...(sections.educationHeroAbout ?? {})} />
     </div>
        <SocialGallery {...(sections.socialGallery ?? {})} />
        <CareJourney {...(sections.careJourney ?? {})} />
        <MissionSolutions {...(sections.missionSolutions ?? {})} />
        <HowItWorks {...(sections.howItWorks ?? {})} />
        <DevisionOverview divisions={divisions ?? undefined} />
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        <WowGrowthCta
          accentText="Ready to Reach"
          mainText="More Learners?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
