import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import type { CmsHeroImage } from '@/lib/strapi/mappers/page-sections'
import Image from 'next/image'

const DEFAULT_IMAGE: CmsHeroImage = {
  src: '/images/home-5/hero-img.png',
  alt: 'Growing SMB teams working with WOW',
}

type WhySmbsHeroProps = {
  badgeTitle?: string
  title?: string
  description?: string
  images?: CmsHeroImage[]
}

/** Layout: IndustriesHero — split copy + media. */
const WhySmbsHero = ({
  badgeTitle = 'Why SMBs',
  title = 'Small businesses deserve big capabilities.',
  description = 'We built WOW Superagency to give small and growing businesses access to the expertise, technology and growth capabilities they need to compete—without the complexity of managing multiple disconnected providers.',
  images,
}: WhySmbsHeroProps) => {
  const heroImage = images?.[0] ?? DEFAULT_IMAGE

  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          <div className="w-full max-w-[640px] text-center lg:text-left">
            <SectionLabel className="mx-auto mb-4 lg:mx-0">{badgeTitle}</SectionLabel>

            <h1 className="text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              {title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#808080] max-lg:mx-auto md:text-lg">
              {description}
            </p>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <ButtonComponentList className="flex" itemClassName="max-md:w-full">
                <ButtonComponent href="/contact" variant="primary" fullWidth>
                  Talk to an Expert
                </ButtonComponent>
              </ButtonComponentList>
              <ButtonComponentList className="flex" itemClassName="max-md:w-full">
                <ButtonComponent href="/about/why-us" variant="secondary" fullWidth>
                  Discover Our Approach
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </div>

          <figure className="w-full max-w-[560px] shrink-0 overflow-hidden rounded-2xl bg-[#D9D9D9] dark:bg-[#3A3A3A] lg:max-w-[48%]">
            <Image
              src={heroImage.src}
              alt={heroImage.alt ?? 'Growing SMB teams working with WOW'}
              width={720}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default WhySmbsHero
