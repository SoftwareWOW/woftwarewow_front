import { CONTENT } from './_content/page-content'
import BrandAuthorityHero from './_components/BrandAuthorityHero'
import AuthorityFoundation from './_components/AuthorityFoundation'
import WhatsIncluded from './_components/WhatsIncluded'
import AuthorityJourney from './_components/AuthorityJourney'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'content-marketing', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <BrandAuthorityHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <AuthorityFoundation {...CONTENT.authorityFoundation} />
      <WhatsIncluded {...CONTENT.whatsIncluded} />
      <AuthorityJourney {...CONTENT.authorityJourney} />
      <SpecialistExpertise {...CONTENT.specialistExpertisePackage} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
