import BiPredictiveChallengeSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveChallengeSection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import BiPredictiveHero from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveHero'
import BiPredictiveIntelligenceSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveIntelligenceSection'
import WebsiteRedesignsProcessSection from './_components/WebsiteRedesignsProcessSection'
import BusinessWebsitesTechnologiesSection from '@/app/[locale]/websites/services/business-websites/_components/BusinessWebsitesTechnologiesSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, WEBSITE_REDESIGNS_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: WEBSITE_REDESIGNS_PAGE_METADATA.title,
    description: WEBSITE_REDESIGNS_PAGE_METADATA.description,
    openGraph: {
      title: WEBSITE_REDESIGNS_PAGE_METADATA.title,
      description: WEBSITE_REDESIGNS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/websites/services/website-redesigns`,
    },
  }
}

export default async function WebsiteRedesignsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, challenge, whatWeTransform, advantage, process, technologies, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design/DesignHero (BiPredictiveHero) */}
      <BiPredictiveHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        media={hero.media}
        headingId={hero.headingId}
      />
      {/* 2. Challenge — Home-19 OurExpertiseV2 (BiPredictiveChallengeSection) */}
      <BiPredictiveChallengeSection
        eyebrow={challenge.eyebrow}
        titleBefore={challenge.titleBefore}
        titleAccent={challenge.titleAccent}
        titleSuffix={challenge.titleSuffix}
        description={challenge.description}
        items={[...challenge.items]}
      />
      {/* 3. What we transform — intelligent-automation Challenge mosaic (BiPredictiveIntelligenceSection) */}
      <BiPredictiveIntelligenceSection
        eyebrow={whatWeTransform.eyebrow}
        titleBefore={whatWeTransform.titleBefore}
        titleAccent={whatWeTransform.titleAccent}
        description={whatWeTransform.description}
        capabilityCards={[...whatWeTransform.capabilityCards]}
        sectionId={whatWeTransform.sectionId}
      />
      {/* 4. Advantage — homepage-13 BuiltAroundPeople (BiPredictiveDecisionsSection) */}
      <BiPredictiveDecisionsSection
        eyebrow={advantage.eyebrow}
        title={advantage.title}
        description={advantage.description}
        benefits={[...advantage.benefits]}
        image={advantage.image}
        sectionId={advantage.sectionId}
      />
      {/* 5. Process — softwarewow/SoftwareWowProcessSection (Software landing §8) */}
      <WebsiteRedesignsProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        steps={[...process.steps]}
        ctaLabel={process.ctaLabel}
        ctaHref={process.ctaHref}
      />
      {/* 6. Technologies — business-websites BusinessWebsitesTechnologiesSection */}
      <BusinessWebsitesTechnologiesSection
        eyebrow={technologies.eyebrow}
        headlineBefore={technologies.headlineBefore}
        headlineAccent={technologies.headlineAccent}
        description={technologies.description}
        tools={[...technologies.tools]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}