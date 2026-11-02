import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const processSteps = [
  {
    step: '01',
    title: 'Assess',
    description:
      'We review your existing applications, integrations, dependencies, and technical challenges to identify opportunities for improvement.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We define the right modernization approach, prioritize improvements, and create a roadmap aligned with your business needs.',
  },
  {
    step: '03',
    title: 'Modernize & Connect',
    description:
      'We upgrade applications, develop integrations, migrate components where appropriate, and test the solution against agreed requirements.',
  },
  {
    step: '04',
    title: 'Optimize & Evolve',
    description:
      'We monitor performance, address issues, and continue improving the systems as your technology and business requirements change.',
  },
]

/** Layout: homepage-19/ProcessV10 — four numbered step-badge cards. */
const OurProcess = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Process</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Move forward without <InstrumentText>starting over.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mx-auto mt-3 max-w-3xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              Every modernization project begins with understanding what you already have, what needs to change, and how
              to move forward with manageable risk.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {processSteps.map(({ step, title, description }) => (
            <div key={step} className="relative w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="absolute left-1/2 top-2 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                  {step}
                </span>
              </div>
              <RevealWrapper className="reveal-me">
                <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between rounded-radius-sm border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                  <h6 className="text-2xl font-light leading-[1.1] text-black dark:text-white">{title}</h6>
                  <p className="text-base font-light leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                    {description}
                  </p>
                </div>
              </RevealWrapper>
            </div>
          ))}
        </div>

        <RevealWrapper className="reveal-me flex justify-center max-md:w-full">
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
