import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandExperience from './_components/BrandExperience'
import BrandIdentityHero from './_components/BrandIdentityHero'
import BrandIdentityWorkSection from './_components/BrandIdentityWorkSection'
import CreativeProcessSection from './_components/CreativeProcessSection'
import CreativeToolkit from './_components/CreativeToolkit'
import WhatWeCreate from './_components/WhatWeCreate'
import { BRAND_IDENTITY_STRATEGY_PAGE_METADATA, CONTENT } from './_content/page-content'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: BRAND_IDENTITY_STRATEGY_PAGE_METADATA.title,
    description: BRAND_IDENTITY_STRATEGY_PAGE_METADATA.description,
    openGraph: {
      title: BRAND_IDENTITY_STRATEGY_PAGE_METADATA.title,
      description: BRAND_IDENTITY_STRATEGY_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/design/services/brand-identity-strategy`,
    },
  }
}

export default async function BrandIdentityStrategyPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { hero, whatWeCreate, brandExperience, creativeProcess, creativeToolkit, ourWork, cta } = CONTENT

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <BrandIdentityHero {...hero} />
      <WhatWeCreate {...whatWeCreate} />
      <BrandExperience {...brandExperience} />
      <CreativeProcessSection {...creativeProcess} />
      <CreativeToolkit {...creativeToolkit} />
      <BrandIdentityWorkSection {...ourWork} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
