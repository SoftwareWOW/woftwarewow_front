import LayoutOne from '@/components/shared/LayoutOne'
import { FC, ReactNode } from 'react'

/** Matches homepage section stack spacing (`app/[locale]/page.tsx`). */
export const legalPageSectionStackClass =
  'flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40 2xl:gap-[200px]'

type LegalPageLayoutProps = {
  children: ReactNode
}

const LegalPageLayout: FC<LegalPageLayoutProps> = ({ children }) => (
  <LayoutOne>
    <div className={legalPageSectionStackClass}>{children}</div>
  </LayoutOne>
)

export default LegalPageLayout
