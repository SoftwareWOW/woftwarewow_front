import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { HOST_INFRASTRUCTURE } from './host-content'

export default function HostInfrastructureSection() {
  const section = HOST_INFRASTRUCTURE

  return (
    <section>
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-16 md:flex-row lg:justify-between">
          <div className="flex-1 md:self-start">
            <RevealWrapper className="reveal-me mb-3">
              <SectionLabel>{section.eyebrow}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h2>
                {section.titleBefore}
                <InstrumentText>{section.titleAccent}</InstrumentText>
              </h2>
            </RevealWrapper>
          </div>

          <div className="w-full md:max-w-80 md:self-end lg:max-w-[470px]">
            <RevealWrapper className="reveal-me">
              <p className="max-w-lg text-base leading-relaxed text-[#808080] md:place-self-end md:text-right">
                {section.description}
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <ButtonComponentList
                className="flex justify-end max-md:justify-center"
                itemClassName="mx-auto block w-full text-center md:inline-block md:w-auto"
              >
                <ButtonComponent href={section.ctaHref} variant="secondary">
                  {section.ctaLabel}
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-y-8 md:flex-row md:gap-14 lg:gap-16 xl:gap-x-20">
          <div className="md:w-1/2 [&>*]:border-b dark:[&>*]:border-dark">
            {section.items.map((item) => (
              <RevealWrapper key={item.title} className="reveal-me py-3.5 pr-5 lg:py-5">
                <h5>{item.title}</h5>
                <p className="mt-3 text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
              </RevealWrapper>
            ))}
          </div>

          <RevealWrapper as="figure" className="reveal-me relative min-h-[280px] md:w-1/2">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              width={640}
              height={480}
              className="h-full w-full rounded-radius-md object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
