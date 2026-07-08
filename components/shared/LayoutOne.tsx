import { ReactNode } from 'react'

const LayoutOne = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return <>{children}</>
}

export default LayoutOne
