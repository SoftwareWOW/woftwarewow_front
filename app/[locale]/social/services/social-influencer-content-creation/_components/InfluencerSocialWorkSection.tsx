import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'

type Project = {
  category: string
  title: string
  href: string
  image: string
}

type InfluencerSocialWorkSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  projects: ReadonlyArray<Project>
  viewMoreHref: string
  viewMoreLabel: string
}

/** Layout copy: Home-20 BlogPostsV7 — horizontal blog cards + bottom CTA. */
export default function InfluencerSocialWorkSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  projects,
  viewMoreHref,
  viewMoreLabel,
}: InfluencerSocialWorkSectionProps) {
  return (
    <section className="z-20">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">{eyebrow}</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>
        <div className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-[30px]">
          {projects.map((project) => (
            <div
              key={project.title}
              className="blog-card group relative min-h-[553px] w-full cursor-pointer border p-2.5 dark:border-dark max-lg:max-w-[400px] md:w-[calc(33.333%-20px)] md:min-w-0 md:hover:w-[450px]"
            >
              <Link href={project.href} className="w-full">
                <figure className="h-[238px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </figure>
              </Link>
              <div className="px-2.5">
                <Link href={project.href} className="w-full">
                  <div className="rv-badge mt-7">
                    <span className="rv-badge-text">{project.category}</span>
                  </div>
                  <div className="blog-title mb-[30px] mt-3.5">
                    <h3 className="text[25px] md:text-3xl lg:text-[32px] lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {project.title}
                    </h3>
                  </div>
                </Link>
                <div className="absolute bottom-[22px]">
                  <Link
                    href={project.href}
                    className="rv-button rv-button-primary2 w-full md:w-auto [&_.rv-button-bottom_span]:!text-white"
                  >
                    <div className="rv-button-top flex items-center !text-center">
                      <span className="pr-1">VIEW PROJECT</span>
                      <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="" aria-hidden />
                      <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="" aria-hidden />
                    </div>
                    <div className="rv-button-bottom flex items-center !text-center">
                      <span className="pr-1 !text-white">VIEW PROJECT</span>
                      <img
                        className="inline brightness-0 invert"
                        src="/images/icons/top-arrow.svg"
                        alt=""
                        aria-hidden
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RevealWrapper as="ul" className="reveal-me mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href={viewMoreHref} className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>{viewMoreLabel}</span>
              </div>
              <div className="rv-button-bottom">
                <span>{viewMoreLabel}</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}
