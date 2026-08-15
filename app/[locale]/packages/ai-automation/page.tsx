import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 1. Hero — Home-18 HeroV18
import AiAutomationHero from './_components/AiAutomationHero'
// 3. Package card — HostingThatFits / image 3
import AiPackageCard from './_components/AiPackageCard'
// 7. FAQ — Home Faq
import AutomationFaq from './_components/AutomationFaq'
// 4. Integrations — OurTools / Home-06 ClientV4
import AutomationTools from './_components/AutomationTools'
// 6. Path — ModernizationPath / LaunchPath
import FromIdeaToAutomation from './_components/FromIdeaToAutomation'
// 2. Start with the repetitive — SolutionToChallenges
import StartWithTheRepetitive from './_components/StartWithTheRepetitive'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'AI Automation Package | WOW Superagency',
    description:
      'Identify repetitive work and build AI-powered automations that save time, connect your tools and keep everyday processes moving.',
    keywords: [
      'AI automation package',
      'workflow automation',
      'process automation',
      'system integrations',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'AI Automation Package | WOW Superagency',
      description: 'Less manual work. More time for what matters — practical AI automation for growing businesses.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/ai-automation`,
    },
  }
}

export default async function AiAutomationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const dictionary = await getDictionary(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-18 HeroV18 */}
        <AiAutomationHero />
        {/* 2. Start with the repetitive — SolutionToChallenges */}
        <StartWithTheRepetitive />
        {/* 3. Package card — HostingThatFits / image 3 */}
        <AiPackageCard />
        {/* 4. Integrations — OurTools */}
        <AutomationTools />
        {/* 5. Superagency client — shared */}
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        {/* 6. Path — ModernizationPath */}
        <FromIdeaToAutomation />
        {/* 7. FAQ — Home Faq */}
        <AutomationFaq />
        {/* 8. General CTA */}
        <WowGrowthCta
          accentText="Too much manual work?"
          mainText="Let's automate it."
          ariaLabel="Start the AI Automation Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
