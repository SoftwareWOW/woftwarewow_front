import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { getThinkTankCalComUrl } from '@/lib/calcom/config'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BeforeWeMeet from './_components/BeforeWeMeet'
import ThinkTankBooking from './_components/ThinkTankBooking'
import ThinkTankFaq from './_components/ThinkTankFaq'
import ThinkTankHero from './_components/ThinkTankHero'
import ThinkTankSessionInfo from './_components/ThinkTankSessionInfo'
import WhyThinkTank from './_components/WhyThinkTank'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'thinktank' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Think Tank',
  title: 'Book a',
  italicTitle: 'Think Tank Session',
  description:
    'A focused working session with our team to explore ideas, solve challenges, and move your project or initiative forward.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Think Tank' })
}

export default async function ThinkTankPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const calLink = getThinkTankCalComUrl() ?? undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <ThinkTankHero {...hero} />
        <WhyThinkTank {...(sections.whyThinkTank ?? {})} />
        <ThinkTankSessionInfo {...(sections.thinkTankSessionInfo ?? {})} />
        <ThinkTankBooking calLink={calLink} {...(sections.thinkTankBooking ?? {})} />
        <BeforeWeMeet {...(sections.beforeWeMeet ?? {})} />
        <ThinkTankFaq {...(sections.thinkTankFaq ?? {})} />
        <WowGrowthCta accentText="Ready to" mainText="Grow?" ariaLabel="Contact WOW Superagency" />
      </div>
    </LayoutOne>
  )
}
