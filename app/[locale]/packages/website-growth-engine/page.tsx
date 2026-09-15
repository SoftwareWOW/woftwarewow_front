
const PAGE_SLUG = 'website-growth-engine' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Website Growth Engine',
  title: 'Build a website that works harder.',
  description:
    'Create a faster, smarter website designed to attract visitors, convert opportunities, and support growth.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltToPerform from './_components/BuiltToPerform'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WebsiteGrowthHero from './_components/WebsiteGrowthHero'
import WebsiteJourney from './_components/WebsiteJourney'
import WhatsIncluded from './_components/WhatsIncluded'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Website Growth Engine' })
}

export default async function WebsiteGrowthEnginePackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Your Website Into a Growth Engine — Home-04 HeroV11 */}
        <WebsiteGrowthHero {...hero} images={hero.images} />
        {/* 2. Built to Perform — Home-24 ServicesV16 */}
        <BuiltToPerform {...(sections.builtToPerform ?? {})} />
        {/* 3. What’s Included — Home-04 ServicesV5 */}
        <WhatsIncluded {...(sections.whatsIncluded ?? {})} />
        {/* 4. Your Website Journey — LaunchPath / ServiceProces */}
        <WebsiteJourney {...(sections.websiteJourney ?? {})} />
        {/* 5. One Website. Specialist Expertise. — Home-16 ServicesV14 */}
        <SpecialistExpertise {...(sections.specialistExpertise ?? {})} />
        {/* 6. Ready to Build Your Growth Engine? */}
        <WowGrowthCta
          accentText="Ready for a website"
          mainText="built to grow?"
          ariaLabel="Start the Website Growth Engine Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
