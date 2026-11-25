import SharedHostingIncludedSection from '@/app/[locale]/host/services/shared-web-hosting/_components/SharedHostingIncludedSection'
import VpsHostingChallengeSection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingChallengeSection'
import VpsHostingTechnologySection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingTechnologySection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import MarketingUseCaseApproachSection from '@/app/[locale]/intelligence/use-cases/marketing/_components/MarketingUseCaseApproachSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CLOUD_HOSTING_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CLOUD_HOSTING_PAGE_METADATA.title,
    description: CLOUD_HOSTING_PAGE_METADATA.description,
    openGraph: {
      title: CLOUD_HOSTING_PAGE_METADATA.title,
      description: CLOUD_HOSTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/services/cloud-hosting`,
    },
  }
}

export default async function CloudHostingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatsIncluded, advantage, gettingStarted, technology, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — intelligence IntelligentAutomationHero (Home-19 HeroV19) */}
      <IntelligentAutomationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId="cloud-hosting-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. The Challenge — vps VpsHostingChallengeSection (MarketingUseCaseAdvantage numbered pillars) */}
      <VpsHostingChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 3. What's Included — shared-web-hosting SharedHostingIncludedSection (BiPredictive 3×2 flip cards) */}
      <SharedHostingIncludedSection
        eyebrow={whatsIncluded.eyebrow}
        titleBefore={whatsIncluded.titleBefore}
        titleAccent={whatsIncluded.titleAccent}
        description={whatsIncluded.description}
        capabilityCards={[...whatsIncluded.capabilityCards]}
      />

      {/* 4. The Cloud Advantage — BiPredictiveDecisionsSection (list left + media right) */}
      <BiPredictiveDecisionsSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        benefits={[...advantage.benefits]}
        image={advantage.image}
      />

      {/* 5. Getting Started — MarketingUseCaseApproachSection (Home-19 ProcessV10 STEP pill cards) */}
      <MarketingUseCaseApproachSection
        eyebrow={gettingStarted.eyebrow}
        titleBefore={gettingStarted.titleBefore}
        titleAccent={gettingStarted.titleAccent}
        description={gettingStarted.description}
        steps={[...gettingStarted.steps]}
      />

      {/* 6. Cloud Technologies — vps VpsHostingTechnologySection (BusinessWebsitesTechnologies logo row) */}
      <VpsHostingTechnologySection
        eyebrow={technology.eyebrow}
        headlineBefore={technology.headlineBefore}
        headlineAccent={technology.headlineAccent}
        description={technology.description}
        tools={[...technology.tools]}
      />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
