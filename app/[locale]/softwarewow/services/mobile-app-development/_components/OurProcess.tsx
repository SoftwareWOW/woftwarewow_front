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

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative min-h-[320px] w-full overflow-hidden rounded-radius-md md:w-[min(100%,420px)] md:shrink-0">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="Mobile app development process"
              className="h-full min-h-[320px] w-full rounded-radius-md object-cover md:absolute md:inset-0 md:min-h-0"
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.number} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block bg-gradient-to-r bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
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
