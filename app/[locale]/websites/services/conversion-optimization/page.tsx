import BusinessWebsitesChallengeSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesChallengeSection'
import EcommerceWebsitesTechnologiesSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesTechnologiesSection'
import EcommerceWebsitesGrowthPiecesSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesGrowthPiecesSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ConversionOptimizationHero from './_components/ConversionOptimizationHero'
import ConversionOptimizationWhatWeOptimizeSection from './_components/ConversionOptimizationWhatWeOptimizeSection'
import { CONTENT, CONVERSION_OPTIMIZATION_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CONVERSION_OPTIMIZATION_PAGE_METADATA.title,
    description: CONVERSION_OPTIMIZATION_PAGE_METADATA.description,
    openGraph: {
      title: CONVERSION_OPTIMIZATION_PAGE_METADATA.title,
      description: CONVERSION_OPTIMIZATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/conversion-optimization`,
    },
  }
}

export default async function ConversionOptimizationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeOptimize, advantage, process, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 overflow-x-clip sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — multilingual §1 Home-19 HeroV19 (BusinessGrowthHero) */}
      <ConversionOptimizationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — multilingual §2 BusinessWebsitesChallengeSection */}
      <BusinessWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
        containedGrid
      />
      {/* 3. What we optimize — BiPredictiveIntelligenceSection (3+3 flip hover cards) */}
      <ConversionOptimizationWhatWeOptimizeSection
        eyebrow={whatWeOptimize.eyebrow}
        titleBefore={whatWeOptimize.titleBefore}
        titleAccent={whatWeOptimize.titleAccent}
        description={whatWeOptimize.description}
        capabilityCards={[...whatWeOptimize.capabilityCards]}
        sectionId={whatWeOptimize.sectionId}
      />
      {/* 4. Advantage — ecommerce-websites §4 EcommerceWebsitesGrowthPiecesSection (Home-04 ServicesV5) */}
      <EcommerceWebsitesGrowthPiecesSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        items={[...advantage.items]}
        footerLine={advantage.footerLine}
        footerCtaLabel={advantage.footerCtaLabel}
        footerCtaHref={advantage.footerCtaHref}
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