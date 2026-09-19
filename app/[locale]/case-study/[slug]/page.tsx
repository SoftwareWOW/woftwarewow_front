import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import { normalizeCaseStudyData } from '@/lib/case-study/normalizeCaseStudyData'
import type { CaseStudyItem } from '@/lib/case-study/types'
import { getCaseStudySlugs } from '@/lib/strapi/fetchers/case-study'
import { loadCaseStudyBySlug } from '@/lib/strapi/load-case-study'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import CaseStudyAboutClient from '../_components/CaseStudyAboutClient'
import CaseStudyApproach from '../_components/CaseStudyApproach'
import CaseStudyBusinessGoals from '../_components/CaseStudyBusinessGoals'
import CaseStudyChallenge from '../_components/CaseStudyChallenge'
import CaseStudyDetailsHero from '../_components/CaseStudyDetailsHero'
import CaseStudyHighlights from '../_components/CaseStudyHighlights'
import CaseStudySuccessMetrics from '../_components/CaseStudySuccessMetrics'
import CaseStudyTargetAudience from '../_components/CaseStudyTargetAudience'

export const revalidate = 60

type PageProps = {
  params: Promise<{ slug: string; locale: string }>
}

function loadMarkdownCaseStudy(slug: string) {
  try {
    const studyFile = getMarkDownContent('data/case-study/', slug)
    return normalizeCaseStudyData(studyFile.data as Record<string, unknown>, slug)
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  const studies = getMarkDownData('data/case-study') as CaseStudyItem[]
  const slugSet = new Set(studies.map((study) => study.slug))

  try {
    const cmsSlugs = await getCaseStudySlugs('en-US')
    cmsSlugs.forEach((slug) => slugSet.add(slug))
  } catch {
    // Strapi unavailable at build time — markdown slugs only
  }

  return Array.from(slugSet, (slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params
  const cms = await loadCaseStudyBySlug(slug, locale as Locale)

  if (cms?.seo?.title || cms?.seo?.description) {
    return {
      title: cms.seo.title,
      description: cms.seo.description,
    }
  }

  const markdown = loadMarkdownCaseStudy(slug)
  if (markdown?.title) {
    return { title: `${markdown.title} | Case Study` }
  }

  return { title: 'Case Study' }
}

const CaseStudyDetailsPage = async ({ params }: PageProps) => {
  const { slug, locale } = await params
  setRequestLocale(locale as Locale)

  const typedLocale = locale as Locale
  const dictionary = await getDictionary(typedLocale)
  const cms = await loadCaseStudyBySlug(slug, typedLocale)
  const study = cms?.study ?? loadMarkdownCaseStudy(slug)

  if (!study) {
    notFound()
  }

  return (
    <LayoutOne>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]">
        <CaseStudyDetailsHero study={study} />
        <CaseStudyAboutClient paragraphs={study.aboutClient} />
        <CaseStudyChallenge paragraphs={study.challengeParagraphs} />
        <CaseStudyApproach
          intro={study.approachIntro}
          callout={study.approachCallout}
          paragraphs={study.approachParagraphs}
        />
        <CaseStudyBusinessGoals goals={study.businessGoals} />
        <CaseStudyTargetAudience audiences={study.targetAudience} />
        <CaseStudyHighlights testimonial={study.testimonial} />
        <CaseStudySuccessMetrics metrics={study.successMetrics} />
        <WowSuperAgencyClient superAgencyClient={dictionary.superAgencyClient} />
        <div className="mb-3">
          <WowGrowthCta
            accentText="Ready to"
            mainText="Grow?"
            ariaLabel="Contact WOW Superagency"
          />
        </div>
      </div>
    </LayoutOne>
  )
}

export default CaseStudyDetailsPage
