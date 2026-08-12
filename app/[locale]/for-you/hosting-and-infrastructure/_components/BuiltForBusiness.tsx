import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const priorities = [
  {
    id: '01',
    title: 'Reliability',
    description: 'Infrastructure designed to keep your digital presence running consistently.',
  },
  {
    id: '02',
    title: 'Performance',
    description: 'Hosting and delivery infrastructure that supports fast digital experiences.',
  },
  {
    id: '03',
    title: 'Security',
    description: 'Security measures that help safeguard your websites and digital infrastructure.',
  },
  {
    id: '04',
    title: 'Scalability',
    description: 'Choose infrastructure that can evolve as your requirements change.',
  },
]

/** Layout: ElevateBrandV2 / SalesJourneyGap — full-width header + hover-dim numbered rows. */
const BuiltForBusiness = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-16 md:mb-20">
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>Built for Business</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation02>
            <h2 className="text-appear-2 max-w-4xl">
              Infrastructure should give you fewer things to worry about.
            </h2>
          </TextAppearAnimation02>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {priorities.map((item) => (
            <div
              key={item.id}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform items-start justify-between gap-5 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:pb-10 md:pt-10"
            >
              <span className="w-8 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody">
                {item.id}.
              </span>
              <h3 className="mt-2 text-nowrap text-2xl font-normal leading-tight tracking-[-2px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-[55px] md:w-[730px] md:text-[67px] lg:text-[84px] xl:text-[88px] xl:leading-[1.15] xl:tracking-[-2.88px]">
                {item.title}
              </h3>
              <p className="ml-2.5 self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BuiltForBusiness
