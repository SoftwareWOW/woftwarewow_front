import RevealWrapper from '@/components/animation/RevealWrapper'
import RevealWrapperV2 from '@/components/animation/RevealWrapperV2'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import hero01 from '@/public/images/hero-img/hero-img-01.png'
import hero02 from '@/public/images/hero-img/hero-img-02.png'
import hero03 from '@/public/images/hero-img/hero-img-03.png'
import hero04 from '@/public/images/hero-img/hero-img-04.png'
import Image from 'next/image'

const HumanTuch = () => {
  return (
    <section className="relative overflow-hidden bg-background pb-14 pt-[110px] transition-colors duration-300 md:pb-16 md:pt-[150px] lg:pb-[88px] lg:pt-[190px] xl:pb-[100px]">
      <div className="absolute inset-0 opacity-0 dark:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col gap-8 max-lg:justify-center lg:flex-row">
          <div className="w-full flex-1 max-lg:self-center">
            <TextAppearAnimation>
              <h2 className="text-appear text-secondary dark:text-backgroundBody xl:text-[85px] xl:leading-[1.22]">
                Technology with a{' '}
                <i className="block font-instrument italic text-[#8b7cff] dark:text-[#b794f4]">human touch —</i>
                the WOW difference
              </h2>
            </TextAppearAnimation>
            <RevealWrapper className="reveal-me mt-10 flex items-center gap-5 pb-10 lg:pb-16 xl:pb-24">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-[#e5e5e5] dark:border-white/10">
                <Image
                  src="/images/wow/hero/client/Michael Carter.png"
                  alt="WOW Superagency team member"
                  width={56}
                  height={56}
                  className="size-full object-cover"
                />
              </div>
              <figcaption>
                <span className="text-xs italic text-colorText dark:text-dark-100">
                  Real people behind every project
                </span>
                <p className="font-medium text-secondary dark:text-backgroundBody">WOW Superagency Team</p>
              </figcaption>
            </RevealWrapper>
            <RevealWrapperV2 as="figure" className="reveal-me mb-8 w-full overflow-hidden rounded-lg">
              <Image src={hero01} alt="WOW Superagency collaborative strategy session" className="w-full" />
            </RevealWrapperV2>
            <RevealWrapper as="figure" className="reveal-me w-full overflow-hidden rounded-lg">
              <Image src={hero02} alt="WOW Superagency design and development workspace" className="w-full" />
            </RevealWrapper>
          </div>
          <div className="w-full flex-1 max-lg:self-center">
            <RevealWrapper className="reveal-me mb-8 max-w-xl">
              <p className="text-base leading-relaxed text-colorText dark:text-dark-100 md:text-lg">
                Behind every website, campaign, and software build is a dedicated team that listens first. We combine
                cutting-edge AI and automation with genuine partnership—so you always know who is guiding your growth
                and why every decision matters.
              </p>
            </RevealWrapper>
            <RevealWrapper as="figure" className="reveal-me mb-8 overflow-hidden rounded-lg">
              <Image src={hero03} alt="WOW Superagency client consultation" className="w-full" />
            </RevealWrapper>
            <RevealWrapper as="figure" className="reveal-me overflow-hidden rounded-lg">
              <Image src={hero04} alt="WOW Superagency team delivering results" className="w-full" />
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HumanTuch
