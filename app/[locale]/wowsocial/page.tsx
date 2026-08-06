import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import SocialHero from '@/components/wow/wowsocial/SocialHero'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'WOW Social | Social Media Strategy & Community Growth',
    description:
      'Create social strategies, ads, and influencer campaigns that convert engagement into sales.',
    alternates: {
      canonical: `/${locale}/wowsocial`,
    },
  }
}

export default async function WowSocialPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <SocialHero />
         <Marquee />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
