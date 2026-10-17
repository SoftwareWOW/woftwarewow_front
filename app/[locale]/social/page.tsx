import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import SocialHero from '@/components/wow/wowsocial/SocialHero'
import type { Locale } from '@/i18n/config'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'



import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/social',
    'WOW Social | Social Media Strategy & Community Growth',
    'Create social strategies, ads, and influencer campaigns that convert engagement into sales.',
  )
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
