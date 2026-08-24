import DivisionSiteLayout from '@/components/wow/divisions/DivisionSiteLayout'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'
import { ReactNode } from 'react'

export function createDivisionLayout(divisionId: DivisionId) {
  return function DivisionLayout({ children }: { children: ReactNode }) {
    return <DivisionSiteLayout divisionId={divisionId}>{children}</DivisionSiteLayout>
  }
}
