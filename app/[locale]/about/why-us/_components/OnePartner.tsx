import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CounterAnimation from '@/utils/CounterAnimation'

const points = [
  {
    number: 1,
    suffix: '',
    label: 'Unified partner',
  },
  {
    number: 11,
    suffix: '',
    label: 'Specialist divisions',
  },
  {
    number: 5,
    suffix: '',
    label: 'Ways to engage',
  },
]
/** Layout: Home-09 OurAchievement — short headline + compact stats (minimal copy). */
const OnePartner = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Superagency Model</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mx-auto mb-8 md:mb-14">
            <h2>
              One Partner. <InstrumentText>More Possibilities.</InstrumentText>
            </h2>
          </RevealWrapper>
        </div>

        <div className="flex items-center justify-center gap-[30px] max-xl:flex-wrap">
          {points.map((item) => (
            <RevealWrapper
              key={item.label}
              className="reveal-me flex min-h-[210px] min-w-[280px] flex-col items-center justify-center space-y-3 border px-9 py-7 dark:border-dark lg:min-w-[320px] lg:px-16 lg:py-10"
            >
              <h2 className="lg:text-7xl">
                <CounterAnimation number={item.number} />
                {item.suffix}
              </h2>
              <p>{item.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnePartner
