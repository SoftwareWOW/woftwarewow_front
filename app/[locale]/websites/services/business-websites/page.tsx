import CreativeToolkit from '@/app/[locale]/design/services/brand-identity-strategy/_components/CreativeToolkit'
import LearningEventsHero from '@/app/[locale]/for-you/learning-and-events/_components/LearningEventsHero'
import AiAssistantsFasterAnswersSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsFasterAnswersSection'
import AiAssistantsInActionSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsInActionSection'
import AiAssistantsSolutionRowsSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsSolutionRowsSection'
import IntelligentAutomationChallengeSection from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationChallengeSection'
import MarketingUseCaseApproachSection from '@/app/[locale]/intelligence/use-cases/marketing/_components/MarketingUseCaseApproachSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { BUSINESS_WEBSITES_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: BUSINESS_WEBSITES_PAGE_METADATA.title,
    description: BUSINESS_WEBSITES_PAGE_METADATA.description,
    openGraph: {
      title: BUSINESS_WEBSITES_PAGE_METADATA.title,
      description: BUSINESS_WEBSITES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/business-websites`,
    },
  }
}

export default async function BusinessWebsitesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    challenge,
    whatWeBuild,
    advantage,
    process,
    technologies,
    inAction,
    cta,
  } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <LearningEventsHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        trustLineHighlight={hero.trustLineHighlight}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        visual={hero.visual}
        images={[...hero.images]}
        headingId={hero.headingId}
      />
      <IntelligentAutomationChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      <AiAssistantsSolutionRowsSection
        eyebrow={whatWeBuild.eyebrow}
        title={whatWeBuild.title}
        description={whatWeBuild.description}
        steps={[...whatWeBuild.steps]}
      />
      <AiAssistantsFasterAnswersSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        benefits={[...advantage.benefits]}
        image={advantage.image}
      />
      <MarketingUseCaseApproachSection
        eyebrow={process.eyebrow}
        titleBefore={process.titleBefore}
        titleAccent={process.titleAccent}
        description={process.description}
        steps={[...process.steps]}
      />
      <CreativeToolkit
        eyebrow={technologies.eyebrow}
        headline={technologies.headline}
        description={technologies.description}
        tools={[...technologies.tools]}
      />
      <AiAssistantsInActionSection
        eyebrow={inAction.eyebrow}
        title={inAction.title}
        accentTitle={inAction.accentTitle}
        description={inAction.description}
        items={[...inAction.items]}
      />
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
        sectionClassName="!pb-0"
      />
    </div>
  )
}