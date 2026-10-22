# Lighthouse optimization baseline

Record metrics before/after changes on the same URL and throttling (mobile, Slow 4G).

## Production reference (pre-optimization)

- URL: `https://wow.onl/en-US`
- Performance ~51, Accessibility ~92, SEO ~92, Best Practices ~100
- Notable: LCP ~4.3s (hero `h1` render delay), TBT ~1670ms, ~1.9MB JS chunk, `robots.txt` / `llms.txt` 500

## Bundle analysis

```bash
pnpm add -D @next/bundle-analyzer
ANALYZE=true pnpm build
```

Opens static reports under `.next/analyze/` — map large client chunks to modules (Iconify JSON, GSAP/Lenis, Framer, Swiper).

## Local build size

```bash
pnpm build
```

Compare First Load JS for `app/[locale]/page` before and after optimizations.

## Post-deploy checks

```bash
curl -I https://wow.onl/robots.txt
curl -I https://wow.onl/llms.txt
curl -I https://wow.onl/sitemap.xml
```

Re-run Lighthouse on `/en-US` after deploy and update this file with measured FCP, LCP, TBT, SI, and category scores.

## Validation (local, post-implementation)

- `pnpm build` — succeeded; routes present: `/robots.txt`, `/llms.txt`, `/sitemap.xml`
- `pnpm lint` — repo-wide lint still reports pre-existing issues outside this scope; changed files have no new IDE diagnostics
- Post-deploy: run mobile Lighthouse on production and record deltas here (required for final score claims)
