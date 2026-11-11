import WhatWeCreateSection from './_components/WhatWeCreateSection'
import PowerOfMotionSection from './_components/PowerOfMotionSection'
import CreativeToolkit from './_components/CreativeToolkit'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandIdentityHero from '../brand-identity-strategy/_components/BrandIdentityHero'
import BrandIdentityWorkSection from '../brand-identity-strategy/_components/BrandIdentityWorkSection'
import CreativeProcessSection from '../brand-identity-strategy/_components/CreativeProcessSection'
import { CONTENT, VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA.title,
    description: VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA.description,
    openGraph: {
      title: VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA.title,
      description: VIDEO_MOTION_CREATIVE_CONTENT_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/design/services/video-motion-creative-content`,
    },
  }
}

export default async function VideoMotionCreativeContentPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    whatWeCreate,
    powerOfMotion,
    creativeProcess,
    creativeToolkit,
    ourWork,
    cta,
  } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design DesignHero (centered) */}
      <BrandIdentityHero {...hero} />
      {/* 2. What we create — websites WebsitesPortfolioSection */}
      <WhatWeCreateSection
        eyebrow={whatWeCreate.eyebrow}
        title={whatWeCreate.title}
        accentTitle={whatWeCreate.accentTitle}
        description={whatWeCreate.description}
        items={[...whatWeCreate.items]}
      />
      {/* 3. Power of motion — software SoftwareWowFrameworkSection */}
      <PowerOfMotionSection
        eyebrow={powerOfMotion.eyebrow}
        titleBefore={powerOfMotion.titleBefore}
        titleAccent={powerOfMotion.titleAccent}
        description={powerOfMotion.description}
        steps={[...powerOfMotion.steps]}
        image={powerOfMotion.image}
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
