import { CONTENT, SOCIAL_PAGE_METADATA } from './_content/page-content'
import SocialCommunityHero from './_components/SocialCommunityHero'
import SocialProcess from './_components/SocialProcess'
import SocialCapabilities from './_components/SocialCapabilities'
import PlatformPresence from './_components/PlatformPresence'
import BuildCommunity from './_components/BuildCommunity'
import SocialGallery from './_components/SocialGallery'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: SOCIAL_PAGE_METADATA.title,
    description: SOCIAL_PAGE_METADATA.description,
    openGraph: {
      title: SOCIAL_PAGE_METADATA.title,
      description: SOCIAL_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/services/social-media-marketing`,
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const {
    hero,
    socialProcess,
    socialCapabilities,
    platformPresence,
    buildCommunity,
    socialGallery,
    startupPackageImage,
    cta,
  } = CONTENT

  const { primaryCtaLabel, ...heroProps } = hero

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SocialCommunityHero {...heroProps} primaryCtaLabel={primaryCtaLabel} />
      <SocialProcess {...socialProcess} />
      <SocialCapabilities {...socialCapabilities} />
      <PlatformPresence image={startupPackageImage} {...platformPresence} />
      <BuildCommunity {...buildCommunity} />
      <SocialGallery {...socialGallery} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
