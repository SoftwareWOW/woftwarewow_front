import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: blog BlogDetailsList — 3-column image/title/description/button cards (same as WhiteLabelCapabilities). */
type ConnectedExpertiseProps = Partial<CmsTechnologiesSection>

const DEFAULT_CAPABILITY_CARDS = [
  {
    title: 'WOW Host',
    description: 'Hosting, cloud & infrastructure',
    href: '/contact',
    image: '/images/wow/nav/cards/Host.png',
  },
  {
    title: 'SoftwareWOW',
    description: 'Applications & system integrations',
    href: '/contact',
    image: '/images/wow/nav/cards/Softwaerwow.png',
  },
  {
    title: 'WOW Intelligence',
    description: 'AI & business automation',
    href: '/contact',
    image: '/images/wow/nav/cards/Intelligent.png',
  },
  {
    title: 'WOW Websites',
    description: 'Web platforms',
    href: '/contact',
    image: '/images/wow/nav/cards/Website.png',
  },
  {
    title: 'WOW Accelerate',
    description: 'CRM & growth systems',
    href: '/contact',
    image: '/images/wow/nav/cards/Accelerate.png',
  },
] as const

const DEFAULT_HEADER = {
  eyebrow: 'One Package. Connected Expertise.',
  title: 'One infrastructure.',
  accentTitle: 'Connected expertise.',
  description:
    'Bring hosting, software and intelligent technology together through one connected team.',
}

const ConnectedExpertise = ({
  eyebrow = DEFAULT_HEADER.eyebrow,
  title = DEFAULT_HEADER.title,
  accentTitle = DEFAULT_HEADER.accentTitle,
  description = DEFAULT_HEADER.description,
  items,
}: ConnectedExpertiseProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )
  const mergedItems = mergeFeatureItems([...DEFAULT_CAPABILITY_CARDS], items)

  return (
    <section id="connected-expertise">
      <div className="container">
        <div className="mb-10 text-center md:mb-16">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{header.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto">
              {header.title}
              {header.accentTitle ? (
                <>
                  {' '}
                  <InstrumentText>{header.accentTitle}</InstrumentText>
                </>
              ) : null}
            </h2>
          </TextAppearAnimation>
          {header.description ? (
            <RevealWrapper className="reveal-me">
              <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">
                {header.description}
              </p>
            </RevealWrapper>
          ) : null}
        </div>

        <RevealWrapper className="grid grid-cols-1 items-stretch justify-items-center gap-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {mergedItems.map((item, index) => (
            <RevealWrapper key={item.title} className="group mx-auto flex w-full flex-col xl:max-w-[370px]">
              <Link href={item.href ?? '/contact'}>
                <figure className="mb-6 overflow-hidden rounded-radius-sm xl:aspect-[370/399]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-125"
                  />
                </figure>
              </Link>

              <div className="blog-title">
                <Link href={item.href ?? '/contact'}>
                  <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">{item.title}</h3>
                </Link>
                <p className="font-poppins mb-5 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] text-[#808080] md:mb-10 md:mt-5">
                  {item.description}
                </p>
                <ButtonComponent href={item.href ?? '/contact'} variant={index === 0 ? 'primary' : 'white'}>
                  READ MORE
                </ButtonComponent>
              </div>
            </RevealWrapper>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ConnectedExpertise
