# WOW Hub newsletter — Brevo double opt-in

Footer **Connect** tab posts to `POST /api/newsletter/subscribe`. The server calls Brevo **`POST /v3/contacts/doubleOptinConfirmation`** (not the generic create-contact endpoint). Subscribers are **not** added to the list until they confirm via Brevo’s double opt-in email.

## Brevo dashboard setup

1. **List**
   - Open [Brevo](https://app.brevo.com/) → **Contacts** → **Lists**.
   - Use list **ID 3** (WOW Hub) — set `BREVO_NEWSLETTER_LIST_ID=3` in `.env.local`.
   - Enable **double opt-in** on that list.

2. **Double opt-in template (template #8)**
   - **Marketing → Templates** → your template (e.g. “WOW Hub newsletter subscription”).
   - If the live email is **only a button** with no greeting, update the template (see **Copy for the email body** below) or import `newsletter-double-optin.html` from this repo.
   - **Critical:** the confirm button must use Brevo’s **Double opt-in link** (insert via button link type, not a normal URL). The href must be `{{ doubleoptin }}` — if you only paste HTML, Brevo may not treat it as DOI.
   - **Recommended:** duplicate Brevo’s **Default double opt-in** template, then replace the text blocks with the copy below and keep their DOI button (or add a button → link type **Double opt-in link**).
   - Advanced settings → tag **`optin`** (recommended).
   - Copy the numeric template ID → `BREVO_NEWSLETTER_DOI_TEMPLATE_ID=8`.
   - List setup matches your screenshot: **WOW Hub Newsletter = list #3** → `BREVO_NEWSLETTER_LIST_ID=3`.

### Copy for the email body (Brevo drag-and-drop)

Use these blocks **above** the confirm button so subscribers know what to do.

| Field | Suggested text |
| --- | --- |
| **Subject** | Confirm your WOW Hub subscription |
| **Preheader** | One quick click to confirm your newsletter signup. |
| **Eyebrow / small title** | WOW Hub |
| **Heading** | Confirm your subscription |
| **Line 1** | Hello, |
| **Line 2** | Thank you for signing up for **WOW Hub** — ideas, insights, and practical ways to grow your business. |
| **Line 3** | You’re almost done. Please confirm your email address so we know this inbox is yours and you want to hear from us. |
| **Line 4** | **What to do next:** click the button below. It only takes a second. |
| **Button** | CONFIRM SUBSCRIPTION → link type **Double opt-in link** (not a custom URL) |
| **Under button** | After you confirm, we’ll take you back to WOW Hub on our website. |
| **Footer** | If you didn’t request this email, you can ignore it — you won’t be subscribed. — WOW Superagency |

Reference layout: `brevo-templates/newsletter-double-optin.html` (brand purple button `#615CCE`).

3. **Sender**
   - Use a **verified** sender (`BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`) — same as contact/quotation forms.

4. **Confirmation redirect**
   - The API sends `redirectionUrl` as `{origin}/{locale}/hub` (e.g. `https://www.wow.onl/en-US/hub`).
   - Ensure your Brevo template confirmation flow allows this redirect after the user clicks the email link.
   - For production, set `SITE_URL` if the server cannot infer origin from request headers.

5. **API key**
   - `BREVO_API_KEY` must allow **Contacts** API (create/update contacts, double opt-in).

6. **Authorized IPs (common local dev failure)**
   - If Brevo **Security → Authorized IPs** is enabled, add your dev machine and production server IPs, or disable IP filtering for testing.
   - Without this, the API returns **401** and the footer shows “Unable to start your subscription…”.

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
| Valid email + consent | `200`, success toast: “Thanks for joining WOW Hub! Please check your inbox…”; DOI email sent; contact **not** fully on list until link clicked |
| Invalid email | `400`, inline error |
| Consent unchecked | Client blocks submit; server returns `400` if bypassed |
| Honeypot filled | `400` |
| Already subscribed (on list 3) | `200` + `already_subscribed` message (no false “check inbox” success copy) |
| Removed from list / never confirmed | DOI email sent again |
| Blacklisted contact | `400`, safe error |
| Missing `BREVO_API_KEY` / list / template | `503` |
| Brevo API failure | `502`, no success UI |
| Rate limit (>5 / 15 min / IP) | `429` |
| Complete DOI in email | Redirect to `/en-US/hub` (or `/fr-CA/hub`) |

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
