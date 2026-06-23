import type enUS from './messages/en-US.json'
import type { routing } from './i18n/routing'

type Messages = typeof enUS

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: Messages
  }
}
