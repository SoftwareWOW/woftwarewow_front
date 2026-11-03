'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const solutions = [
  {
    title: 'Customer Portals',
    description: 'Accounts, requests, and information in one place.',
    image: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
  },
  {
    title: 'Mobile Apps',
    description: 'Your services, always within reach.',
    image: '/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc 2.svg',
  },
  {
    title: 'Support Platforms',
    description: 'Simpler requests, updates, and assistance.',
    image: '/images/wow/LandingPageNaveBare/Help and support.svg',
  },
  {
    title: 'Booking Systems',
    description: 'Easy scheduling and self-service.',
    image: '/images/wow/LandingPageNaveBare/Meet 1.svg',
  },
  {
    title: 'Smart Assistance',
    description: 'Helpful chatbots and automated responses.',
    image: '/images/wow/LandingPageNaveBare/AI Automation 3.svg',
  },
]

/** Layout: homepage-25/ClientSuccessStoriesV2 */
const WhatWeCanBuild = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-16 lg:justify-between">
          <div className="flex-1 md:self-start">
            <SectionLabel className="mb-3">What We Can Build</SectionLabel>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Digital experiences that work for <InstrumentText>people.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg text-[#808080] md:place-self-end md:text-right lg:text-xl">
                Five ways to make your services easier to use.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <RevealWrapper>
          <Swiper
            loop
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
          >
            {solutions.map((item) => (
              <SwiperSlide key={item.title}>
                <figure className="relative overflow-hidden rounded-radius-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={1280}
                    height={640}
                    className="aspect-[2/1] h-auto w-full object-cover max-md:aspect-[4/3]"
                  />
                  <div className="absolute bottom-0 left-0 h-[200px] w-full bg-gradient-to-t from-secondary/85 to-secondary/5" />
                  <figcaption className="absolute bottom-6 left-6 z-10 pr-6">
                    <h3 className="text-[25px] font-light leading-[1.2] text-backgroundBody lg:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-backgroundBody/80 lg:text-xl">{item.description}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhatWeCanBuild
