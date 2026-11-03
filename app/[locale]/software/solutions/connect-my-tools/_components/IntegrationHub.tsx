'use client'

import { useEffect, useRef, useState } from 'react'

/** Local copy of CircleTextAnimation with integration copy and the SoftwareWOW mark. */
const IntegrationHub = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Connected Data · Automated Workflows ·'
      const chars = originalText.trim().split('')
      const angleStep = 360 / chars.length

      const formattedText = chars
        .map((char, i) => {
          const angle = i * angleStep
          return `<span
          style="
            position: absolute;
            left: 50%;
            top: 8%;
            transform: rotate(${angle}deg);
            transform-origin: 0 70px;
            display: inline-block;
          "
        >${char}</span>`
        })
        .join('')

      text.innerHTML = formattedText
      setIsInitialized(true)
    }

    requestAnimationFrame(initCircleText)
  }, [isInitialized])

  return (
    <div
      className="relative mx-auto flex h-[168px] w-[168px] items-center justify-center rounded-full bg-secondary dark:bg-white"
      aria-hidden
    >
      <img src="/images/logo-wow-white.svg" alt="" className="h-10 w-10 dark:hidden" />
      <img src="/images/logo-wow.svg" alt="" className="hidden h-10 w-10 dark:inline" />
      <div
        ref={textRef}
        className="text absolute flex h-full w-full items-center justify-center font-satoshi uppercase"
      />
    </div>
  )
}

export default IntegrationHub
