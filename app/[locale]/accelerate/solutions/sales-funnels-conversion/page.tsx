import { CONTENT } from './_content/page-content'
import BusinessGrowthHero from './_components/BusinessGrowthHero'
import BuiltForGrowth from './_components/BuiltForGrowth'
import GrowthPieces from './_components/GrowthPieces'
import ConnectedGrowth from './_components/ConnectedGrowth'
import HowItWorks from './_components/HowItWorks'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'sales-funnels-conversion', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BusinessGrowthHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <BuiltForGrowth {...CONTENT.builtForGrowth} />
      <GrowthPieces {...CONTENT.growthPieces} />
      <ConnectedGrowth {...CONTENT.connectedGrowth} />
      <HowItWorks {...CONTENT.howItWorks} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
