import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import CalComUnavailable from '@/app/[locale]/meet/_components/CalComUnavailable'
import { meetCalComSectionClass, meetSectionInnerClass } from '@/app/[locale]/meet/_components/meetSectionSpacing'
import ThinkTankBookingWizard from './ThinkTankBookingWizard'

type ThinkTankBookingProps = {
  calLink?: string
}

const ThinkTankBooking = ({ calLink }: ThinkTankBookingProps) => (
  <section id="schedule" className={meetCalComSectionClass} aria-labelledby="thinktank-cal-heading">
    <div className={meetSectionInnerClass}>
      <RevealWrapper className="mb-8 text-center md:mb-12">
        <SectionLabel className="mb-5">Book Your Session</SectionLabel>
        <h2 id="thinktank-cal-heading" className="text-secondary transition-colors duration-300 dark:text-backgroundBody">
          Choose a time that works for you
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Select a date, choose a time, and tell us which project or initiative you want to discuss.
        </p>
      </RevealWrapper>

      <RevealWrapper className="w-full">
        {calLink ? <ThinkTankBookingWizard calLink={calLink} /> : <CalComUnavailable />}
      </RevealWrapper>
    </div>
  </section>
)

export default ThinkTankBooking
