import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AffiliateBenefits from './_components/AffiliateBenefits'
import AffiliateHero from './_components/AffiliateHero'
import AffiliateJourney from './_components/AffiliateJourney'
import PartnerPaths from './_components/PartnerPaths'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Affiliate & Referral | WOW Superagency',
    description:
      'Refer businesses to WOW, create new opportunities, and earn rewards when those introductions turn into successful projects.',
    keywords: ['affiliate', 'referral', 'partner program', 'WOW Superagency'],
    openGraph: {
      title: 'Affiliate & Referral | WOW Superagency',
      description:
        'Refer businesses to WOW, create new opportunities, and earn rewards when those introductions turn into successful projects.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/affiliate`,
    },
  }
}

export default async function AffiliatePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <AffiliateHero />
        <PartnerPaths />
        <AffiliateJourney />
        <AffiliateBenefits />
        <WowGrowthCta
          accentText="Know Someone"
          mainText="We Should Meet?"
          ariaLabel="Refer someone to WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
