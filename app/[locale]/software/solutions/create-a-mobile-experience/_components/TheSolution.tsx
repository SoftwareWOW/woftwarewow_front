import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const benefits = [
  'Intuitive Navigation',
  'Seamless Experiences',
  'Connected Services',
  'Personalization',
  'Room to Grow',
]

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
              Mobile experiences that feel <InstrumentText>effortless.</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mt-3 text-[#808080] lg:text-xl">
              Create intuitive, connected applications that make everyday interactions easier.
            </p>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="reveal-me mt-8 flex flex-col items-stretch justify-between gap-y-8 md:mt-16 md:flex-row md:gap-x-[30px]">
          <figure className="w-full overflow-hidden rounded-radius-md border dark:border-dark md:w-1/2">
            <img
              src="/images/wow/LandingPageNaveBare/Social%202%201.svg"
              alt="Mobile app journey from welcome through manage"
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </figure>
          <figcaption className="flex flex-col justify-center rounded-radius-md border px-6 py-8 dark:border-dark md:w-1/2 md:px-8 md:py-10">
            <h3 className="mb-3 text-[25px] font-light leading-[1.2] text-[#0D0D0D] dark:text-[#F2F2F2] lg:text-3xl">
              One journey, five connected moments
            </h3>
            <p className="mb-6 text-[#808080] lg:text-xl">
              Welcome → Discover → Select → Complete → Manage—designed as a single, cohesive mobile experience.
            </p>
            <ul className="space-y-3 border-t pt-6 dark:border-dark">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center justify-between gap-4 border-b py-3 text-[#808080] last:border-b-0 dark:border-dark lg:text-xl"
                >
                  <span className="text-[#0D0D0D] dark:text-[#F2F2F2]">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 md:mt-10">
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
