import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

type BrandIdentityHeroProps = {
  badgeTitle: string
  title: string
  italicTitle: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  media: { src: string; alt: string }
}

/** Layout: design DesignHero — centered copy + single hero media below. */
export default function BrandIdentityHero({
  badgeTitle,
  title,
  italicTitle,
  description,
  primaryCta,
  secondaryCta,
  media,
}: BrandIdentityHeroProps) {
  return (
    <section
      className="overflow-hidden pt-[30px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="brand-identity-hero-heading"
    >
      <div className="relative">
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <img
            loading="eager"
            fetchPriority="high"
            src="/images/hero-gradient-bg.png"
            alt=""
            aria-hidden
            className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <RevealWrapper className="container">
          <div className="mb-4 flex justify-center">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </div>
          <h1 id="brand-identity-hero-heading" className="text-center">
            {title}
            <InstrumentText>{italicTitle}</InstrumentText>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080]">{description}</p>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
      <div className="container pt-8 md:pt-12">
        <RevealWrapper>
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-[1320px] overflow-hidden rounded-radius-md">
            <Image
              src={media.src}
              alt={media.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1320px) 100vw, 1320px"
              priority
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
