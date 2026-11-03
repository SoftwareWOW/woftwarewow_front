import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const stages = [
  { number: '01', label: 'Idea' },
  { number: '02', label: 'Wireframe' },
  { number: '03', label: 'Prototype' },
  { number: '04', label: 'Product' },
]

const benefits = [
  'Clear Direction',
  'User-Focused Design',
  'Faster Validation',
  'Connected Development',
  'Launch Readiness',
]

/** Layout: homepage-04/AboutV4 */
const TheSolution = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <RevealWrapper className="reveal-me mb-10 flex flex-col justify-center gap-x-16 gap-y-6 border-y py-6 dark:border-dark max-md:items-center md:mb-[70px] md:flex-row md:justify-between md:py-10">
          <h3 className="text-center text-[25px] font-light leading-[1.2] md:flex-1 md:text-left lg:text-3xl">
            From first concept to working product
          </h3>
          <div className="flex gap-9 max-md:flex-wrap max-md:justify-center md:gap-[60px]">
            {stages.map((stage) => (
              <div key={stage.number} className="text-center">
                <p className="mb-2 font-light leading-[1.1] text-[#808080] md:text-[47px] lg:mb-5 lg:text-[54px] xl:text-[64px]">
                  {stage.number}
                </p>
                <p className="lg:text-xl">{stage.label}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <div>
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Everything you need to <InstrumentText>bring it to life.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mb-8 mt-3 max-w-2xl text-[#808080] lg:mb-[52px]">
              From first concept to working product, we connect the expertise needed to design, build, and launch.
            </p>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me flex flex-col gap-x-16 gap-y-10 lg:flex-row">
            <figure className="overflow-hidden rounded-radius-md lg:w-1/2">
              <img
                src="/images/wow/LandingPageNaveBare/ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc%202.svg"
                alt="Product wireframes evolving into a working application"
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="flex flex-col justify-center lg:w-1/2">
              <ul className="[&>*]:border-b dark:[&>*]:border-dark">
                {benefits.map((benefit) => (
                  <li key={benefit} className="py-4 text-[25px] font-light leading-[1.2] first:pt-0 lg:text-3xl">
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 md:mt-14">
                <ButtonComponentList className="flex" itemClassName="block w-full md:inline-block md:w-auto">
                  <ButtonComponent href="/contact" variant="primary">
                    Start a Project
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TheSolution
