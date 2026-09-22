import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowItWorks from './_components/HowItWorks'
import QuotationForm from './_components/QuotationForm'
import QuotationHero from './_components/QuotationHero'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'
import {
  buildSuperagencyPageMetadata,
  loadSuperagencyPage, resolvePageSections,
} from '@/lib/strapi/superagency-page-loader'

const PAGE_SLUG = 'quotation' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'REQUEST A QUOTE',
  title: "Tell Us What You're Building.",
  description:
    "Share a few details about your project and we'll help define the right scope, team, and next steps.",
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Request a Quote' })
}

export default async function QuotationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <QuotationHero {...hero} />
        <QuotationForm {...(sections.requestDetails ?? {})} />
        <HowItWorks />
        <WowGrowthCta
          accentText="Having an idea?"
          mainText="Let's get it launched"
          ariaLabel="Contact WOW Superagency — let's get your idea launched"
        />
      </div>
    </LayoutOne>
  )
}
