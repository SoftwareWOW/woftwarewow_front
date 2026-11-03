import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const comparisons = [
  { before: 'Scattered information', after: 'Easy access' },
  { before: 'Manual requests', after: 'Self-service' },
  { before: 'Slow responses', after: 'Faster support' },
  { before: 'Complicated journeys', after: 'Simple interactions' },
  { before: 'Disconnected channels', after: 'Connected experiences' },
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
              Less friction. <InstrumentText>Better experiences.</InstrumentText>
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
              src="/images/wow/LandingPageNaveBare/woman-using-laptop-with-technology-background-disp-2026-03-19-02-04-49-utc 1.svg"
              alt="Customer enjoying a simple, connected digital experience"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TheDifference
