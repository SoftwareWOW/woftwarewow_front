import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'

type AccessibleWebHeroProps = {
  badgeTitle: string
  title: string
  italicTitle: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  media: { src: string; alt: string }
  headingId?: string
}

/** Layout copy: intelligent-automation IntelligentAutomationHero — image left, copy right (flex-row-reverse). */
export default function AccessibleWebHero({
  badgeTitle,
  title,
  italicTitle,
  description,
  primaryCta,
  secondaryCta,
  media,
  headingId = 'accessible-web-experiences-hero-heading',
}: AccessibleWebHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[30px] md:pt-[40px] xl:pt-[50px]" aria-labelledby={headingId}>
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img src="/images/hero-gradient-background.png" alt="" aria-hidden className="-top-[10%] left-0 scale-50" />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row-reverse lg:items-center">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id={headingId}
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              <InstrumentText>{italicTitle}</InstrumentText>
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex flex-wrap gap-3" itemClassName="block">
              <ButtonComponent href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </ButtonComponent>
              <ButtonComponent href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-sm md:flex-1 sm:mt-[78px]">
          <CmsResponsiveImage
            image={media}
            sizes={CMS_IMAGE_SIZES.heroDual}
            width={480}
            height={360}
            className="max-sm:w-full rounded-radius-sm"
            priority
          />
        </RevealWrapper>
      </div>
    </section>
  )
}