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

        <RevealWrapper className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-10 lg:gap-12">
          <figure className="relative w-full overflow-hidden rounded-radius-md md:min-h-[640px] md:w-[58%] md:shrink-0 lg:min-h-[720px] lg:w-[62%]">
            <img
              src="/images/wow/nav/cards/software%26technology.png"
              alt="Mobile app development process"
              className="h-full min-h-[320px] w-full object-cover md:absolute md:inset-0 md:min-h-0"
            />
          </figure>

          <div className="flex min-w-0 flex-1 items-center">
            <ul className="relative w-full space-y-3 border-secondary dark:border-backgroundBody md:space-y-4 md:border-l">
              {steps.map((step) => (
                <li key={step.number} className="relative max-w-max px-10 py-1">
                  <div className="absolute left-0 flex size-10 items-center justify-center rounded-full border-backgroundBody bg-secondary text-sm font-bold text-white dark:border-[#151515] md:-left-5 md:size-11 md:border-[8px] lg:-left-6">
                    <span className="bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-sm font-semibold text-transparent dark:from-white dark:to-[#BDBDBD]">
                      {step.number}
                    </span>
                  </div>
                  <div className="ml-4 md:ml-6">
                    <h3 className="text-2xl md:text-[28px] md:leading-tight">{step.title}</h3>
                    <p className="mt-1 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
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
