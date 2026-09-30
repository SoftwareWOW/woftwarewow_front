import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import { CMS_IMAGE_SIZES, CmsResponsiveImage } from '@/lib/strapi/cms-section-props'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'

type WhiteLabelHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: CmsHeroImage[]
}

/** Layout: organizations OrganizationsHero — image left + headline + dual CTAs. */
const WhiteLabelHero = ({ title, italicTitle, description, images }: WhiteLabelHeroProps) => {
  const heroImage = images?.[0]

  if (!title && !italicTitle && !description && !heroImage?.src) {
    return null
  }

  return (
    <section
      className="video-section relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover object-center pt-[107px] dark:bg-none md:pt-[100px] xl:pt-[120px]"
      aria-labelledby="whitelabel-hero-heading"
    >
      <div className="hero-video-container mx-auto max-w-[1600px] px-4 pb-14 md:px-[30px] md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="flex flex-col items-center gap-x-12 gap-y-10 lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-20">
          {heroImage?.src ? (
            <RevealWrapper className="reveal-me group relative w-full lg:w-1/2">
              <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-radius-md sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px] xl:min-h-[620px] 2xl:min-h-[700px]">
                <CmsResponsiveImage
                  image={heroImage}
                  fill
                  sizes={CMS_IMAGE_SIZES.halfGrid}
                  className="object-cover"
                />
              </figure>
            </RevealWrapper>
          ) : null}

          <div
            className={`flex w-full flex-col justify-center lg:py-4 ${heroImage ? 'lg:w-1/2' : 'lg:w-full'}`}
          >
            {title || italicTitle ? (
              <RevealWrapper className="reveal-me">
                <h1
                  id="whitelabel-hero-heading"
                  className="text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.2] tracking-[-0.02em] md:leading-[1.15]"
                >
                  {title}
                  {title && italicTitle ? ' ' : null}
                  {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
                </h1>
              </RevealWrapper>
            ) : null}

            {description ? (
              <RevealWrapper className="reveal-me mt-3 md:mt-4">
                <p className="max-w-xl text-base leading-relaxed text-[#808080] sm:max-w-2xl md:text-lg">
                  {description}
                </p>
              </RevealWrapper>
            ) : null}

            <RevealWrapperV2 className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-10 xl:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/partners" variant="primary">
                  BECOME A WHITE-LABEL PARTNER
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="secondary">
                  TALK TO OUR TEAM
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapperV2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteLabelHero
