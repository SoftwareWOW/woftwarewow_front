import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'

const stages = [
  {
    title: 'Start',
    headline: "I'm building a new brand.",
    description: 'Create the strategy, identity and creative foundations needed to enter the market confidently.',
    href: '/contact',
  },
  {
    title: 'Refresh',
    headline: 'My brand needs to evolve.',
    description: 'Modernize an existing identity without losing what already makes the brand recognizable.',
    href: '/contact',
  },
  {
    title: 'Strengthen',
    headline: 'My brand feels inconsistent.',
    description: 'Create clearer guidelines and a stronger creative system across channels and touchpoints.',
    href: '/contact',
  },
]

/** Layout: Home-16 ServicesV14 — 3 bordered cards with arrow button hover slide + bg. */
const OurCapabilities = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Our Capabilities</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation02>
          <h2 className="text-appear mb-3">
            Solutions for Every Stage of <InstrumentText>Growth</InstrumentText>
          </h2>
        </TextAppearAnimation02>
        <TextAppearAnimation>
          <p className="text-appear mx-auto max-w-[770px] text-[#808080]">
            Our specialized divisions work together to help businesses launch, grow, automate, and scale with
            confidence.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {stages.map((stage) => (
          <RevealWrapper
            key={stage.title}
            className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <Link href={stage.href} className="block">
              <h5 className="mb-2 text-4xl uppercase leading-[1.2] -tracking-[1.08px] lg:mb-3">{stage.title}</h5>
              <p className="mb-3 text-lg font-normal leading-snug">{stage.headline}</p>
              <p className="mb-10 text-base leading-relaxed text-[#808080] lg:mb-14">{stage.description}</p>
              <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors rounded-radius-sm duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
                <span className="translate-x-4 transition-transform duration-[400ms] group-hover:translate-x-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
                    <path
                      d="M5.11377 16H27.1138"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.1138 7L27.1138 16L18.1138 25"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="-translate-x-24 transition-transform duration-[400ms] group-hover:-translate-x-[18px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
                    <path
                      d="M5.11377 16H27.1138"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.1138 7L27.1138 16L18.1138 25"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default OurCapabilities
