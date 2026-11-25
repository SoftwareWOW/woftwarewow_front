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

/** Copy of SalesJourneyGap (ElevateBrandV2) — md-safe row layout; titles scale up only from lg. */
export default function VpsHostingResourcesSection({
  eyebrow,
  title,
  body = '',
  stages,
}: VpsHostingResourcesSectionProps) {
  return (
    <section id="whats-included" className="scroll-mt-28 md:scroll-mt-32">
      <div className="container overflow-x-clip">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-14 md:flex-row md:items-center lg:mb-20 lg:justify-start">
          <div className="min-w-0 flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2 className="text-appear-2 text-[clamp(1.75rem,4vw,4rem)] font-light leading-[1.2]">
                {title}
              </h2>
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
              className="group flex flex-col gap-2 py-5 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5 hover:backdrop-blur-sm sm:gap-3 md:flex-row md:items-center md:justify-between md:gap-4 md:py-7 lg:gap-5 lg:py-10"
            >
              <div className="flex min-w-0 flex-1 items-start gap-3 sm:gap-4">
                <span className="w-7 shrink-0 font-instrument text-base italic leading-8 text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-8 sm:text-xl sm:leading-[32px]">
                  {stage.id}
                </span>
                <h3 className="min-w-0 flex-1 text-[clamp(1.05rem,2.6vw,1.35rem)] font-light leading-snug tracking-[-0.02em] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:text-[clamp(1.2rem,2.2vw,1.75rem)] lg:text-[clamp(1.75rem,3.2vw,3.25rem)] lg:leading-[1.15] xl:text-[clamp(2rem,4vw,4rem)] xl:tracking-[clamp(-0.05em,-0.205714286vw,-0.045em)] xl:whitespace-nowrap">
                  {stage.title}
                </h3>
              </div>
              <p className="min-w-0 pl-10 text-[0.8125rem] leading-relaxed text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:pl-12 md:ml-0 md:w-[min(100%,240px)] md:shrink-0 md:self-center md:pl-0 md:text-sm md:leading-[1.5] lg:w-[300px] lg:text-base lg:leading-[1.6] lg:tracking-[0.32px] xl:w-[370px]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
