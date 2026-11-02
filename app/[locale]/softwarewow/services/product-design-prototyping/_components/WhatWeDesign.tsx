import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

const designAreas = [
  {
    title: 'Product Discovery',
    description: 'Understand the opportunity, define product goals, and shape the right direction.',
    image: '/images/wow/LandingPageNaveBare/notes-with-words-and-female-hand-on-light-backgrou-2026-03-24-21-39-26-utc%201.svg',
    alt: 'Product discovery and planning session',
  },
  {
    title: 'UX Research & Strategy',
    description: 'Explore user needs and behaviors to guide meaningful product decisions.',
    image: '/images/wow/LandingPageNaveBare/ux-graphic-designer-planing-application-process-d-2026-03-11-00-50-35-utc%202.svg',
    alt: 'UX research and application planning',
  },
  {
    title: 'User Flows & Wireframes',
    description: 'Organize features, journeys, and screens into clear, intuitive structures.',
    image: '/images/wow/Hero/devision/Website 1.jpg',
    alt: 'Wireframe and user flow structure',
  },
  {
    title: 'UI & Product Design',
    description: 'Create beautiful, consistent interfaces designed around real interactions.',
    image: '/images/wow/Hero/devision/Design 2.jpg',
    alt: 'UI and visual product design',
  },
  {
    title: 'Interactive Prototyping',
    description: 'Bring ideas to life through clickable experiences that can be reviewed and refined.',
    image: '/images/wow/LandingPageNaveBare/Client Portal 2.svg',
    alt: 'Interactive prototype experience',
  },
]

/** Layout: homepage-16/ServicesV14 — bordered cards with image headers. */
const WhatWeDesign = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="md:flex-1">
            <RevealWrapper className="mb-3">
              <SectionLabel>What We Design</SectionLabel>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3">
                From first idea to <InstrumentText>clear direction.</InstrumentText>
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-3 max-w-2xl">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">
                Every great digital product starts with understanding its users. We bring clarity to ideas, structure to
                experiences, and purpose to every interaction.
              </p>
            </RevealWrapper>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] md:grid-cols-2 2xl:grid-cols-3">
          {designAreas.map((area, index) => (
            <RevealWrapper
              key={area.title}
              className={`reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px] ${
                index === designAreas.length - 1 ? 'md:col-span-2 2xl:col-span-1' : ''
              }`}
            >
              <figure className="mb-6 overflow-hidden rounded-radius-sm">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <h5 className="mb-2 lg:mb-3">{area.title}</h5>
              <p className="text-base leading-[1.6] text-[#808080]">{area.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeDesign
