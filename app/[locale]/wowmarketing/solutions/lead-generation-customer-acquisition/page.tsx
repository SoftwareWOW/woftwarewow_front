import { CONTENT } from './_content/page-content'
import SalesAccelerationHero from './_components/SalesAccelerationHero'
import SalesGaps from './_components/SalesGaps'
import WhatsIncluded from './_components/WhatsIncluded'
import AccelerationJourney from './_components/AccelerationJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'lead-generation-customer-acquisition', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SalesAccelerationHero {...CONTENT.hero} />
      <SalesGaps {...CONTENT.salesGaps} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <AccelerationJourney {...CONTENT.accelerationJourney} />
      <ConnectedExpertise {...CONTENT.connectedExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
