'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

const connections = [
  {
    title: 'CRM & Sales Tools',
    description: 'Connect customer data and sales workflows.',
    image: '/images/wow/LandingPageNaveBare/Sales%20Acceleration%203.svg',
  },
  {
    title: 'ERP & Business Systems',
    description: 'Bring operational information together.',
    image: '/images/wow/LandingPageNaveBare/Softwarewow%201%201.svg',
  },
  {
    title: 'E-commerce Platforms',
    description: 'Sync orders, customers, and inventory.',
    image: '/images/wow/LandingPageNaveBare/Website%201%202.svg',
  },
  {
    title: 'Marketing & Automation',
    description: 'Connect campaigns, leads, and follow-ups.',
    image: '/images/wow/LandingPageNaveBare/Marketing%20%26%20Growth.svg',
  },
  {
    title: 'Custom Applications & APIs',
    description: 'Link your software with other platforms.',
    image: '/images/wow/LandingPageNaveBare/AI%20Automation%203.svg',
  },
]

/** Layout: homepage-11/ServicesV10 */
const WhatWeCanConnect = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>What We Can Connect</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Make your technology work <InstrumentText>as one.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div ref={triggerRef} className="pt-10">
          <div
            ref={contentRef}
            className="flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 md:flex-row md:flex-nowrap"
          >
            {connections.map((item) => (
              <div key={item.title} className="w-full md:w-[370px]">
                <figure className="overflow-hidden rounded-radius-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>
                <h3 className="mb-2.5 mt-[30px] text-[25px] font-light leading-[1.2] lg:text-3xl">{item.title}</h3>
                <p className="max-w-[95%] text-[#808080] lg:text-xl">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatWeCanConnect
