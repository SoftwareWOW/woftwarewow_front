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

/** Layout: homepage-15/OurWorkV2 — 2-col work grid + Load More. */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section className="overflow-hidden">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>Selected Work</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-3">
            Custom software in <InstrumentText>action.</InstrumentText>
          </h2>
        </TextAppearAnimation>
      </div>

      <div className="relative mx-auto mb-[60px] grid max-w-[1500px] grid-cols-1 items-center justify-items-center gap-[30px] gap-y-10 px-5 after:absolute after:top-1/2 after:h-[1px] after:w-full after:bg-secondary/10 after:content-[''] dark:after:bg-backgroundBody/10 md:grid-cols-2 md:items-start md:before:absolute md:before:h-full md:before:w-[1px] md:before:bg-secondary/10 md:before:content-[''] md:dark:before:bg-backgroundBody/10">
        {visibleProjects.map((item) => (
          <RevealWrapper key={item.slug} className="underline-hover-effect group w-full">
            <Link href={`/case-study/${item.slug}`} className="block">
              <figure className="relative h-[240px] w-full shrink-0 overflow-hidden rounded-radius-md sm:h-[280px] sm:rounded-radius-sm md:h-[320px] lg:h-[360px]">
                <img
                  src={item.image}
                  className="absolute inset-0 h-full w-full rounded-radius-md object-cover object-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-125 sm:rounded-radius-sm"
                  alt={item.alt}
                  width={720}
                  height={360}
                />
              </figure>
            </Link>
            <Link href={`/case-study/${item.slug}`} className="mt-[30px] block">
              <div className="blog-title">
                <h3>{item.title}</h3>
              </div>
              <p className="mt-3.5 text-xs uppercase leading-[1.2] tracking-[0.96px] text-secondary/70 dark:text-backgroundBody/70">
                {item.client} · {item.industry}
              </p>
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
        <RevealWrapper className="flex justify-center px-5">
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
    </section>
  )
}

export default SelectedWork
