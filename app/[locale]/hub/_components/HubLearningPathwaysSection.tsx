import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { HUB_LEARNING_PATHWAYS, HUB_SECTION_INNER, HUB_SECTION_SHELL } from './hub-content'

const IconBars = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none" aria-hidden className="shrink-0">
    <rect width={60} height={60} transform="translate(0.5)" className="fill-backgroundBody dark:fill-secondary" />
    <path
      d="M31.25 12.5C31.25 12.0858 30.9142 11.75 30.5 11.75C30.0858 11.75 29.75 12.0858 29.75 12.5H31.25ZM29.75 47.5C29.75 47.9142 30.0858 48.25 30.5 48.25C30.9142 48.25 31.25 47.9142 31.25 47.5H29.75ZM37.9219 16.875C37.9219 16.4608 37.5861 16.125 37.1719 16.125C36.7577 16.125 36.4219 16.4608 36.4219 16.875H37.9219ZM36.4219 43.125C36.4219 43.5392 36.7577 43.875 37.1719 43.875C37.5861 43.875 37.9219 43.5392 37.9219 43.125H36.4219ZM44.5781 21.25C44.5781 20.8358 44.2423 20.5 43.8281 20.5C43.4139 20.5 43.0781 20.8358 43.0781 21.25H44.5781ZM43.0781 38.75C43.0781 39.1642 43.4139 39.5 43.8281 39.5C44.2423 39.5 44.5781 39.1642 44.5781 38.75H43.0781ZM51.25 25.625C51.25 25.2108 50.9142 24.875 50.5 24.875C50.0858 24.875 49.75 25.2108 49.75 25.625H51.25ZM49.75 34.375C49.75 34.7892 50.0858 35.125 50.5 35.125C50.9142 35.125 51.25 34.7892 51.25 34.375H49.75ZM24.5781 43.125C24.5781 43.5392 23.4139 43.875 23.8281 43.875C24.2423 43.875 24.5781 43.5392 24.5781 43.125H23.0781ZM24.5781 16.875C24.5781 16.4608 24.2423 16.125 23.8281 16.125C23.4139 16.125 23.0781 16.4608 23.0781 16.875H24.5781ZM16.4219 38.75C16.4219 39.1642 16.7577 39.5 17.1719 39.5C17.5861 39.5 17.9219 39.1642 17.9219 38.75H16.4219ZM17.9219 21.25C17.9219 20.8358 17.5861 20.5 17.1719 20.5C16.7577 20.5 16.4219 20.8358 16.4219 21.25H17.9219ZM9.75 34.375C9.75 34.7892 10.0858 35.125 10.5 35.125C10.9142 35.125 11.25 34.7892 11.25 34.375H9.75ZM11.25 25.625C11.25 25.2108 10.9142 24.875 10.5 24.875C10.0858 24.875 9.75 25.2108 9.75 25.625H11.25ZM29.75 12.5V47.5H31.25V12.5H29.75ZM36.4219 16.875V43.125H37.9219V16.875H36.4219ZM43.0781 21.25V38.75H44.5781V21.25H43.0781ZM49.75 25.625V34.375H51.25V25.625H49.75ZM24.5781 43.125V16.875H23.0781V43.125H24.5781ZM17.9219 38.75V21.25H16.4219V38.75H17.9219ZM11.25 34.375V25.625H9.75V34.375H11.25Z"
      className="stroke-secondary dark:stroke-backgroundBody"
    />
  </svg>
)

const IconBolt = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={61} height={60} viewBox="0 0 61 60" fill="none" aria-hidden className="shrink-0">
    <rect width={60} height={60} transform="translate(0.5)" className="fill-backgroundBody dark:fill-secondary" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.0966 10L14.7852 27.7771H24.0966L17.1137 50L46.2137 27.7771H33.4109L40.3937 10H24.0966Z"
      className="stroke-secondary dark:stroke-backgroundBody"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PATHWAY_ICONS: ReactNode[] = [
  <IconBars key="a" />,
  <IconBolt key="b" />,
  <IconBars key="c" />,
  <IconBars key="d" />,
  <IconBolt key="e" />,
]

function PathwayCard({ title, href, icon }: { title: string; href: string; icon: ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex min-h-[140px] items-center gap-5 rounded-radius-md border px-[30px] py-8 transition-colors duration-500 hover:border-transparent hover:bg-backgroundBody dark:border-dark dark:hover:bg-dark md:min-h-[160px]"
    >
      <span>{icon}</span>
      <h5 className="text-lg leading-snug md:text-xl">{title}</h5>
    </Link>
  )
}

export default function HubLearningPathwaysSection() {
  const content = HUB_LEARNING_PATHWAYS
  const topRow = content.items.slice(0, 3)
  const bottomRow = content.items.slice(3)

  return (
    <section className={HUB_SECTION_SHELL}>
      <div className={HUB_SECTION_INNER}>
        <div className="mx-auto max-w-3xl text-center">
          <RevealWrapper className="reveal-me mb-3 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear lg:leading-[1.1]">
              {content.titleBefore}
              <InstrumentText>{content.titleAccent}</InstrumentText>
            </h2>
          </TextAppearAnimation>
        </div>

        <RevealWrapper className="reveal-me grid grid-cols-1 gap-[30px] md:grid-cols-6">
          {topRow.map((item, index) => (
            <div key={item.title} className="md:col-span-2">
              <PathwayCard title={item.title} href={item.href} icon={PATHWAY_ICONS[index]} />
            </div>
          ))}
          {bottomRow.map((item, index) => (
            <div key={item.title} className="md:col-span-3">
              <PathwayCard title={item.title} href={item.href} icon={PATHWAY_ICONS[index + 3]} />
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}
