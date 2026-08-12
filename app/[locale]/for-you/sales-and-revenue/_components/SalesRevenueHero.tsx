'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import VideoModal from '@/components/shared/VideoModal'
import Link from 'next/link'
import { useState } from 'react'

/** Layout: Home-25 HeroV25 — video left + headline + dual CTAs. */
const SalesRevenueHero = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]">
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 pb-14 md:px-[30px] md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="flex flex-col items-center gap-x-20 gap-y-14 lg:flex-row">
          <RevealWrapper className="reveal-me group relative lg:w-1/2 xl:min-h-[700px]">
            <div onClick={() => setOpen(true)} className="hero-video h-full" aria-label="Watch our video">
              <div className="absolute bottom-10 left-11 cursor-pointer xl:bottom-10" id="play-icon">
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
                width={800}
                height={450}
              />
            </div>
          </RevealWrapper>

          <div className="lg:w-1/2">
            <RevealWrapper
              as="h1"
              className="reveal-me text-[42px] font-normal leading-[1.3] md:text-[47px] md:leading-[1.2] lg:text-[54px] lg:leading-[1.24] xl:text-[64px]">
              Turn more opportunities into
              <i className="font-instrument"> revenue.</i>
            </RevealWrapper>

            <RevealWrapper as="p" className="reveal-me max-w-xl">
              Build a stronger sales engine with better lead generation, funnels, CRM workflows and automation —
              designed to help your team sell more effectively and consistently.
            </RevealWrapper>

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
              <Link href="/contact" className="rv-button rv-button-primary rv-button-sm block md:inline-block">
                <div className="rv-button-top text-center">
                  <span>Accelerate Your Sales</span>
                </div>
                <div className="rv-button-bottom text-center">
                  <span className="text-nowrap">Accelerate Your Sales</span>
                </div>
              </Link>
              <Link href="/services" className="rv-button rv-button-white rv-button-sm block md:inline-block">
                <div className="rv-button-top text-center">
                  <span>Explore Solutions</span>
                </div>
                <div className="rv-button-bottom text-center">
                  <span className="text-nowrap">Explore Solutions</span>
                </div>
              </Link>
            </RevealWrapperV2>
          </div>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </section>
  )
}

export default SalesRevenueHero
