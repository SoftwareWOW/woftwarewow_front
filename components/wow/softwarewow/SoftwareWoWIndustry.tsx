'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { SOFTWARE_WOW_INDUSTRIES } from '@/data/softwareWowIndustries'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import SectionLabel from '../shared/SectionLabel'

const SoftwareWoWIndustry = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee({ duration: 100 })

  return (
    <section className="relative overflow-hidden px-3 md:px-4">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="mb-10 flex justify-center lg:mb-20">
          <SectionLabel>Industry</SectionLabel>
        </RevealWrapper>

        <div
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
          className="relative overflow-hidden"
        >
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5">
            {SOFTWARE_WOW_INDUSTRIES.map(({ id, label, icon: Icon }) => (
              <div
                key={id}
                className="flex h-[132px] w-[132px] flex-shrink-0 flex-col items-center justify-center gap-3 rounded-radius-sm border border-secondary/10 bg-backgroundBody px-2 py-5 dark:border-backgroundBody/10 dark:bg-dark sm:h-[140px] sm:w-[140px]"
              >
                <Icon
                  className="size-8 shrink-0 text-secondary dark:text-backgroundBody"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <p className="max-w-[108px] text-center text-xs font-medium leading-tight text-secondary dark:text-backgroundBody sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoftwareWoWIndustry
