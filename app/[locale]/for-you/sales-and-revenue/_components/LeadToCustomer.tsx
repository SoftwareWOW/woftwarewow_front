import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const processSteps = [
  {
    step: 'Step 01',
    title: 'Prospecting',
    description: 'Find & reach prospects',
  },
  {
    step: 'Step 02',
    title: 'CRM',
    description: 'Capture & organize',
  },
  {
    step: 'Step 03',
    title: 'Follow-up',
    description: 'Nurture & progress',
  },
  {
    step: 'Step 04',
    title: 'Sales',
    description: 'Convert & close',
  },
  {
    step: 'Step 05',
    title: 'Insights',
    description: 'Measure & improve',
  },
]

/** Layout: Home-19 ProcessV10 — 5 step cards + CTA. */
const LeadToCustomer = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>From Lead to Customer</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Make every stage work
              <i className="font-instrument"> together.</i>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">
              Connect prospecting, CRM, follow-up and reporting into a sales process your team can actually use.
            </p>
          </RevealWrapper>
        </div>

        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {processSteps.map(({ step, title, description }) => (
            <RevealWrapper key={step} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper as="ul" className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Accelerate Your Sales</span>
              </div>
              <div className="rv-button-bottom text-nowrap">
                <span>Accelerate Your Sales</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default LeadToCustomer
