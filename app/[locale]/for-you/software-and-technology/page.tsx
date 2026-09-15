
const PAGE_SLUG = 'software-and-technology' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Software & Technology',
  title: 'Technology built around your business.',
  description:
    'From custom software and digital products to integrations and modernization, we build technology that solves real problems and supports how your business works.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 3. Built for the Fit — Why SMBs TheGap
import BuiltForTheFit from './_components/BuiltForTheFit'
// 5. Our Approach — Home-25 WhyChooseUsV8
import OurApproach from './_components/OurApproach'
// 1. Hero — Home-12 HeroV12
import SoftwareTechHero from './_components/SoftwareTechHero'
// 4. Path — Build & Launch LaunchPath
import TechLaunchPath from './_components/TechLaunchPath'
// 2. What We Build — Home-16 ServicesV14
import WhatWeBuild from './_components/WhatWeBuild'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Software & Technology' })
}

export default async function SoftwareAndTechnologyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-12 HeroV12 */}
        <SoftwareTechHero {...hero} images={hero.images} />
        {/* 2. What We Build — Home-16 ServicesV14 */}
        <WhatWeBuild {...(sections.whatWeBuild ?? {})} />
        {/* 3. Built for the Fit — Why SMBs TheGap */}
        <BuiltForTheFit {...(sections.builtForTheFit ?? {})} />
        {/* 4. Path — Build & Launch LaunchPath */}
        <TechLaunchPath {...(sections.techLaunchPath ?? {})} />
        {/* 5. Our Approach — Home-25 WhyChooseUsV8 */}
        <OurApproach {...(sections.ourApproach ?? {})} />
        {/* 6. Ready to build — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="build?"
          ariaLabel="Talk to a Technology Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
