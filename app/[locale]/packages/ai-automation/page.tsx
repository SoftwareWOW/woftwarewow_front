
const PAGE_SLUG = 'ai-automation' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'AI Automation Package',
  title: 'Less manual work.',
  italicTitle: 'More impact.',
  description:
    'Less manual work. More time for what matters — practical AI automation for growing businesses.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 1. Hero — Home-18 HeroV18
import AiAutomationHero from './_components/AiAutomationHero'
// 3. Package card — HostingThatFits / image 3
// 7. FAQ — Home Faq
// 4. Integrations — OurTools / Home-06 ClientV4
// 6. Path — ModernizationPath / LaunchPath
// 2. Start with the repetitive — SolutionToChallenges
import StartWithTheRepetitive from './_components/StartWithTheRepetitive'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import {
  mapStrapiTestimonialExtras,
  mapStrapiTestimonials,
} from '@/lib/strapi/mappers/superagency'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'



import AiPackageCard from './_components/AiPackageCard'
import AutomationTools from './_components/AutomationTools'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import FromIdeaToAutomation from './_components/FromIdeaToAutomation'
import AutomationFaq from './_components/AutomationFaq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
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

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const homepageCms = await getSuperagencyHomepage(typedLocale)
  const packageCms = await loadSuperagencyPage(PAGE_SLUG, typedLocale)

  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, packageCms.hero)
  const sections = resolvePageSections(packageCms, PAGE_SLUG)

  const superAgencyClient = mapStrapiTestimonials(
    homepageCms.testimonials,
    dictionary.superAgencyClient,
  )
  const testimonialExtras = mapStrapiTestimonialExtras(homepageCms.testimonials)

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
        {/* 5. Superagency client — same as app/[locale]/page.tsx */}
        <WowSuperAgencyClient
          superAgencyClient={superAgencyClient}
          clientImages={
            Object.keys(testimonialExtras.clientImages).length
              ? testimonialExtras.clientImages
              : undefined
          }
          reviewCaseStudies={
            Object.keys(testimonialExtras.reviewCaseStudies).length
              ? testimonialExtras.reviewCaseStudies
              : undefined
          }
        />
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
