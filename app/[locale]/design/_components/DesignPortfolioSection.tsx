import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DESIGN_PORTFOLIO } from './design-content'

export default function DesignPortfolioSection() {
  const content = DESIGN_PORTFOLIO

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <RevealWrapper className="mb-3">
              <SectionLabel>{content.eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md lg:pt-2">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right md:text-lg">{content.description}</p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-6 flex md:justify-end">
              <ButtonComponentList>
                <ButtonComponent href={content.ctaHref} variant="secondary">
                  {content.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {content.projects.map((project) => (
            <RevealWrapper
              key={project.title}
              as="article"
              className="reveal-me group relative overflow-hidden rounded-radius-sm"
            >
              <Link href={project.href} className="block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-sm">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-radius-sm border border-white/20 bg-backgroundBody/95 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-dark-200/95 sm:bottom-6 sm:left-6 sm:right-6 sm:px-5 sm:py-4">
                  <h3 className="text-lg font-normal text-[#0D0D0D] transition-colors duration-300 group-hover:text-primary dark:text-[#F2F2F2] md:text-2xl">
                    {project.title}
                  </h3>
                  <figure className="relative size-12 shrink-0 cursor-pointer overflow-hidden rounded-radius-sm bg-primary md:size-14">
                    <ArrowUpRight
                      aria-hidden
                      className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 !stroke-white !text-white opacity-100 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-6 group-hover:opacity-0 md:size-7"
                      strokeWidth={2}
                    />
                    <ArrowUpRight
                      aria-hidden
                      className="absolute size-6 -translate-x-3 translate-y-8 !stroke-white !text-white opacity-0 transition-all duration-500 group-hover:translate-x-[14px] group-hover:translate-y-[14px] group-hover:opacity-100 md:size-7"
                      strokeWidth={2}
                    />
                  </figure>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
