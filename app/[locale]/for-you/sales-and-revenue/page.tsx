
const PAGE_SLUG = 'sales-and-revenue' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Sales & Revenue',
  title: 'Turn more opportunities into',
  italicTitle: ' revenue.',
  description:
    'Build a stronger sales engine with better lead generation, funnels, CRM workflows and automation — designed to help your team sell more effectively and consistently.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. From Lead to Customer — Home-19 ProcessV10
import LeadToCustomer from './_components/LeadToCustomer'
// 3. Revenue Capabilities — Home-24 ServicesV16 bento
import RevenueCapabilities from './_components/RevenueCapabilities'
// 1. Hero — Home-25 HeroV25
import SalesRevenueHero from './_components/SalesRevenueHero'
// 5. Sales Visibility — Home-15 BrandingProcess
import SalesVisibility from './_components/SalesVisibility'
// 2. Find the Gap — Home-19 ElevateBrandV2
import SalesJourneyGap from './_components/SalesJourneyGap'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Sales & Revenue' })
}

export default async function SalesAndRevenuePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-25 HeroV25 */}
        <SalesRevenueHero {...hero} images={hero.images} />
        {/* 2. Find the Gap — Home-19 ElevateBrandV2 */}
        <SalesJourneyGap {...(sections.salesJourneyGap ?? {})} />
        {/* 3. Revenue Capabilities — Home-24 bento */}
        <RevenueCapabilities {...(sections.revenueCapabilities ?? {})} />
        {/* 4. From Lead to Customer — Home-19 ProcessV10 */}
        <LeadToCustomer {...(sections.leadToCustomer ?? {})} />
        {/* 5. Sales Visibility — Home-15 BrandingProcess */}
        <SalesVisibility {...(sections.salesVisibility ?? {})} />
        {/* 6. Ready to accelerate sales — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to accelerate"
          mainText="sales?"
          ariaLabel="Accelerate your sales at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
