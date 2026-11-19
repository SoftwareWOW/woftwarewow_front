import AccessibleWebHero from './_components/AccessibleWebHero'
import AccessibleWebAdvantageSection from './_components/AccessibleWebAdvantageSection'
import { CONTENT, ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA } from './_content/page-content'
import OperationsUseCasePoweredSection from '@/app/[locale]/intelligence/use-cases/operations/_components/OperationsUseCasePoweredSection'
import EcommerceWebsitesChallengeSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesChallengeSection'
import MarketingUseCaseApproachSection from '@/app/[locale]/intelligence/use-cases/marketing/_components/MarketingUseCaseApproachSection'
import AiAssistantsSolutionRowsSection from '@/app/[locale]/intelligence/services/ai-assistants-chatbots/_components/AiAssistantsSolutionRowsSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA.title,
    description: ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA.description,
    openGraph: {
      title: ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA.title,
      description: ACCESSIBLE_WEB_EXPERIENCES_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/accessible-web-experiences`,
    },
  }
}

export default async function AccessibleWebExperiencesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeImprove, advantage, process, approach, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — IntelligentAutomationHero split (image left) */}
      <AccessibleWebHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={hero.media}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — ecommerce §2 EcommerceWebsitesChallengeSection */}
      <EcommerceWebsitesChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. What we improve — ecommerce §3 OperationsUseCasePoweredSection */}
      <OperationsUseCasePoweredSection
        eyebrow={whatWeImprove.eyebrow}
        titleBefore={whatWeImprove.titleBefore}
        titleAccent={whatWeImprove.titleAccent}
        description={whatWeImprove.description}
        steps={[...whatWeImprove.steps]}
        image={whatWeImprove.image}
        sectionId={whatWeImprove.sectionId}
      />
      {/* 4. Advantage — AiAssistantsInActionSection (Home-19 OurExpertiseV2) */}
      <AccessibleWebAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        items={[...advantage.items]}
      />
      {/* 5. Process — business-websites MarketingUseCaseApproachSection (STEP pills) */}
      <MarketingUseCaseApproachSection
        eyebrow={process.eyebrow}
        titleBefore={process.titleBefore}
        titleAccent={process.titleAccent}
        description={process.description}
        steps={[...process.steps]}
      />
      {/* 6. Approach — ai-assistants AiAssistantsSolutionRowsSection (SocialApproach) */}
      <AiAssistantsSolutionRowsSection
        eyebrow={approach.eyebrow}
        title={approach.title}
        steps={[...approach.steps]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}