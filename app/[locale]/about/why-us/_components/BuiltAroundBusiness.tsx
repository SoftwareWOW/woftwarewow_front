import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Your goals',
    description: 'Priorities shaped around the outcomes that matter most to your business.',
  },
  {
    title: 'Your industry',
    description: 'Context from your market and competitive landscape — not generic playbooks.',
  },
  {
    title: 'Your growth stage',
    description: 'Matched to where you are today and where you need to go next.',
  },
  {
    title: 'Your requirements',
    description: 'Scope and delivery adapted to how your team actually works.',
  },
  {
    title: 'Your resources',
    description: 'Practical plans that respect budget, capacity, and time-to-value.',
  },
]

/** Layout: Home-25 WhyChooseUsV8 — list + image. */
const BuiltAroundBusiness = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Built Around You</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                Built around <InstrumentText>your business</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                Solutions adapt to your goals, industry, growth stage, requirements, and resources — so you get a
                partner that fits, not a one-size package.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/contact" variant="secondary">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{point.description}</p>
              </RevealWrapper>
            ))}

            <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex justify-start" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/Hero/devision/Accelerate.jpg"
              alt="Solutions built around your business"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuiltAroundBusiness
