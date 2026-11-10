import fs from 'fs'
import path from 'path'
import vm from 'vm'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const localeBase = path.join(root, 'app', '[locale]')

const SOURCES = {
  'marketing-growth': path.join(localeBase, 'for-you', 'marketing-and-growth', '_components'),
  'sales-revenue': path.join(localeBase, 'for-you', 'sales-and-revenue', '_components'),
  'ai-automation': path.join(localeBase, 'for-you', 'ai-and-automation', '_components'),
  strategy: path.join(localeBase, 'about', 'strategy-centre', '_components'),
  'business-growth': path.join(localeBase, 'packages', 'business-growth', '_components'),
  'sales-acceleration': path.join(localeBase, 'packages', 'sales-acceleration', '_components'),
  'website-growth-engine': path.join(localeBase, 'packages', 'website-growth-engine', '_components'),
  'digital-transformation': path.join(localeBase, 'packages', 'digital-transformation', '_components'),
  'professional-services': path.join(localeBase, 'industries', 'professional-services', '_components'),
  'software-technology': path.join(localeBase, 'for-you', 'software-and-technology', '_components'),
  'ai-automation-package': path.join(localeBase, 'packages', 'ai-automation', '_components'),
}

const PAGES = [
  { kind: 'services', slug: 'lead-generation', template: 'sales-revenue' },
  { kind: 'services', slug: 'appointment-setting-outreach', template: 'professional-services' },
  { kind: 'services', slug: 'sales-funnel-development', template: 'website-growth-engine' },
  { kind: 'services', slug: 'lead-qualification-nurturing', template: 'marketing-growth' },
  { kind: 'services', slug: 'crm-setup-optimization', template: 'digital-transformation' },
  { kind: 'services', slug: 'sales-automation', template: 'ai-automation' },
  { kind: 'services', slug: 'sales-analytics-reporting', template: 'strategy' },
  { kind: 'services', slug: 'sales-process-optimization', template: 'sales-revenue' },
  { kind: 'solutions', slug: 'lead-generation-outbound', template: 'sales-acceleration' },
  { kind: 'solutions', slug: 'sales-funnels-conversion', template: 'business-growth' },
  { kind: 'solutions', slug: 'crm-sales-systems', template: 'software-technology' },
  { kind: 'solutions', slug: 'sales-automation-enablement', template: 'ai-automation-package' },
]

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name)
    const d = path.join(dest, entry.name)
    if (entry.isDirectory()) copyDir(s, d)
    else fs.copyFileSync(s, d)
  }
}

function pageContentTs(kind, slug) {
  const getter = kind === 'services' ? 'getWowAccelerateNavService' : 'getWowAccelerateNavSolution'
  return `import { buildOfferingPageContent } from '@/app/[locale]/accelerate/_lib/seedContentFromNav'
import { ${getter} } from '@/data/wowAccelerateNavContent'

const offering = ${getter}('${slug}')!

export const CONTENT = buildOfferingPageContent(offering)
`
}

function loadMarketingPageBodies() {
  const marketingPath = path.join(__dirname, 'scaffold-wow-marketing-pages.mjs')
  const file = fs.readFileSync(marketingPath, 'utf8')
  const start = file.indexOf('const PAGE_BODIES = ')
  const end = file.indexOf('\nfor (const page of PAGES)')
  if (start < 0 || end < 0) {
    throw new Error('Could not extract PAGE_BODIES from scaffold-wow-marketing-pages.mjs')
  }
  const snippet = file.slice(start, end).replace('const PAGE_BODIES', 'PAGE_BODIES')
  const sandbox = { PAGE_BODIES: undefined }
  vm.runInNewContext(snippet, sandbox)
  if (!sandbox.PAGE_BODIES || typeof sandbox.PAGE_BODIES !== 'object') {
    throw new Error('PAGE_BODIES failed to load from marketing scaffold')
  }
  const bodies = { ...sandbox.PAGE_BODIES }
  for (const key of Object.keys(bodies)) {
    bodies[key] = bodies[key].replaceAll(
      '@/app/[locale]/wowmarketing/_lib/buildOfferingMetadata',
      '@/app/[locale]/accelerate/_lib/buildOfferingMetadata',
    )
  }
  return bodies
}

