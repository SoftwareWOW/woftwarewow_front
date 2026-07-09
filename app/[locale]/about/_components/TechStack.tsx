'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import {
  Code2,
  Server,
  Sparkles,
  Database,
  FileText,
  Cloud,
  Palette,
  BarChart3,
  Briefcase,
  CreditCard,
  MessagesSquare,
  Forward,
  Atom,
  Braces,
  Wind,
  Move3d,
  Clapperboard,
  Hexagon,
  Bird,
  Rocket,
  Network,
  Webhook,
  Bot,
  Brain,
  Gem,
  Link2,
  Workflow,
  CircuitBoard,
  Table,
  Leaf,
  Zap,
  Layers,
  Blocks,
  LayoutList,
  FileStack,
  Newspaper,
  Triangle,
  CloudCog,
  Droplet,
  Container,
  FolderGit2,
  PenTool,
  Spline,
  Image,
  Film,
  Video,
  LineChart,
  Tags,
  Search,
  Megaphone,
  Target,
  Users,
  Radar,
  Building2,
  Kanban,
  Wallet,
  ShoppingBag,
  Store,
  Hash,
  Mail,
  Monitor,
  ScreenShare,
  Phone,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'

type Tech = { name: string; hint?: string; icon: LucideIcon }
type Category = { id: string; label: string; icon: LucideIcon; items: Tech[] }

