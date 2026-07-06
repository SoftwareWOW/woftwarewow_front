import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type SectionLabelProps = {
  children: ReactNode
  className?: string
}

const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <span
    className={cn(
      'inline-flex w-fit rounded-full bg-[#15151533] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#0D0D0D] dark:bg-[#EDF0F533] dark:text-[#F2F2F2] sm:text-[11px] xl:text-[12px]',
      className
    )}
  >
    {children}
  </span>
)

export default SectionLabel
