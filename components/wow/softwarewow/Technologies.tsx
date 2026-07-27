'use client'

import { useState, useId } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Icon, addCollection } from '@iconify/react'
import devicon from '@iconify-json/devicon/icons.json'
import simpleIcons from '@iconify-json/simple-icons/icons.json'
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
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionLabel from '@/components/wow/shared/SectionLabel'

addCollection(devicon)
addCollection(simpleIcons)

type Tech = {
  name: string
  hint?: string
  icon: string
  color?: string
  invertInDark?: boolean
}

type Category = { id: string; label: string; icon: LucideIcon; items: Tech[] }

const categories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    items: [
      { name: 'Next.js', hint: 'React framework', icon: 'devicon:nextjs' },
      { name: 'React', hint: 'UI library', icon: 'devicon:react' },
      { name: 'TypeScript', hint: 'Type safety', icon: 'devicon:typescript' },
      { name: 'Tailwind CSS', hint: 'Utility styling', icon: 'devicon:tailwindcss' },
      { name: 'Framer Motion', hint: 'Motion system', icon: 'simple-icons:framer', color: '#0055FF' },
      { name: 'GSAP', hint: 'Timeline animation', icon: 'simple-icons:greensock', color: '#88CE02' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', hint: 'Runtime', icon: 'devicon:nodejs' },
      { name: 'NestJS', hint: 'Enterprise framework', icon: 'devicon:nestjs' },
      { name: 'Express.js', hint: 'Minimal server', icon: 'devicon:express' },
      { name: 'GraphQL', hint: 'Typed API layer', icon: 'devicon:graphql' },
      { name: 'REST API', hint: 'Standard interfaces', icon: 'simple-icons:openapiinitiative', color: '#2563EB' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    items: [
      { name: 'OpenAI', hint: 'GPT models', icon: 'devicon:openai' },
      { name: 'Anthropic', hint: 'Claude models', icon: 'simple-icons:anthropic', color: '#191919', invertInDark: true },
      { name: 'Google Gemini', hint: 'Multimodal AI', icon: 'simple-icons:googlegemini', color: '#8E75B2' },
      { name: 'LangChain', hint: 'LLM orchestration', icon: 'simple-icons:langchain', color: '#1C3C3C' },
      { name: 'n8n', hint: 'Workflow automation', icon: 'simple-icons:n8n', color: '#EA4B71' },
      { name: 'MCP', hint: 'Model Context Protocol', icon: 'simple-icons:modelcontextprotocol', color: '#7C3AED' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    items: [
      { name: 'PostgreSQL', hint: 'Relational', icon: 'devicon:postgresql' },
      { name: 'MySQL', hint: 'Relational', icon: 'devicon:mysql' },
      { name: 'MongoDB', hint: 'Document', icon: 'devicon:mongodb' },
      { name: 'Redis', hint: 'In-memory', icon: 'devicon:redis' },
      { name: 'Prisma ORM', hint: 'Typed ORM', icon: 'simple-icons:prisma', color: '#2D3748' },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Content',
    icon: FileText,
    items: [
      { name: 'Sanity', hint: 'Structured content', icon: 'simple-icons:sanity', color: '#F03E2F' },
      { name: 'Strapi', hint: 'Headless CMS', icon: 'simple-icons:strapi', color: '#4945FF' },
      { name: 'Contentful', hint: 'Enterprise CMS', icon: 'simple-icons:contentful', color: '#2478CC' },
      { name: 'Headless WordPress', hint: 'Familiar authoring', icon: 'devicon:wordpress' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: Cloud,
    items: [
      { name: 'Vercel', hint: 'Edge hosting', icon: 'simple-icons:vercel', color: '#000000', invertInDark: true },
      { name: 'Cloudflare', hint: 'Edge network', icon: 'devicon:cloudflare' },
      { name: 'AWS', hint: 'Cloud platform', icon: 'devicon:amazonwebservices' },
      { name: 'DigitalOcean', hint: 'Cloud VMs', icon: 'devicon:digitalocean' },
      { name: 'Docker', hint: 'Containers', icon: 'devicon:docker' },
      { name: 'GitHub', hint: 'Source & CI', icon: 'devicon:github' },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: Palette,
    items: [
      { name: 'Figma', hint: 'Product design', icon: 'devicon:figma' },
      { name: 'Illustrator', hint: 'Vector', icon: 'devicon:illustrator' },
      { name: 'Photoshop', hint: 'Raster', icon: 'devicon:photoshop' },
      { name: 'After Effects', hint: 'Motion graphics', icon: 'devicon:aftereffects' },
      { name: 'Premiere Pro', hint: 'Video edit', icon: 'devicon:premierepro' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: BarChart3,
    items: [
      { name: 'Google Analytics', hint: 'Insights', icon: 'simple-icons:googleanalytics', color: '#E37400' },
      { name: 'Tag Manager', hint: 'Tag ops', icon: 'simple-icons:googletagmanager', color: '#246FDB' },
      { name: 'Search Console', hint: 'SEO', icon: 'simple-icons:googlesearchconsole', color: '#458CF5' },
      { name: 'Meta Ads', hint: 'Paid social', icon: 'simple-icons:meta', color: '#0081FB' },
      { name: 'Google Ads', hint: 'Paid search', icon: 'simple-icons:googleads', color: '#4285F4' },
      { name: 'LinkedIn Ads', hint: 'B2B', icon: 'devicon:linkedin' },
    ],
  },
  {
    id: 'crm',
    label: 'CRM & Business',
    icon: Briefcase,
    items: [
      { name: 'HubSpot', hint: 'Full stack CRM', icon: 'simple-icons:hubspot', color: '#FF7A59' },
      { name: 'Salesforce', hint: 'Enterprise CRM', icon: 'simple-icons:salesforce', color: '#00A1E0' },
      { name: 'Zoho CRM', hint: 'SMB CRM', icon: 'simple-icons:zoho', color: '#E42527' },
      { name: 'Pipedrive', hint: 'Sales pipeline', icon: 'simple-icons:pipedrive', color: '#017737' },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce',
    icon: CreditCard,
    items: [
      { name: 'Stripe', hint: 'Payments', icon: 'simple-icons:stripe', color: '#635BFF' },
      { name: 'PayPal', hint: 'Payments', icon: 'devicon:paypal' },
      { name: 'Shopify', hint: 'Storefront', icon: 'devicon:shopify' },
      { name: 'WooCommerce', hint: 'WordPress commerce', icon: 'simple-icons:woocommerce', color: '#96588A' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessagesSquare,
    items: [
      { name: 'Slack', hint: 'Team chat', icon: 'devicon:slack' },
      { name: 'Google Workspace', hint: 'Gmail & Docs', icon: 'devicon:google' },
      { name: 'Microsoft 365', hint: 'Productivity', icon: 'devicon:microsoft' },
      { name: 'Zoom', hint: 'Video calls', icon: 'simple-icons:zoom', color: '#0B5CFF' },
      { name: 'WhatsApp Business', hint: 'Client comms', icon: 'devicon:whatsapp' },
    ],
  },
]

const Technologies = () => {
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeId) ?? categories[0]
  const tabsId = useId()

  return (
    <section
      aria-labelledby="tech-heading"
      className="relative overflow-hidden bg-background transition-colors duration-300 dark:border-white/10 dark:bg-background"
    >
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionLabel className="mb-6">Technologies We Use</SectionLabel>
          <p className="mt-5 text-base leading-relaxed text-[#808080] transition-colors duration-300 sm:text-lg">
            Modern tools and freamwork for powerful solutions
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
                  <TechCard
                    name={item.name}
                    hint={item.hint}
                    icon={item.icon}
                    color={item.color}
                    invertInDark={item.invertInDark}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function TechCard({
  name,
  hint,
  icon,
  color,
  invertInDark,
}: {
  name: string
  hint?: string
  icon: string
  color?: string
  invertInDark?: boolean
}) {
  return (
    <div
      tabIndex={0}
      aria-label={hint ? `${name} — ${hint}` : name}
      className="group relative flex h-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-4 text-center outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-dark-200 sm:p-5"
    >
      <TechIcon icon={icon} color={color} invertInDark={invertInDark} />
      <span className="mt-3 text-sm font-semibold text-secondary transition-colors duration-300 dark:text-[#F2F2F2] sm:text-base">
        {name}
      </span>
      {hint && (
        <p className="mt-1.5 text-xs text-[#808080] sm:text-[13px]">{hint}</p>
      )}
    </div>
  )
}

function TechIcon({
  icon,
  color,
  invertInDark,
}: {
  icon: string
  color?: string
  invertInDark?: boolean
}) {
  return (
    <Icon
      icon={icon}
      width={48}
      height={48}
      color={color}
      className={`h-10 w-10 sm:h-12 sm:w-12${invertInDark ? ' dark:invert' : ''}`}
      aria-hidden
    />
  )
}

export default Technologies
