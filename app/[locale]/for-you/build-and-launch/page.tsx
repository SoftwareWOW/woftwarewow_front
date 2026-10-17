
const PAGE_SLUG = 'build-and-launch' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Build & Launch',
  title: 'From idea to',
  italicTitle: 'market.',
  description:
    'Turn your business, product or digital idea into something real—with the strategy, brand, technology and launch support you need in one place.',
}

import dynamic from 'next/dynamic'
import LayoutOne from '@/components/shared/LayoutOne'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuildLaunchHero from './_components/BuildLaunchHero'
import BuildLaunchOurServices from './_components/BuildLaunchOurServices'
import type { CmsOurServicesCarouselSection } from '@/lib/strapi/mappers/page-sections'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'


const BuildAndLaunchRfq = dynamic(() => import('./_components/BuildAndLaunchRfq'))
const LaunchPath = dynamic(() => import('./_components/LaunchPath'))
const StartupPackage = dynamic(() => import('./_components/StartupPackage'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

type Props = {
  params: Promise<{ locale: string }>
}

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
  const buildLaunchOurServices = sections.buildLaunchOurServices as
    | CmsOurServicesCarouselSection
    | undefined
  const packageImageSection = sections.packageImage as { images?: { src: string; alt?: string }[] } | undefined
  const packageImage = packageImageSection?.images?.[0]

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <BuildLaunchHero {...hero} images={hero.images} backgroundImage={hero.backgroundImage} />
        <BuildLaunchOurServices
          services={buildLaunchOurServices?.services}
          title={buildLaunchOurServices?.title}
          accentTitle={buildLaunchOurServices?.accentTitle}
        />
        <BuildAndLaunchRfq {...(sections.buildAndLaunchRfq ?? {})} />
        <LaunchPath {...(sections.launchPath ?? {})} />
        <StartupPackage image={packageImage} />
        <WowGrowthCta
          accentText="Ready to"
          mainText="launch?"
          ariaLabel="Start your launch with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
