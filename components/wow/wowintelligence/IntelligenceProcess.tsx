import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'
import SectionLabel from '../shared/SectionLabel'

const steps = [
  {
    title: 'Discovery & Strategy',
    description: 'We clarify your business goals and define where AI can create measurable value.',
  },
  {
    title: 'Data Audit',
    description: 'We review your CRM records, documents, channels, and reports to understand what data is available.',
  },
  {
    title: 'Workflow Mapping',
    description: 'We map how inquiries, leads, support requests, and internal tasks move through your team today.',
  },
  {
    title: 'AI Architecture',
    description: 'We design the assistants, automations, and analytics your business needs.',
  },
  {
    title: 'Integration',
    description: 'We connect the intelligence layer to your CRM, email, chat, and existing business tools.',
  },
  {
    title: 'Deploy & Optimize',
    description: 'We launch, monitor results, and refine models and workflows as usage grows.',
  },
] as const

const IntelligenceProcess = () => {
  return (
    <section className="w-full overflow-x-clip px-3 md:px-4">
      <div className="mx-auto w-full min-w-0 max-w-[1320px]">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>How we deliver</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              From data to intelligence,{' '}
              <span className="font-instrument italic !bg-none !bg-clip-border !text-inherit">seamlessly</span>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex flex-wrap justify-center gap-x-[30px] gap-y-12">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex w-full max-w-[340px] flex-col items-center justify-center pt-[100px] sm:w-[calc(50%-15px)] lg:w-[calc(33.333%-20px)]"
            >
              <div className="service-item-number"></div>
              <h5 className="mb-5">{step.title}</h5>
              <p className="text-center">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList itemClassName="block w-full text-center md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary" fullWidth>
              Start Your AI Project
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default IntelligenceProcess
