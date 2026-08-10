import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'

const teams = [
  {
    name: 'Marketing',
    description: 'SEO, content, paid media and campaigns that create demand.',
  },
  {
    name: 'Social',
    description: 'Organic and paid social that builds community and pipeline.',
  },
  {
    name: 'Accelerate',
    description: 'Funnels, CRM, automation and sales systems that convert.',
  },
  {
    name: 'Websites',
    description: 'High-performance sites and landing experiences that convert traffic.',
  },
  {
    name: 'Design',
    description: 'Brand and creative that make growth assets unmistakable.',
  },
  {
    name: 'Intelligence',
    description: 'Analytics and AI that clarify what to do next.',
  },
]

/** Layout: Home-16 ServicesV14 — 6 division cards (specialist teams). */
const SpecialistTeams = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Powered by Specialist Teams</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            The right <WowText className="text-[clamp(2rem,5vw,3.5rem)]">WOW</WowText> divisions —
            <InstrumentText> working together</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">
            Marketing, Social, Accelerate, Websites, Design and Intelligence collaborate so growth isn&apos;t stuck in
            one channel or one team.
          </p>
        </RevealWrapper>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {teams.map((team) => (
          <RevealWrapper
            key={team.name}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-2 lg:mb-3">
              <WowText className="text-2xl lg:text-3xl">WOW</WowText>{' '}
              <span>{team.name}</span>
            </h5>
            <p className="text-base leading-relaxed text-[#808080]">{team.description}</p>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
        <ButtonComponentList>
          <ButtonComponent href="/services" variant="secondary">
            Explore the WOW Ecosystem
          </ButtonComponent>
        </ButtonComponentList>
      </RevealWrapper>
    </section>
  )
}

export default SpecialistTeams
