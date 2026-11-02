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

const FEATURED_SLUGS = ['inity-inc', 'smartek'] as const

const featuredCopy: Record<
  (typeof FEATURED_SLUGS)[number],
  { headline: string; summary: string }
> = {
  'inity-inc': {
    headline: 'A clearer platform for complex technology services.',
    summary:
      "A scalable digital experience designed to make Inity's technology services easier to understand, navigate, and explore—creating a stronger foundation for customer engagement.",
  },
  smartek: {
    headline: 'A modern digital presence built for clarity and connection.',
    summary:
      "A refreshed platform that organizes Smartek's services into a more intuitive experience, helping visitors find relevant solutions and move more easily toward consultation.",
  },
}

const projectBySlug = new Map(publishedPortfolioProjects.map((project) => [project.slug, project]))

const projects: PortfolioProject[] = FEATURED_SLUGS.map((slug) => projectBySlug.get(slug)).filter(
  (project): project is PortfolioProject => Boolean(project),
)

/** Layout: homepage-24/ProjectCaseStudies — overlay case-study cards + Explore More. */
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
              Better digital foundations. <InstrumentText>Built to move forward.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-3xl text-[#808080]">
              Explore projects where thoughtful technology, improved digital experiences, and modern development
              approaches have helped businesses strengthen their online foundations.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {projects.map((item) => {
            const copy = featuredCopy[item.slug as (typeof FEATURED_SLUGS)[number]]
            const description = copy ? `${copy.headline} ${copy.summary}` : item.description

            return (
              <RevealWrapper
                key={item.slug}
                className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row"
              >
                <figure className="relative -z-30 h-[240px] w-full max-w-[870px] overflow-hidden rounded-radius-md sm:h-[280px] md:h-[320px] lg:h-[360px]">
                  <Link href={`/case-study/${item.slug}`} className="block h-full w-full rounded-radius-md">
                    <img
                      src={item.image}
                      className="absolute inset-0 block h-full w-full object-cover object-center transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                      alt={item.alt}
                    />
                  </Link>
                </figure>

                <div className="z-30 w-full overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                  <p className="mb-3.5 text-sm font-light uppercase leading-6 tracking-[3px] text-black dark:text-white">
                    {item.client} · {item.industry}
                  </p>
                  <div className="blog-title mb-6 lg:mb-8">
                    <Link href={`/case-study/${item.slug}`}>
                      <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                        {item.title}
                      </h3>
                    </Link>
                  </div>
                  <p className="mb-3 text-sm uppercase tracking-[0.96px] text-secondary/70 dark:text-backgroundBody/70">
                    {item.serviceTags.join(' · ')}
                  </p>
                  <p className="mb-8 text-base font-light leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70 lg:mb-10">
                    {description}
                  </p>
                  <ButtonComponent href={`/case-study/${item.slug}`} variant="white">
                    View Case Study
                  </ButtonComponent>
                </div>
              </RevealWrapper>
            )
          })}
        </div>

        <RevealWrapper className="flex justify-center">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/portfolio" variant="white" fullWidth>
              Explore More Work
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SelectedWork
