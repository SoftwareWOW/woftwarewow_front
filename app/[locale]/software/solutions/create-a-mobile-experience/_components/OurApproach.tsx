import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  { number: '01', title: 'Discover', description: 'Understand your users and mobile goals.' },
  { number: '02', title: 'Design', description: 'Create intuitive flows and app interfaces.' },
  { number: '03', title: 'Build', description: 'Develop, connect, and test the app.' },
  { number: '04', title: 'Launch & Improve', description: 'Release, learn, and refine the experience.' },
]

/** Layout: homepage-15/BrandingProcess */
const OurApproach = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="max-w-xl lg:max-w-2xl">
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>Our Approach</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear text-[38px] font-light leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              From first tap to <InstrumentText>lasting value.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid w-full max-w-xl grid-cols-2 gap-y-[26px] lg:max-w-none lg:flex-1">
          {steps.map((step, index) => (
            <RevealWrapper
              key={step.title}
              className={`px-[30px] py-[40px] md:py-[50px] ${index % 2 === 0 ? 'border-r dark:border-dark' : ''} ${index < 2 ? 'border-b dark:border-dark' : ''}`}
            >
              <p className="font-instrument text-5xl font-light italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                {step.number}
              </p>
              <h3 className="mb-4 mt-4 text-[25px] font-light leading-[1.2] lg:mb-6 lg:text-3xl">{step.title}</h3>
              <p className="text-[#808080] lg:text-xl">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>

      <RevealWrapper className="reveal-me mt-12 flex justify-center lg:mt-14">
        <ButtonComponentList className="flex" itemClassName="block w-full text-center md:inline-block md:w-auto">
          <ButtonComponent href="/contact" variant="primary">
            Start a Project
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default OurApproach
