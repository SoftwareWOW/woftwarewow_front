import { ReactNode } from 'react'

const contentWidthSelectors = `
  .wow-content-width .container:not([class*="max-w-"]),
  .wow-content-width .max-w-\\[1320px\\],
  .wow-content-width .max-w-\\[1600px\\],
  .wow-content-width .max-w-screen-xl
`

/** Content column used by the homepage ecosystem diagram (80rem / 1280px). */
const contentWidthStyle = `
  ${contentWidthSelectors} {
    max-width: 100%;
  }

  @media (min-width: 768px) {
    ${contentWidthSelectors} {
      max-width: min(80rem, calc(100% - 4rem));
    }
  }

  @media (min-width: 1024px) {
    ${contentWidthSelectors} {
      max-width: min(80rem, calc(100% - 10rem));
    }
  }

  @media (min-width: 1280px) {
    .wow-content-width .max-w-\\[1600px\\] {
      padding-left: 0;
      padding-right: 0;
    }
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