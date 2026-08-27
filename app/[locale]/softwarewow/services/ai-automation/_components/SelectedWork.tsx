'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
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

/** Layout: homepage-21/CaseStudyV2 — overlay cards + Load More */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              AI and automation in <InstrumentText>action.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {visibleProjects.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row"
            >
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link href={`/case-study/${item.slug}`} className="block">
                  <img
                    src={item.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.alt}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item.client} · {item.industry}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link href={`/case-study/${item.slug}`}>
                    <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <p className="mb-4 text-sm text-[#808080]">{item.serviceTags.join(' · ')}</p>
                <p className="mb-10 text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
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
          <RevealWrapper className="reveal-me mt-7 flex justify-center max-md:w-full md:mt-14">
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
