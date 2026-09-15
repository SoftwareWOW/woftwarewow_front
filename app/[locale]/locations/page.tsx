import LayoutOne from '@/components/shared/LayoutOne'

const PAGE_SLUG = 'locations' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'OUR LOCATIONS',
  title: 'Global Reach. Connected ',
  italicTitle: 'Expertise.',
  description: 'A connected Superagency working across markets, industries, and time zones.',
}

import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LocationsHero from './_components/LocationsHero'
import LocationsHeroAbout from './_components/LocationsHeroAbout'
import LocationsPresence from './_components/LocationsPresence'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Locations' })
}

export default async function LocationsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <div>
          <LocationsHero {...hero} images={hero.images} />
          <LocationsHeroAbout {...(sections.locationsHeroAbout ?? {})} />
        </div>
        <LocationsPresence {...(sections.locationsPresence ?? {})} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Connect?"
          ariaLabel="Contact WOW Superagency — connect with our team"
        />
      </div>
    </LayoutOne>
  )
}
