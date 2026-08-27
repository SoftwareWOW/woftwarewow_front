'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ScrollingServiceCardsMarquee from '@/components/wow/shared/ScrollingServiceCardsMarquee'
import { SOFTWARE_WOW_SERVICES } from '@/data/softwareWowServices'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const SoftwareServices = () => {
  return (
    <section id="services" className="scroll-mt-28">
      <div className="mx-auto max-w-[1320px] px-3 md:px-4">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 sm:items-center md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">Services</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Built to Scale With <br />
                <span className="font-instrument italic">Your Business</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Custom software, mobile apps, and digital products — engineered end-to-end inside the
                SoftwareWOW! ecosystem, not against it.
              </p>
            </TextAppearAnimation>

            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white" fullWidth>
                  Get Free Quotes
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <ScrollingServiceCardsMarquee
        items={SOFTWARE_WOW_SERVICES}
        getItemHref={() => '/services'}
        prevAriaLabel="Previous service"
        nextAriaLabel="Next service"
      />
    </section>
  )
}

export default SoftwareServices
