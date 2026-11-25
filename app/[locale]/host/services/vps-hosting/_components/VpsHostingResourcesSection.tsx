import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import SectionLabel from '@/components/wow/shared/SectionLabel'

type JourneyStage = { id: string; title: string; description: string }

type VpsHostingResourcesSectionProps = {
  eyebrow: string
  title: string
  body?: string
  stages: ReadonlyArray<JourneyStage>
}

/** Copy of SalesJourneyGap (ElevateBrandV2) — item titles scale smaller on mobile. */
export default function VpsHostingResourcesSection({
  eyebrow,
  title,
  body = '',
  stages,
}: VpsHostingResourcesSectionProps) {
  return (
    <section id="whats-included" className="scroll-mt-24">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2 className="text-appear-2">{title}</h2>
            </TextAppearAnimation02>
          </div>
          {body ? (
            <div className="w-full md:w-80 lg:w-96">
              <TextAppearAnimation>
                <p className="text-appear text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
                  {body}
                </p>
              </TextAppearAnimation>
            </div>
          ) : null}
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="group flex transform items-start justify-between gap-3 pb-5 pt-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:scale-[1.01] hover:backdrop-blur-sm sm:gap-5 md:pb-10 md:pt-10"
            >
              <span className="w-7 shrink-0 font-instrument text-base italic leading-8 text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-8 sm:text-xl sm:leading-[32px]">
                {stage.id}
              </span>
              <h3 className="min-w-0 flex-1 text-[clamp(1rem,3.8vw,1.25rem)] font-light leading-snug tracking-[-0.02em] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-lg md:mt-2 md:w-[min(100%,730px)] md:flex-none md:text-[clamp(1.5rem,4.571428571vw,4rem)] md:leading-[1.15] md:tracking-[clamp(-0.05em,-0.205714286vw,-0.045em)] lg:text-nowrap">
                {stage.title}
              </h3>
              <p className="ml-2.5 w-[40%] shrink-0 self-center text-[0.7rem] leading-relaxed text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-auto sm:text-xs md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
