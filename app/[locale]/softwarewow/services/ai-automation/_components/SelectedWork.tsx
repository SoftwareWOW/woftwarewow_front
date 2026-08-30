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
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const INITIAL_VISIBLE_COUNT = 3

const projects: PortfolioProject[] = [...publishedPortfolioProjects].sort((a, b) => {
  const aSoftware = a.categories.includes('Software') ? 0 : 1
  const bSoftware = b.categories.includes('Software') ? 0 : 1
  return aSoftware - bSoftware
})

/** Layout: wow/LandascapComponets/WowProjects — full-bleed image cards + overlay + See More. */
const SelectedWork = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_VISIBLE_COUNT)
  const hasMore = projects.length > INITIAL_VISIBLE_COUNT

  return (
    <section className="relative overflow-hidden bg-background px-3 transition-colors duration-300 dark:bg-background md:px-4">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, color-mix(in srgb, #ffffff 0%, rgba(0,0,0,0.05)) 100%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-col items-center justify-center gap-y-4 md:mb-20 md:flex-row md:justify-between">
          <div>
            <RevealWrapper>
              <SectionLabel className="mb-3">Selected Work</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear text-[#0D0D0D] dark:text-[#F2F2F2]">
                AI and automation in <InstrumentText>action.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>

          <div>
            <TextAppearAnimation>
              <p className="max-w-md flex-1 text-[#808080] md:self-end md:text-right">
                See how we apply AI, assistants, and automation to real business workflows.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-6 flex justify-end md:mt-8">
              <ButtonComponentList>
                <ButtonComponent href="/portfolio" variant="secondary">
                  View Our Work
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          {visibleProjects.map((project) => (
            <RevealWrapper as="article" className="group relative" key={project.slug}>
              <div className="relative overflow-hidden rounded-radius-md border border-[#e5e5e5] bg-white/50 backdrop-blur-sm transition-all duration-500 dark:border-white/5 dark:bg-dark/50">
                <Link href={`/case-study/${project.slug}`} className="block overflow-hidden rounded-t-radius-md">
                  <Image
                    width={1330}
                    height={445}
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[1330/445] w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                </Link>

                <div className="absolute bottom-4 left-4 right-4 max-w-[calc(100%-2rem)] !rounded-radius-sm border border-white/20 bg-backgroundBody/95 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-backgroundBody/100 dark:border-white/10 dark:bg-dark-200/95 dark:hover:bg-dark-200/100 sm:p-4 md:bottom-8 md:left-8 md:max-w-[535px] md:p-6 lg:bottom-10 lg:left-10 lg:p-8">
                  <div className="project-title mb-2 md:mb-3">
                    <Link href={`/case-study/${project.slug}`}>
                      <h3 className="text-base font-normal text-[#0D0D0D] transition-colors duration-300 group-hover:text-[#8b7cff] dark:text-[#F2F2F2] dark:group-hover:text-[#b794f4] sm:text-lg md:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                    </Link>
                  </div>
                  <p className="text-xs text-[#808080] sm:text-sm md:text-base">{project.description}</p>
                </div>

                <figure className="absolute right-10 top-10 size-[60px] cursor-pointer overflow-hidden rounded-radius-sm bg-primary max-md:hidden md:block md:size-[65px] lg:size-[79px]">
                  <ArrowUpRight
                    aria-hidden
                    className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                    strokeWidth={2}
                  />
                  <ArrowUpRight
                    aria-hidden
                    className="absolute size-10 -translate-x-4 translate-y-12 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                    strokeWidth={2}
                  />
                </figure>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {hasMore && (
          <RevealWrapper className="mt-10 flex justify-center md:mt-14">
            <ButtonComponentList>
              <ButtonComponent
                type="button"
                variant="secondary"
                onClick={() => setShowAll((prev) => !prev)}
                ariaExpanded={showAll}
              >
                {showAll ? 'See Less' : 'See More'}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default SelectedWork
