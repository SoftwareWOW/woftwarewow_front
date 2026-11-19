import BiPredictiveHero from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveHero'
import SalesUseCaseAdvantageSection from '@/app/[locale]/intelligence/use-cases/sales/_components/SalesUseCaseAdvantageSection'
import BusinessWebsitesChallengeSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesChallengeSection'
import ConversionOptimizationWhatWeOptimizeSection from '@/app/[locale]/websites/services/conversion-optimization/_components/ConversionOptimizationWhatWeOptimizeSection'
import EcommerceWebsitesTechnologiesSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesTechnologiesSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, WEBSITE_OPTIMIZATION_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: WEBSITE_OPTIMIZATION_PAGE_METADATA.title,
    description: WEBSITE_OPTIMIZATION_PAGE_METADATA.description,
    openGraph: {
      title: WEBSITE_OPTIMIZATION_PAGE_METADATA.title,
      description: WEBSITE_OPTIMIZATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/website-optimization`,
    },
  }
}

export default async function WebsiteOptimizationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeOptimize, advantage, process, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 overflow-x-clip sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — landing-pages §1 BiPredictiveHero (design/DesignHero) */}
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
      {/* 2. Challenge — conversion-optimization §2 BusinessWebsitesChallengeSection */}
      <BusinessWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
        containedGrid
      />
      {/* 3. What we optimize — conversion-optimization §3 ConversionOptimizationWhatWeOptimizeSection (BiPredictiveIntelligenceSection) */}
      <ConversionOptimizationWhatWeOptimizeSection
        eyebrow={whatWeOptimize.eyebrow}
        titleBefore={whatWeOptimize.titleBefore}
        titleAccent={whatWeOptimize.titleAccent}
        description={whatWeOptimize.description}
        capabilityCards={[...whatWeOptimize.capabilityCards]}
        sectionId={whatWeOptimize.sectionId}
      />
      {/* 4. Advantage — intelligence/use-cases/sales §4 SalesUseCaseAdvantageSection (BeforeAfterGap) */}
      <SalesUseCaseAdvantageSection
        eyebrow={advantage.eyebrow}
        titleBefore={advantage.titleBefore}
        titleAccent={advantage.titleAccent}
        description={advantage.description}
        beforeLabel={advantage.beforeLabel}
        afterLabel={advantage.afterLabel}
        afterLabelWithWowText
        beforeSteps={[...advantage.beforeSteps]}
        afterSteps={[...advantage.afterSteps]}
      />
      {/* 5. Process — landing-pages LandingPagesProcessSection (analytics ModernizationPath) */}
      <LandingPagesProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={[...process.steps]}
      />
      {/* 6. Technologies — ecommerce-websites §6 EcommerceWebsitesTechnologiesSection (colored logos:*) */}
      <EcommerceWebsitesTechnologiesSection
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