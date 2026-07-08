import { ReactNode } from 'react'

const LayoutTwo = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <div className="relative z-10 bg-backgroundBody dark:bg-secondary">
      {children}
    </div>
  )
}

export default LayoutTwo
