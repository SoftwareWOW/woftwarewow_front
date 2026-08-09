import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 6. Built for Mutual Growth — Home-25 WhatWeOffer
import MutualGrowth from './_components/MutualGrowth'
// 3. Technology & Platform Partners — Home-16 ServicesV14
import PartnerCategories from './_components/PartnerCategories'
// 2. Our Partner Ecosystem — Home-03 Clients (dual marquee)
import PartnerEcosystem from './_components/PartnerEcosystem'
// 1. Hero — Better Together — Home-20 HeroV20
import PartnersHero from './_components/PartnersHero'
// 5. Ways to Partner With WOW — Home-15 ElevateBrand
import WaysToPartner from './_components/WaysToPartner'
// 4. Why We Partner — Home-23 WhyChooseUsV7
import WhyWePartner from './_components/WhyWePartner'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Partners | WOW Superagency',
    description:
      'Trusted collaborators across technology, platforms, and industry — explore the WOW partner ecosystem and become a partner.',
    keywords: [
      'WOW partners',
      'technology partners',
      'agency partners',
      'referral partners',
      'strategic partners',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Partners | WOW Superagency',
      description:
        'We partner with trusted technology, platform, and industry leaders to deliver better solutions for growing businesses.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about/partners`,
    },
  }
}

export default async function PartnersPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Better Together — Home-20 HeroV20 */}
        <PartnersHero />
        {/* 2. Our Partner Ecosystem — Home-03 Clients (dual marquee) */}
        <PartnerEcosystem />
        {/* 3. Technology & Platform Partners — Home-13 WhyChooseUsV2 */}
        <PartnerCategories />
        {/* 4. Why We Partner — Home-23 WhyChooseUsV7 */}
        <WhyWePartner />
        {/* 5. Ways to Partner With WOW — Home-15 ElevateBrand */}
        <WaysToPartner />
        {/* 6. Built for Mutual Growth — Home-25 WhatWeOffer */}
        <MutualGrowth />
        {/* 7. Become a WOW Partner — WowGrowthCta */}
        <WowGrowthCta
          accentText="Interested in partnering"
          mainText="with us?"
          ariaLabel="Become a WOW Partner — contact our team"
        />
      </div>
    </LayoutOne>
  )
}
