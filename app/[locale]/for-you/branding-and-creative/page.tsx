
const PAGE_SLUG = 'branding-and-creative' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Branding & Creative',
  title: 'Build a brand people',
  italicTitle: 'remember.',
  description:
    'Turn what makes your business different into a clear, distinctive brand—with the strategy, identity and creative assets to show up consistently.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 3. Brand Capabilities — Home-12 WhyChooseUs
import BrandCapabilities from './_components/BrandCapabilities'
// 1. Hero — Home-04 HeroV11
import BrandingCreativeHero from './_components/BrandingCreativeHero'
// 6. Brand Visibility — SalesVisibility / BrandingProcess
import BrandVisibility from './_components/BrandVisibility'
// 4. Built to Be Used — 6-card grid
import BuiltToBeUsed from './_components/BuiltToBeUsed'
// 2. Our Capabilities — Home-16 ServicesV14
import OurCapabilities from './_components/OurCapabilities'
// 5. Our Tools — Home-06 ClientV4 pattern
import OurTools from './_components/OurTools'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Branding & Creative' })
}

export default async function BrandingAndCreativePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-04 HeroV11 */}
        <BrandingCreativeHero {...hero} images={hero.images} />
        {/* 2. Our Capabilities — Home-16 ServicesV14 */}
        <OurCapabilities {...(sections.ourCapabilities ?? {})} />
        {/* 3. Brand Capabilities — Home-12 WhyChooseUs */}
        <BrandCapabilities {...(sections.brandCapabilities ?? {})} />
        {/* 4. Built to Be Used — 6-card grid */}
        <BuiltToBeUsed {...(sections.builtToBeUsed ?? {})} />
        {/* 5. Our Tools — Home-06 ClientV4 */}
        <OurTools {...(sections.ourTools ?? {})} />
        {/* 6. Brand Visibility — SalesVisibility */}
        <BrandVisibility {...(sections.brandVisibility ?? {})} />
        {/* 7. Ready to brand — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to build your"
          mainText="brand?"
          ariaLabel="Talk to a Branding Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
