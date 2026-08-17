import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Attract',
    description: 'SEO, advertising, social, content, campaigns, and digital visibility.',
  },
  {
    number: '02',
    title: 'Convert',
    description: 'Better storefronts, UX, product journeys, payments, and conversion optimization.',
  },
  {
    number: '03',
    title: 'Retain',
    description: 'Email, CRM, remarketing, loyalty, personalization, and customer engagement.',
  },
  {
    number: '04',
    title: 'Scale',
    description: 'Automation, integrations, analytics, custom systems, and stronger infrastructure.',
  },
]

/** Layout: SaaS IdeaToProductPath — horizontal numbered timeline. */
const CommerceJourneyPath = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <SectionLabel>The Commerce Journey</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="text-center max-md:text-3xl md:text-6xl md:leading-[1.2] md:tracking-[-1.68px]">
              Growth Doesn&apos;t End at Checkout.
            </h2>
          </RevealWrapper>
        </div>

        <RevealWrapper className="relative after:absolute after:-z-10 after:block after:h-[1px] after:w-full after:bg-[#e5e5e5] after:content-[''] dark:after:bg-white/10 max-lg:before:absolute max-lg:before:bottom-[157px] max-lg:before:-z-10 max-lg:before:block max-lg:before:h-[1px] max-lg:before:w-full max-lg:before:bg-[#e5e5e5] max-lg:before:content-[''] dark:max-lg:before:bg-white/10 max-md:bottom-5 max-md:before:bottom-[137px] max-md:after:top-16 md:after:top-[105px]">
          <div className="grid grid-cols-1 items-center justify-between gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {steps.map((step) => (
              <RevealWrapper key={step.number} className="text-center">
                <span className="relative after:absolute after:-bottom-[37px] after:left-[50%] after:z-10 after:h-5 after:w-5 after:-translate-x-[50%] after:rounded-full after:bg-secondary after:content-[''] dark:after:bg-backgroundBody max-md:text-3xl md:text-[64px] md:leading-[1.2] md:tracking-[-1.92px]">
                  {step.number}
                </span>
                <h3 className="mb-5 mt-16 max-md:text-3xl md:text-[56px] md:leading-[1.2] md:tracking-[-1.68px]">
                  {step.title}
                </h3>
                <p className="text-base leading-[1.4] tracking-[0.32px] text-[#808080]">{step.description}</p>
              </RevealWrapper>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper as="p" className="reveal-me mx-auto mt-10 max-w-2xl text-center text-[#808080] md:mt-14">
          Strong commerce businesses continuously attract, convert, understand, and retain customers. We help strengthen
          every stage of that cycle.
        </RevealWrapper>

        <RevealWrapper className="mt-7 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Build Your Growth Engine
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default CommerceJourneyPath
