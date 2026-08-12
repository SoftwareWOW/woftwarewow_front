import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '1',
    title: 'Start with the problem',
    description: 'Identify the process, bottleneck or opportunity before choosing the technology.',
  },
  {
    number: '2',
    title: 'Connect what you already use',
    description:
      'Where appropriate, integrate AI with existing systems rather than creating unnecessary replacements.',
  },
  {
    number: '3',
    title: 'Keep people in control',
    description: 'Design workflows with appropriate human review, oversight and decision points.',
  },
]

/** Layout: BuildCommunity — 3 numbered columns with faded background numbers. */
const AiWithPurpose = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>AI with a purpose</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto ">
              Automate what makes sense. Keep people where they matter.
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-5">
            <p className="mx-auto  text-base leading-relaxed text-[#808080]">
              AI should make the business work better—not add another layer of complexity.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-3">
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

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Explore AI Opportunities
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AiWithPurpose
