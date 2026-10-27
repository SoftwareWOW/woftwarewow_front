
import SoftwareWowHero from '@/components/wow/softwarewow/SoftwareWowHero'
import WowEcosystem from '@/components/wow/WowEcosystem'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import { mapStrapiEcosystem, mapStrapiTestimonialExtras, mapStrapiTestimonials } from '@/lib/strapi/mappers/superagency'
import { divisionPageMetadata } from '@/lib/seo/division-page-metadata'
import { setRequestLocale } from 'next-intl/server'
import SoftwareWowFrameworkSection from './_components/SoftwareWowFrameworkSection'
import SoftwareWowIndustriesCarousel from './_components/SoftwareWowIndustriesCarousel'
import SoftwareWowOutcomesSection from './_components/SoftwareWowOutcomesSection'
import SoftwareWowPlatformsIntro from './_components/SoftwareWowPlatformsIntro'
import SoftwareWowPortfolioSection from './_components/SoftwareWowPortfolioSection'
import SoftwareWowProblemSection from './_components/SoftwareWowProblemSection'
import SoftwareWowProcessSection from './_components/SoftwareWowProcessSection'
import SoftwareWowServicesSection from './_components/SoftwareWowServicesSection'
import SoftwareWowSolutionsSection from './_components/SoftwareWowSolutionsSection'
import SoftwareWowTestimonialsSection from './_components/SoftwareWowTestimonialsSection'
import SoftwareWowWhySection from './_components/SoftwareWowWhySection'
import { SOFTWAREWOW_CTA } from './_components/softwarewow-content'
import SoftwareRfq from '@/components/wow/softwarewow/SoftwareRfq'

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  return divisionPageMetadata(
    locale,
    '/software',
    'SoftwareWOW! | Custom Software, Apps & Digital Products',
    'Custom software, mobile apps, and digital products built to scale with your business — not against it.',
  )
}

export default async function SoftwareWowPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await getSuperagencyHomepage(typedLocale)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)
  const superAgencyClient = mapStrapiTestimonials(cms.testimonials, dictionary.superAgencyClient)
  const testimonialExtras = mapStrapiTestimonialExtras(cms.testimonials)

  return (
    <div className="flex flex-col gap-12 bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <SoftwareWowHero />
      <SoftwareWowPortfolioSection />
      <SoftwareWowProblemSection />
      <SoftwareWowServicesSection />
      <SoftwareWowOutcomesSection />
      <SoftwareWowFrameworkSection />
      <SoftwareWowProcessSection />
      <SoftwareWowWhySection />
      <SoftwareWowIndustriesCarousel />
      <SoftwareWowTestimonialsSection
        superAgencyClient={superAgencyClient}
        clientImages={
          Object.keys(testimonialExtras.clientImages).length ? testimonialExtras.clientImages : undefined
        }
      />
      <SoftwareWowPlatformsIntro />
      <SoftwareWowSolutionsSection />
      <WowEcosystem ecosystem={ecosystem} />
       <SoftwareRfq/>
      <div className="mb-3">
        <WowGrowthCta
          accentText={SOFTWAREWOW_CTA.accentText}
          mainText={SOFTWAREWOW_CTA.mainText}
          ariaLabel={SOFTWAREWOW_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
