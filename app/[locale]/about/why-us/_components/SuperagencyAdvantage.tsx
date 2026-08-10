import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'

const divisions = [
  {
    title: 'Technology',
    description: 'Software, platforms, and digital foundations built to scale with you.',
  },
  {
    title: 'Marketing',
    description: 'Channels and campaigns designed to attract demand and convert it.',
  },
  {
    title: 'Brand',
    description: 'Positioning and identity that make your offer unmistakable.',
  },
  {
    title: 'AI & Automation',
    description: 'Intelligent systems applied where they create real operational value.',
  },
  {
    title: 'Sales',
    description: 'Funnels and revenue systems that turn interest into outcomes.',
  },
  {
    title: 'Creative',
    description: 'Design and content that extend your brand across every touchpoint.',
  },
  {
    title: 'Growth',
    description: 'A coordinated path from strategy to measurable business progress.',
  },
]

/** Layout: Home-02 ProcessV2 — hover capability grid (ecosystem around one partner). */
const SuperagencyAdvantage = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>

      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Advantage</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                One partner. <InstrumentText>An entire ecosystem.</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                Access specialized expertise across technology, marketing, AI, creative and growth—connected through one
                unified partner.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href="/meet" variant="secondary">
                  Book a Consultation
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-12 items-stretch justify-center gap-[1px]">
          {divisions.map((item) => (
            <div
              key={item.title}
              className="group col-span-full flex min-h-[280px] flex-col items-center justify-center bg-backgroundBody px-5 pb-6 pt-7 text-center backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:min-h-[320px] md:px-8 md:pb-12 md:pt-10 lg:col-span-4 xl:col-span-3"
            >
              <h4 className="w-full pb-3 text-center leading-[1.2] transition-colors duration-300 group-hover:text-white md:mb-4">
                {item.title}
              </h4>
              <p className="w-full text-center text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 group-hover:text-white/85 dark:text-dark-100">
                {item.description}
              </p>
            </div>
          ))}
          {/* Hub tile — fills remaining grid space on xl */}
          <div className="col-span-full flex min-h-[280px] items-center justify-center border border-primary/30 bg-primary/10 px-5 py-10 text-center dark:border-primary/40 dark:bg-primary/15 sm:col-span-6 md:min-h-[320px] md:px-6 lg:col-span-4 xl:col-span-3">
            <div className="w-full text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[#808080]">Centered on</p>
              <h4 className="mt-2 flex flex-nowrap items-baseline justify-center gap-x-2 whitespace-nowrap text-xl leading-none sm:text-2xl md:text-[25px] lg:text-[28px]">
                <WowText />
                <span className="text-secondary dark:text-backgroundBody">
                  Superagency
                </span>
              </h4>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SuperagencyAdvantage
