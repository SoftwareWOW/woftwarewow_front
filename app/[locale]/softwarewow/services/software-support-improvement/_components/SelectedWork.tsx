'use client'

import {
  publishedPortfolioProjects,
  type PortfolioProject,
} from '@/app/[locale]/portfolio/_data/projects'
import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'

const FEATURED_SLUGS = ['inity-inc', 'smartek'] as const

const featuredCopy: Record<
  (typeof FEATURED_SLUGS)[number],
  { headline: string; summary: string }
> = {
  'inity-inc': {
    headline: 'A stronger digital foundation for a growing technology business.',
    summary:
      'A scalable website that makes complex technology services easier to understand and navigate, with a structured experience designed to support future digital growth.',
  },
  smartek: {
    headline: 'A modern digital experience built for clarity and growth.',
    summary:
      'An improved digital platform that presents services more clearly, simplifies navigation, and creates stronger pathways for customer inquiries.',
  },
}

const projectBySlug = new Map(publishedPortfolioProjects.map((project) => [project.slug, project]))

const projects: PortfolioProject[] = FEATURED_SLUGS.map((slug) => projectBySlug.get(slug)).filter(
  (project): project is PortfolioProject => Boolean(project),
)

/** Layout: portfolio/FeaturedWork — Inity Inc & Smartek case studies. */
const SelectedWork = () => {
  return (
    <section>
      <div className="container mb-10 text-center md:mb-16">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>Selected Work</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear">
            Built with care. <InstrumentText>Designed to evolve.</InstrumentText>
          </h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-3 max-w-[770px] text-base leading-relaxed text-[#808080]">
            Explore digital projects where thoughtful development, strong user experiences, and scalable foundations
            create room for continued improvement.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="container flex flex-col gap-16 md:gap-20 lg:gap-24">
        {projects.map((project, index) => {
          const copy = featuredCopy[project.slug as (typeof FEATURED_SLUGS)[number]]
          const description = copy ? `${copy.headline} ${copy.summary}` : project.description

          return (
            <RevealWrapperV2
              key={project.slug}
              className={`reveal-me group flex flex-col gap-8 lg:items-center lg:gap-10 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              <Link href={`/case-study/${project.slug}`} className="block flex-1 overflow-hidden rounded-radius-md">
                <figure className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="aspect-[16/10] w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </figure>
              </Link>

              <div className="flex flex-1 flex-col justify-center lg:max-w-md xl:max-w-lg">
                <p className="text-xs uppercase tracking-[0.2em] text-[#808080]">
                  {project.client} · {project.industry}
                </p>
                <h3 className="mt-3 text-3xl md:text-4xl lg:text-[44px] lg:leading-[1.15]">{project.title}</h3>
                <p className="mt-3 flex flex-wrap gap-2 text-sm text-[#808080]">
                  {project.serviceTags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
                <div className="mt-6">
                  <ButtonComponent href={`/case-study/${project.slug}`} variant="secondary" size="sm">
                    View Case Study
                  </ButtonComponent>
                </div>
              </div>
            </RevealWrapperV2>
          )
        })}
      </div>

      <RevealWrapper className="mt-12 flex justify-center md:mt-16">
        <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
          <ButtonComponent href="/portfolio" variant="primary" fullWidth>
            Explore More Work
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default SelectedWork
