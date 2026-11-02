import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    step: '01',
    title: 'Discover',
    description: 'Understand the vision, users, challenges, and product goals.',
  },
  {
    step: '02',
    title: 'Structure',
    description: 'Define journeys, features, information architecture, and wireframes.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Create polished interfaces, interaction patterns, and prototypes.',
  },
  {
    step: '04',
    title: 'Validate',
    description: 'Review, gather feedback, refine, and prepare for development.',
  },
]

/** Layout: design/DesignHowWeWorkSection — homepage-19/ProcessV10 badge cards with hover fill. */
const OurProcess = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Process</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              From possibilities to <InstrumentText>prototypes.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              We connect business goals, user needs, and thoughtful design through a clear, collaborative process.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map(({ step, title, description }) => (
            <RevealWrapper key={step} className="relative w-full grow pt-8 sm:w-[48%] xl:grow">
              <div className="absolute left-1/2 top-4 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                  {step}
                </span>
              </div>
              <div className="group mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center transition-colors duration-300 hover:bg-primary dark:border-dark">
                <h6 className="text-2xl font-light leading-[1.1] text-black transition-colors duration-300 group-hover:text-white dark:text-white">
                  {title}
                </h6>
                <p className="text-base font-light leading-[1.3] text-black/70 transition-colors duration-300 group-hover:text-white dark:text-backgroundBody/70">
                  {description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurProcess
