
const PAGE_SLUG = 'enterprise-infrastructure' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Enterprise Infrastructure',
  title: 'Infrastructure built for ',
  italicTitle: "what's next.",
  description:
    'Secure, reliable and scalable infrastructure designed to support your growing business.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BusinessCriticalOperations from './_components/BusinessCriticalOperations'
import ConnectedExpertise from './_components/ConnectedExpertise'
import EnterpriseInfrastructureHero from './_components/EnterpriseInfrastructureHero'
import InfrastructureJourney from './_components/InfrastructureJourney'
import WhatsIncluded from './_components/WhatsIncluded'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Enterprise Infrastructure' })
}

export default async function EnterpriseInfrastructurePackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Infrastructure Built to Scale — Home-13 HeroV13 */}
        <EnterpriseInfrastructureHero {...hero} images={hero.images} />
        {/* 2. Built for Business-Critical Operations — Home-16 WhyChooseUsV5 */}
        <BusinessCriticalOperations {...(sections.businessCriticalOperations ?? {})} />
        {/* 3. What’s Included — Home-18 ServicesV15 */}
        <WhatsIncluded {...(sections.whatsIncluded ?? {})} />
        {/* 4. Your Infrastructure Journey — Home-11 ProcessV6 */}
        <InfrastructureJourney {...(sections.infrastructureJourney ?? {})} />
        {/* 5. One Package. Connected Expertise. — Home-11 ServicesV10 */}
        <ConnectedExpertise {...(sections.connectedExpertise ?? {})} />
        {/* 6. Ready to Strengthen Your Infrastructure? */}
        <WowGrowthCta
          accentText="Build a stronger"
          mainText="foundation for growth."
          ariaLabel="Start the Enterprise Infrastructure Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
