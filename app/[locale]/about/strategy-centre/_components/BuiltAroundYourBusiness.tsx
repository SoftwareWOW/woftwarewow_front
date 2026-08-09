import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Business goals',
    description: 'Built around the outcomes that matter most.',
  },
  {
    title: 'Industry context',
    description: 'Shaped by your industry and competitive landscape.',
  },
  {
    title: 'Market & customer',
    description: 'Focused on your audience and market opportunities.',
  },
  {
    title: 'Growth stage',
    description: 'Matched to where your business is today.',
  },
  {
    title: 'Budget & resources',
    description: 'Prioritized for practical, measurable returns.',
  },
]

const BuiltAroundYourBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>Built Around You</SectionLabel>
          </RevealWrapper>
          <HeadingWithInstrument
            className="mt-3 text-center"
            before="Strategies built around"
            accent="your business"
          />
          <TextAppearAnimation>
            <p className="text-appear">
              Tailored by goals, industry, market, customer, maturity, and budget
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b">
            {points.map((point) => (
              <RevealWrapper key={point.title} className="py-3.5 pr-[30px] lg:py-[30px]">
                <h5>{point.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{point.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="md:w-1/2">
            <img src="/images/home-5/why-rivor.png" alt="Strategies built around your business" className="h-full w-full" />
          </RevealWrapper>
        </div>
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/meet" variant="primary">
              Book a Strategy Session
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuiltAroundYourBusiness
