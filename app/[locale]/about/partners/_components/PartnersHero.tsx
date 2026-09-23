import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'

type PartnersHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  suffixTitle?: string
  description?: string
  images?: CmsHeroImage[]
}

const sideSlotClassName =
  'h-[min(42vh,360px)] w-[min(28vw,240px)] xl:h-[420px] xl:w-[280px]'

function SideImageSlot({
  position,
  image,
}: {
  position: 'left' | 'right'
  image?: CmsHeroImage
}) {
  const positionClassName =
    position === 'left'
      ? 'left-0 -translate-x-[18%] xl:-translate-x-[8%]'
      : 'right-0 translate-x-[18%] xl:translate-x-[8%]'

  return (
    <div
      aria-hidden={!image?.src}
      data-partners-hero-side={position}
      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 lg:block ${positionClassName}`}
    >
      {image?.src ? (
        <img
          src={image.src}
          alt={image.alt ?? ''}
          className={`${sideSlotClassName} object-cover`}
        />
      ) : (
        <div className={sideSlotClassName} />
      )}
    </div>
  )
}

/** Centered partners hero with side decorative image slots and dual CTAs. */
const PartnersHero = ({
  badgeTitle = 'Partners',
  title = 'Better',
  italicTitle = 'together',
  suffixTitle = ' with trusted collaborators',
  description = 'We partner with trusted technology, platform, and industry leaders to deliver better solutions for growing businesses.',
  images,
}: PartnersHeroProps) => {
  return (
    <section
      className="relative overflow-hidden bg-background pb-16 pt-28 transition-colors duration-300 dark:bg-[#0A0A0A] md:pb-20 md:pt-[160px] lg:pb-24 lg:pt-[180px] xl:pb-28"
      aria-labelledby="partners-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-100">
        <HeroGradientAnimationV2 />
      </div>

      <SideImageSlot position="left" image={images?.[0]} />
      <SideImageSlot position="right" image={images?.[1]} />

      <div className="container relative z-10">
        <RevealWrapper className="mb-3 flex justify-center">
          <SectionLabel>{badgeTitle}</SectionLabel>
        </RevealWrapper>

        <RevealWrapper>
          <h1
            id="partners-hero-heading"
            className="mx-auto max-w-[18ch] text-center text-[clamp(2rem,4.571vw,4.5rem)] font-normal leading-[1.12] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:max-w-[20ch]"
          >
            {title}{' '}
            <InstrumentText variant="solid">{italicTitle}</InstrumentText>
            {suffixTitle}
          </h1>
        </RevealWrapper>

        <RevealWrapper>
          <p className="mx-auto mt-3 max-w-[670px] text-center text-base leading-relaxed text-[#808080] md:text-lg">
            {description}
          </p>
        </RevealWrapper>

        <RevealWrapper className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-12">
          <ButtonComponentList className="flex justify-center" itemClassName="block">
            <ButtonComponent href="/contact" variant="primary">
              Become a Partner
            </ButtonComponent>
          </ButtonComponentList>
          <ButtonComponentList className="flex justify-center" itemClassName="block">
            <ButtonComponent href="/meet" variant="secondary">
              Talk to Our Team
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PartnersHero
