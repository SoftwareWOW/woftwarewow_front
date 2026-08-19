import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import HowWePartner from './_components/HowWePartner'
import PartnerNetwork from './_components/PartnerNetwork'
import PartnersHero from './_components/PartnersHero'
import WhyPartnerWithWow from './_components/WhyPartnerWithWow'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Partners | WOW Superagency',
    description:
      'Explore the WOW partner ecosystem — trusted technology, platform, and industry collaborators building stronger solutions for growing businesses.',
    keywords: [
      'WOW partners',
      'partner network',
      'technology partners',
      'referral partners',
      'strategic partners',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Partners | WOW Superagency',
      description:
        'Explore the WOW partner ecosystem — trusted technology, platform, and industry collaborators building stronger solutions for growing businesses.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/partners`,
    },
  }
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-06 HeroV6 / FinanceHero */}
        <PartnersHero />
        {/* 2. Our Partner Network — Home-21 ClientsV4 categorized grids */}
        <PartnerNetwork />
        {/* 3. How We Partner — Home-02 ProcessV2 */}
        <HowWePartner />
        {/* 4. Why Partner With WOW — Home-12 WhyChooseUs */}
        <WhyPartnerWithWow />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Partner?"
          ariaLabel="Become a WOW Partner — contact our team"
        />
      </div>
    </LayoutOne>
  )
}
