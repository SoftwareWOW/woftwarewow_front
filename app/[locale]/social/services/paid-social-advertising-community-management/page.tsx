import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import PaidSocialBeyondClickSection from './_components/PaidSocialBeyondClickSection'
import PaidSocialCampaignProcessSection from './_components/PaidSocialCampaignProcessSection'
import PaidSocialHero from './_components/PaidSocialHero'
import PaidSocialWhatWeManageSection from './_components/PaidSocialWhatWeManageSection'
import PaidSocialWorkSection from './_components/PaidSocialWorkSection'
import {
  CONTENT,
  PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA,
} from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA.title,
    description: PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA.description,
    openGraph: {
      title: PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA.title,
      description: PAID_SOCIAL_ADVERTISING_COMMUNITY_MANAGEMENT_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/social/services/paid-social-advertising-community-management`,
    },
  }
}

export default async function PaidSocialAdvertisingCommunityManagementPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeManage, beyondTheClick, campaignProcess, ourWork, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — Home-15 HeroV15 (EducationHero) */}
      <PaidSocialHero
        title={hero.title}
        italicTitle={hero.italicTitle}
        description={hero.description}
        images={[...hero.images]}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        marqueeText={hero.marqueeText}
        headingId={hero.headingId}
      />
      {/* 2. What we manage — Home-24 ServicesV16 */}
      <PaidSocialWhatWeManageSection
        eyebrow={whatWeManage.eyebrow}
        title={whatWeManage.title}
        accentTitle={whatWeManage.accentTitle}
        description={whatWeManage.description}
        capabilityCards={[...whatWeManage.capabilityCards]}
      />
      {/* 3. Beyond the click — software SoftwareWowFrameworkSection */}
      <PaidSocialBeyondClickSection
        eyebrow={beyondTheClick.eyebrow}
        titleBefore={beyondTheClick.titleBefore}
        titleAccent={beyondTheClick.titleAccent}
        description={beyondTheClick.description}
        steps={[...beyondTheClick.steps]}
        image={beyondTheClick.image}
      />
      {/* 4. Campaign process — wowmarketing MarketingProcessSection */}
      <PaidSocialCampaignProcessSection
        eyebrow={campaignProcess.eyebrow}
        title={campaignProcess.title}
        description={campaignProcess.description}
        steps={[...campaignProcess.steps]}
        showCta={campaignProcess.showCta}
      />
      {/* 5. Our work — wowmarketing MarketingPortfolioSection */}
      <PaidSocialWorkSection
        eyebrow={ourWork.eyebrow}
        title={ourWork.title}
        titleAccent={ourWork.titleAccent}
        description={ourWork.description}
        ctaLabel={ourWork.ctaLabel}
        ctaHref={ourWork.ctaHref}
        projects={[...ourWork.projects]}
      />
      {/* 6. CTA — WowGrowthCta */}
      <WowGrowthCta
        accentText={cta.accentText}
        mainText={cta.mainText}
        ariaLabel={cta.ariaLabel}
        sectionClassName="!pb-0"
      />
    </div>
  )
}
