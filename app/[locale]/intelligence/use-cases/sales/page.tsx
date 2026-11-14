import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SalesUseCaseAdvantageSection from './_components/SalesUseCaseAdvantageSection'
import SalesUseCaseApproachSection from './_components/SalesUseCaseApproachSection'
import SalesUseCaseChallengeSection from './_components/SalesUseCaseChallengeSection'
import SalesUseCaseHero from './_components/SalesUseCaseHero'
import SalesUseCaseInActionSection from './_components/SalesUseCaseInActionSection'
import SalesUseCasePoweredSection from './_components/SalesUseCasePoweredSection'
import { CONTENT, SALES_USE_CASE_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SALES_USE_CASE_PAGE_METADATA.title,
    description: SALES_USE_CASE_PAGE_METADATA.description,
    openGraph: {
      title: SALES_USE_CASE_PAGE_METADATA.title,
      description: SALES_USE_CASE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/use-cases/sales`,
    },
  }
}

export default async function IntelligenceSalesUseCasePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, powered, challenge, advantage, approach, inAction, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-25 HeroV25 */}
      <SalesUseCaseHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        titleSuffix={hero.titleSuffix}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        enableVideoModal={hero.enableVideoModal}
        headingId={hero.headingId}
      />
         {/* 2. Challenge — social/PaidSocialWhatWeManageSection */}
      <SalesUseCaseChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. AI-powered sales — WOW Social SocialApproachSection */}
      <SalesUseCasePoweredSection
        eyebrow={powered.eyebrow}
        title={powered.title}
        steps={[...powered.steps]}
        sectionId={powered.sectionId}
      />
      {/* 4. Advantage — packages/digital-transformation BeforeAfterGap */}
      <SalesUseCaseAdvantageSection
        eyebrow={advantage.eyebrow}
        titleBefore={advantage.titleBefore}
        titleAccent={advantage.titleAccent}
        description={advantage.description}
        beforeLabel={advantage.beforeLabel}
        afterLabel={advantage.afterLabel}
        beforeSteps={[...advantage.beforeSteps]}
        afterSteps={[...advantage.afterSteps]}
      />
      {/* 5. Approach — design/CreativeProcessSection */}
      <SalesUseCaseApproachSection
        eyebrow={approach.eyebrow}
        titleBefore={approach.titleBefore}
        titleAccent={approach.titleAccent}
        description={approach.description}
        steps={[...approach.steps]}
      />
      {/* 6. In action — homepage-13 BuiltAroundPeople */}
      <SalesUseCaseInActionSection
        eyebrow={inAction.eyebrow}
        title={inAction.title}
        description={inAction.description}
        benefits={[...inAction.benefits]}
        image={inAction.image}
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
