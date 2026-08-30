'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Marquee from 'react-fast-marquee'

const HERO_IMAGES = [
  {
    src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
    alt: 'Custom software product interface',
  },
  {
    src: '/images/wow/nav/cards/Softwaerwow.png',
    alt: 'Custom software dashboard',
  },
]

/** Layout: industries/education-and-training EducationHero — split headline + stacked mockups + marquee. */
const CustomSoftwareHero = () => {
  return (
    <RevealWrapper
      as="section"
      className="relative overflow-x-hidden pb-10 pt-6 sm:pt-8 md:pb-14 md:pt-10 lg:pt-12 xl:pb-16 xl:pt-14"
      aria-labelledby="custom-software-hero-heading"
    >
      <div className="relative">
        <div className="mx-auto flex max-w-[1600px] flex-col items-stretch justify-between gap-y-10 px-4 md:px-[30px] lg:flex-row lg:items-center lg:gap-x-12 xl:gap-x-16">
          <div className="flex w-full min-w-0 flex-col lg:max-w-[50%] xl:max-w-[610px]">
            <div className="relative mb-3">
              <HeroGradientAnimation />
              <SectionLabel className="mb-5">Custom Software Development</SectionLabel>
              <TextAppearAnimation>
                <h1
                  id="custom-software-hero-heading"
                  className="text-appear text-[clamp(2rem,4.8vw,5.5rem)] font-normal leading-[1.15] tracking-[-0.02em]"
                >
                  Software built around your <InstrumentText>business.</InstrumentText>
                </h1>
              </TextAppearAnimation>
            </div>
            <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              We design and develop custom software that fits your workflows, solves real problems, and grows with your
              business.
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/portfolio" variant="secondary">
                  View Our Work
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
            <div className="relative mt-8 w-full xl:mt-12">
              <div className="absolute left-0 top-0 z-40 h-full w-[5%] bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark-gradient" />
              <div className="marquee-container">
                <Marquee>
                  <h2 className="text-stroke text-nowrap py-4 pr-3 font-instrument italic lg:py-6">
                    Software Built Around Your Business
                  </h2>
                </Marquee>
              </div>
            </div>
          </div>
          <div className="flex w-full min-w-0 flex-col gap-4 lg:w-[42%] xl:w-[46%]">
            {HERO_IMAGES.map((image) => (
              <RevealWrapper as="figure" key={image.src} className="w-full overflow-hidden rounded-radius-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-auto w-full object-cover sm:max-h-[280px] lg:max-h-[320px] xl:max-h-[380px]"
                  width={665}
                  height={440}
                />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </RevealWrapper>
  )
}

export default CustomSoftwareHero
