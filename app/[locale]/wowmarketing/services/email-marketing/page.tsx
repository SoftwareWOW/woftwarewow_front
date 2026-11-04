import { CONTENT } from './_content/page-content'
import SocialCommunityHero from './_components/SocialCommunityHero'
import SocialProcess from './_components/SocialProcess'
import SocialCapabilities from './_components/SocialCapabilities'
import PlatformPresence from './_components/PlatformPresence'
import BuildCommunity from './_components/BuildCommunity'
import SocialGallery from './_components/SocialGallery'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'email-marketing', 'service')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta, startupPackageImage } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SocialCommunityHero {...CONTENT.hero} />
      <SocialProcess {...CONTENT.socialProcess} />
      <SocialCapabilities {...CONTENT.socialCapabilities} />
      <PlatformPresence image={startupPackageImage} {...CONTENT.platformPresence} />
      <BuildCommunity {...CONTENT.buildCommunity} />
      <SocialGallery {...CONTENT.socialGallery} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
