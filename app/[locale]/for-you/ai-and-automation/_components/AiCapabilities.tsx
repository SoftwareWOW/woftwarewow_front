import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const capabilities = [
  {
    title: 'AI chatbots',
    description: 'Assist customers and internal teams with intelligent, context-aware responses.',
  },
  {
    title: 'Process automation',
    description: 'Remove repetitive manual steps from everyday operations and handoffs.',
  },
  {
    title: 'Predictive analytics',
    description: 'Surface patterns and forecasts that help teams act before problems grow.',
  },
  {
    title: 'Custom AI models',
    description: 'Build models tuned to your data, workflows and business rules.',
  },
  {
    title: 'Workflow integration',
    description: 'Connect AI into the tools your team already uses every day.',
  },
  {
    title: 'Intelligent reporting',
    description: 'Turn scattered data into dashboards and insights people can act on.',
  },
]

/** Layout: Home-13 WhyChooseUsV2 — centered header + stacked list + image. */
const AiCapabilities = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>AI Capabilities</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>Practical AI. Built for real work.</h2>
          </RevealWrapper>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {capabilities.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img
              src="/images/wow/Hero/devision/Intelligence.jpg"
              alt="Practical AI capabilities for real business work"
              className="h-full w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AiCapabilities
