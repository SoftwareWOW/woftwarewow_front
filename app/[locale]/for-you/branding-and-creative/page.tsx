import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
// 3. Brand Capabilities — Home-12 WhyChooseUs
import BrandCapabilities from './_components/BrandCapabilities'
// 1. Hero — Home-04 HeroV11
import BrandingCreativeHero from './_components/BrandingCreativeHero'
// 6. Brand Visibility — SalesVisibility / BrandingProcess
import BrandVisibility from './_components/BrandVisibility'
// 4. Built to Be Used — 6-card grid
import BuiltToBeUsed from './_components/BuiltToBeUsed'
// 2. Our Capabilities — Home-16 ServicesV14
import OurCapabilities from './_components/OurCapabilities'
// 5. Our Tools — Home-06 ClientV4 pattern
import OurTools from './_components/OurTools'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Branding & Creative | WOW Superagency',
    description:
      'Turn what makes your business different into a clear, distinctive brand—with the strategy, identity and creative assets to show up consistently.',
    keywords: [
      'branding and creative',
      'brand strategy',
      'visual identity',
      'brand guidelines',
      'creative design',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Branding & Creative | WOW Superagency',
      description:
        'Build a brand people remember — strategy, identity and creative systems your business can actually use.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/for-you/branding-and-creative`,
    },
  }
}

export default async function BrandingAndCreativePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1. Hero — Home-04 HeroV11 */}
        <BrandingCreativeHero />
        {/* 2. Our Capabilities — Home-16 ServicesV14 */}
        <OurCapabilities />
        {/* 3. Brand Capabilities — Home-12 WhyChooseUs */}
        <BrandCapabilities />
        {/* 4. Built to Be Used — 6-card grid */}
        <BuiltToBeUsed />
        {/* 5. Our Tools — Home-06 ClientV4 */}
        <OurTools />
        {/* 6. Brand Visibility — SalesVisibility */}
        <BrandVisibility />
        {/* 7. Ready to brand — WowGrowthCta */}
        <WowGrowthCta
          accentText="Ready to build your"
          mainText="brand?"
          ariaLabel="Talk to a Branding Expert at WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
