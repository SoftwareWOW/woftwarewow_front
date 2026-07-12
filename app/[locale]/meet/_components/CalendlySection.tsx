import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CalendlyEmbed from './CalendlyEmbed'
import CalendlyUnavailable from './CalendlyUnavailable'

type CalendlySectionProps = {
  calendlyUrl?: string
}

const CalendlySection = ({ calendlyUrl }: CalendlySectionProps) => (
  <section
    id="schedule"
    // className="relative overflow-hidden bg-background px-3 pb-20 transition-colors duration-300 dark:bg-background md:px-4 md:pb-28 lg:px-6 xl:px-8"
    aria-labelledby="calendly-heading"
  >
    {/* <div className="relative z-10 mx-auto w-full max-w-[1320px] lg:max-w-[1500px] xl:max-w-[1720px] 2xl:max-w-[1920px]"> */}
      <RevealWrapper className="mb-8 text-center md:mb-12">
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
       <RevealWrapper>
        {calendlyUrl ? <CalendlyEmbed url={calendlyUrl} /> : <CalendlyUnavailable />}
        </RevealWrapper>
    {/* </div> */}
  </section>
)

export default CalendlySection
