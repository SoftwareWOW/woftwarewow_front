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
  { name: 'Photoshop', icon: 'logos:adobe-photoshop' },
  { name: 'Blender', icon: 'logos:blender' },
  { name: 'After Effects', icon: 'logos:adobe-after-effects' },
  { name: 'Affinity Designer', icon: 'simple-icons:affinitydesigner' },
  { name: 'Figma', icon: 'logos:figma' },
  { name: 'Illustrator', icon: 'logos:adobe-illustrator' },
  { name: 'CorelDRAW', icon: 'simple-icons:coreldraw' },
]

/** Layout: Home-06 ClientV4 — bordered icon row for creative tools. */
const OurTools = () => {
  return (
    <section>
      <div className="container">
        <div className="mb-8 text-center md:mb-12">
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-5 max-w-3xl">
              Not just an identity. A working system for your brand.
            </h2>
          </TextAppearAnimation>
          <RevealWrapper className="reveal-me flex justify-center">
            <SectionLabel>Our Tools</SectionLabel>
          </RevealWrapper>
        </div>

        <RevealWrapper className="mx-auto flex max-w-5xl flex-wrap justify-center border-x border-t dark:border-dark [&>*:nth-child(7)]:border-r-0 max-md:[&>*:nth-child(even)]:border-r-0 [&>*]:border-b [&>*]:border-r dark:[&>*]:border-dark">
          {tools.map((tool) => (
            <figure
              key={tool.name}
              className="flex size-[110px] items-center justify-center sm:size-[120px] md:size-[130px]"
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

export default OurTools
