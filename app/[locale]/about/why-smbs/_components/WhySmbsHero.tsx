import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'

/** Layout: IndustriesHero — split copy + media. */
const WhySmbsHero = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          <div className="w-full max-w-[640px] text-center lg:text-left">
            <SectionLabel className="mx-auto mb-4 lg:mx-0">Why SMBs</SectionLabel>

            <h1 className="text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              Small businesses deserve big capabilities.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#808080] max-lg:mx-auto md:text-lg">
              We built WOW Superagency to give small and growing businesses access to the expertise, technology and
              growth capabilities they need to compete—without the complexity of managing multiple disconnected
              providers.
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
              src="/images/home-5/hero-img.png"
              alt="Growing SMB teams working with WOW"
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
