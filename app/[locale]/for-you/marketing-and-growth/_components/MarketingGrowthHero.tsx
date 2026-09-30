'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

const TEAM_HERO_IMAGE_BASE = '/images/wow/Hero/career/team'

/** Avatar wrap.png first (face visible), then numbered wraps — static only, no links. */
const HERO_AVATARS = [
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-1.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-2.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-3.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-4.png`,
] as const

const STATIC_HERO_MAIN_IMAGE = {
  src: '/images/hero-img/video-img.png',
  alt: 'Marketing and growth overview',
}

/** Layout: Home-16 HeroV16 — split headline + trust avatars + main hero image (CMS). */
const MarketingGrowthHero = ({
  badgeTitle = 'Marketing & Growth',
  title = 'Marketing that drives',
  italicTitle = 'growth.',
  description =
    'Build stronger visibility, better campaigns, and smarter systems that help your business attract, convert, and retain customers.',
  images,
}: CmsHeroComponentProps) => {
  const cmsMain = images?.[0]
  const mainImage = cmsMain?.src
    ? cmsMain
    : { src: STATIC_HERO_MAIN_IMAGE.src, alt: STATIC_HERO_MAIN_IMAGE.alt }

  return (
    <section
      className="relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover pt-[107px] md:pt-[130px] xl:pt-[180px]"
      aria-labelledby="marketing-growth-heading"
    >
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 h-full w-full blur-[85px] md:blur-[80px]">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          id="hero-gradient"
          className="absolute left-0 top-1/2 max-md:-translate-y-[60%] md:-translate-y-1/2 lg:scale-75 xl:scale-100"
        />
      </div>

      <div className="video-section mx-auto max-w-[1300px] px-4 md:px-[30px]">
        <div className="flex flex-col items-end gap-8 lg:flex-row">
          <div className="lg:w-[65%]">
            <RevealWrapper className="reveal-me mb-4">
              <SectionLabel>{badgeTitle}</SectionLabel>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h1
                id="marketing-growth-heading"
                className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
              >
                {title}
                <br className="hidden lg:block" />
                {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
              </h1>
            </RevealWrapper>
            {description ? (
              <RevealWrapper className="reveal-me mt-3">
                <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
              </RevealWrapper>
            ) : null}
            <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-9 lg:mt-14">
              <ButtonComponentList className="flex" itemClassName="block">
                <ButtonComponent href="/contact" variant="primary">
                  Talk to a Growth Expert
                </ButtonComponent>
              </ButtonComponentList>
            </RevealWrapper>
          </div>

          <RevealWrapper className="reveal-me w-full lg:w-[34%]">
            <div className="flex items-center gap-x-5 lg:flex-col xl:flex-row">
              <div className="my-3 flex [&>*:not(:first-child)]:-ml-4">
                {HERO_AVATARS.map((src) => (
                  <img
                    key={src}
                    src={encodeURI(src)}
                    alt=""
                    className="size-12 shrink-0 rounded-full border-2 border-secondary object-cover md:size-[60px]"
                  />
                ))}
              </div>
              <p className="text-[17px] leading-[1.4] text-[#808080]">
                Trusted by growing
                <br />
                businesses worldwide
              </p>
            </div>
            <figure className="relative mt-5 h-full w-full overflow-hidden rounded-radius-md md:mt-[30px]">
              <CmsResponsiveImage
                image={mainImage}
                sizes={CMS_IMAGE_SIZES.sideColumn}
                width={mainImage.width ?? 400}
                height={mainImage.height ?? 520}
                className="h-auto w-full object-cover"
              />
            </figure>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default MarketingGrowthHero
