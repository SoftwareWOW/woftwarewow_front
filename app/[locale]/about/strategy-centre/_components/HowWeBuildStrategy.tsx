import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

const processSteps = [
  {
    step: 'Step 01',
    title: 'Discovery',
    description: 'Understand your business, goals, customers, and growth opportunities.',
  },
  {
    step: 'Step 02',
    title: 'Strategy Blueprint',
    description: 'Define priorities and build a clear roadmap for measurable growth.',
  },
  {
    step: 'Step 03',
    title: 'Execution',
    description: 'Turn the strategy into coordinated actions across the right channels.',
  },
  {
    step: 'Step 04',
    title: 'Optimization',
    description: 'Measure results, improve performance, and scale what works.',
  },
]

const HowWeBuildStrategy = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              How we build your
              <i className="font-instrument"> strategy</i>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {processSteps.map(({ step, title, description }, index) => (
            <RevealWrapper key={step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
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

        <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/meet" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Start Your Journey</span>
              </div>
              <div className="rv-button-bottom text-nowrap">
                <span>Start Your Journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HowWeBuildStrategy
