import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 7. Built to Grow — Home-16 ProcessV8
import BuiltToGrow from './_components/BuiltToGrow'
// 5. Elevate — Home-15 ElevateBrand
import ElevateSmb from './_components/ElevateSmb'
// 2. Gallery — Home-11 InstagramGallery
import SmbGallery from './_components/SmbGallery'
// 4. The Gap — Home-23 PricingV5
import TheGap from './_components/TheGap'
// 3. The Reality — Home-18 ServicesV15
import TheReality from './_components/TheReality'
// 6. Why a Superagency — Home-20 MarqueeV4
import WhySuperagency from './_components/WhySuperagency'
// 1. Hero — IndustriesHero
import WhySmbsHero from './_components/WhySmbsHero'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'about-why-smbs' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Why SMBs',
  title: 'Small businesses deserve big capabilities.',
  description:
    'We built WOW Superagency to give small and growing businesses access to the expertise, technology and growth capabilities they need to compete—without the complexity of managing multiple disconnected providers.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Why SMBs' })
}

export default async function WhySmbsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — IndustriesHero */}
        <WhySmbsHero {...hero} images={hero.images} />
        {/* 2. Gallery — Home-11 InstagramGallery */}
        <SmbGallery {...(sections.smbGallery ?? {})} />
        {/* 3. The Reality — Home-18 ServicesV15 */}
        <TheReality {...(sections.theReality ?? {})} />
        {/* 4. The Gap — Home-23 PricingV5 */}
        <TheGap {...(sections.theGap ?? {})} />
        {/* 5. Elevate — Home-15 ElevateBrand */}
        <ElevateSmb {...(sections.elevateSmb ?? {})} />
        {/* 6. Why a Superagency — Home-20 MarqueeV4 */}
        <WhySuperagency {...(sections.whySuperagency ?? {})} />
        {/* 7. Built to Grow — Home-16 ProcessV8 */}
        <BuiltToGrow {...(sections.builtToGrow ?? {})} />
        {/* 8. Ready to grow — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to grow"
          mainText="with WOW?"
          ariaLabel="Talk to an Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
