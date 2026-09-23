import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowWePartner from './_components/HowWePartner'
import PartnerBenefits from './_components/PartnerBenefits'
import WhiteLabelCapabilities from './_components/WhiteLabelCapabilities'
import WhiteLabelHero from './_components/WhiteLabelHero'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'whitelabel' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'White-label',
  title: 'Your Brand. Our',
  italicTitle: 'Expertise.',
  description:
    'Expand what you can offer with a trusted team behind the scenes—across technology, design, marketing, AI, and more.',
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'White-label' })
}

export default async function WhiteLabelPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <WhiteLabelHero {...hero} />
        <WhiteLabelCapabilities {...(sections.capabilities ?? {})} />
        <HowWePartner {...(sections.howWePartner ?? {})} />
        <PartnerBenefits {...(sections.partnerBenefits ?? {})} />
        <WowGrowthCta
          accentText="Ready to Deliver"
          mainText="More Together?"
          ariaLabel="Become a WOW white-label partner"
        />
      </div>
    </LayoutOne>
  )
}
