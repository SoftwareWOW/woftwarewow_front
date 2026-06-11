import type enCA from './messages/en-CA.json'
import type { routing } from './i18n/routing'

type Messages = typeof enCA

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: Messages
  }
}
