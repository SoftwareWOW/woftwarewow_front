'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
import { mergeFeatureItems } from '@/lib/strapi/cms-section-props'
import type { CmsTechnologiesSection } from '@/lib/strapi/mappers/page-sections'

addCollection(logos)
addCollection(simpleIcons)

const DEFAULT_ITEMS = [
  { name: 'Salesforce', icon: 'logos:salesforce' },
  { name: 'Zapier', icon: 'logos:zapier-icon' },
  { name: 'Make', icon: 'simple-icons:make' },
  { name: 'Integromat', icon: 'simple-icons:integromat' },
  { name: 'WordPress', icon: 'logos:wordpress-icon' },
  { name: 'HubSpot', icon: 'logos:hubspot' },
  { name: 'Shopify', icon: 'logos:shopify' },
]

type Props = Partial<CmsTechnologiesSection> & {
  headline?: string
  accentTitle?: string
}

/** Layout: OurTools / Home-06 ClientV4 — bordered icon row for platforms. */
const AutomationTools = ({
  eyebrow = 'Our Tools',
  headline,
  accentTitle,
  title = 'Where appropriate, we connect workflows with the platforms your business already depends on—helping information and actions move between them automatically.',
  description,
  items,
}: Props = {}) => {
  const mergedItems = mergeFeatureItems(
    DEFAULT_ITEMS.map(({ name }) => ({ title: name, description: '' })),
    items,
  ).map((item, index) => ({
    ...DEFAULT_ITEMS[index],
    name: item.title,
    description: item.description ?? '',
  }))

  const capabilityItems = items?.length
    ? mergedItems.slice(0, items.length).filter((item) => item.name)
    : []

  const displayIcons = capabilityItems.length
    ? mergedItems.slice(0, capabilityItems.length)
    : mergedItems

  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{eyebrow}</SectionLabel>
          </RevealWrapper>
          {headline ? (
            <RevealWrapper className="reveal-me">
              <h2 className="mb-3">
                {headline}
                {accentTitle ? <InstrumentText> {accentTitle}</InstrumentText> : null}
              </h2>
            </RevealWrapper>
          ) : null}
          {description ? (
            <TextAppearAnimation>
              <p className="text-appear mx-auto max-w-3xl text-base leading-relaxed text-[#808080]">{description}</p>
            </TextAppearAnimation>
          ) : !headline ? (
            <TextAppearAnimation>
              <h2 className="text-appear mx-auto mb-5 max-w-5xl text-[clamp(1rem,1.714vw,1.75rem)] font-light leading-relaxed">
                {title}
              </h2>
            </TextAppearAnimation>
          ) : null}
        </div>

        {capabilityItems.some((item) => item.description) ? (
          <RevealWrapper className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {capabilityItems.map((item) => (
              <div
                key={item.name}
                className="border px-6 py-8 text-center dark:border-dark md:py-10"
              >
                <h5 className="mb-3">{item.name}</h5>
                {item.description ? (
                  <p className="text-base leading-relaxed text-[#808080]">{item.description}</p>
                ) : null}
              </div>
            ))}
          </RevealWrapper>
        ) : (
          <RevealWrapper className="mx-auto grid w-fit grid-cols-2 border-l border-t dark:border-dark sm:grid-cols-4 lg:grid-cols-7">
            {displayIcons.map((tool) => (
              <figure
                key={tool.name}
                className="flex size-[110px] items-center justify-center border-b border-r dark:border-dark sm:size-[120px] md:size-[130px]"
              >
                <Icon
                  icon={tool.icon}
                  width={48}
                  height={48}
                  aria-label={tool.name}
                  className="text-secondary dark:text-backgroundBody"
                />
              </figure>
            ))}
          </RevealWrapper>
        )}
      </div>
    </section>
  )
}

export default AutomationTools
