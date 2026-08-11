import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'

/** Layout: Home-24 HeroV24 — split headline + dual imagery. */
const SocialCommunityHero = () => {
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
            <SectionLabel>Social &amp; Community</SectionLabel>
          </RevealWrapper>
          <RevealWrapper className="reveal-me">
            <h1
              id="social-community-heading"
              className="text-[clamp(2rem,4.571vw,4rem)] font-normal leading-[1.15] tracking-[-0.03em]"
            >
   Turn your audience into a community.
            </h1>
          </RevealWrapper>
          <RevealWrapper className="reveal-me mt-3">
            <p className="max-w-xl text-base leading-relaxed text-[#808080] md:text-lg">
              Strategy, content, paid social and community management — connected so attention turns into lasting
              relationships.
            </p>
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
              src="/images/wow/nav/cards/Social.png"
              alt="Social content and community engagement"
              className="h-auto w-full object-cover md:h-[540px] md:w-[410px]"
              width={410}
              height={540}
            />
          </figure>
          <figure className="overflow-hidden rounded-radius-md">
            <img
              src="/images/wow/nav/cards/social media start 1.png"
              alt="Social media strategy and growth"
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
