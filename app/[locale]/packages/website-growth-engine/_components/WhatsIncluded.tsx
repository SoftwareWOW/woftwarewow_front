import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'

const included = [
  {
    title: 'Website Strategy',
    description: 'Goals, audience, structure, customer journeys, and conversion priorities.',
    image: '/images/wow/nav/cards/Website.png',
  },
  {
    title: 'UX & UI Design',
    description: 'Modern layouts focused on usability, clarity, and conversion.',
    image: '/images/wow/nav/cards/Design.png',
  },
  {
    title: 'Website Development',
    description: 'Responsive, scalable, high-performing implementation.',
    image: '/images/wow/nav/cards/Websit%20groeh%201.png',
  },
  {
    title: 'SEO Foundation',
    description: 'Technical SEO, metadata, structure, and search-friendly foundations.',
    image: '/images/wow/nav/cards/Marketing.png',
  },
  {
    title: 'Conversion Optimization',
    description: 'Calls-to-action, landing flows, forms, and funnel improvements.',
    image: '/images/wow/nav/cards/Accelerate.png',
  },
  {
    title: 'Hosting & Security',
    description: 'Reliable infrastructure, backups, performance, and protection.',
    image: '/images/wow/nav/cards/Host.png',
  },
]

/** Home-04 — ServicesV5: accordion rows closed by default, expand on hover only. */
const WhatsIncluded = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>What&apos;s Included</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Everything your website needs to <InstrumentText>perform.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-2xl text-[#808080]">
              A connected set of strategy, design, technology, and optimization essentials.
            </p>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto w-full max-w-[1170px]">
          {included.map((item, index) => (
            <Link href="/contact" key={item.title} className="block">
              <div
                className={`group relative overflow-hidden border-x border-t bg-backgroundBody dark:border-dark dark:bg-dark ${
                  index === included.length - 1 ? 'border-b' : ''
                }`}
              >
                <div className="group relative z-10 flex cursor-pointer items-center justify-between px-5 py-10 md:px-10 md:py-[60px]">
                  <h3 className="relative z-10 flex flex-col gap-x-32 gap-y-3 text-[25px] font-normal leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
                    <span className="font-medium">{item.title}</span>
                    <p className="mt-2 max-w-lg pr-[2px] text-base text-[#808080] md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {item.description}
                    </p>
                  </h3>

                  <div className="shrink-0 transform rounded-radius-sm transition-transform duration-500 ease-in-out group-hover:rotate-90">
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
                      src={item.image}
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
              Build Your Website
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatsIncluded
