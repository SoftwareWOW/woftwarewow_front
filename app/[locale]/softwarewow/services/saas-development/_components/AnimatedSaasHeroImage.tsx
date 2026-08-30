'use client'

import saasHeroVisual from '@/public/images/wow/Hero/devision/Mockup 2 Dark.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/** Layout: homepage-06/AnimatedHeroImage — scroll-scale product visual. */
const AnimatedSaasHeroImage = () => {
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
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill()
      })
    }
  }, [])

  return (
    <figure className="mx-auto w-[97%] overflow-hidden sm:w-full" ref={imageRef}>
      <Image
        src={saasHeroVisual}
        alt="SaaS product dashboard interface"
        className="mx-auto w-[97%] sm:w-full"
        priority
      />
    </figure>
  )
}

export default AnimatedSaasHeroImage
