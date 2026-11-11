import gradientBg from '@/public/images/gradient-bg.png'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

type WhatWeCreateProps = {
  eyebrow: string
  title: string
  description: string
  items: ReadonlyArray<{ title: string; description: string }>
}

/** Layout: homepage-02/ProcessV2 — 2×2 hover cards, centered header. */
export default function WhatWeCreate({ eyebrow, title, description, items }: WhatWeCreateProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="" aria-hidden />
      </div>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">{title}</h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <RevealWrapper className="grid grid-cols-12 items-stretch justify-center gap-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="group col-span-full min-h-[320px] overflow-hidden rounded-radius-sm bg-backgroundBody px-7 pb-4 pt-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary sm:col-span-6 md:px-10 md:pb-16 md:pt-10"
            >
              <h4 className="pb-3 leading-[1.2] transition-colors duration-300 group-hover:text-white dark:group-hover:text-white md:mb-4 md:text-[28px]">
                {item.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 group-hover:text-white dark:text-dark-100 dark:group-hover:text-white">
                {item.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
