import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-19 HeroV19 — split headline + dual media (no circle logo), container width. */
const HostingInfraHero = ({
  badgeTitle = 'Hosting & Infrastructure',
  title = 'Reliable infrastructure for your',
  italicTitle = 'business.',
  description =
    'Secure hosting, scalable systems, and the technical foundation your business needs to stay online and perform.',
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0] ?? { src: '/images/hero-img/hosting-hero-1.jpg', alt: 'Hosting infrastructure' }
  const image1 = images?.[1] ?? { src: '/images/hero-img/hosting-hero-2.jpg', alt: 'Business infrastructure' }

  return (
    <section
      className="relative overflow-hidden pt-28 md:pt-[160px] xl:pt-[180px]"
      aria-labelledby="hosting-infra-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          aria-hidden
          className="-top-[10%] left-0 scale-50"
        />
      </div>

      <div className="container flex flex-col justify-between gap-x-5 gap-y-10 lg:flex-row">
        <div className="md:flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>

          <RevealWrapper className="reveal-me">
            <h1
              id="hosting-infra-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
            </h1>
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-3">
            {description ? (
            <RevealWrapper className="reveal-me mt-3">
              <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
            </RevealWrapper>
          ) : null}
          </RevealWrapper>

          <RevealWrapper className="reveal-me mt-7 flex flex-col gap-3 sm:flex-row md:mt-10 lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Find Your Hosting Solution
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="secondary">
                Explore Infrastructure
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex flex-col gap-5 sm:flex-row md:flex-1">
          <RevealWrapper as="figure" className="reveal-me relative mt-0 sm:mt-[78px]">
            <img
              src={image0.src}
              alt={image0.alt ?? ''}
              className="max-sm:w-full"
            />
          </RevealWrapper>
          <RevealWrapper as="figure" className="reveal-me">
            <img
              src={image1.src}
              alt={image1.alt ?? ''}
              className="max-sm:w-full"
            />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default HostingInfraHero
