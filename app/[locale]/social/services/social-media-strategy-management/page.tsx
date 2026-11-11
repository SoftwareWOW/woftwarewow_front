import LearningEventsHero from '@/app/[locale]/for-you/learning-and-events/_components/LearningEventsHero'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SocialDifferenceSection from './_components/SocialDifferenceSection'
import SocialGrowthPiecesSection from './_components/SocialGrowthPiecesSection'
import { CONTENT, SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA.title,
    description: SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA.description,
    openGraph: {
      title: SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA.title,
      description: SOCIAL_MEDIA_STRATEGY_MANAGEMENT_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/social/services/social-media-strategy-management`,
    },
  }
}

export default async function SocialMediaStrategyManagementPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, growthPieces, theDifference } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design/services/ui-ux-digital-design §1 (Home-05 HeroV5 + image) */}
      <LearningEventsHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        trustLineHighlight={hero.trustLineHighlight}
        visual={hero.visual}
        images={[...hero.images]}
        headingId={hero.headingId}
      />
      {/* 2. Growth pieces — packages/business-growth §3 (Home-04 ServicesV5) */}
      <SocialGrowthPiecesSection
        eyebrow={growthPieces.eyebrow}
        title={growthPieces.title}
        description={growthPieces.description}
        items={[...growthPieces.items]}
      />
      {/* 3. Difference — /software §4 SoftwareWowProblemSection */}
      <SocialDifferenceSection
        eyebrow={theDifference.eyebrow}
        titleBefore={theDifference.titleBefore}
        titleAccent={theDifference.titleAccent}
        description={theDifference.description}
        problemLabel={theDifference.problemLabel}
        solutionLabel={theDifference.solutionLabel}
        problemSteps={[...theDifference.problemSteps]}
        solutionSteps={[...theDifference.solutionSteps]}
        footerSummary={theDifference.footerSummary}
        ctaLabel={theDifference.ctaLabel}
        ctaHref={theDifference.ctaHref}
      />
    </div>
  )
}
