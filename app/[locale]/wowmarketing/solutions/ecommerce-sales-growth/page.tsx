import { CONTENT } from './_content/page-content'
import RetailEcommerceHero from './_components/RetailEcommerceHero'
import RetailHeroAbout from './_components/RetailHeroAbout'
import RetailGrowthPillars from './_components/RetailGrowthPillars'
import CommerceSolutions from './_components/CommerceSolutions'
import ClientJourney from './_components/ClientJourney'
import SocialGallery from './_components/SocialGallery'
import CommerceJourneyPath from './_components/CommerceJourneyPath'
import RecommendedSolutions from './_components/RecommendedSolutions'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, 'ecommerce-sales-growth', 'solution')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <div>
        <RetailEcommerceHero
          {...CONTENT.hero}
          images={CONTENT.hero.images}
          marqueeImages={CONTENT.hero.marqueeImages}
        />
        <RetailHeroAbout {...CONTENT.heroAbout} />
      </div>
      <RetailGrowthPillars {...CONTENT.retailGrowthPillars} />
      <CommerceSolutions {...CONTENT.commerceSolutions} />
      <ClientJourney {...CONTENT.commerceJourney} />
      <SocialGallery {...CONTENT.socialGallery} />
      <CommerceJourneyPath {...CONTENT.commerceJourneyPath} />
      <RecommendedSolutions {...CONTENT.recommendedSolutions} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
