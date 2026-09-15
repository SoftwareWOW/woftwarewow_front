import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

function walkHeroFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHeroFiles(full, acc);
    else if (entry.name.endsWith('Hero.tsx')) acc.push(full);
  }
  return acc;
}

const badPattern = `<RevealWrapper className="reveal-me mt-3">\n            {description ? (\n            <RevealWrapper className="reveal-me mt-3">`;
const goodPattern = `{description ? (\n            <RevealWrapper className="reveal-me mt-3">`;
const badClose = `          ) : null}\n          </RevealWrapper>\n\n          <RevealWrapper className="reveal-me mt-7`;
const goodClose = `          ) : null}\n\n          <RevealWrapper className="reveal-me mt-7`;

for (const filePath of walkHeroFiles(path.join(root, 'app', '[locale]'))) {
  let c = fs.readFileSync(filePath, 'utf8');
  if (!c.includes(badPattern)) continue;
  c = c.replace(badPattern, goodPattern);
  c = c.replace(badClose, goodClose);
  fs.writeFileSync(filePath, c);
  console.log('fixed:', path.relative(root, filePath));
}

console.log('Done.');
