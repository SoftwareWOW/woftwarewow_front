/**
 * Compares backend Header page schemas with frontend page-registry manifests.
 * Run: node scripts/audit-header-cms-wiring.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const backendApi = path.resolve(__dirname, '../../../backend/src/api')
const registryPath = path.resolve(__dirname, '../lib/strapi/page-registry.ts')

const SKIP_FIELDS = new Set(['hero', 'seo', 'createdAt', 'updatedAt', 'publishedAt', 'locale'])

function camelCase(field) {
  return field.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase())
}

function readBackendSchemas() {
  const pages = {}
  for (const entry of fs.readdirSync(backendApi)) {
    if (!entry.startsWith('superagency-page-')) continue
    const slug = entry.replace('superagency-page-', '')
    const schemaPath = path.join(backendApi, entry, 'content-types', entry, 'schema.json')
    if (!fs.existsSync(schemaPath)) continue
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'))
    const fields = Object.keys(schema.attributes ?? {}).filter((k) => !SKIP_FIELDS.has(k))
    pages[slug] = fields
  }
  return pages
}

function readFrontendManifests() {
  const raw = fs.readFileSync(registryPath, 'utf8')
  const manifests = {}
  const overrideMatch = raw.match(/const FIELD_OVERRIDES[\s\S]*?= (\{[\s\S]*?\n\};)/)
  if (!overrideMatch) return manifests

  const slugBlocks = [...raw.matchAll(/'([a-z0-9-]+)':\s*\[/g)]
  for (const match of slugBlocks) {
    const slug = match[1]
    const nameMatches = [
      ...raw
        .slice(match.index)
        .match(/'([a-z0-9-]+)':\s*\[[\s\S]*?\],/g)?.[0]
        ?.matchAll(/name:\s*'([^']+)'/g) ?? [],
    ]
    if (nameMatches.length) {
      manifests[slug] = nameMatches.map((m) => m[1])
    }
  }
  return manifests
}

const backend = readBackendSchemas()
const frontend = readFrontendManifests()
const slugs = [...new Set([...Object.keys(backend), ...Object.keys(frontend)])].sort()

console.log('Header CMS wiring audit\n')
for (const slug of slugs) {
  const bFields = backend[slug] ?? []
  const fFields = frontend[slug] ?? []
  const missingInFrontend = bFields.filter((f) => !fFields.includes(f))
  const extraInFrontend = fFields.filter((f) => !bFields.includes(f))
  if (missingInFrontend.length || extraInFrontend.length) {
    console.log(`${slug}:`)
    if (missingInFrontend.length) console.log(`  backend only: ${missingInFrontend.join(', ')}`)
    if (extraInFrontend.length) console.log(`  frontend only: ${extraInFrontend.join(', ')}`)
  }
}
console.log(`\nAudited ${slugs.length} header page slugs.`)
