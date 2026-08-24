import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { getDivisionSiteConfig } from '@/components/wow/divisions/division-site-config'
import type { DivisionId } from '@/components/wow/nav/nav-brand-assets'

type DivisionPlaceholderPageProps = {
  divisionId: DivisionId
}

export default function DivisionPlaceholderPage({ divisionId }: DivisionPlaceholderPageProps) {
  const config = getDivisionSiteConfig(divisionId)

  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-28">
        <HeroGradientAnimation />
        <div className="container relative z-10">
          <RevealWrapper className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <SectionLabel className="mb-4">{config.name}</SectionLabel>
            <h1 className="mb-4 mt-3.5">{config.name}</h1>
            <p className="mx-auto max-w-2xl text-[#808080]">{config.tagline}</p>
            <div className="mt-8 md:mt-10">
              <ButtonComponentList className="flex justify-center" itemClassName="block">
                <ButtonComponent href={config.cta.href} variant="primary">
                  {config.cta.label}
                </ButtonComponent>
              </ButtonComponentList>
            </div>
          </RevealWrapper>
        </div>
      </section>

      <section id="services" className="scroll-mt-28">
        <div className="container">
          <RevealWrapper className="mx-auto max-w-3xl rounded-radius-md border border-black/10 bg-backgroundBody p-8 text-center dark:border-white/10 dark:bg-dark md:p-12">
            <h2 className="text-3xl tracking-normal md:text-4xl">More Coming Soon</h2>
            <p className="mt-4 text-base leading-relaxed text-[#808080] md:text-lg">
              This {config.name} site is live with its own branding, navigation, and footer. Full division content is
              being expanded next.
            </p>
          </RevealWrapper>
        </div>
      </section>
    </div>
  )
}
