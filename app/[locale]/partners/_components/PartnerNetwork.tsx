'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { TechCard, type Tech } from '@/components/wow/shared/TechStackShared'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import { partnerCategories } from '../_data/partners'

/** Layout: wow/shared/Marquee — one scrolling row per partner category. */
function CategoryMarquee({ partners }: { partners: Tech[] }) {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  return (
    <div onMouseEnter={pauseMarquee} onMouseLeave={resumeMarquee} className="relative overflow-hidden">
      <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark"
          >
            <TechCard
              name={partner.name}
              icon={partner.icon}
              color={partner.color}
              invertInDark={partner.invertInDark}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const PartnerNetwork = () => {
  return (
    <section id="partner-network" className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <div className="mb-4 flex justify-center md:mb-5">
            <SectionLabel>PARTNER NETWORK</SectionLabel>
          </div>
          <TextAppearAnimation>
            <h2 className="text-appear">Trusted partnerships. Connected expertise.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-4 max-w-2xl text-[#808080]">
              Our partner network helps us extend capabilities, improve delivery, and create more value for our clients.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {partnerCategories.map((category) => (
            <RevealWrapper key={category.title} className="reveal-me">
              <div className="mb-4 md:mb-5">
                <h3 className="text-xl md:text-2xl">{category.title}</h3>
                <p className="mt-2 max-w-2xl text-base text-[#808080]">{category.description}</p>
              </div>
              <CategoryMarquee partners={category.partners} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerNetwork
