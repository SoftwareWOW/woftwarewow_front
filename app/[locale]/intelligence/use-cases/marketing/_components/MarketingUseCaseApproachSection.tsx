import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type ProcessStep = {
  step: string
  title: string
  description: string
}

type MarketingUseCaseApproachSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<ProcessStep>
}

/** Layout copy: Home-19 ProcessV10 (accelerate LeadToCustomer) — STEP pill cards, hover primary. */
export default function MarketingUseCaseApproachSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
}: MarketingUseCaseApproachSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map(({ step, title: stepTitle, description: stepDescription }) => (
            <RevealWrapper key={step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="group relative mx-auto grid min-h-[300px] grid-cols-1 content-between rounded-radius-sm border px-5 pb-[42px] pt-10 text-center transition-colors duration-300 hover:border-primary hover:bg-primary dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 transition-colors duration-300 group-hover:bg-backgroundBody dark:bg-backgroundBody dark:group-hover:bg-secondary">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody transition-colors duration-300 group-hover:text-secondary dark:text-secondary dark:group-hover:text-backgroundBody">
                    {step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black transition-colors duration-300 group-hover:text-white dark:text-white">
                  {stepTitle}
                </h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 transition-colors duration-300 group-hover:text-white/85 dark:text-backgroundBody/70 dark:group-hover:text-white/85">
                  {stepDescription}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}