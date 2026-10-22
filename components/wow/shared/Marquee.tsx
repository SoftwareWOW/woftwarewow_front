'use client'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'

import React from 'react'
import ButtonComponent, { ButtonComponentList } from './ButtonComponent'
import SectionLabel from './SectionLabel'

type MarqueeProps = {
  logos?: Array<{ id: number; logo: string; darkLogo: string; alt: string }>
  showSectionLabel?: boolean
  showExploreCta?: boolean
  minimalLogoCells?: boolean
}

const Marquee: React.FC<MarqueeProps> = ({
  logos: logosProp,
  showSectionLabel = true,
  showExploreCta = true,
  minimalLogoCells = false,
}) => {
  const logos = logosProp ?? data
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }

  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        {showSectionLabel ? (
          <RevealWrapper className="mb-10 flex justify-center lg:mb-20">
            <SectionLabel>Trusted By Businesses, Partners & Communities</SectionLabel>
          </RevealWrapper>
        ) : null}

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden"
        >
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
            {logos.map((item) => (
              <div
                key={item.id}
                className={
                  minimalLogoCells
                    ? 'z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-transparent bg-transparent'
                    : 'z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark'
                }
              >
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="inline-block dark:hidden"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={item.darkLogo}
                  alt={item.alt}
                  className="hidden dark:inline-block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {showExploreCta ? (
          <RevealWrapper className="mt-7 flex justify-center md:mt-14">
            <ButtonComponentList>
              <ButtonComponent href="/services" variant="white">
                View All Services
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        ) : null}
      </div>
    </section>
  )
}

export default Marquee
