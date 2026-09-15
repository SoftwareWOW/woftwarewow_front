import LayoutOne from '@/components/shared/LayoutOne'
import Marquess from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import ChallengeSolution from './_components/ChallengeSolution'
import IndustriesHero from './_components/IndustriesHero'
import IndustriesJourney from './_components/IndustriesJourney'
import IndustriesProcess from './_components/IndustiesProces'
import OurIndustries from './_components/OurIndustries'

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'industries' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'SEO Agency',
  title: 'We are the brilliants in terms of digital marketing',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Industries' })
}





const IndustriesPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <IndustriesHero {...hero} images={hero.images} />
        <IndustriesJourney {...(sections.industriesJourney ?? {})} />
        <OurIndustries {...(sections.ourIndustries ?? {})} />
        <Marquess />
        <IndustriesProcess {...(sections.industriesProcess ?? {})} />
        <ChallengeSolution {...(sections.challengeSolution ?? {})} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default IndustriesPage
