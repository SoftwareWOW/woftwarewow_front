'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import ButtonComponent, { ButtonComponentList } from '@/components/wow/shared/ButtonComponent'
import InstrumentText from '@/components/wow/shared/InstrumentText'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import {
  CalendarClock,
  Cpu,
  Database,
  MessageCircleQuestion,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { INTELLIGENCE_PRACTICAL_AI } from './intelligence-content'

const iconMap: Record<(typeof INTELLIGENCE_PRACTICAL_AI.workflowSteps)[number]['icon'], LucideIcon> = {
  message: MessageCircleQuestion,
  cpu: Cpu,
  database: Database,
  users: Users,
  calendar: CalendarClock,
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState<Set<number>>(new Set())

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const items = Array.from(node.querySelectorAll('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.reveal)
            setVisible((prev) => new Set(prev).add(index))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -5% 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function useScaleToFit() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState({ scale: 1, height: 0 })

  useEffect(() => {
    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    const update = () => {
      const isRow = window.matchMedia('(min-width: 768px)').matches
      if (!isRow) {
        setLayout({ scale: 1, height: inner.offsetHeight })
        return
      }

      const available = outer.clientWidth
      const needed = inner.scrollWidth
      const scale = needed > 0 && available > 0 ? Math.min(1, available / needed) : 1
      setLayout({ scale, height: inner.offsetHeight * scale })
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(outer)
    observer.observe(inner)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return { outerRef, innerRef, scale: layout.scale, height: layout.height }
}

function WorkflowConnector({ delay = 0, direction = 'horizontal' }: { delay?: number; direction?: 'horizontal' | 'vertical' }) {
  if (direction === 'vertical') {
    return (
      <div className="flex flex-col items-center py-1 md:hidden" aria-hidden>
        <span
          className="h-5 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:2px_14px]"
          style={{ animationDelay: `${delay}ms` }}
        />
      </div>
    )
  }

  return (
    <div
      className="hidden shrink-0 items-center self-center md:flex md:w-8 lg:w-12 xl:w-16"
      aria-hidden
    >
      <span
        className="h-[2px] w-full animate-flow-dash-march bg-[repeating-linear-gradient(90deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:14px_2px]"
        style={{ animationDelay: `${delay}ms` }}
      />
    </div>
  )
}

function WorkflowCard({
  index,
  title,
  caption,
  iconKey,
  shown,
}: {
  index: number
  title: string
  caption: string
  iconKey: (typeof INTELLIGENCE_PRACTICAL_AI.workflowSteps)[number]['icon']
  shown: boolean
}) {
  const Icon = iconMap[iconKey]

  return (
    <div
      data-reveal={index}
      className={[
        'group relative flex min-h-[168px] w-[min(100%,240px)] shrink-0 flex-col rounded-radius-sm border border-secondary/15 bg-background px-4 py-5 transition-colors duration-300 ease-out dark:border-backgroundBody/20 dark:bg-background sm:w-[220px] md:w-[200px] lg:w-[220px]',
        'hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/20',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
      ].join(' ')}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <span className="inline-flex size-10 items-center justify-center rounded-radius-sm bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 dark:bg-primary/20">
          <Icon className="size-5" strokeWidth={1.5} aria-hidden />
        </span>
      </div>
      <h3 className="mb-2 text-base font-semibold normal-case leading-snug tracking-normal text-secondary dark:text-backgroundBody">
        {title}
      </h3>
      <p className="text-sm leading-relaxed tracking-normal text-[#808080] dark:text-backgroundBody/70">{caption}</p>
    </div>
  )
}

export default function IntelligencePracticalAiHeroSection() {
  const content = INTELLIGENCE_PRACTICAL_AI
  const { ref, visible } = useReveal<HTMLDivElement>()
  const { outerRef, innerRef, scale, height } = useScaleToFit()

  return (
    <section className="relative overflow-hidden bg-background px-3 pt-12 transition-colors duration-300 dark:bg-background sm:pt-12 md:px-4 lg:pt-[70px] xl:pt-[80px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 6%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[35%] h-[min(70vw,480px)] w-[min(85vw,720px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl dark:opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(97, 92, 206, 0.45) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">
        <div className="mb-10 text-center md:mb-14 lg:mb-16">
          <RevealWrapper className="mb-5 flex justify-center">
            <SectionLabel>{content.eyebrow}</SectionLabel>
          </RevealWrapper>
          <TextAppearAnimation>
            <h1 className="text-appear mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.75rem)] font-normal leading-[1.12] tracking-[-0.03em]">
              {content.titleBefore} <InstrumentText>{content.titleAccent}</InstrumentText>
            </h1>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#808080] md:text-lg">
              {content.description}
            </p>
          </TextAppearAnimation>
        </div>

        <div ref={ref} className="relative mx-auto min-w-0 max-w-6xl">
          <div
            ref={outerRef}
            className="flex w-full min-w-0 justify-center overflow-hidden"
            style={{ height: height > 0 ? height : undefined }}
          >
            <div
              style={{
                transform: scale < 1 ? `scale(${scale})` : undefined,
                transformOrigin: 'top center',
              }}
            >
              <div
                ref={innerRef}
                className="flex flex-col items-center gap-0 md:flex-row md:items-stretch md:justify-center"
              >
                {content.workflowSteps.map((step, index) => (
                  <Fragment key={step.title}>
                    <WorkflowCard
                      index={index}
                      title={step.title}
                      caption={step.caption}
                      iconKey={step.icon}
                      shown={visible.has(index)}
                    />
                    {index < content.workflowSteps.length - 1 && (
                      <>
                        <WorkflowConnector delay={index * 120} direction="vertical" />
                        <WorkflowConnector delay={index * 120} direction="horizontal" />
                      </>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        <RevealWrapper className="reveal-me mt-10 flex justify-center md:mt-14">
          <ButtonComponentList>
            <ButtonComponent href={content.secondaryCtaHref} variant="white">
              {content.secondaryCta}
            </ButtonComponent>
          </ButtonComponentList>
        </RevealWrapper>
      </div>
    </section>
  )
}
