import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 3. Built for the Fit — Why SMBs TheGap
import BuiltForTheFit from './_components/BuiltForTheFit'
// 5. Our Approach — Home-25 WhyChooseUsV8
import OurApproach from './_components/OurApproach'
// 1. Hero — Home-12 HeroV12
import SoftwareTechHero from './_components/SoftwareTechHero'
// 4. Path — Build & Launch LaunchPath
import TechLaunchPath from './_components/TechLaunchPath'
// 2. What We Build — Home-16 ServicesV14
import WhatWeBuild from './_components/WhatWeBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Software & Technology | WOW Superagency',
    description:
      'Build what you need and integrate what already works — custom software, apps, SaaS, modernization, and automation designed around your business.',
    keywords: [
      'software and technology',
      'custom software',
      'SaaS',
      'system modernization',
      'integrations',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Software & Technology | WOW Superagency',
      description:
        'From business tools to digital products — custom development, integrations, automation and modernization that fit how you work.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/software-and-technology`,
    },
  }
}

export default async function SoftwareAndTechnologyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-12 HeroV12 */}
        <SoftwareTechHero />
        {/* 2. What We Build — Home-16 ServicesV14 */}
        <WhatWeBuild />
        {/* 3. Built for the Fit — Why SMBs TheGap */}
        <BuiltForTheFit />
        {/* 4. Path — Build & Launch LaunchPath */}
        <TechLaunchPath />
        {/* 5. Our Approach — Home-25 WhyChooseUsV8 */}
        <OurApproach />
        {/* 6. Ready to build — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="build?"
          ariaLabel="Talk to a Technology Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
