import LandingScrollResizeGuard from '@/components/wow/sections/LandingScrollResizeGuard'
import WowHero from '@/components/wow/sections/WowHero'
import WowEcosystem from '@/components/wow/WowEcosystem'
import { getDictionary } from '@/i18n/dictionary'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { setRequestLocale } from 'next-intl/server'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import Stats from '@/components/wow/LandascapComponets/Stats'
import DevisionOverview from '@/components/wow/LandascapComponets/DevisionOverview'
import SolutionToChallenges from '@/components/wow/LandascapComponets/SolutionToChallench'
import { getSuperagencyHomepage } from '@/lib/strapi/fetchers/superagency'
import {
  mapStrapiDivisions,
  mapStrapiEcosystem,
  mapStrapiFaqs,
  mapStrapiGrowthArticles,
  mapStrapiGrowthCta,
  mapStrapiHeroCopy,
  mapStrapiHumanTouch,
  mapStrapiPartnerLogos,
  mapStrapiProjects,
  mapStrapiSolutionCategories,
  mapStrapiSolutionsSection,
  mapStrapiStats,
  mapStrapiTestimonialExtras,
  mapStrapiTestimonials,
} from '@/lib/strapi/mappers/superagency'

const Marquess = dynamic(() => import('@/components/wow/LandascapComponets/Marquee'))
const Marquee = dynamic(() => import('@/components/wow/shared/Marquee'))
const HumanTuch = dynamic(() => import('@/components/wow/LandascapComponets/HumanTuch'))
const Faq = dynamic(() => import('@/components/wow/LandascapComponets/Faq'))
const WowProjects = dynamic(() => import('@/components/wow/LandascapComponets/WowProjects'))
const GrowthStrategies = dynamic(() => import('@/components/wow/LandascapComponets/GrowthStrategies'))
const WowGrowthCta = dynamic(() => import('@/components/wow/LandascapComponets/WowGrowthCta'))

export const revalidate = 60

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const dictionary = await getDictionary(locale as Locale)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

const Home = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await getSuperagencyHomepage(typedLocale)

  const heroCopy = mapStrapiHeroCopy(cms.hero)
  const ecosystem = mapStrapiEcosystem(cms.ecosystem, dictionary.ecosystem)
  const superAgencyClient = mapStrapiTestimonials(cms.testimonials, dictionary.superAgencyClient)
  const testimonialExtras = mapStrapiTestimonialExtras(cms.testimonials)
  const stats = mapStrapiStats(cms.stats)
  const divisions = mapStrapiDivisions(cms.divisions)
  const solutions = mapStrapiSolutionsSection(cms.solutions)
  const solutionCategories = mapStrapiSolutionCategories(cms.solutionCategories)
  const faqs = mapStrapiFaqs(cms.faqs)
  const projects = mapStrapiProjects(cms.projects)
  const growthArticles = mapStrapiGrowthArticles(cms.growthArticles)
  const partnerLogos = mapStrapiPartnerLogos(cms.partnerLogos)
  const humanTouch = mapStrapiHumanTouch(cms.humanTouch)
  const growthCta = mapStrapiGrowthCta(cms.growthCta)

  return (
    <>
      {typedLocale === 'en-US' ? <LandingScrollResizeGuard /> : null}
      <WowHero
        hero={dictionary.hero}
        copy={heroCopy ?? undefined}
        stabilizeProgressOnViewportChange={typedLocale === 'en-US'}
      />
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <div className="flex flex-col gap-0 lg:contents">
          <WowSuperAgencyClient
            superAgencyClient={superAgencyClient}
            clientImages={
              Object.keys(testimonialExtras.clientImages).length
                ? testimonialExtras.clientImages
                : undefined
            }
            reviewCaseStudies={
              Object.keys(testimonialExtras.reviewCaseStudies).length
                ? testimonialExtras.reviewCaseStudies
                : undefined
            }
          />
          <WowEcosystem ecosystem={ecosystem} />
        </div>
        <Stats intro={stats?.intro} stats={stats?.stats} />
        <DevisionOverview divisions={divisions ?? undefined} />
        <SolutionToChallenges
          sectionLabel={solutions?.sectionLabel}
          heading={solutions?.heading}
          description={solutions?.description}
          initialVisibleCount={solutions?.initialVisibleCount}
          viewAllLabel={solutions?.viewAllLabel}
          contactLabel={solutions?.contactLabel}
          categories={solutionCategories ?? undefined}
        />
        <Marquess />
        <Marquee logos={partnerLogos ?? undefined} />
        <HumanTuch
          sectionLabel={humanTouch?.sectionLabel}
          title={humanTouch?.title}
          founder={humanTouch?.founder}
          galleryItems={humanTouch?.galleryItems}
        />
        <Faq faqs={faqs ?? undefined} />
        <WowProjects projects={projects ?? undefined} />
        <GrowthStrategies articles={growthArticles ?? undefined} />
        <div className="mb-3">
          <WowGrowthCta
            accentText={growthCta?.accentText ?? 'Ready to'}
            mainText={growthCta?.mainText ?? 'Grow?'}
            ariaLabel={growthCta?.ariaLabel ?? 'Contact WOW Superagency'}
          />
        </div>
      </div>
    </>
  )
}

export default Home
