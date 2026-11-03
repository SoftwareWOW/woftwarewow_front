import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = ['Easy Access', 'Seamless Experiences', 'Faster Support', 'Self-Service', 'Connected Relationships']

/** Layout: homepage-08/AboutV6 */
const TheSolution = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Make it easier to be your <InstrumentText>customer.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="mb-16 mt-8 flex flex-col items-center justify-between gap-y-8 md:mb-20 md:mt-16 md:flex-row md:gap-x-20">
          <RevealWrapper as="figure" className="w-full overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/LandingPageNaveBare/Help and support.svg"
              alt="Customer dashboard connected to support and app screens"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
          <figcaption className="md:w-1/2">
            <RevealWrapper as="p" className="max-w-xl text-[#808080] lg:text-xl">
              Connect your digital touchpoints into simpler, more consistent experiences.
            </RevealWrapper>
            <RevealWrapper className="mt-7 md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block w-full md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </figcaption>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {benefits.map((benefit) => (
            <RevealWrapper
              key={benefit}
              className="flex min-h-[140px] w-full flex-col items-center justify-center rounded-radius-md border px-9 py-7 text-center dark:border-dark sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] 2xl:w-[calc(20%-16px)]"
            >
              <h3 className="text-[25px] font-light leading-[1.2] lg:text-3xl">{benefit}</h3>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TheSolution
