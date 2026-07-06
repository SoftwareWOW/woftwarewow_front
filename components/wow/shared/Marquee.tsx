'use client'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'

import React from 'react'
import ButtonComponent, { ButtonComponentList } from './ButtonComponent'

const Marquee: React.FC = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }

  return (
    <section className="relative mx-auto w-full max-w-[1920px] max-md:pt-0.5">
        <div className="overflow-hidden">
          <RevealWrapper as="p" className=" mb-10 text-wrap text-center lg:mb-20">
            Trusted By Businesses, Partners & Communities
          </RevealWrapper>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
            <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark">
                  <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                  <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
                </div>
              ))}
            </div>
          </div>
              <RevealWrapper className="mt-7 flex justify-center md:mt-14">
                        <ButtonComponentList>
                          <ButtonComponent href="/solutions" variant="white">
                          Explore Our Solutions
                          </ButtonComponent>
                        </ButtonComponentList>
                      </RevealWrapper>
        </div>
    </section>
  )
}

export default Marquee
