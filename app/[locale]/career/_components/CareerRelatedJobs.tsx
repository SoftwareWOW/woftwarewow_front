'use client'

import { useMemo, useState } from 'react'
import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CareerListItem } from '@/lib/career/types'
import { careerSectionClass, careerSectionInnerClass } from './careerSectionSpacing'

type CareerRelatedJobsProps = {
  jobs: CareerListItem[]
  currentSlug: string
}

const INITIAL_VISIBLE_COUNT = 4

const CareerRelatedJobs = ({ jobs, currentSlug }: CareerRelatedJobsProps) => {
  const [expanded, setExpanded] = useState(false)

  const relatedJobs = useMemo(
    () => jobs.filter((job) => job.slug !== currentSlug),
    [jobs, currentSlug],
  )

  if (!relatedJobs.length) return null

  const visibleJobs = expanded ? relatedJobs : relatedJobs.slice(0, INITIAL_VISIBLE_COUNT)
  const canToggle = relatedJobs.length > INITIAL_VISIBLE_COUNT

  return (
    <section className={careerSectionClass}>
      <div className={careerSectionInnerClass}>
        <RevealWrapper className="mb-10 text-center md:mb-14">
          <h2 className="text-[32px] font-light leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody sm:text-[44px] lg:text-[56px]">
            Related <span className="italic">Opportunities</span>
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {visibleJobs.map((job) => (
            <RevealWrapper
              key={job.slug}
              className="flex min-h-[320px] flex-col justify-between rounded-[10px] border border-black/10 bg-backgroundBody p-8 dark:border-white/10 dark:bg-dark-300 sm:min-h-[360px] lg:min-h-[406px] lg:p-10">
              <div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.slice(0, 3).map((tag) => (
                    <SectionLabel key={tag} className="h-6 px-3 py-0 text-[12px] leading-6">
                      {tag}
                    </SectionLabel>
                  ))}
                </div>
                <h3 className="mt-6 text-[24px] font-normal leading-tight text-secondary dark:text-backgroundBody sm:text-[28px] lg:text-[32px]">
                  {job.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-relaxed text-muted lg:text-[20px]">
                  {job.description}
                </p>
              </div>

              <ButtonComponentList className="mt-8" itemClassName="w-full sm:w-auto">
                <ButtonComponent href={`/career/${job.slug}`} variant="primary" className="[&_span]:!text-white">
                  View Position
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          ))}
        </div>

        {canToggle ? (
          <RevealWrapper className="mt-10 flex justify-center">
            <ButtonComponent
              type="button"
              onClick={() => setExpanded((value) => !value)}
              variant="secondary">
              {expanded ? 'See Less' : 'See More'}
            </ButtonComponent>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}

export default CareerRelatedJobs
