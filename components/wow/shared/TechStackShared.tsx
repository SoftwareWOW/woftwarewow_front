'use client'

import { Icon, addCollection } from '@iconify/react'
import logos from '@iconify-json/logos/icons.json'
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

addCollection(logos)
addCollection(simpleIcons)

export type Tech = {
  name: string
  hint?: string
  icon: string
  color?: string
  invertInDark?: boolean
}

export type Category = { id: string; label: string; icon: LucideIcon; items: Tech[] }

const PipedriveSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="#017737"
    aria-hidden
    className={className}
    width={48}
    height={48}
  >
    <path d="M12.3 4.2c-3.7 0-6.7 3-6.7 6.7 0 3.7 3 6.7 6.7 6.7 1.2 0 2.3-.3 3.3-.8l3.4 3.4 1.4-1.4-3.3-3.3c.6-1 .9-2.1.9-3.4 0-3.7-3-6.7-6.7-6.7zm0 2.2c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z" />
  </svg>
)

const ExpressSvg = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 128 128"
    aria-hidden
    className={className}
    width={48}
    height={48}
  >
    <rect width="128" height="128" rx="28" fill="#000000" />
    <g transform="translate(20, 20) scale(3.666)">
      <path
        fill="#FFFFFF"
        d="M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706l-.557.74l4.873 6.682H.945V4.173h9.505l5.026 6.7l.574-.772l-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12a4.9 4.9 0 0 0-.75 1.581a7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389q1.77 0 2.739-.868q.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734q-.704.651-1.952.65q-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869a3.5 3.5 0 0 1-.551-1.182a5 5 0 0 1-.17-1.133a9 9 0 0 0-.015-.286a4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742q.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924a4.9 4.9 0 0 0-.715-1.68z"
      />
    </g>
  </svg>
)

