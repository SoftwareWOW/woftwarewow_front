'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import useHorizontalScroll from '@/hooks/useHorizontalScroll'

const benefits = [
  { number: '01', label: 'Intuitive Navigation' },
  { number: '02', label: 'Seamless Experiences' },
  { number: '03', label: 'Connected Services' },
  { number: '04', label: 'Personalization' },
  { number: '05', label: 'Room to Grow' },
]

const journeySteps = [
  {
    step: 'Welcome',
    description: 'A clear first impression that orients users instantly.',
    image: '/images/wow/LandingPageNaveBare/Social%202%201.svg',
  },
  {
    step: 'Discover',
    description: 'Help people explore services without friction.',
    image: '/images/wow/LandingPageNaveBare/Social%203.svg',
  },
  {
    step: 'Select',
    description: 'Make choices simple on any screen size.',
    image: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg',
  },
  {
    step: 'Complete',
    description: 'Guide users through tasks with confidence.',
    image: '/images/wow/LandingPageNaveBare/Help%20and%20support.svg',
  },
  {
    step: 'Manage',
    description: 'Keep accounts, orders, and updates in one place.',
    image: '/images/wow/LandingPageNaveBare/Meet%201.svg',
  },
]

const PINNED_NAV_OFFSET_PX = 100

/** Layout: homepage-23/SolutionV3 */
const TheSolution = () => {
  const { contentRef, triggerRef } = useHorizontalScroll({
    start: `top top+=${PINNED_NAV_OFFSET_PX}`,
  })

  return (
    <section className="relative overflow-hidden bg-backgroundBody dark:bg-dark">
      <div className="container">
        <div className="text-center md:text-left">
          <RevealWrapper className="reveal-me mb-3 flex justify-center md:justify-start">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Mobile experiences that feel <InstrumentText>effortless.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-3 max-w-3xl text-[#808080] md:mx-0 lg:text-xl">
              Create intuitive, connected applications that make everyday interactions easier.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="mt-12 border-t dark:border-dark md:mt-16">
          {benefits.map((item) => (
            <RevealWrapper
              key={item.number}
              className="reveal-me flex w-full flex-col items-center justify-center border-b py-7 dark:border-dark sm:flex-row sm:items-start sm:justify-between"
            >
              <p className="mb-2 text-[47px] font-light leading-[1.1] text-[#808080] sm:min-w-[120px] lg:mb-0 lg:text-[54px]">
                {item.number}
              </p>
              <p className="text-[#808080] lg:text-xl">{item.label}</p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:justify-start">
          <ButtonComponentList className="flex" itemClassName="block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>

      <div ref={triggerRef} className="bg-backgroundBody pt-10 dark:bg-dark">
        <div
          ref={contentRef}
          className="flex w-fit flex-col gap-10 overflow-x-hidden pl-[5%] pr-[30px] max-md:px-5 md:flex-row md:flex-nowrap"
          aria-label="Mobile user journey"
        >
          {journeySteps.map((item) => (
            <div key={item.step} className="w-full shrink-0 md:w-[280px] lg:w-[320px]">
              <figure className="overflow-hidden rounded-radius-md border dark:border-dark">
                <img
                  src={item.image}
                  alt={`${item.step} screen in the mobile journey`}
                  className="aspect-[9/16] h-full w-full object-cover"
                />
              </figure>
              <h3 className="mb-2 mt-4 text-[25px] font-light leading-[1.2] lg:text-3xl">{item.step}</h3>
              <p className="max-w-[95%] text-[#808080] lg:text-xl">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheSolution
