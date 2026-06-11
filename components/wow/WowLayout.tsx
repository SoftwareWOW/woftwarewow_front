import { ReactNode } from 'react'
import WowFooter from './WowFooter'
import WowNavbar from './WowNavbar'

export default function WowLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-backgroundBody text-secondary dark:bg-dark dark:text-backgroundBody">
      <WowNavbar />
      <main>{children}</main>
      <WowFooter />
    </div>
  )
}
