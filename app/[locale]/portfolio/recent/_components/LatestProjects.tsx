import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import Link from 'next/link'
import type { PortfolioProject } from '../../_data/projects'

type LatestProjectsProps = {
  projects: PortfolioProject[]
}

/** Layout: portfolio/_components/ExploreWork.tsx — grouped recent-project cards with yearly headings. */
const LatestProjects = ({ projects }: LatestProjectsProps) => {
  const projectsByYear = projects.reduce<Record<number, PortfolioProject[]>>((groups, project) => {
    const key = new Date(project.completedAt).getFullYear()
    const group = groups[key] ?? []
    group.push(project)
    groups[key] = group
    return groups
  }, {})

  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="space-y-14 md:space-y-20">
      {years.map((year) => (
        <div key={year}>
          <div className="mb-6 border-b border-[#e5e5e5] pb-3 dark:border-[#333] md:mb-8">
            <h3 className="text-3xl md:text-4xl">{year}</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {projectsByYear[year].map((project) => (
              <RevealWrapperV2
                key={project.slug}
                className="reveal-me group flex h-full flex-col overflow-hidden rounded-radius-sm border border-[#e5e5e5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:border-[#333] dark:bg-[#121212]"
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
                  <h4 className="mt-3 text-2xl md:text-3xl">{project.title}</h4>
                  <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-sm text-[#808080]">
                    {project.serviceTags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-[#808080]">{project.description}</p>
                  <div className="mt-6">
                    <ButtonComponent href={`/case-study/${project.slug}`} variant="secondary" size="sm">
                      View Project
                    </ButtonComponent>
                  </div>
                </div>
              </RevealWrapperV2>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default LatestProjects
