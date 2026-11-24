import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type Stage = { id: string; title: string; description: string }

type SpeakingWhatWeSupportSectionProps = {
  eyebrow: string
  title: string
  stages: ReadonlyArray<Stage>
}

/** Copy of SalesJourneyGap (ElevateBrandV2) — centered one-line title + compact row list. */
export default function SpeakingWhatWeSupportSection({
  eyebrow,
  title,
  stages,
}: SpeakingWhatWeSupportSectionProps) {
  return (
    <section>
      <div className="container">
        <div className="mb-12 text-center md:mb-16 lg:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-none text-[clamp(1.75rem,3.2vw,3.5rem)] font-light leading-[1.2] tracking-[-0.03em] lg:whitespace-nowrap">
              {title}
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="group flex items-start gap-3 pb-5 pt-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-[1.01] hover:backdrop-blur-sm sm:gap-4 md:items-center md:justify-between md:gap-5 md:pb-10 md:pt-10"
            >
              <span className="w-7 shrink-0 font-instrument text-base italic leading-8 text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-8 sm:text-xl sm:leading-[32px]">
                {stage.id}
              </span>
              <h3 className="min-w-0 flex-1 text-base font-light leading-snug tracking-[-0.02em] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-lg md:mt-0 md:w-[min(100%,730px)] md:flex-none md:text-[clamp(1.5rem,4.571428571vw,4rem)] md:leading-[1.15] md:tracking-[clamp(-0.05em,-0.205714286vw,-0.045em)] lg:text-nowrap">
                {stage.title}
              </h3>
              <p className="ml-auto w-[42%] shrink-0 self-center text-xs leading-relaxed text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-[45%] md:ml-2.5 md:w-[370px] md:shrink-0 md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
