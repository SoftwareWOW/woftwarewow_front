import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem, mapStrapiTestimonialExtras, mapStrapiTestimonials } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import HostEssentialsServicesSection from './_components/HostEssentialsServicesSection'
import HostFaqSection from './_components/HostFaqSection'
import HostHero from './_components/HostHero'
import HostHostingSolutionsSection from './_components/HostHostingSolutionsSection'
import HostInfrastructureSection from './_components/HostInfrastructureSection'
import HostPackagesSection from './_components/HostPackagesSection'
import HostProblemSection from './_components/HostProblemSection'
import HostProcessSection from './_components/HostProcessSection'
import HostToolsSection from './_components/HostToolsSection'
import { HOST_CTA } from './_components/host-content'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/host',
    'WOW Host | WOW Superagency',
    'Reliable hosting, domains, email, and security—your digital foundation in one place.',
  )
}

export default async function WowHostPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await getSuperagencyHomepage(typedLocale)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)
  const superAgencyClient = mapStrapiTestimonials(cms.testimonials, dictionary.superAgencyClient)
  const testimonialExtras = mapStrapiTestimonialExtras(cms.testimonials)

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <HostHero />
      <HostHostingSolutionsSection />
      <WowDivisionsMarquee />
      <HostProblemSection />
      <HostEssentialsServicesSection />
      <HostInfrastructureSection />
      <HostProcessSection />
      <div className="-mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <WowSuperAgencyClient
          superAgencyClient={superAgencyClient}
          clientImages={
            Object.keys(testimonialExtras.clientImages).length ? testimonialExtras.clientImages : undefined
          }
          reviewCaseStudies={
            Object.keys(testimonialExtras.reviewCaseStudies).length ? testimonialExtras.reviewCaseStudies : undefined
          }
        />
      </div>
      <HostPackagesSection />
      <HostToolsSection />
      <WowEcosystem ecosystem={ecosystem} />
      <HostFaqSection />
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta accentText={HOST_CTA.accentText} mainText={HOST_CTA.mainText} ariaLabel={HOST_CTA.ariaLabel} />
      </div>
    </div>
  )
}
