
const PAGE_SLUG = 'ai-automation' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Less manual work. More time for what ',
  italicTitle: 'matters.',
  description:
    'We identify repetitive work across your business and build AI-powered automations that save time, connect your tools and keep everyday processes moving.',
}

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
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'AI Automation Package' })
}

export default async function AiAutomationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const dictionary = await getDictionary(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-18 HeroV18 */}
        <AiAutomationHero {...hero} images={hero.images} />
        {/* 2. Start with the repetitive — SolutionToChallenges */}
        <StartWithTheRepetitive {...(sections.startWithTheRepetitive ?? {})} />
        {/* 3. Package card — HostingThatFits / image 3 */}
        <AiPackageCard {...(sections.aiPackageCard ?? {})} />
        {/* 4. Integrations — OurTools */}
        <AutomationTools {...(sections.automationTools ?? {})} />
        {/* 5. Superagency client — shared */}
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        {/* 6. Path — ModernizationPath */}
        <FromIdeaToAutomation {...(sections.fromIdeaToAutomation ?? {})} />
        {/* 7. FAQ — Home Faq */}
        <AutomationFaq {...(sections.automationFaq ?? {})} />
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
