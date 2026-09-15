
const PAGE_SLUG = 'social-and-community' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Social & Community',
  title: 'Turn your audience into a community.',
  description:
    'Strategy, content, paid social and community management — connected so attention turns into lasting relationships.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Build Community — SoftwareWOW WoWProces
import BuildCommunity from './_components/BuildCommunity'
// 4. Platform Presence — Home-14 / WowProcess tab pattern
import PlatformPresence from './_components/PlatformPresence'
// 3. Social Capabilities — Home-13 ServicesV12
import SocialCapabilities from './_components/SocialCapabilities'
// 1. Hero — Home-24 HeroV24
import SocialCommunityHero from './_components/SocialCommunityHero'
// 6. Gallery — Home-11 InstagramGallery
import SocialGallery from './_components/SocialGallery'
// 2. Process — Home-07 ProcessV4
import SocialProcess from './_components/SocialProcess'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Social & Community' })
}

export default async function SocialAndCommunityPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-24 HeroV24 */}
        <SocialCommunityHero {...hero} images={hero.images} />
        {/* 2. Process — Home-07 ProcessV4 */}
        <SocialProcess {...(sections.socialProcess ?? {})} />
        {/* 3. Social Capabilities — Home-13 ServicesV12 */}
        <SocialCapabilities {...(sections.socialCapabilities ?? {})} />
        {/* 4. Platform Presence — interactive platforms */}
        <PlatformPresence {...(sections.platformPresence ?? {})} />
        {/* 5. Build Community — SoftwareWOW WoWProces */}
        <BuildCommunity {...(sections.buildCommunity ?? {})} />
        {/* 6. Gallery — Home-11 InstagramGallery */}
        <SocialGallery {...(sections.socialGallery ?? {})} />
        {/* 7. Ready to grow community — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to grow your"
          mainText="community?"
          ariaLabel="Talk to a Social Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
