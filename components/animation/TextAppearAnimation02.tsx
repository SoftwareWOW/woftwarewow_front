'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

const TextAppearAnimation02: FC<AnimatedTextProps> = ({ children, animationOptions = {} }) => {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const titleTextRef = useRef<SplitType | null>(null)
  const wordsRef = useRef<SplitType[]>([])
  const animationOptionsRef = useRef(animationOptions)

  useEffect(() => {
    animationOptionsRef.current = animationOptions
  }, [animationOptions])

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      if (!wrapper) return

      const element = getAnimationTarget(wrapper)

      titleTextRef.current?.revert()
      wordsRef.current.forEach((word) => word.revert())
      wordsRef.current = []

      const titleText = new SplitType(element, {
        types: 'lines',
        lineClass: 'line',
      })
      titleTextRef.current = titleText

      if (!titleText.lines?.length) {
        console.warn('SplitType failed to create lines')
        return
      }

      const words: SplitType[] = []

      titleText.lines.forEach((line) => {
        const lineText = new SplitType(line, {
          types: 'words',
          wordClass: 'word',
        })
        words.push(lineText)
      })

      wordsRef.current = words

      const allWords = words.flatMap((word) => word.words || [])

      if (!allWords.length) {
        console.warn('SplitType failed to create words')
        return
      }

      gsap.set(allWords, {
        y: 120,
        rotation: 21,
        opacity: 0,
      })

      const tl = gsap.to(allWords, {
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 30%',
          scrub: false,
          once: true,
          markers: false,
        },
        ...animationOptionsRef.current,
      })

      ScrollTrigger.refresh()

      return () => {
        titleTextRef.current?.revert()
        wordsRef.current.forEach((word) => word.revert())
        tl?.scrollTrigger?.kill()
        tl?.kill()
      }
    },
    { scope: wrapperRef },
  )

  return (
    <span ref={wrapperRef} className="text-appear contents" suppressHydrationWarning>
      {children}
    </span>
  )
}

export default TextAppearAnimation02
