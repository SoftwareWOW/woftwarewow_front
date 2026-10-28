import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Check, CircleX } from 'lucide-react'
import { EVENTS_CHALLENGE } from './events-content'

const cardClassName =
  'relative rounded-radius-md border border-secondary/15 bg-background px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 dark:bg-background md:pt-12'

const ProblemSteps = ({ steps }: { steps: readonly string[] }) => (
  <div className="flex flex-col items-start gap-4 text-left">
    {steps.map((step) => (
      <div key={step} className="flex w-full flex-row flex-nowrap items-center gap-3">
        <CircleX aria-hidden className="size-5 shrink-0 opacity-70 text-secondary dark:text-backgroundBody" strokeWidth={1.5} />
        <p className="text-base leading-[1.5] text-secondary/70 dark:text-backgroundBody/70 md:text-[17px]">{step}</p>
      </div>
    ))}
  </div>
)

const SolutionSteps = ({ steps }: { steps: readonly string[] }) => (
  <div className="flex flex-col items-start gap-4 text-left">
    {steps.map((step) => (
      <div key={step} className="flex w-full flex-row flex-nowrap items-center gap-3">
        <Check aria-hidden className="size-5 shrink-0 text-secondary dark:text-backgroundBody" strokeWidth={1.5} />
        <p className="text-base leading-[1.5] text-secondary dark:text-backgroundBody md:text-[17px]">{step}</p>
      </div>
    ))}
  </div>
)

export default function EventsChallengeSection() {
  const content = EVENTS_CHALLENGE

  return (
    <section className="relative overflow-hidden bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 md:mb-8">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className={cardClassName}>
            <h6 className="mb-6 text-2xl font-light uppercase tracking-[0.04em] text-secondary dark:text-backgroundBody md:text-3xl">
              {content.withoutAiLabel}
            </h6>
            <ProblemSteps steps={content.withoutSteps} />
          </div>

          <div className={cardClassName}>
            <h6 className="mb-6 bg-gradient-to-r from-[#8b7cff] via-[#b794f4] to-[#f4a8b8] bg-clip-text text-2xl font-light uppercase tracking-[0.04em] text-transparent md:text-3xl">
              {content.withAiLabel}
            </h6>
            <SolutionSteps steps={content.withSteps} />
          </div>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-10 text-center md:mt-14">
          <ButtonComponentList className="flex justify-center">
            <ButtonComponent href={content.ctaHref} variant="white">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
