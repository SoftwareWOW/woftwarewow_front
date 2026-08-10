'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'

const divisions = [
  'Design',
  'Events',
  'Host',
  'Hub',
  'Impact',
  'Intelligence',
  'Marketing',
  'Social',
  'Websites',
  'Accelerate',
]

/** Layout: Home-20 MarqueeV4 — scrolling strip with Why Superagency header + CTA. */
const WhySuperagency = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  return (
    <section aria-labelledby="why-superagency-heading">
      <div className="container mb-10 text-center lg:mb-14">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Why a Superagency?</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 id="why-superagency-heading" className="mx-auto max-w-4xl">
            Because growth doesn&apos;t happen in <InstrumentText>silos.</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me mt-5">
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-secondary dark:text-backgroundBody">
            Your brand affects your marketing. Your marketing affects your sales. Your website affects conversion. Your
            technology affects operations. And increasingly, AI connects all of them.
          </p>
        </RevealWrapper>
        <RevealWrapper className="reveal-me mt-4">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
            Not watered-down enterprise services. Not one-size-fits-all packages. Expertise designed around the
            realities of growing a business.
          </p>
        </RevealWrapper>
      </div>

      <RevealWrapper
        onMouseEnter={pauseMarquee}
        onMouseLeave={resumeMarquee}
        className="relative overflow-hidden"
        aria-label="WOW ecosystem divisions"
      >
        <div
          ref={marqueeRef}
          className="z-50 flex w-fit flex-nowrap whitespace-nowrap will-change-transform"
          aria-live="off"
        >
          {divisions.map((name) => (
            <div
              key={name}
              className="z-50 flex h-24 min-w-[220px] flex-shrink-0 items-center justify-center gap-2 border-y border-r border-y-secondary/10 border-r-secondary/10 bg-backgroundBody px-8 dark:border-y-backgroundBody/10 dark:border-r-backgroundBody/10 dark:bg-dark"
            >
              <WowText className="text-2xl md:text-3xl">WOW</WowText>
              <span className="text-2xl font-semibold text-secondary dark:text-backgroundBody md:text-3xl">
                {name}
              </span>
            </div>
          ))}
        </div>
      </RevealWrapper>

      <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
        <ButtonComponentList itemClassName="max-md:w-full">
          <ButtonComponent href="/services" variant="secondary" fullWidth>
            Explore the WOW Ecosystem
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default WhySuperagency
