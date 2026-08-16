import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Assess',
    description: 'Review your pipeline, process, tools, and conversion gaps.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Create the funnels, CRM workflows, and sales systems you need.',
  },
  {
    number: '03',
    title: 'Activate',
    description: 'Launch lead generation, outreach, and automated follow-up.',
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Track performance and improve what drives revenue.',
  },
]

/** Layout: Home-07 ProcessV4 — image height matches steps; centered CTA. */
const AccelerationJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>Your Acceleration Journey</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              From pipeline to <InstrumentText>revenue.</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <figure className="relative w-full overflow-hidden rounded-radius-md md:w-[min(100%,420px)] md:shrink-0">
            <img
              src="/images/wow/nav/cards/Sales Acceleration 1.png"
              alt="Sales acceleration journey from pipeline to revenue"
              className="h-full min-h-[280px] w-full rounded-radius-md object-cover md:absolute md:inset-0 md:min-h-0"
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
              Accelerate Your Sales
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default AccelerationJourney
