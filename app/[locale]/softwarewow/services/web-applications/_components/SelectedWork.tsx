'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  publishedPortfolioProjects,
  type PortfolioProject,
} from '@/app/[locale]/portfolio/_data/projects'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 2

const projects: PortfolioProject[] = [...publishedPortfolioProjects].sort((a, b) => {
  const aSoftware = a.categories.includes('Software') ? 0 : 1
  const bSoftware = b.categories.includes('Software') ? 0 : 1
  return aSoftware - bSoftware
})

/** Layout: portfolio/FeaturedWork + SoftwareWoWProjectsClient Load More — commits 9739ed3, f663f92 */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section>
      <div className="container mb-10 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Selected Work</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear">
            Web applications in <InstrumentText>action.</InstrumentText>
          </h2>
        </TextAppearAnimation>
      </div>

      <div className="container flex flex-col gap-16 md:gap-20 lg:gap-24">
        {visibleProjects.map((project, index) => (
          <RevealWrapperV2
            key={project.slug}
            className={`reveal-me group flex flex-col gap-8 lg:items-center lg:gap-10 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <Link href={`/case-study/${project.slug}`} className="block flex-1 overflow-hidden rounded-radius-md">
              <figure className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[16/10] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </figure>
            </Link>

            <div className="flex flex-1 flex-col justify-center lg:max-w-md xl:max-w-lg">
              <p className="text-xs uppercase tracking-[0.2em] text-[#808080]">
                {project.client} · {project.industry}
              </p>
              <h3 className="mt-3 text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.15]">{project.title}</h3>
              <p className="mt-3 flex flex-wrap gap-2 text-sm text-[#808080]">
                {project.serviceTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#808080] md:text-lg">{project.description}</p>
              <div className="mt-6">
                <ButtonComponent href={`/case-study/${project.slug}`} variant="secondary" size="sm">
                  View Case Study
                </ButtonComponent>
              </div>
            </div>
          </RevealWrapperV2>
        ))}
      </div>

      {hasMore && (
        <RevealWrapper className="mt-12 flex justify-center md:mt-16">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent
              type="button"
              variant="primary"
              fullWidth
              onClick={() => setShowAll((prev) => !prev)}
              ariaExpanded={showAll}
            >
              {showAll ? 'See Less' : 'Load More'}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      )}
    </section>
  )
}

export default SelectedWork
