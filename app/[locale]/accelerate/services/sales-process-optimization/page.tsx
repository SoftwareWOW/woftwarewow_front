import { CONTENT, SALES_PROCESS_OPTIMIZATION_PAGE_METADATA } from './_content/page-content'
import SalesRevenueHero from './_components/SalesRevenueHero'
import SalesJourneyGap from './_components/SalesJourneyGap'
import RevenueCapabilities from './_components/RevenueCapabilities'
import LeadToCustomer from './_components/LeadToCustomer'
import SalesVisibility from './_components/SalesVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_PROCESS_OPTIMIZATION_PAGE_METADATA.title,
    description: SALES_PROCESS_OPTIMIZATION_PAGE_METADATA.description,
    openGraph: {
      title: SALES_PROCESS_OPTIMIZATION_PAGE_METADATA.title,
      description: SALES_PROCESS_OPTIMIZATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/services/sales-process-optimization`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, salesJourneyGap, revenueCapabilities, leadToCustomer, salesVisibility, cta } = CONTENT

  const { primaryCta, secondaryCta, enableVideoModal, ...heroProps } = hero
  const { capabilityCards, ...capabilitiesHeader } = revenueCapabilities
  const { processSteps, accentTitle, ctaLabel: journeyCtaLabel, ...journeyHeader } = leadToCustomer
  const { steps: visibilitySteps, ctaLabel: visibilityCtaLabel, ...visibilityHeader } = salesVisibility

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesRevenueHero
        {...heroProps}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        enableVideoModal={enableVideoModal}
      />
      <SalesJourneyGap {...salesJourneyGap} />
      <RevenueCapabilities {...capabilitiesHeader} capabilityCards={capabilityCards} />
      <LeadToCustomer
        {...journeyHeader}
        accentTitle={accentTitle}
        processSteps={processSteps}
        ctaLabel={journeyCtaLabel}
      />
      <SalesVisibility {...visibilityHeader} steps={visibilitySteps} ctaLabel={visibilityCtaLabel} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
