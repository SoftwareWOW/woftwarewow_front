import { CONTENT } from './_content/page-content'
import SalesRevenueHero from './_components/SalesRevenueHero'
import SalesJourneyGap from './_components/SalesJourneyGap'
import RevenueCapabilities from './_components/RevenueCapabilities'
import LeadToCustomer from './_components/LeadToCustomer'
import SalesVisibility from './_components/SalesVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'pay-per-click-advertising', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesRevenueHero {...CONTENT.hero} />
      <SalesJourneyGap {...CONTENT.salesJourneyGap} />
      <RevenueCapabilities {...CONTENT.revenueCapabilities} />
      <LeadToCustomer {...CONTENT.leadToCustomer} />
      <SalesVisibility {...CONTENT.salesVisibility} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
