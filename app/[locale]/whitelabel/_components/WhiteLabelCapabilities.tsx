import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import { capabilityCards as DEFAULT_CAPABILITYCARDS } from '../_data/whitelabel'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'
import { mergeFeatureItems, mergeSectionHeader } from '@/lib/strapi/cms-section-props'

/** Layout: blog BlogDetailsList — 3-column image/title/description/button cards. */
type WhiteLabelCapabilitiesProps = Partial<CmsTechnologiesSection>

const DEFAULT_HEADER = {
  eyebrow: 'YOUR CONVERSATION',
  title: "Bring the Challenge. We'll Bring the Expertise.",
  accentTitle: '',
  description:
    'Our partner network allows us to extend capabilities, connect specialized expertise, and build stronger solutions without limiting clients to what one agency can do alone.',
}

const WhiteLabelCapabilities = ({
  eyebrow = DEFAULT_HEADER.eyebrow,
  title = DEFAULT_HEADER.title,
  accentTitle = DEFAULT_HEADER.accentTitle,
  description = DEFAULT_HEADER.description,
  items,
}: WhiteLabelCapabilitiesProps = {}) => {
  const header = mergeSectionHeader(
    { eyebrow, title, accentTitle, description },
    { eyebrow, title, accentTitle, description },
  )
  const mergedItems = mergeFeatureItems([...DEFAULT_CAPABILITYCARDS], items)

  return (
    <section id="capabilities">
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
              <Link href={item.href}>
                <figure className="mb-6 overflow-hidden rounded-radius-sm xl:aspect-[370/399]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-125"
                  />
                </figure>
              </Link>

              <div className="blog-title">
                <Link href={item.href}>
                  <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">{item.title}</h3>
                </Link>
                <p className="font-poppins mb-5 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] text-[#808080] md:mb-10 md:mt-5">
                  {item.description}
                </p>
                <ButtonComponent href={item.href} variant={index === 0 ? 'primary' : 'white'}>
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

export default WhiteLabelCapabilities
