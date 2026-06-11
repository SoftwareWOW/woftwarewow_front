'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { FC, ReactNode, useEffect, useRef } from 'react'
import SplitType from 'split-type'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedTextProps {
  children: ReactNode
  animationOptions?: Partial<gsap.TweenVars>
}

const TEXT_TAGS = new Set(['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'SPAN'])

function getAnimationTarget(wrapper: HTMLElement): HTMLElement {
  const first = wrapper.firstElementChild
  if (first instanceof HTMLElement && TEXT_TAGS.has(first.tagName)) {
    return first
  }
  return wrapper
}

const TextAppearAnimation: FC<AnimatedTextProps> = ({ children, animationOptions = {} }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const titleTextRef = useRef<SplitType | null>(null)
  const wordSplitRefs = useRef<SplitType[]>([])
  const hasAnimatedRef = useRef(false)
  const animationOptionsRef = useRef(animationOptions)

  useEffect(() => {
    animationOptionsRef.current = animationOptions
  }, [animationOptions])

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return
      if (hasAnimatedRef.current) return

      const element = getAnimationTarget(wrapper)

      const setupSplitType = () => {
        titleTextRef.current?.revert()
        wordSplitRefs.current.forEach((split) => split.revert())
        wordSplitRefs.current = []

        const titleText = new SplitType(element, { types: 'lines', lineClass: 'line' })
        titleTextRef.current = titleText

        const lines = titleText.lines ?? []
        if (!lines.length) return null

        const wordsSplits = lines.map((line) => new SplitType(line, { types: 'words', wordClass: 'word' }))
        wordSplitRefs.current = wordsSplits

        const allWords = wordsSplits.flatMap((split) => split.words || [])
        if (!allWords.length) return null

        return allWords
      }

      const words = setupSplitType()
      if (!words) return

      gsap.set(words, { y: 120, rotation: 21, opacity: 0 })

      const timeline = gsap.to(words, {
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 65%',
          end: 'top 30%',
          scrub: false,
          once: true,
          markers: false,
          onEnter: () => {
            hasAnimatedRef.current = true
          },
        },
        ...animationOptionsRef.current,
      })

      ScrollTrigger.refresh()

      return () => {
        timeline.kill()
      }
    },
    { scope: wrapperRef },
  )

  useEffect(() => {
    return () => {
      titleTextRef.current?.revert()
      wordSplitRefs.current.forEach((split) => split.revert())
      hasAnimatedRef.current = false

      const wrapper = wrapperRef.current
      if (!wrapper) return

      const element = getAnimationTarget(wrapper)
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [])

  return (
    <span ref={wrapperRef} className="text-appear contents" suppressHydrationWarning>
      {children}
    </span>
  )
}

export default TextAppearAnimation
