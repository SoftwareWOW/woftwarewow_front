import { CONTENT } from './_content/page-content'
import BrandingCreativeHero from './_components/BrandingCreativeHero'
import OurCapabilities from './_components/OurCapabilities'
import BrandCapabilities from './_components/BrandCapabilities'
import BuiltToBeUsed from './_components/BuiltToBeUsed'
import OurTools from './_components/OurTools'
import BrandVisibility from './_components/BrandVisibility'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'brand-awareness-visibility', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BrandingCreativeHero {...CONTENT.hero} />
      <OurCapabilities {...CONTENT.ourCapabilities} />
      <BrandCapabilities {...CONTENT.brandCapabilities} />
      <BuiltToBeUsed {...CONTENT.builtToBeUsed} />
      <OurTools {...CONTENT.ourTools} />
      <BrandVisibility {...CONTENT.brandVisibility} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
