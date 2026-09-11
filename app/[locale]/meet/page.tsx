import LayoutOne from '@/components/shared/LayoutOne'
import { getCalComUrl } from '@/lib/calcom/config'
import type { Metadata } from 'next'
import CalComSection from './_components/CalComSection'
import MeetFaq from './_components/MeetFaq'
import MeetHero from './_components/MeetHero'
import MeetingInformation from './_components/MeetingInformation'
import WhyMeetWithUs from './_components/WhyMeetWithUs'

import type { Locale } from '@/i18n/config'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage,
} from '@/lib/strapi/superagency-page-loader'
import { setRequestLocale } from 'next-intl/server'

const PAGE_SLUG = 'meet' as const

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Meet' })
}



import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

export const metadata: Metadata = {
  title: 'Schedule a Meeting',
  description:
    'Book a free consultation with WOW Superagency to discuss your project, business goals, and discover how we can help you build the right digital solution.',
}

type MeetPageProps = {
  params: Promise<{ locale: string }>
}

const MeetPage = async ({ params }: MeetPageProps) => {
  await params
  const calLink = getCalComUrl() ?? undefined

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <MeetHero />
        <WhyMeetWithUs />
        <MeetingInformation />
        <CalComSection calLink={calLink} />
        <MeetFaq />
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
