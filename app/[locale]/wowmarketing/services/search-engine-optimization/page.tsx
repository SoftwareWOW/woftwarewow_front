import { CONTENT, SEO_PAGE_METADATA } from './_content/page-content'
import MarketingGrowthHero from './_components/MarketingGrowthHero'
import GrowthChallenges from './_components/GrowthChallenges'
import EverythingToGrow from './_components/EverythingToGrow'
import ConnectedGrowthSystem from './_components/ConnectedGrowthSystem'
import BuiltAroundGoals from './_components/BuiltAroundGoals'
import SpecialistTeams from './_components/SpecialistTeams'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SEO_PAGE_METADATA.title,
    description: SEO_PAGE_METADATA.description,
    openGraph: {
      title: SEO_PAGE_METADATA.title,
      description: SEO_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/search-engine-optimization`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, growthChallenges, everythingToGrow, connectedGrowthSystem, builtAroundGoals, specialistTeams, cta } =
    CONTENT

  const {
    primaryCta,
    secondaryCta,
    showTrustAvatars,
    ...heroProps
  } = hero

  const {
    frameworkStages,
    footerTagline,
    ctaLabel: frameworkCtaLabel,
    ...frameworkHeader
  } = connectedGrowthSystem

  const { variant, featureImage, ...specialistTeamsProps } = specialistTeams

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <MarketingGrowthHero
        {...heroProps}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        showTrustAvatars={showTrustAvatars}
      />
      <GrowthChallenges {...growthChallenges} />
      <EverythingToGrow {...everythingToGrow} />
      <ConnectedGrowthSystem
        {...frameworkHeader}
        frameworkStages={frameworkStages}
        footerTagline={footerTagline}
        ctaLabel={frameworkCtaLabel}
      />
      <BuiltAroundGoals {...builtAroundGoals} />
      <SpecialistTeams variant={variant} featureImage={featureImage} {...specialistTeamsProps} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
