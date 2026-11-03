import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const comparisons = [
  { before: 'Unstructured idea', after: 'Clear product roadmap' },
  { before: 'Assumptions about users', after: 'Validated direction' },
  { before: 'Scattered requirements', after: 'Focused feature priorities' },
  { before: 'Static concepts', after: 'Interactive prototypes' },
  { before: 'Unclear launch path', after: 'Development-ready product' },
]

/** Layout: homepage-12/WhyChooseUs */
const TheDifference = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Difference</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              From uncertainty to <InstrumentText>momentum.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {comparisons.map((item) => (
              <RevealWrapper key={item.before} className="py-3.5 pr-[30px] lg:py-[30px]">
                <p className="text-sm text-[#808080] lg:text-xl">Before: {item.before}</p>
                <h3 className="mt-2 text-[25px] font-light leading-[1.2] lg:text-3xl">After: {item.after}</h3>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/LandingPageNaveBare/digital%20transofrmation%202.svg"
              alt="An idea gaining momentum as a digital product"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TheDifference
