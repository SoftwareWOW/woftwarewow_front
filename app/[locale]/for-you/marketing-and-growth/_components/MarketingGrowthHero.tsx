'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import VideoModal from '@/components/shared/VideoModal'
import Link from 'next/link'
import { useState } from 'react'

/** Layout: Home-16 HeroV16 — split outcome headline + trust/media. */
const MarketingGrowthHero = () => {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover pt-[107px] md:pt-[130px] xl:pt-[180px]"
      aria-labelledby="marketing-growth-heading"
    >
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 h-full w-full blur-[85px] md:blur-[80px]">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          id="hero-gradient"
          className="absolute left-0 top-1/2 max-md:-translate-y-[60%] md:-translate-y-1/2 lg:scale-75 xl:scale-100"
        />
      </div>

      <div className="video-section mx-auto max-w-[1300px] px-4 md:px-[30px]">
        <div className="flex flex-col items-end gap-8 lg:flex-row">
          <div className="lg:w-[65%]">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>Marketing &amp; Growth</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1 id="marketing-growth-heading">
                Turn attention into
                <br className="hidden lg:block" />
                <InstrumentText> sustainable growth.</InstrumentText>
              </h1>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-3">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
                Connect strategy, marketing, content, sales and automation to attract the right customers and create
                measurable growth.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Talk to a Growth Expert
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="#growth-solutions" variant="secondary">
                  Explore Growth Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper className="reveal-me w-full lg:w-[34%]">
            <div className="flex items-center gap-x-5 lg:flex-col xl:flex-row">
              <div className="my-3 flex [&>*:not(:first-child)]:-ml-4">
                <img
                  src="/images/avatar/review-19.png"
                  className="size-12 rounded-full border-2 border-secondary object-cover md:size-[60px]"
                  alt=""
                />
                <img
                  src="/images/avatar/review-20.png"
                  className="size-12 rounded-full border-2 border-secondary object-cover md:size-[60px]"
                  alt=""
                />
                <img
                  src="/images/avatar/review-21.png"
                  className="size-12 rounded-full border-2 border-secondary object-cover md:size-[60px]"
                  alt=""
                />
                <Link href="/contact">
                  <figure className="duration-300 ease-in-out hover:scale-105 max-md:size-12">
                    <img src="/images/icons/plus-icon.svg" className="block dark:hidden" alt="" />
                    <img src="/images/icons/plus-icon-white.svg" alt="" className="hidden dark:block" />
                  </figure>
                </Link>
              </div>
              <p className="text-[17px] leading-[1.4] text-[#808080]">
                Trusted by growing
                <br />
                businesses worldwide
              </p>
            </div>
            <div
              className="hero-video-container group relative mt-5 h-full w-full cursor-pointer overflow-hidden rounded-radius-md md:mt-[30px]"
              onClick={() => setOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setOpen(true)
                }
              }}
              role="button"
              tabIndex={0}
            >
              <button type="button" className="absolute left-[45%] top-[40%] -translate-x-[45%]" aria-label="Play video">
                <div className="flex size-12 transform items-center justify-center rounded-full bg-secondary transition-transform duration-300 group-hover:scale-105 dark:bg-backgroundBody md:size-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={18} viewBox="0 0 15 18" fill="none">
                    <path
                      d="M14.4886 8.40229L1.47805 0.667204C1.36852 0.601523 1.24296 0.565438 1.1143 0.562672C0.985649 0.559906 0.858564 0.590558 0.74616 0.651467C0.633755 0.712376 0.540101 0.801336 0.474856 0.90917C0.409612 1.017 0.375142 1.13981 0.375 1.26491V16.7351C0.375142 16.8602 0.409612 16.983 0.474856 17.0908C0.540101 17.1987 0.633755 17.2876 0.74616 17.3485C0.858564 17.4094 0.985649 17.4401 1.1143 17.4373C1.24296 17.4346 1.36852 17.3985 1.47805 17.3328L14.4886 9.59771C14.5954 9.53629 14.684 9.44887 14.7454 9.34406C14.8069 9.23925 14.8393 9.12066 14.8393 9C14.8393 8.87934 14.8069 8.76076 14.7454 8.65594C14.684 8.55113 14.5954 8.46371 14.4886 8.40229V8.40229Z"
                      className="fill-backgroundBody dark:fill-[#181818]"
                    />
                  </svg>
                </div>
              </button>
              <img src="/images/hero-img/video-img.png" alt="Marketing and growth overview" className="w-full" />
            </div>
          </RevealWrapper>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </section>
  )
}

export default MarketingGrowthHero
