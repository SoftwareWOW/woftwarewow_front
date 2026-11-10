import {
  CONTENT,
  SALES_FUNNELS_CONVERSION_PAGE_METADATA,
} from './_content/page-content'
import BusinessGrowthHero from './_components/BusinessGrowthHero'
import BuiltForGrowth from './_components/BuiltForGrowth'
import GrowthPieces from './_components/GrowthPieces'
import ConnectedGrowth from './_components/ConnectedGrowth'
import HowItWorks from './_components/HowItWorks'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_FUNNELS_CONVERSION_PAGE_METADATA.title,
    description: SALES_FUNNELS_CONVERSION_PAGE_METADATA.description,
    openGraph: {
      title: SALES_FUNNELS_CONVERSION_PAGE_METADATA.title,
      description: SALES_FUNNELS_CONVERSION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/solutions/sales-funnels-conversion`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { cta, hero, builtForGrowth, growthPieces, connectedGrowth, howItWorks } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    images,
    ...heroProps
  } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BusinessGrowthHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <BuiltForGrowth {...builtForGrowth} />
      <GrowthPieces {...growthPieces} />
      <ConnectedGrowth {...connectedGrowth} />
      <HowItWorks {...howItWorks} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
