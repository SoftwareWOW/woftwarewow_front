'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
  body?: string
}

const DEFAULT_BODY =
  'We combine strategy, creativity, technology, and AI to build digital experiences that look impressive, work efficiently, and help businesses grow with confidence.'

const DEFAULT_BODY_WITH_SPACING =
  'WOW Superagency is a connected ecosystem of technology, design, marketing, AI, websites, hosting, and growth divisions built to help businesses modernize, scale, and stand out in a competitive digital world.'

const HeroAbout = ({ spacingTop, body }: PropsTypes) => {
  const { revealRef } = useReveal()
  const text = body ?? (spacingTop ? DEFAULT_BODY_WITH_SPACING : DEFAULT_BODY)

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        {text}
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>{text}</h3>
    </RevealWrapper>
  )
}

export default HeroAbout
