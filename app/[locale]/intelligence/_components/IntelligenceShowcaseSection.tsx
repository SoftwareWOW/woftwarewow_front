import RevealWrapper from '@/components/animation/RevealWrapper'
import Image from 'next/image'
import { INTELLIGENCE_SHOWCASE } from './intelligence-content'

/** Full-width showcase image only. */
export default function IntelligenceShowcaseSection() {
  const content = INTELLIGENCE_SHOWCASE

  return (
    <section className="bg-background transition-colors duration-300 dark:bg-background">
      <div className="container">
        <RevealWrapper className="reveal-me">
          <figure className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-radius-md md:aspect-[21/9] md:min-h-[360px] lg:min-h-[440px]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1152px"
              priority={false}
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}
