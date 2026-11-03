'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'

const phones = [
  {
    src: '/images/wow/LandingPageNaveBare/Social%202%201.svg',
    alt: 'Mobile app welcome screen',
    className: 'hero-phone z-30 md:-mr-16 md:translate-y-4',
  },
  {
    src: '/images/wow/LandingPageNaveBare/Social%203.svg',
    alt: 'Mobile app discovery screen',
    className: 'hero-phone z-20 md:translate-y-0',
  },
  {
    src: '/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc%202.svg',
    alt: 'People using a mobile app',
    className: 'hero-phone z-10 md:-ml-16 md:translate-y-8',
  },
]

/** Layout: homepage-19/HeroV19 */
const CreateMobileExperienceHero = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.hero-phone').forEach((el, index) => {
        gsap.to(el, {
          y: index === 1 ? -12 : 12,
          duration: 2.4 + index * 0.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="create-mobile-experience-hero-heading"
    >
      <div className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img src="/images/hero-gradient-background.png" alt="" className="left-0 top-0" role="presentation" />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-6 md:flex-row md:px-14">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-5">
            <SectionLabel>Create a Mobile Experience</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            id="create-mobile-experience-hero-heading"
            className="reveal-me text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
          >
            Your business. <InstrumentText>In their hands.</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 max-w-xl text-[#808080]">
            Bring your services closer to your customers with intuitive mobile experiences designed to connect, engage,
            and simplify everyday interactions.
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/contact" variant="primary">
                Start a Project
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block w-full lg:inline-block lg:w-auto">
              <ButtonComponent href="/portfolio" variant="secondary">
                Explore Our Work
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-end">
          <div className="relative flex w-full max-w-[520px] items-end justify-center gap-3 md:gap-0">
            {phones.map((phone) => (
              <RevealWrapper
                key={phone.src}
                as="figure"
                className={`hero-phone w-[38%] overflow-hidden rounded-radius-md md:w-[200px] 2xl:w-[220px] ${phone.className}`}
              >
                <img src={phone.src} alt={phone.alt} className="aspect-[9/16] h-full w-full object-cover" />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateMobileExperienceHero
