import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { featuredProjects } from '../_data/projects'

/** Layout: case-study/_components/Projects.tsx — alternating lg:flex-row layout, featured subset. */
const FeaturedWork = () => {
  return (
    <section>
      <div className="container mb-10 text-center md:mb-16">
        <TextAppearAnimation>
          <h2 className="text-appear">Selected work. Real challenges.</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
            A closer look at projects where strategy, creativity, and technology came together.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="container flex flex-col gap-16 md:gap-20 lg:gap-24">
        {featuredProjects.map((project, index) => (
          <RevealWrapperV2
            key={project.slug}
            className={`reveal-me group flex flex-col gap-8 lg:items-center lg:gap-10 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            <Link
              href={`/case-study/${project.slug}`}
              className="block flex-1 overflow-hidden rounded-radius-md"
            >
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
              <p className="mt-4 text-base leading-relaxed text-[#808080] md:text-lg">{project.tagline}</p>
              <Link
                href={`/case-study/${project.slug}`}
                className="mt-6 inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-70"
              >
                View Case Study
                <ArrowUpRight aria-hidden className="size-5" strokeWidth={2} />
              </Link>
            </div>
          </RevealWrapperV2>
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork
