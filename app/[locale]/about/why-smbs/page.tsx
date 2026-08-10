import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 7. Built to Grow — Home-16 ProcessV8
import BuiltToGrow from './_components/BuiltToGrow'
// 5. Elevate — Home-15 ElevateBrand
import ElevateSmb from './_components/ElevateSmb'
// 2. Gallery — Home-11 InstagramGallery
import SmbGallery from './_components/SmbGallery'
// 4. The Gap — Home-23 PricingV5
import TheGap from './_components/TheGap'
// 3. The Reality — Home-18 ServicesV15
import TheReality from './_components/TheReality'
// 6. Why a Superagency — Home-20 MarqueeV4
import WhySuperagency from './_components/WhySuperagency'
// 1. Hero — IndustriesHero
import WhySmbsHero from './_components/WhySmbsHero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Why SMBs | WOW Superagency',
    description:
      'Why WOW focuses on growing SMBs — practical expertise across technology, marketing, AI, and systems designed for businesses that need to move fast without building everything in-house.',
    keywords: [
      'why SMBs',
      'SMB growth',
      'small business agency',
      'superagency for SMBs',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Why SMBs | WOW Superagency',
      description:
        'Running a small business has never felt this complex. WOW helps growing SMBs align technology, marketing, AI, and sales under one partner.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/about/why-smbs`,
    },
  }
}

export default async function WhySmbsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — IndustriesHero */}
        <WhySmbsHero />
        {/* 2. Gallery — Home-11 InstagramGallery */}
        <SmbGallery />
        {/* 3. The Reality — Home-18 ServicesV15 */}
        <TheReality />
        {/* 4. The Gap — Home-23 PricingV5 */}
        <TheGap />
        {/* 5. Elevate — Home-15 ElevateBrand */}
        <ElevateSmb />
        {/* 6. Why a Superagency — Home-20 MarqueeV4 */}
        <WhySuperagency />
        {/* 7. Built to Grow — Home-16 ProcessV8 */}
        <BuiltToGrow />
        {/* 8. Ready to grow — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to grow"
          mainText="with WOW?"
          ariaLabel="Talk to an Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
