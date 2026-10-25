import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'
import { IMPACT_SERVICES } from './impact-content'

export default function ImpactServicesSection() {
  const section = IMPACT_SERVICES

  return (
    <section id="services" className="scroll-mt-28 bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{section.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3 text-center">
              {section.titleBefore}
              <InstrumentText>{section.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mb-10 max-w-[770px] text-[#808080] lg:mb-20">{section.description}</p>
          </TextAppearAnimation>
        </div>

        <div className="mb-[60px] space-y-[30px]">
          {section.items.map((item) => (
            <RevealWrapper
              key={item.index}
              className="underline-hover-effect reveal-me group relative flex w-full flex-col items-center lg:flex-row"
            >
              <figure className="-z-30 w-full max-w-[870px] overflow-hidden rounded-radius-md">
                <Link href={item.href} className="block" aria-label={`View ${item.title}`}>
                  <Image
                    src={item.image}
                    width={870}
                    height={580}
                    className="h-full w-full rounded-radius-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item.title}
                  />
                </Link>
              </figure>

              <div className="z-30 w-full rounded-radius-sm border border-black/10 bg-backgroundBody p-[30px] dark:border-white/10 dark:bg-dark max-md:-mt-5 lg:absolute lg:right-0 lg:max-w-[570px]">
                <p className="mb-3.5 text-sm font-normal uppercase leading-6 tracking-[3px] text-black dark:text-white">
                  {item.index}
                </p>
                <div className="blog-title mb-3.5 lg:mb-5">
                  <Link href={item.href} aria-label={`View ${item.title}`}>
                    <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-lg text-[#808080]">{item.tagline}</p>
                </div>
                <p className="mb-10 text-base font-normal leading-[25.6px] tracking-[0.32px] text-[#808080]">
                  {item.description}
                </p>

                <ButtonComponentList className="flex" itemClassName="block">
                  <ButtonComponent href={item.href} variant="white" ariaLabel={item.button}>
                    {item.button}
                  </ButtonComponent>
                </ButtonComponentList>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
