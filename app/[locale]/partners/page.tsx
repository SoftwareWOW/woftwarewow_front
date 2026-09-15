import LayoutOne from '@/components/shared/LayoutOne'

const PAGE_SLUG = 'partners' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'OUR PARTNERS',
  title: 'Better ',
  italicTitle: 'together.',
  description: 'We collaborate with trusted technology, platform, and industry partners to create stronger solutions for growing businesses.',
}

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowWePartner from './_components/HowWePartner'
import PartnerNetwork from './_components/PartnerNetwork'
import PartnersHero from './_components/PartnersHero'
import WhyPartnerWithWow from './_components/WhyPartnerWithWow'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Partners' })
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-06 HeroV6 / FinanceHero */}
        <PartnersHero {...hero} images={hero.images} />
        {/* 2. Our Partner Network — Home-21 ClientsV4 categorized grids */}
        <PartnerNetwork {...(sections.partnerNetwork ?? {})} />
        {/* 3. How We Partner — Home-02 ProcessV2 */}
        <HowWePartner {...(sections.howWePartner ?? {})} />
        {/* 4. Why Partner With WOW — Home-12 WhyChooseUs */}
        <WhyPartnerWithWow {...(sections.whyPartnerWithWow ?? {})} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Partner?"
          ariaLabel="Become a WOW Partner — contact our team"
        />
      </div>
    </LayoutOne>
  )
}
