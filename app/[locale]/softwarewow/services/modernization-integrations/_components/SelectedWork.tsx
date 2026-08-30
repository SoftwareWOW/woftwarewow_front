'use client'

import {
  publishedPortfolioProjects,
  type PortfolioProject,
} from '@/app/[locale]/portfolio/_data/projects'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 2

const projects: PortfolioProject[] = [...publishedPortfolioProjects].sort((a, b) => {
  const aSoftware = a.categories.includes('Software') ? 0 : 1
  const bSoftware = b.categories.includes('Software') ? 0 : 1
  return aSoftware - bSoftware
})

/** Layout: homepage-24/ProjectCaseStudies — overlay case-study cards + Load More. */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Modernization in <InstrumentText>action.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {visibleProjects.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row"
            >
              <figure className="relative -z-30 h-[240px] w-full max-w-[870px] overflow-hidden rounded-radius-md sm:h-[280px] md:h-[320px] lg:h-[360px]">
                <Link href={`/case-study/${item.slug}`} className="block h-full w-full">
                  <img
                    src={item.image}
                    className="absolute inset-0 block h-full w-full object-cover object-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.alt}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item.client} · {item.industry}
                </p>
                <div className="blog-title mb-6 lg:mb-8">
                  <Link href={`/case-study/${item.slug}`}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-3 text-sm uppercase tracking-[0.96px] text-secondary/70 dark:text-backgroundBody/70">
                  {item.serviceTags.join(' · ')}
                </p>
                <p className="mb-8 text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70 lg:mb-10">
                  {item.description}
                </p>
                <ButtonComponent href={`/case-study/${item.slug}`} variant="white">
                  View Case Study
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {hasMore && (
          <RevealWrapper className="flex justify-center">
            <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
              <ButtonComponent
                type="button"
                variant="white"
                fullWidth
                onClick={() => setShowAll((prev) => !prev)}
                ariaExpanded={showAll}
              >
                {showAll ? 'See Less' : 'Load More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default SelectedWork
