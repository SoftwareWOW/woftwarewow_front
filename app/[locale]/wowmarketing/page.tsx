import DevisionOverview from '@/components/wow/LandascapComponets/DevisionOverview'
import Faq from '@/components/wow/LandascapComponets/Faq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiDivisions, mapStrapiPartnerLogos } from '@/lib/strapi/mappers/superagency'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import MarketingApproachGrid from './_components/MarketingApproachGrid'
import MarketingFrameworkSection from './_components/MarketingFrameworkSection'
import MarketingGrowthPartnerSection from './_components/MarketingGrowthPartnerSection'
import MarketingHero from './_components/MarketingHero'
import MarketingHoldbackSection from './_components/MarketingHoldbackSection'
import MarketingIndustriesCarousel from './_components/MarketingIndustriesCarousel'
import MarketingPlatformsIntro from './_components/MarketingPlatformsIntro'
import MarketingProcessSection from './_components/MarketingProcessSection'
import MarketingServicesGrid from './_components/MarketingServicesGrid'
import { MARKETING_CTA, MARKETING_FAQS } from './_components/marketing-content'

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
    alternates: { canonical: `/${locale}/wowmarketing` },
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
