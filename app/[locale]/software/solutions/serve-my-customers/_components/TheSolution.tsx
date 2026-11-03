import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = ['Easy Access', 'Seamless Experiences', 'Faster Support', 'Self-Service', 'Connected Relationships']

/** Layout: homepage-13/AboutV12 */
const TheSolution = () => {
  return (
    <section>
      <div className="container">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-14">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>The Solution</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              Make it easier to be your <InstrumentText>customer.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080]">
              Connect your digital touchpoints into simpler, more consistent experiences.
            </p>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="reveal-me mt-8 flex flex-col items-stretch justify-between gap-y-8 md:mt-16 md:flex-row md:gap-x-[30px]">
          <figure className="w-full overflow-hidden rounded-radius-md md:w-1/2">
            <img
              src="/images/wow/LandingPageNaveBare/ux-graphic-designer-planning-application-process-d-2026-03-11-00-50-35-utc%202.svg"
              alt="Customer dashboard connected to support and app screens"
              className="h-full w-full object-cover"
            />
          </figure>
          <figcaption className="flex flex-col justify-center md:w-1/2">
            <h3 className="mb-3 text-[25px] font-light leading-[1.2] lg:text-3xl">Better experiences, connected</h3>
            <ul className="list-inside list-disc space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="text-[#808080] lg:text-xl">
                  <span className="text-[#0D0D0D] dark:text-[#F2F2F2]">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 md:mt-14">
              <ButtonComponentList className="flex" itemClassName="block w-full md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="primary">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </figcaption>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TheSolution
