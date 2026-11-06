import { CONTENT, LEAD_GENERATION_PAGE_METADATA } from './_content/page-content'
import BusinessGrowthHero from './_components/BusinessGrowthHero'
import BuiltForGrowth from './_components/BuiltForGrowth'
import GrowthPieces from './_components/GrowthPieces'
import ConnectedGrowth from './_components/ConnectedGrowth'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: LEAD_GENERATION_PAGE_METADATA.title,
    description: LEAD_GENERATION_PAGE_METADATA.description,
    openGraph: {
      title: LEAD_GENERATION_PAGE_METADATA.title,
      description: LEAD_GENERATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/lead-generation`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, builtForGrowth, growthPieces, connectedGrowth, cta } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    images,
    ...heroProps
  } = hero
  const {
    ctaLabel: growthPiecesCtaLabel,
    showFooterTagline,
    ...growthPiecesProps
  } = growthPieces

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BusinessGrowthHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
      />
      <BuiltForGrowth {...builtForGrowth} />
      <GrowthPieces
        {...growthPiecesProps}
        ctaLabel={growthPiecesCtaLabel}
        showFooterTagline={showFooterTagline}
      />
      <ConnectedGrowth {...connectedGrowth} />
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
      />
    </div>
  )
}
