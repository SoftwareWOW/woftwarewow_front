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

type IntelligentAutomationWhatWeAutomateSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<Step>
  image: { src: string; alt: string }
  sectionId?: string
}

/** Layout copy: for-you/social-and-community SocialProcess (Home-07 ProcessV4). */
export default function IntelligentAutomationWhatWeAutomateSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
  image,
  sectionId,
}: IntelligentAutomationWhatWeAutomateSectionProps) {
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
            <h2 className="text-appear mx-auto max-w-4xl">
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

        <RevealWrapper className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-12 lg:gap-16">
          <figure className="relative mx-auto h-[240px] w-full max-w-[570px] shrink-0 overflow-hidden rounded-radius-md sm:h-[320px] md:mx-0 md:h-auto md:w-[570px] md:min-h-[320px] lg:min-h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 570px"
              className={`rounded-radius-md ${isSvg ? 'object-contain' : 'object-cover'}`}
            />
          </figure>

          <div className="min-w-0 flex-1">
            <ul className="relative space-y-5 border-secondary dark:border-backgroundBody md:border-l md:space-y-6 lg:space-y-7">
              {steps.map((step, index) => (
                <li key={step.id} className="relative max-w-max px-10">
                  <div
                    className={`absolute left-0 flex items-center justify-center rounded-full border-background bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:shadow-[inset_0_0_0_1px_#EDF0F51A] md:-left-11 md:border-[18px] lg:px-6 lg:py-8 ${
                      index === 0 ? 'lg:-left-[52px]' : 'lg:-left-[54px]'
                    }`}
                  >
                    <span className="inline-block text-xl font-semibold text-inherit">{step.id}</span>
                  </div>
                  <div className="ml-[30px]">
                    <h3 className="wow-process-step-title">{step.title}</h3>
                    <p className="mt-3 max-w-[483px] text-base leading-relaxed text-[#808080]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}