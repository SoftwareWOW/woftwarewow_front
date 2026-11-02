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

const FEATURED_SLUGS = ['inity-inc', 'smartek', 'ccg-breakthrough'] as const

const featuredCopy: Record<
  (typeof FEATURED_SLUGS)[number],
  { category: string; summary: string }
> = {
  'inity-inc': {
    category: 'Technology & Services',
    summary:
      'A structured digital experience that makes complex technology services easier to navigate—with clearer information hierarchy, interface layout, and pathways through the site.',
  },
  smartek: {
    category: 'Professional Services',
    summary:
      'A refreshed platform with improved service presentation and navigation—helping visitors understand offerings and move toward consultation through a more intuitive interface.',
  },
  'ccg-breakthrough': {
    category: 'Consulting',
    summary:
      'A refined web presence with thoughtful layout and visual design—communicating services clearly and guiding visitors through a credible, connection-focused experience.',
  },
}

const projectBySlug = new Map(publishedPortfolioProjects.map((project) => [project.slug, project]))

const projects: PortfolioProject[] = FEATURED_SLUGS.map((slug) => projectBySlug.get(slug)).filter(
  (project): project is PortfolioProject => Boolean(project),
)

/** Layout: homepage-24/ProjectCaseStudies — overlapping image + floating panel. */
const SelectedWork = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Selected Work</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Ideas shaped into <InstrumentText>digital experiences.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto mt-3 max-w-[770px]">
            <p className="text-base leading-relaxed text-[#808080]">
              Explore how thoughtful design and clear digital experiences help businesses communicate, connect, and
              grow.
            </p>
          </RevealWrapper>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {projects.map((project) => {
            const copy = featuredCopy[project.slug as (typeof FEATURED_SLUGS)[number]]

            return (
              <RevealWrapper
                key={project.slug}
                className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row"
              >
                <figure className="-z-30 max-w-[870px] overflow-hidden">
                  <Link href={`/case-study/${project.slug}`} className="block">
                    <img
                      src={project.image}
                      className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                      alt={project.alt}
                    />
                  </Link>
                </figure>

                <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                  <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                    {copy?.category ?? project.industry}
                  </p>
                  <div className="blog-title mb-10 lg:mb-16">
                    <Link href={`/case-study/${project.slug}`}>
                      <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="mt-4 text-base leading-relaxed text-[#808080]">{copy?.summary}</p>
                  </div>
                  <ButtonComponentList>
                    <ButtonComponent href={`/case-study/${project.slug}`} variant="white">
                      Read Case Study
                    </ButtonComponent>
                  </ButtonComponentList>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper className="reveal-me flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/portfolio" variant="secondary">
              Explore More Work
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SelectedWork
