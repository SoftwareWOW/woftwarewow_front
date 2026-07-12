import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CalendlyEmbed from './CalendlyEmbed'
import CalendlyUnavailable from './CalendlyUnavailable'
import { meetSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

type CalendlySectionProps = {
  calendlyUrl?: string
}

const CalendlySection = ({ calendlyUrl }: CalendlySectionProps) => (
  <section
    id="schedule"
    className={`${meetSectionClass} bg-background transition-colors duration-300 dark:bg-background`}
    aria-labelledby="calendly-heading"
  >
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-6 text-center md:mb-8">
        <SectionLabel className="mb-5">Book Your Time</SectionLabel>
        <h2
          id="calendly-heading"
          className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
        >
          Choose a time that <span className="font-instrument italic">works for you</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
          Select an available slot below and we will send you a confirmation with your meeting
          details.
        </p>
      </RevealWrapper>

      <RevealWrapper className="w-full">
        {calendlyUrl ? <CalendlyEmbed url={calendlyUrl} /> : <CalendlyUnavailable />}
      </RevealWrapper>
    </div>
  </section>
)

export default CalendlySection
