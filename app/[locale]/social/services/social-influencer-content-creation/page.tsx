import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import InfluencerContentHero from './_components/InfluencerContentHero'
import InfluencerContentPurposeSection from './_components/InfluencerContentPurposeSection'
import InfluencerCreativeProcessSection from './_components/InfluencerCreativeProcessSection'
import InfluencerDesignToolkitSection from './_components/InfluencerDesignToolkitSection'
import InfluencerSocialWorkSection from './_components/InfluencerSocialWorkSection'
import InfluencerWhatWeCreateSection from './_components/InfluencerWhatWeCreateSection'
import { CONTENT, SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA.title,
    description: SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA.description,
    openGraph: {
      title: SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA.title,
      description: SOCIAL_INFLUENCER_CONTENT_CREATION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/social/services/social-influencer-content-creation`,
    },
  }
}

export default async function SocialInfluencerContentCreationPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeCreate, contentWithPurpose, creativeProcess, designToolkit, ourWork, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-25 HeroV25 */}
      <InfluencerContentHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        enableVideoModal={hero.enableVideoModal}
        headingId={hero.headingId}
      />
      {/* 2. What we create — design/video-motion WhatWeCreate (websites portfolio grid) */}
      <InfluencerWhatWeCreateSection
        eyebrow={whatWeCreate.eyebrow}
        title={whatWeCreate.title}
        accentTitle={whatWeCreate.accentTitle}
        description={whatWeCreate.description}
        items={[...whatWeCreate.items]}
      />
      {/* 3. Content with purpose — design/video-motion PowerOfMotion (software framework timeline) */}
      <InfluencerContentPurposeSection
        eyebrow={contentWithPurpose.eyebrow}
        titleBefore={contentWithPurpose.titleBefore}
        titleAccent={contentWithPurpose.titleAccent}
        description={contentWithPurpose.description}
        steps={[...contentWithPurpose.steps]}
        image={contentWithPurpose.image}
      />
      {/* 4. Creative process — wowmarketing MarketingProcessSection */}
      <InfluencerCreativeProcessSection
        eyebrow={creativeProcess.eyebrow}
        title={creativeProcess.title}
        description={creativeProcess.description}
        steps={[...creativeProcess.steps]}
        showCta={creativeProcess.showCta}
      />
      {/* 5. Toolkit — accelerate AutomationTools (CreativeToolkit) */}
      <InfluencerDesignToolkitSection
        eyebrow={designToolkit.eyebrow}
        headline={designToolkit.headline}
        description={designToolkit.description}
        tools={[...designToolkit.tools]}
      />
      {/* 6. Our work — Home-20 PortfolioV6 */}
      <InfluencerSocialWorkSection
        eyebrow={ourWork.eyebrow}
        titleBefore={ourWork.titleBefore}
        titleAccent={ourWork.titleAccent}
        description={ourWork.description}
        projects={[...ourWork.projects]}
        viewMoreHref={ourWork.viewMoreHref}
        viewMoreLabel={ourWork.viewMoreLabel}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
