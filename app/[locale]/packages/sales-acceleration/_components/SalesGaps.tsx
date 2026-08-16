import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const salesChallenges = [
  {
    number: '1',
    title: 'Lead generation',
    description: 'Create a more consistent flow of qualified opportunities.',
  },
  {
    number: '2',
    title: 'Sales funnels',
    description: 'Build clearer paths from interest to action.',
  },
  {
    number: '3',
    title: 'CRM workflows',
    description: 'Keep leads organized and follow-up consistent.',
  },
  {
    number: '4',
    title: 'Automation',
    description: 'Reduce manual work across key sales activities.',
  },
  {
    number: '5',
    title: 'Performance tracking',
    description: 'See what is driving pipeline and revenue.',
  },
]

/** Layout: AiWithPurpose / BuildCommunity — numbered columns with faded background numbers. */
const SalesGaps = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>Fix the Gaps in Your Sales Engine</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto">
              Make every stage <InstrumentText>work better.</InstrumentText>
            </h2>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Connect lead generation, follow-up, conversion, and reporting into one clearer sales process.
            </p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-3">
          {salesChallenges.map((item) => (
            <RevealWrapper
              key={item.title}
              className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text text-[clamp(5rem,22vw,11.25rem)] font-black leading-none text-transparent dark:to-[#15151599]"
              >
                {item.number}
              </span>
              <h5 className="relative z-10 mb-3 text-center sm:mb-5">{item.title}</h5>
              <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">
                {item.description}
              </p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SalesGaps
