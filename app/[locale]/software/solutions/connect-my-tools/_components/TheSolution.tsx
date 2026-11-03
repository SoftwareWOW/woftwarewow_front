import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = [
  { number: '01', label: 'Connected Data' },
  { number: '02', label: 'Automated Workflows' },
  { number: '03', label: 'Fewer Manual Tasks' },
  { number: '04', label: 'Better Visibility' },
  { number: '05', label: 'More Flexibility' },
]

/** Layout: homepage-11/AboutV10 */
const TheSolution = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mt-6 text-center md:mt-10">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              One connected <InstrumentText>digital ecosystem.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-3xl text-[#808080]">
              Bring your applications, data, and workflows together without replacing everything you already use.
            </p>
          </TextAppearAnimation>
        </div>
        <div className="mt-16 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <RevealWrapper
              key={item.number}
              className="reveal-me flex w-full flex-col items-center justify-center border-t py-7 dark:border-dark sm:flex-row sm:items-start sm:justify-between"
            >
              <p className="mb-2 text-[47px] font-light leading-[1.1] text-[#808080] sm:min-w-[120px] lg:mb-0 lg:text-[54px]">
                {item.number}
              </p>
              <p className="text-[#808080] lg:text-xl">{item.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheSolution
