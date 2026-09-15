
const PAGE_SLUG = 'retail-and-ecommerce' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Retail & eCommerce',
  title: 'Turn More Browsers Into Buyers.',
  description:
    'Build better shopping experiences, reach more customers, and connect the technology, marketing, and systems behind sustainable eCommerce growth.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import CommerceJourneyPath from './_components/CommerceJourneyPath'
import CommerceSolutions from './_components/CommerceSolutions'
import DevisionOverview from './_components/DevisionOverview'
import RecommendedSolutions from './_components/RecommendedSolutions'
import RetailEcommerceHero from './_components/RetailEcommerceHero'
import RetailGrowthPillars from './_components/RetailGrowthPillars'
import RetailHeroAbout from './_components/RetailHeroAbout'
import SocialGallery from './_components/SocialGallery'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Retail & eCommerce' })
}

export default async function RetailAndEcommercePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — heading + SkewMarquee */}
      <div>
          <RetailEcommerceHero {...hero} images={hero.images} />
        <RetailHeroAbout {...(sections.retailHeroAbout ?? {})} />
      </div>
        {/* 3. ProcessV2 — four hover columns */}
        <RetailGrowthPillars {...(sections.retailGrowthPillars ?? {})} />
        {/* 4. Commerce Solutions — ProfessionalServiceSolutions / Home-23 WhyChooseUsV7 */}
        <CommerceSolutions {...(sections.commerceSolutions ?? {})} />
        {/* 5. The Commerce Journey — ClientJourney / Home-07 ProcessV4 */}
        <ClientJourney {...(sections.clientJourney ?? {})} />
        {/* 6. Gallery — SocialGallery / Home-11 InstagramGallery */}
        <SocialGallery {...(sections.socialGallery ?? {})} />
        {/* 7. IdeaToProductPath — horizontal numbered timeline */}
        <CommerceJourneyPath {...(sections.commerceJourneyPath ?? {})} />
        {/* 8. Divisions — homepage DevisionOverview copy */}
        <DevisionOverview {...(sections.devisionOverview ?? {})} />
        {/* 9. Recommended Solutions — Home-19 OurExpertiseV2 */}
        <RecommendedSolutions {...(sections.recommendedSolutions ?? {})} />
        {/* 10. Ready to Grow Your Store? */}
        <WowGrowthCta
          accentText="Ready to Grow"
          mainText="Your Store?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
