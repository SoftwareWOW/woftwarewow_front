import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const topRow = [
  {
    number: '01',
    title: 'Build Awareness',
    tagline: 'Be Seen',
    description: 'Reach more people and make your mission easier to discover.',
  },
  {
    number: '02',
    title: 'Earn Trust',
    tagline: 'Create Confidence',
    description: 'Create a credible presence that clearly communicates who you are and why your work matters.',
  },
  {
    number: '03',
    title: 'Grow Your Community',
    tagline: 'Stay Connected',
    description: 'Build stronger relationships with supporters, members, volunteers, and partners.',
  },
]

const bottomRow = [
  {
    number: '04',
    title: 'Drive Action',
    tagline: 'Take the Next Step',
    description: 'Create clearer paths to donate, register, participate, volunteer, or get involved.',
  },
  {
    number: '05',
    title: 'Simplify Operations',
    tagline: 'Work Smarter',
    description: 'Reduce repetitive work across communication, data, administration, and internal processes.',
  },
]

type JourneyCard = {
  number: string
  title: string
  tagline: string
  description: string
}

const cardClassName =
  'group flex-1 border px-[30px] py-10 transition-colors duration-300 ease-in-out hover:bg-backgroundBody dark:border-dark dark:hover:bg-secondary'

const JourneyCard = ({ card, tall = false }: { card: JourneyCard; tall?: boolean }) => (
  <div className={`${cardClassName} ${tall ? 'min-h-[322px] py-20' : ''}`}>
    <span className="font-instrument text-5xl italic leading-none text-secondary transition-colors duration-300 group-hover:text-secondary dark:text-backgroundBody dark:group-hover:text-backgroundBody">
      {card.number}
    </span>
    <h5 className="mb-1 mt-5 transition-colors duration-300 group-hover:text-secondary dark:group-hover:text-backgroundBody">
      {card.title}
    </h5>
    <p className="text-sm font-medium text-[#808080] transition-colors duration-300 group-hover:text-secondary/80 dark:group-hover:text-backgroundBody/80 md:text-base">
      {card.tagline}
    </p>
    <p className="mt-3 text-base leading-[1.6] text-[#808080] transition-colors duration-300 group-hover:text-secondary/70 dark:group-hover:text-backgroundBody/70">
      {card.description}
    </p>
  </div>
)

/** Layout: Home-14 WhyChooseUsV3 — 3+2 bordered cards with hover invert. */
const MissionJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>BUILT AROUND YOUR MISSION</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">Help More People See, Support, and Join Your Work.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              Strengthen the touchpoints that connect your organization with communities, supporters, partners, and
              the people you serve.
            </p>
          </TextAppearAnimation>
        </div>

        <article>
          <RevealWrapper className="mb-[30px] flex flex-col gap-[30px] max-lg:flex-wrap md:flex-row">
            {topRow.map((card) => (
              <JourneyCard key={card.number} card={card} />
            ))}
          </RevealWrapper>
          <RevealWrapper className="flex flex-col gap-[30px] md:flex-row md:justify-center">
            {bottomRow.map((card) => (
              <div key={card.number} className="md:max-w-[calc(50%-15px)] md:flex-1 lg:max-w-[calc(33.333%-20px)]">
                <JourneyCard card={card} tall />
              </div>
            ))}
          </RevealWrapper>
        </article>

        <RevealWrapper className="mt-8 flex justify-center md:mt-16">
          <ButtonComponentList className="flex" itemClassName="block">
            <ButtonComponent href="/contact" variant="white">
              Strengthen Your Impact
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default MissionJourney
