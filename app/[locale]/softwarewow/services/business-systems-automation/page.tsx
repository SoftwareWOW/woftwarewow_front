import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltForBusiness from './_components/BuiltForBusiness'
import BusinessSystemsAutomationHero from './_components/BusinessSystemsAutomationHero'
import Capabilities from './_components/Capabilities'
import OurProcess from './_components/OurProcess'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
import WhatWeBuild from './_components/WhatWeBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Business Systems & Automation | SoftwareWOW!',
    description:
      'Custom business systems and automated workflows that connect your operations, reduce complexity, and help your teams work smarter.',
    keywords: [
      'business systems',
      'workflow automation',
      'CRM integration',
      'business automation',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Business Systems & Automation | SoftwareWOW!',
      description:
        'Connected systems and automated workflows built around how your business actually operates.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/software/business-systems-automation`,
    },
  }
}

export default async function BusinessSystemsAutomationServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <BusinessSystemsAutomationHero />
        <WhatWeBuild />
        <BuiltForBusiness />
        <OurProcess />
        <Capabilities />
        <TechStack />
        <SelectedWork />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Work Smarter?"
          ariaLabel="Start a business systems and automation project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
