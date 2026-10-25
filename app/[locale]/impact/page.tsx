import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem, mapStrapiTestimonialExtras, mapStrapiTestimonials } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import ImpactApproachSection from './_components/ImpactApproachSection'
import ImpactChallengeSection from './_components/ImpactChallengeSection'
import ImpactChannelsSection from './_components/ImpactChannelsSection'
import ImpactFaqSection from './_components/ImpactFaqSection'
import ImpactHero from './_components/ImpactHero'
import ImpactPackagesSection from './_components/ImpactPackagesSection'
import ImpactProcessSection from './_components/ImpactProcessSection'
import ImpactServicesSection from './_components/ImpactServicesSection'
import ImpactWorkSection from './_components/ImpactWorkSection'
import { IMPACT_CTA } from './_components/impact-content'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/impact',
    'WOW Impact | WOW Superagency',
    'Build your personal brand, thought leadership, and professional presence with WOW Impact.',
  )
}

export default async function WowImpactPage({ params }: Props) {
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
      <ImpactHero />
      <ImpactWorkSection />
       <WowDivisionsMarquee />
      <ImpactChallengeSection />
      <ImpactServicesSection />
      <ImpactApproachSection />
      <ImpactProcessSection />
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
      <ImpactPackagesSection />
      <ImpactChannelsSection />
      <WowEcosystem ecosystem={ecosystem} />
      <ImpactFaqSection />
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta
          accentText={IMPACT_CTA.accentText}
          mainText={IMPACT_CTA.mainText}
          ariaLabel={IMPACT_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
