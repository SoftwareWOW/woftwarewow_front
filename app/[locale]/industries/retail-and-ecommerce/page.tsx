import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import ClientJourney from './_components/ClientJourney'
import CommerceJourneyPath from './_components/CommerceJourneyPath'
import CommerceSolutions from './_components/CommerceSolutions'
import DevisionOverview from './_components/DevisionOverview'
import RecommendedSolutions from './_components/RecommendedSolutions'
import RetailEcommerceHero from './_components/RetailEcommerceHero'
import RetailGrowthPillars from './_components/RetailGrowthPillars'
import SocialGallery from './_components/SocialGallery'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'Retail & eCommerce | WOW Superagency',
    description: 'Growth for online stores.',
    keywords: [
      'retail',
      'ecommerce',
      'online stores',
      'website growth',
      'sales acceleration',
      'AI automation',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'Retail & eCommerce | WOW Superagency',
      description: 'Growth for online stores.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/industries/retail-and-ecommerce`,
    },
  }
}

export default async function RetailAndEcommercePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        {/* 1–2. Hero — HeroAbout + SkewMarquee */}
        <RetailEcommerceHero />
        {/* 3. ProcessV2 — four hover columns */}
        <RetailGrowthPillars />
        {/* 4. Commerce Solutions — ProfessionalServiceSolutions / Home-23 WhyChooseUsV7 */}
        <CommerceSolutions />
        {/* 5. The Commerce Journey — ClientJourney / Home-07 ProcessV4 */}
        <ClientJourney />
        {/* 6. Gallery — SocialGallery / Home-11 InstagramGallery */}
        <SocialGallery />
        {/* 7. IdeaToProductPath — horizontal numbered timeline */}
        <CommerceJourneyPath />
        {/* 8. Divisions — homepage DevisionOverview copy */}
        <DevisionOverview />
        {/* 9. Recommended Solutions — Home-19 OurExpertiseV2 */}
        <RecommendedSolutions />
        {/* 10. Ready to Grow Your Store? */}
        <WowGrowthCta
          accentText="Ready to Grow"
          mainText="Your Store?"
          ariaLabel="Start with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
