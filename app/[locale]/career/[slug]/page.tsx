import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import type { Locale } from '@/i18n/config'
import { loadCareerPostBySlug, loadCareerPostSlugs } from '@/lib/strapi/load-career-post'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import CareerDetailsHero from '../_components/CareerDetailsHero'
import CareerDetailsOverview from '../_components/CareerDetailsOverview'
import CareerRelatedJobs from '../_components/CareerRelatedJobs'

export const revalidate = 60
export const dynamicParams = true

type PageProps = {
  params: Promise<{ slug: string; locale: string }>
}

export async function generateStaticParams() {
  const cmsSlugs = await loadCareerPostSlugs('en-US')
  return cmsSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const cms = await loadCareerPostBySlug(slug, locale as Locale)

  if (cms?.post.title) {
    return {
      title: `${cms.post.title} | Careers`,
      description: cms.post.description,
    }
  }

  return { title: 'Career' }
}

const CareerDetailsPage = async ({ params }: PageProps) => {
  const { slug, locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const cms = await loadCareerPostBySlug(slug, typedLocale)

  if (!cms?.post) notFound()

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 pb-12 sm:gap-16 sm:pb-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px] 2xl:pb-[200px]">
        <CareerDetailsHero career={cms.post} />
        <CareerDetailsOverview career={cms.post} content={cms.post.content} />
        <CareerRelatedJobs
          jobs={cms.relatedJobs.map((job) => ({
            slug: job.slug,
            title: job.title,
            description: job.description,
            tags: job.tags,
            content: '',
          }))}
          currentSlug={slug}
        />
        <WowGrowthCta
          accentText="Ready to"
          mainText="Grow?"
          ariaLabel="Contact WOW Superagency"
        />
      </div>
    </LayoutOne>
  )
}

export default CareerDetailsPage
