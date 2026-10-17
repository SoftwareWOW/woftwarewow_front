import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import { getCalComUrl } from '@/lib/calcom/config'
import type { Locale } from '@/i18n/config'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MeetHero from './_components/MeetHero'
import WhyMeetWithUs from './_components/WhyMeetWithUs'


const MeetingInformation = dynamic(() => import('./_components/MeetingInformation'))
const CalComSection = dynamic(() => import('./_components/CalComSection'))
const MeetFaq = dynamic(() => import('./_components/MeetFaq'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

const PAGE_SLUG = 'meet' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Consultation',
  title: 'Schedule a',
  italicTitle: 'Meeting',
  description:
    'Book a free consultation with our team to discuss your project, business goals, and discover how we can help you build the right digital solution.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Meet' })
}

const MeetPage = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const calLink = getCalComUrl() ?? undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <MeetHero {...hero} />
        <WhyMeetWithUs {...(sections.whyMeetWithUs ?? {})} />
        <MeetingInformation {...(sections.meetingInformation ?? {})} />
        <CalComSection calLink={calLink} {...(sections.calComSection ?? {})} />
        <MeetFaq {...(sections.meetFaq ?? {})} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default MeetPage
