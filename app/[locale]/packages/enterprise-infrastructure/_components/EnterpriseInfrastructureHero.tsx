import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import HeroHoverImages from './HeroHoverImages'

type PageHeroProps = {
  badgeTitle?: string
  title?: string
  italicTitle?: string
  description?: string
  images?: { src: string; alt?: string }[]
}

/** Layout: Home-13 HeroV13 — centered headline + dual CTAs + hover-expand images. */
const EnterpriseInfrastructureHero = ({
  badgeTitle = 'Enterprise Infrastructure',
  title = 'Infrastructure built for ',
  italicTitle = "what's next.",
  description =
    'Secure, reliable and scalable infrastructure designed to support your growing business.',
  images,
}: PageHeroProps) => {
  return (
    <section
      className="overflow-hidden pt-[120px] sm:pt-[135px] md:pt-[150px] lg:pt-44 xl:pt-48"
      aria-labelledby="enterprise-infrastructure-heading"
    >
      <div className="relative">
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <img
            src="/images/hero-gradient-bg.png"
            alt=""
            aria-hidden
            className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <RevealWrapper className="container">
          <div className="mb-4 flex justify-center">
            <SectionLabel>{badgeTitle}</SectionLabel>
          </div>
          <h1 id="enterprise-infrastructure-heading" className="text-center">
            {title}
            {italicTitle ? <InstrumentText>{italicTitle}</InstrumentText> : null}
          </h1>
          {description ? (
            <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080]">{description}</p>
          ) : null}
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/contact" variant="primary">
                Build Your Infrastructure
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href="/meet" variant="secondary">
                Talk to an Expert
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
      <HeroHoverImages images={images} />
    </section>
  )
}

export default EnterpriseInfrastructureHero
