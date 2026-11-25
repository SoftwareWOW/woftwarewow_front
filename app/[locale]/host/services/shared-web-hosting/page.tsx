import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SharedHostingAdvantageSection from './_components/SharedHostingAdvantageSection'
import SharedHostingChallengeSection from './_components/SharedHostingChallengeSection'
import SharedHostingIncludedSection from './_components/SharedHostingIncludedSection'
import SharedHostingTechnologySection from './_components/SharedHostingTechnologySection'
import { CONTENT, SHARED_WEB_HOSTING_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SHARED_WEB_HOSTING_PAGE_METADATA.title,
    description: SHARED_WEB_HOSTING_PAGE_METADATA.description,
    openGraph: {
      title: SHARED_WEB_HOSTING_PAGE_METADATA.title,
      description: SHARED_WEB_HOSTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/services/shared-web-hosting`,
    },
  }
}

export default async function SharedWebHostingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatsIncluded, advantage, gettingStarted, technology, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — intelligence IntelligentAutomationHero (Home-19 HeroV19) */}
      <IntelligentAutomationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId="shared-web-hosting-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. The Challenge — copy of MarketingUseCaseAdvantageSection (numbered + highlight) */}
      <SharedHostingChallengeSection
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 3. What's Included — copy of BiPredictiveIntelligenceSection (3×2 flip cards) */}
      <SharedHostingIncludedSection
        eyebrow={whatsIncluded.eyebrow}
        titleBefore={whatsIncluded.titleBefore}
        titleAccent={whatsIncluded.titleAccent}
        description={whatsIncluded.description}
        capabilityCards={[...whatsIncluded.capabilityCards]}
      />

      {/* 4. Shared Hosting Advantage — copy of accelerate BuiltForGrowth (image + checklist) */}
      <SharedHostingAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        accentTitle={advantage.accentTitle}
        description={advantage.description}
        image={advantage.image}
        items={[...advantage.items]}
      />

      {/* 5. Getting Started — LandingPagesProcessSection (horizontal timeline) */}
      <LandingPagesProcessSection
        eyebrow={gettingStarted.eyebrow}
        title={gettingStarted.title}
        description={gettingStarted.description}
        steps={[...gettingStarted.steps]}
      />

      {/* 6. Hosting Technology — copy of BusinessWebsitesTechnologiesSection (6-logo row) */}
      <SharedHostingTechnologySection
        eyebrow={technology.eyebrow}
        headlineBefore={technology.headlineBefore}
        headlineAccent={technology.headlineAccent}
        description={technology.description}
        tools={[...technology.tools]}
      />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
