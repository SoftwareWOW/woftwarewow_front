import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const products = [
  {
    title: 'MVP Products',
    description: 'Launch a focused first version.',
    image: '/images/wow/LandingPageNaveBare/new-modern-rocket-with-smoke-and-blast-successfull-2026-03-10-22-19-55-utc%202.svg',
  },
  {
    title: 'SaaS Platforms',
    description: 'Build subscription-based digital products.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
  },
  {
    title: 'Web Applications',
    description: 'Create powerful browser-based experiences.',
    image: '/images/wow/LandingPageNaveBare/engineer-and-coworker-use-ai-cognitive-computing-o-2026-01-11-10-54-36-utc%202.svg',
  },
  {
    title: 'Mobile Applications',
    description: 'Bring your product to iOS and Android.',
    image: '/images/wow/LandingPageNaveBare/Social%202%201.svg',
  },
  {
    title: 'Customer Platforms',
    description: 'Connect users with digital services.',
    image: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg',
  },
]

/** Layout: homepage-14/OurWorkShowcase */
const WhatWeCanBuild = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>What We Can Build</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Your idea. Built for the <InstrumentText>real world.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="grid grid-cols-12 items-stretch gap-[30px] gap-y-10">
          {products.map((item, index) => (
            <RevealWrapper
              key={item.title}
              className="reveal-me group col-span-12 rounded-radius-md border px-3.5 pb-7 pt-3.5 dark:border-dark md:col-span-6 md:px-5 md:pt-5 last:md:col-span-12"
            >
              <figure className="overflow-hidden rounded-radius-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`aspect-[16/9] h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125 ${
                    index === products.length - 1 ? 'md:aspect-[21/7]' : ''
                  }`}
                />
              </figure>
              <h3 className="mb-2 mt-[26px] text-[25px] font-light leading-[1.2] lg:text-3xl">{item.title}</h3>
              <p className="text-[#808080] lg:text-xl">{item.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeCanBuild
