import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsProjectCard } from '@/lib/strapi/mappers/page-sections'

interface CaseStudyType {
  slug: string
  content: string
  [key: string]: unknown
}

const caseStudies: CaseStudyType[] = getMarkDownData('data/management-consulting/project')

type DisplayProject = {
  slug: string
  title: string
  description: string
  image: string
  alt: string
  category: string
  href: string
}

type StrategyInActionProps = { projects?: CmsProjectCard[] | null }

function mapCmsProjects(projects: CmsProjectCard[]): DisplayProject[] {
  return projects.map((project, index) => {
    const slug =
      project.href?.replace(/\/$/, '').split('/').pop() ??
      project.title.toLowerCase().replace(/\s+/g, '-') ??
      String(index)

    return {
      slug,
      title: project.title,
      description: project.description ?? '',
      image: project.thumbnail ?? '',
      alt: project.alt ?? project.title,
      category: '',
      href: project.href ?? `/case-study/${slug}`,
    }
  })
}

function mapFallbackProjects(items: CaseStudyType[]): DisplayProject[] {
  return items.map((item) => ({
    slug: item.slug,
    title: String(item.title ?? item.slug),
    description: String(item.description ?? ''),
    image: String(item.image ?? ''),
    alt: String(item.title ?? item.slug),
    category: String(item.category ?? ''),
    href: `/management-consulting/project/${item.slug}`,
  }))
}

const StrategyInAction = ({ projects }: StrategyInActionProps = {}) => {
  const displayProjects = projects?.length ? mapCmsProjects(projects) : mapFallbackProjects(caseStudies)

  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>Strategy in Action</SectionLabel>
          </RevealWrapper>
          <HeadingWithInstrument className="text-center" before="Challenge to results," accent="proven" />
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {displayProjects.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="reveal-me underline-hover-effect group relative flex flex-col items-center lg:flex-row">
              <figure className="-z-30 max-w-[870px] overflow-hidden">
                <Link href={item.href} className="block">
                  <img
                    src={item.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.alt}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                {item.category ? (
                  <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                    {item.category}
                  </p>
                ) : null}
                <div className="blog-title mb-20 lg:mb-[104px]">
                  <Link href={item.href}>
                    <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                </div>
                <ButtonComponent href={item.href} variant="white">
                  Read Case Study
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/case-study" variant="white">
              Read More Case Studies
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default StrategyInAction
