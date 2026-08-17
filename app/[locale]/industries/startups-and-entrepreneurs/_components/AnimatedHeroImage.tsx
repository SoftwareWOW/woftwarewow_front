'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/** Layout: Home-06 AnimatedHeroImage — scroll-scale banner. */
const AnimatedHeroImage = () => {
  const imageRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 70%',
          end: 'top 0%',
          scrub: 1,
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <figure className="mx-auto w-[97%] overflow-hidden rounded-radius-md sm:w-full" ref={imageRef}>
      <img
        src="/images/wow/nav/cards/Startup%20laiunch%201.png"
        alt="Founders building a startup with WOW Superagency"
        className="mx-auto w-[97%] rounded-radius-md object-cover sm:w-full"
      />
    </figure>
  )
}

export default AnimatedHeroImage
