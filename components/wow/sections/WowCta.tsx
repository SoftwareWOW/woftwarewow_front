import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import WowButton from '../WowButton'

export default function WowCta() {
  return (
    <section className="px-4 py-20 sm:px-8">
      <RevealWrapper className="mx-auto max-w-[1280px] rounded-radius-md bg-backgroundBody px-6 py-16 text-center dark:bg-dark-200 md:px-12">
        <TextAppearAnimation>
          <h2 className="text-appear text-[clamp(2rem,5vw,4.5rem)] font-light leading-[1.05]">
            Let&apos;s Create Something
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/01.jpg' },
                { id: '2', img: '/images/agent/02.jpg' },
                { id: '3', img: '/images/agent/03.jpg' },
              ]}
            />
            Extraordinary
          </h2>
        </TextAppearAnimation>
        <WowButton href="/contact" className="mt-10 px-10 py-5 text-base">
          Let&apos;s work together
        </WowButton>
      </RevealWrapper>
    </section>
  )
}