export const techCategories: Category[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: Code2,
    items: [
      { name: 'Next.js', hint: 'React framework', icon: 'logos:nextjs-icon', invertInDark: true },
      { name: 'React', hint: 'UI library', icon: 'logos:react' },
      { name: 'TypeScript', hint: 'Type safety', icon: 'logos:typescript-icon' },
      { name: 'Tailwind CSS', hint: 'Utility styling', icon: 'logos:tailwindcss-icon' },
      { name: 'Framer Motion', hint: 'Motion system', icon: 'logos:framer', color: '#0055FF' },
      { name: 'GSAP', hint: 'Timeline animation', icon: 'logos:greensock-icon' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', hint: 'Runtime', icon: 'logos:nodejs-icon' },
      { name: 'NestJS', hint: 'Enterprise framework', icon: 'logos:nestjs' },
      { name: 'Express.js', hint: 'Minimal server', icon: 'custom:express' },
      { name: 'GraphQL', hint: 'Typed API layer', icon: 'logos:graphql' },
      { name: 'REST API', hint: 'Standard interfaces', icon: 'logos:openapi-icon' },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    icon: Sparkles,
    items: [
      { name: 'OpenAI', hint: 'GPT models', icon: 'logos:openai-icon', color: '#10A37F' },
      { name: 'Anthropic', hint: 'Claude models', icon: 'logos:anthropic-icon', invertInDark: true },
      { name: 'Google Gemini', hint: 'Multimodal AI', icon: 'logos:google-gemini' },
      { name: 'LangChain', hint: 'LLM orchestration', icon: 'simple-icons:langchain', color: '#1C3C3C', invertInDark: true },
      { name: 'n8n', hint: 'Workflow automation', icon: 'simple-icons:n8n', color: '#EA4B71' },
      { name: 'MCP', hint: 'Model Context Protocol', icon: 'simple-icons:modelcontextprotocol', color: '#7C3AED' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    icon: Database,
    items: [
      { name: 'PostgreSQL', hint: 'Relational', icon: 'logos:postgresql' },
      { name: 'MySQL', hint: 'Relational', icon: 'logos:mysql' },
      { name: 'MongoDB', hint: 'Document', icon: 'logos:mongodb-icon' },
      { name: 'Redis', hint: 'In-memory', icon: 'logos:redis' },
      { name: 'Prisma ORM', hint: 'Typed ORM', icon: 'logos:prisma', color: '#2D3748', invertInDark: true },
    ],
  },
  {
    id: 'cms',
    label: 'CMS & Content',
    icon: FileText,
    items: [
      { name: 'Sanity', hint: 'Structured content', icon: 'logos:sanity' },
      { name: 'Strapi', hint: 'Headless CMS', icon: 'logos:strapi-icon' },
      { name: 'Contentful', hint: 'Enterprise CMS', icon: 'logos:contentful' },
      { name: 'Headless WordPress', hint: 'Familiar authoring', icon: 'logos:wordpress-icon' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infra',
    icon: Cloud,
    items: [
      { name: 'Vercel', hint: 'Edge hosting', icon: 'logos:vercel-icon', invertInDark: true },
      { name: 'Cloudflare', hint: 'Edge network', icon: 'logos:cloudflare-icon' },
      { name: 'AWS', hint: 'Cloud platform', icon: 'logos:aws' },
      { name: 'DigitalOcean', hint: 'Cloud VMs', icon: 'logos:digital-ocean' },
      { name: 'Docker', hint: 'Containers', icon: 'logos:docker-icon' },
      { name: 'GitHub', hint: 'Source & CI', icon: 'logos:github-icon', invertInDark: true },
    ],
  },
  {
    id: 'design',
    label: 'Design',
    icon: Palette,
    items: [
      { name: 'Figma', hint: 'Product design', icon: 'logos:figma' },
      { name: 'Illustrator', hint: 'Vector', icon: 'logos:adobe-illustrator' },
      { name: 'Photoshop', hint: 'Raster', icon: 'logos:adobe-photoshop' },
      { name: 'After Effects', hint: 'Motion graphics', icon: 'logos:adobe-after-effects' },
      { name: 'Premiere Pro', hint: 'Video edit', icon: 'logos:adobe-premiere' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: BarChart3,
    items: [
      { name: 'Google Analytics', hint: 'Insights', icon: 'logos:google-analytics' },
      { name: 'Tag Manager', hint: 'Tag ops', icon: 'logos:google-tag-manager' },
      { name: 'Search Console', hint: 'SEO', icon: 'logos:google-search-console' },
      { name: 'Meta Ads', hint: 'Paid social', icon: 'logos:meta-icon' },
      { name: 'Google Ads', hint: 'Paid search', icon: 'logos:google-ads' },
      { name: 'LinkedIn Ads', hint: 'B2B', icon: 'logos:linkedin-icon' },
    ],
  },
  {
    id: 'crm',
    label: 'CRM & Business',
    icon: Briefcase,
    items: [
      { name: 'HubSpot', hint: 'Full stack CRM', icon: 'logos:hubspot' },
      { name: 'Salesforce', hint: 'Enterprise CRM', icon: 'logos:salesforce' },
      { name: 'Zoho CRM', hint: 'SMB CRM', icon: 'logos:zoho' },
      { name: 'Pipedrive', hint: 'Sales pipeline', icon: 'custom:pipedrive' },
    ],
  },
  {
    id: 'commerce',
    label: 'Commerce',
    icon: CreditCard,
    items: [
      { name: 'Stripe', hint: 'Payments', icon: 'logos:stripe' },
      { name: 'PayPal', hint: 'Payments', icon: 'logos:paypal' },
      { name: 'Shopify', hint: 'Storefront', icon: 'logos:shopify' },
      { name: 'WooCommerce', hint: 'WordPress commerce', icon: 'logos:woocommerce-icon' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessagesSquare,
    items: [
      { name: 'Slack', hint: 'Team chat', icon: 'logos:slack-icon' },
      { name: 'Google Workspace', hint: 'Gmail & Docs', icon: 'logos:google-icon' },
      { name: 'Microsoft 365', hint: 'Productivity', icon: 'logos:microsoft-icon' },
      { name: 'Google Meet', hint: 'Video calls', icon: 'logos:google-meet' },
      { name: 'WhatsApp Business', hint: 'Client comms', icon: 'logos:whatsapp-icon' },
    ],
  },
]

export function TechCard({
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
      className="group relative flex h-full cursor-default flex-col items-center justify-center overflow-hidden rounded-radius-md border border-black/10 bg-backgroundBody p-4 text-center outline-none transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/10 dark:bg-dark-200 sm:p-5"
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
  // Force black currentColor so dark:invert reliably becomes white on dark cards.
  // Without this, inherited light text in dark mode inverts back to black (invisible).
  const sizeClass = [
    'h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12',
    invertInDark ? 'text-black dark:invert' : '',
  ]
    .filter(Boolean)
    .join(' ')

  if (icon === 'custom:pipedrive') {
    return <PipedriveSvg className={sizeClass} />
  }

  if (icon === 'custom:express') {
    return <ExpressSvg className={sizeClass} />
  }

  return (
    <span
      className={[
        'inline-flex h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12',
        invertInDark ? 'text-black dark:invert' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={color && !invertInDark ? { color } : undefined}
    >
      <Icon
        icon={icon}
        width="100%"
        height="100%"
        className={sizeClass}
        style={color && !invertInDark ? { color } : undefined}
        aria-hidden
      />
    </span>
  )
}
