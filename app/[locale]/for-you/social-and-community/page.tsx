import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 5. Build Community — SoftwareWOW WoWProces
import BuildCommunity from './_components/BuildCommunity'
// 4. Platform Presence — Home-14 / WowProcess tab pattern
import PlatformPresence from './_components/PlatformPresence'
// 3. Social Capabilities — Home-13 ServicesV12
import SocialCapabilities from './_components/SocialCapabilities'
// 1. Hero — Home-24 HeroV24
import SocialCommunityHero from './_components/SocialCommunityHero'
// 6. Gallery — Home-11 InstagramGallery
import SocialGallery from './_components/SocialGallery'
// 2. Process — Home-07 ProcessV4
import SocialProcess from './_components/SocialProcess'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Social & Community | WOW Superagency',
    description:
      'Build engagement and strong online communities — strategy, content, paid social, influencers and analytics that turn attention into lasting relationships.',
    keywords: [
      'social and community',
      'social media',
      'community management',
      'paid social',
      'influencer marketing',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Social & Community | WOW Superagency',
      description:
        'Everything behind a stronger social presence — from deciding what to say to getting it in front of the right people.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/social-and-community`,
    },
  }
}

export default async function SocialAndCommunityPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-24 HeroV24 */}
        <SocialCommunityHero />
        {/* 2. Process — Home-07 ProcessV4 */}
        <SocialProcess />
        {/* 3. Social Capabilities — Home-13 ServicesV12 */}
        <SocialCapabilities />
        {/* 4. Platform Presence — interactive platforms */}
        <PlatformPresence />
        {/* 5. Build Community — SoftwareWOW WoWProces */}
        <BuildCommunity />
        {/* 6. Gallery — Home-11 InstagramGallery */}
        <SocialGallery />
        {/* 7. Ready to grow community — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to grow your"
          mainText="community?"
          ariaLabel="Talk to a Social Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
