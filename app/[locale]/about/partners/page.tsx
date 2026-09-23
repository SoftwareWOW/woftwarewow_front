import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 6. Built for Mutual Growth — Home-25 WhatWeOffer
import MutualGrowth from './_components/MutualGrowth'
// 3. Technology & Platform Partners — Home-16 ServicesV14
import PartnerCategories from './_components/PartnerCategories'
// 2. Our Partner Ecosystem — Home-03 Clients (dual marquee)
import PartnerEcosystem from './_components/PartnerEcosystem'
// 1. Hero — Better together with trusted collaborators
import PartnersHero from './_components/PartnersHero'
// 5. Ways to Partner With WOW — Home-15 ElevateBrand
import WaysToPartner from './_components/WaysToPartner'
// 4. Why We Partner — Home-23 WhyChooseUsV7
import WhyWePartner from './_components/WhyWePartner'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'about-partners' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Partners',
  title: 'Better',
  italicTitle: 'together',
  suffixTitle: ' with trusted collaborators',
  description:
    'We partner with trusted technology, platform, and industry leaders to deliver better solutions for growing businesses.',
}

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
        {/* 1. Hero — Better together with trusted collaborators */}
        <PartnersHero {...hero} />
        {/* 2. Our Partner Ecosystem — Home-03 Clients (dual marquee) */}
        <PartnerEcosystem {...(sections.partnerEcosystem ?? {})} />
        {/* 3. Technology & Platform Partners — Home-13 WhyChooseUsV2 */}
        <PartnerCategories {...(sections.partnerCategories ?? {})} />
        {/* 4. Why We Partner — Home-23 WhyChooseUsV7 */}
        <WhyWePartner {...(sections.whyWePartner ?? {})} />
        {/* 5. Ways to Partner With WOW — Home-15 ElevateBrand */}
        <WaysToPartner {...(sections.waysToPartner ?? {})} />
        {/* 6. Built for Mutual Growth — Home-25 WhatWeOffer */}
        <MutualGrowth {...(sections.mutualGrowth ?? {})} />
        {/* 7. Become a WOW Partner — WowGrowthCta */}
        <WowGrowthCta
          accentText="Interested in partnering"
          mainText="with us?"
          ariaLabel="Become a WOW Partner — contact our team"
        />
      </div>
    </LayoutOne>
  )
}
