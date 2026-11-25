import CreativeProcessSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/CreativeProcessSection'
import BrandIdentityWorkSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandIdentityWorkSection'
import BiPredictiveDecisionsSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveDecisionsSection'
import BiPredictiveIntelligenceSection from '@/app/[locale]/intelligence/services/business-intelligence-predictive-insights/_components/BiPredictiveIntelligenceSection'
import IntelligentAutomationHero from '@/app/[locale]/intelligence/services/intelligent-automation/_components/IntelligentAutomationHero'
import CustomerServiceUseCaseExperienceSection from '@/app/[locale]/intelligence/use-cases/customer-service/_components/CustomerServiceUseCaseExperienceSection'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CONTENT, DEDICATED_SERVERS_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: DEDICATED_SERVERS_PAGE_METADATA.title,
    description: DEDICATED_SERVERS_PAGE_METADATA.description,
    openGraph: {
      title: DEDICATED_SERVERS_PAGE_METADATA.title,
      description: DEDICATED_SERVERS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/host/services/dedicated-servers`,
    },
  }
}

export default async function DedicatedServersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    whatWeStrengthen,
    credibility,
    approach,
    digitalFootprint,
    presenceInPractice,
    cta,
  } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — intelligence IntelligentAutomationHero (Home-19 HeroV19; same as impact reputation-visibility) */}
      <IntelligentAutomationHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        headingId="dedicated-servers-hero-heading"
        breakBeforeItalic={false}
      />

      {/* 2. What We Strengthen — BiPredictiveIntelligenceSection (3+2 flip cards) */}
      <BiPredictiveIntelligenceSection
        eyebrow={whatWeStrengthen.eyebrow}
        titleBefore={whatWeStrengthen.titleBefore}
        titleAccent={whatWeStrengthen.titleAccent}
        description={whatWeStrengthen.description}
        capabilityCards={[...whatWeStrengthen.capabilityCards]}
      />

      {/* 3. The Value of Credibility — BiPredictiveDecisionsSection (list left + media right) */}
      <BiPredictiveDecisionsSection
        eyebrow={credibility.eyebrow}
        title={credibility.title}
        description={credibility.description}
        benefits={[...credibility.benefits]}
        image={credibility.image}
      />

      {/* 4. Our Approach — design CreativeProcessSection (MarketingProcessSection watermark steps) */}
      <CreativeProcessSection
        eyebrow={approach.eyebrow}
        title={approach.title}
        description={approach.description}
        steps={[...approach.steps]}
      />

      {/* 5. Your Digital Footprint — CustomerServiceUseCaseExperienceSection (Home-02 ProcessV2) */}
      <CustomerServiceUseCaseExperienceSection
        eyebrow={digitalFootprint.eyebrow}
        title={digitalFootprint.title}
        description={digitalFootprint.description}
        pillars={[...digitalFootprint.pillars]}
      />

      {/* 6. Presence in Practice — design BrandIdentityWorkSection (MarketingPortfolioSection) */}
      <BrandIdentityWorkSection {...presenceInPractice} />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
