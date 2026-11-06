import {
  ANALYTICS_REPORTING_PAGE_METADATA,
  CONTENT,
} from './_content/page-content'
import DigitalTransformationHero from './_components/DigitalTransformationHero'
import TheGap from './_components/TheGap'
import TransformationPlan from './_components/TransformationPlan'
import BeforeAfterGap from './_components/BeforeAfterGap'
import TransformationPriorities from './_components/TransformationPriorities'
import ModernizationPath from './_components/ModernizationPath'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: ANALYTICS_REPORTING_PAGE_METADATA.title,
    description: ANALYTICS_REPORTING_PAGE_METADATA.description,
    openGraph: {
      title: ANALYTICS_REPORTING_PAGE_METADATA.title,
      description: ANALYTICS_REPORTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/analytics-reporting`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { hero, theGap, transformationPlan, beforeAfterGap, transformationPriorities, modernizationPath, cta } =
    CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    images,
    ...heroProps
  } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <DigitalTransformationHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
      />
      <TheGap {...theGap} />
      <TransformationPlan {...transformationPlan} />
      <BeforeAfterGap {...beforeAfterGap} />
      <TransformationPriorities {...transformationPriorities} />
      <ModernizationPath {...modernizationPath} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
