import { CONTENT } from './_content/page-content'
import WebsiteGrowthHero from './_components/WebsiteGrowthHero'
import BuiltToPerform from './_components/BuiltToPerform'
import WhatsIncluded from './_components/WhatsIncluded'
import WebsiteJourney from './_components/WebsiteJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'sales-funnel-development', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <WebsiteGrowthHero {...CONTENT.hero} />
      <BuiltToPerform {...CONTENT.builtToPerform} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <WebsiteJourney {...CONTENT.websiteJourney} />
      <SpecialistExpertise {...CONTENT.specialistExpertise} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
