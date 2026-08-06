import LayoutOne from '@/components/shared/LayoutOne'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import WowSuperAgencyClient from '@/components/wow/sections/WowSuperAgencyClient'
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionary'
import { normalizeCaseStudyData } from '@/lib/case-study/normalizeCaseStudyData'
import type { CaseStudyItem } from '@/lib/case-study/types'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'
import CaseStudyAboutClient from '../_components/CaseStudyAboutClient'
import CaseStudyApproach from '../_components/CaseStudyApproach'
import CaseStudyBusinessGoals from '../_components/CaseStudyBusinessGoals'
import CaseStudyChallenge from '../_components/CaseStudyChallenge'
import CaseStudyDetailsHero from '../_components/CaseStudyDetailsHero'
import CaseStudyHighlights from '../_components/CaseStudyHighlights'
import CaseStudySuccessMetrics from '../_components/CaseStudySuccessMetrics'
import CaseStudyTargetAudience from '../_components/CaseStudyTargetAudience'

export async function generateStaticParams() {
  const studies = getMarkDownData('data/case-study') as CaseStudyItem[]
  return studies.map((study) => ({
    slug: study.slug,
  }))
}

const CaseStudyDetailsPage = async ({ params }: { params: Promise<{ slug: string; locale: string }> }) => {
  const { slug, locale } = await params
  const dictionary = await getDictionary(locale as Locale)
  const studyFile = getMarkDownContent('data/case-study/', slug)
  const study = normalizeCaseStudyData(studyFile.data as Record<string, unknown>, slug)

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
