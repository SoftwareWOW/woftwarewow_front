import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '1',
    title: 'Assess',
    description: 'Review your existing application, technical environment, known issues, and business priorities.',
  },
  {
    number: '2',
    title: 'Prioritize',
    description:
      'Identify the most important fixes, updates, and improvements based on impact, urgency, and available resources.',
  },
  {
    number: '3',
    title: 'Improve',
    description: 'Implement updates, resolve issues, optimize performance, and test changes before release.',
  },
  {
    number: '4',
    title: 'Maintain',
    description: 'Monitor application health, address emerging needs, and plan ongoing improvements as requirements evolve.',
  },
]

/** Layout: homepage-15/BrandingProcess — split headline + 2×2 numbered grid. */
const OurProcess = () => {
  return (
    <section className="relative mx-auto max-w-[1600px] px-5">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <HeroGradientAnimation />
          <RevealWrapper className="mb-3">
            <SectionLabel>Our Process</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear max-w-4xl text-[38px] font-light leading-[1.3] md:text-[55px] md:leading-[1.2] lg:text-[62px] xl:text-[72px] xl:tracking-[-2.16px]">
              Continuous care. <InstrumentText>Meaningful improvement.</InstrumentText>
            </h2>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear max-w-xl text-lg leading-[1.6] tracking-[0.36px]">
              We take a structured approach to understanding your software, prioritizing what matters, and delivering
              improvements with minimal unnecessary disruption.
            </p>
          </TextAppearAnimation02>
          <TextAppearAnimation02>
            <p className="text-appear mt-3 text-lg leading-[1.6] tracking-[0.36px]">Assess → Prioritize → Improve → Maintain</p>
          </TextAppearAnimation02>

          <RevealWrapper className="mt-7 md:mt-14">
            <ButtonComponent href="/contact" variant="white">
              Start a Project
            </ButtonComponent>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-2 gap-y-[26px]">
          {steps.map((step, index) => (
            <RevealWrapper
              key={step.title}
              className={`${index % 2 === 0 ? 'border-r dark:border-dark' : ''} px-[30px] py-[50px]`}
            >
              <h2 className="font-instrument text-5xl font-light italic leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[1.15] xl:tracking-[-2.88px]">
                {step.number}
              </h2>
              <h5 className="mb-6 mt-4">{step.title}</h5>
              <p className="text-base">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProcess
