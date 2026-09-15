
const PAGE_SLUG = 'hosting-and-infrastructure' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Hosting & Infrastructure',
  title: 'Keep your business online and ',
  italicTitle: 'ready.',
  description:
    'Reliable hosting, domains, business email and infrastructure designed to keep your digital operations fast, secure and accessible.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. Built for Business — ElevateBrandV2 / SalesJourneyGap
import BuiltForBusiness from './_components/BuiltForBusiness'
// 2. Digital Foundations — BrandCapabilities / WhyChooseUs
import DigitalFoundations from './_components/DigitalFoundations'
// 1. Hero — Home-19 HeroV19
import HostingInfraHero from './_components/HostingInfraHero'
// 6. Hosting That Fits — PricingV4
import HostingThatFits from './_components/HostingThatFits'
// 3. Infrastructure Solutions — RevenueCapabilities flip cards
import InfrastructureSolutions from './_components/InfrastructureSolutions'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Hosting & Infrastructure' })
}

export default async function HostingAndInfrastructurePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <HostingInfraHero {...hero} images={hero.images} />
        {/* 2. Digital Foundations — BrandCapabilities */}
        <DigitalFoundations {...(sections.digitalFoundations ?? {})} />
        {/* 3. Infrastructure Solutions — RevenueCapabilities */}
        <InfrastructureSolutions {...(sections.infrastructureSolutions ?? {})} />
        {/* 4. Built for Business — ElevateBrandV2 */}
        <BuiltForBusiness {...(sections.builtForBusiness ?? {})} />
        {/* 5. Trusted logos — shared Marquee */}
        <Marquee />
        {/* 6. Hosting That Fits — PricingV4 */}
        <HostingThatFits {...(sections.hostingThatFits ?? {})} />
        {/* 7. Ready to secure — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to secure your"
          mainText="infrastructure?"
          ariaLabel="Talk to a Hosting Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
