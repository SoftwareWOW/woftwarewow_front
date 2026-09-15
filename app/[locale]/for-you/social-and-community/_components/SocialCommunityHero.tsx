import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

/** Layout: Home-24 HeroV24 — split headline + dual imagery. */
const SocialCommunityHero = ({
  badgeTitle = 'Social & Community',
  title = 'Build presence and',
  italicTitle = 'community.',
  description =
    'Create stronger social visibility, meaningful engagement, and community experiences that support brand growth.',
  images,
}: CmsHeroComponentProps) => {
  const image0 = images?.[0] ?? { src: '/images/hero-img/social-hero-1.jpg', alt: 'Social media presence' }
  const image1 = images?.[1] ?? { src: '/images/hero-img/social-hero-2.jpg', alt: 'Community building' }

  return (
    <section
      className="relative overflow-hidden pt-[137px] md:pt-[160px] xl:pt-[220px]"
      aria-labelledby="social-community-heading"
    >
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 blur-[65px]" aria-hidden="true">
        <img
          src="/images/hero-gradient-background.png"
          alt=""
          id="hero-gradient"
          className="left-0 top-0"
          role="presentation"
        />
      </div>

      <RevealWrapper className="reveal-me mx-auto flex max-w-[1600px] flex-col items-start justify-start gap-y-8 px-6 md:px-14 xl:flex-row xl:justify-between">
        <div className="flex-1">
          <RevealWrapper className="reveal-me mb-4">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h1
              id="social-community-heading"
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

          <RevealWrapper className="reveal-me mt-7 md:mt-9 lg:mt-14">
            <ButtonComponentList>
              <ButtonComponent href="/contact" variant="primary" size="sm">
                Talk to a Social Expert
              </ButtonComponent>
            </ButtonComponentList>
          </RevealWrapper>
        </div>

        <div className="flex w-full flex-1 flex-col gap-5 md:flex-row" aria-label="Social and community imagery">
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src={image0.src}
              alt={image0.alt ?? ''}
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src={image1.src}
              alt={image1.alt ?? ''}
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default SocialCommunityHero
