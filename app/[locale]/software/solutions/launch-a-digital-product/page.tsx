import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import LaunchDigitalProductHero from './_components/LaunchDigitalProductHero'
import OurApproach from './_components/OurApproach'
import TheChallenge from './_components/TheChallenge'
import TheDifference from './_components/TheDifference'
import TheSolution from './_components/TheSolution'
import WhatWeCanBuild from './_components/WhatWeCanBuild'

type Props = {
  params: Promise<{ locale: string }>
}

const title = 'Digital Product Development & Launch | SoftwareWOW'
const description =
  'Turn your idea into a digital product with product strategy, UX/UI design, MVP development, SaaS platforms, and launch support from SoftwareWOW.'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title,
    description,
    keywords: [
      'digital product development',
      'MVP development',
      'SaaS platforms',
      'product strategy',
      'UX/UI design',
      'SoftwareWOW',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/solutions/launch-a-digital-product`,
    },
  }
}

export default async function LaunchDigitalProductSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-09/HeroV9 */}
        <LaunchDigitalProductHero />

        {/* 2. The Challenge — homepage-11/WhyRivor */}
        <TheChallenge />

        {/* 3. The Solution — homepage-04/AboutV4 */}
        <TheSolution />

        {/* 4. What We Can Build — homepage-14/OurWorkShowcase */}
        <WhatWeCanBuild />

        {/* 5. The Difference — homepage-12/WhyChooseUs */}
        <TheDifference />

        {/* 6. Our Approach — homepage-20/ProcessV9 */}
        <OurApproach />

        {/* 7. Connected Expertise — homepage-14/ServicesV13 */}
        <ConnectedExpertise />

        {/* 8. Ready to Launch Your Product? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to Launch"
          mainText="Your Product?"
          ariaLabel="Start a digital product project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
