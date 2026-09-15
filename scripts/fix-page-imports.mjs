import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkPages(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkPages(full, acc);
    else if (entry.name === 'page.tsx') acc.push(full);
  }
  return acc;
}

for (const filePath of walkPages(path.join(root, 'app', '[locale]'))) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes('resolvePageSections(cms')) continue;
  if (c.includes('resolvePageSections') && c.includes("from '@/lib/strapi/superagency-page-loader'")) {
    if (/import \{[^}]*resolvePageSections/.test(c)) continue;
  }

  if (c.includes("from '@/lib/strapi/superagency-page-loader'")) {
    c = c.replace(
      /import \{([^}]*?)loadSuperagencyPage([^}]*?)\} from '@\/lib\/strapi\/superagency-page-loader'/,
      (m, a, b) => {
        if (m.includes('resolvePageSections')) return m;
        return `import {${a}loadSuperagencyPage, resolvePageSections${b}} from '@/lib/strapi/superagency-page-loader'`;
      },
    );
  } else {
    const anchor = c.indexOf("import { buildPageHero");
    if (anchor > -1) {
      c = c.replace(
        /import \{ buildPageHero \} from '@\/lib\/strapi\/resolve-page-hero'/,
        `import { buildPageHero } from '@/lib/strapi/resolve-page-hero'\nimport { resolvePageSections } from '@/lib/strapi/superagency-page-loader'`,
      );
    }
  }

  fs.writeFileSync(filePath, c);
  console.log('fixed import:', path.relative(root, filePath));
}

console.log('Done.');
