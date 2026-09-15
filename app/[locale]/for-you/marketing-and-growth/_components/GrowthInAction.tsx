import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import type { CmsProjectCard } from '@/lib/strapi/mappers/page-sections'
import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'

type CaseStudy = {
  slug: string
  title?: string
  image?: string
  [key: string]: unknown
}

const DEFAULT_CASE_STUDIES = (getMarkDownData('data/marketing/project') as CaseStudy[]).reverse()

function mergeProjects(defaults: CaseStudy[], cmsProjects?: CmsProjectCard[] | null): CaseStudy[] {
  if (!cmsProjects?.length) return defaults

  return defaults.map((item, index) => {
    const cms = cmsProjects[index]
    if (!cms) return item

    return {
      ...item,
      title: cms.title || item.title,
      image: cms.thumbnail ?? item.image,
      slug: cms.href?.split('/').pop() ?? item.slug,
    }
  })
}

/** Layout: Home-16 ProjectServicesV4 — one-row header + image/title case cards. */
const GrowthInAction = ({
  title = 'Growth in',
  accentTitle = 'action',
  description =
    'Problem → Solution → Result — how connected growth systems turn marketing into measurable outcomes.',
  projects,
}: {
  title?: string
  accentTitle?: string
  description?: string
  projects?: CmsProjectCard[] | null
} = {}) => {
  const caseStudies = mergeProjects(DEFAULT_CASE_STUDIES, projects)

  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="w-full md:w-[55%] lg:w-[60%]">
            <RevealWrapper className="reveal-me">
              <h2 className="mt-3 md:mt-4">
                {title} <InstrumentText>{accentTitle}</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right">{description}</p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-6 gap-y-14 px-4 md:grid-cols-2 md:px-[30px]">
        {caseStudies.map((item, index) => (
          <RevealWrapper
            key={item.slug}
            className={cn(
              'reveal-me underline-hover-effect group',
              (index + 1) % 2 === 0 ? 'md:mt-12 lg:mt-20' : '',
            )}
          >
            <Link href={`/marketing/project/${item.slug}`}>
              <figure className="overflow-hidden rounded-radius-md">
                <img
                  src={String(item.image ?? '')}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  alt={String(item.title ?? 'Case study')}
                />
              </figure>
              <div className="blog-title mt-[26px] text-center lg:mt-[30px]">
                <h3 className="text-center text-[27px] font-normal capitalize leading-tight md:text-3xl lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[51px]">
                  {String(item.title ?? '')}
                </h3>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default GrowthInAction
