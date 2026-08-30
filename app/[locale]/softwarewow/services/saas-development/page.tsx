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
    title: 'SaaS Development | SoftwareWOW!',
    description:
      'From first release to growing platform, we design and develop SaaS products built for users, performance, and long-term growth.',
    keywords: [
      'SaaS development',
      'multi-tenant platforms',
      'subscription platforms',
      'B2B SaaS',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'SaaS Development | SoftwareWOW!',
      description:
        'From first release to growing platform, we design and develop SaaS products built for users, performance, and long-term growth.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/saas-development`,
    },
  }
}

export default async function SaasDevelopmentServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-06/HeroV6 + AnimatedHeroImage */}
        <SaasDevelopmentHero />

        {/* 2. What We Build — homepage-14/WhyChooseUsV3 */}
        <WhatWeBuild />

        {/* 3. Built for SaaS Growth — homepage-08/Solution */}
        <BuiltForSaasGrowth />

        {/* 4. Our Process — homepage-15/BrandingProcess */}
        <OurProcess />

        {/* 5. Capabilities — homepage-18/OurExpertise */}
        <Capabilities />

        {/* 6. Technology — about/TechStack UI, SaaS-focused categories (local filter) */}
        <TechStack />

        {/* 7. Selected Work — homepage-14/OurWorkShowcase + Load More */}
        <SelectedWork />

        {/* 8. Ready to Build Your SaaS? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Build Your SaaS?"
          ariaLabel="Start a SaaS development project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
