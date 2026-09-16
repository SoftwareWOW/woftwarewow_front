import LayoutOne from '@/components/shared/LayoutOne'
import Team from '@/components/aboutpage/Team'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Metadata } from 'next'
import TeamHero from './_components/TeamHero'

import type { Locale } from '@/i18n/config'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage,
} from '@/lib/strapi/superagency-page-loader'
import { setRequestLocale } from 'next-intl/server'

const PAGE_SLUG = 'team' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Team',
  title: 'Our Creative ',
  italicTitle: 'Team',
  description:
    "These alternatives can add a different tone or emphasis depending on how you want to introduce your creative team. Let me know if you'd like any specific adjustments!",
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Team' })
}

const TeamPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <TeamHero {...hero} scale />
        <Team members={cms.teamMembers(cms.field('teamMembers')) ?? undefined} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default TeamPage
