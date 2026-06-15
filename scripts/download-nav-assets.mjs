import { mkdirSync, writeFileSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const kargerTools = 'C:\\Users\\aline\\.cursor\\projects\\d-code-Karger-Karger-front\\agent-tools'
const iconsDir = join(root, 'public/images/wow/nav/icons')
const divisionsDir = join(root, 'public/images/wow/nav/divisions')
const cardsDir = join(root, 'public/images/wow/nav/cards')

for (const dir of [iconsDir, divisionsDir, cardsDir]) {
  mkdirSync(dir, { recursive: true })
}

const LABEL_TO_ID = {
  'About us': 'aboutUs',
  'Strategy Centre': 'strategyCentre',
  'Team & Experts': 'teamExperts',
  'Why SMBs?': 'whySmbs',
  Partners: 'partners',
  'Why us?': 'whyUs',
  'Why us? ': 'whyUs',
  'Build & Launch': 'buildLaunch',
  'Software & Technology': 'softwareTechnology',
  'Marketing & Growth': 'marketingGrowth',
  'Social & Community': 'socialCommunity',
  'Sales & Revenue': 'salesRevenue',
  'AI & Automation': 'aiAutomation',
  'Branding & Creative': 'brandingCreative',
  'Hosting & Infrastructure': 'hostingInfrastructure',
  'Learning & Events': 'learningEvents',
  'Startup Launch Package': 'startupLaunchPackage',
  'Business Growth Package': 'businessGrowthPackage',
  'Digital Transformation Package': 'digitalTransformationPackage',
  'AI Automation Package': 'aiAutomationPackage',
  'SaaS Product Development Package': 'saasProductDevelopmentPackage',
  'Brand Authority Package': 'brandAuthorityPackage',
  'Website Growth Engine Package': 'websiteGrowthEnginePackage',
  'Sales Acceleration Package': 'salesAccelerationPackage',
  'Enterprise Infrastructure Package': 'enterpriseInfrastructurePackage',
  Portfolio: 'portfolio',
  'Recent Works': 'recentWorks',
  Clients: 'clients',
  'Partner Network': 'partnerNetwork',
  Locations: 'locations',
  'Startups & Entrepreneurs': 'startupsEntrepreneurs',
  'Professional Services': 'professionalServices',
  'Retail & eCommerce': 'retailEcommerce',
  'Healthcare & Wellness': 'healthcareWellness',
  'Hospitality & Tourism': 'hospitalityTourism',
  'Finance & Real Estate': 'financeRealEstate',
  'Organizations & Nonprofits': 'organizationsNonprofits',
  'Education & Training': 'educationTraining',
  'Technology & SaaS': 'technologySaas',
  Meet: 'meet',
  'Think Tank': 'thinkTank',
  'Quotation Request': 'quotation',
  'Client Portal': 'clientPortal',
  'White-label': 'whiteLabel',
  'Affiliate & Referral': 'affiliate',
  Insights: 'insights',
  "Careers (We're Hiring)": 'careers',
  'Help & Support': 'helpSupport',
  'Brand Kit': 'brandKit',
}

const DIVISION_NAME_TO_ID = {
  'SoftwareWOW!': 'softwareWow',
  'WOW Marketing': 'wowMarketing',
  'WOW Design': 'wowDesign',
  'WOW Intelligence': 'wowIntelligence',
  'WOW Social': 'wowSocial',
  'WOW Accelerate': 'wowAccelerate',
  'WOW Websites': 'wowWebsites',
  'WOW Impact': 'wowImpact',
  'WOW Host': 'wowHost',
}

function parseUrlMap(content) {
  const urlMap = {}
  for (const match of content.matchAll(/const (img[\w]+) = "(https:\/\/www\.figma\.com\/api\/mcp\/asset\/[^"]+)"/g)) {
    urlMap[match[1]] = match[2]
  }
  return urlMap
}

function parseMenuItems(content, urlMap) {
  const items = {}
  const blocks = content.split(/data-name="PC Dropdown Menu Item"/)
  for (const block of blocks.slice(1)) {
    const labelMatch = block.match(/<p className="leading-none">(?:\{`([^`]+)`\}|([^<]+))<\/p>/)
    if (!labelMatch) continue
    const label = (labelMatch[1] ?? labelMatch[2]).replace(/`/g, '').trim()
    const id = LABEL_TO_ID[label]
    if (!id) continue
    const iconSection = block.split('Menu Icon V2')[1]?.split('15060:2564')[0] ?? block
    const vars = [...iconSection.matchAll(/src=\{(\w+)\}/g)].map((m) => m[1])
    const urls = [...new Set(vars.map((v) => urlMap[v]).filter(Boolean))]
    if (urls.length) items[id] = urls
  }
  return items
}

