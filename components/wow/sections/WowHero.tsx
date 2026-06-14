import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import type { Dictionary } from '@/i18n/types'
import Image from 'next/image'

type WowHeroProps = {
  hero: Dictionary['hero']
}

const heroImage = '/images/wow/hero-banner.jpg'

const titleHighlightClass =
  'font-seasons text-[clamp(2.35rem,5vw,4.25rem)] italic leading-[1.05] !bg-none bg-clip-border !text-secondary dark:!text-backgroundBody'

const descriptionClass =
  'mt-4 max-w-[520px] text-[15px] font-light leading-[1.35] text-[#4B5563] sm:text-base md:mt-5 md:text-[18px] md:leading-[1.3] dark:text-dark-100'

export default function WowHero({ hero }: WowHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-8 md:pt-28">
      <div className="relative mx-auto max-w-[1173px]">
        <div className="overflow-hidden rounded-[24px] bg-backgroundBody p-3 sm:rounded-[32px] sm:p-4 md:p-5">
          <h1 className="px-3 pb-3 text-[clamp(1.65rem,6.5vw,2.15rem)] font-normal leading-[1.25] text-secondary sm:px-4 md:hidden dark:text-backgroundBody">
            <TextAppearAnimation>{hero.title}</TextAppearAnimation>
          </h1>

          <div className="relative min-h-[250px] md:min-h-[500px] md:max-h-[20px]">
            <div className="absolute inset-0 overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px]">
              <Image
                src={heroImage}
                alt={hero.imageAlt}
                fill
                className="object-cover object-right"
                priority
                sizes="(max-width: 1173px) 100vw, 1173px"
              />
            </div>

            <div className="relative z-10 flex items-stretch md:hidden">
              <div className="relative z-[2] min-w-[min(72%,320px)] rounded-br-[20px] bg-[#ededed] px-6 pb-3 pt-1 sm:px-10">
                <span className={`block ${titleHighlightClass} !text-[clamp(2.5rem,13vw,4rem)]`}>
                  {hero.titleHighlight}
                </span>
              </div>
            
               <div className="pointer-events-none absolute bottom-[-32px] left-0 z-[3] h-8 w-8 bg-[radial-gradient(circle_at_100%_100%,transparent_32px,#ededed_33px)]" />


              <div className="pointer-events-none absolute right-[65px] top-0 z-[3] h-8 w-8  bg-[radial-gradient(circle_at_100%_100%,transparent_31px,#ededed_33px)]"  />

            </div>

            <div className="relative z-10 hidden max-w-full md:block md:max-w-[72%]">
              <div className="pointer-events-none absolute right-[-32px] top-0 z-[3] h-8 w-8 bg-[radial-gradient(circle_at_100%_100%,transparent_32px,#ededed_33px)]" />
        

              <div className="relative z-[1] rounded-br-[32px] bg-backgroundBody px-8 py-9 sm:px-10 sm:py-10 md:px-11 md:py-10 lg:px-12 lg:py-11">
                <div className="pointer-events-none absolute bottom-[-32px] left-0 z-[3] h-8 w-8 bg-[radial-gradient(circle_at_100%_100%,transparent_32px,#ededed_33px)]" />

                <TextAppearAnimation>
                  <h1 className="text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.25] text-secondary dark:text-backgroundBody">
                    {hero.title}{' '}
                    <span className={titleHighlightClass}>{hero.titleHighlight}</span>
                  </h1>
                </TextAppearAnimation>

                <p className={descriptionClass}>{hero.description}</p>
              </div>
            </div>
          </div>

          <RevealWrapper className="px-3 pt-4 sm:px-4 md:hidden">
            <p className={descriptionClass}>{hero.description}</p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
