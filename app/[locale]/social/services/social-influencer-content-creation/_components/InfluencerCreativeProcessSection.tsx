import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Step = {
  number: string
  title: string
  description: string
}

type InfluencerCreativeProcessSectionProps = {
  eyebrow: string
  title: string
  description?: string
  steps: ReadonlyArray<Step>
  showCta?: boolean
  ctaLabel?: string
  ctaHref?: string
}

/** Layout copy: design/brand-identity CreativeProcessSection (wowmarketing MarketingProcessSection). */
export default function InfluencerCreativeProcessSection({
  eyebrow,
  title,
  description,
  steps,
  showCta = false,
  ctaLabel = 'Start a Project',
  ctaHref = '/meet',
}: InfluencerCreativeProcessSectionProps) {
  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>{title}</h2>
          </RevealWrapper>
          {description ? (
            <RevealWrapper className="reveal-me mt-4">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
            </RevealWrapper>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-10">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none font-black leading-none text-secondary/15 dark:text-backgroundBody/10 text-[clamp(5rem,22vw,11.25rem)]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>

        {showCta ? (
          <RevealWrapper className="mt-14 flex justify-center">
            <ButtonComponentList>
              <ButtonComponent href={ctaHref} variant="primary">
                {ctaLabel}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}
