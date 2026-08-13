import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Understand your idea, goals, market and requirements.',
  },
  {
    id: 2,
    title: 'Build',
    description: 'Create the brand, digital presence and foundations you need.',
  },
  {
    id: 3,
    title: 'Launch',
    description: 'Bring your business to market across the right channels.',
  },
  {
    id: 4,
    title: 'Grow',
    description: 'Measure, improve and identify your next opportunities.',
  },
]

/** Home-20 — ProcessV9: 4 bordered step cards with step badges. */
const LaunchJourney = () => {
  return (
    <section aria-labelledby="launch-journey-heading">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Your Launch Journey</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 id="launch-journey-heading" className="text-appear mb-3">
              From idea to market, <InstrumentText>step by step.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              A clear process that keeps your launch focused and moving forward.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map((item) => (
            <RevealWrapper key={item.id} className="w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody/20">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-backgroundBody">
                    Step {item.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{item.title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LaunchJourney
