import RevealWrapper from '@/components/animation/RevealWrapper'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import WowText from '@/components/wow/shared/WowText'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'

const DEFAULT_TEAMS = [
  { name: 'Marketing', description: 'SEO, content, paid media and campaigns that create demand.' },
  { name: 'Social', description: 'Organic and paid social that builds community and pipeline.' },
  { name: 'Accelerate', description: 'Funnels, CRM, automation and sales systems that convert.' },
  { name: 'Websites', description: 'High-performance sites and landing experiences that convert traffic.' },
  { name: 'Design', description: 'Brand and creative that make growth assets unmistakable.' },
  { name: 'Intelligence', description: 'Analytics and AI that clarify what to do next.' },
]

type SpecialistTeamsProps = Partial<CmsTechnologiesSection> & {
  variant?: 'divisions' | 'metrics'
  featureImage?: { src: string; alt?: string }
}

/** Layout: Home-16 ServicesV14 — 6 division cards or SEO metric cards. */
const SpecialistTeams = ({
  eyebrow = 'Powered by Specialist Teams',
  title = 'The right WOW divisions —',
  accentTitle = 'working together',
  description =
    "Marketing, Social, Accelerate, Websites, Design and Intelligence collaborate so growth isn't stuck in one channel or one team.",
  items,
  variant = 'divisions',
  featureImage,
}: SpecialistTeamsProps = {}) => {
  const displayTeams = mergeFeatureItems(
    DEFAULT_TEAMS.map((team) => ({ ...team, title: team.name })),
    items,
  ).map((team, index) => ({
    ...DEFAULT_TEAMS[index],
    name: team.title,
    description: team.description ?? DEFAULT_TEAMS[index]?.description ?? '',
  }))

  return (
    <section>
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>{eyebrow}</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <h2 className="mb-3">
            {variant === 'divisions' ? (
              <>
                The right <WowText className="text-[clamp(2rem,5vw,3.5rem)]">WOW</WowText> divisions —
                <InstrumentText> {accentTitle}</InstrumentText>
              </>
            ) : (
              <>
                {title}
                <InstrumentText> {accentTitle}</InstrumentText>
              </>
            )}
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-[770px] text-base leading-relaxed text-[#808080]">{description}</p>
        </RevealWrapper>
      </div>

      {featureImage?.src ? (
        <RevealWrapper className="reveal-me mx-auto mb-10 max-w-[1200px] px-4 md:mb-16 md:px-[30px]">
          <figure className="relative aspect-[16/9] w-full overflow-hidden rounded-radius-md border dark:border-dark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featureImage.src} alt={featureImage.alt ?? ''} className="h-full w-full object-cover" />
          </figure>
        </RevealWrapper>
      ) : null}

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {displayTeams.map((team) => (
          <RevealWrapper
            key={team.name}
            className="reveal-me rounded-radius-md border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]"
          >
            <h5 className="mb-2 lg:mb-3">
              {variant === 'divisions' ? (
                <>
                  <WowText className="text-2xl lg:text-3xl">WOW</WowText> <span>{team.name}</span>
                </>
              ) : (
                <span>{team.name}</span>
              )}
            </h5>
            <p className="text-base leading-relaxed text-[#808080]">{team.description}</p>
          </RevealWrapper>
        ))}
      </div>

      {variant === 'divisions' ? (
        <RevealWrapper className="reveal-me mt-8 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href="/services" variant="secondary">
              Explore the WOW Ecosystem
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      ) : null}
    </section>
  )
}

export default SpecialistTeams
