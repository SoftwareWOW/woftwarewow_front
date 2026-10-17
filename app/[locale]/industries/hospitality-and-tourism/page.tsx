
const PAGE_SLUG = 'hospitality-and-tourism' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Turn Great Experiences Into ',
  italicTitle: 'Growth.',
  description:
    'We help hospitality and tourism brands attract more guests, strengthen their digital presence, and create smoother experiences from discovery to return.',
}

import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HospitalityHero from './_components/HospitalityHero'
import HospitalityHeroAbout from './_components/HospitalityHeroAbout'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'


const WhatMattersMost = dynamic(() => import('./_components/WhatMattersMost'))
const Marquess = dynamic(() => import('@/components/wow/LandascapComponets/Marquee'))
const GuestSolutions = dynamic(() => import('./_components/GuestSolutions'))
const GuestJourney = dynamic(() => import('./_components/GuestJourney'))
const ConnectedExpertise = dynamic(() => import('./_components/ConnectedExpertise'))
const RecommendedSolutions = dynamic(() => import('./_components/RecommendedSolutions'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Hospitality & Tourism' })
}

export default async function HospitalityAndTourismPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <HospitalityHero {...hero} images={hero.images} />
        <HospitalityHeroAbout {...(sections.hospitalityHeroAbout ?? {})} />
        <WhatMattersMost {...(sections.builtAroundGuest ?? {})} />
        <Marquess />
        <GuestSolutions {...(sections.guestSolutions ?? {})} />
        <GuestJourney {...(sections.guestJourney ?? {})} />
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        <WowGrowthCta
          accentText="Ready to Welcome"
          mainText="More Guests?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
