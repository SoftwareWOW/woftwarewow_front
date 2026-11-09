import {
  CONTENT,
  CUSTOMER_RETENTION_PAGE_METADATA,
} from './_content/page-content'
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
    title: CUSTOMER_RETENTION_PAGE_METADATA.title,
    description: CUSTOMER_RETENTION_PAGE_METADATA.description,
    openGraph: {
      title: CUSTOMER_RETENTION_PAGE_METADATA.title,
      description: CUSTOMER_RETENTION_PAGE_METADATA.description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/marketing/solutions/customer-retention-engagement`,
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

  const {
    primaryCtaLabel,
    secondaryCtaLabel,
    primaryCtaHref,
    secondaryCtaHref,
    ...heroProps
  } = hero
  const { ctaLabel: capabilitiesCtaLabel, titleSuffix: capabilitiesTitleSuffix, ...capabilitiesProps } =
    socialCapabilities
  const { titleSuffix: platformTitleSuffix, ...platformProps } = platformPresence
  const { ctaLabel: communityCtaLabel, ...buildCommunityProps } = buildCommunity

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SocialCommunityHero
        {...heroProps}
        primaryCtaLabel={primaryCtaLabel}
        secondaryCtaLabel={secondaryCtaLabel}
        primaryCtaHref={primaryCtaHref}
        secondaryCtaHref={secondaryCtaHref}
      />
      <SocialProcess {...socialProcess} />
      <SocialCapabilities
        {...capabilitiesProps}
        titleSuffix={capabilitiesTitleSuffix}
        ctaLabel={capabilitiesCtaLabel}
      />
      <PlatformPresence
        image={startupPackageImage}
        {...platformProps}
        titleSuffix={platformTitleSuffix}
      />
      <BuildCommunity {...buildCommunityProps} ctaLabel={communityCtaLabel} />
      <SocialGallery {...socialGallery} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
