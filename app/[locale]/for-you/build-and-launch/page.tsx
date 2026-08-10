import LayoutOne from '@/components/shared/LayoutOne'
import SolutionToChallenges from '@/components/wow/LandascapComponets/SolutionToChallench'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 1. Hero — Home-19 HeroV19
import BuildLaunchHero from './_components/BuildLaunchHero'
// 4. Launch Path — Services ServiceProces
import LaunchPath from './_components/LaunchPath'
// 5. Startup Package — HeroV19 + checklist
import StartupPackage from './_components/StartupPackage'
// 2. What We Build — Home-22 OurExpertiseV3
import WhatWeBuild from './_components/WhatWeBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Build & Launch | WOW Superagency',
    description:
      'Turn your business, product or digital idea into something real — with strategy, brand, technology and launch support in one place.',
    keywords: [
      'build and launch',
      'startup launch',
      'go to market',
      'brand and website',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Build & Launch | WOW Superagency',
      description:
        'From idea to market — strategy, brand, technology and launch support designed for businesses ready to go live.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/build-and-launch`,
    },
  }
}

export default async function BuildAndLaunchPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <BuildLaunchHero />
        {/* 2. What We Build — Home-22 OurExpertiseV3 */}
        <WhatWeBuild />
        {/* 3. Solutions to Challenges — Home SolutionToChallenges */}
        <SolutionToChallenges />
        {/* 4. Launch Path — Services ServiceProces */}
        <LaunchPath />
        {/* 5. Startup Package — HeroV19 + checklist */}
        <StartupPackage />
        {/* 6. Ready to launch — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="launch?"
          ariaLabel="Start your launch with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
