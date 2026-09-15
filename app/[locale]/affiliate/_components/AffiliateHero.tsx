import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'

const DEFAULT_IMAGES: CmsHeroImage[] = [
  {
    src: '/images/wow/Hero/career/career%20(2).png',
    alt: 'Professionals collaborating as WOW referral partners',
  },
  {
    src: '/images/wow/Hero/career/career%20(1).png',
    alt: 'Professional working at a desk',
  },
]

type AffiliateHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: CmsHeroImage[]
}

/** Layout: homepage-19 HeroV19 — two-column headline + dual images. No Rivor circle badge. */
const AffiliateHero = ({
  badgeTitle = 'CHOOSE YOUR PATH',
  title = 'Great Connections Should Be',
  italicTitle = 'Rewarded.',
  description = 'Refer businesses to WOW, create new opportunities, and earn rewards when those introductions turn into successful projects.',
  images = DEFAULT_IMAGES,
}: AffiliateHeroProps) => {
  const [primaryImage, secondaryImage] = images

  return (
    <section className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[180px]">
      <div
        id="hero-gradient-wrapper"
        className="absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0"
      >
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          id="hero-gradient"
          className="-top-[10%] left-0 scale-50"
        />
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-3">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper
            as="h1"
            className="reveal-me text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
          >
            {title} <InstrumentText variant="solid">{italicTitle}</InstrumentText>
          </RevealWrapper>
          <RevealWrapper as="p" className="reveal-me mt-3 text-[#808080]">
            {description}
          </RevealWrapper>
          <RevealWrapperV2 className="reveal-me-2 mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-9 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                JOIN THE PROGRAM
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapperV2>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          {primaryImage && (
            <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-md sm:mt-[78px]">
              <img
                src={primaryImage.src}
                alt={primaryImage.alt ?? ''}
                className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
                width={410}
                height={540}
              />
            </RevealWrapper>
          )}
          {secondaryImage && (
            <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
              <img
                src={secondaryImage.src}
                alt={secondaryImage.alt ?? ''}
                className="h-auto w-full rounded-radius-md object-cover md:h-[540px] md:w-[410px]"
                width={410}
                height={540}
              />
            </RevealWrapper>
          )}
        </div>
      </div>
    </section>
  )
}

export default AffiliateHero
