'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: components/wow/shared/Marquee.tsx — scrolling client logo marquee from home page. */
const ClientsMarquee = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  return (
    <section id="clients" className="relative scroll-mt-28 overflow-hidden px-3 sm:scroll-mt-32 md:px-4 lg:scroll-mt-36">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="mb-10 flex justify-center lg:mb-20">
          <SectionLabel>OUR CLIENTS</SectionLabel>
        </RevealWrapper>

        <div
          onMouseEnter={pauseMarquee}
          onMouseLeave={resumeMarquee}
          className="relative overflow-hidden"
        >
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark"
              >
                <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
              </div>
            ))}
          </div>
        </div>

        <RevealWrapper className="mt-7 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="#client-stories" variant="white">
              View Client Stories
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientsMarquee
