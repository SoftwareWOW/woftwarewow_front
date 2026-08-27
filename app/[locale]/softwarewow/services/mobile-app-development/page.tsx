import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltForMobile from './_components/BuiltForMobile'
import Capabilities from './_components/Capabilities'
import MobileAppHero from './_components/MobileAppHero'
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
    title: 'Mobile App Development | SoftwareWOW!',
    description:
      'We design and develop intuitive, scalable mobile apps that connect your business with customers wherever they are.',
    keywords: [
      'mobile app development',
      'iOS apps',
      'Android apps',
      'cross-platform apps',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Mobile App Development | SoftwareWOW!',
      description:
        'Intuitive, scalable mobile experiences built for iOS, Android, and cross-platform products.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/mobile-app-development`,
    },
  }
}

export default async function MobileAppDevelopmentServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — packages/saas-product-development/SaasProductHero (Home-24 HeroV24) */}
        <MobileAppHero />

        {/* 2. What We Build — for-you/ai-and-automation/AiCapabilities (Home-13 ServicesV12) */}
        <WhatWeBuild />

        {/* 3. Built for Mobile — packages/saas-product-development/FocusFirstRelease (Home-19 ElevateBrandV2) */}
        <BuiltForMobile />

        {/* 4. Our Process — for-you/social-and-community/SocialProcess (Home-07 ProcessV4) */}
        <OurProcess />

        {/* 5. Capabilities — for-you/branding-and-creative/BrandCapabilities (Home-12 WhyChooseUs) */}
        <Capabilities />

        {/* 6. Technology — about/TechStack UI, mobile-only categories (local) */}
        <TechStack />

        {/* 7. Selected Work — softwarewow/SoftwareWoWProjectsClient overlay + Load More */}
        <SelectedWork />

        {/* 8. Ready to Build? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Build?"
          ariaLabel="Start a mobile app project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
