import {
  CONTENT,
  ECOMMERCE_SALES_GROWTH_PAGE_METADATA,
} from './_content/page-content'
import RetailEcommerceHero from './_components/RetailEcommerceHero'
import RetailGrowthPillars from './_components/RetailGrowthPillars'
import CommerceSolutions from './_components/CommerceSolutions'
import CommerceJourneyPath from './_components/CommerceJourneyPath'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: ECOMMERCE_SALES_GROWTH_PAGE_METADATA.title,
    description: ECOMMERCE_SALES_GROWTH_PAGE_METADATA.description,
    openGraph: {
      title: ECOMMERCE_SALES_GROWTH_PAGE_METADATA.title,
      description: ECOMMERCE_SALES_GROWTH_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/ecommerce-sales-growth`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, hero, commerceSolutions, commerceJourneyPath, ...sections } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    images,
    marqueeImages,
    ...heroProps
  } = hero
  const { ctaLabel: solutionsCtaLabel, ...commerceSolutionsProps } = commerceSolutions
  const { ctaLabel: journeyCtaLabel, ...journeyPathProps } = commerceJourneyPath

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <RetailEcommerceHero
        {...heroProps}
        images={images}
        marqueeImages={marqueeImages}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <RetailGrowthPillars {...sections.retailGrowthPillars} />
      <CommerceSolutions {...commerceSolutionsProps} ctaLabel={solutionsCtaLabel} />
      <CommerceJourneyPath {...journeyPathProps} ctaLabel={journeyCtaLabel} />
      <RecommendedSolutions {...sections.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
