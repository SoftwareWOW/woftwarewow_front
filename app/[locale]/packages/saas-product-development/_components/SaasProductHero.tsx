'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimationV2 from '@/components/shared/HeroGradientAnimationV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-24 HeroV24 — dark-friendly split hero + product mockup imagery. */
const SaasProductHero = ({
  title = 'Turn your SaaS idea into',
  italicTitle = 'real',
  suffixTitle = ' product.',
  description =
    'From product strategy and UX/UI to development and launch, we bring the pieces together to turn your software idea into a product people can actually use.',
  images,
}: CmsHeroComponentProps) => {
  const heroImages = (images ?? []).filter((image) => image.src)
  const singleImage = heroImages.length === 1
  const accentEndsHeadline = Boolean(italicTitle?.trim().endsWith('.'))
  const useInlineAccent = Boolean(suffixTitle?.trim()) && !accentEndsHeadline

  return (
    <section
      className="relative overflow-hidden bg-background pb-14 pt-[100px] transition-colors duration-300 dark:bg-[#0A0A0A] md:pb-16 md:pt-[120px] lg:pb-20 xl:pb-24 xl:pt-[160px]"
      aria-labelledby="saas-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-100">
        <HeroGradientAnimationV2 />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1600px] flex-col items-start gap-y-10 px-6 md:gap-12 md:px-14 xl:flex-row xl:items-center xl:justify-between xl:gap-16">
        <div className="w-full min-w-0 flex-1 xl:max-w-[640px]">
          <RevealWrapper className="reveal-me">
            <h1
              id="saas-hero-heading"
              className="text-[clamp(2.25rem,4.2vw,4.75rem)] font-normal leading-[1.12] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2] md:leading-[1.08]"
            >
              {useInlineAccent ? (
                <>
                  {title}{' '}
                  {italicTitle ? <InstrumentText variant="solid">{italicTitle}</InstrumentText> : null}
                  {suffixTitle}
                </>
              ) : (
                <>
                  {title}
                  {italicTitle ? (
                    <>
                      <br className="hidden md:block" />
                      <InstrumentText variant="solid">{italicTitle}</InstrumentText>
                    </>
                  ) : null}
                </>
              )}
            </h1>
          </RevealWrapper>
          {description ? (
            <RevealWrapper className="reveal-me mt-4 md:mt-5">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:max-w-[540px] md:text-lg md:leading-[1.6]">
                {description}
              </p>
            </RevealWrapper>
          ) : null}

          <RevealWrapper className="mt-8 flex w-full max-w-md flex-col gap-3 md:mt-10 lg:mt-12">
            <ButtonComponentList className="flex w-full" itemClassName="block w-full">
              <ButtonComponent href="/contact" variant="primary" fullWidth>
                Build My SaaS Product
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex w-full" itemClassName="block w-full">
              <ButtonComponent href="/contact" variant="white" fullWidth>
                See What&apos;s Included
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        {heroImages.length ? (
          <div
            className={`flex w-full min-w-0 flex-1 ${
              singleImage ? 'items-center justify-center xl:justify-end' : 'flex-col gap-5 md:flex-row'
            }`}
            aria-label="SaaS product development imagery"
          >
            {heroImages.map((image, index) => (
              <RevealWrapper
                key={`${image.src}-${index}`}
                as="figure"
                className={
                  singleImage
                    ? 'reveal-me flex w-full max-w-[920px] flex-1 items-center justify-center xl:justify-end'
                    : 'reveal-me w-full overflow-hidden rounded-radius-md md:w-[410px] md:shrink-0'
                }
              >
                <img
                  src={image.src}
                  alt={image.alt ?? ''}
                  className={
                    singleImage
                      ? 'h-auto w-full max-h-[min(52vh,560px)] object-contain object-center xl:max-h-[600px] xl:object-right'
                      : 'h-auto w-full rounded-radius-md object-contain md:h-[540px] md:w-[410px]'
                  }
                  width={singleImage ? 920 : 410}
                  height={singleImage ? 560 : 540}
                />
              </RevealWrapper>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default SaasProductHero
