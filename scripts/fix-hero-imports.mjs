import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkHeroFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHeroFiles(full, acc);
    else if (entry.name.endsWith('Hero.tsx')) acc.push(path.relative(root, full).replace(/\\/g, '/'));
  }
  return acc;
}

const files = walkHeroFiles(path.join(root, 'app', '[locale]'));

for (const rel of files) {
  const filePath = path.join(root, rel);
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes('CmsHeroComponentProps')) continue;
  if (c.includes("import type { CmsHeroComponentProps }")) continue;

  c = c.replace(
    /(import SectionLabel from '@\/components\/wow\/shared\/SectionLabel'\n)/,
    `$1import type { CmsHeroComponentProps } from '@/lib/strapi/cms-section-props'\n`,
  );
  fs.writeFileSync(filePath, c);
  console.log('import added:', rel);
}

// Fix nested RevealWrapper in description
for (const rel of files) {
  const filePath = path.join(root, rel);
  let c = fs.readFileSync(filePath, 'utf8');
  const bad = `<RevealWrapper className="reveal-me mt-3">\n            {description ? (\n            <RevealWrapper className="reveal-me mt-3">`;
  if (c.includes(bad)) {
    c = c.replace(
      bad,
      '{description ? (\n            <RevealWrapper className="reveal-me mt-3">',
    );
    c = c.replace(
      `          ) : null}\n          </RevealWrapper>\n\n          <RevealWrapper className="reveal-me mt-7`,
      `          ) : null}\n\n          <RevealWrapper className="reveal-me mt-7`,
    );
    fs.writeFileSync(filePath, c);
    console.log('fixed nested reveal:', rel);
  }
}

console.log('Done.');
