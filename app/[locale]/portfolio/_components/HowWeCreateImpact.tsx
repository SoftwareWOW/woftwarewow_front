import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

const steps = [
  {
    number: '1',
    title: 'Strategize',
    description: 'Understand the challenge, audience, and goals before anything gets built.',
  },
  {
    number: '2',
    title: 'Create',
    description: 'Design and develop solutions that bring strategy to life with clarity and craft.',
  },
  {
    number: '3',
    title: 'Deliver',
    description: 'Launch with the right systems, content, and support to move work forward.',
  },
  {
    number: '4',
    title: 'Optimize',
    description: 'Measure, refine, and improve so results keep growing over time.',
  },
]

/** Layout: packages/business-growth/_components/HowItWorks.tsx — 4 steps, no SectionLabel/CTA. */
const HowWeCreateImpact = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear">From challenge to outcome.</h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-4">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text text-[clamp(5rem,22vw,11.25rem)] font-black leading-none text-transparent dark:to-[#15151599]"
              >
                {step.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {step.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeCreateImpact
