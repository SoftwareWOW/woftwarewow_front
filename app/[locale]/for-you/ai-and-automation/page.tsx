
const PAGE_SLUG = 'ai-and-automation' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'AI & Automation',
  title: 'Put AI to work in your business.',
  description:
    'Automate repetitive work, improve customer experiences and give your team smarter tools with practical AI solutions built around how your business actually operates.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'

import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Automation in action — Why SMBs TheGap
import AutomationInAction from './_components/AutomationInAction'
// 4. AI Capabilities — Home-13 ServicesV12
import AiCapabilities from './_components/AiCapabilities'
// 3. Gallery — Home-13 AboutHoverImages
import AiGallery from './_components/AiGallery'
// 1. Hero — Home-12 HeroV12
import AiAutomationHero from './_components/AiAutomationHero'
// 7. AI with a purpose — BuildCommunity numbered columns
import AiWithPurpose from './_components/AiWithPurpose'
// 2. Start with the work — SolutionToChallenges
import StartWithTheWork from './_components/StartWithTheWork'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'AI & Automation' })
}

export default async function AiAndAutomationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-12 HeroV12 */}
        <AiAutomationHero {...hero} images={hero.images} />
        {/* 2. Start with the work — SolutionToChallenges */}
        <StartWithTheWork {...(sections.startWithTheWork ?? {})} />
        {/* 3. Gallery — Home-13 AboutHoverImages */}
        <AiGallery {...(sections.aiGallery ?? {})} />
        {/* 4. AI Capabilities — Home-13 ServicesV12 */}
        <AiCapabilities {...(sections.aiCapabilities ?? {})} />
        {/* 5. Automation in action — TheGap */}
        <AutomationInAction {...(sections.automationInAction ?? {})} />
        {/* 6. Trusted logos — shared Marquee */}
         <Marquee />
        {/* 7. AI with a purpose — BuildCommunity */}
        <AiWithPurpose {...(sections.aiWithPurpose ?? {})} />
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
