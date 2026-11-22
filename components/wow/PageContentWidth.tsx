import { ReactNode } from 'react'

/** Content column used by the homepage ecosystem diagram (80rem / 1280px). */
const contentWidthStyle = `
  .wow-content-width .container:not([class*="max-w-"]),
  .wow-content-width .max-w-\\[1320px\\] {
    max-width: 80rem;
  }
`

export default function PageContentWidth({ children }: { children: ReactNode }) {
  return (
    <div className="wow-content-width w-full max-w-full">
      <style>{contentWidthStyle}</style>
      {children}
    </div>
  )
}
