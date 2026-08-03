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

const IntelligenceFlowHero = () => {
  return (
    <section className="intelligence-flow-hero relative isolate overflow-hidden px-3 pt-24 sm:px-5 md:px-8 md:pt-28 lg:pt-32 lg:py-28">
      <div className="grid-backdrop" aria-hidden="true" />
      <div className="aurora aurora-1" aria-hidden="true" />
      <div className="aurora aurora-2" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow">The intelligence layer</span>
          <h1 className="font-display mt-5 text-3xl font-semibold tracking-tight text-balance text-[var(--if-foreground)] sm:text-5xl">
            Every business signal in. Intelligent action out.
          </h1>
          <p className="mt-4 text-sm text-[var(--if-muted)] sm:text-base">
            WOW Intelligence connects your inbound channels and data to an AI core that answers,
            qualifies, syncs and reports — automatically.
          </p>
        </motion.header>

        <div className="relative mt-16 lg:mt-24">
          <FlowConnections />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_minmax(280px,340px)_1fr] lg:items-center lg:gap-6">
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              <p className="column-label lg:text-left">Business inputs</p>
              {inputs.map((item, i) => (
                <FlowCard key={item.title} {...item} align="left" index={i} />
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <IntelligenceCore />
            </div>

            <div className="order-3 flex flex-col gap-4">
              <p className="column-label lg:text-right">AI outputs</p>
              {outputs.map((item, i) => (
                <FlowCard key={item.title} {...item} align="right" index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntelligenceFlowHero
