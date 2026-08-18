import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const processSteps = [
  {
    step: 'Step 01',
    title: 'Attract',
    description: 'Search, content, social, advertising, and targeted campaigns.',
  },
  {
    step: 'Step 02',
    title: 'Build Trust',
    description: 'Strong positioning, professional branding, useful content, and better digital experiences.',
  },
  {
    step: 'Step 03',
    title: 'Capture',
    description: 'Landing pages, inquiries, consultations, forms, and lead-generation journeys.',
  },
  {
    step: 'Step 04',
    title: 'Nurture',
    description: 'CRM, email, automation, remarketing, and intelligent follow-up.',
  },
  {
    step: 'Step 05',
    title: 'Convert',
    description: 'Better sales processes, communication, and conversion systems.',
  },
]

/** Layout: Home-19 ProcessV10 — 5 step cards + CTA. Hover fill is hover-only. */
const LeadToCustomer = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>FROM LEAD TO CUSTOMER</SectionLabel>
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
            <RevealWrapper key={step} className="w-full grow pt-8 sm:w-[48%] xl:grow">
              <div className="group relative mx-auto grid min-h-[300px] grid-cols-1 content-between !overflow-visible border px-5 pb-[42px] pt-10 text-center transition-colors duration-300 hover:bg-primary dark:border-dark">
                <div className="absolute -top-4 left-1/2 z-10 inline-flex -translate-x-1/2 items-center justify-center rounded-radius-lg bg-secondary px-4 pb-2 pt-2.5 transition-colors duration-300 group-hover:bg-white/20 dark:bg-backgroundBody dark:group-hover:bg-white/20">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody transition-colors duration-300 group-hover:text-white dark:text-secondary dark:group-hover:text-white">
                    {step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black transition-colors duration-300 group-hover:text-white dark:text-white">
                  {title}
                </h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 transition-colors duration-300 group-hover:text-white dark:text-backgroundBody/70">
                  {description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-7 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Build Your Growth System
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default LeadToCustomer
