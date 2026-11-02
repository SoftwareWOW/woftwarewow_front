import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand your operations, existing tools, workflow challenges, and business priorities.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Map processes, define requirements, and plan the right system architecture and user experience.',
  },
  {
    step: '03',
    title: 'Build & Connect',
    description: 'Develop the solution, integrate your tools, automate workflows, and test how everything works together.',
  },
  {
    step: '04',
    title: 'Launch & Improve',
    description: 'Deploy the system, support your team, and refine performance as your business evolves.',
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
              From complex workflows to <InstrumentText>connected systems.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto mt-3 max-w-3xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              We start by understanding how your business operates, then design and build systems that support the way
              your teams actually work.
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

export default OurProcess
