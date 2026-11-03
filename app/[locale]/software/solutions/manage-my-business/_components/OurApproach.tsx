import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    step: '01',
    title: 'Understand',
    description: 'Learn how your business operates, which tools you use, and where challenges exist.',
  },
  {
    step: '02',
    title: 'Plan',
    description: 'Identify priorities, map workflows, and define the right technical approach.',
  },
  {
    step: '03',
    title: 'Build & Connect',
    description: 'Develop the solution, integrate existing tools, and test how everything works together.',
  },
  {
    step: '04',
    title: 'Improve',
    description: 'Refine the system based on real usage, feedback, and evolving business needs.',
  },
]

/** Layout: business-systems-automation/OurProcess (homepage-16/ProcessV8). */
const OurApproach = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Our Approach</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Understand first. <InstrumentText>Build what matters.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto mt-3 max-w-3xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              We don&apos;t begin by pushing a particular platform. We start with your business and identify the
              systems and improvements that will create practical value.
            </p>
          </RevealWrapper>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map((item) => (
            <div key={item.step} className="relative w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="absolute left-1/2 top-2 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                  {item.step}
                </span>
              </div>
              <RevealWrapper className="reveal-me">
                <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between rounded-radius-sm border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                  <h6 className="text-2xl font-light leading-[1.1] text-black dark:text-white">{item.title}</h6>
                  <p className="text-base font-light leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                    {item.description}
                  </p>
                </div>
              </RevealWrapper>
            </div>
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

export default OurApproach
