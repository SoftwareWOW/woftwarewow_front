'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation02 from '@/components/animation/TextAppearAnimation02'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { useEffect, useRef } from 'react'

const stages = [
  {
    id: '01',
    title: 'Wireframe',
    caption: 'Give ideas structure.',
    image: '/images/wow/Hero/devision/Website 1.jpg',
    alt: 'Wireframe stage — product structure',
  },
  {
    id: '02',
    title: 'Prototype',
    caption: 'Explore how it works.',
    image: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'Prototype stage — interactive flows',
  },
  {
    id: '03',
    title: 'Final Design',
    caption: 'Bring the experience to life.',
    image: '/images/wow/Hero/devision/Mockup 2 Dark.png',
    alt: 'Final design — polished product experience',
  },
]

const benefits = [
  {
    title: 'Clearer Experiences',
    description: 'Interfaces that feel simple, even when the product is complex.',
  },
  {
    title: 'User-Centered Decisions',
    description: 'Design choices grounded in real needs and behaviors.',
  },
  {
    title: 'Consistent Design',
    description: 'Visual and interaction patterns that stay coherent across screens.',
  },
  {
    title: 'Early Validation',
    description: 'Prototypes and reviews that reduce guesswork before build.',
  },
  {
    title: 'Development Readiness',
    description: 'Clear specs and handoff that help engineering move with confidence.',
  },
]

/** Layout: homepage-13/AboutHoverImages + benefits list (WhyChooseUsV8 borders). */
const BuiltAroundPeople = () => {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = galleryRef.current
    if (!container) return

    const figures = container.querySelectorAll<HTMLElement>('.about-image')
    figures[0]?.classList.add('about-active-image')

    const onImageHover = (e: Event) => {
      figures.forEach((img) => img.classList.remove('about-active-image'))
      ;(e.currentTarget as HTMLElement)?.classList.add('about-active-image')
    }

    figures.forEach((img) => img.addEventListener('mouseenter', onImageHover))

    return () => {
      figures.forEach((img) => img.removeEventListener('mouseenter', onImageHover))
    }
  }, [])

  return (
    <section>
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-12 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>Built Around People</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                Beautiful by design. <InstrumentText>Useful by nature.</InstrumentText>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="w-full md:w-80 lg:w-96">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] max-md:text-justify md:place-self-end md:text-right">
                Great product design goes beyond appearance. It&apos;s about making complex experiences feel simple and
                helping people accomplish what matters.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="container pt-4 md:pt-8" ref={galleryRef}>
        <RevealWrapperV2 className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-5">
          {stages.map((stage, index) => (
            <figure
              key={stage.id}
              className={`about-image relative h-[450px] cursor-pointer overflow-hidden rounded-radius-md lg:min-h-[660px] ${
                index === 0 ? 'about-active-image' : ''
              }`}
            >
              <img src={stage.image} alt={stage.alt} className="h-full w-full rounded-radius-md object-cover" />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <span className="font-instrument text-lg italic text-white/90">{stage.id}</span>
                <p className="mt-1 text-xl font-light md:text-2xl">{stage.title}</p>
                <p className="mt-1 text-sm text-white/80 md:text-base">{stage.caption}</p>
              </figcaption>
            </figure>
          ))}
        </RevealWrapperV2>
      </div>

      <div className="container mt-12 md:mt-16">
        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:items-stretch md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*:not(:last-child)]:border-b dark:[&>*:not(:last-child)]:border-dark">
            {benefits.map((benefit) => (
              <RevealWrapper key={benefit.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{benefit.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px] text-[#808080]">{benefit.description}</p>
              </RevealWrapper>
            ))}
          </div>
          <RevealWrapper as="figure" className="reveal-me min-h-[280px] md:w-1/2 md:min-h-0 md:self-stretch">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-radius-md md:min-h-0">
              <img
                src="/images/wow/LandingPageNaveBare/Branding%20%26%20Creative%202.svg"
                alt="Design artifacts across wireframes, prototypes, and final UI"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuiltAroundPeople
