import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'

import Link from 'next/link'

const avatars = [
  '/images/avatar/review-1.png',
  '/images/avatar/review-2.png',
  '/images/avatar/review-3.png',
  '/images/avatar/review-4.png',
]

/** Layout: Home-05 HeroV5 — two-column hero with social proof + dual CTAs. */
const LearningEventsHero = () => {
  return (
    <section
      className="relative overflow-hidden pt-24 md:pt-[100px] xl:pt-[120px]"
      aria-labelledby="learning-events-heading"
    >
      <div className="pointer-events-none absolute left-0 top-0 -z-10 blur-[65px] md:-top-[10%] lg:-left-[17%] 2xl:left-0">
        <img src="/images/hero-gradient-background.png" alt="" aria-hidden className="-top-[10%] left-0 scale-50" />
      </div>

      <RevealWrapper className="container flex flex-col items-center justify-between gap-10 xl:flex-row xl:gap-14">
        <div className="w-full max-w-xl xl:max-w-[560px]">
          <SectionLabel className="mb-4">Learning &amp; Events</SectionLabel>

          <h1
            id="learning-events-heading"
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.1] tracking-[-0.03em]"
          >
            Learn. Connect. Grow.
          </h1>

          <div className="relative mt-5 max-w-lg">
            <p className="text-base leading-relaxed text-[#808080] md:text-lg">
              Practical learning, expert insights and live experiences designed to help business owners and teams build
              skills, discover new ideas and move forward.
            </p>
          
          </div>

          <div className="mt-8">
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
                    fill="#4A9EFF"
                  />
                </svg>
              </span>
              <figcaption>
                <p className="text-base font-semibold leading-[1.1] text-secondary dark:text-backgroundBody">4.5</p>
                <p className="mt-1 text-sm leading-[1.1] text-[#808080]">Positive Review</p>
              </figcaption>
            </figure>

            <div className="my-3 flex items-center [&>*:not(:first-child)]:-ml-4">
              {avatars.map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-[52px] rounded-full border-2 border-background object-cover dark:border-secondary"
                />
              ))}
              <Link
                href="/wowevents"
                className="group relative size-[52px] shrink-0 cursor-pointer rounded-full border-[1.9px] border-backgroundBody bg-secondary p-4 dark:bg-backgroundBody"
                aria-label="View events"
              >
                <figure>
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight.svg"
                    alt=""
                    className="absolute inline -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:hidden"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0 dark:inline"
                  />
                  <img
                    src="/images/home-5/ArrowUpRight-dark.svg"
                    alt=""
                    className="absolute hidden -translate-x-5 translate-y-6 opacity-0 transition-all duration-500 group-hover:-translate-x-[2px] group-hover:translate-y-[1%] group-hover:opacity-100 dark:inline"
                  />
                </figure>
              </Link>
            </div>

            <p className="text-base leading-[1.2] text-secondary dark:text-backgroundBody">
              <span className="text-primary">Trusted by 100+</span>
              <br />
              Clients Across the Globe
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:mt-14">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/wowhub" variant="primary">
                Explore Learning
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/wowevents" variant="secondary">
                View Events
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </div>

        <RevealWrapper as="figure" className="reveal-me w-full max-w-[520px] shrink-0 xl:max-w-[560px]">
          <img
            src="/images/wow/Hero/devision/Education.jpg"
            alt="Professionals collaborating over business insights"
            className="h-auto w-full rounded-radius-md object-cover"
          />
        </RevealWrapper>
      </RevealWrapper>
    </section>
  )
}

export default LearningEventsHero
