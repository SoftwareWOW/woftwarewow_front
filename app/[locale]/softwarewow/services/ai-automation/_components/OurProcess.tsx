import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    step: '01',
    title: 'Identify',
    description: 'Find the workflows and problems where AI can create value.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Define the right automation, integrations, and user experience.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'Develop, connect, test, and refine the solution.',
  },
  {
    step: '04',
    title: 'Improve',
    description: 'Monitor performance and evolve the automation over time.',
  },
]

/** Layout: homepage-16/ProcessV8 — 4 bordered step cards. */
const OurProcess = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Our Process</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              From opportunity to <InstrumentText>automation.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map((item) => (
            <RevealWrapper key={item.step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {item.step}
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
        <RevealWrapper className="mt-7 flex justify-center max-md:w-full md:mt-14">
          <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurProcess
