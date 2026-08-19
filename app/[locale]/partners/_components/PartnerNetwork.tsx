'use client'

import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { Tech } from '@/components/wow/shared/TechStackShared'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import { partnerCategories } from '../_data/partners'

addCollection(logos)
addCollection(simpleIcons)

/** Layout: wow/shared/Marquee — one scrolling row per partner category. */
function PartnerMarqueeTile({ partner }: { partner: Tech }) {
  const iconClass = [
    'h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12',
    partner.invertInDark ? 'text-black dark:invert' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark"
      aria-label={partner.name}
    >
      <Icon
        icon={partner.icon}
        className={iconClass}
        style={partner.color && !partner.invertInDark ? { color: partner.color } : undefined}
        aria-hidden
      />
    </div>
  )
}

function CategoryMarquee({ partners }: { partners: Tech[] }) {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  return (
    <div
      onMouseEnter={pauseMarquee}
      onMouseLeave={resumeMarquee}
      className="relative overflow-hidden"
    >
      <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
        {partners.map((partner) => (
          <PartnerMarqueeTile key={partner.name} partner={partner} />
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
      </div>

      <div className="flex flex-col gap-8 md:gap-10">
        {partnerCategories.map((category) => (
          <RevealWrapper key={category.title} className="reveal-me">
            <div className="container mb-4 md:mb-5">
              <h3 className="text-xl md:text-2xl">{category.title}</h3>
              <p className="mt-2 max-w-2xl text-base text-[#808080]">{category.description}</p>
            </div>

            <div className="relative overflow-hidden px-3 md:px-4">
              <div className="relative z-10 mx-auto max-w-[1320px]">
                <CategoryMarquee partners={category.partners} />
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default PartnerNetwork