const categories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    items: [
      { name: 'Next.js', hint: 'React framework', icon: Forward },
      { name: 'React', hint: 'UI library', icon: Atom },
      { name: 'TypeScript', hint: 'Type safety', icon: Braces },
      { name: 'Tailwind CSS', hint: 'Utility styling', icon: Wind },
      { name: 'Framer Motion', hint: 'Motion system', icon: Move3d },
      { name: 'GSAP', hint: 'Timeline animation', icon: Clapperboard },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', hint: 'Runtime', icon: Hexagon },
      { name: 'NestJS', hint: 'Enterprise framework', icon: Bird },
      { name: 'Express.js', hint: 'Minimal server', icon: Rocket },
      { name: 'GraphQL', hint: 'Typed API layer', icon: Network },
      { name: 'REST API', hint: 'Standard interfaces', icon: Webhook },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    items: [
      { name: 'OpenAI', hint: 'GPT models', icon: Bot },
      { name: 'Anthropic', hint: 'Claude models', icon: Brain },
      { name: 'Google Gemini', hint: 'Multimodal AI', icon: Gem },
      { name: 'LangChain', hint: 'LLM orchestration', icon: Link2 },
      { name: 'n8n', hint: 'Workflow automation', icon: Workflow },
      { name: 'MCP', hint: 'Model Context Protocol', icon: CircuitBoard },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    items: [
      { name: 'PostgreSQL', hint: 'Relational', icon: Database },
      { name: 'MySQL', hint: 'Relational', icon: Table },
      { name: 'MongoDB', hint: 'Document', icon: Leaf },
      { name: 'Redis', hint: 'In-memory', icon: Zap },
      { name: 'Prisma ORM', hint: 'Typed ORM', icon: Layers },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Content',
    icon: FileText,
    items: [
      { name: 'Sanity', hint: 'Structured content', icon: Blocks },
      { name: 'Strapi', hint: 'Headless CMS', icon: LayoutList },
      { name: 'Contentful', hint: 'Enterprise CMS', icon: FileStack },
      { name: 'Headless WordPress', hint: 'Familiar authoring', icon: Newspaper },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: Cloud,
    items: [
      { name: 'Vercel', hint: 'Edge hosting', icon: Triangle },
      { name: 'Cloudflare', hint: 'Edge network', icon: Cloud },
      { name: 'AWS', hint: 'Cloud platform', icon: CloudCog },
      { name: 'DigitalOcean', hint: 'Cloud VMs', icon: Droplet },
      { name: 'Docker', hint: 'Containers', icon: Container },
      { name: 'GitHub', hint: 'Source & CI', icon: FolderGit2 },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: Palette,
    items: [
      { name: 'Figma', hint: 'Product design', icon: PenTool },
      { name: 'Illustrator', hint: 'Vector', icon: Spline },
      { name: 'Photoshop', hint: 'Raster', icon: Image },
      { name: 'After Effects', hint: 'Motion graphics', icon: Film },
      { name: 'Premiere Pro', hint: 'Video edit', icon: Video },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: BarChart3,
    items: [
      { name: 'Google Analytics', hint: 'Insights', icon: LineChart },
      { name: 'Tag Manager', hint: 'Tag ops', icon: Tags },
      { name: 'Search Console', hint: 'SEO', icon: Search },
      { name: 'Meta Ads', hint: 'Paid social', icon: Megaphone },
      { name: 'Google Ads', hint: 'Paid search', icon: Target },
      { name: 'LinkedIn Ads', hint: 'B2B', icon: Users },
    ],
  },
  {
    id: 'crm',
    label: 'CRM & Business',
    icon: Briefcase,
    items: [
      { name: 'HubSpot', hint: 'Full stack CRM', icon: Radar },
      { name: 'Salesforce', hint: 'Enterprise CRM', icon: Cloud },
      { name: 'Zoho CRM', hint: 'SMB CRM', icon: Building2 },
      { name: 'Pipedrive', hint: 'Sales pipeline', icon: Kanban },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce',
    icon: CreditCard,
    items: [
      { name: 'Stripe', hint: 'Payments', icon: CreditCard },
      { name: 'PayPal', hint: 'Payments', icon: Wallet },
      { name: 'Shopify', hint: 'Storefront', icon: ShoppingBag },
      { name: 'WooCommerce', hint: 'WordPress commerce', icon: Store },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessagesSquare,
    items: [
      { name: 'Slack', hint: 'Team chat', icon: Hash },
      { name: 'Google Workspace', hint: 'Gmail & Docs', icon: Mail },
      { name: 'Microsoft 365', hint: 'Productivity', icon: Monitor },
      { name: 'Zoom', hint: 'Video calls', icon: ScreenShare },
      { name: 'WhatsApp Business', hint: 'Client comms', icon: Phone },
    ],
  },
]

const TechStack = () => {
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeId) ?? categories[0]
  const tabsId = useId()

  return (
    <section
      aria-labelledby="tech-heading"
      className="relative overflow-hidden border-t border-black/10 bg-background py-24 transition-colors duration-300 dark:border-white/10 dark:bg-background sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, currentColor 5%, transparent) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-3xl dark:opacity-25"
        style={{ background: WOW_GRADIENT }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel className="mb-6">Our Stack</SectionLabel>
          <h2
            id="tech-heading"
            className="text-[#0D0D0D] transition-colors duration-300 dark:text-[#F2F2F2]"
          >
            Powered by industry-leading{' '}
            <span
              className="font-instrument italic"
              style={{
                background: WOW_GRADIENT,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
              }}
            >
              technology
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#808080] transition-colors duration-300 sm:text-lg">
            We choose proven, modern tools to ship secure, scalable, and high-performance solutions —
            engineered for businesses that expect world-class digital experiences.
          </p>
        </motion.div>

        <LayoutGroup id={tabsId}>
          <div
            role="tablist"
            aria-label="Technology categories"
            className="mx-auto mt-12 flex max-w-full snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-6 px-1 pb-3 sm:mt-14 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0"
          >
            {categories.map((cat) => {
              const isActive = cat.id === activeId
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`${tabsId}-${cat.id}`}
                  id={`${tabsId}-tab-${cat.id}`}
                  onClick={() => setActiveId(cat.id)}
                  className="relative shrink-0 snap-start rounded-full px-4 py-2 text-sm font-medium text-[#808080] outline-none transition-colors duration-200 hover:text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:hover:text-[#F2F2F2] aria-selected:text-secondary dark:aria-selected:text-[#F2F2F2]"
                >
                  {isActive && (
                    <motion.span
                      layoutId={`${tabsId}-pill`}
                      className="absolute inset-0 rounded-full border border-black/10 bg-backgroundBody shadow-[0_4px_24px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-[#1F1F1F] dark:shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" aria-hidden />
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </LayoutGroup>

        <div
          role="tabpanel"
          id={`${tabsId}-${active.id}`}
          aria-labelledby={`${tabsId}-tab-${active.id}`}
          className="mt-10 sm:mt-14"
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-6"
            >
              {active.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <TechCard name={item.name} hint={item.hint} icon={item.icon} />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function TechCard({ name, hint, icon: Icon }: { name: string; hint?: string; icon: LucideIcon }) {
  return (
    <div
      tabIndex={0}
      aria-label={hint ? `${name} — ${hint}` : name}
      className="group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-4 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_8px_32px_rgba(97,92,206,0.15)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-dark-200 dark:hover:shadow-[0_8px_32px_rgba(97,92,206,0.2)] sm:p-5"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-radius-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(97,92,206,0.10), transparent 60%)',
        }}
      />
      <div className="relative flex items-center gap-3">
        <TechIcon icon={Icon} />
        <span className="truncate text-sm font-semibold text-secondary transition-colors duration-300 dark:text-[#F2F2F2] sm:text-base">
          {name}
        </span>
      </div>
      {hint && (
        <p className="relative mt-3 text-xs text-[#808080] sm:text-[13px]">{hint}</p>
      )}
    </div>
  )
}

function TechIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      aria-hidden
      className="relative grid h-9 w-9 shrink-0 place-items-center rounded-radius-sm border border-black/10 bg-background text-muted transition-all duration-300 group-hover:scale-105 group-hover:border-transparent group-hover:text-white dark:border-white/10 dark:bg-[#0D0D0D] dark:text-[#808080]"
    >
      <span
        className="absolute inset-0 rounded-radius-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: WOW_GRADIENT }}
      />
      <Icon className="relative h-4 w-4" strokeWidth={2} />
    </span>
  )
}

export default TechStack
