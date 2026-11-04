import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltForSaasGrowth from './_components/BuiltForSaasGrowth'
import Capabilities from './_components/Capabilities'
import OurProcess from './_components/OurProcess'
import SaasDevelopmentHero from './_components/SaasDevelopmentHero'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
import WhatWeBuild from './_components/WhatWeBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Software Support & Improvement | SoftwareWOW!',
    description:
      "Maintain, optimize, and improve the applications your business relies on—keeping them reliable, secure, and ready for what's next.",
    keywords: [
      'software support',
      'software maintenance',
      'application improvement',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Software Support & Improvement | SoftwareWOW!',
      description:
        'Ongoing software support and meaningful improvement so your applications stay dependable as your business evolves.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/services/software-support-improvement`,
    },
  }
}

export default async function SoftwareSupportImprovementServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <SaasDevelopmentHero />
        <WhatWeBuild />
        <BuiltForSaasGrowth />
        <OurProcess />
        <Capabilities />
        <TechStack />
        <SelectedWork />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Improve Your Software?"
          ariaLabel="Start a software support and improvement engagement with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
