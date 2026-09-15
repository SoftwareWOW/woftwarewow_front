
const PAGE_SLUG = 'business-growth' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Business Growth Package',
  title: 'Turn growth into a system.',
  description:
    'Bring your marketing, sales and digital growth activities together in one coordinated package designed to help your business attract more opportunities, convert more customers and keep improving.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 1. Hero — Home-19 HeroV19
import BusinessGrowthHero from './_components/BusinessGrowthHero'
// 2. Built for Growth — Home-04 AboutV4
import BuiltForGrowth from './_components/BuiltForGrowth'
// 4. Connected Growth — Home-07 ProcessV4
import ConnectedGrowth from './_components/ConnectedGrowth'
// 3. Growth pieces — Home-04 ServicesV5
import GrowthPieces from './_components/GrowthPieces'
// 5. How it works — AiWithPurpose
import HowItWorks from './_components/HowItWorks'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Business Growth Package' })
}

export default async function BusinessGrowthPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <BusinessGrowthHero {...hero} images={hero.images} />
        {/* 2. Built for Growth — Home-04 AboutV4 */}
        <BuiltForGrowth {...(sections.builtForGrowth ?? {})} />
        {/* 3. Growth pieces — Home-04 ServicesV5 */}
        <GrowthPieces {...(sections.growthPieces ?? {})} />
        {/* 4. Connected Growth — Home-07 ProcessV4 */}
        <ConnectedGrowth {...(sections.connectedGrowth ?? {})} />
        {/* 5. How it works — AiWithPurpose */}
        <HowItWorks {...(sections.howItWorks ?? {})} />
        {/* 6. General CTA */}
        <WowGrowthCta
          accentText="Ready to grow"
          mainText="your business?"
          ariaLabel="Start the Business Growth Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
