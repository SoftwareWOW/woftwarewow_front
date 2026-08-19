'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { TechCard } from '@/components/wow/shared/TechStackShared'
import { partnerCategories } from '../_data/partners'

/** Layout: Home-21 ClientsV4 — bordered logo grid per partner category. */
const PartnerNetwork = () => {
  return (
    <section
      id="partner-network"
      className="scroll-mt-28 pb-14 sm:scroll-mt-32 md:pb-16 lg:scroll-mt-36 lg:pb-[88px] xl:pb-[100px]"
    >
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
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

        <div className="flex flex-col gap-12 md:gap-16">
          {partnerCategories.map((category) => (
            <RevealWrapper key={category.title} className="reveal-me">
              <div className="mb-6 md:mb-8">
                <h3 className="text-xl md:text-2xl">{category.title}</h3>
                <p className="mt-2 max-w-2xl text-base text-[#808080]">{category.description}</p>
              </div>

              <div className="mx-auto grid max-w-4xl border-x border-t dark:border-dark max-md:grid-cols-2 md:grid-cols-4 max-md:[&>*:nth-child(2)]:border-r-0 [&>*:nth-child(4)]:border-r-0 [&>*]:border-b [&>*]:border-r dark:[&>*]:border-dark">
                {category.partners.map((partner) => (
                  <div key={partner.name} className="flex items-center justify-center px-6 py-6 md:px-8 md:py-8">
                    <TechCard
                      name={partner.name}
                      icon={partner.icon}
                      color={partner.color}
                      invertInDark={partner.invertInDark}
                    />
                  </div>
                ))}
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerNetwork
