import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const processSteps = [
  {
    step: 'Step 01',
    title: 'Understand',
    description: 'Learn how your business operates, which tools you use, and where challenges exist.',
  },
  {
    step: 'Step 02',
    title: 'Plan',
    description: 'Identify priorities, map workflows, and define the right technical approach.',
  },
  {
    step: 'Step 03',
    title: 'Build & Connect',
    description: 'Develop the solution, integrate existing tools, and test how everything works together.',
  },
  {
    step: 'Step 04',
    title: 'Improve',
    description: 'Refine the system based on real usage, feedback, and evolving business needs.',
  },
]

/** Layout: homepage-24/ProcessV11 */
const OurApproach = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Approach</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Understand first. <InstrumentText>Build what matters.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl">
              We don&apos;t begin by pushing a particular platform. We start with your business and identify the
              systems and improvements that will create practical value.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {processSteps.map(({ step, title, description }) => (
            <RevealWrapper key={step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between rounded-radius-md border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-7 flex justify-center md:mt-14">
          <ButtonComponentList className="flex" itemClassName="block w-full md:inline-block md:w-auto">
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
