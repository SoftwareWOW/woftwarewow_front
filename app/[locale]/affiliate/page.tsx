import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AffiliateBenefits from './_components/AffiliateBenefits'
import AffiliateHero from './_components/AffiliateHero'
import AffiliateJourney from './_components/AffiliateJourney'
import PartnerPaths from './_components/PartnerPaths'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'affiliate' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'CHOOSE YOUR PATH',
  title: 'Great Connections Should Be',
  italicTitle: 'Rewarded.',
  description:
    'Refer businesses to WOW, create new opportunities, and earn rewards when those introductions turn into successful projects.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Affiliate & Referral' })
}

export default async function AffiliatePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <AffiliateHero {...hero} />
        <PartnerPaths {...(sections.partnerPaths ?? {})} />
        <AffiliateJourney {...(sections.affiliateJourney ?? {})} />
        <AffiliateBenefits {...(sections.affiliateBenefits ?? {})} />
        <WowGrowthCta
          accentText="Know Someone"
          mainText="We Should Meet?"
          ariaLabel="Refer someone to WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
