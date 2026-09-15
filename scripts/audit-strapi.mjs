/**
 * Audit Strapi CMS endpoints — logs which pages have populated content.
 * Usage: node scripts/audit-strapi.mjs
 */
import { config } from 'dotenv';

config({ path: '.env.local' });
config({ path: '.env' });

const STRAPI_URL = (process.env.STRAPI_URL ?? '').replace(/\/$/, '');
const TOKEN = process.env.STRAPI_API_TOKEN;

if (!STRAPI_URL) {
  console.error('STRAPI_URL is not configured. Set it in .env.local or .env');
  process.exit(1);
}

const LOCALES = ['en-US', 'fr-CA'];

const ENDPOINTS = [
  'superagency-header',
  'superagency-footer',
  'superagency-hero',
  'superagency-divisions',
  'superagency-faqs',
  'wowsuperagencyprojects',
  'superagency-page-about',
  'superagency-page-about-why-us',
  'superagency-page-build-and-launch',
  'superagency-page-startup-launch',
  'superagency-page-professional-services',
  'superagency-page-marketing-and-growth',
  'superagency-footer-resource-pages?filters[pageKey][$eq]=faq',
];

async function fetchEndpoint(path, locale) {
  const url = `${STRAPI_URL}/api/${path}${path.includes('?') ? '&' : '?'}locale=${locale}&populate=*`;
  const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};
  const res = await fetch(url, { headers });
  if (!res.ok) return { ok: false, status: res.status };
  const contentType = res.headers.get('content-type') ?? '';
  if (!contentType.includes('json')) {
    return { ok: false, status: `non-json (${res.status})` };
  }
  const json = await res.json();
  const data = json.data;
  const fields =
    data ?
      Object.entries(Array.isArray(data) ? (data[0] ?? {}) : data)
        .filter(([k, v]) => k !== 'id' && k !== 'documentId' && v != null)
        .map(([k]) => k)
    : [];
  return { ok: true, fields };
}

console.log(`Auditing Strapi at ${STRAPI_URL}\n`);

for (const locale of LOCALES) {
  console.log(`--- Locale: ${locale} ---`);
  for (const endpoint of ENDPOINTS) {
    const result = await fetchEndpoint(endpoint, locale);
    if (!result.ok) {
      console.log(`  ${endpoint}: HTTP ${result.status}`);
    } else if (!result.fields.length) {
      console.log(`  ${endpoint}: empty`);
    } else {
      console.log(`  ${endpoint}: ${result.fields.join(', ')}`);
    }
  }
  console.log('');
}

console.log('Audit complete.');
