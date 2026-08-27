import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AiAutomationHero from './_components/AiAutomationHero'
import BuiltForBusiness from './_components/BuiltForBusiness'
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
    title: 'AI & Automation | SoftwareWOW!',
    description:
      'Automate repetitive work, improve customer experiences, and connect smarter workflows across your business.',
    keywords: [
      'AI automation',
      'workflow automation',
      'AI assistants',
      'chatbots',
      'SoftwareWOW',
    ],
    openGraph: {
      title: 'AI & Automation | SoftwareWOW!',
      description:
        'Practical AI, workflow automation, and smarter systems built around how your business actually operates.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/softwarewow/services/ai-automation`,
    },
  }
}

export default async function AiAutomationServicePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        {/* 1. Hero — for-you/ai-and-automation/AiAutomationHero (Home-12 HeroV12) */}
        <AiAutomationHero />

        {/* 2. What We Build — homepage-18/ServicesV15 */}
        <WhatWeBuild />

        {/* 3. Built for Business — homepage-16/WhyChooseUsV5 */}
        <BuiltForBusiness />

        {/* 4. Our Process — homepage-16/ProcessV8 */}
        <OurProcess />

        {/* 5. Capabilities — homepage-17/WhyChooseUsV6 */}
        <Capabilities />

        {/* 6. Technology — about/TechStack UI, AI-focused categories (local filter) */}
        <TechStack />

        {/* 7. Selected Work — homepage-21/CaseStudyV2 overlay + Load More */}
        <SelectedWork />

        {/* 8. Ready to Automate? — shared WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="Automate?"
          ariaLabel="Start an AI and automation project with SoftwareWOW"
        />
      </div>
    </LayoutOne>
  )
}
