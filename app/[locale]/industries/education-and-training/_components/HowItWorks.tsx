import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const topRow = [
  {
    number: '1',
    title: 'Discover',
    description: 'Search, social, content, campaigns, and stronger digital visibility.',
  },
  {
    number: '2',
    title: 'Explore',
    description: 'Clear programs, strong messaging, proof, content, and better digital experiences.',
  },
  {
    number: '3',
    title: 'Enroll',
    description: 'Registration, forms, payments, inquiries, and streamlined enrollment journeys.',
  },
]

const bottomRow = [
  {
    number: '4',
    title: 'Learn',
    description: 'Platforms, portals, communication, resources, and digital learning experiences.',
  },
  {
    number: '5',
    title: 'Continue',
    description: 'Follow-up, new programs, community, CRM, email, and ongoing communication.',
  },
]

type Step = {
  number: string
  title: string
  description: string
}

const StepItem = ({ step }: { step: Step }) => (
  <RevealWrapper className="relative flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
    <span
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 select-none bg-gradient-to-b from-[#86858599] to-white bg-clip-text text-[clamp(5rem,22vw,11.25rem)] font-black leading-none text-transparent dark:to-[#15151599]"
    >
      {step.number}
    </span>
    <h5 className="relative z-10 mb-3 text-center sm:mb-5">{step.title}</h5>
    <p className="relative z-10 max-w-[280px] text-center text-base leading-relaxed text-[#808080]">{step.description}</p>
  </RevealWrapper>
)

/** Layout: AiWithPurpose / BuildCommunity — faded background numbers in a 3+2 grid. */
const HowItWorks = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 text-center lg:mb-20">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>THE LEARNER JOURNEY</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h2 className="mx-auto">Support Every Stage of Learning.</h2>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-10 sm:gap-y-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-10 xl:grid-cols-3">
            {topRow.map((step) => (
              <StepItem key={step.title} step={step} />
            ))}
          </div>
          <div className="mx-auto grid w-full grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 lg:max-w-[66%] lg:gap-x-10">
            {bottomRow.map((step) => (
              <StepItem key={step.title} step={step} />
            ))}
          </div>
        </div>

        <RevealWrapper className="mt-14 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Improve the Learner Journey
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HowItWorks
