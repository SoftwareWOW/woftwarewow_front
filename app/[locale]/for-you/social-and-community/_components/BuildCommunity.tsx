import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const steps = [
  {
    title: 'Listen',
    description: 'Understand what your audience cares about.',
  },
  {
    title: 'Engage',
    description: 'Create reasons for people to interact.',
  },
  {
    title: 'Respond',
    description: 'Keep conversations active and human.',
  },
  {
    title: 'Strengthen',
    description: 'Turn repeated interaction into lasting connection.',
  },
]

/** Layout: SoftwareWOW WoWProces — numbered community-building steps. */
const BuildCommunity = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>Build Community</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2>
              Followers are numbers.
              <br />
              Relationships are an asset.
            </h2>
          </RevealWrapper>
        </div>

        <div className="service-item-wrapper flex justify-center gap-[30px] max-md:flex-wrap">
          {steps.map((step) => (
            <RevealWrapper
              key={step.title}
              className="relative flex flex-1 flex-col items-center justify-center pt-[100px]"
            >
              <div className="service-item-number" />
              <h5 className="mb-5 text-center">{step.title}</h5>
              <p className="text-center text-base leading-relaxed text-[#808080]">{step.description}</p>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="primary">
              Start Building Community
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BuildCommunity
