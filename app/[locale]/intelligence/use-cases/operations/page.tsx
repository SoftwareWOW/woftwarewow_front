import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import OperationsUseCaseApproachSection from './_components/OperationsUseCaseApproachSection'
import OperationsUseCaseAdvantageSection from './_components/OperationsUseCaseAdvantageSection'
import OperationsUseCaseChallengeSection from './_components/OperationsUseCaseChallengeSection'
import OperationsUseCaseHero from './_components/OperationsUseCaseHero'
import OperationsUseCasePoweredSection from './_components/OperationsUseCasePoweredSection'
import { CONTENT, OPERATIONS_USE_CASE_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: OPERATIONS_USE_CASE_PAGE_METADATA.title,
    description: OPERATIONS_USE_CASE_PAGE_METADATA.description,
    openGraph: {
      title: OPERATIONS_USE_CASE_PAGE_METADATA.title,
      description: OPERATIONS_USE_CASE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/use-cases/operations`,
    },
  }
}

export default async function IntelligenceOperationsUseCasePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, powered, advantage, approach, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-25 HeroV25 (Home-24 dual imagery) */}
      <OperationsUseCaseHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        enableVideoModal={hero.enableVideoModal}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — social/PaidSocialWhatWeManageSection */}
      <OperationsUseCaseChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. Powered — intelligent-automation WhatWeAutomate (Home-07 ProcessV4) */}
      <OperationsUseCasePoweredSection
        eyebrow={powered.eyebrow}
        titleBefore={powered.titleBefore}
        titleAccent={powered.titleAccent}
        description={powered.description}
        steps={[...powered.steps]}
        image={powered.image}
        sectionId={powered.sectionId}
      />
      {/* 4. Advantage — intelligent-automation IntelligentAutomationImpactSection */}
      <OperationsUseCaseAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        manualTitle={advantage.manualTitle}
        connectedTitle={advantage.connectedTitle}
        manualSteps={[...advantage.manualSteps]}
        connectedSteps={[...advantage.connectedSteps]}
      />
      {/* 5. Approach — intelligent-automation Implementation (FromIdeaToAutomation) */}
      <OperationsUseCaseApproachSection
        eyebrow={approach.eyebrow}
        titleBefore={approach.titleBefore}
        titleAccent={approach.titleAccent}
        description={approach.description}
        steps={[...approach.steps]}
      />
      {/* 6. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}