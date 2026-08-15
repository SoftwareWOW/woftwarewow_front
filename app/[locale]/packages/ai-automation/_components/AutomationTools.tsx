'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'

addCollection(logos)
addCollection(simpleIcons)

const tools = [
  { name: 'Salesforce', icon: 'logos:salesforce' },
  { name: 'Zapier', icon: 'logos:zapier-icon' },
  { name: 'Make', icon: 'simple-icons:make' },
  { name: 'Integromat', icon: 'simple-icons:integromat' },
  { name: 'WordPress', icon: 'logos:wordpress-icon' },
  { name: 'HubSpot', icon: 'logos:hubspot' },
  { name: 'Shopify', icon: 'logos:shopify' },
]

/** Layout: OurTools / Home-06 ClientV4 — bordered icon row for platforms. */
const AutomationTools = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Our Tools</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 max-w-5xl text-[clamp(1rem,1.714vw,1.75rem)] font-normal leading-relaxed">
              Where appropriate, we connect workflows with the platforms your business already depends on—helping information and actions move between them automatically.
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto grid w-fit grid-cols-2 border-l border-t dark:border-dark sm:grid-cols-4 lg:grid-cols-7">
          {tools.map((tool) => (
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
      </div>
    </section>
  )
}

export default AutomationTools
