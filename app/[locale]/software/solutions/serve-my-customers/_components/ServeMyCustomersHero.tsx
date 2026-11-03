'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const cornerImages = [
  {
    src: '/images/wow/LandingPageNaveBare/Client%20Portal%202.svg',
    alt: 'Customer portal interface',
    position: 'left-0 top-0',
    from: { x: -100 },
  },
  {
    src: '/images/wow/LandingPageNaveBare/friends-looking-at-their-mobile-phone-on-winter-da-2026-01-07-00-16-22-utc%202.svg',
    alt: 'Customers using a mobile app',
    position: 'right-0 top-0',
    from: { x: 100 },
  },
  {
    src: '/images/wow/LandingPageNaveBare/Help%20and%20support.svg',
    alt: 'Customer support interface',
    position: 'bottom-0 left-0',
    from: { y: 100 },
  },
  {
    src: '/images/wow/LandingPageNaveBare/Social%203.svg',
    alt: 'Connected customer conversations',
    position: 'bottom-0 right-0',
    from: { y: -100 },
  },
]

/** Layout: homepage-08/HeroV8 */
const ServeMyCustomersHero = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
      gsap.utils.toArray<HTMLElement>('.hero-corner-image').forEach((el, index) => {
        tl.from(el, { duration: 0.8, opacity: 0, ...cornerImages[index].from }, index === 0 ? 0 : '-=0.3')
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      className="relative z-20 flex w-full items-center justify-center overflow-x-clip px-3 pt-10 sm:pt-10 md:px-4 lg:pt-[50px] xl:min-h-[720px] xl:pt-[60px]"
      aria-labelledby="serve-my-customers-hero-heading"
    >
      <div className="absolute inset-0 z-0 mx-auto hidden max-w-[1600px] px-6 md:px-14 xl:block">
        <div className="relative h-full w-full">
          {cornerImages.map((image) => (
            <figure
              key={image.src}
              className={`hero-corner-image absolute w-[220px] overflow-hidden rounded-radius-md 2xl:w-[280px] ${image.position}`}
            >
              <img src={image.src} alt={image.alt} className="aspect-[4/3] h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>

      <HeroGradientAnimation />

      <RevealWrapper className="relative z-10 mx-auto max-w-[760px] px-4 text-center">
        <RevealWrapper className="reveal-me mb-5 flex justify-center">
          <SectionLabel>Serve My Customers</SectionLabel>
        </RevealWrapper>
        <h1
          id="serve-my-customers-hero-heading"
          className="text-[clamp(1.85rem,8vw,4.5rem)] font-light leading-[1.05] tracking-tight"
        >
          Make every customer interaction <InstrumentText>count.</InstrumentText>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-[#808080]">
          Build connected digital experiences that make it easier for customers to discover, connect, and engage with
          your business.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-14">
          <ButtonComponentList className="flex justify-center" itemClassName="block w-full md:inline-block md:w-auto">
            <ButtonComponent href="/contact" variant="primary">
              Start a Project
            </ButtonComponent>
          </ButtonComponentList>
          <ButtonComponentList className="flex justify-center" itemClassName="block w-full md:inline-block md:w-auto">
            <ButtonComponent href="/software#solutions" variant="secondary">
              Explore Solutions
            </ButtonComponent>
          </ButtonComponentList>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default ServeMyCustomersHero
