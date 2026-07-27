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
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiGraphql,
  SiOpenai,
  SiAnthropic,
  SiGooglegemini,
  SiLangchain,
  SiN8N,
  SiModelcontextprotocol,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiSanity,
  SiStrapi,
  SiContentful,
  SiWordpress,
  SiVercel,
  SiCloudflare,
  SiDigitalocean,
  SiDocker,
  SiGithub,
  SiFigma,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiMeta,
  SiGoogleads,
  SiHubspot,
  SiSalesforce,
  SiZoho,
  SiStripe,
  SiPaypal,
  SiShopify,
  SiWoocommerce,
  SiSlack,
  SiGoogle,
  SiZoom,
  SiWhatsapp,
} from 'react-icons/si'
import { FaAws, FaLinkedin, FaMicrosoft } from 'react-icons/fa6'
import {
  TbApi,
  TbBrandAdobeIllustrator,
  TbBrandAdobePhotoshop,
  TbBrandAdobeAfterEffect,
  TbBrandAdobePremier,
} from 'react-icons/tb'
import SectionLabel from '@/components/wow/shared/SectionLabel'
import { WOW_GRADIENT } from '@/components/wow/shared/WowText'

type Tech = {
  name: string
  hint?: string
  icon: IconType
  color?: string
  monochrome?: boolean
}

type Category = { id: string; label: string; icon: LucideIcon; items: Tech[] }

const PipedriveIcon: IconType = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M12.3 4.2c-3.7 0-6.7 3-6.7 6.7 0 3.7 3 6.7 6.7 6.7 1.2 0 2.3-.3 3.3-.8l3.4 3.4 1.4-1.4-3.3-3.3c.6-1 .9-2.1.9-3.4 0-3.7-3-6.7-6.7-6.7zm0 2.2c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" />
  </svg>
)

