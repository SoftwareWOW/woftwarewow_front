'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import VideoModal from '@/components/shared/VideoModal'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useState } from 'react'

/** Layout: Home-25 HeroV25 — video left + headline + dual CTAs. */
const SalesRevenueHero = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]">
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 md:px-[30px]">
        <div className="flex flex-col items-center gap-x-20 gap-y-14 lg:flex-row lg:items-stretch">
          <RevealWrapper className="reveal-me group relative w-full lg:flex lg:w-1/2 lg:flex-col">
            <div
              onClick={() => setOpen(true)}
              className="hero-video relative h-full min-h-[280px] flex-1 cursor-pointer overflow-hidden rounded-radius-md lg:min-h-0"
              aria-label="Watch our video">
              <div className="absolute bottom-10 left-11 z-10 cursor-pointer xl:bottom-10" id="play-icon">
                <div className="flex size-10 items-center justify-center rounded-full bg-secondary/50 pl-0.5 bg-blend-lighten transition-all duration-300 ease-in-out group-hover:scale-110 dark:bg-backgroundBody/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={15}
                    height={16}
                    viewBox="0 0 15 16"
                    fill="none"
                    aria-hidden="true">
                    <path
                      d="M13.6848 7.50412L1.99138 1.08687C1.89294 1.03237 1.78009 1.00244 1.66446 1.00014C1.54883 0.997848 1.43461 1.02328 1.33359 1.07381C1.23256 1.12434 1.14839 1.19815 1.08975 1.28761C1.03111 1.37707 1.00013 1.47895 1 1.58274V14.4173C1.00013 14.521 1.03111 14.6229 1.08975 14.7124C1.14839 14.8019 1.23256 14.8757 1.33359 14.9262C1.43461 14.9767 1.54883 15.0022 1.66446 14.9999C1.78009 14.9976 1.89294 14.9676 1.99138 14.9131L13.6848 8.49588C13.7808 8.44492 13.8604 8.37239 13.9157 8.28544C13.9709 8.19849 14 8.10011 14 8C14 7.89989 13.9709 7.80152 13.9157 7.71456C13.8604 7.62761 13.7808 7.55508 13.6848 7.50412V7.50412Z"
                      className="stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <img
                src="/images/wow/nav/cards/Sales Acceleration 1.png"
                alt="Sales team working on revenue growth"
                className="h-full w-full object-cover"
                width={800}
                height={450}
              />
            </div>
          </RevealWrapper>

          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>Sales &amp; Revenue</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1 className="text-[42px] font-normal leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.24] xl:text-[64px]">
                Turn more opportunities into
                <InstrumentText> revenue.</InstrumentText>
              </h1>
            </RevealWrapper>

            <RevealWrapper className="reveal-me mt-3">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
                Build a stronger sales engine with better lead generation, funnels, CRM workflows and automation —
                designed to help your team sell more effectively and consistently.
              </p>
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Accelerate Your Sales
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/services" variant="secondary">
                  Explore Solutions
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </section>
  )
}

export default SalesRevenueHero
