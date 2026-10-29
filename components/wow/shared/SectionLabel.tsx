import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import { WowLabel } from './WowTypography'

type SectionLabelProps = {
  children: ReactNode
  className?: string
}

/** Section eyebrow — uses shared {@link WowLabel}. */
const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <WowLabel className={cn(className)}>{children}</WowLabel>
)

export default SectionLabel
