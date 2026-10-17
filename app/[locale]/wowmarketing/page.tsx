import dynamic from 'next/dynamic'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiDivisions, mapStrapiPartnerLogos } from '@/lib/strapi/mappers/superagency'
import { localizedAlternates } from '@/lib/seo/localized-alternates'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MarketingHero from './_components/MarketingHero'
import MarketingPlatformsIntro from './_components/MarketingPlatformsIntro'
import { MARKETING_CTA, MARKETING_FAQS } from './_components/marketing-content'


const MarketingHoldbackSection = dynamic(() => import('./_components/MarketingHoldbackSection'))
const MarketingApproachGrid = dynamic(() => import('./_components/MarketingApproachGrid'))
const MarketingServicesGrid = dynamic(() => import('./_components/MarketingServicesGrid'))
const MarketingFrameworkSection = dynamic(() => import('./_components/MarketingFrameworkSection'))
const MarketingProcessSection = dynamic(() => import('./_components/MarketingProcessSection'))
const MarketingGrowthPartnerSection = dynamic(() => import('./_components/MarketingGrowthPartnerSection'))
const MarketingIndustriesCarousel = dynamic(() => import('./_components/MarketingIndustriesCarousel'))
const DevisionOverview = dynamic(() => import('@/components/wow/LandascapComponets/DevisionOverview'))
const Faq = dynamic(() => import('@/components/wow/LandascapComponets/Faq'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'WOW Marketing | WOW Superagency',
    description:
      'Data-driven marketing, SEO, paid ads, and automation that help small businesses attract customers and grow revenue.',
    alternates: localizedAlternates(locale, '/marketing'),
  }
}

export default async function WowMarketingPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const cms = await getSuperagencyHomepage(typedLocale)
  const divisions = mapStrapiDivisions(cms.divisions)
  const partnerLogos = mapStrapiPartnerLogos(cms.partnerLogos)

  return (
    <div className="flex flex-col gap-12 bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <MarketingHero />
      <MarketingPlatformsIntro logos={partnerLogos ?? undefined} />
      <MarketingHoldbackSection />
      <MarketingApproachGrid />
      <MarketingServicesGrid />
      <MarketingFrameworkSection />
      <MarketingProcessSection />
      <MarketingGrowthPartnerSection />
      <MarketingIndustriesCarousel />
      <DevisionOverview divisions={divisions ?? undefined} />
      <Faq faqs={[...MARKETING_FAQS]} />
      <div className="mb-3">
        <WowGrowthCta
          accentText={MARKETING_CTA.accentText}
          mainText={MARKETING_CTA.mainText}
          ariaLabel={MARKETING_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
