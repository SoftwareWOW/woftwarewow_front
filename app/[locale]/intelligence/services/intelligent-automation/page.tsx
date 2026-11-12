import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import IntelligentAutomationChallengeSection from './_components/IntelligentAutomationChallengeSection'
import IntelligentAutomationHero from './_components/IntelligentAutomationHero'
import IntelligentAutomationImpactSection from './_components/IntelligentAutomationImpactSection'
import IntelligentAutomationImplementationSection from './_components/IntelligentAutomationImplementationSection'
import IntelligentAutomationInActionSection from './_components/IntelligentAutomationInActionSection'
import IntelligentAutomationWhatWeAutomateSection from './_components/IntelligentAutomationWhatWeAutomateSection'
import { CONTENT, INTELLIGENT_AUTOMATION_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: INTELLIGENT_AUTOMATION_PAGE_METADATA.title,
    description: INTELLIGENT_AUTOMATION_PAGE_METADATA.description,
    openGraph: {
      title: INTELLIGENT_AUTOMATION_PAGE_METADATA.title,
      description: INTELLIGENT_AUTOMATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/intelligence/services/intelligent-automation`,
    },
  }
}

export default async function IntelligentAutomationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, impact, whatWeAutomate, implementation, inAction, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-19 HeroV19 */}
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
      {/* 2. Challenge — social/PaidSocialWhatWeManageSection */}
      <IntelligentAutomationChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        capabilityCards={[...challenge.capabilityCards]}
      />
      {/* 3. Impact — split Before/After columns */}
      <IntelligentAutomationImpactSection
        eyebrow={impact.eyebrow}
        title={impact.title}
        description={impact.description}
        manualTitle={impact.manualTitle}
        connectedTitle={impact.connectedTitle}
        beforeSublabel={impact.beforeSublabel}
        afterSublabel={impact.afterSublabel}
        manualSteps={[...impact.manualSteps]}
        connectedSteps={[...impact.connectedSteps]}
      />
      {/* 4. What we automate — PaidSocialBeyondClickSection */}
      <IntelligentAutomationWhatWeAutomateSection
        eyebrow={whatWeAutomate.eyebrow}
        titleBefore={whatWeAutomate.titleBefore}
        titleAccent={whatWeAutomate.titleAccent}
        description={whatWeAutomate.description}
        steps={[...whatWeAutomate.steps]}
        image={whatWeAutomate.image}
        sectionId={whatWeAutomate.sectionId}
      />
      {/* 5. Implementation — FromIdeaToAutomation */}
      <IntelligentAutomationImplementationSection
        eyebrow={implementation.eyebrow}
        titleBefore={implementation.titleBefore}
        titleAccent={implementation.titleAccent}
        description={implementation.description}
        steps={[...implementation.steps]}
      />
      {/* 6. In action — Home-19 OurExpertiseV2 */}
      <IntelligentAutomationInActionSection
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
      />
    </div>
  )
}
