
'use client'

import WorkflowDiagram, {
  buildSixStepSnakeRowLayouts,
  type WorkflowStep,
} from '@/components/wow/shared/WorkflowDiagram'

import {
  BrainCircuit,
  ClipboardList,
  Code2,
  Inbox,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

import type { ReactNode } from 'react'

// --------------------------------------------
// AI-Powered Workflow — 6 Connected Steps
// --------------------------------------------

const steps: WorkflowStep[] = [
  {
    icon: Inbox,
    label: 'Customer Request',
    caption: 'Needs & goals submitted',
    tone: 'primary',
  },
  {
    icon: BrainCircuit,
    label: 'AI Analysis',
    caption: 'Requirements & insights',
    tone: 'primary',
  },
  {
    icon: ClipboardList,
    label: 'Smart Planning',
    caption: 'Tasks & teams aligned',
    tone: 'accent',
  },
  {
    icon: Code2,
    label: 'Team Execution',
    caption: 'Experts build & deliver',
    tone: 'accent',
  },
  {
    icon: ShieldCheck,
    label: 'Quality & Feedback',
    caption: 'Reviewed & refined',
    tone: 'primary',
  },
  {
    icon: TrendingUp,
    label: 'Continuous Growth',
    caption: 'Insights drive improvement',
    tone: 'primary',
  },
]

const rowLayouts = buildSixStepSnakeRowLayouts(steps)

// --------------------------------------------
// Component Props
// --------------------------------------------

type OrderProcessProps = {
  hideHeader?: boolean
  badge?: string
  title?: ReactNode
  description?: string
}

// --------------------------------------------
// Order Process Component
// --------------------------------------------

export default function OrderProcess({
  hideHeader = false,
  badge = 'AI-Powered Workflow',
  title = (
    <>
      From customer request to{' '}
      <span className="font-instrument italic !bg-none !bg-clip-border !text-inherit">
        continuous growth.
      </span>
    </>
  ),
  description =
    'Six connected stages showing how AI helps our teams understand needs, plan smarter, execute efficiently, and continuously improve outcomes.',
}: OrderProcessProps) {
  return (
    <section
      aria-label="AI-powered workflow"
      className="relative overflow-hidden px-3 md:px-4"
    >
      {!hideHeader && (
        <div className="relative mx-auto max-w-3xl text-center">
          {/* Section Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground backdrop-blur dark:border-white/10 dark:bg-dark/60 dark:text-dark-100">
            {badge}
          </span>

          {/* Section Title */}
          <h2 className="mt-4 font-display text-3xl leading-[1.08] tracking-tight text-foreground dark:text-backgroundBody sm:mt-5 sm:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h2>

          {/* Section Description */}
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-dark-100 sm:mt-4 md:text-base">
            {description}
          </p>
        </div>
      )}

      {/* Workflow Diagram */}
      <WorkflowDiagram
        steps={steps}
        rowLayouts={rowLayouts}
        className={hideHeader ? 'mt-0' : 'mt-8 sm:mt-10 lg:mt-12'}
      />
    </section>
  )
}
