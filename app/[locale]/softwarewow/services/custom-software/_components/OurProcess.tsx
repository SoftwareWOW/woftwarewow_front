import gradientBg from '@/public/images/gradient-bg.png'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

const steps = [
  {
    id: 1,
    title: 'Discover',
    description: 'Understand your goals, workflows, users, and requirements.',
  },
  {
    id: 2,
    title: 'Design',
    description: 'Plan the solution, architecture, and user experience.',
  },
  {
    id: 3,
    title: 'Build',
    description: 'Develop, integrate, test, and refine the software.',
  },
  {
    id: 4,
    title: 'Evolve',
    description: 'Launch, support, and improve the system as your needs grow.',
  },
]

/** Layout: homepage-02/ProcessV2 — 4 hover step cards. */
const OurProcess = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="mb-3">
              <SectionLabel>Our Process</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear">
                From challenge to
                <br className="hidden md:block" />
                working <InstrumentText>software.</InstrumentText>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                Discover → Design → Build → Evolve
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto">
                <ButtonComponent href="/contact" variant="white">
                  Start a Project
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="grid grid-cols-12 items-center justify-center gap-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group col-span-full min-h-[400px] overflow-hidden rounded-radius-sm bg-backgroundBody px-7 pb-4 pt-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary sm:col-span-6 md:px-10 md:pb-16 md:pt-10 lg:col-span-4 xl:col-span-3"
            >
              <h4 className="pb-3 leading-[1.2] transition-colors duration-300 group-hover:text-white dark:group-hover:text-white md:mb-4">
                {step.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 group-hover:text-white dark:text-dark-100 dark:group-hover:text-white">
                {step.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurProcess
