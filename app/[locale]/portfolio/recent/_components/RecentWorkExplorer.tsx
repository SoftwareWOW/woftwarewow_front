'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import { useMemo, useState } from 'react'
import {
  PORTFOLIO_FILTERS,
  recentPortfolioProjects,
  type PortfolioFilter,
  type PortfolioProject,
} from '../../_data/projects'
import LatestProjects from './LatestProjects'
import type { CmsPortfolioExplorerSection, CmsProjectCard } from '@/lib/strapi/mappers/page-sections'
import { mergeSectionHeader } from '@/lib/strapi/cms-section-props'

function slugFromHref(href?: string, fallbackIndex?: number) {
  if (href) {
    const match = href.match(/\/case-stud(?:y|ies)\/([^/?#]+)/)
    if (match?.[1]) return match[1]
  }
  return `cms-project-${fallbackIndex ?? 0}`
}

function cmsProjectsToPortfolio(projects: CmsProjectCard[]): PortfolioProject[] {
  const year = new Date().getFullYear()

  return projects.map((project, index) => ({
    slug: slugFromHref(project.href, index),
    title: project.title,
    client: project.title,
    industry: '',
    tagline: '',
    description: project.description ?? '',
    image: project.thumbnail ?? '',
    alt: project.alt ?? project.title,
    year,
    completedAt: `${year}-01-01`,
    featured: false,
    status: 'published' as const,
    categories: [],
    serviceTags: [],
  }))
}

/** Layout: portfolio/_components/ExploreWork.tsx — recent-work filters driving a year-grouped grid. */
type RecentWorkExplorerProps = Partial<CmsPortfolioExplorerSection>

const RecentWorkExplorer = ({
  eyebrow = 'EXPLORE BY EXPERTISE',
  title,
  accentTitle,
  description,
  filterGroups,
}: RecentWorkExplorerProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )

  const cmsFilterLabels = filterGroups?.map((group) => group.label) ?? []
  const filters = cmsFilterLabels.length ? (['All', ...cmsFilterLabels] as string[]) : [...PORTFOLIO_FILTERS]

  const [activeFilter, setActiveFilter] = useState<string>('All')

  const allCmsProjects = useMemo(() => {
    if (!filterGroups?.length) return null
    return cmsProjectsToPortfolio(filterGroups.flatMap((group) => group.projects))
  }, [filterGroups])

  const filteredProjects = useMemo(() => {
    if (!filterGroups?.length) {
      if (activeFilter === 'All') return recentPortfolioProjects
      return recentPortfolioProjects.filter((project) =>
        project.categories.includes(activeFilter as Exclude<PortfolioFilter, 'All'>),
      )
    }

    if (activeFilter === 'All') return allCmsProjects ?? []

    const group = filterGroups.find((entry) => entry.label === activeFilter)
    return group ? cmsProjectsToPortfolio(group.projects) : allCmsProjects ?? []
  }, [activeFilter, allCmsProjects, filterGroups])

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-4 flex justify-center md:mb-5">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </div>
          <h2 className="text-appear text-center">
            Fresh from <WowText>WOW</WowText>
          </h2>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              {header.description ??
                'Browse our newest completed projects and filter by the expertise behind each one.'}
            </p>
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
