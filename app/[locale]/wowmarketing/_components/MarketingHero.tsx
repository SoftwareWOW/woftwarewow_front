import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import { MARKETING_HERO } from './marketing-content'

export default function MarketingHero() {
  const hero = MARKETING_HERO

  return (
    <section className="relative overflow-hidden bg-background px-3 pt-20 transition-colors duration-300 dark:bg-background sm:pt-24 md:px-4 lg:pt-[120px] xl:pt-[110px]">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          <div className="w-full max-w-[640px] text-center lg:text-left">
      

            <h1 className="text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              {hero.titleBefore}{' '}
              <InstrumentText>{hero.titleAccent}</InstrumentText>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#808080] max-lg:mx-auto md:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <ButtonComponentList className="flex" itemClassName="max-md:w-full">
                <ButtonComponent href="/meet" variant="primary" fullWidth>
                  {hero.primaryCta}
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="max-md:w-full">
                <ButtonComponent href="/services" variant="secondary" fullWidth>
                  {hero.secondaryCta}
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </div>

          <figure className="w-full max-w-[560px] shrink-0 overflow-hidden rounded-radius-md bg-[#D9D9D9] dark:bg-[#3A3A3A] lg:max-w-[48%]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={720}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
