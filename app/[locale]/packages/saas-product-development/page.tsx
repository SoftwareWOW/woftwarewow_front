
const PAGE_SLUG = 'saas-product-development' as const

export const revalidate = 60

const DEFAULT_HERO = {
  title: 'Turn your SaaS idea into real product.',
  description:
    'From product strategy and UX/UI to development and launch, we bring the pieces together to turn your software idea into a product people can actually use.',
}

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
import { buildSuperagencyPageMetadata, loadSuperagencyPage, resolvePageSections } from '@/lib/strapi/superagency-page-loader'
import { buildPageHero } from '@/lib/strapi/resolve-page-hero'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  return buildSuperagencyPageMetadata(cms, { title: 'SaaS Product Development Package' })
}

export default async function SaasProductDevelopmentPackagePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const dictionary = await getDictionary(locale as Locale)
  const cms = await loadSuperagencyPage(PAGE_SLUG, locale as Locale)
  const hero = buildPageHero(PAGE_SLUG, DEFAULT_HERO, cms.hero)
  const sections = resolvePageSections(cms, PAGE_SLUG)

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
        <SaasProductHero {...hero} images={hero.images} />
        <FromIdeaToProduct {...(sections.fromIdeaToProduct ?? {})} />
        <SaasPackageCard {...(sections.saasPackageCard ?? {})} />
        <SaasTransformPlan {...(sections.saasTransformPlan ?? {})} />
        <IdeaToProductPath {...(sections.ideaToProductPath ?? {})} />
        <FocusFirstRelease {...(sections.focusFirstRelease ?? {})} />
        <SaasIntegrations {...(sections.saasIntegrations ?? {})} />
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        <ProductJourney {...(sections.productJourney ?? {})} />
        <SaasFaq {...(sections.saasFaq ?? {})} />
        <WowGrowthCta
          accentText="Ready to build"
          mainText="your SaaS?"
          ariaLabel="Start the SaaS Product Development Package with WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}
