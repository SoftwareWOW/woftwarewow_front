import {
  CONTENT,
  LEAD_GENERATION_OUTBOUND_PAGE_METADATA,
} from './_content/page-content'
import SalesAccelerationHero from './_components/SalesAccelerationHero'
import SalesGaps from './_components/SalesGaps'
import WhatsIncluded from './_components/WhatsIncluded'
import ConnectedExpertise from './_components/ConnectedExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: LEAD_GENERATION_OUTBOUND_PAGE_METADATA.title,
    description: LEAD_GENERATION_OUTBOUND_PAGE_METADATA.description,
    openGraph: {
      title: LEAD_GENERATION_OUTBOUND_PAGE_METADATA.title,
      description: LEAD_GENERATION_OUTBOUND_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/solutions/lead-generation-outbound`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, hero, ...sections } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    ...heroProps
  } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesAccelerationHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <SalesGaps {...sections.salesGaps} />
      <WhatsIncluded {...sections.whatsIncluded} />
      <ConnectedExpertise {...sections.connectedExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
