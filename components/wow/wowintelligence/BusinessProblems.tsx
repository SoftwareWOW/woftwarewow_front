'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ScrollingServiceCardsMarquee from '@/components/wow/shared/ScrollingServiceCardsMarquee'
import { INTELLIGENCE_BUSINESS_PROBLEMS } from '@/data/intelligenceBusinessProblems'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'

const BusinessProblems = () => {
  return (
    <section>
      <div className="mx-auto max-w-[1320px] px-3 md:px-4">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 sm:items-center md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="rv-badge mb-3 md:mb-4">
              <span className="rv-badge-text">Business Problems</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                Challenges We Help <br />
                <span className="font-instrument italic !bg-none !bg-clip-border !text-inherit">You Overcome</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Manual work, slow decisions, and scattered data hold teams back — WOW Intelligence
                turns these bottlenecks into automated, data-driven advantages.
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
        items={INTELLIGENCE_BUSINESS_PROBLEMS}
        prevAriaLabel="Previous business problem"
        nextAriaLabel="Next business problem"
      />
    </section>
  )
}

export default BusinessProblems
