import AuthorityFoundation from '@/app/[locale]/packages/brand-authority/_components/AuthorityFoundation'
import AccelerateFlexibleStartSection from './_components/AccelerateFlexibleStartSection'
import AccelerateFrameworkSection from './_components/AccelerateFrameworkSection'
import AccelerateHero from './_components/AccelerateHero'
import AccelerateHowWeWorkSection from './_components/AccelerateHowWeWorkSection'
import AccelerateProblemSection from './_components/AccelerateProblemSection'
import AccelerateStatsMarqueeSection from './_components/AccelerateStatsMarqueeSection'
import {
  ACCELERATE_CTA,
  ACCELERATE_FAQ_HEADER,
  ACCELERATE_FAQS,
  ACCELERATE_SOLUTIONS,
} from './_components/accelerate-content'
import Faq from '@/components/wow/LandascapComponets/Faq'
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
    '/accelerate',
    'WOW Accelerate | WOW Superagency',
    'Lead generation, sales funnels, CRM, and automation that turn opportunities into consistent revenue.',
  )
}

export default async function WowAcceleratePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await getSuperagencyHomepage(typedLocale)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)
  const superAgencyClient = mapStrapiTestimonials(cms.testimonials, dictionary.superAgencyClient)
  const testimonialExtras = mapStrapiTestimonialExtras(cms.testimonials)

  const solutions = ACCELERATE_SOLUTIONS

  return (
    <div className="flex w-full min-w-0 flex-col gap-12 overflow-x-clip bg-background transition-colors duration-300 dark:bg-background sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
      <AccelerateHero />
      <AccelerateStatsMarqueeSection />
      <AccelerateProblemSection />
      <AuthorityFoundation
        eyebrow={solutions.eyebrow}
        title={solutions.title}
        accentTitle={solutions.accentTitle}
        description={solutions.description}
        items={[...solutions.items]}
      />
      <AccelerateFrameworkSection />
      <AccelerateHowWeWorkSection />
      <WowSuperAgencyClient
        superAgencyClient={superAgencyClient}
        clientImages={
          Object.keys(testimonialExtras.clientImages).length ? testimonialExtras.clientImages : undefined
        }
        reviewCaseStudies={
          Object.keys(testimonialExtras.reviewCaseStudies).length ? testimonialExtras.reviewCaseStudies : undefined
        }
      />
      <AccelerateFlexibleStartSection />
      <WowEcosystem ecosystem={ecosystem} />
      <Faq
        faqs={[...ACCELERATE_FAQS]}
        sectionLabel={ACCELERATE_FAQ_HEADER.sectionLabel}
        titleBefore={ACCELERATE_FAQ_HEADER.titleBefore}
        titleAccent={ACCELERATE_FAQ_HEADER.titleAccent}
        description={ACCELERATE_FAQ_HEADER.description}
        viewAllHref={ACCELERATE_FAQ_HEADER.viewAllHref}
        initialActiveId={5}
      />
      <div className="mb-3">
        <WowGrowthCta
          accentText={ACCELERATE_CTA.accentText}
          mainText={ACCELERATE_CTA.mainText}
          ariaLabel={ACCELERATE_CTA.ariaLabel}
        />
      </div>
    </div>
  )
}
