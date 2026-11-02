import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const points = [
  {
    title: 'Save Valuable Time',
    description: 'Automate repetitive tasks and free your team to focus on higher-value work.',
  },
  {
    title: 'Connect Your Operations',
    description: 'Bring people, processes, and business tools together through more consistent workflows.',
  },
  {
    title: 'Reduce Manual Errors',
    description: 'Standardize processes and reduce unnecessary data entry and duplication.',
  },
  {
    title: 'Improve Visibility',
    description: 'Give teams clearer access to the information they need to manage operations.',
  },
  {
    title: 'Grow With Confidence',
    description: 'Build flexible systems that can adapt as your business and requirements evolve.',
  },
]

/** Layout: homepage-16/WhyChooseUsV5 — split headline + 5-point list. */
const BuiltForBusiness = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 md:px-[30px]">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row-reverse md:gap-5 lg:gap-10 xl:gap-x-20">
          <div className="md:w-[45%]">
            <div className="[&>*:not(:first-child)]:mt-3.5">
              {points.map((point) => (
                <RevealWrapper key={point.title} className="py-2.5">
                  <h6>{point.title}</h6>
                  <p className="mt-1.5 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{point.description}</p>
                </RevealWrapper>
              ))}
            </div>
          </div>
          <RevealWrapper className="md:w-[55%]">
            <div className="mb-3.5">
              <SectionLabel>Built for Business</SectionLabel>
            </div>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Less busywork. <InstrumentText>More progress.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                Your team should spend less time managing disconnected systems and more time moving the business
                forward. We design technology that removes unnecessary friction from everyday operations.
              </p>
            </RevealWrapper>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuiltForBusiness
