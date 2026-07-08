'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        WOW Superagency is a connected ecosystem of technology, design, marketing, AI, websites, hosting, and growth
        divisions built to help businesses modernize, scale, and stand out in a competitive digital world.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
         We combine strategy, creativity, technology, and AI to build digital experiences that look impressive, work
        efficiently, and help businesses grow with confidence.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
