
const PAGE_SLUG = 'sales-acceleration' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Sales Acceleration',
  title: 'Turn more opportunities into revenue.',
  description:
    'Build a smarter sales system for generating leads, improving follow-up, and increasing conversion.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AccelerationJourney from './_components/AccelerationJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import SalesAccelerationHero from './_components/SalesAccelerationHero'
import SalesGaps from './_components/SalesGaps'
import WhatsIncluded from './_components/WhatsIncluded'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Sales Acceleration' })
}

export default async function SalesAccelerationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Opportunities Into Revenue — Home-18 HeroV18 */}
        <SalesAccelerationHero {...hero} images={hero.images} />
        {/* 2. Fix the Gaps in Your Sales Engine — AiWithPurpose */}
        <SalesGaps {...(sections.salesGaps ?? {})} />
        {/* 3. What’s Included — SolutionToChallenges */}
        <WhatsIncluded {...(sections.whatsIncluded ?? {})} />
        {/* 4. Your Acceleration Journey — Home-07 ProcessV4 */}
        <AccelerationJourney {...(sections.accelerationJourney ?? {})} />
        {/* 5. One Package. Connected Expertise. — Home-19 ElevateBrandV2 */}
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        {/* 6. Ready to Accelerate Sales? */}
        <WowGrowthCta
          accentText="Ready to build a stronger"
          mainText="sales engine?"
          ariaLabel="Start the Sales Acceleration Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
