
const PAGE_SLUG = 'education-and-training' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Turn Your Mission Into Momentum.',
  description:
    'We help organizations strengthen their presence, reach more people, simplify operations, and build the digital systems behind lasting impact.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import DevisionOverview from '@/components/wow/LandascapComponets/DevisionOverview'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CareJourney from './_components/CareJourney'
import EducationHero from './_components/EducationHero'
import EducationHeroAbout from './_components/EducationHeroAbout'
import HowItWorks from './_components/HowItWorks'
import MissionSolutions from './_components/MissionSolutions'
import RecommendedSolutions from './_components/RecommendedSolutions'
import SocialGallery from './_components/SocialGallery'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

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

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

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
        <DevisionOverview />
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
