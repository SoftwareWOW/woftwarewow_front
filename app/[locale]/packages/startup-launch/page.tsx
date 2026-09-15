
const PAGE_SLUG = 'startup-launch' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Startup Launch Package',
  title: 'Everything you need to ',
  italicTitle: 'launch.',
  description:
    'Turn your idea into a launch-ready business with the essential brand, digital, marketing, and technology foundations in one package.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 2. Launch foundations — Home-16 ServicesV14
import LaunchFoundations from './_components/LaunchFoundations'
// 4. Launch journey — Home-20 ProcessV9
import LaunchJourney from './_components/LaunchJourney'
// 5. Specialist teams — Home-15 ElevateBrand
import SpecialistTeams from './_components/SpecialistTeams'
// 1. Hero — Home-19 HeroV19
import StartupLaunchHero from './_components/StartupLaunchHero'
// 3. What's included — Home-12 WhyChooseUs
import WhatsIncluded from './_components/WhatsIncluded'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Startup Launch Package' })
}

export default async function StartupLaunchPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <StartupLaunchHero {...hero} images={hero.images} />
        {/* 2. Foundations — Home-16 ServicesV14 */}
        <LaunchFoundations {...(sections.launchFoundations ?? {})} />
        {/* 3. What's Included — Home-12 WhyChooseUs */}
        <WhatsIncluded {...(sections.whatsIncluded ?? {})} />
        {/* 4. Launch Journey — Home-20 ProcessV9 */}
        <LaunchJourney {...(sections.launchJourney ?? {})} />
        {/* 5. Specialist Teams — Home-15 ElevateBrand */}
        <SpecialistTeams {...(sections.specialistTeams ?? {})} />
        {/* 6. General CTA */} 
        <WowGrowthCta
          accentText="Ready to bring your idea to"
          mainText="life?"
          ariaLabel="Start your launch with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
