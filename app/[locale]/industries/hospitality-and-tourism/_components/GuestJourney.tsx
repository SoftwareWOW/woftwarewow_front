import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const topRow = [
  {
    number: '01',
    title: 'Discover',
    tagline: 'Be Found',
    description: 'Search, social, content, campaigns, and destination visibility.',
  },
  {
    number: '02',
    title: 'Explore',
    tagline: 'Create Desire',
    description: 'Strong visuals, storytelling, reviews, offers, and engaging digital experiences.',
  },
  {
    number: '03',
    title: 'Book',
    tagline: 'Remove the Friction',
    description: 'Clear information, intuitive booking journeys, inquiries, and reservations.',
  },
]

const bottomRow = [
  {
    number: '04',
    title: 'Experience',
    tagline: 'Stay Connected',
    description: 'Communication, digital touchpoints, support, and smarter guest interactions.',
  },
  {
    number: '05',
    title: 'Return',
    tagline: 'Build Loyalty',
    description: 'Reviews, CRM, remarketing, email, and ongoing engagement.',
  },
]

type JourneyCard = {
  number: string
  title: string
  tagline: string
  description: string
}

const JourneyCard = ({ card, tall = false }: { card: JourneyCard; tall?: boolean }) => (
  <div className={`flex-1 border px-[30px] py-10 dark:border-dark ${tall ? 'min-h-[322px] py-20' : ''}`}>
    <span className="font-instrument text-5xl italic leading-none text-secondary dark:text-backgroundBody">
      {card.number}
    </span>
    <h5 className="mb-1 mt-5">{card.title}</h5>
    <p className="text-sm font-medium text-[#808080] md:text-base">{card.tagline}</p>
    <p className="mt-3 text-base leading-[1.6] text-[#808080]">{card.description}</p>
  </div>
)

/** Layout: Home-14 WhyChooseUsV3 — 3+2 bordered cards. */
const GuestJourney = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>THE GUEST JOURNEY</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">Make Every Stage Count.</h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto max-w-2xl text-[#808080]">
              The experience begins before a guest arrives and continues after they leave. We help strengthen the
              entire journey.
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
              Elevate the Guest Journey
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default GuestJourney
