import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

type Pillar = {
  title: string
  description: string
  image: string
  alt: string
}

type BrandExperienceProps = {
  eyebrow: string
  titleBefore: string
  titleAccent: string
  description: string
  pillars: ReadonlyArray<Pillar>
}

/** Layout: marketing industries carousel card — static 4-column grid. */
export default function BrandExperience({
  eyebrow,
  titleBefore,
  titleAccent,
  description,
  pillars,
}: BrandExperienceProps) {
  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              {titleBefore}
              <InstrumentText>{titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me mt-4">
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#808080]">{description}</p>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 xl:grid-cols-4">
          {pillars.map((pillar) => (
            <RevealWrapper key={pillar.title} className="reveal-me flex flex-col">
              <figure className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-radius-md">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </figure>
              <h5 className="mb-2 text-xl font-light md:text-2xl">{pillar.title}</h5>
              <p className="text-base leading-relaxed text-[#808080]">{pillar.description}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
