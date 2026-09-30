import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { EventAgendaItem } from '@/lib/events/event-detail-content'
import { EVENT_DETAILS_INNER, EVENT_DETAILS_SECTION_X } from './event-details-layout'

type Props = {
  eyebrow?: string
  title?: string
  items?: EventAgendaItem[]
}

/** Layout: sales-acceleration ConnectedExpertise — numbered-style rows for agenda. */
const EventAgenda = ({
  eyebrow = 'AGENDA',
  title = "What's happening.",
  items = [],
}: Props) => {
  if (!items.length) return null

  return (
    <section className={EVENT_DETAILS_SECTION_X}>
      <div className={EVENT_DETAILS_INNER}>
        <RevealWrapper className="reveal-me mb-5">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>

        <div className="mb-16 md:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-3xl">{title}</h2>
          </TextAppearAnimation>
        </div>

        <div className="[&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
          {items.map((item) => (
            <div
              key={`${item.time}-${item.title}`}
              className="ease-[cubic-bezier(0.4, 0, 0.2, 1)] group flex transform flex-col items-start gap-3 pb-5 pt-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.010] hover:backdrop-blur-sm md:flex-row md:items-start md:justify-between md:gap-5 md:pb-10 md:pt-10"
            >
              <span className="w-16 shrink-0 font-instrument text-xl italic leading-[32px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:w-20">
                {item.time}
              </span>
              <h3 className="mt-2 min-w-0 flex-1 text-2xl font-normal uppercase leading-tight tracking-[-1px] text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.15]">
                {item.title}
              </h3>
              {item.description ? (
                <>
                  <p className="w-full text-sm text-[#808080] md:hidden">{item.description}</p>
                  <p className="ml-2.5 hidden self-center text-xs text-secondary/70 transition-colors duration-300 ease-in-out group-hover:text-secondary dark:text-backgroundBody/70 dark:group-hover:text-backgroundBody md:block md:w-[370px] md:text-base md:leading-[1.6] md:tracking-[0.32px]">
                    {item.description}
                  </p>
                </>
              ) : (
                <span className="hidden md:block md:w-[370px]" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventAgenda
