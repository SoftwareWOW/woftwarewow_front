import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'

const steps = [
  {
    id: '01',
    title: 'Understand',
    description: 'Clarify goals, constraints, customers, and the real opportunities in front of you.',
  },
  {
    id: '02',
    title: 'Strategize',
    description: 'Define priorities and a clear roadmap so every decision moves the business forward.',
  },
  {
    id: '03',
    title: 'Execute',
    description: 'Turn the plan into coordinated action across technology, marketing, creative, and growth.',
  },
  {
    id: '04',
    title: 'Optimize',
    description: 'Measure what works, refine delivery, and scale results — WOW does more than advise.',
  },
]

/** Layout: Home-07 ProcessV4 — image + numbered vertical timeline. */
const StrategyToResults = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Process</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto max-w-[770px]">
              From strategy to <InstrumentText>results</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-3">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Understand → Strategize → Execute → Optimize — a simple path from clarity to measurable outcomes.
            </p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="reveal-me flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-20">
          <figure className="md:w-1/2">
            <Image src={processImg} alt="From strategy to executed results" className="h-auto w-full" />
          </figure>

          <div className="md:w-1/2">
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-16">
              {steps.map((step) => (
                <li key={step.id} className="relative max-w-max px-6 md:px-10">
                  <div className="absolute left-0 top-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-transparent dark:from-white dark:to-[#BDBDBD]">
                      {step.id}
                    </span>
                  </div>
                  <div className="ml-[30px] md:ml-8">
                    <h3>{step.title}</h3>
                    <p className="mt-4 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/meet" variant="primary">
              Book a Consultation
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default StrategyToResults
