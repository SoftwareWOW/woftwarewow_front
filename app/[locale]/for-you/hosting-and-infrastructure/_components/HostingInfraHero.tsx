'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useEffect, useRef, useState } from 'react'

/** Layout: Home-19 HeroV19 — split headline + dual media + rotating circle stamp. */
const HostingInfraHero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Discover other project on Webflow.'
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
      className="relative overflow-hidden pt-28 md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="hosting-infra-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>Hosting &amp; Infrastructure</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="hosting-infra-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              Keep your
              <br className="hidden lg:block" />
              business online
              <br className="hidden lg:block" />
              and <InstrumentText>ready.</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Reliable hosting, domains, business email and infrastructure designed to keep your digital operations
              fast, secure and accessible.
            </p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Find Your Hosting Solution
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                Explore Infrastructure
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 sm:mt-[78px]">
            <div className="absolute -left-0 -top-[12%] z-10 mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full before:absolute before:h-[140px] before:w-[140px] before:rounded-full before:bg-white before:content-[''] dark:before:bg-secondary lg:-left-[12%]">
              <figure className="relative z-50">
                <img
                  src="/images/icons/text-circle-logo.png"
                  alt=""
                  aria-hidden
                  className="inline dark:hidden"
                />
                <img
                  src="/images/icons/text-circle-dark-logo.png"
                  alt=""
                  aria-hidden
                  className="hidden dark:inline"
                />
              </figure>
              <div
                ref={textRef}
                className="text-2 h-[120px] w-[120px] rounded-full bg-secondary text-[10px] text-backgroundBody dark:bg-backgroundBody dark:text-secondary"
                aria-hidden
              />
            </div>
            <img
              src="/images/wow/nav/cards/Host.png"
              alt="Team collaborating in a modern workspace"
              className="w-full rounded-radius-md object-cover max-sm:w-full"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/nav/cards/Website.png"
              alt="Focused workspace for digital infrastructure"
              className="h-full w-full object-cover max-sm:w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default HostingInfraHero
