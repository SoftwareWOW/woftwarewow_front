import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const products = [
  {
    title: 'Customer Apps',
    description: 'Connect customers with your services.',
    image: '/images/wow/LandingPageNaveBare/Social%202%201.svg',
  },
  {
    title: 'Business Apps',
    description: 'Give teams tools to work on the move.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
  },
  {
    title: 'Booking & Service Apps',
    description: 'Simplify scheduling and requests.',
    image: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg',
  },
  {
    title: 'Mobile Commerce',
    description: 'Create convenient shopping experiences.',
    image: '/images/wow/LandingPageNaveBare/Website%201%202.svg',
  },
  {
    title: 'Connected Mobile Platforms',
    description: 'Bring existing systems into mobile experiences.',
    image: '/images/wow/LandingPageNaveBare/WOW%20Hub.svg',
  },
]

/** Layout: homepage-15/OurWorkV2 */
const WhatWeCanBuild = () => {
  const gridItems = products.slice(0, 4)
  const fullWidthItem = products[4]

  return (
    <section className="overflow-hidden">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>What We Can Build</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mb-3">
            Mobile solutions for the <InstrumentText>real world.</InstrumentText>
          </h2>
        </TextAppearAnimation>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 items-center justify-items-center gap-[30px] gap-y-10 px-5 after:absolute after:top-1/2 after:h-[1px] after:w-full after:bg-secondary/10 after:content-[''] dark:after:bg-backgroundBody/10 md:grid-cols-2 md:items-start md:before:absolute md:before:h-1/2 md:before:w-[1px] md:before:bg-secondary/10 md:before:content-[''] md:dark:before:bg-backgroundBody/10">
        {gridItems.map((item) => (
          <RevealWrapper key={item.title} className="reveal-me group w-full">
            <figure className="w-full overflow-hidden rounded-radius-sm">
              <img
                src={item.image}
                alt={item.title}
                className="aspect-[16/10] h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
              />
            </figure>
            <h3 className="mt-[30px] text-[25px] font-light leading-[1.2] lg:text-3xl">{item.title}</h3>
            <p className="mt-3.5 text-[#808080] lg:text-xl">{item.description}</p>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me group mx-auto mt-10 max-w-[1500px] px-5 md:mt-[60px]">
        <figure className="w-full overflow-hidden rounded-radius-sm">
          <img
            src={fullWidthItem.image}
            alt={fullWidthItem.title}
            className="aspect-[16/9] h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125 md:aspect-[21/7]"
          />
        </figure>
        <h3 className="mt-[30px] text-[25px] font-light leading-[1.2] lg:text-3xl">{fullWidthItem.title}</h3>
        <p className="mt-3.5 text-[#808080] lg:text-xl">{fullWidthItem.description}</p>
      </RevealWrapper>
    </section>
  )
}

export default WhatWeCanBuild
