import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Define users, goals, features, and product requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create mobile journeys, interfaces, and product flows.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop, integrate, test, and refine the application.',
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description: 'Release, monitor, support, and evolve the app.',
  },
]

/** Layout: for-you/social-and-community/SocialProcess (Home-07 ProcessV4) */
const OurProcess = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Our Process</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto max-w-[770px]">From concept to app store.</h2>
          </RevealWrapper>
        </div>

        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure className="overflow-hidden rounded-radius-md md:shrink-0">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="Mobile app development process"
              className="h-auto w-full object-cover md:max-w-[480px]"
            />
          </figure>

          <div>
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              {steps.map((step) => (
                <li key={step.number} className="max-w-max px-10">
                  <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                    <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-transparent dark:from-white dark:to-[#BDBDBD]">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-5 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        <RevealWrapper className="mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurProcess
