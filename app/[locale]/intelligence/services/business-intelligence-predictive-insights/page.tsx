import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BiPredictiveChallengeSection from './_components/BiPredictiveChallengeSection'
import BiPredictiveDecisionsSection from './_components/BiPredictiveDecisionsSection'
import BiPredictiveHero from './_components/BiPredictiveHero'
import BiPredictiveIntelligenceSection from './_components/BiPredictiveIntelligenceSection'
import BiPredictiveProcessSection from './_components/BiPredictiveProcessSection'
import { BI_PREDICTIVE_INSIGHTS_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: BI_PREDICTIVE_INSIGHTS_PAGE_METADATA.title,
    description: BI_PREDICTIVE_INSIGHTS_PAGE_METADATA.description,
    openGraph: {
      title: BI_PREDICTIVE_INSIGHTS_PAGE_METADATA.title,
      description: BI_PREDICTIVE_INSIGHTS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/services/business-intelligence-predictive-insights`,
    },
  }
}

export default async function BusinessIntelligencePredictiveInsightsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, intelligence, decisions, process, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design/DesignHero (BrandIdentityHero) */}
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
      {/* 2. Challenge — Home-19 OurExpertiseV2 */}
      <BiPredictiveChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        items={[...challenge.items]}
      />
      {/* 3. Capabilities — social/PaidSocialWhatWeManageSection (intelligent-automation) */}
      <BiPredictiveIntelligenceSection
        eyebrow={intelligence.eyebrow}
        titleBefore={intelligence.titleBefore}
        titleAccent={intelligence.titleAccent}
        description={intelligence.description}
        capabilityCards={[...intelligence.capabilityCards]}
        sectionId={intelligence.sectionId}
      />
      {/* 4. Decisions — homepage-13 BuiltAroundPeople */}
      <BiPredictiveDecisionsSection
        eyebrow={decisions.eyebrow}
        title={decisions.title}
        description={decisions.description}
        benefits={[...decisions.benefits]}
        image={decisions.image}
        sectionId={decisions.sectionId}
      />
      {/* 5. Process — design/CreativeProcessSection */}
      <BiPredictiveProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={[...process.steps]}
      />
      {/* 6. CTA — WowGrowthCta */}
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
      />
    </div>
  )
}
