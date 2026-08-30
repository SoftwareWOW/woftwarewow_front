import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Capabilities from './_components/Capabilities'
import ModernizationHero from './_components/ModernizationHero'
import OurProcess from './_components/OurProcess'
import SelectedWork from './_components/SelectedWork'
import TechStack from './_components/TechStack'
import WhatWeDo from './_components/WhatWeDo'
import WhyModernize from './_components/WhyModernize'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Modernization & Integrations | SoftwareWOW!',
    description:
      'Upgrade legacy software, connect disconnected systems, and create a technology foundation that’s easier to maintain, integrate, and evolve.',
    keywords: [
      'legacy modernization',
      'system integrations',
      'API development',
      'cloud modernization',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'Modernization & Integrations | SoftwareWOW!',
      description:
        'Upgrade legacy software, connect disconnected systems, and create a technology foundation that’s easier to maintain, integrate, and evolve.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/modernization-integrations`,
    },
  }
}

export default async function ModernizationIntegrationsServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — homepage-19/HeroV19 */}
        <ModernizationHero />

        {/* 2. What We Do — homepage-04/ServicesV5 */}
        <WhatWeDo />

        {/* 3. Why Modernize — homepage-14/AwardWinningWork */}
        <WhyModernize />

        {/* 4. Our Process — homepage-19/ProcessV10 */}
        <OurProcess />

        {/* 5. Capabilities — homepage-03/ServicesV3 */}
        <Capabilities />

        {/* 6. Technology — about/TechStack UI, integration categories (local filter) */}
        <TechStack />

        {/* 7. Selected Work — homepage-24/ProjectCaseStudies + Load More */}
        <SelectedWork />

        {/* 8. Ready to Modernize? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Modernize?"
          ariaLabel="Start a modernization or integration project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
