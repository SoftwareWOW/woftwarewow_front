import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BuiltToPerform from './_components/BuiltToPerform'
import SpecialistExpertise from './_components/SpecialistExpertise'
import WebsiteGrowthHero from './_components/WebsiteGrowthHero'
import WebsiteJourney from './_components/WebsiteJourney'
import WhatsIncluded from './_components/WhatsIncluded'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Website Growth Engine Package | WOW Superagency',
    description: 'A website designed to attract and convert.',
    keywords: [
      'website growth engine',
      'conversion-focused website',
      'SEO website',
      'performance website',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Website Growth Engine Package | WOW Superagency',
      description: 'A website designed to attract and convert.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/website-growth-engine`,
    },
  }
}

export default async function WebsiteGrowthEnginePackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Turn Your Website Into a Growth Engine — Home-04 HeroV11 */}
        <WebsiteGrowthHero />
        {/* 2. Built to Perform — Home-24 ServicesV16 */}
        <BuiltToPerform />
        {/* 3. What’s Included — Home-04 ServicesV5 */}
        <WhatsIncluded />
        {/* 4. Your Website Journey — LaunchPath / ServiceProces */}
        <WebsiteJourney />
        {/* 5. One Website. Specialist Expertise. — Home-16 ServicesV14 */}
        <SpecialistExpertise />
        {/* 6. Ready to Build Your Growth Engine? */}
        <WowGrowthCta
          accentText="Ready for a website"
          mainText="built to grow?"
          ariaLabel="Start the Website Growth Engine Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
