'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const HERO_IMAGES = [
  {
    src: '/images/wow/Hero/devision/Design 1.jpg',
    alt: 'Product design workspace and interface exploration',
  },
  {
    src: '/images/wow/Hero/devision/Mockup 2 Dark.png',
    alt: 'Polished digital product mockup',
  },
]

/** Layout: for-you/build-and-launch/BuildLaunchHero (Home-19) — split headline + dual media, no circle logo. */
const ProductDesignHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-14"
      aria-labelledby="product-design-hero-heading"
    >
      <div
        id="hero-gradient-wrapper"
        className="absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0"
      >
        <img
          loading="eager"
          fetchPriority="high"
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          id="hero-gradient"
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-5">
            <SectionLabel>Product Design &amp; Prototyping</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="product-design-hero-heading"
            className="reveal-me text-5xl font-light leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            Great products start with
            <br className="hidden lg:block" /> <InstrumentText>better thinking.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-3 max-w-xl">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              From early concepts to interactive prototypes, we turn complex ideas into intuitive digital experiences.
              We help you define, design, and validate your product before full development begins.
            </p>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/portfolio" variant="secondary">
                Explore Our Work
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper
            as="figure"
            className="reveal-me relative mt-0 overflow-hidden rounded-radius-md sm:mt-[78px]"
          >
            <Image
              src={HERO_IMAGES[0].src}
              alt={HERO_IMAGES[0].alt}
              width={480}
              height={360}
              className="h-auto w-full object-cover"
              priority
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <Image
              src={HERO_IMAGES[1].src}
              alt={HERO_IMAGES[1].alt}
              width={480}
              height={360}
              className="h-auto w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ProductDesignHero
