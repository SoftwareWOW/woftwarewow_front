import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/wow/LandascapComponets/Marquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. Built for Business — ElevateBrandV2 / SalesJourneyGap
import BuiltForBusiness from './_components/BuiltForBusiness'
// 2. Digital Foundations — BrandCapabilities / WhyChooseUs
import DigitalFoundations from './_components/DigitalFoundations'
// 1. Hero — Home-19 HeroV19
import HostingInfraHero from './_components/HostingInfraHero'
// 6. Hosting That Fits — PricingV4
import HostingThatFits from './_components/HostingThatFits'
// 3. Infrastructure Solutions — RevenueCapabilities flip cards
import InfrastructureSolutions from './_components/InfrastructureSolutions'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Hosting & Infrastructure | WOW Superagency',
    description:
      'Reliable hosting, domains, business email and infrastructure designed to keep your digital operations fast, secure and accessible.',
    keywords: [
      'hosting and infrastructure',
      'website hosting',
      'VPS hosting',
      'domains',
      'business email',
      'cloud storage',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Hosting & Infrastructure | WOW Superagency',
      description:
        'Keep your business online and ready — hosting, domains, email and infrastructure managed in one place.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/hosting-and-infrastructure`,
    },
  }
}

export default async function HostingAndInfrastructurePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-19 HeroV19 */}
        <HostingInfraHero />
        {/* 2. Digital Foundations — BrandCapabilities */}
        <DigitalFoundations />
        {/* 3. Infrastructure Solutions — RevenueCapabilities */}
        <InfrastructureSolutions />
        {/* 4. Built for Business — ElevateBrandV2 */}
        <BuiltForBusiness />
        {/* 5. Trusted logos — shared Marquee */}
        <Marquee />
        {/* 6. Hosting That Fits — PricingV4 */}
        <HostingThatFits />
        {/* 7. Ready to secure — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to secure your"
          mainText="infrastructure?"
          ariaLabel="Talk to a Hosting Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
