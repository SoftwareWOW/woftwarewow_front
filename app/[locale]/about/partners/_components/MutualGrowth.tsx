import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import HeadingWithInstrument from '@/components/wow/shared/HeadingWithInstrument'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const gains = [
  'Access to WOW’s SMB ecosystem of growing businesses',
  'Cross-service opportunities across software, marketing, creative, and growth',
  'Collaborative delivery with coordinated teams',
  'Joint growth initiatives — co-marketing, referrals, and shared offers',
]

/** Layout: Home-25 WhatWeOffer — image + list (not Strategy Centre BrandingProcess). */
const MutualGrowth = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-12 items-start gap-y-12 lg:gap-x-16">
          <RevealWrapper className="reveal-me col-span-12 lg:col-span-6 lg:h-full">
            <img
              src="/images/wow/nav/cards/pexels-fauxels-3183132 1.png"
              alt="Built for mutual growth"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>

          <RevealWrapper className="col-span-12 space-y-7 lg:col-span-6">
            <div className="space-y-3">
              <SectionLabel>Mutual Growth</SectionLabel>
              <HeadingWithInstrument before="Built for mutual" accent="growth" />
              <p className="text-lg font-normal leading-[28.8px] tracking-[0.36px] text-black/70 dark:text-backgroundBody/70">
                Partnerships that expand reach, deepen delivery, and create shared opportunity.
              </p>
            </div>

            <ul className="list-inside list-disc space-y-1.5">
              {gains.map((item) => (
                <li
                  key={item}
                  className="text-base font-normal leading-[25.6px] tracking-[0.32px] text-black/70 dark:text-backgroundBody/70"
                >
                  {item}
                </li>
              ))}
            </ul>

            <ButtonComponentList
              className="mt-2 flex justify-start"
              itemClassName="block w-full text-center md:inline-block md:w-auto"
            >
              <ButtonComponent href="/meet" variant="secondary">
                Talk to Our Team
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default MutualGrowth
