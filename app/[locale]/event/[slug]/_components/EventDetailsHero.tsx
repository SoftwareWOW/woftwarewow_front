import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { EventDetail } from '@/lib/events/event-detail-content'
import Image from 'next/image'
import EventCountdown from './EventCountdown'

type Props = {
  event: EventDetail
}

const EventDetailsHero = ({ event }: Props) => {
  const heroImage = event.thumbnail

  const meta = [
    { label: 'Date', value: event.date ?? '—' },
    { label: 'Time', value: event.time ?? '—' },
    { label: 'Location', value: event.location ?? '—' },
    { label: 'Duration', value: event.duration ?? '—' },
  ]

  return (
    <section className="bg-background px-4 pt-28 transition-colors duration-300 dark:bg-dark sm:px-8 sm:pt-32 md:px-16 lg:px-[200px] lg:pt-36">
      <div className="mx-auto w-full max-w-[1320px]">
        {heroImage ? (
          <RevealWrapper>
            <figure
              className="
                relative
                overflow-hidden
                rounded-radius-md
                bg-[#0A0A0A]
                dark:bg-[#050505]

                [--event-cutout:#ededed]
                dark:[--event-cutout:#0D0D0D]
              "
            >
              <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[1320/523]">
                <Image
                  src={heroImage}
                  alt={event.alt ?? event.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1320px"
                  className="object-cover"
                />
              </div>

              {event.startsAt ? (
                <div className="pointer-events-none absolute bottom-0 right-0 z-10 w-fit">
                  <div
                    className="
                      relative
                      w-fit
                      rounded-tl-[10px]
                      bg-backgroundBody
                      pl-2
                      pt-2
                      transition-colors
                      duration-300
                      dark:bg-dark

                      sm:pl-3
                      sm:pt-3
                    "
                  >
                    {/* LEFT INVERTED CORNER */}
                    <span
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-[-12px]
                        z-[3]
                        h-[12px]
                        w-[12px]
                      "
                      style={{
                        background:
                          'radial-gradient(circle at 0% 0%, transparent 12px, var(--event-cutout) 12.5px)',
                      }}
                    />

                    {/* TOP INVERTED CORNER */}
                    <span
                      aria-hidden
                      className="
                        pointer-events-none
                        absolute
                        right-0
                        top-[-12px]
                        z-[3]
                        h-[12px]
                        w-[12px]
                      "
                      style={{
                        background:
                          'radial-gradient(circle at 0% 0%, transparent 12px, var(--event-cutout) 12.5px)',
                      }}
                    />

                    {/* COUNTDOWN BOX */}
                    <div
                      className="
                        flex
                        min-h-[58px]
                        min-w-[190px]
                        items-center
                        justify-center
                        whitespace-nowrap
                        rounded-radius-sm
                        border
                        border-secondary/10
                        bg-[#121212]
                        px-5
                        py-4
                        text-white

                        sm:min-h-[72px]
                        sm:min-w-[230px]
                        sm:px-7

                        md:min-h-[78px]
                        md:min-w-[250px]
                      "
                    >
                      <EventCountdown targetIso={event.startsAt} />
                    </div>
                  </div>
                </div>
              ) : null}
            </figure>
          </RevealWrapper>
        ) : null}

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          <RevealWrapper>
            <div>
              {event.format ? (
                <SectionLabel className="mb-4">
                  {event.format}
                </SectionLabel>
              ) : null}

              <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody">
                {event.title}
              </h1>

              {event.description ? (
                <p className="mt-5 max-w-xl text-base leading-relaxed text-[#808080] dark:text-dark-100 sm:text-lg">
                  {event.description}
                </p>
              ) : null}
            </div>
          </RevealWrapper>

          <RevealWrapper>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="rounded-radius-sm border border-secondary/10 bg-backgroundBody px-4 py-4 dark:border-dark dark:bg-dark sm:px-5 sm:py-5"
                >
                  <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#808080]">
                    {item.label}
                  </p>

                  <p className="text-sm font-medium leading-snug text-secondary dark:text-backgroundBody sm:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <ButtonComponent
                href={event.registerHref ?? '/contact'}
                variant="primary"
                fullWidth
              >
                {event.registerLabel ?? 'REGISTER FOR THIS EVENT'}
              </ButtonComponent>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default EventDetailsHero


// import RevealWrapper from '@/components/animation/RevealWrapper'
// import ButtonComponent from '@/components/wow/shared/ButtonComponent'
// import SectionLabel from '@/components/wow/shared/SectionLabel'
// import type { EventDetail } from '@/lib/events/event-detail-content'
// import Image from 'next/image'
// import EventCountdown from './EventCountdown'

// type Props = {
//   event: EventDetail
// }

// const EventDetailsHero = ({ event }: Props) => {
//   const heroImage = event.thumbnail

//   const meta = [
//     { label: 'Date', value: event.date ?? '—' },
//     { label: 'Time', value: event.time ?? '—' },
//     { label: 'Location', value: event.location ?? '—' },
//     { label: 'Duration', value: event.duration ?? '—' },
//   ]

//   return (
//     <section className="bg-background px-4 pt-28 transition-colors duration-300 dark:bg-dark sm:px-8 sm:pt-32 md:px-16 lg:px-[200px] lg:pt-36">
//       <div className="mx-auto w-full max-w-[1320px]">
//         {heroImage ? (
//           <RevealWrapper>
//             <figure className="relative overflow-hidden rounded-radius-md bg-[#0A0A0A] dark:bg-[#050505]">
//               <div className="relative aspect-[16/9] w-full sm:aspect-[2/1] lg:aspect-[1320/523]">
//                 <Image
//                   src={heroImage}
//                   alt={event.alt ?? event.title}
//                   fill
//                   priority
//                   sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1320px"
//                   className="object-cover"
//                 />
//               </div>
//               {event.startsAt ? (
//                 <div className="pointer-events-none absolute bottom-4 right-4 z-10 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6">
//                   <EventCountdown targetIso={event.startsAt} />
//                 </div>
//               ) : null}
//             </figure>
//           </RevealWrapper>
//         ) : null}

//         <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-16">
//           <RevealWrapper>
//             <div>
//               {event.format ? (
//                 <SectionLabel className="mb-4">{event.format}</SectionLabel>
//               ) : null}
//               <h1 className="max-w-3xl text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.15] tracking-[-0.02em] text-secondary dark:text-backgroundBody">
//                 {event.title}
//               </h1>
//               {event.description ? (
//                 <p className="mt-5 max-w-xl text-base leading-relaxed text-[#808080] dark:text-dark-100 sm:text-lg">
//                   {event.description}
//                 </p>
//               ) : null}
//             </div>
//           </RevealWrapper>

//           <RevealWrapper>
//             <div className="grid grid-cols-2 gap-3 sm:gap-4">
//               {meta.map((item) => (
//                 <div
//                   key={item.label}
//                   className="rounded-radius-sm border border-secondary/10 bg-backgroundBody px-4 py-4 dark:border-dark dark:bg-dark sm:px-5 sm:py-5"
//                 >
//                   <p className="mb-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#808080]">
//                     {item.label}
//                   </p>
//                   <p className="text-sm font-medium leading-snug text-secondary dark:text-backgroundBody sm:text-base">
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-6">
//               <ButtonComponent href={event.registerHref ?? '/contact'} variant="primary" fullWidth>
//                 {event.registerLabel ?? 'REGISTER FOR THIS EVENT'}
//               </ButtonComponent>
//             </div>
//           </RevealWrapper>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EventDetailsHero
