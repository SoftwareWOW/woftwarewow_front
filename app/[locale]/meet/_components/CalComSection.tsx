import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import MeetBookingWizard from './MeetBookingWizard'
import CalComUnavailable from './CalComUnavailable'
import { meetCalComSectionClass, meetSectionInnerClass } from './meetSectionSpacing'

type CalComSectionProps = {
  calLink?: string
}

const CalComSection = ({ calLink }: CalComSectionProps) => (
  <section id="schedule" className={meetCalComSectionClass} aria-labelledby="cal-heading">
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-8 text-center md:mb-12">
        <SectionLabel className="mb-5">Book Your Time</SectionLabel>
        <h2 id="cal-heading" className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
          Choose a time that <span className="font-instrument italic">works for you</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#808080] md:text-lg">
          Select a date, pick a time slot, and confirm your details to schedule your free consultation.
        </p>
      </RevealWrapper>

      <RevealWrapper className="w-full">
        {calLink ? <MeetBookingWizard calLink={calLink} /> : <CalComUnavailable />}
      </RevealWrapper>
    </div>
  </section>
)

export default CalComSection
