import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Image from 'next/image'
import Link from 'next/link'

/** Layout: IndustriesHero — split copy + media with review social proof. */
const WhySmbsHero = () => {
  return (
    <section className="relative overflow-hidden bg-background px-3 pt-28 transition-colors duration-300 dark:bg-background sm:pt-32 md:px-4 lg:pt-[140px] xl:pt-[160px]">
      <div className="relative z-10 mx-auto max-w-[1320px]">
        <RevealWrapper className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14 xl:gap-16">
          <div className="w-full max-w-[640px] text-center lg:text-left">
            <SectionLabel className="mx-auto mb-4 lg:mx-0">Why SMBs</SectionLabel>

            <h1 className="text-[clamp(2rem,5vw,4rem)] font-normal leading-[1.1] tracking-[-0.03em] text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]">
              Built for businesses that need to grow — without growing complexity.
            </h1>

            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <figure className="flex items-center gap-2">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={37} viewBox="0 0 36 37" fill="none">
                    <circle cx={18} cy="18.457" r={18} className="fill-backgroundBody dark:fill-secondary" />
                    <circle
                      cx={18}
                      cy="18.457"
                      r="17.5"
                      className="stroke-[#181818] dark:stroke-[#EDF0F5]"
                      strokeOpacity="0.1"
                    />
                    <path
                      d="M25.5754 16.1759L20.6567 15.4234L18.4521 10.7204C18.2874 10.3692 17.7121 10.3692 17.5474 10.7204L15.3434 15.4234L10.4248 16.1759C10.0208 16.238 9.85943 16.73 10.1428 17.0205L13.7161 20.6886L12.8714 25.8743C12.8041 26.2863 13.2434 26.5954 13.6068 26.3931L18.0001 23.9615L22.3934 26.3938C22.7534 26.5941 23.1967 26.2909 23.1287 25.875L22.2841 20.6893L25.8574 17.0211C26.1407 16.73 25.9787 16.238 25.5754 16.1759Z"
                      fill="#12D8CC"
                    />
                  </svg>
                </span>
                <figcaption className="text-left">
                  <p className="text-base font-semibold leading-[1.1] text-[#0D0D0D] dark:text-[#F2F2F2]">4.5</p>
                  <p className="mt-1 text-sm leading-[1.1] text-[#808080]">Positive Review</p>
                </figcaption>
              </figure>

              <div className="flex [&>*:not(:first-child)]:-ml-4">
                <Image src="/images/home-5/review-1.png" alt="Client" width={52} height={52} className="size-[52px]" />
                <Image src="/images/home-5/review-2.png" alt="Client" width={52} height={52} className="size-[52px]" />
                <Image src="/images/home-5/review-3.png" alt="Client" width={52} height={52} className="size-[52px]" />
                <Link
                  href="/contact"
                  className="group relative size-[52px] cursor-pointer rounded-full border-[1.9px] border-backgroundBody bg-secondary p-4 dark:bg-backgroundBody"
                >
                  <figure>
                    <img
                      src="/images/home-5/ArrowUpRight.svg"
                      alt="Arrow Icon"
                      className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
                    />
                    <img
                      src="/images/home-5/ArrowUpRight.svg"
                      alt="Arrow Icon"
                      className="absolute inline -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:hidden"
                    />
                    <img
                      src="/images/home-5/ArrowUpRight-dark.svg"
                      alt="Arrow Icon"
                      className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:inline"
                    />
                    <img
                      src="/images/home-5/ArrowUpRight-dark.svg"
                      alt="Arrow Icon"
                      className="absolute hidden -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:inline"
                    />
                  </figure>
                </Link>
              </div>

              <p className="text-base leading-[1.2] text-[#0D0D0D] dark:text-[#F2F2F2]">
                <span className="text-primary">Trusted by growing SMBs</span>
                <br />
                Across technology, marketing &amp; AI
              </p>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <ButtonComponentList itemClassName="max-md:w-full">
                <ButtonComponent href="/contact" variant="primary" fullWidth>
                  Talk About Your Next Move
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </div>

          <figure className="w-full max-w-[560px] shrink-0 overflow-hidden rounded-radius-md lg:max-w-[48%]">
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
