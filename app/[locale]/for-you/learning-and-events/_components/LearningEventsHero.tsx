import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { CMS_IMAGE_SIZES, CmsResponsiveImage, type CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'

const TEAM_HERO_IMAGE_BASE = '/images/wow/Hero/career/team'

/** Avatar wrap.png first (face visible), then numbered wraps — static only. */
const HERO_REVIEW_AVATARS = [
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-1.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-2.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-3.png`,
  `${TEAM_HERO_IMAGE_BASE}/Avatar wrap-4.png`,
] as const

const STATIC_HERO_MAIN_IMAGE = {
  src: `${TEAM_HERO_IMAGE_BASE}/teamimage.png`,
  alt: 'Learning and events',
}

/** Layout: Home-05 HeroV5 — two-column hero with social proof + dual CTAs. */
const LearningEventsHero = ({
  badgeTitle = 'Learning & Events',
  title = 'Learn, connect, and',
  italicTitle = 'grow.',
  description =
    'Access workshops, events, and learning experiences designed to help businesses build skills and make better decisions.',
  images,
}: CmsHeroComponentProps) => {
  const cmsMain = images?.[0]
  const mainHeroImage = cmsMain?.src
    ? cmsMain
    : { src: STATIC_HERO_MAIN_IMAGE.src, alt: STATIC_HERO_MAIN_IMAGE.alt }

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
          <SectionLabel className="mb-4">{badgeTitle}</SectionLabel>

          <h1
              id="learning-events-heading"
              className="text-5xl font-normal leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] 2xl:text-8xl 2xl:leading-[1.17] 2xl:tracking-[-2.88px]"
            >
              {title}
              <br className="hidden lg:block" />
              {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
            </h1>

          {description ? (
            <div className="relative mt-5 max-w-lg">
              <p className="text-base leading-relaxed text-[#808080] md:text-lg">{description}</p>
            </div>
          ) : null}

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
              {HERO_REVIEW_AVATARS.map((src) => (
                <img
                  key={src}
                  src={encodeURI(src)}
                  alt=""
                  className="size-[52px] shrink-0 rounded-full object-cover"
                />
              ))}
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
          <CmsResponsiveImage
            image={mainHeroImage}
            sizes={CMS_IMAGE_SIZES.sideColumn}
            width={mainHeroImage.width ?? 560}
            height={mainHeroImage.height ?? 640}
            className="h-auto w-full rounded-radius-md object-cover"
          />
        </RevealWrapper>
      </RevealWrapper>
    </section>
  )
}

export default LearningEventsHero
