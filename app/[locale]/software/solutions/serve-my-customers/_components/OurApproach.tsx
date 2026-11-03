import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  { title: 'Understand', description: 'Discover customer needs and challenges.' },
  { title: 'Design', description: 'Create simpler journeys and interfaces.' },
  { title: 'Build & Connect', description: 'Develop and integrate digital solutions.' },
  { title: 'Improve', description: 'Refine experiences through feedback.' },
]

/** Layout: homepage-06/ProcessV5 */
const OurApproach = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Approach</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 lg:mb-20">
              Designed around your <InstrumentText>customers.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-1 flex-col items-center justify-center pt-[100px] max-md:basis-full"
            >
              <div className="service-item-number"></div>
              <h3 className="mb-5 text-center text-[25px] font-light leading-[1.2] lg:text-3xl">{step.title}</h3>
              <p className="text-center text-[#808080] lg:text-xl">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList className="flex" itemClassName="block w-full text-center md:inline-block md:w-auto">
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
