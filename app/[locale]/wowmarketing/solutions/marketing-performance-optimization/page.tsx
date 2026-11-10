import {
  CONTENT,
  MARKETING_PERFORMANCE_PAGE_METADATA,
} from './_content/page-content'
import WebsiteGrowthHero from './_components/WebsiteGrowthHero'
import BuiltToPerform from './_components/BuiltToPerform'
import WebsiteJourney from './_components/WebsiteJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: MARKETING_PERFORMANCE_PAGE_METADATA.title,
    description: MARKETING_PERFORMANCE_PAGE_METADATA.description,
    openGraph: {
      title: MARKETING_PERFORMANCE_PAGE_METADATA.title,
      description: MARKETING_PERFORMANCE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/marketing-performance-optimization`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { cta, hero, builtToPerform, websiteJourney, specialistExpertise } = CONTENT
  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    ...heroProps
  } = hero
  const { ctaLabel: performCtaLabel, ...builtToPerformProps } = builtToPerform
  const { ctaLabel: journeyCtaLabel, ...journeyProps } = websiteJourney

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <WebsiteGrowthHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <BuiltToPerform {...builtToPerformProps} ctaLabel={performCtaLabel} />
      <WebsiteJourney {...journeyProps} ctaLabel={journeyCtaLabel} />
      <SpecialistExpertise {...specialistExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
