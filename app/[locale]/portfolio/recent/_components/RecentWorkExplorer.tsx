'use client'

import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useMemo, useState } from 'react'
import {
  PORTFOLIO_FILTERS,
  recentPortfolioProjects,
  type PortfolioFilter,
} from '../../_data/projects'
import LatestProjects from './LatestProjects'

/** Layout: portfolio/_components/ExploreWork.tsx — recent-work filters driving a year-grouped grid. */
const RecentWorkExplorer = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return recentPortfolioProjects

    return recentPortfolioProjects.filter((project) => project.categories.includes(activeFilter))
  }, [activeFilter])

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-4 flex justify-center md:mb-5">
            <SectionLabel>EXPLORE BY EXPERTISE</SectionLabel>
          </div>
          <TextAppearAnimation>
            <h2 className="text-appear">Fresh from WOW.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              Browse our newest completed projects and filter by the expertise behind each one.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
          {PORTFOLIO_FILTERS.map((filter) => {
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
