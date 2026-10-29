import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'
import { MARKETING_PORTFOLIO } from './marketing-content'

/** Design targets at 1400px viewport width; scale with vw and clamp for smaller/larger screens. */
const PORTFOLIO_FEATURED_IMAGE_HEIGHT = 'h-[clamp(12.5rem,41.786vw,585px)]'
const PORTFOLIO_SECONDARY_IMAGE_HEIGHT = 'h-[clamp(10rem,30.929vw,433px)]'

function ProjectCard({
  project,
  className,
  imageHeightClass,
  imageSizes,
}: {
  project: {
    category: string
    year: string
    title: string
    href: string
    image: string
  }
  className?: string
  imageHeightClass: string
  imageSizes: string
}) {
  return (
    <RevealWrapper className={`reveal-me group ${className ?? ''}`}>
      <Link href={project.href} className="block">
        <figure className="relative mb-5 overflow-hidden rounded-radius-md bg-dark/5 dark:bg-dark">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background: 'radial-gradient(circle at 50% 60%, rgba(99, 91, 255, 0.35) 0%, transparent 65%)',
            }}
          />
          <div className={`relative w-full ${imageHeightClass}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes={imageSizes}
            />
          </div>
        </figure>
        <div className="mb-2 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.12em] text-[#808080]">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-2xl leading-tight md:text-3xl lg:text-4xl">{project.title}</h3>
      </Link>
    </RevealWrapper>
  )
}

export default function MarketingPortfolioSection() {
  const content = MARKETING_PORTFOLIO

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
                {content.titleLine1}
                <br />
                {content.titleLine2} <InstrumentText>{content.titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md lg:pt-2">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-6">
              <ButtonComponentList>
                <ButtonComponent href={content.ctaHref} variant="white">
                  {content.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-14">
          <ProjectCard
            project={content.featured}
            imageHeightClass={PORTFOLIO_FEATURED_IMAGE_HEIGHT}
            imageSizes="(max-width: 1400px) 100vw, 1400px"
          />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {content.projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                imageHeightClass={PORTFOLIO_SECONDARY_IMAGE_HEIGHT}
                imageSizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 700px"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
