import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import Marquee from '@/components/wow/shared/Marquee'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Automation in action — Why SMBs TheGap
import AutomationInAction from './_components/AutomationInAction'
// 4. AI Capabilities — Home-13 WhyChooseUsV2
import AiCapabilities from './_components/AiCapabilities'
// 3. Gallery — Home-13 AboutHoverImages
import AiGallery from './_components/AiGallery'
// 1. Hero — Home-12 HeroV12
import AiAutomationHero from './_components/AiAutomationHero'
// 7. AI with a purpose — BuildCommunity numbered columns
import AiWithPurpose from './_components/AiWithPurpose'
// 2. Start with the work — SolutionToChallenges
import StartWithTheWork from './_components/StartWithTheWork'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'AI & Automation | WOW Superagency',
    description:
      'Automate repetitive work, improve customer experiences, and give your team smarter tools with practical AI solutions built around how your business operates.',
    keywords: [
      'AI and automation',
      'process automation',
      'AI chatbots',
      'workflow automation',
      'predictive analytics',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'AI & Automation | WOW Superagency',
      description:
        'Put AI to work in your business — practical automation, smarter workflows, and intelligent tools designed around real operations.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/ai-and-automation`,
    },
  }
}

export default async function AiAndAutomationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-12 HeroV12 */}
        <AiAutomationHero />
        {/* 2. Start with the work — SolutionToChallenges */}
        <StartWithTheWork />
        {/* 3. Gallery — Home-13 AboutHoverImages */}
        <AiGallery />
        {/* 4. AI Capabilities — Home-13 WhyChooseUsV2 */}
        <AiCapabilities />
        {/* 5. Automation in action — TheGap */}
        <AutomationInAction />
        {/* 6. Trusted logos — shared Marquee */}
        <Marquee />
        {/* 7. AI with a purpose — BuildCommunity */}
        <AiWithPurpose />
        {/* 8. Ready to automate — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="automate?"
          ariaLabel="Talk to an AI Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
