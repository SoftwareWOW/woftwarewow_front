import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'

export type WhatWeCreateItem = {
  title: string
  description: string
  href: string
  image: { src: string; alt: string }
}

type WhatWeCreateSectionProps = {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  items: ReadonlyArray<WhatWeCreateItem>
}

/** Layout: websites WebsitesPortfolioSection — centered header, 2-col image cards with copy. */
export default function WhatWeCreateSection({
  eyebrow,
  title,
  accentTitle,
  description,
  items,
}: WhatWeCreateSectionProps) {
  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-4xl">
              {title} <InstrumentText>{accentTitle}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
          {items.map((item) => (
            <RevealWrapper key={item.title} className="reveal-me group">
              <Link href={item.href} className="block">
                <figure className="relative mb-5 overflow-hidden rounded-radius-md bg-dark/5 dark:bg-dark">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background: 'radial-gradient(circle at 50% 60%, rgba(99, 91, 255, 0.35) 0%, transparent 65%)',
                    }}
                  />
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </figure>
                <h3 className="text-2xl leading-tight md:text-3xl lg:text-4xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#808080] md:mt-4 md:text-lg">{item.description}</p>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
