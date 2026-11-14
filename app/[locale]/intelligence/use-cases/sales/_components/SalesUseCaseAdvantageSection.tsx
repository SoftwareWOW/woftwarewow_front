import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const cardClassName =
  'relative rounded-radius-md border border-secondary/15 bg-background px-[30px] pb-[30px] pt-8 dark:border-backgroundBody/25 dark:bg-background md:pt-12'

const CloseIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary/20 dark:bg-backgroundBody/20">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M3 3L9 9M9 3L3 9"
        className="stroke-secondary dark:stroke-backgroundBody"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
)

const CheckIcon = () => (
  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary dark:bg-backgroundBody">
    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        className="stroke-backgroundBody dark:stroke-secondary"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
)

const ComparisonList = ({ steps, variant }: { steps: readonly string[]; variant: 'before' | 'after' }) => (
  <ul className="[&>*:not(:last-child)]:mb-4 md:[&>*:not(:last-child)]:mb-5">
    {steps.map((step) => (
      <li
        key={step}
        className={`flex list-none items-start gap-4 text-[17px] leading-[1.5] ${
          variant === 'before'
            ? 'text-secondary/55 dark:text-backgroundBody/55'
            : 'text-secondary/80 dark:text-backgroundBody/85'
        }`}
      >
        {variant === 'after' ? <CheckIcon /> : <CloseIcon />}
        <span>{step}</span>
      </li>
    ))}
  </ul>
)

type SalesUseCaseAdvantageSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  beforeLabel: string
  afterLabel: string
  beforeSteps: readonly string[]
  afterSteps: readonly string[]
}

/** Layout copy: packages/digital-transformation BeforeAfterGap — X / check comparison cards. */
export default function SalesUseCaseAdvantageSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  beforeLabel,
  afterLabel,
  beforeSteps,
  afterSteps,
}: SalesUseCaseAdvantageSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 md:mb-8">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me mt-10 grid justify-center gap-6 md:mt-16 lg:grid-cols-2 lg:gap-8">
          <div className={cardClassName}>
            <h6 className="mb-8 text-2xl font-light uppercase tracking-[0.04em] text-secondary/60 dark:text-backgroundBody/55 md:mb-10 md:text-3xl">
              {beforeLabel}
            </h6>
            <ComparisonList steps={beforeSteps} variant="before" />
          </div>

          <div className={cardClassName}>
            <h6 className="mb-8 text-2xl font-light uppercase tracking-[0.04em] text-secondary dark:text-backgroundBody md:mb-10 md:text-3xl">
              {afterLabel}
            </h6>
            <ComparisonList steps={afterSteps} variant="after" />
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
