import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AiAssistantsFasterAnswersSection from './_components/AiAssistantsFasterAnswersSection'
import AiAssistantsHero from './_components/AiAssistantsHero'
import AiAssistantsImplementationSection from './_components/AiAssistantsImplementationSection'
import AiAssistantsInActionSection from './_components/AiAssistantsInActionSection'
import AiAssistantsSolutionRowsSection from './_components/AiAssistantsSolutionRowsSection'
import AiAssistantsTeamLimitsSection from './_components/AiAssistantsTeamLimitsSection'
import { AI_ASSISTANTS_CHATBOTS_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: AI_ASSISTANTS_CHATBOTS_PAGE_METADATA.title,
    description: AI_ASSISTANTS_CHATBOTS_PAGE_METADATA.description,
    openGraph: {
      title: AI_ASSISTANTS_CHATBOTS_PAGE_METADATA.title,
      description: AI_ASSISTANTS_CHATBOTS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/services/ai-assistants-chatbots`,
    },
  }
}

export default async function AiAssistantsChatbotsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, teamLimits, aiSolution, fasterAnswers, implementation, inAction, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-19 HeroV19 */}
      <AiAssistantsHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId={hero.headingId}
      />
      {/* 2. Team limits — Home-19 OurExpertiseV2 */}
      <AiAssistantsTeamLimitsSection
        eyebrow={teamLimits.eyebrow}
        title={teamLimits.title}
        description={teamLimits.description}
        items={[...teamLimits.items]}
      />
      {/* 3. AI solution — WOW Social SocialApproachSection */}
      <AiAssistantsSolutionRowsSection
        eyebrow={aiSolution.eyebrow}
        title={aiSolution.title}
        steps={[...aiSolution.steps]}
      />
      {/* 4. Faster answers — homepage-13 BuiltAroundPeople */}
      <AiAssistantsFasterAnswersSection
        eyebrow={fasterAnswers.eyebrow}
        title={fasterAnswers.title}
        description={fasterAnswers.description}
        benefits={[...fasterAnswers.benefits]}
        image={fasterAnswers.image}
      />
      {/* 5. Implementation — packages FromIdeaToAutomation */}
      <AiAssistantsImplementationSection
        eyebrow={implementation.eyebrow}
        title={implementation.title}
        description={implementation.description}
        steps={[...implementation.steps]}
        ctaLabel={implementation.ctaLabel}
        ctaHref={implementation.ctaHref}
      />
      {/* 6. AI in action — Home-19 OurExpertiseV2 */}
      <AiAssistantsInActionSection
        eyebrow={inAction.eyebrow}
        title={inAction.title}
        accentTitle={inAction.accentTitle}
        description={inAction.description}
        items={[...inAction.items]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
        sectionClassName="!pb-0"
      />
    </div>
  )
}
