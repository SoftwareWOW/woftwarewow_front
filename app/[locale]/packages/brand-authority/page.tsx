
const PAGE_SLUG = 'brand-authority' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Brand Authority Package',
  title: 'Turn expertise into',
  italicTitle: 'authority.',
  description:
    'Build a credible, recognizable brand that strengthens trust, visibility, and influence.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AuthorityFoundation from './_components/AuthorityFoundation'
import AuthorityJourney from './_components/AuthorityJourney'
import BrandAuthorityHero from './_components/BrandAuthorityHero'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WhatsIncluded from './_components/WhatsIncluded'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Brand Authority Package' })
}

export default async function BrandAuthorityPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Build a Brand People Trust — Home-19 HeroV19 */}
        <BrandAuthorityHero {...hero} images={hero.images} />
        {/* 2. Build Your Authority Foundation — Home-16 ServicesV14 */}
        <AuthorityFoundation {...(sections.authorityFoundation ?? {})} />
        {/* 3. What’s Included — Home-12 WhyChooseUs */}
        <WhatsIncluded {...(sections.whatsIncluded ?? {})} />
        {/* 4. Your Authority Journey — Home-20 ProcessV9 */}
        <AuthorityJourney {...(sections.authorityJourney ?? {})} />
        {/* 5. One Package. Specialist Expertise. — Home-15 ElevateBrand */}
        <SpecialistExpertise {...(sections.specialistExpertise ?? {})} />
        {/* 6. Ready to Build Your Authority? */}
        <WowGrowthCta
          accentText="Make your expertise"
          mainText="impossible to overlook."
          ariaLabel="Start the Brand Authority Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
