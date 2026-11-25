import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import VpsHostingAdvantageSection from './_components/VpsHostingAdvantageSection'
import VpsHostingChallengeSection from './_components/VpsHostingChallengeSection'
import VpsHostingResourcesSection from './_components/VpsHostingResourcesSection'
import VpsHostingTechnologySection from './_components/VpsHostingTechnologySection'
import { CONTENT, VPS_HOSTING_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: VPS_HOSTING_PAGE_METADATA.title,
    description: VPS_HOSTING_PAGE_METADATA.description,
    openGraph: {
      title: VPS_HOSTING_PAGE_METADATA.title,
      description: VPS_HOSTING_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/services/vps-hosting`,
    },
  }
}

export default async function VpsHostingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, resources, advantage, gettingStarted, technology, cta } = CONTENT

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
        headingId="vps-hosting-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. The Challenge — copy of SharedHostingChallengeSection / MarketingUseCaseAdvantage */}
      <VpsHostingChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 3. What's Included / Resources — copy of BiPredictiveProcessSection */}
      <VpsHostingResourcesSection
        eyebrow={resources.eyebrow}
        title={resources.title}
        description={resources.description}
        steps={[...resources.steps]}
      />

      {/* 4. The VPS Advantage — copy of StartupJourney / BrandingProcess (2×2 numbered grid) */}
      <VpsHostingAdvantageSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        accentTitle={advantage.accentTitle}
        description={advantage.description}
        items={[...advantage.items]}
      />

      {/* 5. Getting Started — LandingPagesProcessSection (horizontal timeline) */}
      <LandingPagesProcessSection
        eyebrow={gettingStarted.eyebrow}
        title={gettingStarted.title}
        description={gettingStarted.description}
        steps={[...gettingStarted.steps]}
      />

      {/* 6. Server Technologies — copy of SharedHostingTechnologySection */}
      <VpsHostingTechnologySection
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
