import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltForYourBusiness from './_components/BuiltForYourBusiness'
import Capabilities from './_components/Capabilities'
import OurProcess from './_components/OurProcess'
import SelectedWork from './_components/SelectedWork'
import WebApplicationsHero from './_components/WebApplicationsHero'
import WhatWeBuild from './_components/WhatWeBuild'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Web Application Development | SoftwareWOW!',
    description:
      'We design and develop secure, scalable web applications that simplify operations, serve customers, and support growth.',
    keywords: [
      'web application development',
      'custom web apps',
      'business platforms',
      'customer portals',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Web Application Development | SoftwareWOW!',
      description:
        'Secure, scalable web applications built around your business — portals, dashboards, platforms, and internal tools.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/web-applications`,
    },
  }
}

export default async function WebApplicationsServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      {/* 1. Hero — Home-18 HeroV18 / AiAutomationHero */}
      <WebApplicationsHero />
      {/* 2. What We Build — Home-16 ServicesV14 */}
      <WhatWeBuild />
      {/* 3. Built for Your Business — Home-25 WhyChooseUsV8 / OurApproach */}
      <BuiltForYourBusiness />
      {/* 4. Our Process — TechLaunchPath */}
      <OurProcess />
      {/* 5. Capabilities — BuiltToPerform + ClientV4 */}
      <Capabilities />
      {/* 6. Selected Work — FeaturedWork */}
      <SelectedWork />
      {/* 7. Global CTA */}
      <div className="mb-3">
        <WowGrowthCta
          accentText="Ready to"
          mainText="Build?"
          ariaLabel="Start a web application project with SoftwareWOW"
        />
      </div>
    </div>
  )
}
