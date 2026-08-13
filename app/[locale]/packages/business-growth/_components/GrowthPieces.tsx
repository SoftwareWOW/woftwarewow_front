import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'

const pieces = [
  {
    title: 'Growth Strategy',
    description:
      'Know where to focus. Review your current position, audience, customer journey and opportunities to create a focused growth plan.',
    image: '/images/wow/nav/cards/Marketing.png',
  },
  {
    title: 'Demand Generation',
    description:
      'Create more opportunities. Use the right mix of search, content, campaigns and paid channels to increase qualified demand.',
    image: '/images/wow/nav/cards/Accelerate.png',
  },
  {
    title: 'Conversion & Sales',
    description:
      'Turn more interest into business. Improve the journey from visitor to lead to customer with stronger conversion and sales processes.',
    image: '/images/wow/nav/cards/Sales%20Acceleration%201.png',
  },
  {
    title: 'Measurement & Optimization',
    description:
      "Know what's working. Connect reporting and performance insights so activity can be continuously improved.",
    image: '/images/wow/nav/cards/Intelligent.png',
  },
]

/** Home-04 — ServicesV5: accordion rows closed by default, expand on hover only. */
const GrowthPieces = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Built for Growth</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">The pieces that move growth forward.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl text-[#808080]">
              A coordinated mix of strategy, acquisition, conversion and sales support built around your business.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px]">
          {pieces.map((piece, index) => (
            <Link href="/contact" key={piece.title} className="block">
              <div
                className={`group relative overflow-hidden border-x border-t bg-backgroundBody dark:border-dark dark:bg-dark ${
                  index === pieces.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="group relative z-10 flex cursor-pointer items-center justify-between px-5 py-10 md:px-10 md:py-[60px]">
                  <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-normal leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
                    <span className="font-medium">{piece.title}</span>
                    <p className="mt-2 max-w-lg pr-[2px] text-base text-[#808080] md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {piece.description}
                    </p>
                  </h3>

                  <div className="shrink-0 rounded-radius-sm transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
                      <path
                        d="M5 16H27"
                        className="stroke-black dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 7L27 16L18 25"
                        className="stroke-black dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <figure className="h-0 -translate-y-4 transform opacity-0 transition-all duration-700 ease-in-out group-hover:h-[110px] group-hover:translate-y-0 group-hover:opacity-100 md:group-hover:h-[160px] lg:group-hover:h-[230px]">
                    <img
                      src={piece.image}
                      alt=""
                      className="rounded-radius-sm object-cover px-5 pb-5 pt-4 transition-all duration-700 ease-in-out md:px-10 md:pb-10"
                    />
                  </figure>
                </div>
              </div>
            </Link>
          ))}
        </RevealWrapper>

        <RevealWrapper className="mt-14 flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="font-instrument text-2xl italic md:text-[32px]">
            Ready to put these pieces to <InstrumentText>work together?</InstrumentText>
          </p>
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Get Started with Business Growth
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default GrowthPieces
