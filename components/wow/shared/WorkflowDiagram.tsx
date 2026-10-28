'use client'

import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'

export type WorkflowStep = {
  icon: LucideIcon
  label: string
  caption: string
  tone: 'primary' | 'accent'
}

export type WorkflowRowLayout = {
  /** Step indices into the `steps` array (stable; avoids reference / indexOf issues). */
  stepIndices: number[]
  direction: 'left' | 'right'
  turn: 'left' | 'right' | null
}

const GRID_COLS =
  'grid-cols-[minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)_minmax(3rem,1.25fr)_minmax(0,1fr)]'

const FLOW_COLOR = '#615CCE'

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
      { threshold: 0.15, rootMargin: '0px 0px 0px 0px' },
    )
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function Node({
  step,
  index,
  shown,
}: {
  step: WorkflowStep
  index: number
  shown: boolean
}) {
  const Icon = step.icon
  const accent = step.tone === 'accent'

  return (
    <div
      data-reveal={index}
      className={[
        'group flex w-[108px] flex-col items-center text-center transition-all duration-700 ease-out sm:w-[120px] lg:w-[150px]',
        shown ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0',
      ].join(' ')}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="relative">
        <span
          className="absolute -inset-2 animate-ring-spin rounded-radius-sm border border-dashed border-border opacity-60 transition-opacity group-hover:opacity-100 dark:border-white/10 sm:-inset-3"
          aria-hidden="true"
        />
        <div className="relative flex h-14 w-14 items-center justify-center rounded-radius-sm bg-card transition-transform duration-300 group-hover:scale-110 dark:bg-dark sm:h-16 sm:w-16 lg:h-[74px] lg:w-[74px]">
          <Icon
            className={
              accent
                ? 'h-6 w-6 text-accent sm:h-7 sm:w-7 lg:h-8 lg:w-8'
                : 'h-6 w-6 text-primary sm:h-7 sm:w-7 lg:h-8 lg:w-8'
            }
            strokeWidth={1.5}
          />
        </div>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-radius-sm bg-primary text-[10px] font-light text-primary-foreground sm:h-6 sm:w-6 sm:text-[11px]">
          {index + 1}
        </span>
      </div>

      <p className="mt-2 text-[11px] font-light leading-tight text-foreground dark:text-backgroundBody sm:mt-2.5 sm:text-xs lg:text-sm">
        {step.label}
      </p>
      <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-muted-foreground dark:text-dark-100 sm:text-[11px]">
        {step.caption}
      </p>
    </div>
  )
}

function Connector({
  delay = 0,
  direction = 'right',
}: {
  delay?: number
  direction?: 'left' | 'right'
}) {
  const line = (
    <span
      className={[
        'h-[2px] min-w-0 flex-1 bg-[repeating-linear-gradient(90deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:14px_2px]',
        direction === 'left' ? 'animate-flow-dash-march-left' : 'animate-flow-dash-march',
      ].join(' ')}
      style={{ animationDelay: `${delay}ms` }}
    />
  )

  const arrowClass = 'h-3.5 w-3.5 shrink-0 text-[#615CCE] sm:h-4 sm:w-4'

  return (
    <div
      className="hidden w-full min-w-0 max-w-none flex-1 items-center self-start pt-7 sm:pt-8 md:flex lg:pt-[37px]"
      aria-hidden="true"
    >
      {direction === 'left' && <ArrowLeft className={`mr-0.5 ${arrowClass}`} color={FLOW_COLOR} />}
      {line}
      {direction === 'right' && <ArrowRight className={`ml-0.5 ${arrowClass}`} color={FLOW_COLOR} />}
    </div>
  )
}

