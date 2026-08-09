'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { TechCard, type Tech } from '@/components/wow/shared/TechStackShared'
import Marquee from 'react-fast-marquee'

/** Platforms in our ecosystem — not claimed co-branded partner logos. */
const rowOne: Tech[] = [
  { name: 'OpenAI', icon: 'simple-icons:openai', invertInDark: true },
  { name: 'Next.js', icon: 'simple-icons:nextdotjs', invertInDark: true },
  { name: 'React', icon: 'logos:react' },
  { name: 'HubSpot', icon: 'simple-icons:hubspot', color: '#FF7A59' },
  { name: 'AWS', icon: 'simple-icons:amazonaws', color: '#FF9900' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Shopify', icon: 'simple-icons:shopify', color: '#96BF48' },
  { name: 'Stripe', icon: 'logos:stripe' },
]

const rowTwo: Tech[] = [
  { name: 'Vercel', icon: 'simple-icons:vercel', invertInDark: true },
  { name: 'Cloudflare', icon: 'logos:cloudflare-icon' },
  { name: 'Meta Ads', icon: 'logos:meta-icon' },
  { name: 'Google Ads', icon: 'logos:google-ads' },
  { name: 'Sanity', icon: 'simple-icons:sanity', color: '#F03E2F' },
  { name: 'Docker', icon: 'logos:docker-icon' },
  { name: 'Anthropic', icon: 'simple-icons:anthropic', invertInDark: true },
  { name: 'Salesforce', icon: 'logos:salesforce' },
]

function MarqueeRow({ items, direction = 'left' }: { items: Tech[]; direction?: 'left' | 'right' }) {
  return (
    <Marquee speed={45} pauseOnHover direction={direction} gradient={false} className="overflow-hidden">
      <div className="flex items-stretch gap-4 py-2 pl-4">
        {[...items, ...items].map((item, index) => (
          <div key={`${item.name}-${index}`} className="w-40 shrink-0 sm:w-44">
            <TechCard
              name={item.name}
              icon={item.icon}
              color={item.color}
              invertInDark={item.invertInDark}
            />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

/** Layout: Home-03 Clients — dual marquees, theme-aware background. */
const PartnerEcosystem = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mb-10 md:mb-14">
        <RevealWrapper className="reveal-me mb-3 flex justify-center">
          <SectionLabel>Ecosystem</SectionLabel>
        </RevealWrapper>
        <RevealWrapper className="reveal-me mb-3 text-center">
          <h2>
            Our partner <InstrumentText>ecosystem</InstrumentText>
          </h2>
        </RevealWrapper>
        <RevealWrapper className="reveal-me">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-[#808080]">
            Platforms across technology, marketing, infrastructure, and creative that strengthen how we deliver.
          </p>
        </RevealWrapper>
      </div>

      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark sm:w-20"
        />

        <RevealWrapper>
          <MarqueeRow items={rowOne} />
        </RevealWrapper>

        <RevealWrapper className="mt-4">
          <MarqueeRow items={rowTwo} direction="right" />
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PartnerEcosystem
