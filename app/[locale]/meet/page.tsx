import LayoutOne from '@/components/shared/LayoutOne'
import { getCalComUrl } from '@/lib/calcom/config'
import type { Metadata } from 'next'
import CalComSection from './_components/CalComSection'
import MeetFaq from './_components/MeetFaq'
import MeetHero from './_components/MeetHero'
import MeetingInformation from './_components/MeetingInformation'
import WhyMeetWithUs from './_components/WhyMeetWithUs'

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
        <WowGrowthCta />
      </div>
    </LayoutOne>
  )
}

export default MeetPage
