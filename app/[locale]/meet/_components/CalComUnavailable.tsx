import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import { CalendarX } from 'lucide-react'

const CalComUnavailable = () => (
  <div
    role="status"
    className="flex min-h-[420px] flex-col items-center justify-center rounded-radius-md border border-dashed border-[#1515151A] bg-backgroundBody/70 px-6 py-16 text-center transition-colors duration-300 dark:border-[#EDF0F51A] dark:bg-dark/50 lg:min-h-[640px] lg:py-20">
    <span className="mb-4 inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
      <CalendarX className="size-6" aria-hidden />
    </span>
    <h3 className="mb-3 text-xl font-medium text-secondary dark:text-[#F2F2F2]">
      Scheduling is temporarily unavailable
    </h3>
    <p className="mx-auto max-w-md text-base leading-relaxed text-[#808080]">
      Our booking calendar is not configured yet. Contact us directly and our team will help you schedule a meeting.
    </p>
    <div className="mt-8">
      <ButtonComponentList>
        <ButtonComponent href="/contact" variant="primary">
          Contact Us
        </ButtonComponent>
      </ButtonComponentList>
    </div>
  </div>
)

export default CalComUnavailable
