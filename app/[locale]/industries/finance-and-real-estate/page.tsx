
const PAGE_SLUG = 'finance-and-real-estate' as const

export const revalidate = 60

const DEFAULT_HERO = {
  badgeTitle: 'Finance & Real Estate',
  title: 'Build Trust. ',
  italicTitle: 'Create Opportunity.',
  description:
    'We help finance and real estate businesses strengthen their presence, attract better opportunities, and build smarter systems for sustainable growth.',
}

import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import ExclusiveTravelDeals from './_components/ExclusiveTravelDeals'
import ExperiencePillars from './_components/ExperiencePillars'
import FinanceHero from './_components/FinanceHero'
import FinanceHeroAbout from './_components/FinanceHeroAbout'
import GuestSolutions from './_components/GuestSolutions'
import LeadToCustomer from './_components/LeadToCustomer'
import SocialGallery from './_components/SocialGallery'
import TravelBlogs from './_components/TravelBlogs'
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'Finance & Real Estate' })
}

export default async function FinanceAndRealEstatePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
       <div>
         <FinanceHero {...hero} images={hero.images} />
        <FinanceHeroAbout {...(sections.financeHeroAbout ?? {})} />
       </div>
        <ExperiencePillars {...(sections.experiencePillars ?? {})} />
        <SocialGallery {...(sections.socialGallery ?? {})} />
        <GuestSolutions {...(sections.guestSolutions ?? {})} />
        <ClientJourney {...(sections.clientJourney ?? {})} />
        <LeadToCustomer {...(sections.leadToCustomer ?? {})} />
        <ExclusiveTravelDeals {...(sections.exclusiveTravelDeals ?? {})} />
        <TravelBlogs {...(sections.travelBlogs ?? {})} />
        <WowGrowthCta
          accentText="Ready to Create"
          mainText="More Opportunity?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
