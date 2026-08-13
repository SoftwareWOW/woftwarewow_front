import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import WowText from '@/components/wow/shared/WowText'

/** Centered mid-page CTA — event updates signup prompt. */
const EventUpdatesCta = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(97, 92, 199, 0.28) 0%, rgba(139, 70, 90, 0.12) 45%, transparent 70%)',
        }}
      />

      <RevealWrapper className="relative z-10 mx-auto max-w-[800px] text-center">
        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.02em] text-[#0D0D0D] dark:text-[#F2F2F2]">
          <InstrumentText variant="solid">More events are on the way.</InstrumentText>
        </h2>

        <div className="relative mx-auto mt-5 inline-block max-w-xl">
          <p className="text-base leading-relaxed text-[#808080] md:text-lg">
            Join the list and be the first to hear about upcoming WOW events.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonComponentList>
            <ButtonComponent href="/contact" variant="white">
              Get Event Updates
            </ButtonComponent>
          </ButtonComponentList>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default EventUpdatesCta
