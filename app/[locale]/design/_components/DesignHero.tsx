import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import DesignHeroHoverImages from './DesignHeroHoverImages'
import { DESIGN_HERO } from './design-content'

export default function DesignHero() {
  const hero = DESIGN_HERO

  return (
    <section
      className="overflow-hidden pt-[30px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px]"
      aria-labelledby="wow-design-heading"
    >
      <div className="relative">
        <div className="h-fw-full absolute left-1/2 top-1/2 -z-10 w-full -translate-x-1/2 -translate-y-1/2 scale-75 blur-[60px]">
          <img
            loading="eager"
            fetchPriority="high"
            src="/images/hero-gradient-bg.png"
            alt=""
            aria-hidden
            className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <RevealWrapper className="container">
          <div className="mb-4 flex justify-center">
            <SectionLabel>{hero.badgeTitle}</SectionLabel>
          </div>
          <h1 id="wow-design-heading" className="text-center">
            {hero.title}
            <InstrumentText>{hero.italicTitle}</InstrumentText>
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center text-[#808080]">{hero.description}</p>
          <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={hero.primaryCta.href} variant="primary">
                {hero.primaryCta.label}
              </ButtonComponent>
            </ButtonComponentList>
            <ButtonComponentList className="flex" itemClassName="block">
              <ButtonComponent href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </ButtonComponent>
            </ButtonComponentList>
          </div>
        </RevealWrapper>
      </div>
      <DesignHeroHoverImages images={[...hero.images]} />
    </section>
  )
}
