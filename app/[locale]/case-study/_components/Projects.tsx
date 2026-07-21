import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'

const projects = [
  {
    slug: 'ccg-breakthrough',
    category: 'Featured Case Study',
    title: 'CCG Breakthrough',
    year: 2025,
    image: '/images/wow/Hero/project/case-study/ccg.png',
    alt: 'CCG Breakthrough case study',
  },
  {
    slug: 'davinci-lounge',
    category: 'Creativity In Motion',
    title: 'DaVinci Lounge',
    year: 2025,
    image: '/images/wow/Hero/project/case-study/davinci.png',
    alt: 'DaVinci Lounge project',
  },
  {
    slug: 'inity-inc',
    category: 'Case Study',
    title: 'Inity Inc',
    year: 2025,
    image: '/images/wow/Hero/project/case-study/InityInc.png',
    alt: 'Inity Inc case study',
  },
  {
    slug: 'yo-doner',
    category: 'Project',
    title: 'Yo Doner',
    year: 2024,
    image: '/images/wow/Hero/project/case-study/yodoner.png',
    alt: 'Yo Doner project',
  },
  {
    slug: 'smartek',
    category: 'Project',
    title: 'Smartek',
    year: 2020,
    image: '/images/wow/Hero/project/case-study/smartek.png',
    alt: 'Smartek project',
  },
  {
    slug: 'creshendo',
    category: 'Case Study',
    title: 'Creshendo',
    year: 2024,
    image: '/images/wow/Hero/project/case-study/creshendo.png',
    alt: 'Creshendo case study',
  },
]

const Projects = () => {
  return (
    <section className="overflow-hidden">
      <div className="container grid gap-20 max-md:gap-y-16 md:grid-cols-2 xl:gap-16">
        {projects.map((project) => (
          <RevealWrapperV2
            as="a"
            href={`/digital-agency/project/${project.slug}`}
            key={project.slug}
            className="reveal-me project-item underline-hover-effect group col-span-full flex flex-col gap-x-10 gap-y-6 lg:items-center">
            <figure className="overflow-hidden max-lg:w-full">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
              />
            </figure>
            <div className="project-item-content">
              <p className="text-xs font-normal uppercase leading-3 tracking-[5px] text-secondary dark:text-backgroundBody md:leading-6 md:tracking-[8px]">
                {project.category}
              </p>
              <div className="blog-title mb-2 mt-3 md:mt-4 lg:mb-4 lg:mt-5 xl:mt-7">
                <h3 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-1.68px]">
                  {project.title}
                </h3>
              </div>
              <p className="text-base leading-[1.4] tracking-[0.48px] text-[#000000b3] dark:text-dark-100 md:text-2xl">
                /{project.year}
              </p>
            </div>
          </RevealWrapperV2>
        ))}
      </div>

      <RevealWrapper className="mt-10 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/projects/all" variant="primary">
            View all
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default Projects
