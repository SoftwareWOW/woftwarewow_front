import LayoutOne from '@/components/shared/LayoutOne'
import type { Metadata } from 'next'
import CalendlySection from './_components/CalendlySection'
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
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

  return (
    <LayoutOne>
      <MeetHero />
      <WhyMeetWithUs />
      <MeetingInformation />
      <CalendlySection calendlyUrl={calendlyUrl} />
         <MeetFaq />
        <WowGrowthCta />  
    </LayoutOne>
  )
}

export default MeetPage
