import DesignApproachSection from './_components/DesignApproachSection'
import DesignChallengeSection from './_components/DesignChallengeSection'
import DesignCreativeToolsSection from './_components/DesignCreativeToolsSection'
import DesignFaqSection from './_components/DesignFaqSection'
import DesignFlexibleStartSection from './_components/DesignFlexibleStartSection'
import DesignHero from './_components/DesignHero'
import DesignHowWeWorkSection from './_components/DesignHowWeWorkSection'
import DesignPortfolioSection from './_components/DesignPortfolioSection'
import DesignServicesSection from './_components/DesignServicesSection'
import { DESIGN_CTA } from './_components/design-content'
import WowDivisionsMarquee from '@/components/wow/LandascapComponets/WowDivisionsMarquee'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem, mapStrapiTestimonialExtras, mapStrapiTestimonials } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/design',
    'WOW Design | WOW Superagency',
    'Product, brand, and experience design that makes digital feel premium and human.',
  )
}

export default async function WowDesignPage({ params }: Props) {
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
      <DesignHero />
      <DesignPortfolioSection />
      <WowDivisionsMarquee />
      <DesignChallengeSection />
      <DesignServicesSection />
      <DesignApproachSection />
      <DesignHowWeWorkSection />
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
      <DesignFlexibleStartSection />
      <DesignCreativeToolsSection />
      <WowEcosystem ecosystem={ecosystem} />
      <DesignFaqSection />
      <div className="-mb-5 sm:-mb-10 md:-mb-15 lg:-mb-20">
        <WowGrowthCta
          accentText={DESIGN_CTA.accentText}
          mainText={DESIGN_CTA.mainText}
          ariaLabel={DESIGN_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
