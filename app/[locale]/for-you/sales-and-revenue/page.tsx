import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 4. From Lead to Customer — Home-19 ProcessV10
import LeadToCustomer from './_components/LeadToCustomer'
// 3. Revenue Capabilities — Home-24 ServicesV16 bento
import RevenueCapabilities from './_components/RevenueCapabilities'
// 1. Hero — Home-25 HeroV25
import SalesRevenueHero from './_components/SalesRevenueHero'
// 5. Sales Visibility — Home-15 BrandingProcess
import SalesVisibility from './_components/SalesVisibility'
// 2. Find the Gap — Home-19 ElevateBrandV2
import SalesJourneyGap from './_components/SalesJourneyGap'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Sales & Revenue | WOW Superagency',
    description:
      'Turn more opportunities into revenue — lead generation, CRM, sales automation, outbound and conversion systems designed to help your team sell more effectively.',
    keywords: [
      'sales and revenue',
      'CRM',
      'lead generation',
      'sales automation',
      'conversion optimization',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Sales & Revenue | WOW Superagency',
      description:
        'Build a stronger sales engine with better lead generation, funnels, CRM workflows and automation.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/sales-and-revenue`,
    },
  }
}

export default async function SalesAndRevenuePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-25 HeroV25 */}
        <SalesRevenueHero />
        {/* 2. Find the Gap — Home-19 ElevateBrandV2 */}
        <SalesJourneyGap />
        {/* 3. Revenue Capabilities — Home-24 bento */}
        <RevenueCapabilities />
        {/* 4. From Lead to Customer — Home-19 ProcessV10 */}
        <LeadToCustomer />
        {/* 5. Sales Visibility — Home-15 BrandingProcess */}
        <SalesVisibility />
        {/* 6. Ready to accelerate sales — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to accelerate"
          mainText="sales?"
          ariaLabel="Accelerate your sales at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
