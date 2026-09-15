
const PAGE_SLUG = 'build-and-launch' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Build & Launch',
  title: 'From idea to',
  italicTitle: 'market.',
  description:
    'Turn your business, product or digital idea into something real—with the strategy, brand, technology and launch support you need in one place.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 3. Build & Launch RFQ — SolutionToChallenges clone
import BuildAndLaunchRfq from './_components/BuildAndLaunchRfq'
// 1. Hero — Home-19 HeroV19
import BuildLaunchHero from './_components/BuildLaunchHero'
// 2. Our Services — Home-22 OurServices (local)
import BuildLaunchOurServices from './_components/BuildLaunchOurServices'
// 4. Launch Path — Services ServiceProces
import LaunchPath from './_components/LaunchPath'
// 5. Startup Package — HeroV19 + checklist
import StartupPackage from './_components/StartupPackage'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

type ServicesType = {
  slug: string
  content: string
  [key: string]: unknown
}

const servicesData = getMarkDownData('data/event-planner') as ServicesType[]

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Build & Launch' })
}

export default async function BuildAndLaunchPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)
  const buildAndLaunchRfqCms = cms.rfqAccordion('buildAndLaunchRfq')
  const startupPackageCms = cms.packageOffer('startupPackage')

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <BuildLaunchHero {...hero} images={hero.images} backgroundImage={hero.backgroundImage} />
        {/* 2. Our Services — Home-22 OurServices */}
        <BuildLaunchOurServices servicesData={servicesData} {...(sections.buildLaunchOurServices ?? {})} />
        {/* 3. Build & Launch RFQ — SolutionToChallenges clone */}
        <BuildAndLaunchRfq backgroundImage={buildAndLaunchRfqCms?.backgroundImage} {...(sections.buildAndLaunchRfq ?? {})} />
        {/* 4. Launch Path — Services ServiceProces */}
        <LaunchPath {...(sections.launchPath ?? {})} />
        {/* 5. Startup Package — HeroV19 + checklist */}
        <StartupPackage image={startupPackageCms?.image} backgroundImage={startupPackageCms?.backgroundImage} {...(sections.startupPackage ?? {})} />
        {/* 6. Ready to launch — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to"
          mainText="launch?"
          ariaLabel="Start your launch with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
