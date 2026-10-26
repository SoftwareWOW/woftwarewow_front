import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { HUB_PROGRAMS } from './hub-content'

const DocIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42} height={50} viewBox="0 0 42 50" fill="none" aria-hidden>
    <path
      d="M8.33333 39.5833H33.3333V27.0833H8.33333V39.5833ZM10.4167 29.1667H31.25V37.5H10.4167V29.1667ZM18.75 20.8333H8.33333V18.75H18.75V20.8333ZM18.75 12.5H8.33333V10.4167H18.75V12.5ZM26.4729 0H5.20833C2.3375 0 0 2.3375 0 5.20833V50H41.6667V15.1937L26.4729 0ZM27.0833 3.55625L38.1104 14.5833H27.0833V3.55625ZM2.08333 47.9167V5.20833C2.08333 3.48542 3.48542 2.08333 5.20833 2.08333H25V16.6667H39.5833V47.9167H2.08333Z"
      className="fill-secondary dark:fill-backgroundBody"
    />
  </svg>
)

type ProgramItem = (typeof HUB_PROGRAMS.items)[number]

/** 30px at 1400px viewport; scales down on smaller screens, capped at 30px above 1400px. */
const programCardPadding = 'p-[clamp(1rem,2.143vw,1.875rem)]'

const ProgramFlipCard = ({ item, className }: { item: ProgramItem; className?: string }) => (
  <RevealWrapper
    className={`group relative w-full overflow-hidden border-b border-[#e5e5e5] dark:border-dark ${className ?? ''}`}
  >
    <div className="relative">
      <div
        className={`relative flex flex-col ${programCardPadding} transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0`}
      >
        <span>
          <DocIcon />
        </span>
        <h5 className="mb-3 mt-6 text-3xl leading-[1.2] -tracking-[1.08px] md:mt-8 md:text-4xl">{item.title}</h5>
        <p className="text-[#808080] dark:text-backgroundBody/70">{item.description}</p>
      </div>
      <div
        className={`absolute inset-0 z-10 flex translate-y-full flex-col bg-secondary ${programCardPadding} transition-all duration-700 group-hover:translate-y-0 dark:bg-backgroundBody`}
      >
        <span className="inline-flex [&_path]:fill-backgroundBody dark:[&_path]:fill-secondary">
          <DocIcon />
        </span>
        <h5 className="mb-3 mt-6 text-3xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary md:mt-8 md:text-4xl">
          {item.title}
        </h5>
        <p className="text-backgroundBody dark:text-secondary">{item.description}</p>
      </div>
    </div>
  </RevealWrapper>
)

export default function HubProgramsSection() {
  const content = HUB_PROGRAMS

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {content.title} <InstrumentText>{content.accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me">
            <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 border-t border-[#e5e5e5] dark:border-dark md:grid-cols-2">
          {content.items.map((item, index) => (
            <ProgramFlipCard
              key={item.title}
              item={item}
              className={`${index % 2 === 0 ? 'md:border-r md:border-[#e5e5e5] dark:md:border-dark' : ''} ${index < 2 ? 'md:border-b md:border-[#e5e5e5] dark:md:border-dark' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
