import BrandIdentityWorkSection from '@/app/[locale]/design/services/brand-identity-strategy/_components/BrandIdentityWorkSection'
import LandingPagesProcessSection from '@/app/[locale]/websites/services/landing-pages/_components/LandingPagesProcessSection'
import SpeakingMediaPresenceHero from '@/app/[locale]/events/_components/SpeakingMediaPresenceHero'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import SpeakingOpportunitiesSection from './_components/SpeakingOpportunitiesSection'
import SpeakingPowerOfVoiceSection from './_components/SpeakingPowerOfVoiceSection'
import SpeakingWhatWeSupportSection from './_components/SpeakingWhatWeSupportSection'
import { CONTENT, SPEAKING_MEDIA_PRESENCE_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SPEAKING_MEDIA_PRESENCE_PAGE_METADATA.title,
    description: SPEAKING_MEDIA_PRESENCE_PAGE_METADATA.description,
    openGraph: {
      title: SPEAKING_MEDIA_PRESENCE_PAGE_METADATA.title,
      description: SPEAKING_MEDIA_PRESENCE_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/impact/services/speaking-media-presence`,
    },
  }
}

export default async function SpeakingMediaPresencePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeSupport, powerOfVoice, process, opportunities, ourWork, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — copy of events EventsHero (HospitalityHero full-bleed) */}
      <SpeakingMediaPresenceHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        primaryCta={hero.primaryCta}
        primaryCtaHref={hero.primaryCtaHref}
        secondaryCta={hero.secondaryCta}
        secondaryCtaHref={hero.secondaryCtaHref}
        image={hero.image}
        headingId="speaking-media-presence-hero-heading"
      />

      {/* 2. What We Support — copy of SalesJourneyGap (ElevateBrandV2), centered + compact rows */}
      <SpeakingWhatWeSupportSection
        eyebrow={whatWeSupport.eyebrow}
        title={whatWeSupport.title}
        stages={[...whatWeSupport.stages]}
      />

      {/* 3. The Power of Your Voice — copy of BiPredictiveDecisionsSection (media left + list right) */}
      <SpeakingPowerOfVoiceSection
        eyebrow={powerOfVoice.eyebrow}
        title={powerOfVoice.title}
        description={powerOfVoice.description}
        benefits={[...powerOfVoice.benefits]}
        image={powerOfVoice.image}
      />

      {/* 4. Our Preparation Process — LandingPagesProcessSection (horizontal timeline) */}
      <LandingPagesProcessSection
        eyebrow={process.eyebrow}
        title={process.title}
        description={process.description}
        steps={[...process.steps]}
      />

      {/* 5. Speaking & Media Opportunities — copy of design WhatWeCreateSection (2×2 image cards) */}
      <SpeakingOpportunitiesSection
        eyebrow={opportunities.eyebrow}
        title={opportunities.title}
        accentTitle={opportunities.accentTitle}
        description={opportunities.description}
        items={[...opportunities.items]}
      />

      {/* 6. Our Creative Work — design BrandIdentityWorkSection (MarketingPortfolioSection) */}
      <BrandIdentityWorkSection {...ourWork} />

      {/* 7. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
