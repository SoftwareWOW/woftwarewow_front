import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Home-19 — HeroV19: split headline + dual media + dual CTAs (no circle logo). */
const BusinessGrowthHero = ({
  badgeTitle,
  title,
  italicTitle,
  description,
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0]
  const image1 = images?.[1]

  if (!title && !italicTitle && !image0?.src && !image1?.src) {
    return null
  }

  return (
    <section
      className="relative overflow-hidden pt-[100px] md:pt-[110px] xl:pt-[130px]"
      aria-labelledby="business-growth-heading"
    >
      {/* Home-19 HeroV19 gradient */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          {badgeTitle ? (
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>{badgeTitle}</SectionLabel>
            </RevealWrapper>
          ) : null}

          {title || italicTitle ? (
            <RevealWrapper className="reveal-me">
              <h1
                id="business-growth-heading"
                className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
              >
                {title}
                {italicTitle ? (
                  <>
                    <br className="hidden lg:block" />
                    <InstrumentText>{italicTitle}</InstrumentText>
                  </>
                ) : null}
              </h1>
            </RevealWrapper>
          ) : null}

          {description ? (
            <RevealWrapper className="reveal-me mt-3">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
            </RevealWrapper>
          ) : null}

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Get the Growth Package
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                See What&apos;s Included
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        {image0?.src || image1?.src ? (
          <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
            {image0?.src ? (
              <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-sm sm:mt-[78px]">
                <CmsResponsiveImage
                  image={image0}
                  sizes={CMS_IMAGE_SIZES.heroDual}
                  width={image0.width ?? 480}
                  height={image0.height ?? 360}
                  className="max-sm:w-full rounded-radius-sm"
                />
              </RevealWrapper>
            ) : null}
            {image1?.src ? (
              <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-sm">
                <CmsResponsiveImage
                  image={image1}
                  sizes={CMS_IMAGE_SIZES.heroDual}
                  width={image1.width ?? 480}
                  height={image1.height ?? 360}
                  className="max-sm:w-full rounded-radius-sm"
                />
              </RevealWrapper>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default BusinessGrowthHero
