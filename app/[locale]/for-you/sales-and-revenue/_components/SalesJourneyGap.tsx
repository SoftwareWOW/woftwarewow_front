import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const stages = [
  {
    id: '01',
    title: 'Attract',
    description: 'Create a consistent flow of potential opportunities.',
  },
  {
    id: '02',
    title: 'Qualify',
    description: 'Focus time and effort on prospects with genuine potential.',
  },
  {
    id: '03',
    title: 'Nurture',
    description: 'Keep opportunities moving with better follow-up and communication.',
  },
  {
    id: '04',
    title: 'Convert',
    description: 'Improve the path from qualified opportunity to customer.',
  },
  {
    id: '05',
    title: 'Measure',
    description: "Understand what's moving, what's stuck and what drives revenue.",
  },
]

/** Layout: Home-19 ElevateBrandV2 — split header + large numbered row list. */
const SalesJourneyGap = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Find the Gap</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2 className="text-appear-2">Growth can stall anywhere in the sales journey.</h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <TextAppearAnimation>
              <p className="text-appear text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
                More leads alone won&apos;t fix a broken sales process. We look at where opportunities are being lost
                — and what can improve them.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10">
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {stage.id}
              </span>
              <h3 className="mt-2 text-nowrap text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                {stage.title}
              </h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SalesJourneyGap
