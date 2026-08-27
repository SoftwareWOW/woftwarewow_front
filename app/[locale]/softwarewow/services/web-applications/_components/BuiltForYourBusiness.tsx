import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Custom Workflows',
    description: 'Built around your processes and requirements.',
  },
  {
    title: 'User Experience',
    description: 'Simple experiences for the people who use the application.',
  },
  {
    title: 'Integrations',
    description: 'Connect the tools, APIs, and systems your business relies on.',
  },
  {
    title: 'Security',
    description: 'Security considered throughout architecture and development.',
  },
  {
    title: 'Scalability',
    description: 'A technical foundation designed to evolve with the product.',
  },
]

/** Layout: Home-25 WhyChooseUsV8 / OurApproach — approach list + image + CTA. */
const BuiltForYourBusiness = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Built for Your Business</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                Not another <InstrumentText>off-the-shelf</InstrumentText> solution.
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                Your application is designed around how your business actually works—not the other way around.
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
              </RevealWrapper>
            ))}

            <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex justify-start" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="Custom web application built around business workflows"
              className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuiltForYourBusiness
