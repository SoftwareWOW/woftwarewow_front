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

const INITIAL_VISIBLE_COUNT = 3

const projects: PortfolioProject[] = [...publishedPortfolioProjects].sort((a, b) => {
  const aSoftware = a.categories.includes('Software') ? 0 : 1
  const bSoftware = b.categories.includes('Software') ? 0 : 1
  return aSoftware - bSoftware
})

/** Layout: homepage-14/OurWorkShowcase — 2+1 bordered cards + Load More. */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              SaaS products brought to <InstrumentText>life.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="mb-[60px] grid grid-cols-12 items-center justify-items-center gap-[30px] gap-y-10 md:items-start">
          {visibleProjects.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="underline-hover-effect group col-span-12 border px-3.5 pb-7 pt-3.5 dark:border-dark md:col-span-6 md:px-5 md:pt-5 last:md:col-span-12"
            >
              <Link href={`/case-study/${item.slug}`}>
                <figure className="overflow-hidden">
                  <img
                    src={item.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.alt}
                  />
                </figure>
              </Link>
              <div className="mb-2.5 mt-[26px]">
                <p className="text-[13px] font-normal uppercase leading-[14.4px] tracking-[0.96px] text-secondary dark:text-white">
                  {item.client} · {item.industry}
                </p>
              </div>
              <Link href={`/case-study/${item.slug}`}>
                <div className="blog-title">
                  <h3 className="text-3xl font-normal lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[50px]">
                    {item.title}
                  </h3>
                </div>
              </Link>
              <p className="mt-3 text-sm text-[#808080]">{item.serviceTags.join(' · ')}</p>
              <p className="mt-3 text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70">
                {item.description}
              </p>
              <div className="mt-6">
                <ButtonComponent href={`/case-study/${item.slug}`} variant="white">
                  View Case Study
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </div>
        {hasMore && (
          <RevealWrapper className="flex justify-center">
            <ButtonComponentList itemClassName="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
              <ButtonComponent
                type="button"
                variant="secondary"
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
