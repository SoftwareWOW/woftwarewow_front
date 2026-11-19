import BiPredictiveHero from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveHero'
import BiPredictiveIntelligenceSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveIntelligenceSection'
import LandingPagesProcessSection from './_components/LandingPagesProcessSection'
import BusinessWebsitesChallengeSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesChallengeSection'
import BusinessWebsitesTechnologiesSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesTechnologiesSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import LandingPagesAdvantageSection from './_components/LandingPagesAdvantageSection'
import { CONTENT, LANDING_PAGES_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: LANDING_PAGES_PAGE_METADATA.title,
    description: LANDING_PAGES_PAGE_METADATA.description,
    openGraph: {
      title: LANDING_PAGES_PAGE_METADATA.title,
      description: LANDING_PAGES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/landing-pages`,
    },
  }
}

export default async function LandingPagesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeBuild, advantage, process, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design/DesignHero (BiPredictiveHero) */}
      <BiPredictiveHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={hero.media}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — intelligent-automation Challenge (BusinessWebsitesChallengeSection) */}
      <BusinessWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. What we build — BiPredictiveIntelligenceSection (3+2 flip cards) */}
      <BiPredictiveIntelligenceSection
        eyebrow={whatWeBuild.eyebrow}
        titleBefore={whatWeBuild.titleBefore}
        titleAccent={whatWeBuild.titleAccent}
        description={whatWeBuild.description}
        capabilityCards={[...whatWeBuild.capabilityCards]}
        sectionId={whatWeBuild.sectionId}
      />
      {/* 4. Advantage — BuiltAroundPeople (mockup left) */}
      <LandingPagesAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        benefits={[...advantage.benefits]}
        image={advantage.image}
        sectionId={advantage.sectionId}
      />
      {/* 5. Process — analytics ModernizationPath (LaunchPath / ServiceProces) */}
      <LandingPagesProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={[...process.steps]}
      />
      {/* 6. Technologies — business-websites BusinessWebsitesTechnologiesSection */}
      <BusinessWebsitesTechnologiesSection
        eyebrow={technologies.eyebrow}
        headlineBefore={technologies.headlineBefore}
        headlineAccent={technologies.headlineAccent}
        description={technologies.description}
        tools={[...technologies.tools]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}