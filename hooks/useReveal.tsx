'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

const useReveal = () => {
  const revealContent = useRef<HTMLElement[]>([])

  useGSAP(() => {
    if (revealContent.current.length > 0) {
      const chars = revealContent.current
      const createdTriggers: ScrollTrigger[] = []

      chars?.forEach((char) => {
        const text = new SplitType(char, { types: 'words' })
        const tween = gsap.from(text.words, {
          scrollTrigger: {
            trigger: char,
            start: 'top 34%',
            end: 'top -10%',
            scrub: true,
            pin: '.about',
            pinSpacing: true,
          },
          opacity: 0.2,
          stagger: 0.1,
          duration: 1,
          ease: 'power2.out',
        })

        if (tween.scrollTrigger) {
          createdTriggers.push(tween.scrollTrigger)
        }
      })

      return () => {
        createdTriggers.forEach((trigger) => trigger.kill())
      }
    }
  }, [revealContent.current])

  const revealRef = (el: HTMLElement | null) => {
    if (el && !revealContent.current.includes(el)) {
      revealContent.current.push(el)
    }
  }
  return {
    revealRef,
  }
}

export default useReveal
