import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  category: string
  title: string
  href: string
  image: string
  showProjectButton?: boolean
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

const CARD_IMAGE_HEIGHT = 'h-[clamp(10rem,28vw,400px)]'

/** Layout copy: Home-20 PortfolioV6 — WOW tokens, 3-col grid per influencer Figma. */
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
    <section className="bg-background transition-colors duration-300 dark:bg-background" aria-labelledby="influencer-social-work-heading">
      <div className="container">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <RevealWrapper className="mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 id="influencer-social-work-heading" className="text-appear">
                {titleBefore}
                <InstrumentText>{titleAccent}</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full max-w-md lg:pt-2">
            <RevealWrapper className="reveal-me">
              <p className="text-base leading-relaxed text-[#808080] md:text-right md:text-lg">{description}</p>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {projects.map((project) => (
            <RevealWrapper key={project.title} className="reveal-me group flex flex-col">
              <Link href={project.href} className="block">
                <figure className={`relative mb-5 overflow-hidden rounded-radius-md bg-dark/5 dark:bg-dark ${CARD_IMAGE_HEIGHT}`}>
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-[1] opacity-60"
                    style={{
                      background: 'radial-gradient(circle at 50% 60%, rgba(99, 91, 255, 0.35) 0%, transparent 65%)',
                    }}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute left-4 top-4 z-[2] rounded-radius-sm border border-secondary/20 bg-backgroundBody/90 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-secondary dark:border-backgroundBody/25 dark:bg-dark/90 dark:text-backgroundBody">
                    {project.category}
                  </span>
                </figure>
                <h3 className="text-2xl leading-tight md:text-3xl lg:text-4xl">{project.title}</h3>
              </Link>
              {project.showProjectButton ? (
                <div className="mt-6">
                  <ButtonComponentList>
                    <ButtonComponent href={project.href} variant="secondary">
                      VIEW PROJECT
                    </ButtonComponent>
                  </ButtonComponentList>
                </div>
              ) : null}
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href={viewMoreHref} variant="secondary">
              {viewMoreLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
