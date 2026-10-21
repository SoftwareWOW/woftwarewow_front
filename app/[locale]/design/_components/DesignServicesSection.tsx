import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { DESIGN_SERVICES } from './design-content'

export default function DesignServicesSection() {
  const content = DESIGN_SERVICES

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{content.description}</p>
          </RevealWrapper>
        </div>

        <div className="[&>*:not(:last-child)]:mb-4">
          {content.items.map((item) => (
            <RevealWrapper
              key={item.id}
              className="group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0"
            >
              <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
                <div className="blog-title mb-6">
                  <h3 className="text-[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">{item.title}</h3>
                </div>
                <p className="border-t pt-2 dark:border-dark md:pt-5">{item.description}</p>
              </div>
              <figure className="h-full w-full flex-1 overflow-hidden">
                <div className="block">
                  <Image
                    width={509}
                    height={295}
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </div>
              </figure>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-10">
          <ButtonComponentList>
            <ButtonComponent href={content.ctaHref} variant="white">
              {content.ctaLabel}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
