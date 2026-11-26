import CreativeProcessSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/CreativeProcessSection'
import SharedHostingIncludedSection from '@/app/[locale]/host/services/shared-web-hosting/_components/SharedHostingIncludedSection'
import VpsHostingChallengeSection from '@/app/[locale]/host/services/vps-hosting/_components/VpsHostingChallengeSection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import EcommerceWebsitesTechnologiesSection from '@/app/[locale]/websites/services/ecommerce-websites/_components/EcommerceWebsitesTechnologiesSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, WEBSITE_SECURITY_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: WEBSITE_SECURITY_PAGE_METADATA.title,
    description: WEBSITE_SECURITY_PAGE_METADATA.description,
    openGraph: {
      title: WEBSITE_SECURITY_PAGE_METADATA.title,
      description: WEBSITE_SECURITY_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/solutions/protect-what-keeps-you-online`,
    },
  }
}

export default async function ProtectWhatKeepsYouOnlinePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeProtect, advantage, approach, technology, cta } = CONTENT

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
        headingId="website-security-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. The Security Challenge — vps VpsHostingChallengeSection (MarketingUseCaseAdvantage numbered pillars) */}
      <VpsHostingChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        description={challenge.description}
        pillars={[...challenge.pillars]}
      />

      {/* 3. What We Protect — shared-web-hosting SharedHostingIncludedSection (BiPredictive 3×2 flip cards) */}
      <SharedHostingIncludedSection
        eyebrow={whatWeProtect.eyebrow}
        titleBefore={whatWeProtect.titleBefore}
        titleAccent={whatWeProtect.titleAccent}
        description={whatWeProtect.description}
        capabilityCards={[...whatWeProtect.capabilityCards]}
      />

      {/* 4. The Security Advantage — BiPredictiveDecisionsSection (list left + media right) */}
      <BiPredictiveDecisionsSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        benefits={[...advantage.benefits]}
        image={advantage.image}
      />

      {/* 5. Our Security Approach — design CreativeProcessSection (watermark 3-step process) */}
      <CreativeProcessSection
        eyebrow={approach.eyebrow}
        title={approach.title}
        description={approach.description}
        steps={[...approach.steps]}
      />

      {/* 6. Security Technologies — ecommerce EcommerceWebsitesTechnologiesSection (colored logos row) */}
      <EcommerceWebsitesTechnologiesSection
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
