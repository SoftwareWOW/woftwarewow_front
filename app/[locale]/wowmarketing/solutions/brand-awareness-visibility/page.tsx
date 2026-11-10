import {
  BRAND_AWARENESS_PAGE_METADATA,
  CONTENT,
} from './_content/page-content'
import BrandingCreativeHero from './_components/BrandingCreativeHero'
import OurCapabilities from './_components/OurCapabilities'
import BrandCapabilities from './_components/BrandCapabilities'
import BrandVisibility from './_components/BrandVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: BRAND_AWARENESS_PAGE_METADATA.title,
    description: BRAND_AWARENESS_PAGE_METADATA.description,
    openGraph: {
      title: BRAND_AWARENESS_PAGE_METADATA.title,
      description: BRAND_AWARENESS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/brand-awareness-visibility`,
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
      <BrandingCreativeHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <OurCapabilities {...sections.ourCapabilities} />
      <BrandCapabilities {...sections.brandCapabilities} />
      <BrandVisibility {...sections.brandVisibility} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
