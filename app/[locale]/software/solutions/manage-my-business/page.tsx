import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedBusinessSolution from './_components/ConnectedBusinessSolution'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ManageMyBusinessHero from './_components/ManageMyBusinessHero'
import OurApproach from './_components/OurApproach'
import TheChallenge from './_components/TheChallenge'
import TheDifference from './_components/TheDifference'
import WhatWeCanBuild from './_components/WhatWeCanBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Business Management Software Solutions | SoftwareWOW',
    description:
      'Simplify business operations with custom management systems, workflow automation, CRM platforms, dashboards, and connected software from SoftwareWOW.',
    keywords: [
      'business management software',
      'workflow automation',
      'CRM platforms',
      'operations dashboard',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Business Management Software Solutions | SoftwareWOW',
      description:
        'Simplify business operations with custom management systems, workflow automation, CRM platforms, dashboards, and connected software from SoftwareWOW.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/solutions/manage-my-business`,
    },
  }
}

export default async function ManageMyBusinessSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-24/HeroV24 */}
        <ManageMyBusinessHero />

        {/* 2. The Challenge — homepage-24/WhyChooseUsV8 */}
        <TheChallenge />

        {/* 3. The Solution — homepage-24/WhatWeOffer */}
        <ConnectedBusinessSolution />

        {/* 4. What We Can Build — homepage-22/OurServices */}
        <WhatWeCanBuild />

        {/* 5. The Difference — homepage-04/TestimonialV5 */}
        <TheDifference />

        {/* 6. Our Approach — homepage-24/ProcessV11 */}
        <OurApproach />

        {/* 7. Connected Expertise — homepage-24/ServicesV16 */}
        <ConnectedExpertise />

        {/* 8. Ready to run a smarter business? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to run"
          mainText="a smarter business?"
          ariaLabel="Start a business management software project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
