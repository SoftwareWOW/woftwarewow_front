import LearningEventsHero from '@/app/[locale]/for-you/learning-and-events/_components/LearningEventsHero'
import BuiltAroundPeople from '@/app/[locale]/softwarewow/services/product-design-prototyping/_components/BuiltAroundPeople'
import WhatWeDesign from '@/app/[locale]/softwarewow/services/product-design-prototyping/_components/WhatWeDesign'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandIdentityWorkSection from '../brand-identity-strategy/_components/BrandIdentityWorkSection'
import CreativeProcessSection from '../brand-identity-strategy/_components/CreativeProcessSection'
import CreativeToolkit from '../brand-identity-strategy/_components/CreativeToolkit'
import { CONTENT, UI_UX_DIGITAL_DESIGN_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: UI_UX_DIGITAL_DESIGN_PAGE_METADATA.title,
    description: UI_UX_DIGITAL_DESIGN_PAGE_METADATA.description,
    openGraph: {
      title: UI_UX_DIGITAL_DESIGN_PAGE_METADATA.title,
      description: UI_UX_DIGITAL_DESIGN_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/design/services/ui-ux-digital-design`,
    },
  }
}

export default async function UiUxDigitalDesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    whatWeDesign,
    designedAroundPeople,
    creativeProcess,
    creativeToolkit,
    ourWork,
    cta,
  } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-05 HeroV5 + WOW Social SocialOrbit */}
      <LearningEventsHero
        badgeTitle={hero.badgeTitle}
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        trustLineHighlight={hero.trustLineHighlight}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        visual={hero.visual}
        headingId={hero.headingId}
      />
      {/* 2. What we design — Home-16 ServicesV14 + ProcessV10 card row */}
      <WhatWeDesign
        eyebrow={whatWeDesign.eyebrow}
        titleBefore={whatWeDesign.titleBefore}
        titleAccent={whatWeDesign.titleAccent}
        description={whatWeDesign.description}
        areas={[...whatWeDesign.areas]}
        layout={whatWeDesign.layout}
        defaultActiveIndex={whatWeDesign.defaultActiveIndex}
        featureImage={whatWeDesign.featureImage}
      />
      {/* 3. Designed around people — Home-13 AboutHoverImages + WhyChooseUs borders */}
      <BuiltAroundPeople
        eyebrow={designedAroundPeople.eyebrow}
        titleBefore={designedAroundPeople.titleBefore}
        titleAccent={designedAroundPeople.titleAccent}
        description={designedAroundPeople.description}
        benefits={[...designedAroundPeople.benefits]}
        collageImage={designedAroundPeople.collageImage}
        showStageGallery={designedAroundPeople.showStageGallery}
        headerLayout={designedAroundPeople.headerLayout}
      />
      {/* 4. Process — wowmarketing MarketingProcessSection */}
      <CreativeProcessSection {...creativeProcess} steps={[...creativeProcess.steps]} />
      {/* 5. Toolkit — accelerate AutomationTools (CreativeToolkit) */}
      <CreativeToolkit {...creativeToolkit} tools={[...creativeToolkit.tools]} />
      {/* 6. Work — wowmarketing MarketingPortfolioSection */}
      <BrandIdentityWorkSection
        {...ourWork}
        title={ourWork.title}
        titleAccent={ourWork.titleAccent}
        projects={[...ourWork.projects]}
      />
      {/* 7. CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
