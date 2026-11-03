import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConnectedExpertise from './_components/ConnectedExpertise'
import CreateMobileExperienceHero from './_components/CreateMobileExperienceHero'
import OurApproach from './_components/OurApproach'
import TheChallenge from './_components/TheChallenge'
import TheDifference from './_components/TheDifference'
import TheSolution from './_components/TheSolution'
import WhatWeCanBuild from './_components/WhatWeCanBuild'

type Props = {
  params: Promise<{ locale: string }>
}

const title = 'Mobile App & Experience Solutions | SoftwareWOW'
const description =
  'Create intuitive mobile experiences with custom mobile apps, UX/UI design, connected services, and mobile development from SoftwareWOW.'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title,
    description,
    keywords: [
      'mobile app development',
      'mobile experience',
      'UX/UI design',
      'customer apps',
      'mobile commerce',
      'SoftwareWOW',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/solutions/create-a-mobile-experience`,
    },
  }
}

export default async function CreateMobileExperienceSolutionPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-19/HeroV19 */}
        <CreateMobileExperienceHero />

        {/* 2. The Challenge — homepage-23/WhyChooseUsV7 */}
        <TheChallenge />

        {/* 3. The Solution — homepage-13/AboutV12 */}
        <TheSolution />

        {/* 4. What We Can Build — homepage-15/OurWorkV2 */}
        <WhatWeCanBuild />

        {/* 5. The Difference — homepage-12/WhyChooseUs */}
        <TheDifference />

        {/* 6. Our Approach — homepage-15/BrandingProcess */}
        <OurApproach />

        {/* 7. Connected Expertise — homepage-18/ServicesV15 */}
        <ConnectedExpertise />

        {/* 8. Ready to Go Mobile? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to Go"
          mainText="Mobile?"
          ariaLabel="Start a mobile experience project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
