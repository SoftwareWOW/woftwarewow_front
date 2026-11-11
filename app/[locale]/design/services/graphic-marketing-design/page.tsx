import AiAndAutomationGallery from '@/app/[locale]/for-you/ai-and-automation/_components/AiGallery'
import SocialGallery from '@/app/[locale]/for-you/social-and-community/_components/SocialGallery'
import SalesVisibility from '@/app/[locale]/wowmarketing/services/pay-per-click-advertising/_components/SalesVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandIdentityHero from '../brand-identity-strategy/_components/BrandIdentityHero'
import BrandIdentityWorkSection from '../brand-identity-strategy/_components/BrandIdentityWorkSection'
import CreativeProcessSection from '../brand-identity-strategy/_components/CreativeProcessSection'
import CreativeToolkit from '../brand-identity-strategy/_components/CreativeToolkit'
import WhatWeCreate from '../brand-identity-strategy/_components/WhatWeCreate'
import { CONTENT, GRAPHIC_MARKETING_DESIGN_PAGE_METADATA } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: GRAPHIC_MARKETING_DESIGN_PAGE_METADATA.title,
    description: GRAPHIC_MARKETING_DESIGN_PAGE_METADATA.description,
    openGraph: {
      title: GRAPHIC_MARKETING_DESIGN_PAGE_METADATA.title,
      description: GRAPHIC_MARKETING_DESIGN_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/design/services/graphic-marketing-design`,
    },
  }
}

export default async function GraphicMarketingDesignPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    creativeGallery,
    whatWeCreate,
    designImpact,
    designShowcaseGallery,
    creativeProcess,
    creativeToolkit,
    ourWork,
    cta,
  } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      {/* 1. Hero — design DesignHero (centered) */}
      <BrandIdentityHero {...hero} />
      {/* 2. Gallery — Home-11 InstagramGallery (social WOW Social section 5 SocialGallery) */}
      <SocialGallery images={[...creativeGallery.images]} />
      {/* 3. What we create — Home-02 ProcessV2 */}
      <WhatWeCreate {...whatWeCreate} />
      {/* 4. Impact — Home-15 BrandingProcess (PPC SalesVisibility) */}
      <SalesVisibility {...designImpact} steps={[...designImpact.steps]} />
      {/* 5. Gallery — Home-13 AboutHoverImages (for-you/ai-and-automation section 3 AiGallery) */}
      <AiAndAutomationGallery images={[...designShowcaseGallery.images]} />
      {/* 6. Process — wowmarketing MarketingProcessSection */}
      <CreativeProcessSection {...creativeProcess} />
      {/* 7. Toolkit — accelerate AutomationTools (OurTools grid) */}
      <CreativeToolkit {...creativeToolkit} />
      {/* 8. Our work — wowmarketing MarketingPortfolioSection */}
      <BrandIdentityWorkSection {...ourWork} />
      {/* 9. General CTA — WowGrowthCta */}
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
