import BusinessWebsitesTechnologiesSection from './_components/BusinessWebsitesTechnologiesSection'
import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import AiAssistantsFasterAnswersSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsFasterAnswersSection'
import AiAssistantsInActionSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsInActionSection'
import BusinessWebsitesChallengeSection from './_components/BusinessWebsitesChallengeSection'
import SalesUseCasePoweredSection from '@/app/[locale]/intelligence/use-cases/sales/_components/SalesUseCasePoweredSection'
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
      <IntelligentAutomationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId={hero.headingId}
      />
      <BusinessWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      <SalesUseCasePoweredSection
        eyebrow={whatWeBuild.eyebrow}
        title={whatWeBuild.title}
        steps={[...whatWeBuild.steps]}
        sectionId={whatWeBuild.sectionId}
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
      <BusinessWebsitesTechnologiesSection
        eyebrow={technologies.eyebrow}
        headlineBefore={technologies.headlineBefore}
        headlineAccent={technologies.headlineAccent}
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
      />
    </div>
  )
}