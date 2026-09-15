
const PAGE_SLUG = 'digital-transformation' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Digital Transformation Package',
  title: 'Modernize how your business works.',
  description:
    'We identify where technology can make the biggest difference, then bring the right improvements together into one coordinated transformation.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. Before / After — AutomationInAction
import BeforeAfterGap from './_components/BeforeAfterGap'
// 1. Hero — BrandingCreativeHero / Home-04 HeroV11
import DigitalTransformationHero from './_components/DigitalTransformationHero'
// 6. Path — LaunchPath / ServiceProces
import ModernizationPath from './_components/ModernizationPath'
// 5. Priorities — SpecialistTeams / Home-15 ElevateBrand
import TransformationPriorities from './_components/TransformationPriorities'
// 3. Transformation Plan — RevenueCapabilities / Home-24 ServicesV16
import TransformationPlan from './_components/TransformationPlan'
// 2. The Gap — LearnYourWay / HostingThatFits
import TheGap from './_components/TheGap'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Digital Transformation Package' })
}

export default async function DigitalTransformationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — BrandingCreativeHero / Home-04 HeroV11 */}
        <DigitalTransformationHero {...hero} images={hero.images} />
        {/* 2. The Gap — LearnYourWay / HostingThatFits */}
        <TheGap {...(sections.theGap ?? {})} />
        {/* 3. Transformation Plan — RevenueCapabilities / Home-24 ServicesV16 */}
        <TransformationPlan {...(sections.transformationPlan ?? {})} />
        {/* 4. Before / After — AutomationInAction */}
        <BeforeAfterGap {...(sections.beforeAfterGap ?? {})} />
        {/* 5. Priorities — SpecialistTeams / Home-15 ElevateBrand */}
        <TransformationPriorities {...(sections.transformationPriorities ?? {})} />
        {/* 6. Path — LaunchPath / ServiceProces */}
        <ModernizationPath {...(sections.modernizationPath ?? {})} />
        {/* 7. General CTA */}
        <WowGrowthCta
          accentText="Outgrown the old way?"
          mainText="Let's transform it."
          ariaLabel="Start the Digital Transformation Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