const categories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    items: [
      { name: 'Next.js', hint: 'React framework', icon: SiNextdotjs, monochrome: true },
      { name: 'React', hint: 'UI library', icon: SiReact, color: '#61DAFB' },
      { name: 'TypeScript', hint: 'Type safety', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', hint: 'Utility styling', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', hint: 'Motion system', icon: SiFramer, color: '#0055FF' },
      { name: 'GSAP', hint: 'Timeline animation', icon: SiGreensock, color: '#88CE02' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', hint: 'Runtime', icon: SiNodedotjs, color: '#339933' },
      { name: 'NestJS', hint: 'Enterprise framework', icon: SiNestjs, color: '#E0234E' },
      { name: 'Express.js', hint: 'Minimal server', icon: SiExpress, monochrome: true },
      { name: 'GraphQL', hint: 'Typed API layer', icon: SiGraphql, color: '#E10098' },
      { name: 'REST API', hint: 'Standard interfaces', icon: TbApi, color: '#2563EB' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    items: [
      { name: 'OpenAI', hint: 'GPT models', icon: SiOpenai, color: '#10A37F' },
      { name: 'Anthropic', hint: 'Claude models', icon: SiAnthropic, monochrome: true },
      { name: 'Google Gemini', hint: 'Multimodal AI', icon: SiGooglegemini, color: '#8E75B2' },
      { name: 'LangChain', hint: 'LLM orchestration', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'n8n', hint: 'Workflow automation', icon: SiN8N, color: '#EA4B71' },
      { name: 'MCP', hint: 'Model Context Protocol', icon: SiModelcontextprotocol, color: '#7C3AED' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    items: [
      { name: 'PostgreSQL', hint: 'Relational', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', hint: 'Relational', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', hint: 'Document', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', hint: 'In-memory', icon: SiRedis, color: '#DC382D' },
      { name: 'Prisma ORM', hint: 'Typed ORM', icon: SiPrisma, color: '#2D3748' },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Content',
    icon: FileText,
    items: [
      { name: 'Sanity', hint: 'Structured content', icon: SiSanity, color: '#F03E2F' },
      { name: 'Strapi', hint: 'Headless CMS', icon: SiStrapi, color: '#4945FF' },
      { name: 'Contentful', hint: 'Enterprise CMS', icon: SiContentful, color: '#2478CC' },
      { name: 'Headless WordPress', hint: 'Familiar authoring', icon: SiWordpress, color: '#21759B' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: Cloud,
    items: [
      { name: 'Vercel', hint: 'Edge hosting', icon: SiVercel, monochrome: true },
      { name: 'Cloudflare', hint: 'Edge network', icon: SiCloudflare, color: '#F38020' },
      { name: 'AWS', hint: 'Cloud platform', icon: FaAws, color: '#FF9900' },
      { name: 'DigitalOcean', hint: 'Cloud VMs', icon: SiDigitalocean, color: '#0080FF' },
      { name: 'Docker', hint: 'Containers', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub', hint: 'Source & CI', icon: SiGithub, monochrome: true },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: Palette,
    items: [
      { name: 'Figma', hint: 'Product design', icon: SiFigma, color: '#F24E1E' },
      { name: 'Illustrator', hint: 'Vector', icon: TbBrandAdobeIllustrator, color: '#FF9A00' },
      { name: 'Photoshop', hint: 'Raster', icon: TbBrandAdobePhotoshop, color: '#31A8FF' },
      { name: 'After Effects', hint: 'Motion graphics', icon: TbBrandAdobeAfterEffect, color: '#9999FF' },
      { name: 'Premiere Pro', hint: 'Video edit', icon: TbBrandAdobePremier, color: '#9999FF' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: BarChart3,
    items: [
      { name: 'Google Analytics', hint: 'Insights', icon: SiGoogleanalytics, color: '#E37400' },
      { name: 'Tag Manager', hint: 'Tag ops', icon: SiGoogletagmanager, color: '#246FDB' },
      { name: 'Search Console', hint: 'SEO', icon: SiGooglesearchconsole, color: '#458CF5' },
      { name: 'Meta Ads', hint: 'Paid social', icon: SiMeta, color: '#0081FB' },
      { name: 'Google Ads', hint: 'Paid search', icon: SiGoogleads, color: '#4285F4' },
      { name: 'LinkedIn Ads', hint: 'B2B', icon: FaLinkedin, color: '#0A66C2' },
    ],
  },
  {
    id: 'crm',
    label: 'CRM & Business',
    icon: Briefcase,
    items: [
      { name: 'HubSpot', hint: 'Full stack CRM', icon: SiHubspot, color: '#FF7A59' },
      { name: 'Salesforce', hint: 'Enterprise CRM', icon: SiSalesforce, color: '#00A1E0' },
      { name: 'Zoho CRM', hint: 'SMB CRM', icon: SiZoho, color: '#E42527' },
      { name: 'Pipedrive', hint: 'Sales pipeline', icon: PipedriveIcon, color: '#017737' },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce',
    icon: CreditCard,
    items: [
      { name: 'Stripe', hint: 'Payments', icon: SiStripe, color: '#635BFF' },
      { name: 'PayPal', hint: 'Payments', icon: SiPaypal, color: '#00457C' },
      { name: 'Shopify', hint: 'Storefront', icon: SiShopify, color: '#7AB55C' },
      { name: 'WooCommerce', hint: 'WordPress commerce', icon: SiWoocommerce, color: '#96588A' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessagesSquare,
    items: [
      { name: 'Slack', hint: 'Team chat', icon: SiSlack, color: '#4A154B' },
      { name: 'Google Workspace', hint: 'Gmail & Docs', icon: SiGoogle, color: '#4285F4' },
      { name: 'Microsoft 365', hint: 'Productivity', icon: FaMicrosoft, color: '#5E5E5E' },
      { name: 'Zoom', hint: 'Video calls', icon: SiZoom, color: '#0B5CFF' },
      { name: 'WhatsApp Business', hint: 'Client comms', icon: SiWhatsapp, color: '#25D366' },
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
                    monochrome={item.monochrome}
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
  monochrome,
}: {
  name: string
  hint?: string
  icon: IconType
  color?: string
  monochrome?: boolean
}) {
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
        <TechIcon icon={icon} color={color} monochrome={monochrome} />
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

function TechIcon({
  icon: Icon,
  color,
  monochrome,
}: {
  icon: IconType
  color?: string
  monochrome?: boolean
}) {
  return (
    <span
      aria-hidden
      className="relative grid h-9 w-9 shrink-0 place-items-center rounded-radius-sm border border-black/10 bg-white transition-all duration-300 group-hover:scale-105 group-hover:border-transparent dark:border-white/10 dark:bg-[#0D0D0D]"
    >
      <span
        className="absolute inset-0 rounded-radius-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: WOW_GRADIENT }}
      />
      <Icon
        className={`relative h-[18px] w-[18px] transition-colors duration-300 group-hover:text-white ${
          monochrome ? 'text-secondary dark:text-[#F2F2F2]' : ''
        }`}
        style={!monochrome && color ? { color } : undefined}
      />
    </span>
  )
}

export default Technologies
