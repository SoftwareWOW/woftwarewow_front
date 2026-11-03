import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import ConnectMyToolsHero from './_components/ConnectMyToolsHero'
import OurApproach from './_components/OurApproach'
import TheChallenge from './_components/TheChallenge'
import TheDifference from './_components/TheDifference'
import TheSolution from './_components/TheSolution'
import WhatWeCanConnect from './_components/WhatWeCanConnect'

type Props = {
  params: Promise<{ locale: string }>
}

const title = 'Software & System Integration Solutions | SoftwareWOW'
const description =
  'Connect your business tools with custom integrations, APIs, workflow automation, and connected data solutions from SoftwareWOW.'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title,
    description,
    keywords: [
      'system integration',
      'software integration',
      'API integrations',
      'workflow automation',
      'connected data',
      'SoftwareWOW',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/solutions/connect-my-tools`,
    },
  }
}

export default async function ConnectMyToolsSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-17/HeroV17 */}
        <ConnectMyToolsHero />

        {/* 2. The Challenge — homepage-06/ServicesV9 */}
        <TheChallenge />

        {/* 3. The Solution — homepage-11/AboutV10 */}
        <TheSolution />

        {/* 4. What We Can Connect — homepage-11/ServicesV10 */}
        <WhatWeCanConnect />

        {/* 5. The Difference — homepage-12/WhyChooseUs */}
        <TheDifference />

        {/* 6. Our Approach — homepage-12/ProcessV7 */}
        <OurApproach />

        {/* 7. Connected Expertise — homepage-19/OurExpertiseV2 */}
        <ConnectedExpertise />

        {/* 8. Ready to Connect Your Tools? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to Connect"
          mainText="Your Tools?"
          ariaLabel="Start a project to connect your business tools with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
