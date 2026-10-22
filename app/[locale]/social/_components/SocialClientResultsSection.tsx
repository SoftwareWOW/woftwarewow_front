'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CounterAnimation from '@/utils/CounterAnimation'
import { SOCIAL_CLIENT_RESULTS } from './social-content'

export default function SocialClientResultsSection() {
  const { eyebrow, titleBefore, titleAccent, description, stats } = SOCIAL_CLIENT_RESULTS

  return (
    <section className="about relative bg-background transition-colors duration-300">
      <div className="container relative z-10">
        <div className="mb-10 flex flex-col gap-8 border-b border-secondary/10 pb-10 dark:border-backgroundBody/15 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:pb-14">
          <div className="max-w-md">
            <RevealWrapper className="mb-4">
              <SectionLabel>{eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] tracking-[-0.03em] text-secondary dark:text-backgroundBody">
                {titleBefore}{' '}
                <InstrumentText className="block sm:inline">{titleAccent}</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>
          <RevealWrapper className="max-w-lg lg:text-right">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-8 border-b border-secondary/10 pb-10 dark:border-backgroundBody/15 sm:grid-cols-3 sm:gap-4 md:gap-6 lg:pb-14">
          {stats.map((stat) => (
            <RevealWrapper key={stat.label} className="stat-item w-full">
              <div className="flex flex-row items-baseline justify-center gap-3 sm:flex-col sm:items-center sm:text-center">
                <h3 className="font-instrument text-[clamp(2.5rem,5vw,4rem)] font-normal italic leading-none tracking-[-0.02em] text-[#0D0D0D] dark:text-[#F2F2F2]">
                  {'isDecimal' in stat && stat.isDecimal ? (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  ) : (
                    <>
                      <CounterAnimation number={stat.value as number} />
                      {stat.suffix}
                    </>
                  )}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#808080]">{stat.label}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
