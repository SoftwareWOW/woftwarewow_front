'use client'

import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { PORTFOLIO_FILTERS, portfolioProjects, type PortfolioFilter } from '../_data/projects'

/** Filter tabs + project grid with case-study card hover styling. */
const ExploreWork = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects

    return portfolioProjects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="work" className="scroll-mt-28 overflow-hidden sm:scroll-mt-32 lg:scroll-mt-36">
      <div className="container mb-10 text-center md:mb-14">
        <TextAppearAnimation>
          <h2 className="text-appear">Explore Our Work</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
            Browse projects by category to see how we approach different challenges across the WOW ecosystem.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="container mb-10 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
        {PORTFOLIO_FILTERS.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors md:px-5 md:py-2.5 md:text-base ${
                isActive
                  ? 'border-[#8b7cff] bg-[#8b7cff] text-white'
                  : 'border-[#e5e5e5] text-[#808080] hover:border-[#8b7cff] hover:text-[#1a1a1a] dark:border-[#333] dark:hover:text-[#F2F2F2]'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="container py-16 text-center">
          <p className="text-lg text-[#808080]">
            No projects in this category yet. Check back as we add more work across the WOW ecosystem.
          </p>
        </div>
      ) : (
        <div className="container grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:grid-cols-3 lg:gap-x-10">
          {filteredProjects.map((project) => (
            <RevealWrapperV2
              as="a"
              href={`/case-study/${project.slug}`}
              key={project.slug}
              className="reveal-me project-item underline-hover-effect group flex flex-col gap-y-5"
            >
              <figure className="overflow-hidden rounded-radius-md">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </figure>
              <div className="project-item-content">
                <p className="text-xs uppercase tracking-[0.2em] text-[#808080]">
                  {project.client} · {project.industry}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl">{project.title}</h3>
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm text-[#808080]">
                  {project.serviceTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#808080]">{project.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-medium">
                  View Project
                  <ArrowUpRight aria-hidden className="size-5" strokeWidth={2} />
                </span>
              </div>
            </RevealWrapperV2>
          ))}
        </div>
      )}
    </section>
  )
}

export default ExploreWork