function RowTurn({
  delay = 0,
  align = 'right',
}: {
  delay?: number
  align?: 'left' | 'right'
}) {
  const vertical = (
    <div className="flex flex-col items-center py-1">
      <span
        className="h-6 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:2px_14px] sm:h-8"
        style={{ animationDelay: `${delay}ms` }}
      />
      <ArrowDown
        className="-mt-px h-3.5 w-3.5 shrink-0 text-[#615CCE] sm:h-4 sm:w-4"
        color={FLOW_COLOR}
      />
    </div>
  )

  return (
    <div className={`hidden ${GRID_COLS} md:grid`} aria-hidden="true">
      {align === 'left' ? (
        <>
          <div className="flex justify-center">{vertical}</div>
          <div className="col-span-4" />
        </>
      ) : (
        <>
          <div className="col-span-4" />
          <div className="flex justify-center">{vertical}</div>
        </>
      )}
    </div>
  )
}

function MobileConnector({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex flex-col items-center py-1 md:hidden" aria-hidden="true">
      <span
        className="h-5 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,#615CCE_0_8px,transparent_8px_14px)] bg-[length:2px_14px]"
        style={{ animationDelay: `${delay}ms` }}
      />
      <ArrowDown className="-mt-px h-3.5 w-3.5 shrink-0 text-[#615CCE]" color={FLOW_COLOR} />
    </div>
  )
}

/** 01 → 02 → 03, turn down, then 06 ← 05 ← 04 */
export function buildSixStepSnakeRowLayouts(_steps?: WorkflowStep[]): WorkflowRowLayout[] {
  return [
    { stepIndices: [0, 1, 2], direction: 'right', turn: 'right' },
    { stepIndices: [5, 4, 3], direction: 'left', turn: null },
  ]
}

export type WorkflowDiagramProps = {
  steps: WorkflowStep[]
  rowLayouts: WorkflowRowLayout[]
  showFooter?: boolean
  footer?: ReactNode
  className?: string
  maxWidthClassName?: string
}

export default function WorkflowDiagram({
  steps,
  rowLayouts,
  showFooter = true,
  footer,
  className = '',
  maxWidthClassName = 'max-w-5xl',
}: WorkflowDiagramProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={`relative mx-auto min-w-0 overflow-visible ${maxWidthClassName} ${className}`}>
      <div className="flex flex-col items-center gap-0 md:hidden">
        {steps.map((step, index) => (
          <Fragment key={`${step.label}-${index}`}>
            <Node step={step} index={index} shown={visible.has(index)} />
            {index < steps.length - 1 && <MobileConnector delay={index * 120} />}
          </Fragment>
        ))}
      </div>

      <div className="hidden min-w-0 md:block">
        {rowLayouts.map((row, rowIndex) => (
          <div key={rowIndex}>
            <div className={`grid ${GRID_COLS} items-start gap-x-1 lg:gap-x-2`}>
              {row.stepIndices.map((stepIndex, i) => {
                const step = steps[stepIndex]
                if (!step) return null

                return (
                  <Fragment key={`${step.label}-${stepIndex}`}>
                    <div className="flex min-w-0 justify-center">
                      <Node step={step} index={stepIndex} shown={visible.has(stepIndex)} />
                    </div>
                    {i < row.stepIndices.length - 1 && (
                      <Connector delay={stepIndex * 120} direction={row.direction} />
                    )}
                  </Fragment>
                )
              })}
            </div>
            {row.turn && <RowTurn delay={(rowIndex * 3 + 2) * 120} align={row.turn} />}
          </div>
        ))}
      </div>

      {showFooter &&
        (footer ?? (
          <div className="mt-8 flex justify-center sm:mt-10">
            <div className="flex items-center gap-3 rounded-radius-sm border border-border bg-card/70 px-5 py-3 backdrop-blur dark:border-white/10 dark:bg-dark/70 sm:px-6 sm:py-4">
              <CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" strokeWidth={1.6} />
              <p className="text-sm font-light text-foreground dark:text-backgroundBody sm:text-base">
                Workflow <span className="text-accent">Completed</span>
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}
