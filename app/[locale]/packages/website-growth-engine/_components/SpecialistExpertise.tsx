import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import Link from 'next/link'

const teams = [
  { name: 'Websites', description: 'Website strategy & development' },
  { name: 'Design', description: 'UX/UI & creative' },
  { name: 'Marketing', description: 'SEO & acquisition' },
  { name: 'Host', description: 'Hosting & infrastructure' },
  { name: 'Accelerate', description: 'Conversion & funnels' },
  { name: 'Intelligence', description: 'AI & personalization' },
]

const ArrowButton = () => (
  <div className="flex items-center justify-center overflow-hidden rounded-radius-sm border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
    <span className="translate-x-4 transition-transform duration-[400ms] group-hover:translate-x-20">
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
        <path
          d="M5.11377 16H27.1138"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1138 7L27.1138 16L18.1138 25"
          className="stroke-secondary dark:stroke-backgroundBody"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
    <span className="-translate-x-24 transition-transform duration-[400ms] group-hover:-translate-x-[18px]">
      <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none" aria-hidden>
        <path
          d="M5.11377 16H27.1138"
          className="stroke-backgroundBody dark:stroke-secondary"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.1138 7L27.1138 16L18.1138 25"
          className="stroke-backgroundBody dark:stroke-secondary"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
)

/** Home-16 — ServicesV14: 6 bordered cards with arrow hover + WowText. */
const SpecialistExpertise = () => {
  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>One Website. Specialist Expertise.</SectionLabel>
        </RevealWrapper>
        <TextAppearAnimation02>
          <h2 className="text-appear mb-3">
            One website. <InstrumentText>An entire growth team behind it.</InstrumentText>
          </h2>
        </TextAppearAnimation02>
        <TextAppearAnimation>
          <p className="text-appear mx-auto max-w-[770px] text-[#808080]">
            Bring strategy, design, development, marketing, hosting, and optimization together through one connected
            team.
          </p>
        </TextAppearAnimation>
      </div>

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {teams.map((team) => (
          <RevealWrapper
            key={team.name}
            className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <Link href="/contact" className="block">
              <h5 className="mb-2 lg:mb-3">
                <WowText className="text-2xl lg:text-3xl">WOW</WowText> {team.name}
              </h5>
              <p className="mb-20 text-base leading-relaxed text-[#808080] lg:mb-[106px]">{team.description}</p>
              <ArrowButton />
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default SpecialistExpertise
