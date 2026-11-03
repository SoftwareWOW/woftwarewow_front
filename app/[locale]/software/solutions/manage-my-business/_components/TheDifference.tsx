import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const comparisons = [
  {
    before: 'Information scattered across tools',
    after: 'Information easier to access',
    detail: 'Bring important business data into connected workflows and interfaces.',
  },
  {
    before: 'Manual handoffs between teams',
    after: 'Clearer workflow ownership',
    detail: 'Define who does what—and let systems route work automatically.',
  },
  {
    before: 'Duplicate data entry everywhere',
    after: 'One source of operational truth',
    detail: 'Reduce retyping and errors when platforms share the same core data.',
  },
  {
    before: 'Slow approval cycles',
    after: 'Faster decisions with visibility',
    detail: 'Notifications and dashboards keep leaders informed without chasing updates.',
  },
  {
    before: 'Tools that do not scale with growth',
    after: 'Systems that grow with your business',
    detail: 'Build flexible platforms that adapt as teams, customers, and processes expand.',
  },
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
              Less friction. <InstrumentText>More momentum.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl text-[#808080]">
              The goal isn&apos;t to add more software to your business. It&apos;s to make the technology you use more
              useful.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[30px] gap-y-8 md:flex-row">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {comparisons.map((item) => (
              <RevealWrapper key={item.before} className="py-3.5 pr-[30px] lg:py-[30px]">
                <p className="text-sm text-[#808080]">Before: {item.before}</p>
                <h3 className="mt-2 text-[25px] font-light leading-[1.2] lg:text-3xl">After: {item.after}</h3>
                <p className="mt-3 text-[#808080]">{item.detail}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/LandingPageNaveBare/digital transofrmation 2.svg"
              alt="Business moving from scattered tools to streamlined connected systems"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default TheDifference
