'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import { useMemo, useState } from 'react'
import {
  PORTFOLIO_FILTERS,
  recentPortfolioProjects,
  type PortfolioProject,
} from '../../_data/projects'
import LatestProjects from './LatestProjects'
import type { CmsPageProjectsSection, CmsProjectCard } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'

const DEFAULT_HEADER = {
  eyebrow: 'EXPLORE BY EXPERTISE',
  description:
    'Browse our newest completed projects and filter by the expertise behind each one.',
}

function cmsProjectsToPortfolio(projects: CmsProjectCard[]): PortfolioProject[] {
  const fallbackYear = new Date().getFullYear()

  return projects
    .filter((project) => project.thumbnail)
    .map((project) => {
      const completedAt =
        project.completedAt ??
        (project.year ? `${project.year}-06-01` : `${fallbackYear}-01-01`)
      const year = project.year ?? new Date(completedAt).getFullYear()

      return {
        slug: project.slug ?? project.title,
        title: project.title,
        client: project.client ?? project.title,
        industry: project.industry ?? '',
        tagline: project.tagline ?? '',
        description: project.description ?? '',
        image: project.thumbnail ?? '',
        alt: project.alt ?? project.title,
        year,
        completedAt,
        featured: false,
        status: 'published' as const,
        categories: (project.categories ?? []) as PortfolioProject['categories'],
        serviceTags: project.serviceTags ?? [],
      }
    })
}

/** Layout: portfolio/ExploreWork category filters + LatestProjects year grouping. */
type RecentWorkExplorerProps = Partial<CmsPageProjectsSection>

const RecentWorkExplorer = ({
  eyebrow = DEFAULT_HEADER.eyebrow,
  accentTitle,
  description = DEFAULT_HEADER.description,
  filterCategories,
  projects,
}: RecentWorkExplorerProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title: accentTitle, description },
    { eyebrow, title: accentTitle, description },
  )

  const cmsFilterLabels = filterCategories?.map((category) => category.label) ?? []
  const filters = cmsFilterLabels.length ? (['All', ...cmsFilterLabels] as string[]) : [...PORTFOLIO_FILTERS]

  const displayProjects = useMemo(() => {
    if (projects?.length) return cmsProjectsToPortfolio(projects)
    return recentPortfolioProjects
  }, [projects])

  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return displayProjects
    return displayProjects.filter((project) =>
      project.categories.some((category) => category === activeFilter),
    )
  }, [activeFilter, displayProjects])

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-4 flex justify-center md:mb-5">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </div>
          <h2 className="text-appear text-center">
            {header.title ? (
              header.title
            ) : (
              <>
                Fresh from <WowText>WOW</WowText>
              </>
            )}
          </h2>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">{header.description}</p>
          </TextAppearAnimation>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
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
          <div className="py-16 text-center">
            <p className="text-lg text-[#808080]">
              No recent projects in this category yet. Explore the full portfolio to see more work across WOW.
            </p>
          </div>
        ) : (
          <LatestProjects projects={filteredProjects} />
        )}
      </div>
    </section>
  )
}

export default RecentWorkExplorer
