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
  { name: 'Stripe', icon: 'logos:stripe' },
  { name: 'Atlassian', icon: 'logos:atlassian' },
  { name: 'HubSpot', icon: 'logos:hubspot' },
  { name: 'Google', icon: 'logos:google-icon' },
  { name: 'AWS', icon: 'logos:aws' },
  { name: 'Microsoft', icon: 'logos:microsoft-icon' },
  { name: 'OpenAI', icon: 'simple-icons:openai' },
]

const NodesIcon = () => (
  <svg width={48} height={48} viewBox="0 0 48 48" fill="none" aria-label="Connected systems" role="img">
    <circle cx="12" cy="14" r="5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
    <circle cx="36" cy="14" r="5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
    <circle cx="24" cy="34" r="5" className="stroke-secondary dark:stroke-backgroundBody" strokeWidth="1.5" />
    <path
      d="M16.5 16.5 21.5 30M31.5 16.5 26.5 30M17 14h14"
      className="stroke-secondary dark:stroke-backgroundBody"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

/** Layout: AutomationTools — equal-cell icon grid. */
const SaasIntegrations = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>Integrations</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 max-w-5xl text-[clamp(1rem,1.714vw,1.75rem)] font-normal leading-relaxed">
              Where it helps, we connect your product to the payments, communication, analytics and business systems
              it needs to work in the real world.
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="mx-auto grid w-fit grid-cols-2 border-l border-t dark:border-dark sm:grid-cols-4 lg:grid-cols-8">
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
          <figure className="flex size-[110px] items-center justify-center border-b border-r dark:border-dark sm:size-[120px] md:size-[130px]">
            <NodesIcon />
          </figure>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default SaasIntegrations
