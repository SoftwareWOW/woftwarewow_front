import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { portfolioProjects } from '@/app/[locale]/portfolio/_data/projects'
import Link from 'next/link'

const selectedProjects = portfolioProjects
  .filter((project) => project.categories.includes('Software') && project.status === 'published')
  .slice(0, 3)

/** Layout: portfolio FeaturedWork — alternating image/copy project cards. */
const SelectedWork = () => {
  return (
    <section>
      <div className="container mb-10 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Selected Work</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear">
            Web applications in <InstrumentText>action.</InstrumentText>
          </h2>
        </TextAppearAnimation>
      </div>

      <div className="container flex flex-col gap-16 md:gap-20 lg:gap-24">
        {selectedProjects.map((project, index) => (
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
              <p className="mt-4 text-base leading-relaxed text-[#808080] md:text-lg">{project.description}</p>
              <div className="mt-6">
                <ButtonComponent href={`/case-study/${project.slug}`} variant="secondary" size="sm">
                  View Case Study
                </ButtonComponent>
              </div>
            </div>
          </RevealWrapperV2>
        ))}
      </div>

      <RevealWrapper className="mt-12 flex justify-center md:mt-16">
        <ButtonComponentList>
          <ButtonComponent href="/portfolio" variant="primary">
            View All Work
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default SelectedWork
