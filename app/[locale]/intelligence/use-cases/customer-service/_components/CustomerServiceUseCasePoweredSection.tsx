import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

type Step = {
  id: string
  title: string
  description: string
}

type CustomerServiceUseCasePoweredSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<Step>
  image: { src: string; alt: string }
  sectionId?: string
}

/** Layout copy: wowmarketing MarketingFrameworkSection (/marketing §9). */
export default function CustomerServiceUseCasePoweredSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
  image,
  sectionId = 'intelligent-customer-support',
}: CustomerServiceUseCasePoweredSectionProps) {
  const isSvg = image.src.toLowerCase().endsWith('.svg')

  return (
    <section
      id={sectionId}
      className="scroll-mt-24 bg-background transition-colors duration-300 dark:bg-background"
    >
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="reveal-me mb-5 flex justify-center md:mb-8">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">
              {titleBefore}
              {titleAccent ? (
                <>
                  <br />
                  <InstrumentText>{titleAccent}</InstrumentText>
                </>
              ) : null}
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="flex flex-col gap-12 md:flex-row md:items-stretch md:gap-20">
          <div className="min-w-0 flex-1 md:order-1 md:self-stretch">
            <ul className="relative space-y-8 border-secondary dark:border-backgroundBody md:border-l lg:space-y-10">
              {steps.map((step, index) => (
                <li key={step.id} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span
                      className={`inline-block text-xl font-light text-inherit ${
                        index === 0 ? 'from-backgroundBody to-gray-400' : 'from-white to-gray-400'
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>
                  <div className="ml-[30px]">
                    <h3>{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="relative min-h-[280px] w-full overflow-hidden rounded-radius-md md:order-2 md:min-h-0 md:w-[min(100%,420px)] md:shrink-0 md:self-stretch">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`rounded-radius-md ${isSvg ? 'object-contain' : 'object-cover'}`}
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}