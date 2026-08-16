import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import FocusFirstRelease from './_components/FocusFirstRelease'
import FromIdeaToProduct from './_components/FromIdeaToProduct'
import IdeaToProductPath from './_components/IdeaToProductPath'
import ProductJourney from './_components/ProductJourney'
import SaasFaq from './_components/SaasFaq'
import SaasIntegrations from './_components/SaasIntegrations'
import SaasPackageCard from './_components/SaasPackageCard'
import SaasProductHero from './_components/SaasProductHero'
import SaasTransformPlan from './_components/SaasTransformPlan'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: 'SaaS Product Development Package | WOW Superagency',
    description: 'Build and launch scalable SaaS products.',
    keywords: [
      'SaaS product development',
      'SaaS package',
      'product design',
      'MVP development',
      'WOW Superagency',
    ],
    openGraph: {
      title: 'SaaS Product Development Package | WOW Superagency',
      description: 'Build and launch scalable SaaS products.',
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/packages/saas-product-development`,
    },
  }
}

export default async function SaasProductDevelopmentPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const dictionary = await getDictionary(locale as Locale)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <SaasProductHero />
        <FromIdeaToProduct />
        <SaasPackageCard />
        <SaasTransformPlan />
        <IdeaToProductPath />
        <FocusFirstRelease />
        <SaasIntegrations />
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        <ProductJourney />
        <SaasFaq />
        <WowGrowthCta
          accentText="Ready to build"
          mainText="your SaaS?"
          ariaLabel="Start the SaaS Product Development Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
