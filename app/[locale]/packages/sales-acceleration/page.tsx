import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import AccelerationJourney from './_components/AccelerationJourney'
import ConnectedExpertise from './_components/ConnectedExpertise'
import SalesAccelerationHero from './_components/SalesAccelerationHero'
import SalesGaps from './_components/SalesGaps'
import WhatsIncluded from './_components/WhatsIncluded'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Sales Acceleration Package | WOW Superagency',
    description: 'Systems to increase sales velocity and close more deals.',
    keywords: [
      'sales acceleration package',
      'sales funnels',
      'CRM workflows',
      'lead generation',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Sales Acceleration Package | WOW Superagency',
      description: 'Systems to increase sales velocity and close more deals.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/sales-acceleration`,
    },
  }
}

export default async function SalesAccelerationPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Opportunities Into Revenue — Home-18 HeroV18 */}
        <SalesAccelerationHero />
        {/* 2. Fix the Gaps in Your Sales Engine — AiWithPurpose */}
        <SalesGaps />
        {/* 3. What’s Included — SolutionToChallenges */}
        <WhatsIncluded />
        {/* 4. Your Acceleration Journey — Home-07 ProcessV4 */}
        <AccelerationJourney />
        {/* 5. One Package. Connected Expertise. — Home-19 ElevateBrandV2 */}
        <ConnectedExpertise />
        {/* 6. Ready to Accelerate Sales? */}
        <WowGrowthCta
          accentText="Ready to build a stronger"
          mainText="sales engine?"
          ariaLabel="Start the Sales Acceleration Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
