import { readFileSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { navigation } from './navigation-data.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const messagesDir = join(__dirname, '..', 'messages')
const locales = ['en-CA', 'en-US', 'en-GB', 'fr-CA', 'ar-SA', 'ar-AE']

for (const locale of locales) {
  const filePath = join(messagesDir, `${locale}.json`)
  const data = JSON.parse(readFileSync(filePath, 'utf8'))
  data.navigation = navigation
  writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
  console.log(`Updated ${locale}.json`)
}