const EXTRA_PAGE_BODIES = {
  'software-technology': `import { CONTENT } from './_content/page-content'
import SoftwareTechHero from './_components/SoftwareTechHero'
import WhatWeBuild from './_components/WhatWeBuild'
import BuiltForTheFit from './_components/BuiltForTheFit'
import TechLaunchPath from './_components/TechLaunchPath'
import OurApproach from './_components/OurApproach'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <SoftwareTechHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <WhatWeBuild {...CONTENT.whatWeBuild} />
      <BuiltForTheFit {...CONTENT.builtForTheFit} />
      <TechLaunchPath {...CONTENT.techLaunchPath} />
      <OurApproach {...CONTENT.ourApproach} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
  'ai-automation-package': `import { CONTENT } from './_content/page-content'
import AiAutomationHero from './_components/AiAutomationHero'
import StartWithTheRepetitive from './_components/StartWithTheRepetitive'
import AiPackageCard from './_components/AiPackageCard'
import AutomationTools from './_components/AutomationTools'
import FromIdeaToAutomation from './_components/FromIdeaToAutomation'
import AutomationFaq from './_components/AutomationFaq'
import WowGrowthCta from '@/components/wow/LandascapComponets/WowGrowthCta'
import { buildOfferingMetadata } from '@/app/[locale]/accelerate/_lib/buildOfferingMetadata'
import type { Locale } from '@/i18n/config'
import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return buildOfferingMetadata(locale, '__SLUG__', '__KIND__')
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  const { cta } = CONTENT
  return (
    <div className="flex flex-col gap-12 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-40">
      <AiAutomationHero {...CONTENT.hero} images={CONTENT.hero.images} />
      <StartWithTheRepetitive {...CONTENT.startWithTheRepetitive} />
      <AiPackageCard {...CONTENT.aiPackageCard} />
      <AutomationTools {...CONTENT.automationTools} />
      <FromIdeaToAutomation {...CONTENT.fromIdeaToAutomation} />
      <AutomationFaq {...CONTENT.automationFaq} />
      <WowGrowthCta accentText={cta.accentText} mainText={cta.mainText} ariaLabel={cta.ariaLabel} />
    </div>
  )
}
`,
}

const PAGE_BODIES = { ...loadMarketingPageBodies(), ...EXTRA_PAGE_BODIES }

for (const page of PAGES) {
  const destDir = path.join(localeBase, 'accelerate', page.kind, page.slug)
  const componentsDest = path.join(destDir, '_components')
  const contentDest = path.join(destDir, '_content')
  const source = SOURCES[page.template]
  if (!source || !fs.existsSync(source)) {
    throw new Error(`Missing source components for template ${page.template}`)
  }
  if (!PAGE_BODIES[page.template]) {
    throw new Error(`Missing PAGE_BODY for template ${page.template}`)
  }
  if (fs.existsSync(componentsDest)) {
    fs.rmSync(componentsDest, { recursive: true, force: true })
  }
  copyDir(source, componentsDest)
  fs.mkdirSync(contentDest, { recursive: true })
  fs.writeFileSync(path.join(contentDest, 'page-content.ts'), pageContentTs(page.kind, page.slug))
  const kindSingular = page.kind === 'services' ? 'service' : 'solution'
  const body = PAGE_BODIES[page.template]
    .replaceAll('__KIND__', kindSingular)
    .replaceAll('__SLUG__', page.slug)
  fs.writeFileSync(path.join(destDir, 'page.tsx'), body)
  console.log('scaffolded', page.kind, page.slug)
}

console.log('done', PAGES.length)