function parseDivisions(content, urlMap) {
  const divisions = {}
  const blocks = content.split(/data-name="(?:Division DrpDwn Item|SoftwareWOW Menu)"/)
  for (const block of blocks.slice(1)) {
    const nameMatch = block.match(/data-name="([^"]+)"/)
    const divisionName = nameMatch?.[1]
    const id = DIVISION_NAME_TO_ID[divisionName]
    if (!id) continue
    const section = block.split('15060:2564')[0] ?? block
    const vars = [...section.matchAll(/src=\{(\w+)\}/g)].map((m) => m[1]).slice(0, 4)
    const urls = vars.map((v) => urlMap[v]).filter(Boolean)
    if (urls.length) divisions[id] = urls
  }
  return divisions
}

function download(url, dest) {
  try {
    execSync(`curl.exe -sL "${url}" -o "${dest}"`, { stdio: 'pipe' })
  } catch {
    console.warn(`Failed to download ${dest}`)
  }
}

const companyFile = join(kargerTools, 'c9148a4a-49e7-4faf-ab9c-4949d51c0f77.txt')
const forYouFile = join(kargerTools, '025f8940-ca25-467a-8667-124969adc5b9.txt')
const exploreFile = join(kargerTools, '649e637d-c0a1-4f9e-a52d-9584f3aa3209.txt')

const companyContent = readFileSync(companyFile, 'utf8')
const forYouContent = readFileSync(forYouFile, 'utf8')
const exploreContent = readFileSync(exploreFile, 'utf8')

const companyUrls = parseUrlMap(companyContent)
const forYouUrls = parseUrlMap(forYouContent)
const exploreUrls = parseUrlMap(exploreContent)

const icons = {
  ...parseMenuItems(companyContent, companyUrls),
  ...parseMenuItems(forYouContent, forYouUrls),
  ...parseMenuItems(exploreContent, exploreUrls),
}

const divisions = parseDivisions(companyContent, companyUrls)

// More menu icons reuse explore/company icons where semantic match exists
const moreFallback = {
  meet: icons.aboutUs,
  thinkTank: icons.strategyCentre,
  quotation: icons.buildLaunch,
  clientPortal: icons.softwareTechnology,
  whiteLabel: icons.brandingCreative,
  affiliate: icons.partners,
  insights: icons.portfolio,
  careers: icons.teamExperts,
  helpSupport: icons.whySmbs,
  brandKit: icons.whyUs,
}
for (const [id, urls] of Object.entries(moreFallback)) {
  if (!icons[id] && urls) icons[id] = urls
}

if (!icons.websiteGrowthEnginePackage && forYouUrls.imgVector17) {
  icons.websiteGrowthEnginePackage = [forYouUrls.imgVector17]
}

const iconAssets = {}
for (const [id, urls] of Object.entries(icons)) {
  const layers = urls.map((url, index) => {
    const filename = `${id}${urls.length > 1 ? `-${index}` : ''}.png`
    const publicPath = `/images/wow/nav/icons/${filename}`
    download(url, join(iconsDir, filename))
    return publicPath
  })
  iconAssets[id] = layers.length === 1 ? layers[0] : layers
}

const divisionAssets = {}
for (const [id, urls] of Object.entries(divisions)) {
  const layers = urls.map((url, index) => {
    const filename = `${id}-${index}.png`
    const publicPath = `/images/wow/nav/divisions/${filename}`
    download(url, join(divisionsDir, filename))
    return publicPath
  })
  divisionAssets[id] = layers
}

download(companyUrls.imgImagePlaceholder4, join(cardsDir, 'default.jpg'))
download(exploreUrls.imgImagePlaceholder4, join(cardsDir, 'explore-default.jpg'))

console.log(`Icons: ${Object.keys(iconAssets).length} (Lucide — see nav-assets.ts), Divisions: ${Object.keys(divisionAssets).length} (brand — see nav-brand-assets.ts)`)
console.log('Card images updated in public/images/wow/nav/cards/')
