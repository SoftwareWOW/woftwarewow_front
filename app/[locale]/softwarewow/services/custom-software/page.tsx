import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Capabilities from './_components/Capabilities'
import CustomSoftwareHero from './_components/CustomSoftwareHero'
import OurProcess from './_components/OurProcess'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
import WhatWeBuild from './_components/WhatWeBuild'
import WhyCustomSoftware from './_components/WhyCustomSoftware'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Custom Software Development | SoftwareWOW!',
    description:
      'We design and develop custom software that fits your workflows, solves real problems, and grows with your business.',
    keywords: [
      'custom software development',
      'business systems',
      'internal tools',
      'legacy modernization',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Custom Software Development | SoftwareWOW!',
      description:
        'We design and develop custom software that fits your workflows, solves real problems, and grows with your business.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/custom-software`,
    },
  }
}

export default async function CustomSoftwareServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-15/HeroV15 */}
        <CustomSoftwareHero />

        {/* 2. What We Build — homepage-15/WhyChooseUsV4 */}
        <WhatWeBuild />

        {/* 3. Why Custom Software — homepage-13/WhyChooseUsV2 */}
        <WhyCustomSoftware />

        {/* 4. Our Process — homepage-02/ProcessV2 */}
        <OurProcess />

        {/* 5. Capabilities — homepage-12/ServicesV11 */}
        <Capabilities />

        {/* 6. Technology — about/TechStack UI, custom-software categories (local filter) */}
        <TechStack />

        {/* 7. Selected Work — homepage-15/OurWorkV2 + Load More */}
        <SelectedWork />

        {/* 8. Ready to Build? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Build?"
          ariaLabel="Start a custom software project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
