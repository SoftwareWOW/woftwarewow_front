import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BusinessCriticalOperations from './_components/BusinessCriticalOperations'
import ConnectedExpertise from './_components/ConnectedExpertise'
import EnterpriseInfrastructureHero from './_components/EnterpriseInfrastructureHero'
import InfrastructureJourney from './_components/InfrastructureJourney'
import WhatsIncluded from './_components/WhatsIncluded'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Enterprise Infrastructure Package | WOW Superagency',
    description: 'For companies needing secure digital infrastructure.',
    keywords: [
      'enterprise infrastructure package',
      'VPS hosting',
      'cloud infrastructure',
      'business hosting',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Enterprise Infrastructure Package | WOW Superagency',
      description: 'For companies needing secure digital infrastructure.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/enterprise-infrastructure`,
    },
  }
}

export default async function EnterpriseInfrastructurePackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Infrastructure Built to Scale — Home-13 HeroV13 */}
        <EnterpriseInfrastructureHero />
        {/* 2. Built for Business-Critical Operations — Home-16 WhyChooseUsV5 */}
        <BusinessCriticalOperations />
        {/* 3. What’s Included — Home-18 ServicesV15 */}
        <WhatsIncluded />
        {/* 4. Your Infrastructure Journey — Home-11 ProcessV6 */}
        <InfrastructureJourney />
        {/* 5. One Package. Connected Expertise. — Home-11 ServicesV10 */}
        <ConnectedExpertise />
        {/* 6. Ready to Strengthen Your Infrastructure? */}
        <WowGrowthCta
          accentText="Build a stronger"
          mainText="foundation for growth."
          ariaLabel="Start the Enterprise Infrastructure Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
