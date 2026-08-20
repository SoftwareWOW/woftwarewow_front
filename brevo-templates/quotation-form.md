# Quotation form — Brevo templates and styles

Paste the HTML files in this folder into Brevo transactional templates, then point `.env.local` at the template IDs.

## Setup

1. Open [Brevo](https://app.brevo.com/) → **Transactional** → **Templates** → **New template**.
2. Choose **Code your own**.
3. Create two templates:

| Template | Subject | HTML file | Env var |
| --- | --- | --- | --- |
| Notification (to WOW) | `New quotation request from {{ params.name }}` | `quotation-form-notification.html` | `BREVO_QUOTATION_TEMPLATE_ID` |
| Auto-reply (to the visitor) | `We received your quotation request, {{ params.name }}` | `quotation-form-auto-reply.html` | `BREVO_QUOTATION_AUTO_REPLY_TEMPLATE_ID` (optional) |

4. Save and activate each template.
5. Copy the numeric template IDs into `.env.local`. Reuse the same API key, sender, and inbox as the contact form:

```env
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=WOW Superagency
BREVO_CONTACT_RECIPIENT_EMAIL=
BREVO_QUOTATION_TEMPLATE_ID=
BREVO_QUOTATION_AUTO_REPLY_TEMPLATE_ID=
```

The site posts to `POST /api/quotation`. Auto-reply is skipped if `BREVO_QUOTATION_AUTO_REPLY_TEMPLATE_ID` is empty.

## Params sent by the API

Notification template (`{{ params.* }}`):

| Param | Source |
| --- | --- |
| `name` | Name |
| `email` | Email |
| `company` | Company (or `Not specified`) |
| `phone` | Phone |
| `website` | Website (or `Not specified`) |
| `services` | Comma-separated selected services |
| `projectDescription` | Project description textarea |
| `goals` | What are you trying to achieve? |
| `projectStage` | Project stage (or `Not specified`) |
| `budget` | Budget range (or `Not specified`) |
| `timeline` | Timeline (or `Not specified`) |
| `submittedAt` | UTC timestamp |

Auto-reply also receives `senderName`.

In Brevo, keep a space inside the handlebars (`{{ params.name }}`) so empty values do not leak the placeholder.

## On-site form styles (light / dark)

These match `WowContactForm` and follow the site theme (`bg-backgroundBody` / `dark:bg-dark`). Use them if you restyle the live form; emails cannot follow `prefers-color-scheme` reliably, so the HTML templates stay on the light tokens below.

| Token | Light | Dark |
| --- | --- | --- |
| Page / input background | `#F2F2F2` (`backgroundBody`) | `#151515` (`dark`) |
| Input / chip border | `#1515151A` | `#EDF0F51A` |
| Body / input text | `#151515` (`secondary`) | `#F2F2F2` (`backgroundBody`) |
| Labels / placeholders | `#666666` / `#808080` | `#808080` (`dark-100`) |
| Input focus fill | `#D9D8F3` | `#1F1F1F` |
| Chip default fill | `#F2F2F2` | `#151515` |
| Chip selected | `#9592DE` text `#FFFFFF` | `#292757` text `#FFFFFF` |
| Chip radius | `rounded-radius-sm` | same |
| Primary button | WOW `rv-button-primary` | same |

Suggested CSS for a standalone / Brevo-hosted form that should track light and dark:

```css
.quotation-form {
  color: #151515;
  background: #f2f2f2;
  font-family: Arial, Helvetica, sans-serif;
}

.quotation-form input,
.quotation-form textarea,
.quotation-form select {
  width: 100%;
  border: 1px solid rgba(21, 21, 21, 0.1);
  border-radius: 8px;
  background: #f2f2f2;
  color: #151515;
  padding: 16px 20px;
  font-size: 16px;
}

.quotation-form input:focus,
.quotation-form textarea:focus,
.quotation-form select:focus {
  outline: none;
  background: #d9d8f3;
}

.quotation-chip {
  display: inline-flex;
  border: 1px solid rgba(21, 21, 21, 0.1);
  border-radius: 8px;
  background: #f2f2f2;
  color: #151515;
  padding: 12px 16px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.quotation-chip[aria-pressed="true"],
.quotation-chip.is-selected {
  border-color: transparent;
  background: #9592de;
  color: #ffffff;
}

@media (prefers-color-scheme: dark) {
  .quotation-form {
    color: #f2f2f2;
    background: #151515;
  }

  .quotation-form input,
  .quotation-form textarea,
  .quotation-form select {
    border-color: rgba(237, 240, 245, 0.1);
    background: #151515;
    color: #f2f2f2;
  }

  .quotation-form input:focus,
  .quotation-form textarea:focus,
  .quotation-form select:focus {
    background: #1f1f1f;
  }

  .quotation-chip {
    border-color: rgba(237, 240, 245, 0.1);
    background: #151515;
    color: #f2f2f2;
  }

  .quotation-chip[aria-pressed="true"],
  .quotation-chip.is-selected {
    background: #292757;
    color: #ffffff;
  }
}
```

## Email inline styles

Brevo strips most `<style>` blocks. Keep styles inline as in the HTML files:

| Element | Inline CSS |
| --- | --- |
| Page background | `background-color: #f4f3fb;` |
| Card | `background-color: #ffffff; border-radius: 12px;` |
| Header | `background: linear-gradient(135deg, #9592de 0%, #292757 100%); color: #ffffff;` |
| Body copy | `color: #666666; font-size: 16px; line-height: 1.6;` |
| Field card | `background-color: #f8f8fc; border: 1px solid #ececf5; border-radius: 8px;` |
| Field label | `font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #808080;` |
| Field value | `font-size: 16px; color: #151515;` |
| Email link | `color: #292757; text-decoration: none;` |
| Footer | `border-top: 1px solid #ececf5; background-color: #fafafa; color: #999999;` |
