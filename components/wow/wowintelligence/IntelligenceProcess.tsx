import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '../shared/ButtonComponent'
import SectionLabel from '../shared/SectionLabel'

const IntelligenceProcess = () => {
  return (
    <section className="px-3 md:px-4">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>How we deliver</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              From data to intelligence, <span className="font-instrument italic">seamlessly</span>
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Discovery & AI Audit</h5>
            <p className="text-center">
              We map your goals, data sources, and workflows to uncover the highest-impact AI
              opportunities for your business.
            </p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Design & Integration</h5>
            <p className="text-center">
              We architect AI assistants, automations, and analytics pipelines connected to your CRM,
              tools, and existing systems.
            </p>
          </RevealWrapper>

          <RevealWrapper className="relative flex flex-col items-center justify-center pt-[100px]">
            <div className="service-item-number"></div>
            <h5 className="mb-5">Deploy, Learn & Scale</h5>
            <p className="text-center">
              We launch your intelligence layer, monitor performance, and continuously refine models
              and workflows as your business grows.
            </p>
          </RevealWrapper>
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
