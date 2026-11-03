'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import { useEffect, useRef, useState } from 'react'

/** Layout: homepage-19/HeroV19 */
const CreateMobileExperienceHero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Create mobile experiences with SoftwareWOW.'
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
            transform-origin: 0 50px;
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
    <section
      className="relative overflow-hidden pt-[50px] md:pt-[60px] xl:pt-[70px]"
      aria-labelledby="create-mobile-experience-hero-heading"
    >
      <div
        id="hero-gradient-wrapper"
        className="absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0"
        aria-hidden="true"
      >
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          id="hero-gradient"
          className="-top-[10%] left-0 scale-50"
          role="presentation"
        />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper
            as="h1"
            id="create-mobile-experience-hero-heading"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            Your business. <br className="hidden lg:block" />
            in their <i className="font-instrument"> hands</i>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3">
            Bring your services closer to your customers with intuitive mobile experiences designed to connect, engage,
            and simplify everyday interactions.
          </RevealWrapper>
          <RevealWrapperV2 as="ul" className="reveal-me-2 mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
            <li className="block md:inline-block">
              <ButtonComponent href="/contact" variant="primary" size="sm">
                Start a Project
              </ButtonComponent>
            </li>
            <li className="block md:inline-block">
              <ButtonComponent href="/portfolio" variant="secondary" size="sm">
                Explore Our Work
              </ButtonComponent>
            </li>
          </RevealWrapperV2>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <figure className="relative mt-[78px]">
            <img src="/images/hero-img/startup-hero-1.jpg" alt="Mobile product design preview" className="max-sm:w-full rounded-radius-sm" />
          </figure>
          <figure>
            <img src="/images/hero-img/startup-hero-2.jpg" alt="Team collaborating on a mobile app" className="max-sm:w-full rounded-radius-sm" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default CreateMobileExperienceHero
