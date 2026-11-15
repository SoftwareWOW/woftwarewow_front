
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import Image from 'next/image'

type Step = {
  id: string
  title: string
  description: string
}

type OperationsUseCasePoweredSectionProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  steps: ReadonlyArray<Step>
  image: {
    src: string
    alt: string
  }
  sectionId?: string
}

/**
 * Intelligent Operations Section
 * Dark layout with image and connected vertical timeline.
 */
export default function OperationsUseCasePoweredSection({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  steps,
  image,
  sectionId = 'intelligent-operations',
}: OperationsUseCasePoweredSectionProps) {
  const isSvg = image.src.toLowerCase().endsWith('.svg')

  return (
    <section
      id={sectionId}
      className="scroll-mt-24 bg-background transition-colors duration-300 dark:bg-background"
    >
      <div className="container mx-auto">

        {/* SECTION HEADER */}
        <div className="mb-12 text-center md:mb-14 lg:mb-[52px]">

          {/* EYEBROW */}
          <RevealWrapper className="reveal-me mb-5 flex justify-center">
            <div className="[&_*]:!border-0 [&_*]:!bg-[#383838] [&_*]:!text-[#B8B8B8]">
              <SectionLabel>{eyebrow}</SectionLabel>
            </div>
          </RevealWrapper>

          {/* TITLE */}
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[1100px] !text-[#EDEDED] !font-normal !leading-[1.12] !tracking-[-0.045em] text-[34px] sm:text-[44px] md:text-[52px] lg:text-[54px] xl:text-[58px]">
              {titleBefore}
              {titleAccent ? (
                <>
                  {' '}
                 <InstrumentText>{titleAccent}</InstrumentText>
                </>
              ) : null}
            </h2>
          </TextAppearAnimation>

          {/* DESCRIPTION */}
          <RevealWrapper className="reveal-me mt-4 md:mt-5">
            <p className="mx-auto max-w-[820px] text-[14px] leading-[1.65] text-[#777777] sm:text-[15px] md:text-[16px]">
              {description}
            </p>
          </RevealWrapper>
        </div>

        {/* IMAGE AND TIMELINE */}
        <RevealWrapper className="reveal-me">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-6 xl:gap-8">

            {/* LEFT IMAGE */}
            <figure className="relative m-0 h-[350px] w-full overflow-hidden rounded-[8px] bg-[#202020] sm:h-[440px] md:h-[520px] lg:h-full lg:min-h-[568px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={
                  isSvg
                    ? 'object-contain'
                    : 'object-cover'
                }
              />
            </figure>

            {/* RIGHT TIMELINE */}
            <div className="relative min-w-0">

              {/* CONTINUOUS VERTICAL CONNECTOR */}
              {steps.length > 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute z-0 w-px bg-[#666666]"
                  style={{
                    left: '23.5px',
                    top: '38px',
                    bottom: '38px',
                  }}
                />
              )}

              {/* TIMELINE ITEMS */}
              <ol className="relative z-10 flex h-full flex-col justify-between gap-7 lg:gap-0">

                {steps.map((step) => (
                  <li
                    key={step.id}
                    className="relative flex min-w-0 items-start gap-5 sm:gap-6"
                  >

                    {/* NUMBER CIRCLE */}
                    <div className="relative z-10 flex h-[76px] w-[48px] shrink-0 items-center justify-center rounded-full border border-[#292929] bg-[#141414]">

                      <span className="text-[16px] font-normal text-[#BDBDBD]">
                        {step.id}
                      </span>

                    </div>

                    {/* STEP CONTENT */}
                    <div className="min-w-0 flex-1 pt-[3px]">

                      {/* STEP TITLE */}
                      <h3 className="!m-0 !p-0 text-[27px] !font-normal !leading-[1.2] !tracking-[-0.035em] !text-[#E8E8E8] sm:text-[32px] md:text-[35px] lg:text-[34px] xl:text-[38px]">
                        {step.title}
                      </h3>

                      {/* STEP DESCRIPTION */}
                      <p className="!mb-0 mt-[10px] max-w-[460px] text-[14px] leading-[1.65] text-[#777777] md:text-[15px]">
                        {step.description}
                      </p>

                    </div>
                  </li>
                ))}

              </ol>
            </div>

          </div>
        </RevealWrapper>

      </div>
    </section>
  )
}
