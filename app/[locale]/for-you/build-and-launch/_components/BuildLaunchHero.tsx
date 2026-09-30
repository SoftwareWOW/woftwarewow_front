import RevealWrapper from '@/components/animation/RevealWrapper'
import SectionDecorativeBackground from '@/components/shared/SectionDecorativeBackground'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-19 HeroV19 — split headline + dual media (no circle logo). */
const BuildLaunchHero = ({
  badgeTitle = 'Build & Launch',
  title = 'From idea to',
  italicTitle = 'market.',
  description =
    'Turn your business, product or digital idea into something real—with the strategy, brand, technology and launch support you need in one place.',
  images,
  backgroundImage,
}: CmsHeroComponentProps) => {
  const useStaticHeroImages = !images?.length
  const image0 = useStaticHeroImages
    ? {
        src: '/images/hero-img/startup-hero-1.jpg',
        alt: 'Team building and launching a new product',
      }
    : images[0]
  const image1 = useStaticHeroImages
    ? {
        src: '/images/hero-img/startup-hero-2.jpg',
        alt: 'Focused workspace ready for go-to-market',
      }
    : (images[1] ?? images[0])

  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="build-launch-heading"
    >
      <SectionDecorativeBackground src={backgroundImage?.src} />

      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-x-5 gap-y-10 px-4 md:px-[30px] lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="build-launch-heading"
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

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Start Your Launch
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/services" variant="secondary">
                See What We Can Build
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 overflow-hidden rounded-radius-md sm:mt-[78px]">
            <CmsResponsiveImage
              image={image0}
              sizes={CMS_IMAGE_SIZES.heroDual}
              width={image0.width ?? 480}
              height={image0.height ?? 360}
              className="w-full object-cover"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-radius-md">
            <CmsResponsiveImage
              image={image1}
              sizes={CMS_IMAGE_SIZES.heroDual}
              width={image1.width ?? 480}
              height={image1.height ?? 360}
              className="w-full object-cover"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default BuildLaunchHero
