'use client'

import {
  MessageSquare,
  Target,
  LifeBuoy,
  Database,
  Bot,
  Workflow,
  LineChart,
  BadgeCheck,
  RefreshCw,
  BarChart3,
  BellRing,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { FlowCard, type Accent } from './intelligence-flow/FlowCard'
import { FlowConnections } from './intelligence-flow/FlowConnections'
import { IntelligenceCore } from './intelligence-flow/IntelligenceCore'

type FlowItem = {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
}

const inputs: FlowItem[] = [
  {
    icon: MessageSquare,
    title: 'Customer Inquiry',
    description: 'Website, phone & live chat',
    accent: 'violet',
  },
  {
    icon: Target,
    title: 'Sales Lead',
    description: 'Campaigns, landing pages, referrals',
    accent: 'blue',
  },
  {
    icon: LifeBuoy,
    title: 'Support Request',
    description: 'Email, help desk, WhatsApp',
    accent: 'pink',
  },
  {
    icon: Database,
    title: 'Business Data',
    description: 'CRM, documents & reports',
    accent: 'violet',
  },
]

const outputs: FlowItem[] = [
  { icon: Bot, title: 'AI Assistant', description: 'Instant intelligent responses', accent: 'violet' },
  { icon: Workflow, title: 'Smart Automation', description: 'Automated workflows', accent: 'blue' },
  { icon: LineChart, title: 'Data Analysis', description: 'Business insights', accent: 'pink' },
  {
    icon: BadgeCheck,
    title: 'Lead Qualification',
    description: 'High-quality opportunities',
    accent: 'violet',
  },
  {
    icon: RefreshCw,
    title: 'CRM Updated',
    description: 'Customer records synchronized',
    accent: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description: 'Dashboards and KPIs',
    accent: 'pink',
  },
  {
    icon: BellRing,
    title: 'Team Notifications',
    description: 'Slack, Email, Microsoft Teams',
    accent: 'violet',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Efficiency and revenue',
    accent: 'blue',
  },
]

function FlowRail({ className }: { className?: string }) {
  return (
    <span
      className={`mx-auto flex flex-col items-center py-1 lg:hidden ${className ?? ''}`}
      aria-hidden="true"
    >
      <span className="h-8 w-[2px] animate-flow-dash-march-y bg-[repeating-linear-gradient(180deg,var(--neon-violet)_0_8px,transparent_8px_14px)] bg-[length:2px_14px] sm:h-10" />
    </span>
  )
}

const IntelligenceFlowHero = () => {
  return (
    <section className="relative isolate overflow-hidden px-5 pt-24 pb-20 [--neon-blue:#7b6fd4] [--neon-pink:#ff9191] [--neon-violet:#615cce] sm:px-8 sm:pt-28 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(23_23_23/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(23_23_23/0.04)_1px,transparent_1px)] bg-[length:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_45%,black_20%,transparent_75%)] dark:bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-8%] left-[15%] h-80 w-[420px] rounded-full bg-[color-mix(in_oklab,var(--neon-violet)_35%,transparent)] opacity-45 blur-[80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] bottom-0 h-[280px] w-[380px] rounded-full bg-[color-mix(in_oklab,var(--neon-pink)_30%,transparent)] opacity-35 blur-[80px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-[color-mix(in_oklab,var(--neon-violet)_25%,transparent)] bg-[color-mix(in_oklab,var(--neon-violet)_8%,transparent)] px-3.5 py-1.5 text-[0.6875rem] font-semibold tracking-[0.18em] text-primary uppercase">
            The intelligence layer
          </span>
          <h1 className="font-display mt-5 text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            Every business signal in. Intelligent action out.
          </h1>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            WOW Intelligence connects your inbound channels and data to an AI core that answers,
            qualifies, syncs and reports — automatically.
          </p>
        </motion.header>

        <div className="relative mt-12 lg:mt-24">
          <FlowConnections />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_minmax(280px,340px)_1fr] lg:items-center lg:gap-6">
            <div className="order-1 flex flex-col gap-4 lg:order-1">
              <p className="mb-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase lg:text-left">
                Business inputs
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {inputs.map((item, i) => (
                  <FlowCard key={item.title} {...item} align="left" index={i} />
                ))}
              </div>
            </div>

            <FlowRail className="order-2" />

            <div className="order-3 lg:order-2">
              <IntelligenceCore />
            </div>

            <FlowRail className="order-4" />

            <div className="order-5 flex flex-col gap-4 lg:order-3">
              <p className="mb-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase lg:text-right">
                AI outputs
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {outputs.map((item, i) => (
                  <FlowCard key={item.title} {...item} align="right" index={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntelligenceFlowHero
