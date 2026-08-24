import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  { number: '01', title: 'Modern' },
  { number: '02', title: 'Bold' },
  { number: '03', title: 'Premium' },
  { number: '04', title: 'Digital' },
  { number: '05', title: 'Human' },
]

/** Layout: technology-and-saas ClientJourney — image + numbered steps. */
const BrandVisualStyle = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Style</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Visual Style</h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto flex max-w-5xl flex-col items-center gap-12 md:flex-row md:items-stretch md:justify-center md:gap-16 lg:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md bg-[#1A1A1A] md:min-h-[480px] md:w-[min(100%,420px)] md:shrink-0 lg:min-h-[560px]">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="WOW visual style"
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover opacity-80 md:min-h-[480px] lg:min-h-[560px]"
            />
          </figure>

          <div className="flex w-full min-w-0 max-w-md justify-center md:w-auto md:justify-start">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.number} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block bg-gradient-to-r bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px] flex min-h-[3.5rem] items-center lg:min-h-[4.5rem]">
                    <h3 className="tracking-normal">{step.title}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BrandVisualStyle
