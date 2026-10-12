# WOW Hub newsletter — Brevo double opt-in

Footer **Connect** tab posts to `POST /api/newsletter/subscribe`. Subscribers are **not** added to the list until they confirm via Brevo’s double opt-in email.

## Brevo dashboard setup

1. **List**
   - Open [Brevo](https://app.brevo.com/) → **Contacts** → **Lists**.
   - Use list **ID 3** (WOW Hub) — set `BREVO_NEWSLETTER_LIST_ID=3` in `.env.local`.
   - Enable **double opt-in** on that list.

2. **Double opt-in template**
   - **Campaigns** / **Templates** → create or edit a **Double opt-in** (confirmation) template.
   - Brand the subject and body for WOW Hub (see `newsletter-double-optin.html` as a starting layout).
   - Copy the numeric template ID → `BREVO_NEWSLETTER_DOI_TEMPLATE_ID`.

3. **Sender**
   - Use a **verified** sender (`BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`) — same as contact/quotation forms.

4. **Confirmation redirect**
   - The API sends `redirectionUrl` as `{origin}/{locale}/wowhub` (e.g. `https://www.wow.onl/en-US/wowhub`).
   - Ensure your Brevo template confirmation flow allows this redirect after the user clicks the email link.
   - For production, set `SITE_URL` if the server cannot infer origin from request headers.

5. **API key**
   - `BREVO_API_KEY` must allow **Contacts** API (create/update contacts, double opt-in).

## Environment variables

```env
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=WOW Superagency
BREVO_NEWSLETTER_LIST_ID=3
BREVO_NEWSLETTER_DOI_TEMPLATE_ID=
SITE_URL=https://www.wow.onl
```

Do **not** duplicate the list ID under another variable name. Do **not** expose `BREVO_API_KEY` to the client.

## Manual QA checklist

Run locally with valid Brevo credentials, then verify:

| Scenario | Expected |
| --- | --- |
| Valid email + consent | `200`, inline success: “Thanks for joining WOW Hub! Please check your inbox…”; DOI email sent; contact **not** fully on list until link clicked |
| Invalid email | `400`, inline error |
| Consent unchecked | Client blocks submit; server returns `400` if bypassed |
| Honeypot filled | `400` |
| Already subscribed (on list 3) | `200` + `already_subscribed` message (no false “check inbox” success copy) |
| Removed from list / never confirmed | DOI email sent again |
| Blacklisted contact | `400`, safe error |
| Missing `BREVO_API_KEY` / list / template | `503` |
| Brevo API failure | `502`, no success UI |
| Rate limit (>5 / 15 min / IP) | `429` |
| Complete DOI in email | Redirect to `/en-US/wowhub` (or `/fr-CA/wowhub`) |

## Automated checks (project)

After code changes:

```bash
pnpm lint
pnpm build
```

## Test results (implementation run)

| Check | Result |
| --- | --- |
| ESLint (newsletter + Brevo lib files) | Passed after Prettier format |
| `pnpm build` | Not run in CI here — run locally before deploy |
| Live Brevo DOI email | **Requires your** `BREVO_API_KEY`, list 3, and `BREVO_NEWSLETTER_DOI_TEMPLATE_ID` in `.env.local` |

If any Brevo setting above is missing, the API returns **503** and logs a server error; configure Brevo before expecting live subscriptions.

## Rate limiting note

The API uses an in-memory limiter (5 requests / 15 minutes / IP). On multi-instance serverless hosts, use Vercel Firewall or a shared store for production-grade limits.
