import { CONTENT, CRM_SALES_SYSTEMS_PAGE_METADATA } from './_content/page-content'
import SoftwareTechHero from './_components/SoftwareTechHero'
import WhatWeBuild from './_components/WhatWeBuild'
import BuiltForTheFit from './_components/BuiltForTheFit'
import TechLaunchPath from './_components/TechLaunchPath'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: CRM_SALES_SYSTEMS_PAGE_METADATA.title,
    description: CRM_SALES_SYSTEMS_PAGE_METADATA.description,
    openGraph: {
      title: CRM_SALES_SYSTEMS_PAGE_METADATA.title,
      description: CRM_SALES_SYSTEMS_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/accelerate/solutions/crm-sales-systems`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const { cta, hero, whatWeBuild, builtForTheFit, techLaunchPath } = CONTENT
  const { primaryCtaLabel, primaryCtaHref, images, ...heroProps } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SoftwareTechHero
        {...heroProps}
        images={images}
        primaryCtaLabel={primaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
      />
      <WhatWeBuild {...whatWeBuild} />
      <BuiltForTheFit {...builtForTheFit} />
      <TechLaunchPath {...techLaunchPath} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
