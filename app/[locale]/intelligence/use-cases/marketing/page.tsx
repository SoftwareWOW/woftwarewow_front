import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MarketingUseCaseAdvantageSection from './_components/MarketingUseCaseAdvantageSection'
import MarketingUseCaseApproachSection from './_components/MarketingUseCaseApproachSection'
import MarketingUseCaseChallengeSection from './_components/MarketingUseCaseChallengeSection'
import MarketingUseCaseHero from './_components/MarketingUseCaseHero'
import MarketingUseCaseInActionSection from './_components/MarketingUseCaseInActionSection'
import MarketingUseCasePoweredSection from './_components/MarketingUseCasePoweredSection'
import { CONTENT, MARKETING_USE_CASE_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: MARKETING_USE_CASE_PAGE_METADATA.title,
    description: MARKETING_USE_CASE_PAGE_METADATA.description,
    openGraph: {
      title: MARKETING_USE_CASE_PAGE_METADATA.title,
      description: MARKETING_USE_CASE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/use-cases/marketing`,
    },
  }
}

export default async function IntelligenceMarketingUseCasePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, powered, advantage, approach, inAction, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design/DesignHero (BrandIdentityHero) */}
      <MarketingUseCaseHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={hero.media}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — social/PaidSocialWhatWeManageSection */}
      <MarketingUseCaseChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. Powered — for-you/social-and-community SocialProcess (Home-07 ProcessV4) */}
      <MarketingUseCasePoweredSection
        eyebrow={powered.eyebrow}
        titleBefore={powered.titleBefore}
        titleAccent={powered.titleAccent}
        description={powered.description}
        steps={[...powered.steps]}
        image={powered.image}
        sectionId={powered.sectionId}
      />
      {/* 4. Advantage — Home-02 ProcessV2 (RetailGrowthPillars) */}
      <MarketingUseCaseAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        pillars={[...advantage.pillars]}
      />
      {/* 5. Approach — Home-19 ProcessV10 (LeadToCustomer) */}
      <MarketingUseCaseApproachSection
        eyebrow={approach.eyebrow}
        titleBefore={approach.titleBefore}
        titleAccent={approach.titleAccent}
        description={approach.description}
        steps={[...approach.steps]}
      />
      {/* 6. In action — Home-14 WhyChooseUsV3 (MissionJourney) */}
      <MarketingUseCaseInActionSection
        eyebrow={inAction.eyebrow}
        title={inAction.title}
        items={[...inAction.items]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
      />
    </div>
  )
}