import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'

const steps = [
  {
    number: '01',
    title: 'Define',
    description: 'Goals, audience, requirements, positioning and launch priorities.',
  },
  {
    number: '02',
    title: 'Create',
    description: 'Brand, design, content, technology and digital experiences take shape.',
  },
  {
    number: '03',
    title: 'Prepare',
    description: 'Testing, optimization, integrations, tracking and campaign preparation.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Go live, activate campaigns, monitor performance and improve from real-world feedback.',
  },
]

/** Layout: Services ServiceProces — numbered steps with a single divider between columns. */
const LaunchPath = () => {
  return (
    <section>
      <div className="container">
        <RevealWrapper className="reveal-me mb-20">
          <h2 className="text-center max-md:text-3xl md:text-6xl md:leading-[1.2] md:tracking-[-1.68px]">
            A clear path from idea to launch.
          </h2>
        </RevealWrapper>

        <RevealWrapper>
          <div className="grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 md:gap-x-0 lg:gap-y-16">
            {steps.map((step, index) => (
              <RevealWrapper
                key={step.number}
                className={`text-center md:px-10 ${
                  index % 2 === 0
                    ? 'md:border-r md:border-[#e5e5e5] dark:md:border-white/10'
                    : ''
                }`}
              >
                <span className="max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                  {step.number}
                </span>
                <h3 className="mb-5 mt-8 max-md:text-3xl md:text-[56px] md:leading-[1.2] md:tracking-[-1.68px]">
                  {step.title}
                </h3>
                <p className="text-base leading-[1.4] tracking-[0.32px] text-[#808080]">{step.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-7 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start Your Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default LaunchPath
