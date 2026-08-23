import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import BrandKitHero from './_components/BrandKitHero'
import BrandKitLogos from './_components/BrandKitLogos'
import BrandSystem from './_components/BrandSystem'
import BrandUsageGuidelines from './_components/BrandUsageGuidelines'
import BrandVisualStyle from './_components/BrandVisualStyle'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Brand Kit | WOW Superagency',
    description:
      'Access official logos, colors, typography, and brand resources for approved WOW Superagency communications.',
    keywords: ['brand kit', 'logos', 'brand assets', 'WOW Superagency'],
    openGraph: {
      title: 'Brand Kit | WOW Superagency',
      description:
        'Access official logos, colors, typography, and brand resources for approved WOW Superagency communications.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/brandkit`,
    },
  }
}

export default async function BrandKitPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <BrandKitHero />
        <BrandKitLogos />
        <BrandSystem />
        <BrandVisualStyle />
        <BrandUsageGuidelines />
        <WowGrowthCta
          accentText="Need something"
          mainText="not included here?"
          ariaLabel="Contact WOW Superagency about brand assets"
        />
      </div>
    </LayoutOne>
  )
}
