'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Marquee from 'react-fast-marquee'

/** Layout: homepage-15/HeroV15 — split headline + stacked product mockups + marquee. */
const CustomSoftwareHero = () => {
  return (
    <RevealWrapper
      as="section"
      className="relative overflow-hidden pb-4 pt-32 after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-secondary/20 after:content-[''] dark:after:bg-backgroundBody/20 md:pt-16 lg:pt-[110px] xl:pt-[120px]"
      aria-labelledby="custom-software-hero-heading"
    >
      <div className="relative before:content-none lg:before:absolute lg:before:-top-40 lg:before:left-[61%] lg:before:z-[999999999999] lg:before:h-[136.4%] lg:before:w-[1px] lg:before:bg-secondary/20 lg:before:content-[''] lg:after:absolute lg:after:bottom-[120px] lg:after:h-[1px] lg:after:w-[61vw] lg:after:bg-secondary/20 lg:after:content-[''] lg:dark:before:bg-backgroundBody/20 lg:dark:after:bg-backgroundBody/20 xl:before:-top-40 xl:before:left-[49%] xl:before:h-[119.7%] xl:after:w-[49vw] 2xl:before:left-[54.7%] 2xl:after:bottom-[180px] 2xl:after:w-[54.3vw]">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-y-10 px-4 md:px-[30px] lg:flex-row">
          <div className="max-w-full lg:max-w-[610px]">
            <div className="relative mb-3">
              <HeroGradientAnimation />
              <SectionLabel className="mb-5 xl:mt-14">Custom Software Development</SectionLabel>
              <TextAppearAnimation>
                <h1
                  id="custom-software-hero-heading"
                  className="text-appear text-5xl font-normal leading-[1.18] tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[74px] xl:text-8xl xl:leading-[1.20] xl:tracking-[-2.88px]"
                >
                  Software built
                  <span className="xl:block"> around your</span>
                  <InstrumentText className="xl:block"> business.</InstrumentText>
                </h1>
              </TextAppearAnimation>
            </div>
            <RevealWrapper as="p" className="reveal-me">
              We design and develop custom software that fits your workflows, solves real problems, and grows with your
              business.
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 md:mt-14 lg:mt-7 xl:mt-14">
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonComponentList className="flex" itemClassName="block w-full text-center lg:inline-block lg:w-auto">
                  <ButtonComponent href="/contact" variant="primary">
                    Start a Project
                  </ButtonComponent>
                </ButtonComponentList>
                <ButtonComponentList className="flex" itemClassName="block w-full text-center lg:inline-block lg:w-auto">
                  <ButtonComponent href="/portfolio" variant="secondary">
                    View Our Work
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapperV2>
            <div className="relative max-md:mt-7 lg:absolute lg:bottom-0 lg:w-[45%]">
              <div className="absolute left-0 top-0 z-40 h-full w-[5%] bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark-gradient" />
              <div className="marquee-container -z-10">
                <Marquee>
                  <h1 className="text-stroke reveal-me text-nowrap py-7 pr-3 font-instrument italic lg:py-1 2xl:py-7">
                    Software Built Around Your Business
                  </h1>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-x-2.5 gap-y-4 max-lg:w-full">
            <RevealWrapper as="figure" className="w-full">
              <img
                src="/images/wow/Hero/devision/Mockup 2 Dark.png"
                alt="Custom software product interface"
                className="max-lg:w-full"
              />
            </RevealWrapper>
            <RevealWrapper as="figure" className="w-full">
              <img
                src="/images/wow/nav/cards/Softwaerwow.png"
                alt="Custom software dashboard"
                className="max-lg:w-full"
              />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </RevealWrapper>
  )
}

export default CustomSoftwareHero
