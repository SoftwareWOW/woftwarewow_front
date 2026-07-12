import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import { Globe } from 'lucide-react'

const CalendlyUnavailable = () => (
  <div
    role="status"
    className="rounded-radius-md border border-dashed border-black/20 bg-backgroundBody px-6 py-16 text-center dark:border-white/20 dark:bg-dark-200 lg:py-20"
  >
    <Globe className="mx-auto mb-4 size-8 text-primary" aria-hidden />
    <h3 className="mb-3 text-xl font-medium text-secondary dark:text-[#F2F2F2]">
      Scheduling is temporarily unavailable
    </h3>
    <p className="mx-auto max-w-xl text-base leading-relaxed text-[#808080]">
      Our booking calendar is not configured yet. Please contact us directly and our team will help
      you schedule a meeting.
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

export default CalendlyUnavailable
