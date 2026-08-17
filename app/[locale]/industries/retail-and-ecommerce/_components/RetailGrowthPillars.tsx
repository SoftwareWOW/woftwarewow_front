import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const pillars = [
  {
    title: 'Reach More Customers',
    description: 'Increase visibility through search, advertising, content, and social.',
  },
  {
    title: 'Build Better Experiences',
    description: 'Make browsing, purchasing, payment, and post-purchase interactions seamless.',
  },
  {
    title: 'Add Customer Retention',
    description: 'Turn first-time buyers into returning customers through smarter engagement.',
  },
  {
    title: 'Automate Operations',
    description: 'Connect marketing, sales, inventory, communication, and repetitive workflows.',
  },
]

/** Layout: Home-02 ProcessV2 — four hover columns. Origin CTA omitted. */
const RetailGrowthPillars = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>Professional Service Solutions</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">Built Around How You Win Clients.</h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right">
                Connect your brand, digital presence, marketing, sales, and operations into a stronger client
                acquisition system.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <RevealWrapper className="grid grid-cols-12 items-center justify-center gap-[1px]">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group col-span-full min-h-[400px] bg-backgroundBody px-7 pb-4 pt-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:px-10 md:pb-16 md:pt-10 lg:col-span-4 xl:col-span-3"
            >
              <h4 className="pb-3 leading-[1.2] transition-colors duration-300 dark:group-hover:text-secondary md:mb-4">
                {pillar.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 dark:text-dark-100 dark:group-hover:text-dark-200">
                {pillar.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default RetailGrowthPillars
