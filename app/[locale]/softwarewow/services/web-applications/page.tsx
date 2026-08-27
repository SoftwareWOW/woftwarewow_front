import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltForYourBusiness from './_components/BuiltForYourBusiness'
import Capabilities from './_components/Capabilities'
import OurProcess from './_components/OurProcess'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
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
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — packages/ai-automation/AiAutomationHero (Home-18 HeroV18) — commit fb75787 */}
        <WebApplicationsHero />

        {/* 2. What We Build — for-you/software-and-technology/WhatWeBuild (Home-16 ServicesV14) — commit b5ae9d5 */}
        <WhatWeBuild />

        {/* 3. Built for Your Business — for-you/software-and-technology/OurApproach (Home-25 WhyChooseUsV8) — commit b5ae9d5 */}
        <BuiltForYourBusiness />

        {/* 4. Our Process — for-you/software-and-technology/TechLaunchPath (LaunchPath) — commit b5ae9d5 */}
        <OurProcess />

        {/* 5. Capabilities — packages/website-growth-engine/BuiltToPerform (Home-24) — commit b406900 */}
        <Capabilities />

        {/* 6. Technology — about/TechStack layout, software-only categories (local) */}
        <TechStack />

        {/* 7. Selected Work — portfolio/FeaturedWork + Load More — commits 9739ed3, f663f92 */}
        <SelectedWork />

        {/* 8. Ready to Build? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Build?"
          ariaLabel="Start a web application project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
