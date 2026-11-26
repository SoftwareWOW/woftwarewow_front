import CreativeProcessSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/CreativeProcessSection'
import BiPredictiveChallengeSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveChallengeSection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import BiPredictiveIntelligenceSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveIntelligenceSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import CorporateExperiencesHero from './_components/CorporateExperiencesHero'
import { CONTENT, CORPORATE_EXPERIENCES_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CORPORATE_EXPERIENCES_PAGE_METADATA.title,
    description: CORPORATE_EXPERIENCES_PAGE_METADATA.description,
    openGraph: {
      title: CORPORATE_EXPERIENCES_PAGE_METADATA.title,
      description: CORPORATE_EXPERIENCES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/events/solutions/corporate-experiences`,
    },
  }
}

export default async function CorporateExperiencesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeCreate, peopleAdvantage, process, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — local copy of MultilingualWebsitesHero (Home-19 HeroV19 dual stagger) */}
      <CorporateExperiencesHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId="corporate-experiences-hero-heading"
      />

      {/* 2. The Challenge — intelligence BiPredictiveChallengeSection (Home-19 OurExpertiseV2 numbered cards) */}
      <BiPredictiveChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        items={[...challenge.items]}
      />

      {/* 3. What We Create — intelligence BiPredictiveIntelligenceSection (3+2 flip icon cards) */}
      <BiPredictiveIntelligenceSection
        eyebrow={whatWeCreate.eyebrow}
        titleBefore={whatWeCreate.titleBefore}
        titleAccent={whatWeCreate.titleAccent}
        description={whatWeCreate.description}
        capabilityCards={[...whatWeCreate.capabilityCards]}
        sectionId={whatWeCreate.sectionId}
        containedGrid
      />

      {/* 4. The People Advantage — intelligence BiPredictiveDecisionsSection (list left + media right) */}
      <BiPredictiveDecisionsSection
        eyebrow={peopleAdvantage.eyebrow}
        title={peopleAdvantage.title}
        description={peopleAdvantage.description}
        benefits={[...peopleAdvantage.benefits]}
        image={peopleAdvantage.image}
      />

      {/* 5. Our Event Process — design CreativeProcessSection (watermark 3-step process) */}
      <CreativeProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={[...process.steps]}
      />

      {/* 6. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
