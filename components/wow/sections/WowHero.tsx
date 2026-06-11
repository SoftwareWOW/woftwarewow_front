
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import Image from 'next/image'

export default function WowHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-8 md:pt-36">
      <HeroGradientAnimation />
      <div className="relative mx-auto max-w-[1173px]">
        <div className="relative">
          <RevealWrapper className="relative z-10 mb-[-80px] max-w-[900px] sm:mb-[-120px] md:mb-[-180px]">
            <TextAppearAnimation>
              <h1 className="text-[clamp(2rem,5vw,3.375rem)] font-light leading-[1.33] text-secondary dark:text-backgroundBody">
                So, you want the tech that gives your business an edge?{' '}
                <span className="font-instrument text-[clamp(2.5rem,6vw,4.6875rem)] not-italic leading-[1.1]">
                  Perfect
                </span>
              </h1>
            </TextAppearAnimation>
            <p className="mt-6 max-w-[759px] text-lg font-light leading-[1.1] text-colorText md:text-[22px] dark:text-dark-100">
              We develop intelligent systems and future-ready apps that make your business more productive and more
              competitive.
            </p>
          </RevealWrapper>

          <RevealWrapper className="relative h-[280px] overflow-hidden rounded-br-[48px] sm:h-[420px] sm:rounded-br-[80px] md:h-[520px]">
            <Image
              src="/images/wow/hero-banner.jpg"
              alt="WOW Superagency technology"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1173px) 100vw, 1173px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-backgroundBody/90 via-transparent to-transparent dark:from-dark/90" />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}
