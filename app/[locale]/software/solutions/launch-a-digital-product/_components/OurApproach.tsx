import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  { id: 1, title: 'Define', description: 'Clarify users, goals, and core features.' },
  { id: 2, title: 'Design', description: 'Create journeys, interfaces, and prototypes.' },
  { id: 3, title: 'Build', description: 'Develop, integrate, and test the product.' },
  { id: 4, title: 'Launch & Evolve', description: 'Release, learn, and improve over time.' },
]

/** Layout: homepage-20/ProcessV9 */
const OurApproach = () => {
  return (
    <section aria-labelledby="launch-approach-heading">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Approach</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 id="launch-approach-heading" className="text-appear mb-3">
              From concept to <InstrumentText>launch.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {steps.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:w-auto xl:flex-1">
              <div className="relative mx-auto grid h-full grid-cols-1 content-between gap-y-6 rounded-radius-md border px-5 py-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody/20">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-backgroundBody">
                    Step {item.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-[25px] font-light leading-[1.2] lg:text-3xl">{item.title}</h3>
                <p className="text-[#808080] lg:text-xl">{item.description}</p>
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
