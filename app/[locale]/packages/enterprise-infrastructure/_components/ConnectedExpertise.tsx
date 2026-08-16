'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import type { ReactNode } from 'react'

const teams: { id: string; title: ReactNode; description: string; image: string; alt: string }[] = [
  {
    id: 'host',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Host
      </>
    ),
    description: 'Hosting, cloud & infrastructure',
    image: '/images/wow/nav/cards/Host.png',
    alt: 'WOW Host hosting and cloud infrastructure',
  },
  {
    id: 'software',
    title: 'SoftwareWOW',
    description: 'Applications & system integrations',
    image: '/images/wow/nav/cards/Softwaerwow.png',
    alt: 'SoftwareWOW applications and integrations',
  },
  {
    id: 'intelligence',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Intelligence
      </>
    ),
    description: 'AI & business automation',
    image: '/images/wow/nav/cards/Intelligent.png',
    alt: 'WOW Intelligence AI and automation',
  },
  {
    id: 'websites',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Websites
      </>
    ),
    description: 'Web platforms',
    image: '/images/wow/nav/cards/Website.png',
    alt: 'WOW Websites web platforms',
  },
  {
    id: 'accelerate',
    title: (
      <>
        <WowText className="text-[1em] leading-[inherit] tracking-[inherit]">WOW</WowText> Accelerate
      </>
    ),
    description: 'CRM & growth systems',
    image: '/images/wow/nav/cards/Accelerate.png',
    alt: 'WOW Accelerate CRM and growth systems',
  },
]

/** Layout: Home-11 ServicesV10 — horizontal-scroll image cards. */
const ConnectedExpertise = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>One Package. Connected Expertise.</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              One infrastructure. <InstrumentText>Connected expertise.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear text-[#808080]">
              Bring hosting, software and intelligent technology together through one connected team.
            </p>
          </TextAppearAnimation>
        </div>
      </div>
      <div ref={triggerRef} className="service-section pt-10">
        <div
          ref={contentRef}
          className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 md:flex-row md:flex-nowrap"
        >
          {teams.map((item) => (
            <div key={item.id} className="group w-[370px]">
              <figure className="overflow-hidden rounded-radius-sm">
                <Link href="/contact" className="block">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-auto w-full rounded-radius-sm object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
              </figure>
              <h3 className="mb-2.5 mt-[30px] flex items-baseline gap-[0.25em] text-2xl leading-[1.1] tracking-normal md:text-[32px]">
                {item.title}
              </h3>
              <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConnectedExpertise
