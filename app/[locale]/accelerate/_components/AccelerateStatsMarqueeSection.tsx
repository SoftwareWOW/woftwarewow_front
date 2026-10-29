'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import CounterAnimation from '@/utils/CounterAnimation'
import AccelerateSalesToolsMarquee from './AccelerateSalesToolsMarquee'
import { ACCELERATE_STATS } from './accelerate-content'

export default function AccelerateStatsMarqueeSection() {
  const { heading, bodyParagraph, stats } = ACCELERATE_STATS

  return (
    <>
      <section className="about relative bg-background transition-colors duration-300">
        <div className="container relative z-10">
          <div className="flex flex-col gap-10 border-b border-secondary/10 pb-10 dark:border-backgroundBody/15 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pb-14">
            <RevealWrapper>
              <h2 className="max-w-md text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody">
                {heading}
              </h2>
            </RevealWrapper>

            <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4 md:gap-6">
              {stats.map((stat) => (
                <RevealWrapper key={stat.description} className="stat-item w-full">
                  <div className="relative flex h-full flex-col items-start justify-start sm:items-center sm:text-center">
                    <div className="flex items-baseline gap-1">
                      <h3 className="font-['Outfit'] text-[clamp(32px,4vw,56px)] font-light leading-[1.1] tracking-[-0.02em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
                        <CounterAnimation number={stat.value} />
                        {stat.suffix}
                      </h3>
                    </div>
                    <p className="mt-2 line-clamp-4 text-left font-['Outfit'] text-[clamp(12px,1vw,15px)] font-light leading-[1.5] text-[#666666] dark:text-[#888888] sm:text-center">
                      {stat.description}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>

          <RevealWrapper className="mt-10 md:mt-14">
            <p className="mx-auto max-w-4xl text-center font-['Outfit'] text-[clamp(16px,2vw,22px)] font-light leading-[1.6] tracking-[0.02em] text-[#333333] dark:text-[#666666]">
              {bodyParagraph}
            </p>
          </RevealWrapper>

          <AccelerateSalesToolsMarquee />
        </div>
      </section>
    </>
  )
}
