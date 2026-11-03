import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  { title: 'Discover', description: 'Understand your tools and workflows.' },
  { title: 'Map', description: 'Plan integrations and data connections.' },
  { title: 'Connect', description: 'Build, test, and secure integrations.' },
  { title: 'Optimize', description: 'Monitor and improve connected workflows.' },
]

/** Layout: homepage-12/ProcessV7 */
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
              Connect what matters. <InstrumentText>Keep moving forward.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-1 flex-col items-center justify-center pt-[100px] max-md:basis-full"
            >
              <div className="service-item-number" aria-hidden />
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
