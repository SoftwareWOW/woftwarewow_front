import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = [
  {
    title: 'Built to fit',
    description: 'Designed around your actual processes and requirements.',
  },
  {
    title: 'Connected systems',
    description: 'Integrate the tools and platforms your business already uses.',
  },
  {
    title: 'Greater efficiency',
    description: 'Reduce manual work and simplify complex workflows.',
  },
  {
    title: 'Flexible by design',
    description: 'Adapt features as your business needs change.',
  },
  {
    title: 'Ready to scale',
    description: 'Built on foundations that can evolve with growth.',
  },
]

/** Layout: homepage-13/WhyChooseUsV2 — split header + 5 titled rows + image. */
const WhyCustomSoftware = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="mb-3">
              <SectionLabel>Built Around You</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                When off-the-shelf
                <InstrumentText> isn’t enough.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20 2xl:gap-x-[130px]">
          <div className="md:w-1/2 [&>*]:border-b">
            {benefits.map((benefit) => (
              <RevealWrapper key={benefit.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/nav/cards/software&technology.png"
              alt="Custom software built around business workflows"
              className="h-full w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default WhyCustomSoftware
