'use client'

import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Link from 'next/link'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'
import { PORTFOLIO_FILTERS, portfolioProjects } from '../_data/projects'
import type { CmsPageProjectsSection } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: case-study/_components/Projects.tsx — underline-hover-effect card styling + filter tabs. */
type ExploreWorkProps = Partial<CmsPageProjectsSection>

const DEFAULT_HEADER = {
  eyebrow: 'EXPLORE BY EXPERTISE',
  title: 'Explore Our Work',
  description:
    'Browse projects by category to see how we approach different challenges across the WOW ecosystem.',
}

function slugFromHref(href?: string, fallback?: string) {
  if (href) {
    const match = href.match(/\/case-stud(?:y|ies)\/([^/?#]+)/)
    if (match?.[1]) return match[1]
  }
  return fallback ?? 'project'
}

const ExploreWork = ({
  eyebrow = DEFAULT_HEADER.eyebrow,
  accentTitle,
  description = DEFAULT_HEADER.description,
  filterCategories,
  projects,
}: ExploreWorkProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title: DEFAULT_HEADER.title, accentTitle, description },
    { eyebrow, title: DEFAULT_HEADER.title, accentTitle, description },
  )

  const cmsFilterLabels = filterCategories?.map((category) => category.label) ?? []
  const filters = cmsFilterLabels.length
    ? (['All', ...cmsFilterLabels] as string[])
    : [...PORTFOLIO_FILTERS]

  const displayProjects = useMemo(() => {
    if (projects?.length) {
      return projects.map((project, index) => ({
        slug: project.slug ?? slugFromHref(project.href, String(index)),
        title: project.title,
        description: project.description ?? '',
        image: project.thumbnail ?? '',
        alt: project.alt ?? project.title,
        client: project.client ?? project.title,
        industry: project.industry ?? '',
        serviceTags: project.serviceTags ?? [],
        tagline: project.tagline ?? project.description ?? '',
        categories: project.categories ?? [],
      }))
    }

    return portfolioProjects.map((project) => ({
      slug: project.slug,
      title: project.title,
      description: project.description,
      image: project.image,
      alt: project.alt,
      client: project.client,
      industry: project.industry,
      serviceTags: project.serviceTags,
      tagline: project.tagline,
      categories: project.categories,
    }))
  }, [projects])

  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return displayProjects
    return displayProjects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter, displayProjects])

  return (
    <section id="work" className="scroll-mt-28 overflow-hidden sm:scroll-mt-32 lg:scroll-mt-36">
      <div className="container mb-10 text-center md:mb-14">
        <div className="mb-4 flex justify-center md:mb-5">
          <SectionLabel>{header.eyebrow}</SectionLabel>
        </div>
        <TextAppearAnimation>
          <h2 className="text-appear">{DEFAULT_HEADER.title}</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{header.description}</p>
        </TextAppearAnimation>
      </div>

      <div className="container mb-10 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-radius-sm border px-4 py-2 text-sm transition-colors md:px-5 md:py-2.5 md:text-base ${
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
        <div className="container grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <RevealWrapperV2
              key={project.slug}
              className="reveal-me group flex h-full flex-col overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-backgroundBody transition-all duration-300 dark:border-[#333] dark:bg-secondary"
            >
              <Link href={`/case-study/${project.slug}`} className="block overflow-hidden">
                <figure className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </figure>
              </Link>
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#808080]">
                  {project.client} · {project.industry}
                </p>
                <h3 className="mt-3 text-2xl md:text-3xl">{project.title}</h3>
                <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm text-[#808080]">
                  {project.serviceTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-[#808080]">{project.description}</p>
                <div className="mt-6">
                  <ButtonComponent
                    href={`/case-study/${project.slug}`}
                    variant="secondary"
                    size="sm"
                    fullWidth
                  >
                    View Project
                  </ButtonComponent>
                </div>
              </div>
            </RevealWrapperV2>
          ))}
        </div>
      )}
    </section>
  )
}

export default ExploreWork
