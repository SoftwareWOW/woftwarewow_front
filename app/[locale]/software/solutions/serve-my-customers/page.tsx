import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import OurApproach from './_components/OurApproach'
import ServeMyCustomersHero from './_components/ServeMyCustomersHero'
import TheChallenge from './_components/TheChallenge'
import TheDifference from './_components/TheDifference'
import TheSolution from './_components/TheSolution'
import WhatWeCanBuild from './_components/WhatWeCanBuild'

type Props = {
  params: Promise<{ locale: string }>
}

const title = 'Customer Experience Software Solutions | SoftwareWOW'
const description =
  'Build customer portals, mobile apps, support platforms, booking systems, and smart assistance that make every customer interaction count.'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title,
    description,
    keywords: [
      'customer experience software',
      'customer portals',
      'mobile apps',
      'support platforms',
      'booking systems',
      'SoftwareWOW',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/solutions/serve-my-customers`,
    },
  }
}

export default async function ServeMyCustomersSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-08/HeroV8 */}
        <ServeMyCustomersHero />

        {/* 2. The Challenge — homepage-24/ServicesV16 */}
        <TheChallenge />

        {/* 3. The Solution — homepage-13/AboutV12 */}
        <TheSolution />

        {/* 4. What We Can Build — homepage-25/ClientSuccessStoriesV2 */}
        <WhatWeCanBuild />

        {/* 5. The Difference — homepage-12/WhyChooseUs */}
        <TheDifference />

        {/* 6. Our Approach — homepage-06/ProcessV5 */}
        <OurApproach />

        {/* 7. Connected Expertise — homepage-08/ServicesV7 */}
        <ConnectedExpertise />

        {/* 8. Ready to serve your customers better? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to serve"
          mainText="your customers better?"
          ariaLabel="Start a customer experience software project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
